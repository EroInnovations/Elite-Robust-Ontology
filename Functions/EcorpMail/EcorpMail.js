const ECORPMAIL=(EMAIL,SUBJECT,MESSAGE,callback,callback1)=>{

    const DATA={

        "recipientEmail":EMAIL,

        "subject":SUBJECT,

        "body":MESSAGE
        
    };

    fetch('https://script.google.com/macros/s/AKfycbxDobmQuvJyGBSvSf-Od4rLjsIhj9R535gTIxDohkQrmGOMCTRblk19d0lMjSPP7u2Y/exec',{

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

export{ECORPMAIL};