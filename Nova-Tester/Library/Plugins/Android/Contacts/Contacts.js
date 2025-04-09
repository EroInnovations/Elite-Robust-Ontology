const CONTACTS=(callback)=>{

    var contactsData=Android.getContacts();

    var parsedContacts=JSON.parse(contactsData);

    callback(parsedContacts)

};

export{CONTACTS};