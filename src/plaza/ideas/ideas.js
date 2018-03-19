goog.provide('plaza.ideas.Ideas');

goog.require('goog.dom');
goog.require('goog.soy');
goog.require('plaza.PlazaApp');
goog.require('plaza.ideas.ideas');


/**
 * Ideas worth sharing application.
 * @constructor
 * @struct
 * @extends {plaza.PlazaApp}
 */
plaza.ideas.Ideas = function() {
  plaza.ideas.Ideas.base(this, 'constructor', 'ideas');
};
goog.inherits(plaza.ideas.Ideas, plaza.PlazaApp);


/**
 * Initializes the ideas app.
 * @param {Element} element The plaza app element.
 */
plaza.ideas.Ideas.prototype.start = function(element) {
  plaza.ideas.Ideas.base(this, 'start', element);
  var appContainer =
      goog.dom.getRequiredElementByClass(
        goog.getCssName('plaza-plazaapp-container'));
  goog.soy.renderElement(appContainer, plaza.ideas.ideas.main);
};
