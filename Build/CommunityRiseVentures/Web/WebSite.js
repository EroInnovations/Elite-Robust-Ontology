const API='https://docs.google.com/spreadsheets/d/15BPlgHpUmm65nUNSLRwlRzaWv1hPenriWVvL5MDcmiw/edit?usp=sharing';

const NOVASTART=()=>{

    VISITOR(API,'Visitors');

    ROUTE('',HOMEPAGE,'HOMEPAGE');

    DOWNLOADSAVEINDEX(API,'News','News',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    });

};

const HOMEPAGEROUTE=()=>{

    DOWNLOADSAVEINDEX(API,'News','News',()=>{

    });

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>
        
            <img class='Logo' src='${COMMUNITYRISELOGO}'/>
            
            <div class='TopNav'>
            
                <p onclick='SERVICESPAGEROUTE()'>Services</p>

                <p onclick='ABOUTPAGEROUTE()'>About</p>

                <p onclick='DONATEPAGEROUTE()'>Donate</p>

                <p onclick='CONTACTUSPAGEROUTE()'>Contact</p>
            
            </div>

            <h1>History</h1>

            <p class='BriefIntro'>Community Rise Ventures is a Non Government Funded Organisation that is Responsible and Loves it Community,We Venture in helping the needy and try to resolve community issue without interfering with government projects.</p>
        
            <p class='BriefIntro'>We are Located in Mbale City in Kasanvu ,near Mbale College.</p>

            <h1>Our Projects</h1>

            <p class='BriefIntro'>Community Rise Ventures being a Non Government Funded Organisation and Registered,The Funds that run and act as daily support for our organisation inorder to for us to continue to support the community is from your donations and we do wish to show the good hearted people where there donations good thus we post the archievements of our organisation and how far they have come to support the community and if you wish become part of the supporters for a good cause to humanit,please donate to us from the donation section of the site.</p>

            <h3>See Them Below</h3>

            <div class='ProjectDIv'></div>

        </div>
    `);

    const ProjectDIv=document.querySelector('.ProjectDIv');

    GETINDEXEDDATA('News','News',(data)=>{

        CREATEELEMENT(ProjectDIv,'div','ProjectedDiv',(ELEMENT)=>{

            DISPLAY(ELEMENT,`

                <img class='ProjectedImage' src='${data.ImageOne}'/>

                <footer class='ProjectedFooter'>

                    <h1 class='ProjectedTitle'>${data.Name}</h1>
                
                </footer>
                
            `);

            CLICK(ELEMENT,()=>{

                JSONIFICATION(data,(MyData)=>{

                    STOREDATA('','MyPosts',MyData);

                    STORYPAGEROUTE();

                });

            });

        });

    });

};

const DONATEPAGEROUTE=()=>{

    ROUTE(' ',DONATEPAGE,'HOMEPAGE');

};

const DONATEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <img class='Logo' src='${COMMUNITYRISELOGO}'/>

            <div class='TopNav'>

                <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITELEFTBACKICON}'/>

                <h3 class='RightText'>Donate</h3>
            
            </div>

            <h1>FundRaising</h1>

            <p class='BriefIntro'>Community Rise Ventures Being a Non Government Funded Organisation,We There Operate Our Projects Using the Donation Funds Provided by The good well to keep the Community Projects Runnings.<br><br> Those interested in being a good cause for the needy please donate to the Following Account Below.</p>

            <h1>Account Details</h1>
            
            <div class='TopNav'>

                <h1 class='LeftText'>Account Number</h1>

                <h1 class='RightText'>60080462400</h1>
            
            </div>

            <div class='TopNav'>

                <h1 class='LeftText'>Bank Name</h1>

                <h1 class='RightText'>Absa</h1>
            
            </div>

            <br><br>

        </div>

    `);

};

const SERVICESPAGEROUTE=()=>{
   
    ROUTE(' ',SERVICESPAGE,'HOMEPAGE');
    
};

const SERVICESPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <img class='Logo' src='${COMMUNITYRISELOGO}'/>

            <div class='TopNav'>

                <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITELEFTBACKICON}'/>

                <h3 class='RightText'>Services</h3>
            
            </div>

            <p class='BriefIntro'>Community Rise Ventures ventures in multiple activities to be able to improve the life of a common person from daily standard to funded projects</p>

            <br>

            <h1>Religious Centers Constructions</h1>

            <p class='BriefIntro'>Community Rise Ventures in Construction of Mosques and Churchs that is aimed at helping improve the spirtual to the Creator thus install discipline to the people of the community.Below is a image of Community Rise Ventures Team Constructing a mosque.</p>

            <img class='Logo'  src='https://th.bing.com/th/id/OIP.ytXiN8ruvK0E_rwZ_68OHgHaEL?w=328&h=185&c=7&r=0&o=5&cb=iwc2&pid=1.7'/>

            <br><br>

            <h1>Safe Water Delivery</h1>

            <p class='BriefIntro'>Community Rise Ventures provides safe Drinking Water to hard to reach areas without safe drinking water and we do this by well constructions and this enables us to prevent and reduces illness in those communities we venture in as shown below</p>


            <img class='Logo' src='https://live.staticflickr.com/7412/27493158034_f6139a70c4_b.jpg'/>

            <br><br>

            <h1>Sheltering the Homeless</h1>

            <p class='BriefIntro'>Community Rise Venture also ventures in reducing the rate of homeless and street kids and we do this by construction of orphanages to enable us improve the daily life of a common person.</p>

            <img class='Logo' src=https://th.bing.com/th/id/OIP.ocB3_eXSP4LZmJCrs_JHXQHaDt?cb=iwc2&rs=1&pid=ImgDetMain' />

            <br><br>

            <h1>Feeding the Needy</h1>

            <p class='BriefIntro'>Community Rise Ventures also is trying to solve the issue of starvation by Feeding those who are unable to get daily needs for there daily survival as seen below.</p>

            <img class='Logo' src='https://th.bing.com/th/id/R.f8b5df9bd938e906d4ef8e717e700a7d?rik=TBWioBHpwYl1Rg&pid=ImgRaw&r=0'/>

           <br><br>

            <h1>Cloth the Needy</h1> 

            <p class='BriefIntro'>Community Rise Ventures also provides basic needs for the survivial of those in need as presented below</p>

            <img class='Logo' src='https://www.globalgiving.org/pfil/12617/ph_12617_43123.jpg'/>

            <br><br>

            <h1>Health the Needy</h1> 

            <p class='BriefIntro'>Community Rise Ventures also provides health needs to those who are unable to get them because of unmentioned conditions thus we try our best to make their life simple and comfortable as demonstrated below</p>

            <img class='Logo' src='https://4.bp.blogspot.com/-BggcsQALZ8I/UVQmRuR3ElI/AAAAAAAABcU/8TWrWFTztx8/s1600/Week+29+-+Wheelchairs+056.jpg'/>

        </div>

    `);

};

const ABOUTPAGEROUTE=()=>{
   
    ROUTE(' ',ABOUTPAGE,'HOMEPAGE');
    
};

const ABOUTPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <img class='Logo' src='${COMMUNITYRISELOGO}'/>

            <div class='TopNav'>

                <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITELEFTBACKICON}'/>

                <h3 class='RightText'>About Us</h3>
            
            </div>

            <h1>Who We are?</h1>

            <p class='BriefIntro'>Community Rise Ventures is a non government Funded Organisation that is aimed at creating Smiles on the Faces of the Community we venture to help those in need by creating long term solutions without interfering in government projects and we venture in service delivery as shown in services section of this site.</p>


            <h1>Where are We?</h1>

            <p class='BriefIntro'>We are located in kasanvu in Mbale City near Mbale College.</p>

            <h1>Our Mission</h1>

            <p class='BriefIntro'>Our Mission is to Create a smile on everyones face who is inndeed needy by solving the challenges with the aid of those willing to support.</p>

            <br><br>

        </div>

    `);

};

const CONTACTUSPAGEROUTE=()=>{
   
    ROUTE(' ',CONTACTPAGE,'HOMEPAGE');
    
};

const CONTACTPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <img class='Logo' src='${COMMUNITYRISELOGO}'/>

            <div class='TopNav'>

                <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITELEFTBACKICON}'/>

                <h3 class='RightText'>Contact Us</h3>
            
            </div>

            <h3>Reach Us Today</h3>

            <button onclick='INSTAGRAMED()'>Instagram</button>

            <button onclick='WHATED()'>WhatsApp</button>

            <button onclick='FACED()'>Facebook</button>

            <button onclick='TIK()'>TikTok</button>

            <button onclick='EMAILED()' >Email</button>

            <button onclick='ED()' >X</button>

            <h1>Tech Support</h1>

            <button onclick='WEBSITED()'>Site</button>

            <br><br>

            <p>Powered By Elite Robust Ontology.</p>

            <br><br>

        </div>

    `);
};

const WEBSITED=()=>{

    WEBSITE('https://eroinnovations.site');

};

const INSTAGRAMED=()=>{

    INSTAGRAM('community_rise_ventures');

};

const WHATED=()=>{
    WHATSAPP('0779332496');
};

const FACED=()=>{
    WEBSITE('https://www.facebook.com/share/gGoc7h3UY95qyPvU/?mibextid=wwXIfr');
};

const TIK=()=>{
    WEBSITE('https://www.tiktok.com/@communityriseventures?_t=8sJKl4UAph2&_r=1');
};

const ED=()=>{
    WEBSITE('https://x.com/communityriseve?s=11');
};


const EMAILED=()=>{
    GMAIL('Communityriseventures@gmail.com');
}

const STORYPAGEROUTE=()=>{
   
    ROUTE(' ',STORYPAGE,'HOMEPAGE');
    
};

const STORYPAGE=()=>{

    SESSIONDEJSONDATA('MyPosts',(data)=>{

        console.log(data)

        DISPLAY('',`
    
            <div class='HomeDiv'>
    
                <img class='Logo' src='${data.ImageOne}'/>
    
                <div class='TopNav'>
    
                    <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITELEFTBACKICON}'/>
    
                    <h3 class='RightText'>${data.Name}</h3>
                
                </div>

                <p class='BriefIntro'>${data.Story}</p>

                <div class='ImagesHolders'>

                    <img class='StoryImage' src='${data.ImageOne||COMMUNITYRISELOGO}'/>

                    <img class='StoryImage'  src='${data.ImageTwo||COMMUNITYRISELOGO}'/>

                    <img class='StoryImage' src='${data.ImageThree||COMMUNITYRISELOGO}'/>
                
                </div>

                <br><br>
    
            </div>
    
        `);

    });

};