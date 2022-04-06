"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[1769],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,h=c["".concat(i,".").concat(u)]||c[u]||p[u]||l;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),l=n(72389),o=n(63725),s=n(86010),i="tabItem_LplD";function d(e){var t,n,l,d=e.lazy,m=e.block,p=e.defaultValue,c=e.values,u=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=c?c:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),f=y.tabGroupChoices,P=y.setTabGroupChoices,N=(0,r.useState)(b),w=N[0],S=N[1],x=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var E=f[u];null!=E&&E!==w&&k.some((function(e){return e.value===E}))&&S(E)}var M=function(e){var t=e.currentTarget,n=x.indexOf(t),a=k[n].value;a!==w&&(T(t),S(a),null!=u&&P(u,a))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},h)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return x.push(e)},onKeyDown:A,onFocus:M,onClick:M},l,{className:(0,s.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},95059:function(e,t,n){n.d(t,{ZP:function(){return i}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],s={toc:[]};function i(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Sponsor-Token erforderlich")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Weitere Informationen zum \ud83d\udc9a evcc Sponsorship gibt es ",(0,l.kt)("a",{parentName:"p",href:"/docs/sponsorship"},"hier"),"."))))}i.isMDXComponent=!0},72793:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return g}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=(n(9877),n(58215),n(95059)),s=["components"],i={toc:[]};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Die 1P/3P-Phasenumschaltung wird unterst\xfctzt."))))}d.isMDXComponent=!0;var m=["components"],p={sidebar_position:1},c="Wallboxen",u={unversionedId:"devices/chargers",id:"devices/chargers",title:"Wallboxen",description:"Zur Steuerung der Ladung muss evcc mit einer Wallbox kommunizieren.",source:"@site/docs/devices/chargers.mdx",sourceDirName:"devices",slug:"/devices/chargers",permalink:"/docs/devices/chargers",editUrl:"https://github.com/evcc-io/docs/tree/main/docs/devices/chargers.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"H\xe4ufige Fragen und Themen",permalink:"/docs/guides/faq"},next:{title:"Hausinstallation",permalink:"/docs/devices/meters"}},h={},g=[{value:"ABL eMH \ud83d\udc9a",id:"abl-emh-",level:2},{value:"Alfen Eve \ud83d\udc9a",id:"alfen-eve-",level:2},{value:"Alphatec Wallbox Mini \ud83d\udc9a",id:"alphatec-wallbox-mini-",level:2},{value:"BMW i Wallbox",id:"bmw-i-wallbox",level:2},{value:"cFos PowerBrain \ud83d\udc9a",id:"cfos-powerbrain-",level:2},{value:"DaheimLaden Wallbox",id:"daheimladen-wallbox",level:2},{value:"Easee Home \ud83d\udc9a",id:"easee-home-",level:2},{value:"EVSE DIN",id:"evse-din",level:2},{value:"EVSE-Wifi",id:"evse-wifi",level:2},{value:"go-eCharger",id:"go-echarger",level:2},{value:"HOME+, HOMEfix (V3)",id:"home-homefix-v3",level:3},{value:"HOME+, HOMEfix, Pro",id:"home-homefix-pro",level:3},{value:"HardyBarth",id:"hardybarth",level:2},{value:"cPH1 eCB1 Controller",id:"cph1-ecb1-controller",level:3},{value:"Salia PLCC Controller",id:"salia-plcc-controller",level:3},{value:"Heidelberg Energy Control \ud83d\udc9a",id:"heidelberg-energy-control-",level:2},{value:"i-CHARGE CION",id:"i-charge-cion",level:2},{value:"Innogy eBox \ud83d\udc9a",id:"innogy-ebox-",level:2},{value:"KEBA KeContact P20, P30",id:"keba-kecontact-p20-p30",level:2},{value:"Mennekes AMTRON XTRA, PREMIUM \ud83d\udc9a",id:"mennekes-amtron-xtra-premium-",level:2},{value:"NRGKick",id:"nrgkick",level:2},{value:"Bluetooth",id:"bluetooth",level:3},{value:"Connect",id:"connect",level:3},{value:"openWB MQTT",id:"openwb-mqtt",level:2},{value:"PC Electric Garo \ud83d\udc9a",id:"pc-electric-garo-",level:2},{value:"Porsche",id:"porsche",level:2},{value:"Mobile Charger Connect",id:"mobile-charger-connect",level:3},{value:"Mobile Charger Plus",id:"mobile-charger-plus",level:3},{value:"SENEC",id:"senec",level:2},{value:"Wallbox pro  \ud83d\udc9a",id:"wallbox-pro--",level:3},{value:"Wallbox pro s  \ud83d\udc9a",id:"wallbox-pro-s--",level:3},{value:"TinkerForge",id:"tinkerforge",level:2},{value:"WARP Charger",id:"warp-charger",level:3},{value:"WARP Charger Pro",id:"warp-charger-pro",level:3},{value:"Vestel EVC04 \ud83d\udc9a",id:"vestel-evc04-",level:2},{value:"Wallbe",id:"wallbe",level:2},{value:"Eco, Pro",id:"eco-pro",level:3},{value:"Eco, Pro (mit Strommessger\xe4t)",id:"eco-pro-mit-strommessger\xe4t",level:3},{value:"Eco, Pro (vor ~2019)",id:"eco-pro-vor-2019",level:3},{value:"Eco, Pro (vor ~2019, mit Strommessger\xe4t)",id:"eco-pro-vor-2019-mit-strommessger\xe4t",level:3},{value:"Walther Werke Basic Evo Pro \ud83d\udc9a",id:"walther-werke-basic-evo-pro-",level:2},{value:"Webasto Live",id:"webasto-live",level:2},{value:"Generische Unterst\xfctzung",id:"generische-unterst\xfctzung",level:2},{value:"manuell",id:"manuell",level:3},{value:"EEBUS kompatible Wallbox",id:"eebus-kompatible-wallbox",level:3},{value:"Phoenix",id:"phoenix",level:3},{value:"EM-CP-PP-ETH Controller (Modbus TCP)",id:"em-cp-pp-eth-controller-modbus-tcp",level:4},{value:"EV-ETH Controller (Modbus TCP)",id:"ev-eth-controller-modbus-tcp",level:4},{value:"EV-SER Controller (Modbus RTU)",id:"ev-ser-controller-modbus-rtu",level:4},{value:"Schaltbare Steckdosen",id:"schaltbare-steckdosen",level:2},{value:"AVM FritzDECT",id:"avm-fritzdect",level:3},{value:"Shelly",id:"shelly",level:3},{value:"Tasmota",id:"tasmota",level:3},{value:"TP-Link",id:"tp-link",level:3},{value:"H-Series Smart Plug",id:"h-series-smart-plug",level:4},{value:"Tapo P-Series Smart Plug",id:"tapo-p-series-smart-plug",level:4}],k={toc:g};function v(e){var t=e.components,n=(0,r.Z)(e,m);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wallboxen"},"Wallboxen"),(0,l.kt)("p",null,"Zur Steuerung der Ladung muss evcc mit einer Wallbox kommunizieren."),(0,l.kt)("p",null,"In der Konfigurationsdatei gibt es hierzu den folgenden Bereich:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"charger:\n  - name: wallbox\n    type: ...\n")),(0,l.kt)("p",null,"Auf dieser Seite findest du die Konfigurationen f\xfcr alle derzeit von evcc direkt unterst\xfctzten Wallboxen.\nNachdem du das Code-Beispiel f\xfcr deine Wallbox angepasst und in die ",(0,l.kt)("inlineCode",{parentName:"p"},"evcc.yaml")," \xfcbernommen hast, kannst du die Verbindung mit dem Befehl ",(0,l.kt)("inlineCode",{parentName:"p"},"evcc charger")," testen."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ ./evcc charger\n\nPower:          0W\nCurrent L1..L3: 0A 0A 0A\nCharge status:  A\nEnabled:        false\n")),(0,l.kt)("h2",{id:"abl-emh-"},"ABL eMH \ud83d\udc9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'chargers:\n  - name: my_charger\n    type: template\n    template: abl      \n    \n    # RS485 via adapter (Modbus RTU)\n    modbus: rs485serial\n    id: 1\n    device: /dev/ttyUSB0 # USB-RS485 Adapter Adresse\n    baudrate: 38400 # Pr\xfcfe die Ger\xe4teeinstellungen, typische Werte sind 9600, 19200, 38400, 57600, 115200\n    comset: "8E1" # Kommunikationsparameter f\xfcr den Adapter\n    \n    # RS485 via TCP/IP (Modbus RTU)\n    modbus: rs485tcpip\n    id: 1\n    host: 192.0.2.2 # Hostname\n    port: 502 # Port \n')),(0,l.kt)(o.ZP,{mdxType:"SponsorshipRequired"}),(0,l.kt)("h2",{id:"alfen-eve-"},"Alfen Eve \ud83d\udc9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: alfen      \n    \n    # Modbus TCP\n    modbus: tcpip\n    id: 1\n    host: 192.0.2.2 # Hostname\n    port: 502 # Port \n")),(0,l.kt)(d,{mdxType:"PhaseSwitchSupported"}),(0,l.kt)(o.ZP,{mdxType:"SponsorshipRequired"}),(0,l.kt)("h2",{id:"alphatec-wallbox-mini-"},"Alphatec Wallbox Mini \ud83d\udc9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'chargers:\n  - name: my_charger\n    type: template\n    template: alphatec      \n    \n    # RS485 via adapter (Modbus RTU)\n    modbus: rs485serial\n    id: 1\n    device: /dev/ttyUSB0 # USB-RS485 Adapter Adresse\n    baudrate: 9600 # Pr\xfcfe die Ger\xe4teeinstellungen, typische Werte sind 9600, 19200, 38400, 57600, 115200\n    comset: "8N1" # Kommunikationsparameter f\xfcr den Adapter\n    \n    # RS485 via TCP/IP (Modbus RTU)\n    modbus: rs485tcpip\n    id: 1\n    host: 192.0.2.2 # Hostname\n    port: 502 # Port \n')),(0,l.kt)(o.ZP,{mdxType:"SponsorshipRequired"}),(0,l.kt)("h2",{id:"bmw-i-wallbox"},"BMW i Wallbox"),(0,l.kt)("p",null,"Es muss eine sogenannte UDP Funktion \xfcber den DIP Schalter 1.3 eingeschaltet (ON) werden. Die Installationsanleitung der Wallbox hilft hier weiter."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: keba\n    host: 192.0.2.2 # IP-Adresse oder Hostname \n")),(0,l.kt)("h2",{id:"cfos-powerbrain-"},"cFos PowerBrain \ud83d\udc9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: cfos\n    host: 192.0.2.2 # IP-Adresse oder Hostname \n")),(0,l.kt)(o.ZP,{mdxType:"SponsorshipRequired"}),(0,l.kt)("h2",{id:"daheimladen-wallbox"},"DaheimLaden Wallbox"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: daheimladen\n    token: # Sie bekommen dieses Access Token vom Daheimladen Support: info@daheimladen.de. # Optional\n    stationid: xxxxxxxxxxxx990 # Die Software Seriennummer, welche auf dem Bildschirm der Wallbox angezeigt wird. # Optional \n")),(0,l.kt)("h2",{id:"easee-home-"},"Easee Home \ud83d\udc9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: easee\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    charger: EH______ \n")),(0,l.kt)(d,{mdxType:"PhaseSwitchSupported"}),(0,l.kt)(o.ZP,{mdxType:"SponsorshipRequired"}),(0,l.kt)("h2",{id:"evse-din"},"EVSE DIN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'chargers:\n  - name: my_charger\n    type: template\n    template: evse_din      \n    \n    # RS485 via adapter (Modbus RTU)\n    modbus: rs485serial\n    id: 1\n    device: /dev/ttyUSB0 # USB-RS485 Adapter Adresse\n    baudrate: 9600 # Pr\xfcfe die Ger\xe4teeinstellungen, typische Werte sind 9600, 19200, 38400, 57600, 115200\n    comset: "8N1" # Kommunikationsparameter f\xfcr den Adapter\n    \n    # RS485 via TCP/IP (Modbus RTU)\n    modbus: rs485tcpip\n    id: 1\n    host: 192.0.2.2 # Hostname\n    port: 502 # Port \n')),(0,l.kt)("h2",{id:"evse-wifi"},"EVSE-Wifi"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: evsewifi\n    host: 192.0.2.2 # IP-Adresse oder Hostname \n")),(0,l.kt)("h2",{id:"go-echarger"},"go-eCharger"),(0,l.kt)("h3",{id:"home-homefix-v3"},"HOME+, HOMEfix (V3)"),(0,l.kt)("p",null,"Ben\xf6tigt mindestens Firmware 052.1 oder neuer. "),(0,l.kt)("p",null,"F\xfcr 1P/3P-Phasenumschaltung muss die HTTP API v2 im Charger aktiviert sein und es wird ein Sponsortoken ben\xf6tigt. \ud83d\udc9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: go-e-v3\n    host: 192.0.2.2 # IP-Adresse oder Hostname \n")),(0,l.kt)(d,{mdxType:"PhaseSwitchSupported"}),(0,l.kt)("h3",{id:"home-homefix-pro"},"HOME+, HOMEfix, Pro"),(0,l.kt)("p",null,"Ben\xf6tigt mindestens Firmware 040.0 oder neuer."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: go-e\n    host: 192.0.2.2 # IP-Adresse oder Hostname \n")),(0,l.kt)("h2",{id:"hardybarth"},"HardyBarth"),(0,l.kt)("h3",{id:"cph1-ecb1-controller"},"cPH1 eCB1 Controller"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: hardybarth-ecb1\n    host: 192.0.2.2 # IP-Adresse oder Hostname \n")),(0,l.kt)("h3",{id:"salia-plcc-controller"},"Salia PLCC Controller"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: hardybarth-salia\n    host: 192.0.2.2 # IP-Adresse oder Hostname \n")),(0,l.kt)("h2",{id:"heidelberg-energy-control-"},"Heidelberg Energy Control \ud83d\udc9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'chargers:\n  - name: my_charger\n    type: template\n    template: heidelberg      \n    \n    # RS485 via adapter (Modbus RTU)\n    modbus: rs485serial\n    id: 1\n    device: /dev/ttyUSB0 # USB-RS485 Adapter Adresse\n    baudrate: 19200 # Pr\xfcfe die Ger\xe4teeinstellungen, typische Werte sind 9600, 19200, 38400, 57600, 115200\n    comset: "8E1" # Kommunikationsparameter f\xfcr den Adapter\n    \n    # RS485 via TCP/IP (Modbus RTU)\n    modbus: rs485tcpip\n    id: 1\n    host: 192.0.2.2 # Hostname\n    port: 502 # Port \n')),(0,l.kt)(o.ZP,{mdxType:"SponsorshipRequired"}),(0,l.kt)("h2",{id:"i-charge-cion"},"i-CHARGE CION"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: ichargecion      \n    \n    # Modbus TCP\n    modbus: tcpip\n    id: 1\n    host: 192.0.2.2 # Hostname\n    port: 502 # Port \n")),(0,l.kt)("h2",{id:"innogy-ebox-"},"Innogy eBox \ud83d\udc9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: innogy-ebox      \n    \n    # Modbus TCP\n    modbus: tcpip\n    id: 1\n    host: 192.0.2.2 # Hostname\n    port: 502 # Port \n")),(0,l.kt)(o.ZP,{mdxType:"SponsorshipRequired"}),(0,l.kt)("h2",{id:"keba-kecontact-p20-p30"},"KEBA KeContact P20, P30"),(0,l.kt)("p",null,"Es muss eine sogenannte UDP Funktion \xfcber den DIP Schalter 1.3 eingeschaltet (ON) werden. Die Installationsanleitung der Wallbox hilft hier weiter."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: keba\n    host: 192.0.2.2 # IP-Adresse oder Hostname \n")),(0,l.kt)("h2",{id:"mennekes-amtron-xtra-premium-"},"Mennekes AMTRON XTRA, PREMIUM \ud83d\udc9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: amtron      \n    \n    # Modbus TCP\n    modbus: tcpip\n    id: 255\n    host: 192.0.2.2 # Hostname\n    port: 502 # Port \n")),(0,l.kt)(o.ZP,{mdxType:"SponsorshipRequired"}),(0,l.kt)("h2",{id:"nrgkick"},"NRGKick"),(0,l.kt)("h3",{id:"bluetooth"},"Bluetooth"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: nrgkick-bluetooth\n    mac:\n    pin: \n")),(0,l.kt)("h3",{id:"connect"},"Connect"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: nrgkick-connect\n    host: 192.0.2.2 # IP-Adresse oder Hostname\n    mac:\n    password: # Passwort des Benutzerkontos \n")),(0,l.kt)("h2",{id:"openwb-mqtt"},"openWB MQTT"),(0,l.kt)("p",null,"Die Wallbox muss als Ladepunkt konfiguriert sein."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: openwb\n    host: 192.0.2.2 # IP-Adresse oder Hostname\n    loadpointid: 1 # Optional \n")),(0,l.kt)("h2",{id:"pc-electric-garo-"},"PC Electric Garo \ud83d\udc9a"),(0,l.kt)("p",null,"Es k\xf6nnen momentan nur als Master konfigurierte Ger\xe4te verwendet werden!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: pcelectric-garo\n    host: 192.0.2.2 # IP-Adresse oder Hostname # Optional\n    port: 8080 # Port # Optional \n")),(0,l.kt)(o.ZP,{mdxType:"SponsorshipRequired"}),(0,l.kt)("h2",{id:"porsche"},"Porsche"),(0,l.kt)("h3",{id:"mobile-charger-connect"},"Mobile Charger Connect"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: pmcc\n    ski: # Die SKI der Wallbox, ist \xfcblicherweise im Web Interface der Wallbox zu finden\n    enforcePVLimits: true # Verwende PV Laden \xfcber eine Ladebegrenzung (wie herk\xf6mmliche Wallboxen) bei Fahrzeugen mit Unterst\xfctzung von ISO15118 # Optional \n")),(0,l.kt)("h3",{id:"mobile-charger-plus"},"Mobile Charger Plus"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: pmcp\n    ski: # Die SKI der Wallbox, ist \xfcblicherweise im Web Interface der Wallbox zu finden \n")),(0,l.kt)("h2",{id:"senec"},"SENEC"),(0,l.kt)("h3",{id:"wallbox-pro--"},"Wallbox pro  \ud83d\udc9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'chargers:\n  - name: my_charger\n    type: template\n    template: abl      \n    \n    # RS485 via adapter (Modbus RTU)\n    modbus: rs485serial\n    id: 1\n    device: /dev/ttyUSB0 # USB-RS485 Adapter Adresse\n    baudrate: 38400 # Pr\xfcfe die Ger\xe4teeinstellungen, typische Werte sind 9600, 19200, 38400, 57600, 115200\n    comset: "8E1" # Kommunikationsparameter f\xfcr den Adapter\n    \n    # RS485 via TCP/IP (Modbus RTU)\n    modbus: rs485tcpip\n    id: 1\n    host: 192.0.2.2 # Hostname\n    port: 502 # Port \n')),(0,l.kt)(o.ZP,{mdxType:"SponsorshipRequired"}),(0,l.kt)("h3",{id:"wallbox-pro-s--"},"Wallbox pro s  \ud83d\udc9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'chargers:\n  - name: my_charger\n    type: template\n    template: heidelberg      \n    \n    # RS485 via adapter (Modbus RTU)\n    modbus: rs485serial\n    id: 1\n    device: /dev/ttyUSB0 # USB-RS485 Adapter Adresse\n    baudrate: 19200 # Pr\xfcfe die Ger\xe4teeinstellungen, typische Werte sind 9600, 19200, 38400, 57600, 115200\n    comset: "8E1" # Kommunikationsparameter f\xfcr den Adapter\n    \n    # RS485 via TCP/IP (Modbus RTU)\n    modbus: rs485tcpip\n    id: 1\n    host: 192.0.2.2 # Hostname\n    port: 502 # Port \n')),(0,l.kt)(o.ZP,{mdxType:"SponsorshipRequired"}),(0,l.kt)("h2",{id:"tinkerforge"},"TinkerForge"),(0,l.kt)("h3",{id:"warp-charger"},"WARP Charger"),(0,l.kt)("p",null,"Es muss ein sogennanter MQTT Broker auf einem Computer installiert sein. Die MQTT Verbindung muss in der Wallbox eingerichtet sein."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: tinkerforge-warp\n    host: 192.0.2.2 # Die IP Adresse oder der Hostname des MQTT Brokers\n    port: 1883 # Der Port des MQTT Brokers # Optional\n    topic: warp # Topic (ohne / am Anfang) # Optional\n    timeout: 30s # Akzeptiere keine Daten die \xe4lter als dieser Wert sind # Optional \n")),(0,l.kt)("h3",{id:"warp-charger-pro"},"WARP Charger Pro"),(0,l.kt)("p",null,"Es muss ein sogennanter MQTT Broker auf einem Computer installiert sein. Die MQTT Verbindung muss in der Wallbox eingerichtet sein."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: tinkerforge-warp\n    host: 192.0.2.2 # Die IP Adresse oder der Hostname des MQTT Brokers\n    port: 1883 # Der Port des MQTT Brokers # Optional\n    topic: warp # Topic (ohne / am Anfang) # Optional\n    timeout: 30s # Akzeptiere keine Daten die \xe4lter als dieser Wert sind # Optional \n")),(0,l.kt)("h2",{id:"vestel-evc04-"},"Vestel EVC04 \ud83d\udc9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: vestel      \n    \n    # Modbus TCP\n    modbus: tcpip\n    id: 255\n    host: 192.0.2.2 # Hostname\n    port: 502 # Port \n")),(0,l.kt)(o.ZP,{mdxType:"SponsorshipRequired"}),(0,l.kt)("h2",{id:"wallbe"},"Wallbe"),(0,l.kt)("h3",{id:"eco-pro"},"Eco, Pro"),(0,l.kt)("p",null,"Die Wallbox muss \xfcber ein Netzwerkkabel angebunden sein und im Ger\xe4t muss der DIP Schalter 10 auf 'ON' gestellt sein."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: wallbe\n    host: 192.0.2.2 # IP-Adresse oder Hostname\n    port: 502 # Port # Optional \n")),(0,l.kt)("h3",{id:"eco-pro-mit-strommessger\xe4t"},"Eco, Pro (mit Strommessger\xe4t)"),(0,l.kt)("p",null,"Im Ger\xe4t muss der DIP Schalter 10 auf 'ON' gestellt sein."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: wallbe-meter\n    host: 192.0.2.2 # IP-Adresse oder Hostname\n    port: 502 # Port # Optional \n")),(0,l.kt)("h3",{id:"eco-pro-vor-2019"},"Eco, Pro (vor ~2019)"),(0,l.kt)("p",null,"Im Ger\xe4t muss der DIP Schalter 10 auf 'ON' gestellt sein."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: wallbe-pre2019\n    host: 192.0.2.2 # IP-Adresse oder Hostname\n    port: 502 # Port # Optional \n")),(0,l.kt)("h3",{id:"eco-pro-vor-2019-mit-strommessger\xe4t"},"Eco, Pro (vor ~2019, mit Strommessger\xe4t)"),(0,l.kt)("p",null,"Im Ger\xe4t muss der DIP Schalter 10 auf 'ON' gestellt sein."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: wallbe-pre2019-meter\n    host: 192.0.2.2 # IP-Adresse oder Hostname\n    port: 502 # Port # Optional \n")),(0,l.kt)("h2",{id:"walther-werke-basic-evo-pro-"},"Walther Werke Basic Evo Pro \ud83d\udc9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'chargers:\n  - name: my_charger\n    type: template\n    template: heidelberg      \n    \n    # RS485 via adapter (Modbus RTU)\n    modbus: rs485serial\n    id: 1\n    device: /dev/ttyUSB0 # USB-RS485 Adapter Adresse\n    baudrate: 19200 # Pr\xfcfe die Ger\xe4teeinstellungen, typische Werte sind 9600, 19200, 38400, 57600, 115200\n    comset: "8E1" # Kommunikationsparameter f\xfcr den Adapter\n    \n    # RS485 via TCP/IP (Modbus RTU)\n    modbus: rs485tcpip\n    id: 1\n    host: 192.0.2.2 # Hostname\n    port: 502 # Port \n')),(0,l.kt)(o.ZP,{mdxType:"SponsorshipRequired"}),(0,l.kt)("h2",{id:"webasto-live"},"Webasto Live"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: webasto\n    host: 192.0.2.2 # IP-Adresse oder Hostname\n    port: 502 # Port # Optional \n")),(0,l.kt)("h2",{id:"generische-unterst\xfctzung"},"Generische Unterst\xfctzung"),(0,l.kt)("h3",{id:"manuell"},"manuell"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: custom\n    status: # charger status A..F\n      source: ...\n      # ...\n    enabled: # charger enabled state (true/false or 0/1)\n      source: ...\n      # ...\n    enable: # set charger enabled state (true/false or 0/1)\n      source: ...\n      # ...\n    maxcurrent: # set charger max current (A)\n      source: ...\n      # ...\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dokumentation der Werte f\xfcr ",(0,l.kt)("inlineCode",{parentName:"li"},"status A..F"),": ",(0,l.kt)("a",{parentName:"li",href:"https://evsim.gonium.net/#der-control-pilot-cp"},"https://evsim.gonium.net/#der-control-pilot-cp"))),(0,l.kt)("h3",{id:"eebus-kompatible-wallbox"},"EEBUS kompatible Wallbox"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: eebus\n    ski: # Die SKI der Wallbox, ist \xfcblicherweise im Web Interface der Wallbox zu finden\n    enforcePVLimits: true # Verwende PV Laden \xfcber eine Ladebegrenzung (wie herk\xf6mmliche Wallboxen) bei Fahrzeugen mit Unterst\xfctzung von ISO15118 # Optional \n")),(0,l.kt)("h3",{id:"phoenix"},"Phoenix"),(0,l.kt)("h4",{id:"em-cp-pp-eth-controller-modbus-tcp"},"EM-CP-PP-ETH Controller (Modbus TCP)"),(0,l.kt)("p",null,"Die Wallbox muss \xfcber ein Netzwerkkabel angebunden sein und im Ger\xe4t muss der DIP Schalter 10 auf 'ON' gestellt sein."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: phoenix-em-eth\n    host: 192.0.2.2 # IP-Adresse oder Hostname\n    port: 502 # Port # Optional \n")),(0,l.kt)("h4",{id:"ev-eth-controller-modbus-tcp"},"EV-ETH Controller (Modbus TCP)"),(0,l.kt)("p",null,"Die Wallbox muss \xfcber ein Netzwerkkabel angebunden sein und im Ger\xe4t muss der DIP Schalter 10 auf 'ON' gestellt sein."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: phoenix-ev-eth\n    host: 192.0.2.2 # IP-Adresse oder Hostname\n    port: 502 # Port # Optional \n")),(0,l.kt)("h4",{id:"ev-ser-controller-modbus-rtu"},"EV-SER Controller (Modbus RTU)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'chargers:\n  - name: my_charger\n    type: template\n    template: phoenix-ev-ser      \n    \n    # RS485 via adapter (Modbus RTU)\n    modbus: rs485serial\n    id: 1\n    device: /dev/ttyUSB0 # USB-RS485 Adapter Adresse\n    baudrate: 9600 # Pr\xfcfe die Ger\xe4teeinstellungen, typische Werte sind 9600, 19200, 38400, 57600, 115200\n    comset: "8N1" # Kommunikationsparameter f\xfcr den Adapter\n    \n    # RS485 via TCP/IP (Modbus RTU)\n    modbus: rs485tcpip\n    id: 1\n    host: 192.0.2.2 # Hostname\n    port: 502 # Port \n')),(0,l.kt)("h2",{id:"schaltbare-steckdosen"},"Schaltbare Steckdosen"),(0,l.kt)("p",null,"Die von evcc unterst\xfctzten schaltbaren Steckdosen und SmartHome Schalter, k\xf6nnen in zwei Modi betrieben werden:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Charger Modus (Standard)"),(0,l.kt)("li",{parentName:"ul"},"Static-Switch Modus")),(0,l.kt)("p",null,"Der ",(0,l.kt)("em",{parentName:"p"},"Charger Modus")," erlaubt die Nutzung der schaltbaren Steckdose als Ladesteuerung von Akku betriebenen Ger\xe4ten (E-Motorrad, E-Bikes ...).\nDabei wird der Ladestrom gemessen und von evcc angezeigt, sowie beim Erreichen des Erhaltungsladungsstroms ( < ",(0,l.kt)("inlineCode",{parentName:"p"},"standbypower"),") des Akkus der Status geladen ausgegeben."),(0,l.kt)("p",null,"Demgegen\xfcber dient der ",(0,l.kt)("em",{parentName:"p"},"Static-Switch")," Modus zum einfachen Schalten von Verbrauchern, wie W\xe4rmepumpen, Klimaanlagen etc.\nDer von der Steckdose gelieferte Status h\xe4ngt dabei direkt vom Schaltzustand der Steckdose ab (An=Lade, Aus=Geladen)."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Um im ",(0,l.kt)("em",{parentName:"p"},"Static-Switch")," Modus eine aussagef\xe4hige Leistungsinformation anzuzeigen, empfiehlt es sich ein separates Custom-Meter zu definieren."))),(0,l.kt)("p",null,"Bei allen schaltbaren Steckdosen wird der Modus \xfcber den Parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"standbypower")," eingestellt."),(0,l.kt)("p",null,"Ist der Wert gr\xf6\xdfer oder gleich 0, ist der ",(0,l.kt)("em",{parentName:"p"},"Charger Modus")," aktiviert. Der eingestellte Wert dient als Schwellwert in Watt.\nSolange die durch die Steckdose gemessene Leistung sich \xfcber diesem Schellwert befindet, wird der Ladevorgang gemeldet,\nf\xe4llt die Leistung unter diesen Schwellwert, ist der Erhaltungsladebereich bei vollem Akku erreicht und es wird der Ladevorgang als abgeschlossen gemeldet."),(0,l.kt)("p",null,"Stetzt man ",(0,l.kt)("inlineCode",{parentName:"p"},"standbypower")," auf einen negativen Wert arbeitet die schaltbare Steckdose im ",(0,l.kt)("em",{parentName:"p"},"Static-Switch")," Modus."),(0,l.kt)("h3",{id:"avm-fritzdect"},"AVM FritzDECT"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: fritzdect\n    uri: https://fritz.box # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    ain: 007788992233 # Die AIN ist auf dem Typenschild auf der Ger\xe4ter\xfcckseite aufgedruckt.\n    standbypower: 15 # Leistung oberhalb des angegebenen Wertes wird als Ladeleistung gewertet # Optional \n")),(0,l.kt)("h3",{id:"shelly"},"Shelly"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: shelly\n    host: 192.0.2.2 # IP-Adresse oder Hostname\n    standbypower: 15 # Leistung oberhalb des angegebenen Wertes wird als Ladeleistung gewertet # Optional \n")),(0,l.kt)("h3",{id:"tasmota"},"Tasmota"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: tasmota\n    host: 192.0.2.2 # IP-Adresse oder Hostname\n    user: # (optional) nur erforderlich falls diese Werte im Ger\xe4t gesetzt sind # Optional\n    password: # (optional) nur erforderlich falls diese Werte im Ger\xe4t gesetzt sind # Optional\n    standbypower: 15 # Leistung oberhalb des angegebenen Wertes wird als Ladeleistung gewertet # Optional \n")),(0,l.kt)("h3",{id:"tp-link"},"TP-Link"),(0,l.kt)("h4",{id:"h-series-smart-plug"},"H-Series Smart Plug"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: tplink\n    host: 192.0.2.2 # Die IP-Adresse der TP-Link Steckdose im lokalen LAN/WLAN\n    standbypower: 15 # Leistung oberhalb des angegebenen Wertes wird als Ladeleistung gewertet # Optional \n")),(0,l.kt)("h4",{id:"tapo-p-series-smart-plug"},"Tapo P-Series Smart Plug"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"chargers:\n  - name: my_charger\n    type: template\n    template: tapo\n    host: 192.0.2.2 # Die IP-Adresse der Tapo Steckdose im lokalen LAN/WLAN\n    user: # TP-Link Benutzerkonto (Normalerweise die E-Mail Adresse, wie in der Tapo App konfiguriert)\n    password: # Password des TP-Link Benutzerkontos\n    standbypower: 15 # Leistung oberhalb des angegebenen Wertes wird als Ladeleistung gewertet # Optional \n")))}v.isMDXComponent=!0}}]);