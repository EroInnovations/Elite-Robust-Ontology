const DESKTOPLOGINPAGE=()=>{

    DELETESTORAGE("",'UserEmail');
    DELETESTORAGE("",'UserPassword');

    CLEAR('');

    VIEW('','','','50%','50%',(ELEMENT)=>{

        STYLED(ELEMENT,'margin-top','15%');

        TEXT(ELEMENT,'p','','Sign In To Access','20px','forestgreen',()=>{

        });

        ROUNDINPUT(ELEMENT,'','Enter Email','email',(data)=>{

            STORE('','UserEmail',data);

        });

        ROUNDINPUT(ELEMENT,'','Enter Password','password',(data)=>{

            STORE('','UserPassword',data);

        });

        ROUNDBUTTON(ELEMENT,'','blue','Sign In','','50%',()=>{

            if (!sessionStorage.getItem('UserEmail')) {

                alert("Enter User Email");

                return;
                
            };

            if (!sessionStorage.getItem('UserPassword')) {

                alert("Enter User Password");

                return;
                
            };

            NETWORKTASKER(()=>{

                LOADERPAGE(ELEMENT,(LTF)=>{

                    const LINKUSERS=`https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit?usp=sharing`;

                    MYACCOUNT(LINKUSERS,'AppManagerUsers',sessionStorage.getItem('UserEmail'),'UserEmail',(data)=>{

                        console.log(data);

                        if (data === false ) {

                            alert('No User Account');

                            STYLED(LTF,'display','none');
                            
                        } else {

                            if (data.UserPassword===sessionStorage.getItem('UserPassword')) {

                                JSONIFICATION(data,(MyData)=>{

                                    STORE('local','UserData',MyData);

                                    NAVIGATOR('',DESKTOPHOMEPAGE,'DESKTOPHOMEPAGE');

                                });

                            } else {

                                STYLED(LTF,'display','none');
                               
                                alert('Wrong User Password');
                            };
                            
                        };

                    });

                });

            });

        });

    });

};

const DESKTOPHOMEPAGE=()=>{

    CLEAR("");

    VIEW('','HomeDiv','','70%','100%',(ELEMENT)=>{

        CLEAR(ELEMENT);

        STYLED(ELEMENT,'position','absolute');
        STYLED(ELEMENT,'margin-top','0%');
        STYLED(ELEMENT,'right','0%');

        PROJECTCHECKER('Home',ELEMENT);

    });
    
    VIEW('','','transparent','30%','100%',(ELEMENT)=>{

        CLEAR(ELEMENT);

        STYLED(ELEMENT,'position','absolute');
        STYLED(ELEMENT,'left','0%');
        STYLED(ELEMENT,'margin-top','0%');

        BUTTON(ELEMENT,'','blue','FrameWork','','50%',()=>{

        });

        BUTTON(ELEMENT,'','blue','Projects','',()=>{

            DESKTOPPROJECTPAGE(ELEMENT);

        });

        BUTTON(ELEMENT,'','blue','Data Base','',()=>{

        });

        BUTTON(ELEMENT,'','orange','Sync Projects','',()=>{

            RELOADPAGE();

        });

    });

};

const DESKTOPPROJECTPAGE=(ELEMENT)=>{

    STORE('','PagesNamed','CurrentProjects');

    CLEAR(ELEMENT);

    PROJECTCHECKER();

    BUTTON(ELEMENT,'','blue','New Project','',()=>{

        STORE('','PagesNamed','NewProject');

        PROJECTCHECKER();

    });

    BUTTON(ELEMENT,'','blue','Current Projects','',()=>{

        STORE('','PagesNamed','CurrentProjects');

        PROJECTCHECKER();

    });

    BUTTON(ELEMENT,'','orange','Menu','',()=>{

        NAVIGATOR('',DESKTOPHOMEPAGE,'DESKTOPHOMEPAGE');

    });

};

