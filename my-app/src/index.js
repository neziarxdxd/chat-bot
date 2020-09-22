const { router, text, route } = require('bottender/router');

await function getSummary(pageSearchID){
  
  let settings = { method: "Get" };
  
  let url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${pageSearchID}`
  fetch(url, settings)
      .then(res => res.json())
      .then((json) => {
          var summarypage =json["query"]["pages"][`${pageSearchID}`]["extract"];            
          console.log(summarypage)     
          
  });

}



async function SearchWiki(context){
  let stringSearch = context.event.text

  await context.sendText("Hi ")
}

module.exports = async function App(context) {
  return router([
    text(/^\/wiki/,SearchWiki)
  ]);
};