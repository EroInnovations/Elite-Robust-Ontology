const WEBANDROIDPAGE=()=>{

    CLEAR("");

    SCROLLVIEW("",'','transparent',(ELEMENT)=>{

        HEADER(ELEMENT,'','','','50px',(ELEMENTS)=>{

            STYLED(ELEMENTS,'position','relative');

            ICONED(ELEMENTS,'',localStorage.getItem('AppIcon'),'30px',(ELEMENTED)=>{

                STYLED(ELEMENTED,'background','#cdcdcd');
                STYLED(ELEMENTED,'padding','1%');

                EVENT(ELEMENTED,'click',()=>{

                    IMAGERPICKER(ELEMENT,(data)=>{
                        console.log(data)
                    });

                });

            });

           TEXTED(ELEMENTS,'p','','News','18px','#000000',(ELE)=>{

                EVENT(ELE,'click',()=>{
                    NAVIGATOR('Yes',WEBANDROIDNEWSPAGE,'WEBANDROIDPAGE');
                })

           });

           TEXTED(ELEMENTS,'p','','Services','18px','#000000',(ELE)=>{

                EVENT(ELE,'click',()=>{
                    NAVIGATOR('Yes',WEBANDROIDSERVICESPAGE,'WEBANDROIDPAGE');
                })

           });

           TEXTED(ELEMENTS,'p','','About Us','18px','#000000',(ELE)=>{

                EVENT(ELE,'click',()=>{
                    NAVIGATOR('Yes',WEBANDROIDABOUTPAGE,'WEBANDROIDPAGE');
                })

           });

        });

        const MESSAGE=`Creating a smile and making a difference!<br><br>By One Donation at a time . <br><Br> Donate Today and change the world.`;

        TEXTED(ELEMENT,'p','',MESSAGE,'18px','#000000',()=>{

        });

        TEXTED(ELEMENT,'p','','Upcoming Events','18px','blue',(ELEMENTS)=>{
            STYLED(ELEMENTS,'text-align','left');
            STYLED(ELEMENTS,'margin-left','0.5rem');

        });

        VIEW(ELEMENT,'','','','auto',(ELEMENTED)=>{

            ICONED(ELEMENTED,'',PAD,'100%',(ELE)=>{

            });

        });

        TEXTED(ELEMENT,'p','','Get Our Amazing Works In The News Section','18px','#000000',(ELEMENTS)=>{
            STYLED(ELEMENTS,'text-align','left');
            STYLED(ELEMENTS,'margin-left','0.5rem');

        });

        ROUNDBUTTON(ELEMENT,'','blue','Latest News','','50%',()=>{

            NAVIGATOR('Yes',WEBANDROIDNEWSPAGE,'WEBANDROIDPAGE');

        });

        VIEW(ELEMENT,'','','','auto',(ELEMENTED)=>{

            ICONED(ELEMENTED,'',localStorage.getItem('AppIcon'),'100%',(ELE)=>{

            });

        });

        const DONATEBUTTON=`Become A Life Saver By Donating Now,<br><br> Click The But
        ton Below To Get Started!!!`;

        TEXTED(ELEMENT,'p','',DONATEBUTTON,'18px','forestgreen',()=>{

        });

        ROUNDBUTTON(ELEMENT,'','blue','Donate Now','','50%',()=>{

            NAVIGATOR('Yes',WEBANDROIDDONATEPAGE,'WEBANDROIDPAGE');

        });

        TEXTED(ELEMENT,'p','','Message To Those Who Help The Community Via Community Rise Ventures.','18px','forestgreen',(ELEMENTS)=>{
            STYLED(ELEMENTS,'text-align','left');
            STYLED(ELEMENTS,'margin-left','0.5rem');

        });

        VIEW(ELEMENT,'','','','auto',(ELEMENTED)=>{

            ICONED(ELEMENTED,'',THANK,'100%',(ELE)=>{

            });

        });

        TEXTED(ELEMENT,'p','','Community Changes ','18px','forestgreen',(ELEMENTS)=>{
            STYLED(ELEMENTS,'text-align','left');
            STYLED(ELEMENTS,'margin-left','0.5rem');

        });

        TEXTED(ELEMENT,'p','','This how Community Rise Ventures Is Helping Those in Need In the Following Images One is Before We Noticed Them and The Other is After They Got Noticed. ','18px','blue',(ELEMENTS)=>{
            STYLED(ELEMENTS,'text-align','left');
            STYLED(ELEMENTS,'margin-left','0.5rem');

        });

        VIEW(ELEMENT,'','','','auto',(ELEMENTED)=>{

            ICONED(ELEMENTED,'',AFER,'100%',(ELE)=>{

            });

        });

        VIEW(ELEMENT,'','','','auto',(ELEMENTED)=>{

            ICONED(ELEMENTED,'',BEFORE,'100%',(ELE)=>{

            });

        });

        FOOTER(ELEMENT,'','','','',(ELEMENTED)=>{

            STYLED(ELEMENTED,'position','relative');

            ICONED(ELEMENTED,'',WHITEXICON,'30px',(ELEMENTES)=>{

                STYLED(ELEMENTES,'background','#000000');
                STYLED(ELEMENTES,'padding','1%');
                STYLED(ELEMENTES,'border-radius','50px');

                EVENT(ELEMENTES,'click',()=>{

                    WEBSITE("https://x.com/communityriseve?s=11");
                });

            });

            ICONED(ELEMENTED,'',WHITEGMAILICON,'30px',(ELEMENTES)=>{

                STYLED(ELEMENTES,'background','#000000');
                STYLED(ELEMENTES,'padding','1%');
                STYLED(ELEMENTES,'border-radius','50px');

                EVENT(ELEMENTES,'click',()=>{

                    GMAIL('Communityriseventures@gmail.com')
                   
                });

            });

            ICONED(ELEMENTED,'',WHITEFACEBOOKICON,'30px',(ELEMENTES)=>{

                STYLED(ELEMENTES,'background','#000000');
                STYLED(ELEMENTES,'padding','1%');
                STYLED(ELEMENTES,'border-radius','50px');

                EVENT(ELEMENTES,'click',()=>{

                    WEBSITE("https://www.facebook.com/share/gGoc7h3UY95qyPvU/?mibextid=wwXIfr");
                });

            });

            ICONED(ELEMENTED,'',WHITEINSTAGRAMICON,'30px',(ELEMENTES)=>{

                STYLED(ELEMENTES,'background','#000000');
                STYLED(ELEMENTES,'padding','1%');
                STYLED(ELEMENTES,'border-radius','50px');

                
                EVENT(ELEMENTES,'click',()=>{

                    WEBSITE("https://www.instagram.com/community_rise_ventures/profilecard/?igsh=MXUwaGdkaTI0YTNvNQ==");
                });

            });

        });

    });

};

