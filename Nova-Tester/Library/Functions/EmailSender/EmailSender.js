const EMAILSENDER=(EMAIL,SUBJECT,MESSAGE,callback,callback1)=>{

    const DATA={
        "recipientEmail":EMAIL,
        "subject":SUBJECT,
        "body":MESSAGE
    };

    fetch('https://script.google.com/macros/s/AKfycbyC-L2ywxLAfkjU7L8A4dgpJDnK4E26_ilcuHiQ1r0ZmACUgv7WEzoLbrCRnjJLd7Akdg/exec',{

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
export{EMAILSENDER}