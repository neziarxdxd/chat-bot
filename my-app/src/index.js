module.exports = async function App(context) {
  var text = context.event.text;
  if (context.event.isText){
    await context.sendText('TEXT testing'+text);
    console.log(text);
    //dfd
  }
  
};
