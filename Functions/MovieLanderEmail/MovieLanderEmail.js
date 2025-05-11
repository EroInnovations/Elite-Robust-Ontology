const MOVIELANDEREMAIL=(EMAIL,SUBJECT,MESSAGE,callback,callback1)=>{

    const DATA={

        "recipientEmail":EMAIL,

        "subject":SUBJECT,

        "body":MESSAGE
        
    };

    fetch('https://script.google.com/macros/s/AKfycbz8A6vVp37gtWzpCACtEwCU2sDtBkKMtGB2amKk8doKkFGtffnZaeRtgry5v9xeoMyl/exec',{

        method:'Post',

        mode:'cors',

        body:JSON.stringify(DATA)

    })

    .then(res =>res.json())

    .then(data =>{

        callback(data);

    } )

    .catch(error =>{

        callback1(error);

    } );

};

export{MOVIELANDEREMAIL};