const events = require('events');
var event = new events.EventEmitter();

event.on('firstEvent',() => {
    console.log('First event fired')
    event.emit('secondEvent')
});
event.on('secondEvent', () => console.log('Second event fired'));
event.emit('firstEvent')