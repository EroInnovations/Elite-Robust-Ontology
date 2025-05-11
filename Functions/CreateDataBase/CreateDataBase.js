const CREATEDATABASE=(NAME,callback,callback1)=>{
    
    const DATA={
        "sheetName":NAME
    };

    fetch('https://script.google.com/macros/s/AKfycbxTemTTxcrvd6GwT7PDaHTreOfsDkjp1hWiXuJ4ItlPs5kY_eFEDD-jhJDErsnRxIVopA/exec',{
        
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

export{CREATEDATABASE};