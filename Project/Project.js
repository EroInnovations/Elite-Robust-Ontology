const API='https://docs.google.com/spreadsheets/d/15BPlgHpUmm65nUNSLRwlRzaWv1hPenriWVvL5MDcmiw/edit?usp=sharing';

const NOVASTART=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

    DATADOWNLOADING();

};

const DATADOWNLOADING=(callback)=>{

    DOWNLOADSAVEINDEX(API,'News','News',()=>{

        HOMEPAGE();

    });

};

const POSTPAGEROUTER=()=>{

    ROUTE(' ',POSTSPAGE,'HOMEPAGE');

};

const HOMEPAGEROUTER=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');
    
}

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div id='Now' class='PostsDiv'></div>

        <footer>

            <img src='${WHITEHOMEICON}' onclick='RELOAD()' />

            <img onclick='POSTPAGEROUTER()' src='${WHITEPOSTICON}'/>

            <img src='${WHITESETTINGSICON}'/>
        
        </footer>
        
    `);

    const PostsDiv=document.querySelector('.PostsDiv');

    DATADOWNLOADING();

    GETINDEXEDDATA('News','News',(data)=>{

        CREATEELEMENT(PostsDiv,'div','HomePOsst',(ELEMENT)=>{

            DISPLAY(ELEMENT,`

                <img class='Covered' src='${data.ImageOne}'/>

                <div class='MessageDiv'>

                    <p>${data.Story}</p>
                
                </div>

                <footer class='ThereFooter'>

                    <button class='This'>Update Post</button>

                    <button class='This'>Delete Post</button>
                
                </footer>
                
            `);

        });

    });

};

const POSTSPAGE=()=>{

    DELETEDATA('','Cover');
    DELETEDATA('','One');
    DELETEDATA('','Two');

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTER()' class='LeftImage' src='${WHITEBACKICON}'/>

            <p class='RightText' >Posts</p>
        
        </header>

        <div id='Posetr' class='PostsDiv'>
            <input class='Name' type='text' placeholder='Enter Post Title' />
            <textarea class='Story' placeholder='Enter Story'></textarea>
            <br><br>
            <p>Cover Image</p>
            <br>
            <img Id='Cover' class='Logos' src='${COMMUNITYRISELOGO}'/>
            <br><br>
            <p>Image One</p>
            <br>
            <img id='One' class='Logos' src='${COMMUNITYRISELOGO}'/>
            <br><br>
            <p>Image Two</p>
            <br>
            <img  id='Two' class='Logos' src='${COMMUNITYRISELOGO}'/>
            <br><br>
            <button id='CreatePost'>Post</button>
            <br><br>
        </div>
        
    `);

    const CreatePost=document.querySelector('#CreatePost');

    const Name=document.querySelector('.Name');
    const Cover=document.querySelector('#Cover');
    const One=document.querySelector('#One');
    const Two=document.querySelector('#Two');
    const Story=document.querySelector('.Story');

    Cover.addEventListener('click',()=>{
        IMAGEPICKER(Cover,(data)=>{
            sessionStorage.setItem('Cover',data);
        });
    });

    One.addEventListener('click',()=>{
        IMAGEPICKER(One,(data)=>{
            sessionStorage.setItem('One',data);
        });
    });

    Two.addEventListener('click',()=>{
        IMAGEPICKER(Two,(data)=>{
            sessionStorage.setItem('Two',data);
        });
    });

    CreatePost.addEventListener('click',()=>{

        if (Name.value) {

            if (Story.value) {
                
                if (sessionStorage.getItem('Cover')) {

                    if (navigator.onLine) {

                        TOAST('Please Wait'); 

                        const HEADERS=['Name','Story','ImageOne','ImageTwo','ImageThree','Date'];

                        const INFO=[Name.value,Story.value,sessionStorage.getItem('Cover'),sessionStorage.getItem('One'),sessionStorage.getItem('Two'),new Date()];

                        INSERTDATA(API,'News',HEADERS,INFO,(daa)=>{

                            DATADOWNLOADING();

                            setTimeout(() => {

                                NOVASTART();
                                
                            }, 2000);

                        },(data)=>{
                            console.log(data);

                            TOAST('Failed to Create Post'); 
                        });
                        
                    } else {
                        
                        TOAST('Check Your Internet'); 

                    };
                
                } else {
        
                    TOAST('Add Cover Photo'); 
                
                };

            } else {

                TOAST('Add a Story'); 
                
            };
            
        } else {

           TOAST('Enter Post Title'); 

        };

    });

};