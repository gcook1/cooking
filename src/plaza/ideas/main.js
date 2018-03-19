goog.provide('plaza.ideas.main');

goog.require('goog.soy');
goog.require('plaza.ideas.Ideas');
goog.require('plaza.plazaapp');



/**
 * Entry point for the ideas application.
 */
plaza.ideas.main = function() {
  var plazaContainerEl =
      goog.soy.renderElement(document.body, plaza.plazaapp.main);

  var ideas = new plaza.ideas.Ideas();
  ideas.start(plazaContainerEl);
};

// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('plaza.ideas.main', plaza.ideas.main);
