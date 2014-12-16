
var EventEmitter    = require('events').EventEmitter;
var util            = require('util');

function Child (proc) {
  var self = this;
  self.proc = proc;

  self.proc.on('message', function (message) {
    self.emit(message.event, message.data);
  });
};

util.inherits(Child, EventEmitter);

Child.prototype.send = function (event, data) {
  this.proc.send({
    event: event,
    data: data
  });
};

module.exports = function (proc) {
  return new Child(proc);
};