const DESKTOPNEWPROJECT=(ELEMENT)=>{

    DELETESTORAGE('','AndroidDesign');DELETESTORAGE('','AndroidFunctions');DELETESTORAGE('','AndroidStyle');DELETESTORAGE('','Configurations');DELETESTORAGE('','Constant');DELETESTORAGE('','Description');DELETESTORAGE('','AndroidDesign');DELETESTORAGE('','AndroidDesign');DELETESTORAGE('','DesktopDesign');DELETESTORAGE('','DesktopFunctions');DELETESTORAGE('','DesktopStyle');DELETESTORAGE('','Em1Function');DELETESTORAGE('','Em1Style');DELETESTORAGE('','Em2Function');DELETESTORAGE('','Em2Style');DELETESTORAGE('','Logic');DELETESTORAGE('','ProjectName');DELETESTORAGE('','SharedFunctions');DELETESTORAGE('','SharedStyles');DELETESTORAGE('','Version');DELETESTORAGE('','AndroidDesign');DELETESTORAGE('','AndroidDesign');DELETESTORAGE('','WebDesign');DELETESTORAGE('','WebFunctions');DELETESTORAGE('','WebStyles');DELETESTORAGE('','General');DELETESTORAGE('','AppIcons');


        IMAGEHOLDER(ELEMENT,'NewImage',localStorage.getItem("AppIcon"),'','','',()=>{

            DECLARATION(".NewImage",(ELEME)=>{

                STYLED(ELEME,'border','1px solid brown')
    
                IMAGERPICKER(ELEME,(data)=>{

                    STORE("",'AppIcons',data);
    
                });
    
            });
    
        });
    
        ROUNDINPUT(ELEMENT,'ProjectName','Enter Project Name','text',(data)=>{

            STORE("",'ProjectName',data);
    
        });
    
        ROUNDINPUT(ELEMENT,'Configurations','Enter Configurations','text',(data)=>{

            STORE("",'Configurations',data);

        });

        ROUNDINPUT(ELEMENT,'Version','Enter Project Verison','text',(data)=>{

            STORE("",'Version',data);

        });
    
        TEXTAREA(ELEMENT,'Description','Project Description',(data)=>{

            STORE("",'Description',data);
   
        });
    
        TEXT(ELEMENT,'h4','','ANDROID SERVER','20px','forestgreen',()=>{
    
        });
    
        TEXTAREA(ELEMENT,'AndroidDesign','Design Server',(data)=>{

            STORE("",'AndroidDesign',data);

    
        });
    
        TEXTAREA(ELEMENT,'AndroidFunctions','Function Server',(data)=>{

            STORE("",'AndroidFunctions',data);
    
        });
    
        TEXTAREA(ELEMENT,'AndroidStyle','Style Server',(data)=>{

            STORE("",'AndroidStyle',data);
    
        });
    
        TEXT(ELEMENT,'h4','','DESKTOP SERVER','20px','forestgreen',()=>{
    
        });
    
        TEXTAREA(ELEMENT,'DesktopDesign','Design Server',(data)=>{

            STORE("",'DesktopDesign',data);

        });
    
        TEXTAREA(ELEMENT,'DesktopFunctions','Function Server',(data)=>{

            STORE("",'DesktopFunctions',data);

        });
    
        TEXTAREA(ELEMENT,'DesktopStyle','Style Server',(data)=>{

            STORE("",'DesktopStyle',data);

        });
    
        TEXT(ELEMENT,'h4','','WEB SERVER','20px','forestgreen',()=>{

        });
    
        TEXTAREA(ELEMENT,'WebDesign','Design Server',(data)=>{

            STORE("",'WebDesign',data);
    
        });
    
        TEXTAREA(ELEMENT,'WebFunctions','Function Server',(data)=>{

            STORE("",'WebFunctions',data);

        });
    
        TEXTAREA(ELEMENT,'WebStyles','Style Server',(data)=>{

            STORE("",'WebStyles',data);

        });
    
        TEXT(ELEMENT,'h4','','CORE SERVER','20px','forestgreen',()=>{
    
        });
    
        TEXTAREA(ELEMENT,'Logic','Logic Server',(data)=>{

            STORE("",'Logic',data);

        });
    
        TEXTAREA(ELEMENT,'Constant','Constant Server',(data)=>{

            STORE("",'Constant',data);

        });

        TEXTAREA(ELEMENT,'General','General Server',(data)=>{

            STORE("",'General',data);
   
        });
    
        TEXT(ELEMENT,'h4','','SHARED SERVER','20px','forestgreen',()=>{
        });
    
        TEXTAREA(ELEMENT,'SharedFunctions','Functions Server',(data)=>{

            STORE("",'SharedFunctions',data);

        });
    
        TEXTAREA(ELEMENT,'SharedStyles','Styles Server ',(data)=>{

            STORE("",'SharedStyles',data);

        });
    
        TEXT(ELEMENT,'h4','','EMERGENCY SERVER','20px','forestgreen',()=>{
    
        });
    
        TEXTAREA(ELEMENT,'Em1Function','Functions Server One ',(data)=>{

            STORE("",'Em1Function',data);
    
        });

        TEXTAREA(ELEMENT,'Em2Function','Functions Server Two',(data)=>{

            STORE("",'Em2Function',data);
  
        });
    
        TEXTAREA(ELEMENT,'Em1Style','Styles Server One',(data)=>{

            STORE("",'Em1Style',data);
  
        });

        TEXTAREA(ELEMENT,'Em2Style','Styles Server One',(data)=>{

            STORE("",'Em2Style',data);

        });
    
        BUTTON(ELEMENT,'','blue','Update Projects','',()=>{

            const requiredKeys = [
                'AndroidDesign', 'AndroidFunctions', 'AndroidStyle', 'Configurations', 'Constant',
                'Description', 'DesktopDesign', 'DesktopFunctions', 'DesktopStyle', 'Em1Function', 
                'Em1Style', 'Em2Function', 'Em2Style', 'Logic', 'ProjectName', 'SharedFunctions', 
                'SharedStyles', 'Version', 'WebDesign', 'WebFunctions', 'WebStyles','General','AppIcons'
            ];
            
            let missingItems = requiredKeys.some(key => sessionStorage.getItem(key));
            
            if (missingItems) {
                
                if (localStorage.getItem("NetWork")) {

                    DEJSON('local','UserData',(USers)=>{

                        const HEADER=[sessionStorage.getItem('ProjectName'),sessionStorage.getItem('AndroidDesign'),sessionStorage.getItem('DesktopDesign'),sessionStorage.getItem('WebDesign'),sessionStorage.getItem('AndroidFunctions'),sessionStorage.getItem('DesktopFunctions'),sessionStorage.getItem('WebFunctions'),sessionStorage.getItem('AndroidStyle'),sessionStorage.getItem('DesktopStyle'),sessionStorage.getItem('WebStyles'),sessionStorage.getItem('SharedStyles'),sessionStorage.getItem('Em1Style'),sessionStorage.getItem('Em2Style'),sessionStorage.getItem('SharedFunctions'),sessionStorage.getItem('Logic'),sessionStorage.getItem('Constant'),sessionStorage.getItem('General'),sessionStorage.getItem('Em1Function'),sessionStorage.getItem('Em2Function'),'',sessionStorage.getItem('Version'),sessionStorage.getItem('Configurations'),sessionStorage.getItem('Description'),sessionStorage.getItem('AppIcons'),new Date(),USers.ID];
                    
                        LOADERPAGE(ELEMENT,(FTS)=>{
    
                            INSERTDATA(CONNECTORLINK,'AppManager',PROJECTHEADER,HEADER,(res)=>{
    
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
                                    
                                    alert('Failed To Update ,Try Again');
    
                                };
        
                            });
    
                        });

                    });

                } else {

                    alert('No Internet Connection');

                };

            } else {

                alert("No Updates Added");

            };
            
        });

};

