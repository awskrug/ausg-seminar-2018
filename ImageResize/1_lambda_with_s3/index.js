var async = require('async'); // 'async'모듈을 임포트하여 더 용이하게 함수 작성
var AWS = require('aws-sdk'); // AWS Lambda 실행 환경에 기본값으로 설치되어 있음
var gm = require('gm')
  .subClass({ imageMagick: true }); // imageMagick 연동 설정
var util = require('util');

// 썸네일 사이즈 기본값
var MAX_WIDTH  = 200;
var MAX_HEIGHT = 200;

var s3 = new AWS.S3();

exports.handler = function(event, context, callback) {

  // 이벤트를 발생시킨 버킷 및 S3객체의 키값 가져오기
  var srcBucket = event.Records[0].s3.bucket.name;
  var srcKey    = event.Records[0].s3.object.key;
  // 이미지가 저장될 버킷 설정
  var dstBucket = srcBucket + "-resized";
  var dstKey    = srcKey;

  // 버킷이 같으면 무한 루프
  if (srcBucket == dstBucket) {
    callback("Source and destination buckets are the same.");
    return;
  }

  // 이미지 타입에 대한 예외처리
  var typeMatch = srcKey.match(/\.([^.]*)$/);
  if (!typeMatch) {
    callback("Could not determine the image type.");
    return;
  }
  var imageType = typeMatch[1];
  if (imageType != "jpg" && imageType != "png") {
    callback('Unsupported image type: ${imageType}');
    return;
  }


  async.waterfall([
      function download(next) {
        // 이미지를 S3에서 가져옴
        s3.getObject({
            Bucket: srcBucket,
            Key: srcKey
          },
          next);
      },
      function transform(response, next) {
        gm(response.Body).size(function(err, size) {
          // 이미지를 변환하고 섬네일 생성
          var scalingFactor = Math.min(
            MAX_WIDTH / size.width,
            MAX_HEIGHT / size.height
          );
          var width  = scalingFactor * size.width;
          var height = scalingFactor * size.height;

          this.resize(width, height)
            .toBuffer(imageType, function(err, buffer) {
              if (err) {
                next(err);
              } else {
                next(null, response.ContentType, buffer);
              }
            });
        });
      },
      function upload(contentType, data, next) {
        // 섬네일을 s3에 업로드하는 함수
        s3.putObject({
            Bucket: dstBucket,
            Key: dstKey,
            Body: data,
            ContentType: contentType
          },
          next);
      }
    ], function (err) {
      if (err) {
        console.error(
          'Unable to resize ' + srcBucket + '/' + srcKey +
          ' and upload to ' + dstBucket + '/' + dstKey +
          ' due to an error: ' + err
        );
      } else {
        console.log(
          'Successfully resized ' + srcBucket + '/' + srcKey +
          ' and uploaded to ' + dstBucket + '/' + dstKey
        );
      }

      callback(null, "message");
    }
  );
};
