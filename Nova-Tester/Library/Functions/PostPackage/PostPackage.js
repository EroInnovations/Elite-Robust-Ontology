const POSTPACKAGE=(LINK,POLICY,DATA,callback,callback1)=>{

    fetch(LINK,{

        method:'Post',

        mode:POLICY||'no-cors',

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
export{POSTPACKAGE}