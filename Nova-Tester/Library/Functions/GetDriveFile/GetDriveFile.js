const GETDRIVEFILE=(DATA,callback,callback1)=>{

    fetch('https://script.google.com/macros/s/AKfycbyZXeB9GlsrIOMu6C2jK7ImRgDq1ms0J0HbmjKDor4HwzjMRYK4S3YQ8QmMTJcqkkH9Iw/exec',{

        method:'Post',

        body:JSON.stringify({ fileId: DATA})

    })

    .then(res =>res.text())

    .then(data =>{

        callback(data)

    } )

    .catch(error =>{

        callback1(error)

    } );
    
};
export{GETDRIVEFILE}