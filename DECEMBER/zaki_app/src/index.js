const { router, route } = require('bottender/router');
const fetch = require('node-fetch');




async function factor(context){
  var operation = "factor";
  var expression = context.event.text;
  var encodedUrl = encodeURIComponent(expression);
  var equation =`https://newton.now.sh/api/v2/${operation}/${encodedUrl}`;
  (async ()={
   
    response = await fetch(equation)
    json = await response.json()




  });


}

async function SendHi(context) {
  await context.sendText('Hi!');
}
module.exports = async function App(context) {
  return SendHi(context)
};