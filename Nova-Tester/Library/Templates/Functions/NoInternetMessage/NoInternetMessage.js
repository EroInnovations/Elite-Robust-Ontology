const NOINTERNETTEMPLATE=()=>{

    CHECKER(!navigator.onLine,()=>{

        MESSAGEDISPLAY('','Check Your Internet','');

    });

};
export{NOINTERNETTEMPLATE};