import { CENTERVIEW } from "./Components/CenterView/CenterView.js";
import { HOMEFOOTERTEMPLATE } from "./Components/HomeFooterTemplate/HomeFooterTemplate.js";
import { HOMEHEADERTEMPLATE } from "./Components/HomeHeaderTemplate/HomeHeaderTemplate.js";
import { HOMEROUNDFOOTERTEMPLATE } from "./Components/HomeRoundFooterTemplate/HomeRoundFooterTemplate.js";
import { HOMESCROLLHEADERTEMPLATE } from "./Components/HomeScrollHeaderBodyTemplate/HomeScrollHeaderBodyTemplate.js";
import { LEFTTEXTBACKHEADER } from "./Components/LeftTextBackHeader/LeftTextBackHeader.js";
import { LEFTTEXTBACKHEADERBODY } from "./Components/LeftTextBackHeaderBody/LeftTextBackHeaderBody.js";
import { FULLMENUTEMPLATE } from "./Components/MenuTemplate/MenuTemplate.js";
import { NAVTEMPLATE } from "./Components/NavTemplate/NavTemplate.js";
import { OFFLINEPAGETEMPLATE } from "./Components/OffLinePageTemplate/OffLinePageTemplate.js";
import { RIGHTTEXTBACKHEADER } from "./Components/RightTextBackHeader/RightTextBackHeader.js";
import { RIGHTTEXTBACKHEADERBODY } from "./Components/RightTextBackHeaderBody/RightTextBackHeaderBody.js";
import { ACCOUNTCHECKER } from "./Functions/AccountChecker/AccountChecker.js";
import { CLOUDCREATEACCOUNTTEMPLATE } from "./Functions/CloudCreateAccountTemplate/CloudCreateAccountTemplate.js";
import { CLOUDLOGINTEMPLATE } from "./Functions/CloudLoginTemplate/CloudLoginTemplate.js";
import { EMAILVERIFICATIONTEMPLATE } from "./Functions/EmailVerificationTemplate/EmailVerificationTemplate.js";
import { FORGOTPASSWORDTEMPLATE } from "./Functions/ForgotPasswordTemplate/ForgotPasswordTemplate.js";
import { NOINTERNETTEMPLATE } from "./Functions/NoInternetMessage/NoInternetMessage.js";
import { STOREINDEXEDDATA } from "./Functions/StoredIndexData/StoredIndexedData.js";

const TEMPLATES=()=>{
const DATA=`const CLOUDCREATEACCOUNTTEMPLATE=${CLOUDCREATEACCOUNTTEMPLATE};
const CLOUDLOGINTEMPLATE=${CLOUDLOGINTEMPLATE};
const EMAILVERIFICATIONTEMPLATE=${EMAILVERIFICATIONTEMPLATE};
const FORGOTPASSWORDTEMPLATE=${FORGOTPASSWORDTEMPLATE};
const LEFTTEXTBACKHEADER=${LEFTTEXTBACKHEADER};
const RIGHTTEXTBACKHEADER=${RIGHTTEXTBACKHEADER};
const LEFTTEXTBACKHEADERBODY=${LEFTTEXTBACKHEADERBODY};
const RIGHTTEXTBACKHEADERBODY=${RIGHTTEXTBACKHEADERBODY};
const ACCOUNTCHECKER=${ACCOUNTCHECKER};
const HOMEFOOTERTEMPLATE=${HOMEFOOTERTEMPLATE};
const HOMEROUNDFOOTERTEMPLATE=${HOMEROUNDFOOTERTEMPLATE};
const NOINTERNETTEMPLATE=${NOINTERNETTEMPLATE};
const OFFLINEPAGETEMPLATE=${OFFLINEPAGETEMPLATE};
const FULLMENUTEMPLATE=${FULLMENUTEMPLATE};
const HOMEHEADERTEMPLATE=${HOMEHEADERTEMPLATE};
const CENTERVIEW=${CENTERVIEW};
const NAVTEMPLATE=${NAVTEMPLATE};
const HOMESCROLLHEADERTEMPLATE=${HOMESCROLLHEADERTEMPLATE};
const STOREINDEXEDDATA=${STOREINDEXEDDATA};
`;
localStorage.setItem('TEMPLATES',DATA);
};
export{TEMPLATES};

`

const STOREINDEXEDDATA=${STOREINDEXEDDATA};

`