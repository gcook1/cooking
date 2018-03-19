goog.provide('plaza.PlazaApp');

goog.require('goog.Disposable');
goog.require('plaza.header.Header');



/**
 * Base app class for plaza-app pages.
 * @constructor
 * @struct
 * @param {string} title The title for the header.
 * @extends {goog.Disposable}
 */
plaza.PlazaApp = function(title) {
  /** @private {string} */
  this.title_ = title;

  /** @private {plaza.header.Header} */
  this.header_ = new plaza.header.Header(this.title_);
};
goog.inherits(plaza.PlazaApp, goog.Disposable);


/**
 * Initializes the app page with a header.
 * @param {Element} element The plaza app element.
 */
plaza.PlazaApp.prototype.start = function(element) {
  var headerContainer =
      goog.dom.getRequiredElementByClass(
        goog.getCssName('plaza-plazaapp-header'));
  this.header_.render(headerContainer);
};
