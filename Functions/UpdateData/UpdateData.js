const UPDATEDATA=(LINK,NAME,ID,INFO,callback,callback1)=>{
    const DATA={
        "sheetName":NAME,
        "spreadsheetUrl":LINK,
        "id":ID,
        "data":INFO,
        "action":"update"
    };
    
    fetch('https://script.google.com/macros/s/AKfycbxDMAxD8EYl1mqybaVnFgXh_5A8c2SpOydG12r8VxrWkB_UtjqBdpOkPWUi0przES9uBw/exec',{
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

export{UPDATEDATA};