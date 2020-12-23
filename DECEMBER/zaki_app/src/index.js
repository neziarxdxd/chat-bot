const { router, route,text } = require('bottender/router');
const fetch = require('node-fetch');

async function operationProd(context,opera,equat){
  let jsonBlocks;
  var operation = "factor";
  var expression = context.event.text;
  var encodedUrl = encodeURIComponent(expression);
  try {
    var response = await fetch(`https://newton.now.sh/api/v2/${operation}/${encodedUrl}`);
    jsonBlocks = await response.json();
    context.sendText(jsonBlocks.result)
  }catch (e) {
    // handle error
    console.error(e)
  }
}

async function factor(context){
  var operation = "factor";
  var len = operation.length + 2;
  var equation = (context.event.text).slice(len);
  operationProd(context,operation,equation); 
}



module.exports = async function App(context) {
  return router(
    [
      text("test-z",zeroes),
      text("test-f",factor),
    ]

  );
};