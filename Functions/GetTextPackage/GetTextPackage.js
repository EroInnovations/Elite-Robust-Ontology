const GETTEXTPACKAGE=(LINK,POLICY,callback,callback1)=>{
    
    fetch(LINK,{
        method:'Get',
        mode:POLICY||'no-cors',
    })

    .then(res =>res.text())

    .then(data =>{

        callback(data);

    } )

    .catch(error =>{

        callback1(error);

    } );
    
};

export{GETTEXTPACKAGE};