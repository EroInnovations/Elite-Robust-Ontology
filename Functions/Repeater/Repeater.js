const REPEATER=(TIME,callback)=>{

    setInterval(() => {

        callback();
        
        
    }, TIME||500);

};

export{REPEATER};