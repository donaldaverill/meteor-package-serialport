# meteor serialport

serialport repackaged for Meteor

See this project as an example: https://github.com/HumulusMaximus/meteor-arduino-serialport

To Use
------

Open a serial port:
```js   
//or whatever your device is connected to
var serialPort = new SerialPort.SerialPort("/dev/tty.usbmodemfd121", { 
    baudrate: 9600,
    parser: SerialPort.parsers.readline('\r\n')
});
```

Do stuff:
```js

serialPort.on('open', function() {
    console.log('Port open');
    serialPort.on('data', function(data) {
        console.log('message ' + data);
    });
});

var sendToArduino = function(message) {
    serialPort.write(message);
};
```

For more: https://github.com/voodootikigod/node-serialport

An alternative for using [serialport](https://github.com/voodootikigod/node-serialport) without this package is to use the [npm](https://atmospherejs.com/package/npm) package. Be sure to add npm to your project and include serialport by:
```
var SerialPort = Meteor.require('serialport');
var serialPort = new SerialPort.SerialPort("/dev/tty.usbmodemfd121", {
    baudrate: 9600,
    parser: SerialPort.parsers.readline('\r\n')
});
```
