const QELMAIL=(EMAIL,SUBJECT,MESSAGE,callback,callback1)=>{

    const DATA={

        "recipientEmail":EMAIL,

        "subject":SUBJECT,

        "body":MESSAGE
        
    };

    fetch('https://script.google.com/macros/s/AKfycbzLPkLfp0XdfRYYIS3oBOOJ67yIWMM67gnOWkJO9YRoNsDjxxM6cZtexgWeBBbBNcL9og/exec',{

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

export{QELMAIL};