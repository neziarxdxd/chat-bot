const { router, route,text } = require('bottender/router');
const fetch = require('node-fetch');

async function factor(context){
  var operation = "factor";
  var expression = "x^2-25";//context.event.text;
  var encodedUrl = encodeURIComponent(expression);
  var equation =`https://newton.now.sh/api/v2/${operation}/${encodedUrl}`;
  fetch(equation)
  .then(res => res.json())
  .then(json =>{
    
    context.sendText(json.result+" : "+context.event.text)});  
}

async function getBlock(context) {
  let jsonBlocks;
  var operation = "factor";
  var expression = context.event.text;
  var encodedUrl = encodeURIComponent(expression);

  try {
    var response = await fetch(`https://newton.now.sh/api/v2/${operation}/${encodedUrl}`);
    jsonBlocks = await response.json();
    context.sendText(jsonBlocks.result)
  } catch (e) {
    // handle error
    console.error(e)
  }
}

module.exports = async function App(context) {
  return getBlock(context);
};