const SAFEAREA = () => {

    if (localStorage.getItem('Environment') === 'Production' ) {

        window.addEventListener('load', () => {

            document.body.style.marginTop = '10%';

        });

        return;
        
    };

};

export { SAFEAREA };
