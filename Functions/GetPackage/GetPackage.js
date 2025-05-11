const GETPACKAGE=(LINK,POLICY,callback,callback1)=>{
    
    fetch(LINK,{
        method:'Get',
        mode:POLICY||'no-cors',
    })

    .then(res =>res.json())

    .then(data =>{

        callback(data);

    } )

    .catch(error =>{

        callback1(error);

    } );
    
};

export{GETPACKAGE};