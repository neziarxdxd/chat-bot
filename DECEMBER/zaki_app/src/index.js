const { router, route,text } = require('bottender/router');
const fetch = require('node-fetch');

//delete immediately

async function testProd(context){
  let jsonBlocks;
  var equat = context.event.text;
  var operation="factor";
  var encodedUrl = encodeURIComponent(equat);
  try {
    var response = await fetch(`https://newton.now.sh/api/v2/${operation}/${encodedUrl}`);
    jsonBlocks = await response.json();
    // context.sendText(jsonBlocks.result)
    console.log("test: "+equat)
  }catch (e) {
    // handle error
    console.error(e)
    
  }
}

async function testMore(context){
  var parseString = context.event.text; 
  var splittedString = parseString.split(" ")
  var command = splittedString[0]
  var equation = splittedString[1]
  await context.sendText("equation: "+equation)
}



module.exports = async function App(context) {
  return router(
    [
     
      text(/^\/factor[]?\s+/,testMore),     
      
    ]

  );
};