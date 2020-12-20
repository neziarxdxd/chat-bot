const fetch = require('node-fetch');
var operation = "zeroes";
var expression = "x^2-25";
var encodedUrl = encodeURIComponent(expression);


fetch(`https://newton.now.sh/api/v2/${operation}/${encodedUrl}`)
    .then(res => res.json())
    .then(json => {
        console.log(json.result)
        });
