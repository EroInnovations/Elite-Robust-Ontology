const LOCALDEJSONDATA=(MYDATA,callback)=>{

    const DATA=localStorage.getItem(MYDATA);

    const MYDATATA=JSON.parse(DATA);

    callback(MYDATATA);

};

export{LOCALDEJSONDATA};