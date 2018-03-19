goog.provide('plaza.apps.Apps');

goog.require('goog.dom');
goog.require('goog.events.EventHandler');
goog.require('goog.net.XhrIo');
goog.require('goog.soy');
goog.require('goog.ui.Button');
goog.require('goog.ui.ButtonRenderer');
goog.require('plaza.apps.apps');
goog.require('plaza.PlazaApp');


/**
 * Apps worth sharing application.
 * @constructor
 * @struct
 * @extends {plaza.PlazaApp}
 */
plaza.apps.Apps = function() {
  plaza.apps.Apps.base(this, 'constructor', '#');

  /** @private {goog.ui.Button} */
  this.lightsButton_ = new goog.ui.Button(
      goog.soy.renderAsElement(plaza.apps.apps.lightbuttonunknown),
      new goog.ui.ButtonRenderer());


  /** @private {goog.ui.Button} */
  this.docsButton_ = new goog.ui.Button(
      goog.soy.renderAsElement(plaza.apps.apps.docsbutton),
      new goog.ui.ButtonRenderer());
};
goog.inherits(plaza.apps.Apps, plaza.PlazaApp);


/**
 * @const {string}
 * @private
 */
plaza.apps.Apps.LIGHT_URL_ = '/lights';
// plaza.apps.Apps.LIGHT_URL_ = 'http://www.jordankings.com/lights';
// plaza.apps.Apps.LIGHT_URL_ = 'http://localhost:8080/lights';


/**
 * @const {string}
 * @private
 */
plaza.apps.Apps.DOCS_URL_ = 'https://docs.google.com/document/d/13z1P1iX2k4joZtEAFEhmMioPjQ_rD4AM8q6eVqfVhfM/edit';

/**
 * Initializes the apps app.
 * @param {Element} element The plaza app element.
 */
plaza.apps.Apps.prototype.start = function(element) {
  plaza.apps.Apps.base(this, 'start', element);
  var appContainer =
      goog.dom.getRequiredElementByClass(
          goog.getCssName('plaza-plazaapp-container'));
  goog.soy.renderElement(appContainer, plaza.apps.apps.main);

  var lightsContainer =
      goog.dom.getRequiredElementByClass(
          goog.getCssName('plaza-apps-lights-container'));
  this.lightsButton_.render(lightsContainer);

  var docsContainer =
      goog.dom.getRequiredElementByClass(
          goog.getCssName('plaza-apps-docs-container'));
  this.docsButton_.render(docsContainer);

  // this.getHandler()
  new goog.events.EventHandler()
      .listen(
          this.lightsButton_,
          goog.ui.Component.EventType.ACTION,
          goog.bind(this.handleLightsClick_, this))
      .listen(
          this.docsButton_,
          goog.ui.Component.EventType.ACTION,
          goog.bind(this.handleDocsClick_, this));
};


/**
 * Handle a click on the lights button.
 * @param {goog.events.Event} e
 */
plaza.apps.Apps.prototype.handleLightsClick_ = function(e) {
  goog.net.XhrIo.send(
    plaza.apps.Apps.LIGHT_URL_,
    goog.bind(function(e) {
      var xhr = e.target;
      var obj = xhr.getResponseJson();
      var isLightOn = obj['message'] == 'on';
      this.setLightsButton_(isLightOn);
    }, this));
};


/**
 * Update the lights button content to reflect light state.
 * @param {boolean} isLightOn
 * @private
 */
plaza.apps.Apps.prototype.setLightsButton_ = function(isLightOn) {
  this.lightsButton_.setContent(
      goog.soy.renderAsElement(
          isLightOn ?
              plaza.apps.apps.lightbuttonon :
              plaza.apps.apps.lightbuttonoff));
};


/**
 * Handle a click on the docs button.
 * @param {goog.events.Event} e
 */
plaza.apps.Apps.prototype.handleDocsClick_ = function(e) {
  window.location.href = plaza.apps.Apps.DOCS_URL_;
};
