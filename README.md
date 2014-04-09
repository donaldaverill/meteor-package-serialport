# meteor serialport

serialport repackaged for Meteor

This package should work with other devices, but so far has been only tested on an Arduino Uno. 

To Use
------

Open a serial port:
```js   

var serialPort = new SerialPort.SerialPort("/dev/tty.usbmodemfd121", { //or whatever your device is connected to
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

For more from serialport: https://github.com/voodootikigod/node-serialport

An alternative for using serialport without this package is to use the [npm](https://atmospherejs.com/package/npm) package. Be sure to add npm to your project and include serialport by:

```

var SerialPort = Meteor.require('serialport');
var serialPort = new SerialPort.SerialPort("/dev/tty.usbmodemfa131", {
    baudrate: 9600,
    parser: SerialPort.parsers.readline('\r\n')
});

```
See this project as an example: 
