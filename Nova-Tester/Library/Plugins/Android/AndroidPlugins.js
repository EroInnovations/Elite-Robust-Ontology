import { BATTERY } from "./Battery/Battery.js";
import { CONTACTS } from "./Contacts/Contacts.js";
import { CREATEFOLDER } from "./CreateFolder/CreateFolder.js";
import { DELETECONTACT } from "./DeleteContact/DeleteContact.js";
import { DELETEFILE } from "./DeleteFile/DeleteFile.js";
import { FOREGROUND } from "./Foreground/Foreground.js";
import { LATITUDE } from "./Latitude/Latitude.js";
import { LOCATION } from "./Location/Location.js";
import { LONGITUDE } from "./Longitude/Longitude.js";
import { MOVEFILE } from "./MoveFile/MoveFile.js";
import { NOTIFICATIONS } from "./Notifications/Notifications.js";
import { READFILE } from "./ReadFile/ReadFile.js";
import { RELOAD } from "./Reload/Reload.js";
import { STOPFOREGROUND } from "./StopForeground/StopForeground.js";
import { TOAST } from "./Toast/Toast.js";
import { UPDATECONTACTS } from "./UpdateContact/UpdateContacts.js";
import { VIBRATION } from "./Vibration/Vibration.js";
import { WRITEFILE } from "./WriteFile/WriteFile.js";
const ANDROIDPLUGINS=()=>{
const DATA=`const VIBRATION='${VIBRATION}';
const TOASTED='${TOAST}';
const RELOAD='${RELOAD}';
const FOREGROUND='${FOREGROUND}';
const STOPFOREGROUND='${STOPFOREGROUND}';
const DELETECONTACT='${DELETECONTACT}';
const MOVEFILE='${MOVEFILE}';
const LOCATION='${LOCATION}';
const LATITUDE='${LATITUDE}';
const LONGITUDE='${LONGITUDE}';
const UPDATECONTACTS='${UPDATECONTACTS}';
const CONTACTS='${CONTACTS}';
const READFILE='${READFILE}';
const CREATEFOLDER='${CREATEFOLDER}';
const BATTERY='${BATTERY}';
const NOTIFICATIONS='${NOTIFICATIONS}';
const WRITEFILE='${WRITEFILE}';
const DELETEFILE='${DELETEFILE}';
`;
localStorage.setItem("ANDROIDPLUGINS",DATA);

}
export{ANDROIDPLUGINS};

`


`