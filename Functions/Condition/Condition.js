const CONDITION=(CONDITIONER,callback,callback1)=>{

    if (CONDITIONER) {

        callback();

    } else {
        
        callback1();

    };

};

export{CONDITION};