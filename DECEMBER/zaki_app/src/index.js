const { router, route,text } = require('bottender/router');
const fetch = require('node-fetch');

async function operationProd(context,operation,equat){
  let jsonBlocks;    
  var encodedUrl = encodeURIComponent(equat);
  try {
    var response = await fetch(`https://newton.now.sh/api/v2/${operation}/${encodedUrl}`);
    jsonBlocks = await response.json();
    context.sendText(jsonBlocks.result)
  }catch (e) {
    // handle error
    console.error(e)
  }
}
//delete immediately

async function testProd(context){
  let jsonBlocks;
  var equat = "x^2-100";
  var operation="factor";
  var encodedUrl = encodeURIComponent(equat);
  try {
    var response = await fetch(`https://newton.now.sh/api/v2/${operation}/${encodedUrl}`);
    jsonBlocks = await response.json();
    context.sendText(jsonBlocks.result)
  }catch (e) {
    // handle error
    console.error(e)
  }
}

/**
 FACTOR FUNCTION
async function factor(context){
  var operation = "factor";
  var len = operation.length + 2;
  var equation = (context.event.text).slice(len);
  testProd(context);
  
  //operationProd(context,operation,equation); 
}
**/

module.exports = async function App(context) {
  return router(
    [
      text([/^\/factor/,],factor),
      
    ]

  );
};