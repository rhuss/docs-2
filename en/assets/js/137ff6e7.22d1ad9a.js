"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[5520],{6537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));n(8209);const i={sidebar_position:7},l="hems",o={unversionedId:"reference/configuration/hems",id:"reference/configuration/hems",title:"hems",description:"evcc can be integrated into existing Home Energy Management Systems (HEMS). Currently, the SMA Sunny Home Manager 2.0 (SHM) is supported!",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/hems.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/hems",permalink:"/en/docs/reference/configuration/hems",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/hems.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"vehicles",permalink:"/en/docs/reference/configuration/vehicles"},next:{title:"network",permalink:"/en/docs/reference/configuration/uri"}},s={},d=[{value:"Required Parameters",id:"required-parameters",level:2},{value:"<code>type</code>",id:"type",level:3},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"<code>allowcontrol</code>",id:"allowcontrol",level:3},{value:"Optional SMA Parameters",id:"optional-sma-parameters",level:2},{value:"<code>vendorid</code>",id:"vendorid",level:3},{value:"<code>deviceid</code>",id:"deviceid",level:3},{value:"Determine Previous DeviceID",id:"determine-previous-deviceid",level:4},{value:"HEMS Supported",id:"hems-supported",level:2},{value:"<code>sma</code>",id:"sma",level:3}],p={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hems"},(0,r.kt)("inlineCode",{parentName:"h1"},"hems")),(0,r.kt)("p",null,"evcc can be integrated into existing Home Energy Management Systems (HEMS). Currently, the SMA Sunny Home Manager 2.0 (SHM) is supported!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"hems:\n  type: sma\n  ...\n")),(0,r.kt)("p",null,"Below, the various parameters are explained."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"required-parameters"},"Required Parameters"),(0,r.kt)("h3",{id:"type"},(0,r.kt)("inlineCode",{parentName:"h3"},"type")),(0,r.kt)("p",null,"Defines the HEMS system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible Values"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sma"),": For the SMA Sunny Home Manager 2.0. See ",(0,r.kt)("a",{parentName:"li",href:"#sma"},(0,r.kt)("inlineCode",{parentName:"a"},"sma")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"type: sma\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"optional-parameters"},"Optional Parameters"),(0,r.kt)("h3",{id:"allowcontrol"},(0,r.kt)("inlineCode",{parentName:"h3"},"allowcontrol")),(0,r.kt)("p",null,"Defines whether the HEMS defined should take over the charging control of evcc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible Values"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"true"),": This allows adjusting the ratio of grid power to PV power for the ",(0,r.kt)("strong",{parentName:"li"},"Min+PV"),' mode in the Sunny Portal using the "Optional energy demand" slider. If the required PV power is not available, charging will be interrupted as in the ',(0,r.kt)("strong",{parentName:"li"},"PV")," mode. Sliding the slider all the way to the left makes the ",(0,r.kt)("strong",{parentName:"li"},"Min+PV")," mode work as described. Sliding the slider all the way to the right makes the ",(0,r.kt)("strong",{parentName:"li"},"Min+PV")," mode behave like the ",(0,r.kt)("strong",{parentName:"li"},"PV")," mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"false"),": The SHM cannot influence the charging modes; they are controlled only by evcc.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"hems:\n  type: sma\n  allowcontrol: false\n  ...\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"optional-sma-parameters"},"Optional SMA Parameters"),(0,r.kt)("p",null,"evcc registers each charging point with the SHM as an independent device. The device ID is generated by evcc."),(0,r.kt)("p",null,"The device ID is a HEX string and is composed as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"F-AAAAAAAA-BBBBBBBBBBBB-00\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"F: Vendor ID Type, predefined"),(0,r.kt)("li",{parentName:"ul"},"AAAAAAAA: See ",(0,r.kt)("inlineCode",{parentName:"li"},"vendorid")),(0,r.kt)("li",{parentName:"ul"},"BBBBBBBBBBBB: See ",(0,r.kt)("inlineCode",{parentName:"li"},"deviceid")),(0,r.kt)("li",{parentName:"ul"},"00: Sub Device ID, predefined")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"vendorid"},(0,r.kt)("inlineCode",{parentName:"h3"},"vendorid")),(0,r.kt)("p",null,"Defines the VendorID used for generating the Device ID. If no Vendor ID is specified in the configuration, a predefined ID is used."),(0,r.kt)("p",null,"HEX string, length 8 characters"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"hems:\n  type: sma\n  vendorid: AAAAAAAA\n  ...\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"deviceid"},(0,r.kt)("inlineCode",{parentName:"h3"},"deviceid")),(0,r.kt)("p",null,"Defines the device ID used for generating the Device ID. If no device ID is specified, evcc generates a random device ID depending on the current computer."),(0,r.kt)("p",null,"HEX string, length: 12 characters"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"hems:\n  type: sma\n  deviceid: BBBBBBBBBBBB\n  ...\n")),(0,r.kt)("admonition",{title:"Docker Container",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If evcc is running as a Docker container, ",(0,r.kt)("inlineCode",{parentName:"p"},"machine-id")," must be mounted. See also ",(0,r.kt)("a",{parentName:"p",href:"../../installation/docker"},"Docker Configuration"))),(0,r.kt)("h4",{id:"determine-previous-deviceid"},"Determine Previous DeviceID"),(0,r.kt)("p",null,"If evcc is moved to another computer, the randomly generated device ID also changes. In this case, the SHM recognizes evcc as a new device, and the previous devices are not recognized in the SMA Portal."),(0,r.kt)("p",null,"To prevent this, the device ID from the previous system should be adopted:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open the address ",(0,r.kt)("inlineCode",{parentName:"p"},"http://PREVIOUS-EVCC-HOST-IP-ADDRESS:7070/semp")," in a browser.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"XML-formatted text will be displayed. The text starts in this form:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<Device2EM xmlns="http://www.sma.de/communication/schema/SEMP/v1">\n  <DeviceInfo>\n    <Identification>\n      <DeviceId>F-28081973-BBBBBBBBBBBB-00</DeviceId>\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The string at the location of ",(0,r.kt)("inlineCode",{parentName:"p"},"BBBBBBBBBBBB")," corresponds to the DeviceID.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This string must now be used in the configuration for ",(0,r.kt)("inlineCode",{parentName:"p"},"deviceid")," in the new system."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"hems-supported"},"HEMS Supported"),(0,r.kt)("h3",{id:"sma"},(0,r.kt)("inlineCode",{parentName:"h3"},"sma")),(0,r.kt)("p",null,"Provides support for the SMA Sunny Home Manager 2.0 (SHM)."),(0,r.kt)("p",null,"Through this integration, ",(0,r.kt)("a",{parentName:"p",href:"loadpoints"},"chargers")," can be added to the SHM and, for example, considered for its control."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"hems:\n  type: sma\n  allowcontrol: false # set true to allow SHM controlling charger in PV modes\n")))}c.isMDXComponent=!0}}]);