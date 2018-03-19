goog.provide('plaza.about.About');

goog.require('goog.dom');
goog.require('goog.soy');
goog.require('plaza.PlazaApp');
goog.require('plaza.about.about');


/**
 * About info application.
 * @constructor
 * @struct
 * @extends {plaza.PlazaApp}
 */
plaza.about.About = function() {
  plaza.about.About.base(this, 'constructor', 'about');
};
goog.inherits(plaza.about.About, plaza.PlazaApp);


/**
 * Initializes the about app.
 * @param {Element} element The plaza app element.
 */
plaza.about.About.prototype.start = function(element) {
  plaza.about.About.base(this, 'start', element);
  var appContainer =
      goog.dom.getRequiredElementByClass(
        goog.getCssName('plaza-plazaapp-container'));
  goog.soy.renderElement(appContainer, plaza.about.about.main);
};
