goog.provide('plaza.jams.Jams');

goog.require('goog.dom');
goog.require('goog.soy');
goog.require('plaza.PlazaApp');
goog.require('plaza.jams.jams');


/**
 * Jams worth sharing application.
 * @constructor
 * @struct
 * @extends {plaza.PlazaApp}
 */
plaza.jams.Jams = function() {
  plaza.jams.Jams.base(this, 'constructor', 'jams');
};
goog.inherits(plaza.jams.Jams, plaza.PlazaApp);


/**
 * Initializes the jams app.
 * @param {Element} element The plaza app element.
 */
plaza.jams.Jams.prototype.start = function(element) {
  plaza.jams.Jams.base(this, 'start', element);
  var appContainer =
      goog.dom.getRequiredElementByClass(
        goog.getCssName('plaza-plazaapp-container'));
  goog.soy.renderElement(appContainer, plaza.jams.jams.main);
};
