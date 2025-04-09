const DELETEDATA=(TYPE,NAME)=>{

    if (TYPE) {

        localStorage.removeItem(NAME);
        
    } else {
        
        sessionStorage.removeItem(NAME);

    };

};
export{DELETEDATA};