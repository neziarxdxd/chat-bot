const { router, text,route } = require('bottender/router');
const fetch = require('node-fetch');
async function SayHi(context) {
  await context.sendText('Hi!');
}

async function wikiSearch(context) {   
  var searchWord = context.event.text;
  var parseSearch = searchWord.slice(3).trim(); 
  (async() => {
    var response = await fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${parseSearch}`);
    var json = await response.json();
    var wikiID = Object.keys(json["query"]["pages"])[0] 
    if (wikiID ==-1){
      context.sendText("No search results")
    }
    else{
    var summarypage =json["query"]["pages"][wikiID]["extract"];  
    var sentenceSummary = summarypage.split(". ")
    sentenceSummary.map(
      sentence=>{
        context.sendText("Test: "+sentence)
      }
    );
    }
    
  
    
  })();


}

module.exports = async function App(context) {
  return router([    
    text('hi', SayHi),  
    text(/^\/a/,wikiSearch),
  ]);
}
