const  NOVASTART=()=>{

    CHECKER(localStorage.getItem('OperatingSystem') === 'Android',()=>{

        ROUTE('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

    });

    CHECKER(localStorage.getItem('OperatingSystem') === 'Desktop',()=>{

        alert('')

    });
    
};