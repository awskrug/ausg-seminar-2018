"""
WSGI config for kakao project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/howto/deployment/wsgi/
"""

import os, sys
sys.path.append('/home/ubuntu/kakao')
sys.path.append('/home/ubuntu/kakao/kakao/lib/python3.5/site-packages')
from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "kakao.settings")

application = get_wsgi_application()
