    dictionarySend=(word)=>{
       fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(res => res.json()).then(json =>{
       
       json[0]["meanings"].map((meaning,index) =>{ 
        this.addMessageToBotState(this.createChatBotMessage(`Parts of Speech:${meaning.partOfSpeech}
        ===============
        Definitions: ${meaning.definitions[0].definition}
       
        `)) 
      
        return meaning
      })}
       );     
      
    }

    wikiSend=(word)=>{
      
      fetch( `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&formatversion=2&exintro&explaintext&redirects=1&titles=${word}`).then(res => res.json()).then(json =>
      {
        let getData = json["query"]["pages"]
      
      let keys = Object.keys(getData)
      
      this.addMessageToBotState(this.createChatBotMessage(getData[keys]["extract"]))
      }
      )
     
   }

   defaultMessage = () =>{
    const message = this.createChatBotMessage(`/w for Wikipedia Seach \n /d for Dictionary Search
    \n  Example: /d hello
    `, {
      withAvatar: true,
    });
    
    this.addMessageToBotState(message)
   }
