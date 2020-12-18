const { router, text } = require('bottender/router');

async function SayHi(context) {
  await context.sendText('Hi!');
}

async function SayHello(context) {
  await context.sendText('Hello!');
}

async function App() {
  return router([
    // return the `SayHi` action when receiving "hi" text messages
    text('hi', SayHi),
    // return the `SayHello` action when receiving "hello" text messages
    text('hello', SayHello),
  ]);
}