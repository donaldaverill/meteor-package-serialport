# meteor serialport

serialport repackaged for Meteor

To Use
------

Opening a serial port:

```js   
var serialPort = new SerialPort.SerialPort("/dev/tty.usbmodemfd121" //or whatever your device is connected to, {
    baudrate: 9600,
    parser: SerialPort.parsers.readline('\r\n')
});
```

Doing stuff:
```
serialPort.on('open', function() {
    console.log('Port open');
    serialPort.on('data', function(data) {
        console.log('data ' + data);
    });
    serialPort.write("ls\n", function(err, results) {
        if (err) {
            console.log('err ' + err);
        } else {
            console.log('results ' + results);
        }
    });
});
```
For more: https://github.com/voodootikigod/node-serialport