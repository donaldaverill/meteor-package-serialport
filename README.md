# meteor serialport

serialport repackaged for Meteor

See this project as an example: [meteor-arduino-serialport](https://github.com/HumulusMaximus/meteor-arduino-serialport)
To Use
------
On the server, open a serial port:
```js   
//or whatever your device is connected to
var serialPort = new SerialPort.SerialPort("/dev/tty.usbmodemfd121", { 
    baudrate: 9600,
    parser: SerialPort.parsers.readline('\r\n')
});
serialPort.on('open', function() {
    console.log('Port open');
});
```
Do stuff:
```js
//receive data from the serial port
serialPort.on('data', function(data) {
    console.log('message ' + data);
});

//send data to the serial port
var sendToArduino = function(message) {
    serialPort.write(message);
};
```
For more: https://github.com/voodootikigod/node-serialport

An alternative for using [serialport](https://github.com/voodootikigod/node-serialport) without this package is to use the [npm](https://atmospherejs.com/package/npm) package. Add npm to your project and include serialport:
```js
var SerialPort = Meteor.require('serialport');
var serialPort = new SerialPort.SerialPort("/dev/tty.usbmodemfd121", {
    baudrate: 9600,
    parser: SerialPort.parsers.readline('\r\n')
});
```
