const fetch = require('node-fetch');



async function getBlock() {
    let jsonBlocks;
    var operation = "zeroes";
    var expression = "x^2-25";
    var encodedUrl = encodeURIComponent(expression);

    try {
      var response = await fetch(`https://newton.now.sh/api/v2/${operation}/${encodedUrl}`);
      jsonBlocks = await response.text();
      return await jsonBlocks
    } catch (e) {
      // handle error
      console.error(e)
    }
  }

