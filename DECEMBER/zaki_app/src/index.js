const { router, route,text } = require('bottender/router');
const fetch = require('node-fetch');

async function doSolveThis(context){

  //get the text
  var parseString = context.event.text; 

  // this will split the string by space 
  var splittedString = parseString.split(" ")
  
  // removes the forward slash and get the function 
  var command = splittedString[0].substring(1,)
  
  // this get the whole equation 
  var equation = splittedString[1]
  
  // send the Command and Equation 
  await context.sendText("command: "+command)
  await context.sendText("equation: "+equation)
  
  let jsonBlocks;  
  var encodedUrl = encodeURIComponent(equation);
  
  try {
    var response = await fetch(`https://newton.now.sh/api/v2/${command}/${encodedUrl}`);
    jsonBlocks = await response.json();
    // context.sendText(jsonBlocks.result)
    await context.sendText(`result: ${jsonBlocks.result}`)
  }
  
  catch (e) {    
    console.error(e)    
  }
}





module.exports = async function App(context) {
  return router(
    [
     
      text(/^\/simplify[]?\s+/,doSolveThis),  
      text(/^\/factor[]?\s+/,doSolveThis),  
      text(/^\/derive[]?\s+/,doSolveThis),  
      text(/^\/integrate[]?\s+/,doSolveThis),  
      text(/^\/zeroes[]?\s+/,doSolveThis),  
      text(/^\/tangent[]?\s+/,doSolveThis),  
      text(/^\/area[]?\s+/,doSolveThis),  
      text(/^\/cos[]?\s+/,doSolveThis),
      text(/^\/sin[]?\s+/,doSolveThis), 
      
      
         
      
    ]

  );
};