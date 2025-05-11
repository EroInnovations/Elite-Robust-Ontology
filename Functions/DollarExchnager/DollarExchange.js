const DOLLAREXCHANGE=(CONVERSION,AMOUNT,callback)=>{

    if (CONVERSION ==='USD') {

        const Amount = AMOUNT/3668.62;
        
        callback(Amount);

    } else {

        const Amount = AMOUNT*3666;
        
        callback(Amount); 
         
    };


};

export{DOLLAREXCHANGE};