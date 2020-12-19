const { router, route } = require('bottender/router');
async function SendHi(context) {
  await context.sendText('Hi!');
}
module.exports = async function App(context) {
  return SendHi(context)
};