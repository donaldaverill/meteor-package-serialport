Package.describe({
    summary: 'serialport repackaged for Meteor'
});
Npm.depends({
    "serialport": "https://www.npmjs.org/package/serialport"
});
Package.on_use(function(api) {
    api.add_files('serialport.js', ['server']);
    api.export('SerialPort', 'server');
});
