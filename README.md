# meteor serialport
[![Build Status](https://travis-ci.org/fourquet/meteor-package-serialport.svg?branch=master)](https://travis-ci.org/fourquet/meteor-package-serialport)

[serialport](https://www.npmjs.org/package/serialport) npm module wrapped for Meteor.

Example Meteor app: [meteor-app-example-arduino-serialport](https://github.com/fourquet/meteor-app-example-arduino-serialport)

To Use
------
`meteor add fourquet:serialport`

On the server:
```javascript
// change the path and baudrate to match your setup
var serialPort = new SerialPort.SerialPort('/dev/tty.usbmodemfd121', {
    baudrate: 9600,
    parser: SerialPort.parsers.readline('\r\n')
});

serialPort.on('open', function() {
    console.log('Port open');
});
```
Do stuff:
```javascript
// receive data
serialPort.on('data', function(data) {
    console.log('message ' + data);
});

// send data
var sendToSerialPort = function(message) {
    serialPort.write(message);
};
```
For more: [https://github.com/voodootikigod/node-serialport](https://github.com/voodootikigod/node-serialport)

An alternative for using [serialport](https://github.com/voodootikigod/node-serialport) without this package is to use the [npm](https://atmospherejs.com/meteorhacks/npm) package. Add npm to your project and include serialport:
```javascript
var SerialPort = Meteor.npmRequire('serialport');
var serialPort = new SerialPort.SerialPort('/dev/tty.usbmodemfd121', {
    baudrate: 9600,
    parser: SerialPort.parsers.readline('\r\n')
});
```
