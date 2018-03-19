goog.provide('plaza.header.MainMenu');

goog.require('goog.dom');
goog.require('goog.soy');
goog.require('goog.ui.Component');
goog.require('goog.ui.Menu');
goog.require('goog.ui.MenuButton');
goog.require('goog.ui.MenuItem');
goog.require('goog.window');
goog.require('plaza.header.header');



/**
 * @constructor
 * @struct
 * @extends {goog.ui.Menu}
 */
plaza.header.MainMenu = function() {
  plaza.header.MainMenu.base(this, 'constructor');

  this.menuHome_ = new goog.ui.MenuItem('home');
  this.addChild(this.menuHome_, true);

  // this.menuIdeas_ = new goog.ui.MenuItem('ideas');
  // this.addChild(this.menuIdeas_, true);

  this.menuJams_ = new goog.ui.MenuItem('jams');
  this.addChild(this.menuJams_, true);

  this.menuFilms_ = new goog.ui.MenuItem('films');
  this.addChild(this.menuFilms_, true);

  this.menuAbout_ = new goog.ui.MenuItem('about');
  this.addChild(this.menuAbout_, true);
  
};
goog.inherits(plaza.header.MainMenu, goog.ui.Menu);


/**
 * Add the menu items.
 * @override
 */
plaza.header.MainMenu.prototype.enterDocument = function() {
  plaza.header.MainMenu.base(this, 'enterDocument');
  this.getHandler()
      .listen(
          this.menuHome_,
          goog.ui.Component.EventType.ACTION,
          this.handleHomeClick_)
      // .listen(
      //     this.menuIdeas_,
      //     goog.ui.Component.EventType.ACTION,
      //     this.handleIdeasClick_)
      .listen(
          this.menuJams_,
          goog.ui.Component.EventType.ACTION,
          this.handleJamsClick_)
      .listen(
          this.menuFilms_,
          goog.ui.Component.EventType.ACTION,
          this.handleFilmsClick_)  
      .listen(
          this.menuAbout_,
          goog.ui.Component.EventType.ACTION,
          this.handleAboutClick_)
};


/**
 * Handle a click on the home button.
 * @param {goog.events.Event} e
 */
plaza.header.MainMenu.prototype.handleHomeClick_ = function(e) {
  window.location.href = '/';
}


// /**
//  * Handle a click on the ideas button.
//  * @param {goog.events.Event} e
//  */
// plaza.header.MainMenu.prototype.handleIdeasClick_ = function(e) {
//   window.location.href = '/ideas';
// }


/**
 * Handle a click on the jams button.
 * @param {goog.events.Event} e
 */
plaza.header.MainMenu.prototype.handleJamsClick_ = function(e) {
  window.location.href = '/jams';
}

/**
 * Handle a click on the films button.
 * @param {goog.events.Event} e
 */
plaza.header.MainMenu.prototype.handleFilmsClick_ = function(e) {
  window.location.href = '/films';
}

/**
 * Handle a click on the about button.
 * @param {goog.events.Event} e
 */
plaza.header.MainMenu.prototype.handleAboutClick_ = function(e) {
  window.location.href = '/about';
}


