const PROJECTCHECKER=()=>{

    DECLARATION(".HomeDiv",(ELE)=>{

        CLEAR(ELE);

        if (sessionStorage.getItem("PagesNamed") === 'CurrentProjects' ) {

            DESKTOPPROJECTS(ELE);
            
            return;
        };

        if (sessionStorage.getItem("PagesNamed") === 'NewProject' ) {

            DESKTOPNEWPROJECT(ELE);
            
            return;
        };

        if (sessionStorage.getItem("PagesNamed") === 'NowProject' ) {

            DESKTOPNOWROJECT(ELE);
            
            return;
        };

    });

};

const DESKTOPPROJECTS=(ELEMENT)=>{
    
    DATAGETTER("AppManager",'AppManager',(data)=>{

        VIEW(ELEMENT,'','','30%','30%',(ELEMENTS)=>{

            STYLED(ELEMENTS,'display','inline-table');
            STYLED(ELEMENTS,'margin-left','1%');
            STYLED(ELEMENTS,'margin-right','1%');
            STYLED(ELEMENTS,'border','1px solid brown');
            STYLED(ELEMENTS,'padding','0.5%');

            if (data.ID === 'a42bb6c4-ffc5-4d52-a70d-61630d996ee9' && data.ID === '6145e720-f598-46fa-bd8b-0fbb9f2ff71e' || data.AppCredits ) {
                
                STYLED(ELEMENTS,'display','none');
            };

            IMAGEHOLDER(ELEMENTS,'',data.AppIcons,'transparent','','',()=>{

                CURRENTPROJECTDISPLAY(ELEMENT,data);

            });

        });

    });

};

const CURRENTPROJECTDISPLAY=(ELEMENT,data)=>{

    CLEAR(ELEMENT);

    IMAGEHOLDER(ELEMENT,'',data.AppIcons,'transparent','','',()=>{

        CURRENTPROJECTDISPLAY(ELEMENT,data);

    });
    
    TEXT(ELEMENT,'h4','',data.ProjectName,'20px','forestgreen',()=>{

    });
    
    BUTTON(ELEMENT,'','blue','Update Projects','',()=>{

        JSONIFICATION(data,(MyApp)=>{

            STORE("",'ProjectData',MyApp);

            STORE('','PagesNamed','NowProject');

            PROJECTCHECKER();

        });

    });

    BUTTON(ELEMENT,'','blue','Delete Projects','',()=>{

        if (localStorage.getItem("NetWork")) {

                const HEADER=[data.ProjectName,data.Functions,data.FunctionsOne,data.FunctionTwo,data.FunctionThree,data.FunctionFour,data.FunctionFive,data.Styles,data.StylesOne,data.StylesTwo,data.StylesThree,data.StylesFour,data.StylesFive,data.Jsoni,data.JsonOne,data.JsonTwo,data.JsonThree,data.JsonFour,data.JsonFive,'TRUE',data.AppVersion,data.AppJson,data.AppDetails,data.AppIcons,data.CreatedOn,data.Owner];
                    
                LOADERPAGE(ELEMENT,(FTS)=>{

                    UPDATEDATA(CONNECTORLINK,'AppManager',data.ID,HEADER,(res)=>{

                        if (res.error === false  ) {

                            DATABASESAVER(CONNECTORLINK,'AppManager','AppManager','AppManager',(data)=>{

                                if (data === false ) {
                    
                                    DATABASEUPDATER(CONNECTORLINK,'AppManager','AppManager','AppManager');
                                    
                                };

                                HIDER(2000,()=>{

                                    STORE('','PagesNamed','CurrentProjects');

                                    PROJECTCHECKER();

                                });
                    
                            });
                            
                        } else {

                            STYLED(FTS,'display','none');
                            
                            alert('Failed To Delete ,Try Again');

                        };

                    });

                });

        } else {

            alert('No Internet Connection');

        };

    });

};