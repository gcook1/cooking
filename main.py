import logging
import json
from google.appengine.api import urlfetch
from flask import Flask, Response, render_template, request
from server.lightswitch import toggleLights

app = Flask(__name__)

@app.route('/')
def home():
    return render_template(
        'plaza/base.html',
        title='Home',
        source='static/javascript/plaza/home/compiled.js',
        main='plaza.home.main();')

# @app.route('/ideas')
# def ideas():
#     return render_template(
#         'plaza/base.html',
#         title='Ideas',
#         source='static/javascript/plaza/ideas/compiled.js',
#         main='plaza.ideas.main();')

@app.route('/jams')
def jams():
    return render_template(
        'plaza/base.html',
        title='Jams',
        source='static/javascript/plaza/jams/compiled.js',
        main='plaza.jams.main();')

@app.route('/about')
def about():
    return render_template(
        'plaza/base.html',
        title='About',
        source='static/javascript/plaza/about/compiled.js',
        main='plaza.about.main();')
		
@app.route('/films')
def films():
    return render_template(
        'plaza/base.html',
        title='Films',
        source='static/javascript/plaza/films/compiled.js',
        main='plaza.films.main();')

@app.route('/apps')
def apps():
    return render_template(
        'plaza/base.html',
        title='Apps',
        source='static/javascript/plaza/apps/compiled.js',
        main='plaza.apps.main();')

@app.route('/lights', methods = ['GET'])
def lights():
    return toggleLights()

@app.errorhandler(500)
def server_error(e):
    # Log the error and stacktrace.
    logging.exception('An error occurred during a request.')
    return 'An internal error occurred.', 500