const WEBANDROIDNEWSPAGE=()=>{

    CLEAR("");

    HEADER('','','','','50px',(ELEMENTS)=>{

        STYLED(ELEMENTS,'position','sticky');

        ICONED(ELEMENTS,'',WHITEBACKICON,'25px',(ELEMENTED)=>{

            STYLED(ELEMENTED,'background','#cdcdcd');
            STYLED(ELEMENTED,'margin-left','1%');
            STYLED(ELEMENTED,'padding','2%');
            STYLED(ELEMENTED,'border-radius','50px');

            EVENT(ELEMENTED,'click',()=>{

                NAVIGATOR('',WEBANDROIDPAGE,'WEBANDROIDPAGE');

            });

        });

       TEXTED(ELEMENTS,'p','','Your Story','18px','#000000',(ELEMENT)=>{

            STYLED(ELEMENT,'margin-right','2%');

            EVENT(ELEMENT,'click',()=>{

                NAVIGATOR('Yes',WEBANDRROIDYOURSTORYPAGE,'WEBANDROIDPAGE');

            });

       });

    });

    SCROLLVIEW("",'','',(ELEMENT)=>{

        STYLED(ELEMENT,'botom','0');
        STYLED(ELEMENT,'top','50px');
       
        NEWSPAGE(ELEMENT);

    });

}

