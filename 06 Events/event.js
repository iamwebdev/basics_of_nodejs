const events = require('events');
var event = new events.EventEmitter(); // Creating Object for event
event.on('firstEvent', () => console.log('First event fired')); // Creating event
event.emit('firstEvent')

event.on('addition',(a,b) => {
    console.log(a+b);
})
event.emit('addition',12,8)