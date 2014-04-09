Package.describe({
    summary: 'serialport repackaged for Meteor'
});

Npm.depends({
    'serialport': '1.4.0'
});

Package.on_use(function(api) {
    api.add_files('serialport.js', ['server']);
    api.export('SerialPort', 'server');
});
