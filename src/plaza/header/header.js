goog.provide('plaza.header.Header');

goog.require('goog.dom');
goog.require('goog.soy');
goog.require('goog.ui.Button');
goog.require('goog.ui.ButtonRenderer');
goog.require('goog.ui.Component');
goog.require('goog.ui.MenuButton');
goog.require('plaza.header.MainMenu');
goog.require('plaza.header.header');



/**
 * @constructor
 * @struct
 * @param {string} title The title for the header.
 * @extends {goog.ui.Component}
 */
plaza.header.Header = function(title) {
  plaza.header.Header.base(this, 'constructor');

  /** @private {string} */
  this.title_ = title;

  /** @private {plaza.header.MainMenu} */
  this.menu_ = new plaza.header.MainMenu();

  /** @private {goog.ui.MenuButton} */
  this.menuButton_ = new goog.ui.MenuButton(
      goog.soy.renderAsElement(plaza.header.header.menubutton),
      this.menu_);

  /** @private {goog.ui.Button} */
  this.logoButton_ = new goog.ui.Button(
      goog.soy.renderAsElement(plaza.header.header.logobutton),
      new goog.ui.ButtonRenderer());
};
goog.inherits(plaza.header.Header, goog.ui.Component);


/** @override */
plaza.header.Header.prototype.createDom = function() {
  this.setElementInternal(goog.soy.renderAsElement(
      plaza.header.header.main, {
        title: this.title_
      }));

  var menuContainer = this.getRequiredElementByClass(
      goog.getCssName('plaza-header-navigation'));
  this.menuButton_.render(menuContainer);

  var logoContainer = this.getRequiredElementByClass(
      goog.getCssName('plaza-header-logo'));
  this.logoButton_.render(logoContainer);
};


/** @override */
plaza.header.Header.prototype.enterDocument = function() {
  plaza.header.Header.base(this, 'enterDocument');

  this.getHandler()
      .listen(
          this.logoButton_,
          goog.ui.Component.EventType.ACTION,
          this.handleLogoClick_);
};


/**
 * Handle a click on the logo button.
 * @param {goog.events.Event} e
 */
plaza.header.Header.prototype.handleLogoClick_ = function(e) {
  window.location.href = '/apps';
};