const WEBANDROIDSERVICESPAGE=()=>{

    CLEAR("");

    HEADER('','','','','50px',(ELEMENTS)=>{

        STYLED(ELEMENTS,'position','sticky');

        ICONED(ELEMENTS,'',WHITEBACKICON,'25px',(ELEMENTED)=>{

            STYLED(ELEMENTED,'background','#cdcdcd');
            STYLED(ELEMENTED,'margin-left','1%');
            STYLED(ELEMENTED,'padding','2%');
            STYLED(ELEMENTED,'border-radius','50px');

            EVENT(ELEMENTED,'click',()=>{

                NAVIGATOR('',WEBANDROIDPAGE,'WEBANDROIDPAGE');

            });

        });

       TEXTED(ELEMENTS,'p','','Our Services','18px','#000000',(ELEMENT)=>{

            STYLED(ELEMENT,'margin-right','2%');

       });

    });

    SCROLLVIEW("",'','transparent',(ELEMENT)=>{

        ICONED(ELEMENT,'',localStorage.getItem('AppIcon'),'',(ELEMENTED)=>{

            STYLED(ELEMENTED,'width','fit-content');
            STYLED(ELEMENTED,'height','50%');

        });

        TEXTED(ELEMENT,'p','','Community Rise Ventures','18px','blue',(ELEMENT)=>{

            
        });

        const MESSAGE=`
        <P>  
            At Community Rise Ventures ,We Solve Community Based Problem by Creating Long Lasting Solution as We Create Smiles on Peoples Faces and Create a Difference.
            <br><br>
            Our Services to the Community Include but Not Limited To:
            <br><br></p>

            <h1>Chance to access a better education.</h2>
     
            <p>

            <br><br>
            Community Rise Ventures is a non-governmental organization (NGO) dedicated to improving access to quality education for underserved communities. By identifying areas with potential for educational growth but lacking the necessary infrastructure, the organization works to mobilize resources and fund the construction of schools. Through a collaborative effort with local communities, donors, and volunteers, Community Rise Ventures ensures that students in these areas have access to safe, well-equipped learning environments.

            <br><br>

            The NGO’s approach involves identifying regions where good schools are in high demand but where infrastructure development has been delayed due to financial constraints. By engaging local stakeholders and securing funding, they facilitate the building of schools that can accommodate children, offering them a chance to receive quality education. This initiative not only provides physical spaces for learning but also fosters community development and empowerment.

            <br><br>

            In addition to constructing schools, Community Rise Ventures focuses on creating sustainable educational systems that are tailored to the specific needs of each community. By involving community members in the planning and implementation process, the NGO ensures that the education provided is relevant, inclusive, and lasting. This initiative gives children in marginalized areas a chance to rise above their circumstances and build a brighter future.
            
            </p>

            <h3>As Shown in The Image Below</h3>
        
        `;
        
        TEXTED(ELEMENT,'p','',MESSAGE,'18px','#000000',(ELEMENTED)=>{
             
             STYLED(ELEMENTED,'text-align','left');
             STYLED(ELEMENTED,'width','98%');
             STYLED(ELEMENTED,'margin-left','2%');
    
        });

        VIEW(ELEMENT,'','','','auto',(ELEMENTED)=>{

            ICONED(ELEMENTED,'',SCHOOLBUILDING,'100%',(ELE)=>{

            });

        });

        const NEN=`

            <h1>Attain shelter or roof over their head (orphanage)</h1>

            <p>
                Community Rise Ventures is a transformative NGO committed to improving the lives of vulnerable children, particularly orphans, by providing them with safe and secure shelter. The organization identifies regions where orphaned children lack proper care and housing and works tirelessly to mobilize resources to construct orphanages that meet both their basic and emotional needs. These orphanages serve as more than just places to stay; they are designed to be nurturing environments where children can experience stability, care, and support.

                <br><br>

                Through partnerships with local communities, donors, and volunteers, Community Rise Ventures ensures that these shelters provide a comprehensive approach to child welfare, offering nutritious meals, healthcare, education, and emotional support. The goal is to create sustainable homes where children not only find safety but also the tools to heal and grow.

                <br><br>

                In every project, the NGO emphasizes community involvement, ensuring that the orphanages are culturally relevant and capable of long-term impact. By empowering local stakeholders, Community Rise Ventures fosters a sense of ownership and accountability, helping children in need to not only survive but to thrive. This holistic approach gives orphaned children a brighter future, filled with hope, opportunity, and the chance to overcome the challenges of their past.

            </p>
        

        `;

        TEXTED(ELEMENT,'p','',NEN,'18px','#000000',(ELEMENTED)=>{
             
            STYLED(ELEMENTED,'text-align','left');
            STYLED(ELEMENTED,'width','98%');
            STYLED(ELEMENTED,'margin-left','2%');
   
       });

        VIEW(ELEMENT,'','','','auto',(ELEMENTED)=>{

            ICONED(ELEMENTED,'',ORPHANAGE,'100%',(ELE)=>{

            });

        });

        const NNE=`

        <h1>Construction and renovation of places of worship</h1>

        <p>Community Rise Ventures also extends its mission to the construction and renovation of places of worship, recognizing their vital role in fostering community cohesion, spiritual growth, and support. In regions where places of worship are in disrepair or lacking entirely, the NGO mobilizes resources and collaborates with local communities to build or restore these sacred spaces. This initiative aims to create environments where people can come together in faith, find solace, and strengthen the social fabric of their communities.

        <br><br>

        By working alongside religious leaders and community members, Community Rise Ventures ensures that each project reflects the values and cultural significance of the local population. Renovations are done with great care to preserve the spiritual and historical importance of these spaces while incorporating modern safety standards and accessibility.

        <br><br>

        The construction of new places of worship addresses the need for safe and welcoming environments where spiritual teachings and community support can flourish. Through these efforts, Community Rise Ventures not only provides a physical space for worship but also reinforces the importance of unity, resilience, and hope. These initiatives ultimately contribute to the broader well-being of the community, fostering a sense of belonging and shared purpose for all involved.
        </p>
        
        `;

        TEXTED(ELEMENT,'p','',NNE,'18px','#000000',(ELEMENTED)=>{
             
            STYLED(ELEMENTED,'text-align','left');
            STYLED(ELEMENTED,'width','98%');
            STYLED(ELEMENTED,'margin-left','2%');
   
       });

        VIEW(ELEMENT,'','','','auto',(ELEMENTED)=>{

            ICONED(ELEMENTED,'',CHURCHIMAGE,'100%',(ELE)=>{

            });

        });

        const MEB=`

        <h1>Community Health Services</h1>

        <h3>Girl child empowerment and awareness in different areas</h3>

        <p>

            Community Rise Ventures is dedicated to empowering young girls and raising awareness about their rights and opportunities in underserved regions. Recognizing the barriers that many girls face, such as limited access to education, early marriage, and gender-based violence, the NGO focuses on creating programs that inspire and uplift girls, giving them the tools to realize their potential.

            <br><br>

            The organization works in various areas to educate communities about the importance of girl child empowerment. Through workshops, advocacy campaigns, and community engagement, it aims to challenge harmful stereotypes and encourage the belief that girls can achieve great things in all fields—whether in education, leadership, or entrepreneurship. By raising awareness about the value of educating and supporting girls, Community Rise Ventures helps to change attitudes and create environments where girls are seen as valuable contributors to society.

            <br><br>

            In addition to awareness campaigns, Community Rise Ventures provides tangible resources such as scholarships, mentorship, and leadership training, which enable girls to access education and pursue careers. These initiatives also help girls build self-confidence, leadership skills, and a sense of agency, ensuring that they have the knowledge and support to make informed decisions about their futures. Through these efforts, Community Rise Ventures is helping to break the cycle of inequality, creating a more inclusive world for future generations of girls.

            <br><br>

            Hence Preventing The Following In the Community
            <br>
            =>HIV/AIDS
            <br>
            =>Early pregnancy 
            <br>
            =>Abortion
            <br>
            =>Early Marriage 
            <br>
            =>Female genital mutilation
            <br>
            =>Access to free sanitary pads
            <br>

        </p>

        <h3>Note</h3>

        <p>Widows and Single mothers with essential support are our main concern too </p>

        <h3>As Seen Below</h3>
        
        `;

        TEXTED(ELEMENT,'p','',MEB,'18px','#000000',(ELEMENTED)=>{
             
            STYLED(ELEMENTED,'text-align','left');
            STYLED(ELEMENTED,'width','98%');
            STYLED(ELEMENTED,'margin-left','2%');
   
       });

        VIEW(ELEMENT,'','','','auto',(ELEMENTED)=>{

            ICONED(ELEMENTED,'',CHURCHIMAGE,'100%',(ELE)=>{

            });

        });

        const jfjb=`

        <h1>Water Scarcity</h1>

        <p>
            Water scarcity is one of the most pressing issues facing communities worldwide. With over 2 billion people lacking access to clean water, millions suffer from the devastating effects of poor water quality. Contaminated water leads to health issues, economic struggles, and limited access to essential services. The demand for clean water is growing as the global population expands, making sustainable solutions crucial.

            <br><br>

            Community Rise is actively addressing this issue by identifying regions with polluted or inaccessible water sources. Our initiative focuses on providing long-term solutions, such as drilling boreholes and installing water filtration systems. These efforts ensure that communities gain access to safe, clean water, significantly improving public health and quality of life.

            <br><br>

            Through partnerships with local governments and other organizations, Community Rise aims to create a future where everyone has reliable access to clean water. Together, we can help reduce waterborne diseases, improve education, and empower communities to thrive.
        </p>

        <h3>Identified Poor Water Soucrces</h3>
        
        `;

        TEXTED(ELEMENT,'p','',jfjb,'18px','#000000',(ELEMENTED)=>{
                
                STYLED(ELEMENTED,'text-align','left');
                STYLED(ELEMENTED,'width','98%');
                STYLED(ELEMENTED,'margin-left','2%');
    
        });

        
        VIEW(ELEMENT,'','','','auto',(ELEMENTED)=>{

            ICONED(ELEMENTED,'',WATE,'100%',(ELE)=>{

            });

        });

                
        VIEW(ELEMENT,'','','','auto',(ELEMENTED)=>{

            ICONED(ELEMENTED,'',WA,'100%',(ELE)=>{

            });

        });
        
        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);
        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

    });

};