const DESKTOPNOWROJECT=(ELEMENT)=>{

    DELETESTORAGE('','AndroidDesign');DELETESTORAGE('','AndroidFunctions');DELETESTORAGE('','AndroidStyle');DELETESTORAGE('','Configurations');DELETESTORAGE('','Constant');DELETESTORAGE('','Description');DELETESTORAGE('','AndroidDesign');DELETESTORAGE('','AndroidDesign');DELETESTORAGE('','DesktopDesign');DELETESTORAGE('','DesktopFunctions');DELETESTORAGE('','DesktopStyle');DELETESTORAGE('','Em1Function');DELETESTORAGE('','Em1Style');DELETESTORAGE('','Em2Function');DELETESTORAGE('','Em2Style');DELETESTORAGE('','Logic');DELETESTORAGE('','ProjectName');DELETESTORAGE('','SharedFunctions');DELETESTORAGE('','SharedStyles');DELETESTORAGE('','Version');DELETESTORAGE('','AndroidDesign');DELETESTORAGE('','AndroidDesign');DELETESTORAGE('','WebDesign');DELETESTORAGE('','WebFunctions');DELETESTORAGE('','WebStyles');DELETESTORAGE('','General');DELETESTORAGE('','AppIcons');

    DEJSON('','ProjectData',(Clouddata)=>{

        IMAGEHOLDER(ELEMENT,'NewImage',Clouddata.AppIcons,'','','',()=>{

            DECLARATION(".NewImage",(ELEME)=>{

                STYLED(ELEME,'border','1px solid brown')
    
                IMAGERPICKER(ELEME,(data)=>{

                    STORE("",'AppIcons',data);
    
                });
    
            });
    
        });
    
        ROUNDINPUT(ELEMENT,'ProjectName','Enter Project Name','text',(data)=>{

            STORE("",'ProjectName',data);

            UPDATEDDATACHECKER('.ProjectName',Clouddata.ProjectName);
    
        });
    
        ROUNDINPUT(ELEMENT,'Configurations','Enter Configurations','text',(data)=>{

            STORE("",'Configurations',data);

            UPDATEDDATACHECKER('.Configurations',Clouddata.AppJson);
    
        });

        ROUNDINPUT(ELEMENT,'Version','Enter Project Verison','text',(data)=>{

            STORE("",'Version',data);

            UPDATEDDATACHECKER('.Version',Clouddata.AppVersion);
    
        });
    
        TEXTAREA(ELEMENT,'Description','Project Description',(data)=>{

            STORE("",'Description',data);

            UPDATEDDATACHECKER('.Description',Clouddata.AppDetails);
    
        });
    
        TEXT(ELEMENT,'h4','','ANDROID SERVER','20px','forestgreen',()=>{
    
        });
    
        TEXTAREA(ELEMENT,'AndroidDesign','Design Server',(data)=>{

            STORE("",'AndroidDesign',data);

            UPDATEDDATACHECKER('.AndroidDesign',Clouddata.Functions);
    
        });
    
        TEXTAREA(ELEMENT,'AndroidFunctions','Function Server',(data)=>{

            STORE("",'AndroidFunctions',data);

            UPDATEDDATACHECKER('.AndroidFunctions',Clouddata.FunctionThree);
    
        });
    
        TEXTAREA(ELEMENT,'AndroidStyle','Style Server',(data)=>{

            STORE("",'AndroidStyle',data);

            UPDATEDDATACHECKER('.AndroidStyle',Clouddata.Styles);
    
        });
    
        TEXT(ELEMENT,'h4','','DESKTOP SERVER','20px','forestgreen',()=>{
    
        });
    
        TEXTAREA(ELEMENT,'DesktopDesign','Design Server',(data)=>{

            STORE("",'DesktopDesign',data);

            UPDATEDDATACHECKER('.DesktopDesign',Clouddata.FunctionsOne);
    
        });
    
        TEXTAREA(ELEMENT,'DesktopFunctions','Function Server',(data)=>{

            STORE("",'DesktopFunctions',data);

            UPDATEDDATACHECKER('.DesktopFunctions',Clouddata.FunctionFour);
    
        });
    
        TEXTAREA(ELEMENT,'DesktopStyle','Style Server',(data)=>{

            STORE("",'DesktopStyle',data);
    
            UPDATEDDATACHECKER('.DesktopStyle',Clouddata.StylesOne);

        });
    
        TEXT(ELEMENT,'h4','','WEB SERVER','20px','forestgreen',()=>{

        });
    
        TEXTAREA(ELEMENT,'WebDesign','Design Server',(data)=>{

            STORE("",'WebDesign',data);

            UPDATEDDATACHECKER('.WebDesign',Clouddata.FunctionTwo);
    
        });
    
        TEXTAREA(ELEMENT,'WebFunctions','Function Server',(data)=>{

            STORE("",'WebFunctions',data);

            UPDATEDDATACHECKER('.WebFunctions',Clouddata.FunctionFive);
    
        });
    
        TEXTAREA(ELEMENT,'WebStyles','Style Server',(data)=>{

            STORE("",'WebStyles',data);

            UPDATEDDATACHECKER('.WebStyles',Clouddata.StylesTwo);
    
        });
    
        TEXT(ELEMENT,'h4','','CORE SERVER','20px','forestgreen',()=>{
    
        });
    
        TEXTAREA(ELEMENT,'Logic','Logic Server',(data)=>{

            STORE("",'Logic',data);

            UPDATEDDATACHECKER('.Logic',Clouddata.JsonOne);
    
        });
    
        TEXTAREA(ELEMENT,'Constant','Constant Server',(data)=>{

            STORE("",'Constant',data);

            UPDATEDDATACHECKER('.Constant',Clouddata.JsonTwo);
    
        });

        TEXTAREA(ELEMENT,'General','General Server',(data)=>{

            STORE("",'General',data);

            UPDATEDDATACHECKER('.General',Clouddata.JsonTwo);
    
        });
    
        TEXT(ELEMENT,'h4','','SHARED SERVER','20px','forestgreen',()=>{
        });
    
        TEXTAREA(ELEMENT,'SharedFunctions','Functions Server',(data)=>{

            STORE("",'SharedFunctions',data);

            UPDATEDDATACHECKER('.SharedFunctions',Clouddata.Jsoni);
    
        });
    
        TEXTAREA(ELEMENT,'SharedStyles','Styles Server ',(data)=>{

            STORE("",'SharedStyles',data);

            UPDATEDDATACHECKER('.SharedStyles',Clouddata.StylesThree);
    
        });
    
        TEXT(ELEMENT,'h4','','EMERGENCY SERVER','20px','forestgreen',()=>{
    
        });
    
        TEXTAREA(ELEMENT,'Em1Function','Functions Server One ',(data)=>{

            STORE("",'Em1Function',data);

            UPDATEDDATACHECKER('.Em1Function',Clouddata.JsonFour);
    
        });

        TEXTAREA(ELEMENT,'Em2Function','Functions Server Two',(data)=>{

            STORE("",'Em2Function',data);

            UPDATEDDATACHECKER('.Em2Function',Clouddata.JsonFive);
    
        });
    
        TEXTAREA(ELEMENT,'Em1Style','Styles Server One',(data)=>{

            STORE("",'Em1Style',data);

            UPDATEDDATACHECKER('.Em1Style',Clouddata.StylesFour);
    
        });

        TEXTAREA(ELEMENT,'Em2Style','Styles Server One',(data)=>{

            STORE("",'Em2Style',data);

            UPDATEDDATACHECKER('.Em2Style',Clouddata.StylesFive);
    
        });
    
        BUTTON(ELEMENT,'','blue','Update Projects','',()=>{

            const requiredKeys = [
                'AndroidDesign', 'AndroidFunctions', 'AndroidStyle', 'Configurations', 'Constant',
                'Description', 'DesktopDesign', 'DesktopFunctions', 'DesktopStyle', 'Em1Function', 
                'Em1Style', 'Em2Function', 'Em2Style', 'Logic', 'ProjectName', 'SharedFunctions', 
                'SharedStyles', 'Version', 'WebDesign', 'WebFunctions', 'WebStyles','General'
            ];
            
            let missingItems = requiredKeys.some(key => sessionStorage.getItem(key));
            
            if (missingItems) {
                
                if (localStorage.getItem("NetWork")) {

                    const HEADER=[sessionStorage.getItem('ProjectName')||Clouddata.ProjectName,sessionStorage.getItem('AndroidDesign')||Clouddata.Functions,sessionStorage.getItem('DesktopDesign')||Clouddata.FunctionsOne,sessionStorage.getItem('WebDesign')||Clouddata.FunctionTwo,sessionStorage.getItem('AndroidFunctions')||Clouddata.FunctionThree,sessionStorage.getItem('DesktopFunctions')||Clouddata.FunctionFour,sessionStorage.getItem('WebFunctions')||Clouddata.FunctionFive,sessionStorage.getItem('AndroidStyle')||Clouddata.Styles,sessionStorage.getItem('DesktopStyle')||Clouddata.StylesOne,sessionStorage.getItem('WebStyles')||Clouddata.StylesTwo,sessionStorage.getItem('SharedStyles')||Clouddata.StylesThree,sessionStorage.getItem('Em1Style')||Clouddata.StylesFour,sessionStorage.getItem('Em2Style')||Clouddata.StylesFive,sessionStorage.getItem('SharedFunctions')||Clouddata.Jsoni,sessionStorage.getItem('Logic')||Clouddata.JsonOne,sessionStorage.getItem('Constant')||Clouddata.JsonTwo,sessionStorage.getItem('General')||Clouddata.JsonThree,sessionStorage.getItem('Em1Function')||Clouddata.JsonFour,sessionStorage.getItem('Em2Function')||Clouddata.JsonFive,Clouddata.AppCredits,sessionStorage.getItem('Version')||Clouddata.AppVersion,sessionStorage.getItem('Configurations')||Clouddata.AppJson,sessionStorage.getItem('Description')||Clouddata.AppDetails,sessionStorage.getItem('AppIcons')||Clouddata.AppIcons,Clouddata.CreatedOn,Clouddata.Owner];
                    
                    LOADERPAGE(ELEMENT,(FTS)=>{

                        UPDATEDATA(CONNECTORLINK,'AppManager',Clouddata.ID,HEADER,(res)=>{

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
                                
                                alert('Failed To Update ,Try Again');

                                STYLED(FTS,'display','none');

                            };
    
                        });

                    });

                } else {

                    alert('No Internet Connection');

                };

            } else {

                alert("No Updates Added");

            };
            
        });

    });

};