const { router, text, route } = require('bottender/router');





async function SearchWiki(context){
  let stringSearch = context.event.text

  await context.sendText("Hi "+stringSearch.slice(6))
}

module.exports = async function App(context) {
  return router([
    text(/^\/wiki/,SearchWiki)
  ]);
};