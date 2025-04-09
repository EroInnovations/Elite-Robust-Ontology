const POSTDRIVEFILE=(FILENAME,FILEDATA,DRIVEFOLDER,callback,callback1)=>{

    fetch('https://script.google.com/macros/s/AKfycby1jTq3nFarX-VHnad99IzkmupTqI0s-GtUWI4EJUcH1UwUIutM8Q8ZXwePsrss9WFIJw/exec',{

        method:'Post',

        body:JSON.stringify({
            "fileName": FILENAME+'.txt',
            "content": FILEDATA,
            "folderId": DRIVEFOLDER
          })

    })

    .then(res =>res.json())

    .then(data =>{

        callback(data)

    } )

    .catch(error =>{

        callback1(error)

    } );
    
};
export{POSTDRIVEFILE}