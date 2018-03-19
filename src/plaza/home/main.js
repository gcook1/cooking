goog.provide('plaza.home.main');

goog.require('goog.soy');
goog.require('plaza.home.Home');
goog.require('plaza.plazaapp');



/**
 * Entry point for the home application.
 */
plaza.home.main = function() {
  var plazaContainerEl =
      goog.soy.renderElement(document.body, plaza.plazaapp.main);

  var home = new plaza.home.Home();
  home.start(plazaContainerEl);
};

// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('plaza.home.main', plaza.home.main);
