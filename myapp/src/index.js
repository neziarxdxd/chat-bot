const { router, text } = require('bottender/router');
const fetch = require('node-fetch');
async function SayHi(context) {
  await context.sendText('Hi!');
}

async function SayHello(context) {   
  
  (async() => {
    const response = await fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stackoverflow');
    const json = await response.json();
    var wikiID = Object.keys(json["query"]["pages"])[0]            
    var summarypage =json["query"]["pages"][wikiID]["extract"];   
    await context.sendText(summarypage.substring(0, 2000));
    
  })();


}

module.exports = async function App() {
  return router([
    // return the `SayHi` action when receiving "hi" text messages
    text('hi', SayHi),
    // return the `SayHello` action when receiving "hello" text messages
    text('hello', SayHello),
  ]);
}
