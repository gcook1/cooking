goog.provide('plaza.films.Films');

goog.require('goog.dom');
goog.require('goog.soy');
goog.require('plaza.PlazaApp');
goog.require('plaza.films.films');


/**
 * Films.
 * @constructor
 * @struct
 * @extends {plaza.PlazaApp}
 */
plaza.films.Films = function() {
  plaza.films.Films.base(this, 'constructor', 'films');
};
goog.inherits(plaza.films.Films, plaza.PlazaApp);


/**
 * Initializes the films app.
 * @param {Element} element The plaza app element.
 */
plaza.films.Films.prototype.start = function(element) {
  plaza.films.Films.base(this, 'start', element);
  var appContainer =
      goog.dom.getRequiredElementByClass(
        goog.getCssName('plaza-plazaapp-container'));
  goog.soy.renderElement(appContainer, plaza.films.films.main);
};
