const fetch = require('node-fetch');
var operation = "factor";
var expression = "x^2-25";
var encodedUrl = encodeURI(expression);
/**
fetch(`https://newton.now.sh/api/v2/${operation}/${expression}`)
    .then(res => res.json())
    .then(json => {
        console.log(json.expression)
        console.log(json.result)});
**/