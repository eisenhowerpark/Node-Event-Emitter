/* function Emitter() {
    this.events = {};
} // the events property is an empty object

Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || []; // in other words: if an event exists, good; otherwise
    // make a new empty array for an event.
    this.events[type].push(listener);
} // the listener pushes the event type to be printed or logged

Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        }) // we use an if statement to listen to events of this type
    }
}

module.exports = Emitter; */

// This is nice and all, but we'll call upon Node's built-in emitter method instead.