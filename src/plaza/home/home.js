goog.provide('plaza.home.Home');

goog.require('goog.dom');
goog.require('goog.soy');
goog.require('plaza.PlazaApp');
goog.require('plaza.home.home');


/**
 * Home screen application.
 * @constructor
 * @struct
 * @extends {plaza.PlazaApp}
 */
plaza.home.Home = function() {
  plaza.home.Home.base(this, 'constructor', 'home');
};
goog.inherits(plaza.home.Home, plaza.PlazaApp);


/**
 * Initializes the home page.
 * @param {Element} element The plaza app element.
 */
plaza.home.Home.prototype.start = function(element) {
  plaza.home.Home.base(this, 'start', element);
  var appContainer =
      goog.dom.getRequiredElementByClass(
        goog.getCssName('plaza-plazaapp-container'));
  goog.soy.renderElement(appContainer, plaza.home.home.main);
};
