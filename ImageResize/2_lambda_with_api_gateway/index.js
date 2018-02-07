const AWS = require('aws-sdk');
const multipart = require("parse-multipart");
const s3 = new AWS.S3();
const bluebird = require('bluebird');

exports.handler = function(event, context) {

    let result = []

    const bodyBuffer = new Buffer( event[ 'body-json' ].toString(), 'base64' );

    const boundary = multipart.getBoundary( event.params.header[ 'Content-Type' ] )

    const parts = multipart.Parse( bodyBuffer, boundary )

    const files = getFiles( parts )

    return bluebird.map( files, file => {
        console.log('UploadCall')
        return upload( file )
        .then(
            data => {
                result.push( {
                    'bucket': data.Bucket,
                    'key': data.key,
                    'fileUrl': file.uploadFile.fullPath })
                console.log( `DATA => ${JSON.stringify( data, null, 2 )}` )
            },
            err => {
                console.log( `S3 UPLOAD ERR => ${err}` )
            }
        )
    })
    .then(_=> {
        return context.succeed(result)
    })
}

let upload = function( file ) {
    console.log( 'PutObject Call')
    return s3.upload( file.params ).promise();
};

let getFiles = function( parts ) {
    //let fileExt = 'png'
    let files = [];
    parts.forEach( part => {

        const buffer = part.data


        const fileName = part.filename
        const fileFullName = fileName;

        const originBucket = '<S3-ORIGIN-BUCKET-NAME>/images'
        const filefullPath = `https://s3.ap-northeast-2.amazonaws.com/${originBucket}/${fileFullName}`;


        const params = {
            Bucket: originBucket,
            Key: fileFullName,
            Body: buffer
        };

        const uploadFile = {
            size: buffer.toString( 'ascii' ).length,
            type: part.type,
            name: fileName,
            fullPath: filefullPath
        };
        files.push( { params, uploadFile } )
    } );
    return files
  }
