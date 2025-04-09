const AUTORUN=()=>{
const DATA=`const AUTORUN=()=>{

    if (localStorage.getItem('Environment') === 'Development') {

        const LINK='../Start/Start.js';

        import(LINK)

        .then(module =>
            {
                if (typeof module.START === 'function') {
                    module.START();
                } else {
                    console.error('START is not defined in the module');
                    }
                }
            )

            .catch(error =>
                {
                    console.error('Error loading the module:', error);
                }
            );
            
        } 

    else {
            
        const LINK='https://eroinnovations.github.io/Nova/Start/Start.js'

        import(LINK)

        .then(module =>
            {
                if (typeof module.START === 'function') {
                        module.START();
                    } else {
                        console.error('START is not defined in the module');
                }
            }
        )

        .catch(error =>
            {
                console.error('Error loading the module:', error);
            }
        );
            
    };

};
`;
localStorage.setItem('AUTORUN',DATA);
};
export{AUTORUN};