
Package.describe({
  name: 'keplerjs:geoinfo',
  summary: 'keplerjs plugin geoinfo',
  version: '0.0.1',
  git: ''
});

Npm.depends({
  "suncalc": "1.8.0"
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0");
  
  api.addFiles([
    '.npm/package/node_modules/suncalc/suncalc.js'
  ],'client');

  api.use([
    'keplerjs:core'
  ]);

  api.use([
    'http',
    'robodo:async',
  ],'server');

  api.addFiles([
    'plugin.js',
    'i18n/it.js'
  ]);

  api.addFiles([
    'client/modules/Geoinfo.js',
    'client/helpers.js',
    'client/stylesheets/popups.css',
    'client/views/panels.html',
    'client/views/popups.html',
    'client/views/popups.js'
  ],'client');

  api.addFiles([
    'server/modules/Geoapi.js',
    'server/modules/Geoinfo.js',
    'server/places.js',
    'server/users.js'    
  ],'server');
  
});
