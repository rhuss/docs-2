"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[2534],{61:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));n(8209);const o={sidebar_position:14},a="mqtt",c={unversionedId:"reference/configuration/mqtt",id:"reference/configuration/mqtt",title:"mqtt",description:"Establishes connectivity with an MQTT broker.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/mqtt.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/mqtt",permalink:"/en/docs/reference/configuration/mqtt",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/mqtt.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"eebus",permalink:"/en/docs/reference/configuration/eebus"},next:{title:"influx",permalink:"/en/docs/reference/configuration/influx"}},s={},l=[{value:"Required Parameters",id:"required-parameters",level:2},{value:"<code>broker</code>",id:"broker",level:3},{value:"<code>topic</code>",id:"topic",level:3},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"<code>user</code>",id:"user",level:3},{value:"<code>password</code>",id:"password",level:3},{value:"<code>clientid</code>",id:"clientid",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mqtt"},(0,r.kt)("inlineCode",{parentName:"h1"},"mqtt")),(0,r.kt)("p",null,"Establishes connectivity with an MQTT broker.\nWhen the connection is active, evcc automatically pushes all internal values to the specified topic via the MQTT broker and also receives changes there.\nFor more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/api/#mqtt-api"},(0,r.kt)("inlineCode",{parentName:"a"},"MQTT API"))," documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# mqtt message broker\nmqtt:\n  broker: localhost:1883\n  topic: evcc # root topic for publishing, set empty to disable publishing\n  # clientid: foo\n  # user:\n  # password:\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"required-parameters"},"Required Parameters"),(0,r.kt)("h3",{id:"broker"},(0,r.kt)("inlineCode",{parentName:"h3"},"broker")),(0,r.kt)("p",null,"Connection details (hostname/IP and port) of the MQTT broker to which evcc should connect as a client."),(0,r.kt)("h3",{id:"topic"},(0,r.kt)("inlineCode",{parentName:"h3"},"topic")),(0,r.kt)("p",null,"Specifies the root topic that evcc uses.\nIf not specified here, no MQTT communication can take place!"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"optional-parameters"},"Optional Parameters"),(0,r.kt)("h3",{id:"user"},(0,r.kt)("inlineCode",{parentName:"h3"},"user")),(0,r.kt)("p",null,"The username for authentication to the MQTT broker."),(0,r.kt)("h3",{id:"password"},(0,r.kt)("inlineCode",{parentName:"h3"},"password")),(0,r.kt)("p",null,"The authentication password for the MQTT broker."),(0,r.kt)("h3",{id:"clientid"},(0,r.kt)("inlineCode",{parentName:"h3"},"clientid")),(0,r.kt)("p",null,"Specifies a fixed MQTT client ID. By default, it will be assigned dynamically."))}p.isMDXComponent=!0}}]);