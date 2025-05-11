
const PROJECTUPDATE=(callback)=>{

    if (localStorage.getItem('Updates')) {

        callback();
        
    } else {

        localStorage.setItem('Updates','Approved');

        location.reload();
        
    };

};

export{PROJECTUPDATE}
