goog.provide('plaza.apps.main');

goog.require('goog.soy');
goog.require('plaza.apps.Apps');
goog.require('plaza.plazaapp');



/**
 * Entry point for the apps application.
 */
plaza.apps.main = function() {
  var plazaContainerEl =
      goog.soy.renderElement(document.body, plaza.plazaapp.main);

  var apps = new plaza.apps.Apps();
  apps.start(plazaContainerEl);
};

// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('plaza.apps.main', plaza.apps.main);
