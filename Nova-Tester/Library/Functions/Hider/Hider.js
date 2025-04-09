const HIDER=(TIME,callback)=>{

    setTimeout(() => {

        callback();
        
    }, TIME||500);

};

export{HIDER};