const WEBANDROIDABOUTPAGE=()=>{

    CLEAR("");

    HEADER('','','','','50px',(ELEMENTS)=>{

        STYLED(ELEMENTS,'position','sticky');

        ICONED(ELEMENTS,'',WHITEBACKICON,'25px',(ELEMENTED)=>{

            STYLED(ELEMENTED,'background','#cdcdcd');
            STYLED(ELEMENTED,'margin-left','1%');
            STYLED(ELEMENTED,'padding','2%');
            STYLED(ELEMENTED,'border-radius','50px');

            EVENT(ELEMENTED,'click',()=>{

                NAVIGATOR('',WEBANDROIDPAGE,'WEBANDROIDPAGE');

            });

        });

       TEXTED(ELEMENTS,'p','','Donate','18px','blue',(ELEMENT)=>{

            STYLED(ELEMENT,'margin-right','2%');

            EVENT(ELEMENT,'click',()=>{
                
                NAVIGATOR('Yes',WEBANDROIDDONATEPAGE,'WEBANDROIDABOUTPAGE');
            });
           
       });

    });

    SCROLLVIEW("",'','transparent',(ELEMENT)=>{

        ICONED(ELEMENT,'',localStorage.getItem('AppIcon'),'',(ELEMENTED)=>{

            STYLED(ELEMENTED,'width','fit-content');
            STYLED(ELEMENTED,'height','50%');

        });

        TEXTED(ELEMENT,'p','','Community Rise Ventures','18px','blue',(ELEMENT)=>{

            
       });

       const MESSAGE=`Welcome to Community Rise Ventures where we aid the community with resources to make life better.<br><br>We are Non-Government Funded Organisation Located in Mbale City.
       
       `;
       
       TEXTED(ELEMENT,'p','',MESSAGE,'18px','#000000',(ELEMENTED)=>{
            
            STYLED(ELEMENTED,'text-align','left');
            STYLED(ELEMENTED,'width','98%');
            STYLED(ELEMENTED,'margin-left','2%');
   
       });

       IMAGEBUTTON(ELEMENT,'','forestgreen','Location','',WHITELOCATIONICON,()=>{
        
       });

       const MESSAGENT=`We Are Located Around Mbale College in Kasanvu in Mbale City ,Uganda .<br><br>
       
       `;
       
       TEXTED(ELEMENT,'p','',MESSAGENT,'18px','#000000',(ELEMENTED)=>{

            STYLED(ELEMENTED,'text-align','left');
            STYLED(ELEMENTED,'width','98%');
            STYLED(ELEMENTED,'margin-left','2%');
   
       });

       IMAGEBUTTON(ELEMENT,'','forestgreen','Mission','',WHITEGROUPICON,()=>{
        
       });

       const MESSAGET=`Creating Smiles and Making a Difference.
       `;
       
       TEXTED(ELEMENT,'p','',MESSAGET,'18px','#000000',(ELEMENTED)=>{

            STYLED(ELEMENTED,'text-align','left');
            STYLED(ELEMENTED,'width','98%');
            STYLED(ELEMENTED,'margin-left','2%');
            
       });

       BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);
       BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);
       
    });

};

