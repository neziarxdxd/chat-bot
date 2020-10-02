const fetch = require('node-fetch');

function getPage(pageSearchID){
    console.log("test");
    let settings = { method: "Get" };
    
    let url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${pageSearchID}`
    fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            var summarypage =json["query"]["pages"][`${pageSearchID}`]["extract"];            
            return(summarypage)     
            
    });

}




function getSummary(pageSearchID){
    let dataX;
    console.log("test");
    let settings = { method: "Get" };
    
    let url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${pageSearchID}`
    fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            var summarypage =json["query"]["pages"][`${pageSearchID}`]["extract"];            
            this.dataX=(summarypage)     
            
    });

}


let settings = { method: "Get" };
let searchQuery = "Java"
let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`
fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        var searches =json["query"]["search"];
        searches.map((search,index ) => {
            console.log(index,search.title)
            return search
    });
    console.log(searches[17]["pageid"])  
    getSummary(searches[19]["pageid"]);     
        
});