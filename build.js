var closureBuilder = require('closure-builder');
var glob = closureBuilder.globSupport();

closureBuilder.build({
  name: 'plaza.home.main',
  srcs: glob([
    'src/**/*.js',
    'src/**/*.soy'
  ]),
  deps: [],
  out: 'static/javascript/plaza/home/compiled.js'
  // options: {
  //   closure: {
  //     debug: '',
  //     formatting: 'PRETTY_PRINT'
  //   }
  // }
});

closureBuilder.build({
  name: 'plaza_gss',
  srcs: glob([
    'src/**/*.gss'
  ]),
  out: 'static/css/plaza/compiled.css'
});

closureBuilder.build({
  name: 'plaza.ideas.main',
  srcs: glob([
    'src/**/*.js',
    'src/**/*.soy'
  ]),
  deps: [],
  out: 'static/javascript/plaza/ideas/compiled.js'
  // options: {
  //   closure: {
  //     debug: '',
  //     formatting: 'PRETTY_PRINT'
  //   }
  // }
});

closureBuilder.build({
  name: 'plaza.jams.main',
  srcs: glob([
    'src/**/*.js',
    'src/**/*.soy'
  ]),
  deps: [],
  out: 'static/javascript/plaza/jams/compiled.js'
  // options: {
  //   closure: {
  //     debug: '',
  //     formatting: 'PRETTY_PRINT'
  //   }
  // }
});

closureBuilder.build({
  name: 'plaza.about.main',
  srcs: glob([
    'src/**/*.js',
    'src/**/*.soy'
  ]),
  deps: [],
  out: 'static/javascript/plaza/about/compiled.js'
  // options: {
  //   closure: {
  //     debug: '',
  //     formatting: 'PRETTY_PRINT'
  //   }
  // }
});

closureBuilder.build({
  name: 'plaza.films.main',
  srcs: glob([
    'src/**/*.js',
    'src/**/*.soy'
  ]),
  deps: [],
  out: 'static/javascript/plaza/films/compiled.js'
  // options: {
    // closure: {
      // debug: '',
      // formatting: 'PRETTY_PRINT'
    // }
  // }
});

closureBuilder.build({
  name: 'plaza.apps.main',
  srcs: glob([
    'src/**/*.js',
    'src/**/*.soy'
  ]),
  deps: [],
  out: 'static/javascript/plaza/apps/compiled.js'
  // options: {
  //   closure: {
  //     debug: '',
  //     formatting: 'PRETTY_PRINT'
  //   }
  // }
});
