const TOAST=(Message)=>{

    if (localStorage.getItem('Environment')==='Production') {

        Android.showToast(Message);
        
    } else {

        console.log(Message);
        
    };

};
export{TOAST};