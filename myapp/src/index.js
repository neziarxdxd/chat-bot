const { router, text,route } = require('bottender/router');
const fetch = require('node-fetch');
async function SayHi(context) {
  await context.sendText('Hi!');
}

async function wikiSearch(context) {   
  var searchWord = context.event.text;
  var  myString= searchWord.slice(3).trim();
  var parseSearch = myString.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))); 
  (async() => {
    var response = await fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${parseSearch}`);
    var json = await response.json();
    
    if (!(json.hasOwnProperty('query'))){
      context.sendText("Hi kindly add search in your command for example /a Programming ")
    }
    else{
    var wikiID = Object.keys(json["query"]["pages"])[0] 
      if (wikiID ==-1){
        context.sendText("No result");
      }
      else{
        var summarypage =json["query"]["pages"][wikiID]["extract"];  
        var sentenceSummary = summarypage.split(". ")
        sentenceSummary.map(sentence=>{context.typing(100); context.sendText(sentence)});
      }
    } 
  
    
  })();
  // LORD sopan muku
}
async function listOfTopics(context){

  var searchWord = context.event.text;
  var  myString= searchWord.slice(3).trim();
  var searchQuery = myString.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  var search = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=${searchQuery}`;
  
  (async() => {
    var response = await fetch(search);
    var json = await response.json();
    
    if (json.hasOwnProperty('error')){
      context.sendText("Hi kindly add search in your command for example /l Programming ")
    }
    else{
    
      var searches =json["query"]["search"];
      searches.map((search,index ) => {context.sendText(search.title+" /id "+search.pageid)});
    } 
  
    
  })();
  

}

module.exports = async function App(context) {
  return router([    
    text('hi', SayHi),  
    text(/^\/w/,wikiSearch),
    text(/^\/l/, listOfTopics)
  ]);
}
