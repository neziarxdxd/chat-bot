const { router, route,text } = require('bottender/router');
const fetch = require('node-fetch');

async function doSolveThis(context){

  //get the text
  var parseString = context.event.text

  // this will split the string by space 
  var splittedString = parseString.split(" ")

  // removes the forward slash and get the function 
  var command = splittedString[0].substring(1,)

  // this get the whole equation 
  var eq = splittedString.slice(1, splittedString.length )  
  var equation= eq.join(" ");

  // send the Command and Equation 
  await context.sendText("command: "+command)
  await context.sendText("equation: "+equation)
  
    
  // transform the equation to URI
  var encodedUrl = encodeURIComponent(equation)
  
  try {
    // fetch 
    var response = await fetch(`https://newton.now.sh/api/v2/${command}/${encodedUrl}`)
    var jsonBlocks = await response.json()
    await context.sendText(`result: ${jsonBlocks.result}`)
  }  
  catch (e) {    
    console.error(e)    
  }
 
}

async function sendHelp(context){
  await context.sendText("ANG GANDA MO!!!")
  //await context.sendText("Hi choose appropriate commands")
}


module.exports = async function App(context) {
  // list of mathematics commnands
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
      text(/^\/log[]?\s+/,doSolveThis),
      
      route('*',sendHelp)
    ]

  );
};