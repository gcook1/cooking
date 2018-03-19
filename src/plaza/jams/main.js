goog.provide('plaza.jams.main');

goog.require('goog.soy');
goog.require('plaza.jams.Jams');
goog.require('plaza.plazaapp');



/**
 * Entry point for the jams application.
 */
plaza.jams.main = function() {
  var plazaContainerEl =
      goog.soy.renderElement(document.body, plaza.plazaapp.main);
	  
  var jams = new plaza.jams.Jams();
  jams.start(plazaContainerEl);
};

//Autosize Iframes
plaza.jams.resizeIframe = function(obj) {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
};

// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('plaza.jams.main', plaza.jams.main);
