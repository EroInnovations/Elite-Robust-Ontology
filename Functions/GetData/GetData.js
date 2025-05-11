const GETDATA=(LINK,NAME,callback,callback1)=>{
    const DATA={
        "sheetName":NAME,
        "spreadsheetUrl":LINK,
    };
    
    fetch('https://script.google.com/macros/s/AKfycbyHFabMyQk2EoZXk8VV-L4dBKPAe6knmhyAm1W6sQ9_WRmq5clAozbfIznoCHY0l1ssSQ/exec',{
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

export{GETDATA};