const { router, route } = require('bottender/router');
const fetch = require('node-fetch');




async function factor(context){
  var operation = "factor";
  var expression = context.event.text;
  var encodedUrl = encodeURIComponent(expression);
  fetch(`https://newton.now.sh/api/v2/${operation}/${encodedUrl}`)
    .then(res => res.json())
    .then(json => {
      async()=>{
       context.sendText("TEST: "+json.result);
      }
  });


}

async function SendHi(context) {
  await context.sendText('Hi!');
}
module.exports = async function App(context) {
  return factor(context)
};