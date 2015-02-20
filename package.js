Package.describe({
  name: 'donaldaverill:serialport',
  summary: 'serialport npm module wrapped for Meteor.',
  version: '1.4.10_1',
  git: 'https://github.com/donaldaverill/meteor-package-serialport'
});

Npm.depends({
  'serialport': '1.4.10'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('SerialPort', ['server']);
  api.addFiles('donaldaverill:serialport.js', ['server']);
});

Package.onTest(function(api) {
  api.use('tinytest', ['client', 'server']);
  api.use('donaldaverill:serialport', ['server']);
  api.addFiles('donaldaverill:serialport-tests.js', ['client', 'server']);
});
