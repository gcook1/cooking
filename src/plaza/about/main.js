goog.provide('plaza.about.main');

goog.require('goog.soy');
goog.require('plaza.about.About');
goog.require('plaza.plazaapp');



/**
 * Entry point for the about application.
 */
plaza.about.main = function() {
  var plazaContainerEl =
      goog.soy.renderElement(document.body, plaza.plazaapp.main);

  var about = new plaza.about.About();
  about.start(plazaContainerEl);
};

// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('plaza.about.main', plaza.about.main);
