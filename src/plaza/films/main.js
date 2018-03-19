goog.provide('plaza.films.main');

goog.require('goog.soy');
goog.require('plaza.films.Films');
goog.require('plaza.plazaapp');



/**
 * Entry point for the films application.
 */
plaza.films.main = function() {
  var plazaContainerEl =
      goog.soy.renderElement(document.body, plaza.plazaapp.main);

  var films = new plaza.films.Films();
  films.start(plazaContainerEl);
};

//Autosize Iframes
plaza.jams.resizeIframe = function(obj) {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
};

// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('plaza.films.main', plaza.films.main);
