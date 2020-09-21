async function SayHi(context) {
  await context.sendText('Hi!');
}

async function DefaultMessage(context) {
  await context.sendText(`
  Type what menu you want 
  /wiki - Encyclopedia 
  /word - Dictionary 
  /tips - Tips for Programming 
  /
`);
}


module.exports = async function App(context) {
  if (context.event.text == 'hi') {
    return SayHi;
  }
  return DefaultMessage;
}

