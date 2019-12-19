var Emitter = require('events'); // We made our own emitter, but Node's built-in emitter is more robust.
var eventConfig = require ('./config').events; // Using this config object and its events property allows
// us to replace 'greet' with eventConfig to avoid conflict or typos.

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
    console.log('Someone says hi.'); 
}); // On event completion, console.log this string.
emtr.on(eventConfig.GREET, function() {
    console.log('The greeting was processed successfully!'); 
}); // On event completion, console.log this string, too.

console.log('Hello');
emtr.emit(eventConfig.GREET);

// Our Event Emitter is really just an object with an array full of functions, listening for events.
// Originally, we used "magic strings" to call upon the 'greet' function, but then decided to use a
// config.js file to replace those strings with something more reliably available, less prone to typos.