(this["webpackJsonpstock-api-app"]=this["webpackJsonpstock-api-app"]||[]).push([[4],{196:function(e,a,t){e.exports={company_info_main:"Main_company_info_main__6RXf_",go_back_icon:"Main_go_back_icon__3zai0"}},197:function(e,a,t){e.exports={company_info_heading:"Heading_company_info_heading__2o_F-"}},198:function(e,a,t){},199:function(e,a,t){e.exports={overview:"Overview_overview__3WEI2",title:"Overview_title__1z3KH",heading_label:"Overview_heading_label__26lmz",description:"Overview_description__3428R"}},200:function(e,a,t){e.exports={daily_chart:"Chartstyle_daily_chart__8tpT4",gradient_card_container:"Chartstyle_gradient_card_container__3ZYTl",chart_container:"Chartstyle_chart_container__2JCJP"}},391:function(e,a,t){e.exports={balance_sheet:"BalanceSheet_balance_sheet__36FoT",list_items:"BalanceSheet_list_items__2hydy"}},392:function(e,a,t){e.exports={card:"Cardstyle_card__14CYx",card_heading:"Cardstyle_card_heading__3TpXh",card_icon:"Cardstyle_card_icon__2qhEA",card_body:"Cardstyle_card_body__kUevI"}},418:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(414),c=t(196),o=t.n(c),i=t(10),s=t(197),d=t.n(s);t(198);var m=function(e){var a=e.text,t=e.id,n=e.handler;return r.a.createElement("button",{className:"heading_button",id:t,onClick:function(e){return n(e)}},a)},u=["overview_1","stock_performance_2","balance_sheet_3"];var _=function(){var e=Object(n.useContext)(i.b).setTypeView;function a(a){"overview_1"===a.target.id?e("overview"):"stock_performance_2"===a.target.id?e("chart"):e("balancesheet")}return r.a.createElement("header",{className:d.a.company_info_heading},r.a.createElement(m,{text:"Overview",id:u[0],handler:a}),r.a.createElement(m,{text:"Stock performance",id:u[1],handler:a}),r.a.createElement(m,{text:"Balance sheet",id:u[2],handler:a}))},E=t(199),g=t.n(E);var h=function(e){var a=e.data;return r.a.createElement("div",{className:g.a.overview},a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:g.a.title},"Company Overview"),r.a.createElement("h3",{className:g.a.heading_label}," Name - ",r.a.createElement("span",null," ",a.Name," ")," "),r.a.createElement("h3",{className:g.a.heading_label}," Symbol - ",r.a.createElement("span",null," ",a.Symbol," ")," "),r.a.createElement("p",{className:g.a.description}," ",a.Description," "),r.a.createElement("h1",{className:g.a.title},"Business Overview"),r.a.createElement("ul",null,r.a.createElement("li",null,"Exchange - ",r.a.createElement("strong",null,a.Exchange)),r.a.createElement("li",null,"Currency - ",r.a.createElement("strong",null,a.Currency)," "),r.a.createElement("li",null,"Country - ",r.a.createElement("strong",null,a.Country)," "),r.a.createElement("li",null,"Industry - ",r.a.createElement("strong",null,a.Industry)," "),r.a.createElement("li",null,"Latest - ",r.a.createElement("strong",null,a.LatestQuarter)," "),r.a.createElement("li",null,"PE Ratio - ",r.a.createElement("strong",null,a.PERatio)," "),r.a.createElement("li",null,"PEG Ratio - ",r.a.createElement("strong",null,a.PEGRatio)," "),r.a.createElement("li",null,"Dividend Per Share - ",r.a.createElement("strong",null,a.DividendPerShare)," "),r.a.createElement("li",null,"Dividend Yield - ",r.a.createElement("strong",null,a.DividendYield)," "),r.a.createElement("li",null,"Profit Margin - ",r.a.createElement("strong",null,a.ProfitMargin)," "))))},p=t(11),y=t(200),f=t.n(y),b=t(415);var v=function(e){var a=e.data,t=a.data,n=a.params;return r.a.createElement(b.d,{width:"100%",height:"90%"},r.a.createElement(b.b,{data:t,margin:{top:0,right:0,left:0,bottom:0}},r.a.createElement(b.f,{dataKey:"name"}),r.a.createElement(b.e,null),r.a.createElement(b.c,{verticalAlign:"top",height:36}),r.a.createElement(b.a,{type:"monotone",dataKey:n.dataKeys[2],stackId:"1",stroke:"red",fill:"red"}),r.a.createElement(b.a,{type:"monotone",dataKey:n.dataKeys[1],stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),r.a.createElement(b.a,{type:"monotone",dataKey:n.dataKeys[0],stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),r.a.createElement(b.a,{type:"monotone",dataKey:n.dataKeys[3],stackId:"1",stroke:"#ffc658",fill:"#ffc658"})))};function C(e){return r.a.createElement("div",{style:{color:"white",background:"linear-gradient(".concat(e.firstBg,", ").concat(e.secondBg,")")}},r.a.createElement("span",{className:"gradient_card_heading"}," ",e.heading," "),r.a.createElement("span",{className:"gradient_card_body"}," ",e.body," "))}var O=[{first:"#FFE259",second:"#FFA751",id:"1_grad_card",label:"High on ",method:["2. high"]},{first:"#EC008C",second:"#FC6767",id:"2_grad_card",label:"Low on ",method:["3. low"]},{first:"#e53935",second:"#e35d5b",id:"3_grad_card",label:"Close on ",method:["4. close"]},{first:"#02AAB0",second:"#00CDAC",id:"4_grad_card",label:"Open on ",method:["1. open"]}];var w=function(e){var a=e.data,t=Object(n.useState)([{name:"",open:"",high:"",low:"",close:""}]),l=Object(p.a)(t,2),c=l[0],o=l[1],i=Object(n.useState)({day:"",data:""}),s=Object(p.a)(i,2),d=s[0],m=s[1];return Object(n.useEffect)((function(){return function(){if(a){var e=a["Time Series (Daily)"],t=Object.keys(e);o(t.map((function(a){return{name:a,Open:e[a]["1. open"],High:e[a]["2. high"],Low:e[a]["3. low"],Close:e[a]["4. close"]}}))),m({day:t[0],data:e[t[0]]})}}(),function(){return null}}),[a]),r.a.createElement("div",{className:f.a.daily_chart},c.length<2?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:f.a.gradient_card_container},O.map((function(e){return r.a.createElement(C,{firstBg:e.first,secondBg:e.second,heading:r.a.createElement("label",null,e.label," ",d.day," "),body:r.a.createElement("h3",null," ",d.data[e.method]," ")})}))),r.a.createElement("div",{className:f.a.chart_container},r.a.createElement(v,{data:{data:c,params:{dataKeys:["Open","High","Low","Close"]}}}))))},k=t(391),N=t.n(k),S=t(393),x=t(392),j=t.n(x);var I=function(e){var a=e.headDisplay,t=e.contentBody,n=e.tracker;return r.a.createElement("div",{className:j.a.card},r.a.createElement("span",{className:j.a.card_heading},r.a.createElement("span",null,a),r.a.createElement(S.a,{className:j.a.card_icon,id:"card_icon_".concat(n),onClick:function(e){"scaleY(0)"===document.getElementById("card_body_".concat(n)).style.transform?(document.getElementById("card_body_".concat(n)).style.display="flex",document.getElementById("card_body_".concat(n)).style.transform="scaleY(1)",document.getElementById("card_icon_".concat(n)).style.transform="rotate(180deg)"):(document.getElementById("card_body_".concat(n)).style.transform="scaleY(0)",document.getElementById("card_body_".concat(n)).style.display="none",document.getElementById("card_icon_".concat(n)).style.transform="rotate(0deg)")}})),r.a.createElement("span",{className:j.a.card_body,id:"card_body_".concat(n)},t))};var B=function(e){var a=0,t=e.data;return r.a.createElement("section",{className:N.a.balance_sheet},t&&t.quarterlyReports.map((function(e){return r.a.createElement(I,{headDisplay:r.a.createElement("h4",null," Fiscal Date Ending ",e.fiscalDateEnding," "),key:e.fiscalDateEnding,tracker:a++,contentBody:r.a.createElement("ul",{className:N.a.list_items},r.a.createElement("li",null,r.a.createElement("strong",null," Reported Currency ")," -",e.reportedCurrency),r.a.createElement("li",null,r.a.createElement("strong",null," Cash ")," -",e.cash),r.a.createElement("li",null,r.a.createElement("strong",null," Total assets ")," -",e.totalAssets),r.a.createElement("li",null,r.a.createElement("strong",null," Earning assets ")," -",e.earningAssets),r.a.createElement("li",null,r.a.createElement("strong",null," Total liabilities ")," -",e.totalLiabilities),r.a.createElement("li",null,r.a.createElement("strong",null," Short term debt ")," -",e.shortTermDebt),r.a.createElement("li",null,r.a.createElement("strong",null," Long term debt ")," -",e.longTermDebt))})})))},D=t(394),T=t.n(D),K=t(396),A=t(397),P=t.n(A);var R=function(e){var a=Object(n.useState)(!0),t=Object(p.a)(a,2),r=t[0],l=t[1],c=Object(n.useState)(null),o=Object(p.a)(c,2),i=o[0],s=o[1],d=Object(n.useState)(!1),m=Object(p.a)(d,2),u=m[0],_=m[1];function E(){return(E=Object(K.a)(T.a.mark((function a(){var t;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,P()(e);case 3:t=a.sent,s(t.data),l(!1),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),_(!0),l(!1);case 12:case"end":return a.stop()}}),a,null,[[0,8]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){return function(){E.apply(this,arguments)}(),function(){return null}}),[]),{loading:r,data:i,error:u}},F=t(22),L=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_API_KEY;var M=r.a.memo((function(e){var a=Object(n.useContext)(i.b).viewCompany,t=e.params,l=e.Comp,c=Object(n.useState)("loading"),o=Object(p.a)(c,2),s=o[0],d=o[1],m=R("".concat("https://www.alphavantage.co/query?","function=").concat(t,"&symbol=").concat(a,"&apikey=").concat(L)),u=m.loading,_=m.data,E=m.error;return Object(n.useEffect)((function(){d(function(){if(!u&&_&&!E)return _.Note||_==={}?"error":"success";if(u&&!_&&!E)return"loading";if(E&&!_)return"error"}())}),[u,_,E]),r.a.createElement(r.a.Fragment,null,"loading"===s&&r.a.createElement(F.a,{theme:"primary",text:"Loading..."}),"error"===s&&r.a.createElement(F.a,{theme:"danger",text:"Something went wrong :("}),"success"===s&&r.a.createElement(l,{data:_,loading:u}))})),Y={overview:{component:h,apiMethod:"OVERVIEW"},chart:{component:w,apiMethod:"TIME_SERIES_DAILY"},balancesheet:{component:B,apiMethod:"BALANCE_SHEET"}};a.default=function(){var e=Object(n.useContext)(i.b),a=e.typeView,t=e.setMainView;return r.a.createElement("main",{className:o.a.company_info_main},r.a.createElement("div",null,r.a.createElement(l.a,{className:o.a.go_back_icon,onClick:function(){return t("gallery")}}),r.a.createElement(_,null)),r.a.createElement("section",null,r.a.createElement(M,{params:Y[a].apiMethod,Comp:Y[a].component})))}}}]);
//# sourceMappingURL=4.9aa8b566.chunk.js.map