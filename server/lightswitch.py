import logging
import json
from google.appengine.api import urlfetch
from flask import Response, request

def toggleLights():
    url='http://100.37.183.156:8888/lights'
    logging.info(url)
    try:
        result = urlfetch.fetch(url)
        message = 'Unknown error with lights'
        if result.status_code == 200:
            message = json.loads(result.content)['message']
        data = {
            'status' : result.status_code,
            'message' : message
        }
        js = json.dumps(data)
        resp = Response(js, status=200, mimetype='application/json')
        return resp
    except urlfetch.Error:
        logging.exception('Caught exception fetching url')
        data = {
            'status': 404,
            'message': 'Lights not found'
        }
        js = json.dumps(data)
        resp = Response(js, status=404, mimetype='application/json')
        return resp
