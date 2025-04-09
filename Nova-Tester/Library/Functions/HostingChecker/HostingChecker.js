const HOSTINGCHECKER=(callback)=>{

    if (localStorage.getItem('Hosting') === 'Active' ) {

        callback();
        
    } else {

        if (localStorage.getItem('Environment') ==='Development' ) {

            callback();
            
        }else{

            DISPLAY('',`

                <h1 style="color: red;">Alert</h1>
    
                <h2>Service Hosting </h2>
    
                <p>The Hosting Service to This Product has Expired 
    
                <br><br>
                
                If your the Owner Please Pay To Keep It Online</p>
                
                <button style="width: 50%;height: 50px;background: blue;outline: none;border: none;color: #cdcdcd;margin: 2% auto;border-radius: 50px;">Pay Now</button>
    
                <button style="width: 50%;height: 50px;background: forestgreen;outline: none;border: none;color: #cdcdcd;margin: 2% auto;border-radius: 50px;">Contact Us</button>
    
                <p>If You Think There Is a Mistake</p>

                <button style="width: 50%;height: 50px;background: teal;outline: none;border: none;color: #cdcdcd;margin: 2% auto;border-radius: 50px;" class='DeleteAllData' >Update Site</button>
    
                <p>Powered by</p>
    
                <h3>Elite Robust Ontology</h2>
    
            `);

            const DeleteAllData=document.querySelector('.DeleteAllData');

            DeleteAllData.addEventListener('click',()=>{

                localStorage.clear();

                sessionStorage.clear();

                Reload();

            });

        };
        
    };

};

export{HOSTINGCHECKER};