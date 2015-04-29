if (Meteor.isServer) {
  Tinytest.add('SerialPort - defined on server', function(test) {
    test.notEqual(SerialPort, undefined, 'Expected ' +
      'SerialPort to be defined on the server.');
  });
}

if (Meteor.isClient) {
  Tinytest.add('SerialPort - undefined on client', function(test) {
    SerialPort = SerialPort || undefined;
    test.isUndefined(SerialPort, 'Expected SerialPort ' +
      'to be undefined on the client.');
  });
}
