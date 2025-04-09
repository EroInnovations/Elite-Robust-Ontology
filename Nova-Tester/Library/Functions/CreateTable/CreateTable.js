const CREATETABLE=(LINK,NAME,callback,callback1)=>{
    const DATA={
        "sheetName":NAME,
        "spreadsheetUrl":LINK
    };
    fetch('https://script.google.com/macros/s/AKfycbwojB0t-HICmWw8e0ADZe9ApMKJqka8A1nLulnDScKN2YJoIvmjNkdnfnhFJMzWgKywJg/exec',{
       
        method:'Post',

        mode:'cors',

        body:JSON.stringify(DATA)

    })
    
    .then(res =>res.json())
    
    .then(data =>{
    
        callback(data)
    
    } )
    
    .catch(error =>{
    
        callback1(error)
    
    } );

};

export{CREATETABLE};