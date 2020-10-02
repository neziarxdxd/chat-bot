const fetch = require('node-fetch');
function sayHi(searchQuery){
let settings = { method: "Get" };

let y;
let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`
let xfd= fetch(url, settings)
let ax =xfd.then(res => res.json())
let b = ax.then((json));
    
        
        /**        var searches =json["query"]["search"];
        searches.map((search,index ) => {
            console.log(index,search.title)
            return search

    });
    y=(searches[17]["pageid"]) 
    **/ 
        
        

return b;
}
console.log(sayHi("Java"));