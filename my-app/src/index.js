module.exports = async function App(context) {
  await context.sendButtonTemplate('What do you want to do next?', [
    {
      type: 'web_url',
      url: 'https://petersapparel.parseapp.com',
      title: 'Show Website',
    },
    {
      type: 'postback',
      title: 'Start Chatting',
      payload: 'USER_DEFINED_PAYLOAD',
    },
  ]);
  var text = context.event.text;
  if (context.event.isText){
    await context.sendText('TEXT testing'+text);
    console.log(text);
    //dfd
  }
  
};
