const ADD=(ELEMENT,DATA)=>{if(ELEMENT){ELEMENT.append(DATA);}else{document.querySelector("body").append(DATA);};};
const CLICK=(ELEMENT,callback)=>{ELEMENT.addEventListener("click",()=>{callback();});};
const CREATEELEMENT=(ELEMENT,TYPE,CLASS,callback)=>{const ELEMENT1=document.createElement(TYPE);ELEMENT1.classList.add(CLASS);callback(ELEMENT1);if(ELEMENT){ELEMENT.append(ELEMENT1);}else {document.querySelector('body').append(ELEMENT1);};};
const CLEAR=(ELEMENT)=>{if(ELEMENT){ELEMENT.innerHTML='';}else{document.querySelector("body").innerHTML='';};};
const DISPLAY=(ELEMENT,DATA)=>{if(ELEMENT){ELEMENT.innerHTML=DATA;}else{document.querySelector("body").innerHTML=DATA;};};
const APPMODE=(COLOR)=>{const body = document.querySelector("body");body.style.background = COLOR || '#cdcdcd';if(localStorage.getItem('Environment') === 'Production'){changeWebViewBackground(COLOR);};};
const BODY=()=>{const ELEMENT=document.querySelector('body');ELEMENT.style.width='100%';ELEMENT.style.height='100%';ELEMENT.style.textAlign='center';ELEMENT.style.margin='0';ELEMENT.style.padding='0';ELEMENT.style.listStyle='none';ELEMENT.style.textDecoration='none';ELEMENT.style.fontFamily='sans-serif,Camberia';if(localStorage.getItem('Environment') === 'Web'||'Development' ){ELEMENT.style.overflowY='auto';ELEMENT.style.overflowX='hidden';ELEMENT.style.position='relative';}else{ELEMENT.style.overflow='hidden';ELEMENT.style.position='fixed';};};
const RELOAD=()=>{location.reload();};
const BREAK=(ELEMENT)=>{let ELEMENT1=document.createElement('br');if(ELEMENT){ELEMENT.append(ELEMENT1);}else {document.querySelector("body").append(ELEMENT1);};};
const STYLED=(ELEMENT,PROPERTY,VALUE)=>{ELEMENT.style[PROPERTY]=VALUE;};
const POSTPACKAGE=(LINK,POLICY,DATA,callback,callback1)=>{fetch(LINK,{method:'Post',mode:POLICY||'no-cors',body:JSON.stringify(DATA)}).then(res =>res.json()).then(data =>{callback(data)}).catch(error =>{callback1(error)});};
const STOREDATA=(TYPE,NAME,DATA)=>{if(TYPE){localStorage.setItem(NAME,DATA);} else {sessionStorage.setItem(NAME,DATA);};};
const CHECKER=(CONDITIONER,callback)=>{if(CONDITIONER){callback();return;};};
const CONDITION=(CONDITIONER,callback,callback1)=>{if(CONDITIONER){callback();}else{callback1();};};
const DELETEDATA=(TYPE,NAME)=>{if(TYPE){localStorage.removeItem(NAME);}else{sessionStorage.removeItem(NAME);};};
const JSONIFICATION=(DATA,callback)=>{let DAA=JSON.stringify(DATA);callback(DAA);};
const ROUTE=(NEWPAGE, FUNCTION, FUNCTIONBACK)=>{sessionStorage.setItem("PreviousPage", FUNCTIONBACK);if(NEWPAGE){history.pushState({ data: FUNCTION() }, "", "");}else{history.replaceState({ data: FUNCTION() }, "", "");};window.addEventListener("popstate",function (event){const previousPageFunction = sessionStorage.getItem("PreviousPage");if(previousPageFunction){const func = new Function("return " + previousPageFunction)();func();};});};
const DEJSON=(DATA,callback)=>{const DAA=JSON.parse(DATA);callback(DAA);};
const GETPACKAGE=(LINK,POLICY,callback,callback1)=>{fetch(LINK,{method:'Get',mode:POLICY||'no-cors',}).then(res =>res.json()).then(data =>{callback(data);}).catch(error =>{callback1(error);});};
const REDUX=(DATA,callback)=>{DATA.forEach(element => {callback(element);});};
const GETDATA=(LINK,NAME,callback,callback1)=>{const DATA={"sheetName":NAME,"spreadsheetUrl":LINK,};fetch('https://script.google.com/macros/s/AKfycbyHFabMyQk2EoZXk8VV-L4dBKPAe6knmhyAm1W6sQ9_WRmq5clAozbfIznoCHY0l1ssSQ/exec',{method:'Post',mode:'cors',body:JSON.stringify(DATA)}).then(res =>res.json()).then(data =>{callback(data)}).catch(error =>{callback1(error)});};
const CREATEDATABASE=(NAME,callback,callback1)=>{const DATA={"sheetName":NAME};fetch('https://script.google.com/macros/s/AKfycbxTemTTxcrvd6GwT7PDaHTreOfsDkjp1hWiXuJ4ItlPs5kY_eFEDD-jhJDErsnRxIVopA/exec',{method:'Post',mode:'cors',body:JSON.stringify(DATA)}).then(res =>res.json()).then(data =>{callback(data)}).catch(error =>{callback1(error)});};
const CREATETABLE=(LINK,NAME,callback,callback1)=>{const DATA={"sheetName":NAME,"spreadsheetUrl":LINK};fetch('https://script.google.com/macros/s/AKfycbwojB0t-HICmWw8e0ADZe9ApMKJqka8A1nLulnDScKN2YJoIvmjNkdnfnhFJMzWgKywJg/exec',{method:'Post',mode:'cors',body:JSON.stringify(DATA)}).then(res =>res.json()).then(data =>{callback(data)}).catch(error =>{callback1(error)});};
const INSERTDATA=(LINK,NAME,HEADERS,INFO,callback,callback1)=>{const DATA={"sheetName":NAME,"spreadsheetUrl":LINK,"Headers":HEADERS,"Data":INFO};fetch('https://script.google.com/macros/s/AKfycbys7SiB-Ifs1zwccTrXSL4NJwXhkqixg65DQS59YcyQ0VbKBmKDIEJFm6KVgSTNTh8PDw/exec',{method:'Post',mode:'cors',body:JSON.stringify(DATA)}).then(res =>res.json()).then(data =>{callback(data)}).catch(error =>{callback1(error)});};
const UPDATEDATA=(LINK,NAME,ID,INFO,callback,callback1)=>{const DATA={"sheetName":NAME,"spreadsheetUrl":LINK,"id":ID,"data":INFO,"action":"update"};fetch('https://script.google.com/macros/s/AKfycbxDMAxD8EYl1mqybaVnFgXh_5A8c2SpOydG12r8VxrWkB_UtjqBdpOkPWUi0przES9uBw/exec',{method:'Post',mode:'cors',body:JSON.stringify(DATA)}).then(res =>res.json()).then(data =>{callback(data)}).catch(error =>{callback1(error)});};
const STOREINDEXED=(dbName,storeName,data,callback)=>{let invoked = false;const cb = (success) => {if(!invoked && typeof callback === "function") {invoked = true;callback(success);}};const request = indexedDB.open(dbName, 1);request.onupgradeneeded = (e) => {const db = e.target.result;if (!db.objectStoreNames.contains(storeName)){db.createObjectStore(storeName, { keyPath: "Name" });}};request.onsuccess = (e) => {const db = e.target.result;if(!db.objectStoreNames.contains(storeName)){db.close();const newVersion = db.version + 1;const upgradeRequest = indexedDB.open(dbName, newVersion);upgradeRequest.onupgradeneeded = (e) => {const upgradeDb = e.target.result;upgradeDb.createObjectStore(storeName, { keyPath: "Name" });};upgradeRequest.onsuccess = (e) => {const upgradeDb = e.target.result;const tx = upgradeDb.transaction(storeName, "readwrite");const store = tx.objectStore(storeName);const addReq = store.add(data);addReq.onsuccess = () => {tx.oncomplete = () => cb(true);};addReq.onerror = (e) => cb(false);tx.onerror = (e) => cb(false);};upgradeRequest.onerror = (e) => cb(false);}else{const tx = db.transaction(storeName, "readwrite");const store = tx.objectStore(storeName);const addReq = store.add(data);addReq.onsuccess =()=>{tx.oncomplete = () => cb(true);};addReq.onerror = (e) => cb(false);tx.onerror =(e)=>cb(false);}};request.onerror = (e) => cb(false);};
const GETINDEXED=(dbName, storeName, callback)=>{const initialRequest = indexedDB.open(dbName);initialRequest.onsuccess = function(event){const db = event.target.result;if(!db.objectStoreNames.contains(storeName)){console.error(`Object store "${storeName}" not found.`);db.close();return;}const transaction = db.transaction(storeName, "readonly");const store = transaction.objectStore(storeName);const getAllRequest = store.getAll();getAllRequest.onsuccess = function (event) {const data = event.target.result;callback(data);};getAllRequest.onerror = function (event){console.error("Error retrieving data", event.target.error);};transaction.oncomplete = function(){console.log("Transaction completed");};transaction.onerror = function (event){console.error("Transaction error", event.target.error);};db.close();};initialRequest.onupgradeneeded = function (event) {console.error("Upgrade needed but not handled in this function. Please ensure the object store exists before calling GETINDEXED.");};initialRequest.onerror = function (event) {console.error("Error opening database", event.target.error);};};
const HIDER=(TIME,callback)=>{setTimeout(()=>{callback();},TIME||500);};
const REPEATER=(TIME,callback)=>{setInterval(()=>{callback();},TIME||500);};
const DATASORTER=(ARRAY,ELEMENT,callback)=>{if(ARRAY.includes(ELEMENT)){callback(true);}else{callback(false);}};
const JSONADDER=(data,contents,callback)=>{let MYDATA;try{MYDATA = JSON.parse(data)||[];}catch(e){MYDATA=[];}contents.forEach((content)=>{if(!MYDATA.includes(content)){MYDATA.push(content);}});const updatedJSON = JSON.stringify(MYDATA);callback(updatedJSON);};
const INSPECTION=()=>{if(localStorage.getItem("Environment") === 'Development'){}else{document.addEventListener('contextmenu',function(e){e.preventDefault();});document.addEventListener('keydown',function(e){if(e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J'))){e.preventDefault();};});document.addEventListener('keydown',function(e){if(e.ctrlKey && e.key === 'u'){e.preventDefault();};});const detectDevTools=()=>{const threshold = 160;const devToolsOpen = window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold;if (devToolsOpen) {window.resizeTo(window.outerWidth - 1, window.outerHeight - 1);window.resizeTo(window.outerWidth + 1, window.outerHeight + 1);};};setInterval(detectDevTools, 100);};};
const FINDER=(DATA, ELEMENT, ELEMENT1, ACTION) => {const user = DATA.find((item) => item[ELEMENT] === ELEMENT1);return ACTION(user ? user : false);};
const JSONREMOVER=(data,contents,callback)=>{let MYDATA;try {MYDATA = JSON.parse(data) || [];}catch(e){MYDATA = [];}contents.forEach((content) => {const index = MYDATA.indexOf(content);if(index > -1){MYDATA.splice(index, 1);}});const updatedJSON = JSON.stringify(MYDATA);callback(updatedJSON);};
const IMAGEPICKER=(imageElement, callback)=>{const input = document.createElement("input");input.type = "file";input.style.display = "none";input.accept = "image/*";document.body.appendChild(input);input.addEventListener("change",function(){var file = this.files[0];if(!file)return;var reader = new FileReader();reader.onload = function(event){var image = new Image();image.src = event.target.result;image.onload = function () {var maxWidth = 800;var maxHeight = 600;var canvas = document.createElement("canvas");var ctx = canvas.getContext("2d");var width = image.width;var height = image.height;if (width > height){if(width > maxWidth) {height *= maxWidth / width;width = maxWidth;}}else{if(height > maxHeight) {width *= maxHeight / height;height = maxHeight;}} canvas.width = width;canvas.height = height;ctx.clearRect(0, 0, canvas.width, canvas.height);ctx.drawImage(image, 0, 0, width, height);var base64Data;if (file.type === "image/png") {base64Data = canvas.toDataURL("image/png");}else{var quality = 0.7;base64Data = canvas.toDataURL("image/jpeg", quality);while (base64Data.length > 49800 && quality > 0){quality -= 0.1;base64Data = canvas.toDataURL("image/jpeg", quality);}}if (base64Data.length < 49800){imageElement.src = base64Data;callback(base64Data);sessionStorage.setItem("TakenPhoto", base64Data);}else{TOAST("Image Format Error");}};};reader.readAsDataURL(file);});input.click();input.remove();};
const AUDIOPICKER=(audioElement, callback) => {const input = document.createElement("input");input.type = "file";input.style.display = "none";input.accept = "audio/*";document.body.appendChild(input);input.addEventListener("change",function(){var file = this.files[0];if(!file)return;var reader = new FileReader();reader.onload = function(event) {var base64Data = event.target.result;var compressedBase64Data = resizeBase64Data(base64Data, 49800);if(compressedBase64Data){audioElement.src = compressedBase64Data;audioElement.play();callback(compressedBase64Data);}else{TOAST("Unable to resize the audio data within the character limit.");}};reader.readAsDataURL(file);});input.click();input.remove();function resizeBase64Data(base64Data, targetSize) {if (base64Data.length <= targetSize){return base64Data;}return base64Data.substring(0, targetSize);}};
const WEBSITE=(url) => {window.open(url);};
const TWITTER=(username) => {var twitterLink = "https://twitter.com/" + encodeURIComponent(username);window.open(twitterLink);};
const EVENT=(ELEMENT)=>{if (ELEMENT) {ELEMENT.addEventListener(ACTION,callback);}else{document.querySelector("body").addEventListener(ACTION,callback);}};
const TEXTFAMILY=(TYPE)=>{document.querySelector('body').style.fontFamily=TYPE||'Sans-serifs';};
const CLASS=(ELEMENT,NAME,callback)=>{ELEMENT.classList.add(NAME);callback(ELEMENT);};
const LOCALDEJSONDATA=(MYDATA,callback)=>{const DATA=localStorage.getItem(MYDATA);const MYDATATA=JSON.parse(DATA);callback(MYDATATA);};
const DOWNLOADIMAGE=(base64String, filename)=>{const link = document.createElement('a');link.href = base64String;link.download = filename;link.click();};
const RANDOMCODE=(callback)=>{let randomDigits = ''; for (let i = 0; i < 6; i++){randomDigits += Math.floor(Math.random() * 9) + 1;}callback(randomDigits);};
const GMAIL=(EMAIL)=>{var mailtoLink='mailto:'+encodeURIComponent(EMAIL);window.open(mailtoLink);};
const WHATSAPP=(NUMBER)=>{var whatsappLink='https://wa.me/'+encodeURIComponent(NUMBER);window.open(whatsappLink);};
const INSTAGRAM=(NAME)=>{var instagramLink='https://www.instagram.com/'+encodeURIComponent(NAME);window.open(instagramLink);};
const DATENOW=(callback)=>{callback(Date.now());};
const DECLASS=(ELEMENT, ID)=>{ELEMENT.classList.remove(ID);};
const CALL=(NUMBER)=>{const phoneNumber = NUMBER;window.location.href = "tel:" + phoneNumber;};
const COLORCHANGER=(ELEMENT)=>{let index = 0;intervalID = setInterval(()=>{index = (index + 1) % COLOR.length;STYLED(ELEMENT, "border", `1px solid ${COLOR[index].name}`);STYLED(ELEMENT, "background", "transparent");},2000);};
const STOPCOLORCHANGER=(ELEMENT, COLOR) => {clearInterval(intervalID);STYLED(ELEMENT, "border", "1px solid transparent");STYLED(ELEMENT, "background", COLOR);};
const FACEBOOK=(NAME)=>{var facebookLink='https://www.facebook.com/'+encodeURIComponent(NAME);window.open(facebookLink);};
const TELEGRAM=(NAME)=>{var telegramLink='https://t.me/'+encodeURIComponent(NAME);window.open(telegramLink);};
const TIMENOW=(callback)=>{callback(new Date());};
const SMS=(NUMBER)=>{const phoneNumber = NUMBER;window.location.href = 'sms:' + phoneNumber;};
const REVERSE=(data)=>{data.reverse();};
const SCREENHEIGHT=(callback)=>{callback(screen.height);};
const SCREENWIDTH=(callback)=>{callback(screen.width);};
const SCROLL=(ELEMENT,callback)=>{ELEMENT.addEventListener("scroll",()=>{callback();});};
const BACKPAGE=(NAME)=>{setTimeout(() => {sessionStorage.setItem('PreviousPage',NAME);},100);};
const COPY=function COPY(text, onSuccess) {navigator.clipboard.writeText(text).then(()=>{if(onSuccess){onSuccess();}}).catch(err => {console.error('Failed to copy text: ', err);});};
const DRIVEID=(url)=>{const regex = /(?:drive|docs)\/d\/([a-zA-Z0-9_-]+)/;const match = url.match(regex);if(match){return match[1];}else{throw new Error('Invalid Google Drive URL');}};
const TOAST=(Message)=>{if(localStorage.getItem('State')==='Web'){alert(Message);}else{if(localStorage.getItem('Environment')==='Production'){Android.showToast(Message);}else{console.log(Message);};};};
const DOLLAREXCHANGE = (CONVERSION, AMOUNT, callback)=>{let Amount;if(CONVERSION === 'USD'){Amount = AMOUNT / 3668.62;}else{Amount = AMOUNT * 3666;}const roundedAmount = Math.round(Amount * 100) / 100;callback(roundedAmount);};
const SITECLOSE=()=>{if (localStorage.getItem('Environment') === 'Production'||localStorage.getItem('OperatingSystem') === 'Android' ){Android.reloadApp();}else{window.close();};};
const SESSIONDEJSONDATA=(MYDATA,callback)=>{const DATA=sessionStorage.getItem(MYDATA);const MYDATATA=JSON.parse(DATA);callback(MYDATATA);};
const YOUTUBEUD=(url, callback) => {const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;const match = url.match(regex);if (match && match[1]){callback(match[1]);}else{callback(null);}};
const PROJECTUPDATE=(callback)=>{if (localStorage.getItem('Updates')) {callback();}else{localStorage.setItem('Updates','Approved');location.reload();};};
const MONTHTIME=(inputDate,callback)=> {const now = new Date();const date = new Date(inputDate);const oneMonthAgo = new Date(now);oneMonthAgo.setMonth(now.getMonth() - 1);const isValid = date >= oneMonthAgo && date <= now;if (typeof callback === 'function') {callback(isValid);}else{console.error("Provided callback is not a function.");}};
const URLCOLLECTOR=()=>{const url = new URL(window.location.href);const queryParams = {};url.searchParams.forEach((value, key) => {queryParams[key] = value;});const hash = url.hash ? url.hash.substring(1) : null;const pathSegments = url.pathname.split('/').filter(seg => seg);const dataToStore = {query: Object.keys(queryParams).length ? queryParams : null,hash: hash || null,path: pathSegments.length ? pathSegments : null,origin: url.origin,fullUrl: url.href};Object.keys(dataToStore).forEach(key => {if (dataToStore[key] === null) {delete dataToStore[key];}});sessionStorage.setItem('urlInfo', JSON.stringify(dataToStore));};
const DEVICE=(callback)=> {const deviceInfo = {userAgent: navigator.userAgent,platform: navigator.platform,language: navigator.language,screen: {width: screen.width,height: screen.height,availWidth: screen.availWidth,availHeight: screen.availHeight,colorDepth: screen.colorDepth,pixelDepth: screen.pixelDepth},online: navigator.onLine,memory: navigator.deviceMemory || 'Unknown',cores: navigator.hardwareConcurrency || 'Unknown'};if (typeof callback === 'function') {callback(deviceInfo);}};
const AUTOSTART=()=>{if(localStorage.getItem('Environment') === 'Development' ) {import('../Start/Start.js').then(module => {if (typeof module.START === 'function'){module.START();}else{console.error('START is not defined in the module');}}).catch(error => {console.error('Error loading the module:', error);});}else{import('https://eroinnovations.github.io/Elite-Robust-Ontology/Start/Start.js').then(module => {if(typeof module.START === 'function'){module.START();}else{console.error('START is not defined in the module');}}).catch(error => {console.error('Error loading the module:', error);});};};
const ZOOM=()=>{document.addEventListener("touchstart",function (event){if(event.touches.length > 1){event.preventDefault();};},{passive:false});document.addEventListener("wheel", function (event) {if ((event.ctrlKey || event.metaKey) && !event.shiftKey){event.preventDefault();};});};
const VISITOR=(API,NAME)=>{CONDITION(localStorage.getItem('Environment') === 'Development',()=>{console.log('Under Building');},()=>{if(sessionStorage.getItem('Visited')) {console.log('Already Visited');}else{DEVICE((data)=>{CHECKER(navigator.onLine,()=>{GETDATA(API,NAME,(MyData)=>{FINDER(MyData,'ID',localStorage.getItem('ID'),(Users)=>{CONDITION(Users.ID === localStorage.getItem('ID'),()=>{JSONADDER ( Users.RevistDate,[new Date()],(dataDat)=>{const INFO=[data,Users.Date,Users.Language,Users.DeviceScreen,dataDat,Users.VistedTimes+1,localStorage.getItem('OperatingSystem')];UPDATEDATA(API,NAME,Users.ID,INFO,(datata)=>{STOREDATA('','Visited','true');},()=>{});});},()=>{JSONADDER ( new Date(),[new Date()],(dataDat)=>{const HEADERS=['Users','Date','Language','DeviceScreen','RevistDate','VistedTimes','OperatingSystem'];const INFO=[data,new Date(),data.language,data.screen,dataDat,1,localStorage.getItem('OperatingSystem')];INSERTDATA(API,NAME,HEADERS,INFO,(datata)=>{STOREDATA(' ','ID',datata.uniqueId);STOREDATA('','Visited','true');},()=>{});});});});},()=>{})});});}});};
const VIDEOPICKER=(videoElement, callback) => {const input = document.createElement("input");input.type = "file";input.style.display = "none";input.accept = "video/*";document.body.appendChild(input);input.addEventListener("change", function(){var file = this.files[0];if(!file)return;var reader = new FileReader();reader.onload = function (event) {var base64Data = event.target.result;var compressedBase64Data = resizeBase64Data(base64Data, 49800);if (compressedBase64Data) {videoElement.src = compressedBase64Data;callback(compressedBase64Data);}else{TOAST("Unable to resize the video data within the character limit.");}};reader.readAsDataURL(file);});input.click();input.remove();function resizeBase64Data(base64Data, targetSize) {if (base64Data.length <= targetSize){return base64Data;}return base64Data.substring(0, targetSize);}};
const UPDATEINDEX=(dbName, storeName, data,callback) => {const request = indexedDB.open(dbName);request.onsuccess = function (event) {const db = event.target.result;if (!db.objectStoreNames.contains(storeName)) {console.error(`Object store "${storeName}" not found.`);db.close();return;};const transaction = db.transaction(storeName, "readwrite");const store = transaction.objectStore(storeName);const putRequest = store.put(data);putRequest.onsuccess = function () {callback();console.log("Data updated successfully");};putRequest.onerror = function (event) {console.error("Error updating data", event.target.error);};transaction.oncomplete = function () {console.log("Transaction completed");};transaction.onerror = function (event) {console.error("Transaction error", event.target.error);};db.close();};request.onerror = function (event) {console.error("Error opening database", event.target.error);};};
const EMAILSENDER=(EMAIL,SUBJECT,MESSAGE,callback,callback1)=>{const DATA={"recipientEmail":EMAIL,"subject":SUBJECT,"body":MESSAGE};fetch('https://script.google.com/macros/s/AKfycbyC-L2ywxLAfkjU7L8A4dgpJDnK4E26_ilcuHiQ1r0ZmACUgv7WEzoLbrCRnjJLd7Akdg/exec',{method:'Post',mode:'cors',body:JSON.stringify(DATA)}).then(res =>res.json()).then(data =>{callback(data);}).catch(error =>{callback1(error);});};
const GETINDEXEDDATA=(dbName, storeName, callback)=>{const initialRequest = indexedDB.open(dbName);initialRequest.onsuccess = function (event) {const db = event.target.result;if (!db.objectStoreNames.contains(storeName)) {console.error(`Object store "${storeName}" not found.`);db.close();return;};const transaction = db.transaction(storeName, "readonly");const store = transaction.objectStore(storeName);const getAllRequest = store.getAll();getAllRequest.onsuccess = function (event) {const data = event.target.result;data.forEach(element => {element.data.reverse().forEach(elements => {callback(elements);});});};getAllRequest.onerror = function (event) {console.error("Error retrieving data", event.target.error);};transaction.oncomplete = function () {console.log("Transaction completed");};transaction.onerror = function (event) {console.error("Transaction error", event.target.error);};db.close();};initialRequest.onupgradeneeded = function (event) {console.error("Upgrade needed but not handled in this function. Please ensure the object store exists before calling GETINDEXED.");};initialRequest.onerror = function (event) {console.error("Error opening database", event.target.error);};};
const OPERATINGSYSTEM=() => {const userAgent = navigator.userAgent || navigator.vendor || window.opera;let os = "Unknown OS";if (/windows phone/i.test(userAgent)) os = "Windows Phone";else if (/win/i.test(userAgent)) os = "Windows";else if (/android/i.test(userAgent)) os = "Android";else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) os = "iOS";else if (/Macintosh/i.test(userAgent)) os = "MacOS";else if (/Linux/i.test(userAgent)) os = "Linux";localStorage.setItem("OperatingSystem", os);return os;};
const GETTEXTPACKAGE=(LINK,POLICY,callback,callback1)=>{fetch(LINK,{method:'Get',mode:POLICY||'no-cors',}).then(res =>res.text()).then(data =>{callback(data);}).catch(error =>{callback1(error);});};
const POSTTEXTPACKAGE=(LINK,POLICY,DATA,callback,callback1)=>{fetch(LINK,{method:'Post',mode:POLICY||'no-cors',body:JSON.stringify(DATA)}).then(res =>res.text()).then(data =>{callback(data)}).catch(error =>{callback1(error)});};
const GETDRIVEFILE=(DATA,callback,callback1)=>{fetch('https://script.google.com/macros/s/AKfycbyZXeB9GlsrIOMu6C2jK7ImRgDq1ms0J0HbmjKDor4HwzjMRYK4S3YQ8QmMTJcqkkH9Iw/exec',{method:'Post',body:JSON.stringify({ fileId: DATA})}).then(res =>res.text()).then(data =>{callback(data)}).catch(error =>{callback1(error)});};
const FILEPICKER=(callback) => {const input = document.createElement("input");input.type = "file";input.style.display = "none";input.accept = "*/*"; document.body.appendChild(input);input.addEventListener("change", function () {var file = this.files[0];if (!file) return;const MAX_SIZE = 10 * 1024 * 1024;if (file.size > MAX_SIZE) {TOAST("The file is too large. Please select a file smaller than 10MB.");return;}var reader = new FileReader();reader.onload = function (event) {var base64Data = event.target.result;callback(base64Data);};reader.readAsDataURL(file);});input.click();input.remove();};
const QELMAIL=(EMAIL,SUBJECT,MESSAGE,callback,callback1)=>{const DATA={"recipientEmail":EMAIL,"subject":SUBJECT,"body":MESSAGE};fetch('https://script.google.com/macros/s/AKfycbzLPkLfp0XdfRYYIS3oBOOJ67yIWMM67gnOWkJO9YRoNsDjxxM6cZtexgWeBBbBNcL9og/exec',{method:'Post',mode:'cors',body:JSON.stringify(DATA)}).then(res =>res.json()).then(data =>{callback(data);}).catch(error =>{callback1(error);});};
const HOSTINGUPDATER=() => {if (navigator.onLine) {const DATA = {"spreadsheetUrl": "https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?gid=0#gid=0","sheetName": "APPMANAGER"};fetch('https://script.google.com/macros/s/AKfycbyHFabMyQk2EoZXk8VV-L4dBKPAe6knmhyAm1W6sQ9_WRmq5clAozbfIznoCHY0l1ssSQ/exec', {method: "POST",mode: "cors",body: JSON.stringify(DATA)}).then(res => res.json()).then(data => {data.forEach(element => {let appLogicDate = new Date(element.AppLogic);if (element.AppLogic === 'Development') {const INFO = [element.AppName,element.AppDescription,element.AppColors,element.AppConfiguration,element.AppCreatedOn,element.AppVersion,'',element.AppKeyWord,element.AppPackageName,element.AppCompany,element.AndroidDesign,element.AndroidFunctions,element.DesktopDesign,element.DesktopFunctions,element.WebDesign,element.WebFunctions,element.SharedDesign,element.SharedFunctions,element.AppLogic,element.AppRegion,'',element.AppCatergory,element.AppIcon,element.UpdatedOn,element.Owner];UPDATEDATA('https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?gid=0#gid=0', 'APPMANAGER', element.ID, INFO, (datata) => {}, (error) => {});} else if (appLogicDate instanceof Date && !isNaN(appLogicDate)) {if (new Date() >= appLogicDate) {const INFO = [element.AppName,element.AppDescription,element.AppColors,element.AppConfiguration,element.AppCreatedOn,element.AppVersion,'',element.AppKeyWord,element.AppPackageName,element.AppCompany,element.AndroidDesign,element.AndroidFunctions,element.DesktopDesign,element.DesktopFunctions,element.WebDesign,element.WebFunctions,element.SharedDesign,element.SharedFunctions,element.AppLogic,element.AppRegion,'Active',element.AppCatergory,element.AppIcon,element.UpdatedOn,element.Owner];UPDATEDATA('https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?gid=0#gid=0', 'APPMANAGER', element.ID, INFO, (datata) => {}, (error) => {});} else {const INFO = [element.AppName,element.AppDescription,element.AppColors,element.AppConfiguration,element.AppCreatedOn,element.AppVersion,'',element.AppKeyWord,element.AppPackageName,element.AppCompany,element.AndroidDesign,element.AndroidFunctions,element.DesktopDesign,element.DesktopFunctions,element.WebDesign,element.WebFunctions,element.SharedDesign,element.SharedFunctions,element.AppLogic,element.AppRegion,'',element.AppCatergory,element.AppIcon,element.UpdatedOn,element.Owner];UPDATEDATA('https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?gid=0#gid=0', 'APPMANAGER', element.ID, INFO, (datata) => {}, (error) => {});}} else {console.error(`Invalid AppLogic date`);}});}).catch(error => console.log(error));};};
const SERVERCONNECTION = (PATH, FUNS) => {if (localStorage.getItem('Environment') === 'Development' ) {import(`../library/Server/${PATH}`).then(module => {if (typeof module[FUNS] === 'function') {module[FUNS]();} else {console.error(`${FUNS} is not defined in the module or is not a function`);}}).catch(error => {console.error('Error loading the module:', error);});} else {import(`https://eroinnovations.github.io/Elite-Robust-Ontology/library/Server/${PATH}`).then(module => {if (typeof module[FUNS] === 'function') {module[FUNS]();} else {console.error(`${FUNS} is not defined in the module or is not a function`);}}).catch(error => {console.error('Error loading the module:', error);});};};
const DOWNLOADSAVEINDEX=(API,NAME,NAMED,callback)=>{CHECKER(navigator.onLine,()=>{GETDATA(API,NAME,(data)=>{const Data={'Name':NAMED,'data':data};STOREINDEXED(NAMED,NAMED,Data,(resback)=>{CONDITION(resback === false,()=>{UPDATEINDEX(NAMED,NAMED,Data,()=>{});},()=>{callback();});});});});};
const ACCOUNTCHECKER=(HomeCallBack,VerificationCallBack,LoginCallBack)=>{CONDITION(localStorage.getItem('UserData'),()=>{HomeCallBack();},()=>{CONDITION(localStorage.getItem('VeriifcationCode'),()=>{VerificationCallBack();},()=>{LoginCallBack();});});};
const STOREINDEXEDDATA=(API,NAME)=>{CHECKER(navigator.onLine,()=>{GETDATA(API,NAME,(data)=>{const DATA={'Name':NAME,'data':data};STOREINDEXED(NAME, NAME, DATA, (data)=>{CHECKER(data === false,()=>{UPDATEINDEX(NAME, NAME,DATA,()=>{});});});},(data)=>{console.log(data);});});};
const POSTDRIVEFILE=(FILENAME,FILEDATA,DRIVEFOLDER,callback,callback1)=>{fetch('https://script.google.com/macros/s/AKfycby1jTq3nFarX-VHnad99IzkmupTqI0s-GtUWI4EJUcH1UwUIutM8Q8ZXwePsrss9WFIJw/exec',{method:'Post',body:JSON.stringify({"fileName": FILENAME+'.txt',"content": FILEDATA,"folderId": DRIVEFOLDER})}).then(res =>res.json()).then(data =>{callback(data)}).catch(error =>{callback1(error)});};
const ELITEPAY=(NAME,EMAIL,AMOUNT,DESCRIPTION,LINK,USERID,RETURNLINK,Callback)=>{
    fetch('https://script.google.com/macros/s/AKfycbw6BSTEaPrr8sPokyKMtuNVJdvTo-9tZy7w42g-Du43C--ebEIgkplQDtkdM91GKJThHQ/exec')
    .then(res =>res.json())
    .then(data =>{

        fetch('https://script.google.com/macros/s/AKfycbyNOslxcSIi2w_f9lKNt2gvefysR-_piITlIUl0EEwepUBUYpbqrddQdvavXStCurVgpw/exec',{
            method:'Post',
            body:JSON.stringify({
                "site": "https://eroinnovations.site",
                "token": data.token
            })
        })
        .then(res => res.json())
        .then(datata =>{

            const APII='https://docs.google.com/spreadsheets/d/1wez9KwMHDo9WVgofpMJL4CqB9gJSaoJGIk6M02eKjPQ/edit?usp=sharing';

            const LINKER="https://eroinnovations.site/AfterPay.html?"+'Name='+NAME+'&'+'Amount='+AMOUNT+'&'+'Email='+EMAIL+'&'+'Details='+DESCRIPTION+'&'+'ReturnLink='+LINK+'&'+'PayeeId='+new Date()+'&'+'UserId='+USERID+'&'+'Redirected='+RETURNLINK;

            const HEADERS=['UserKey','Date'];

            const INFO=[LINKER,new Date()];

            INSERTDATA(APII,'CloudToken',HEADERS,INFO,(datate)=>{

                fetch('https://script.google.com/macros/s/AKfycbxcjfDVJ11W5N2_QOV_djJBu3iLFwTubtwELxSX_ib7Jb3vTAqCSGFjyEfmDYEaSmfb7A/exec',{
                    method:'Post',
                    body:JSON.stringify(
                        {
                            "token": data.token,
                            "id": new Date(),
                            "amount": AMOUNT,
                            "currency":"UGX",
                            "description":DESCRIPTION||"Payment On Elite Pay",
                            "callback_url":"https://eroinnovations.site/AfterPay.html?"+'ID='+datate.spreadsheetId,
                            "notification_id": datata.ipn_id,
                            "billing_address": {
                              "email_address":EMAIL,
                              "phone_number": "",
                              "country_code": "",
                              "first_name": NAME||EMAIL,
                              "middle_name": "",
                              "last_name": "",
                              "line_1": "",
                              "line_2": "",
                              "city": "",
                              "state": "",
                              "postal_code": "",
                              "zip_code": ""
                            }
                        }
                          
                    )
                })
                .then(res => res.json())
                .then(datate =>{
    
                    Callback(datate.redirect_url);
        
                })
                .catch(error =>console.log(error))

            },()=>{

                TOAST('Failed to Process Payment')

            });


        })
        .catch(error =>console.log(error))

    })
    .catch(error =>console.log(error))

};
