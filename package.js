Package.describe({
    summary: 'serialport repackaged for Meteor'
});

Package.on_use(function(api) {
    api.add_files('serialport.js', ['server']);
    api.export('SerialPort', 'server');
});
