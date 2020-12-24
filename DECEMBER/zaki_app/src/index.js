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
  var command = splittedString[0].substring(1,)
  var equation = splittedString[1]
  await context.sendText("command: "+command)
  await context.sendText("equation: "+equation)

  let jsonBlocks;  
  
  var encodedUrl = encodeURIComponent(equation);
  try {
    var response = await fetch(`https://newton.now.sh/api/v2/${command}/${encodedUrl}`);
    jsonBlocks = await response.json();
    // context.sendText(jsonBlocks.result)
    await context.sendText(`result: ${jsonBlocks.result}`)
  }catch (e) {
    // handle error
    console.error(e)
    
  }



}



module.exports = async function App(context) {
  return router(
    [
     
      text(/^\/simplify[]?\s+/,testMore),  
      text(/^\/factor[]?\s+/,testMore),  
      text(/^\/derive[]?\s+/,testMore),  
      text(/^\/integrate[]?\s+/,testMore),  
      text(/^\/zeroes[]?\s+/,testMore),  
      text(/^\/tangent[]?\s+/,testMore),  
      text(/^\/area[]?\s+/,testMore),  
      text(/^\/cos[]?\s+/,testMore),
      text(/^\/sin[]?\s+/,testMore)     
      
    ]

  );
};