const NOVASTART=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

    ELITEPAY('Me','Me','2000','Test','None','dd','Hello',(daily)=>{

        console.log(daily)

    })

};

const HOMEPAGE=()=>{

    DISPLAY('',`
        
    `);

};