const WEBANDRROIDYOURSTORYPAGE=()=>{

    DELETESTORAGE("",'UserName');
    DELETESTORAGE("",'UserLocation');
    DELETESTORAGE("",'UserEmail');
    DELETESTORAGE("",'UserStory');
    DELETESTORAGE("",'ImageOne');
    DELETESTORAGE("",'ImageTwo');
    DELETESTORAGE("",'ImageThree');
    DELETESTORAGE("",'ImageFour');
    DELETESTORAGE("",'ImageFive');

    CLEAR("");

    HEADER('','','','','50px',(ELEMENTS)=>{

        STYLED(ELEMENTS,'position','sticky');

        ICONED(ELEMENTS,'',WHITEBACKICON,'25px',(ELEMENTED)=>{

            STYLED(ELEMENTED,'background','#cdcdcd');
            STYLED(ELEMENTED,'margin-left','1%');
            STYLED(ELEMENTED,'padding','1%');
            STYLED(ELEMENTED,'border-radius','50px');

            EVENT(ELEMENTED,'click',()=>{

                NAVIGATOR('',WEBANDROIDNEWSPAGE,'WEBANDROIDPAGE');

            });

        });

       TEXTED(ELEMENTS,'p','','Share With Us','18px','#000000',(ELEMENT)=>{
       
            STYLED(ELEMENT,'margin-right','2%');

            
       });

    });

    SCROLLVIEW("",'','#00000050',(ELEMENT)=>{

        STYLED(ELEMENT,'botom','0');
        STYLED(ELEMENT,'top','50px');

        TEXT(ELEMENT,'','','Share Your Story','20px','#000000',()=>{

            alert('The Story You Share Should Be Connected With Community Rise Ventures,Not Works Not Connected To Our Organisation!')

        });

        ROUNDINPUT(ELEMENT,'','Enter Your Name','',(data)=>{

            STORE("",'UserName',data);

        });

        ROUNDINPUT(ELEMENT,'','Enter Your location','',(data)=>{

            STORE("",'UserLocation',data);

        });

        ROUNDINPUT(ELEMENT,'','Enter Your Email','',(data)=>{

            STORE("",'UserEmail',data);

        });

        TEXTAREA(ELEMENT,'','Share Your Story',(data)=>{

            STORE("",'UserStory',data);

        });

        TEXT(ELEMENT,'','','Add Images If Any','20px','#000000',()=>{

            alert('The Story You Share Should Be Connected With Community Rise Ventures,Not Works Not Connected To Our Organisation!')

        });

        ICONED(ELEMENT,'',WHITEUSERICON,"100%",(ELEMENTS)=>{

            STYLED(ELEMENTS,'height','fit-content');
            STYLED(ELEMENTS,'background','#cdcdcd');

            EVENT(ELEMENTS,'click',()=>{

                IMAGERPICKER(ELEMENTS,(data)=>{

                    STORE("",'ImageOne',data);

                });

            });

        });

        ICONED(ELEMENT,'',WHITEUSERICON,"100%",(ELEMENTS)=>{

            STYLED(ELEMENTS,'height','fit-content');
            STYLED(ELEMENTS,'background','#cdcdcd');

            EVENT(ELEMENTS,'click',()=>{

                IMAGERPICKER(ELEMENTS,(data)=>{

                    STORE("",'ImageTwo',data);

                });

            });

        });

        ICONED(ELEMENT,'',WHITEUSERICON,"100%",(ELEMENTS)=>{

            STYLED(ELEMENTS,'height','fit-content');
            STYLED(ELEMENTS,'background','#cdcdcd');

            EVENT(ELEMENTS,'click',()=>{

                IMAGERPICKER(ELEMENTS,(data)=>{

                    STORE("",'ImageThree',data);

                });

            });

        });

        ICONED(ELEMENT,'',WHITEUSERICON,"100%",(ELEMENTS)=>{

            STYLED(ELEMENTS,'height','fit-content');
            STYLED(ELEMENTS,'background','#cdcdcd');

            EVENT(ELEMENTS,'click',()=>{

                IMAGERPICKER(ELEMENTS,(data)=>{

                    STORE("",'ImageFour',data);

                });

            });

        });

        ICONED(ELEMENT,'',WHITEUSERICON,"100%",(ELEMENTS)=>{

            STYLED(ELEMENTS,'height','fit-content');
            STYLED(ELEMENTS,'background','#cdcdcd');

            EVENT(ELEMENTS,'click',()=>{

                IMAGERPICKER(ELEMENTS,(data)=>{

                    STORE("",'ImageFive',data);

                });

            });

        });

        ROUNDBUTTON(ELEMENT,'SendButton','blue','Share Now','','50%',()=>{

            if (!sessionStorage.getItem("UserName")) {

                alert("Enter Your Name");

                return
                
            };

            if (!sessionStorage.getItem("UserLocation")) {

                alert("Enter Your Location");

                return
                
            };

            if (!sessionStorage.getItem("UserEmail")) {

                alert("Enter Your Email");

                return
                
            };

            if (!sessionStorage.getItem("UserStory")) {

                alert("Please Tell Us Your  Story");

                return
                
            };

            NETWORKFUNCTIONS('',()=>{

                LOADERPAGE('',(FTS)=>{

                    const HEADER=['UserName','UserEmail','UserStory','UserLocation','Date','ImageOne','ImageTwo','ImageThree','ImageFour','ImageFive','Device','Admin'];

                    DEVICED((device)=>{

                        const DATA=[sessionStorage.getItem('UserName'),sessionStorage.getItem('UserEmail'),sessionStorage.getItem('UserStory'),sessionStorage.getItem('UserLocation'),new Date(),sessionStorage.getItem('ImageOne'),sessionStorage.getItem('ImageTwo'),sessionStorage.getItem('ImageThree'),sessionStorage.getItem('ImageFour'),sessionStorage.getItem('ImageFive'),device,'NotAdmin'];

                        INSERTDATA(LINk,'CommunityRiseNews',HEADER,DATA,(res)=>{

                            if (res.error === true ) {

                                alert("Story Adding Failed");

                                STYLED(FTS,'Display','none');
                                
                            }

                            DATABASESAVER(LINk,'CommunityRiseNews','CommunityRiseNews','CommunityRiseNews',(returneddata)=>{

                                if (returneddata === false ) {

                                    DATABASEUPDATER(LINk,'CommunityRiseNews','CommunityRiseNews','CommunityRiseNews','CommunityRiseNews');
                                    
                                    HIDER(1000,()=>{

                                        NAVIGATOR('',WEBANDROIDNEWSPAGE,'WEBANDROIDPAGE');

                                    });

                                };

                                NAVIGATOR('',WEBANDROIDNEWSPAGE,'WEBANDROIDPAGE');

                            });

                        });

                    });

                });

            });
        
        });

        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);
    
    });

};

