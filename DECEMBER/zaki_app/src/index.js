const { router, route } = require('bottender/router');
const fetch = require('node-fetch');






async function test(context){
  await context.sendText("TEST");
}

async function SendHi(context) {
  await context.sendText('Hi!');
}
module.exports = async function App(context) {
  return router([    
    text('hi', SendHi),  
    text(/^\/w/,test(context)),
    
  ]);
};