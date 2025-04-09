const ANDROIDIMAGESDISPLAY=()=>{

    DECLARATION(".HomeHolder",(ELEMENT)=>{

        CLEAR(ELEMENT);

        DATAGETTER('AppImages','AppImages',(data)=>{

            CREATEELEMENT('div','AppImagesDiv',(ELEMENTD)=>{

                DISPLAY(ELEMENTD,`

                    <img class='HolderDisplay' src='${data.White||data.Black||PLACEHOLDER}'/>

                    <p class='Name'>${data.Name}</p>
                    
                `);

                ADD(ELEMENT,ELEMENTD);

            });

        });

    });

}