const WEBANDROIDDONATEPAGE=()=>{

    CLEAR("");

    HEADER('','','','','50px',(ELEMENTS)=>{

        STYLED(ELEMENTS,'position','sticky');

        ICONED(ELEMENTS,'',WHITEBACKICON,'25px',(ELEMENTED)=>{

            STYLED(ELEMENTED,'background','#cdcdcd');
            STYLED(ELEMENTED,'margin-left','1%');
            STYLED(ELEMENTED,'padding','2%');
            STYLED(ELEMENTED,'border-radius','50px');

            EVENT(ELEMENTED,'click',()=>{

                NAVIGATOR('',WEBANDROIDABOUTPAGE,'WEBANDROIDABOUTPAGE');

            });

        });

       TEXTED(ELEMENTS,'p','','Donate','18px','blue',(ELEMENT)=>{

            STYLED(ELEMENT,'margin-right','2%');
           

       });

    });

    SCROLLVIEW("",'','transparent',(ELEMENT)=>{

        ICONED(ELEMENT,'',localStorage.getItem('AppIcon'),'',(ELEMENTED)=>{

            STYLED(ELEMENTED,'width','fit-content');
            STYLED(ELEMENTED,'height','50%');

        });

        TEXTED(ELEMENT,'p','','Community Rise Ventures','18px','blue',(ELEMENT)=>{

            
       });

        ROUNDINPUT(ELEMENT,'','Enter Your Name','',(data)=>{

            STORE("",'UserName',data);

        });

        ROUNDINPUT(ELEMENT,'','Enter Your location','',(data)=>{

            STORE("",'UserLocation',data);

        });

        ROUNDINPUT(ELEMENT,'','Enter Your Email','',(data)=>{

            STORE("",'UserEmail',data);

        });

        TEXTAREA(ELEMENT,'','Information About the Donation',(data)=>{

            STORE("",'UserStory',data);

        });

        const MESSAGE=`When You Donate Today ,You Officially Join the Parthnership Program .<br><br>This Officailly Enables You Track The Activities of Our Organisation and be Updated on the Events Happening Now!!!.
       
        `;
       
        TEXTED(ELEMENT,'p','',MESSAGE,'18px','#000000',(ELEMENTED)=>{
                
                STYLED(ELEMENTED,'text-align','left');
                STYLED(ELEMENTED,'width','98%');
                STYLED(ELEMENTED,'margin-left','2%');
    
        });

       IMAGEBUTTON(ELEMENT,'','blue','Donate Now','',WHITESUBSCRIPTIONICON,()=>{
        
       });

       BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);
       BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);
       
    });

};