Package.describe({
  name: 'fourquet:serialport',
  summary: 'serialport npm module wrapped for Meteor.',
  version: '1.7.4_1',
  git: 'https://github.com/fourquet/meteor-package-serialport'
});

Npm.depends({
  'serialport': '1.7.4'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('SerialPort', ['server']);
  api.addFiles('serialport.js', ['server']);
});

Package.onTest(function(api) {
  api.use('tinytest', ['client', 'server']);
  api.use('fourquet:serialport', ['server']);
  api.addFiles('serialport-tests.js', ['client', 'server']);
});
