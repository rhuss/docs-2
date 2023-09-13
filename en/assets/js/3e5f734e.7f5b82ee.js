"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[5875],{8459:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var i=a(7462),n=(a(7294),a(3905));a(8209);const l={sidebar_position:5},r="API",p={unversionedId:"reference/api",id:"reference/api",title:"API",description:"evcc can interact with REST and MQTT APIs.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/api.md",sourceDirName:"reference",slug:"/reference/api",permalink:"/en/docs/reference/api",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/reference/api.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Modbus",permalink:"/en/docs/reference/modbus"},next:{title:"Sponsorship",permalink:"/en/docs/sponsorship"}},o={},d=[{value:"REST API",id:"rest-api",level:2},{value:"Loadpoint",id:"loadpoint",level:3},{value:"MQTT API",id:"mqtt-api",level:2}],m={toc:d},s="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"api"},"API"),(0,n.kt)("p",null,"evcc can interact with REST and MQTT APIs."),(0,n.kt)("p",null,"All API IDs (e.g., Loadpoint ID) start at ",(0,n.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,n.kt)("h2",{id:"rest-api"},"REST API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET  /api/state"),": evcc state (static configuration and dynamic state as JSON object)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET  /api/health"),": evcc health check"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST /api/prioritysoc/<soc>"),": battery priority SoC in %"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST /api/buffersoc/<soc>"),": battery buffer SoC in %"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST /api/bufferstartsoc/<soc>"),": battery buffer start SoC in %"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST /api/residualpower/<power>"),": grid residual power in W"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST /api/smartcostlimit/<cost>"),': smart charging cost limit (previously known as "cheap" tariff)'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET  /api/tariff/<type>"),": list of prices (grid/feedin/planner)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET  /api/sessions[?format=csv&lang=<lang>]"),": charging sessions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET  /api/telemetry"),": telemetry enabled status"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST /api/telemetry/<status>"),": enable/disable telemetry (true/false)")),(0,n.kt)("h3",{id:"loadpoint"},"Loadpoint"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST   /api/loadpoints/<id>/mode/<mode>"),": charge mode (off/pv/minpv/now)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST   /api/loadpoints/<id>/minsoc/<soc>"),": minimum SoC in %"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST   /api/loadpoints/<id>/target/soc/<soc>"),": target SoC in %"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST   /api/loadpoints/<id>/target/energy/<energy>"),": target energy in kWh"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST   /api/loadpoints/<id>/target/time/<time>"),": target time in RFC3339 / ISO format ","*","*"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DELETE /api/loadpoints/<id>/target/time"),": disable target charging"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET    /api/loadpoints/<id>/target/plan[?targetTime=<time>]"),": charging plan details"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST   /api/loadpoints/<id>/phases/<phases>"),": enabled phases (0=auto/1=1p/3=3p)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST   /api/loadpoints/<id>/mincurrent/<current>"),": current minCurrent value in A"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST   /api/loadpoints/<id>/maxcurrent/<current>"),": current maxCurrent value in A"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST   /api/loadpoints/<id>/enable/threshold/<threshold>"),": threshold value in W"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST   /api/loadpoints/<id>/disable/threshold/<threshold>"),": threshold value in W"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST   /api/loadpoints/<id>/vehicle/<vehicleId>"),": set currently selected vehicle")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Example: ",(0,n.kt)("inlineCode",{parentName:"p"},"curl -X POST http://evcc:7070/api/loadpoints/1/mode/pv")," to set the charging mode of the 1st Loadpoint to ",(0,n.kt)("inlineCode",{parentName:"p"},"pv"),".")),(0,n.kt)("h2",{id:"mqtt-api"},"MQTT API"),(0,n.kt)("p",null,"The MQTT API follows the REST API structure:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc"),": root topic")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/status"),": status (",(0,n.kt)("inlineCode",{parentName:"p"},"online"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"offline"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/updated"),": timestamp of last update")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/site"),": site dynamic state")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/site/prioritySoc"),": battery priority SoC (writable)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/site/bufferSoc"),": battery buffer SoC (writable)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/site/bufferStartSoc"),": battery buffer start SoC (writable)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/site/residualPower"),": grid residual power (writable)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/site/smartCostLimit"),': smart charging cost limit (previously known as "cheap" tariff) (writable)')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/loadpoints"),": number of available loadpoints")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/loadpoints/<id>"),": loadpoint dynamic state")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/loadpoints/<id>/mode"),": loadpoint charge mode (writable)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/loadpoints/<id>/minSoc"),": loadpoint minimum SoC (writable)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/loadpoints/<id>/targetSoc"),": loadpoint target SoC in % (writable)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/loadpoints/<id>/targetEnergy"),": loadpoint target energy in kWh (writable)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/loadpoints/<id>/targetTime"),": loadpoint target time in RFC3339 / ISO format (writable) ","*","*")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/loadpoints/<id>/phases"),": loadpoint enabled phases (writable)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/loadpoints/<id>/minCurrent"),": loadpoint current minCurrent value (writable)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/loadpoints/<id>/maxCurrent"),": loadpoint current maxCurrent value (writable)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/loadpoints/<id>/enableThreshold"),": loadpoint threshold value (writable)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"evcc/loadpoints/<id>/disableThreshold"),": loadpoint threshold value (writable)"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To perform writable settings, add ",(0,n.kt)("inlineCode",{parentName:"p"},"/set")," at the end of the topic to which the new value will be sent.\nExample: ",(0,n.kt)("inlineCode",{parentName:"p"},'mosquitto_pub -t "evcc/loadpoints/1/phases/set" -m "3"')," to set the number of grid-side phases of the 1st Loadpoint to ",(0,n.kt)("inlineCode",{parentName:"p"},"3"),".")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"*","*"," Time is in UTC in the format ",(0,n.kt)("inlineCode",{parentName:"p"},"yyyy-mm-ddThh:mm:ssZ")),(0,n.kt)("p",{parentName:"admonition"},"Examples:"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"2023-03-05T07:00:00Z")," = 5th March 2023 at 7:00 AM UTC"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"2023-08-17T19:30:00Z")," = 17th August 2023 at 7:30 PM UTC")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"")))}c.isMDXComponent=!0}}]);