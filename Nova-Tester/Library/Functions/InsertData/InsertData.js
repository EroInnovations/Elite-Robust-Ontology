const INSERTDATA=(LINK,NAME,HEADERS,INFO,callback,callback1)=>{

    const DATA={
        
        "sheetName":NAME,

        "spreadsheetUrl":LINK,

        "Headers":HEADERS,

        "Data":INFO

    };
    
    fetch('https://script.google.com/macros/s/AKfycbys7SiB-Ifs1zwccTrXSL4NJwXhkqixg65DQS59YcyQ0VbKBmKDIEJFm6KVgSTNTh8PDw/exec',{
        
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

export{INSERTDATA};