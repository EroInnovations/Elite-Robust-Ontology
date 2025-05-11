const SESSIONDEJSONDATA=(MYDATA,callback)=>{

    const DATA=sessionStorage.getItem(MYDATA);

    const MYDATATA=JSON.parse(DATA);

    callback(MYDATATA);

};

export{SESSIONDEJSONDATA};