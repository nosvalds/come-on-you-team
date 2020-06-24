(this["webpackJsonpcome-on-you-team"]=this["webpackJsonpcome-on-you-team"]||[]).push([[0],{22:function(e,a,t){e.exports=t(35)},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),l=t(9),m=t.n(l),i=t(20),u=function(){var e=Object(i.useMediaPredicate)("(min-width: 730px)");return r.a.createElement("header",{className:"main-header"},r.a.createElement("h1",{className:"main-header-text"},e?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"accent-color"},"C"),"ome ",r.a.createElement("span",{className:"accent-color"},"O"),"n ",r.a.createElement("span",{className:"accent-color"},"Y"),"ou _____ !"):r.a.createElement("span",{className:"accent-color"},"COY__!")),r.a.createElement("p",null,"Select your team size, add players to the pitch, then set your team name."),r.a.createElement("p",null,"Players will be assigned randomly."))},o=function(e){var a=e.players;return r.a.createElement("section",{className:"pitch-section-container"},a.map((function(e,a){return r.a.createElement("h4",{key:a,className:"player-name"},e.name)})))},s=Object(c.b)((function(e,a){var t=a.team,n=a.position;return{players:e[t].players.filter((function(e){return e.position===n}))}}))(o),b=function(){var e=["GK","D","F"];return r.a.createElement("section",{className:"pitch-container-background"},r.a.createElement("div",{className:"pitch-container-inside"},e.map((function(e,a){return r.a.createElement(s,{key:a,team:"teamA",position:e})})),e.reverse().map((function(e,a){return r.a.createElement(s,{key:a,team:"teamB",position:e})}))))},E=t(6),p=t(21),f=function(){return r.a.createElement("footer",{className:"main-footer"},r.a.createElement("p",null,"\xa9 2020 Nik Osvalds"),r.a.createElement("a",{className:"icon-link",href:"https://github.com/nosvalds/come-on-you-team"},r.a.createElement(E.a,{icon:p.a})))},d=t(4),y=function(e){var a=e.edit,t=e.handleSubmit,c=e.handleClick,l=e.initialTeamA,m=e.initialTeamB,i=Object(n.useState)(l),u=Object(d.a)(i,2),o=u[0],s=u[1],b=Object(n.useState)(m),E=Object(d.a)(b,2),p=E[0],f=E[1];return r.a.createElement("section",{className:"team-info"},a?r.a.createElement("form",{className:"team-entry-form",onSubmit:function(e){e.preventDefault(),t({teamA:o,teamB:p})}},r.a.createElement("section",{className:"form-section"},r.a.createElement("label",{htmlFor:"teamA",className:"team-name-label","aria-label":"Team A name"}),r.a.createElement("input",{type:"text",id:"teamA",className:"name-input",value:o,onChange:function(e){s(e.currentTarget.value)},required:!0})),r.a.createElement("section",{className:"form-section"},r.a.createElement("label",{htmlFor:"teamA",className:"team-name-label","aria-label":"Team B name"}),r.a.createElement("input",{type:"text",id:"teamA",className:"name-input",value:p,onChange:function(e){f(e.currentTarget.value)},required:!0})),r.a.createElement("button",{className:"btn-primary"},"Set")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{onClick:c},o),r.a.createElement("h3",{onClick:c},p)))},O=Object(c.b)((function(e){var a=e.teamSize;return{edit:e.editTeamName&&e.teamA.playersFilled===a&&e.teamB.playersFilled===a,initialTeamA:e.teamA.name,initialTeamB:e.teamB.name}}),(function(e){return{handleSubmit:function(a){return e({type:"SET_TEAM_NAMES",teamA:(t=a).teamA,teamB:t.teamB});var t},handleClick:function(){return e({type:"EDIT_TEAM_NAMES"})}}}))(y),h=function(e){var a=e.handleSubmit,t=e.teamsFilled,c=Object(n.useState)(""),l=Object(d.a)(c,2),m=l[0],i=l[1];return t?r.a.createElement("h3",{className:"pitch-header"},"Teams full, Game On!"):r.a.createElement("form",{className:"player-entry-form",onSubmit:function(e){e.preventDefault(),a(m),i("")}},r.a.createElement("section",{className:"form-section"},r.a.createElement("label",{htmlFor:"playerName",className:"player-name-label"},"Player Name"),r.a.createElement("input",{type:"text",id:"playerName",className:"name-input",value:m,onChange:function(e){i(e.currentTarget.value)},required:!0})),r.a.createElement("button",{className:"btn-primary"},"Add Player"))},S=Object(c.b)((function(e){var a=e.teamSize;return{teamsFilled:e.teamA.playersFilled===a&&e.teamB.playersFilled===a}}),(function(e){return{handleSubmit:function(a){return e(function(e){return{type:"ADD_PLAYER",name:e}}(a))}}}))(h),j=t(11),N=function(e){var a=e.initial,t=e.min,c=e.max,l=e.handleSubmit,m=Object(n.useState)(a),i=Object(d.a)(m,2),u=i[0],o=i[1],s=function(e){var a=u+e;a<=c&&a>=t&&o(a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"team-size-section"},r.a.createElement("h5",null,"Team Size"),r.a.createElement("div",{className:"increment-container"},r.a.createElement("button",{onClick:function(){return s(-1)},className:"btn-increment btn-increment-l"},r.a.createElement(E.a,{icon:j.a})),r.a.createElement("h5",null,u),r.a.createElement("button",{onClick:function(){return s(1)},className:"btn-increment btn-increment-r"},r.a.createElement(E.a,{icon:j.b}))),r.a.createElement("button",{className:"btn-primary",onClick:function(){return l(u)}},"Set")))},A=Object(c.b)("",(function(e){return{handleSubmit:function(a){return e({type:"SET_TEAM_SIZE",teamSize:a})}}}))(N),T=function(e){var a=e.teamsFilled,t=e.handleReset,n=e.handleShuffle;return r.a.createElement("section",{className:"match-options-section"},r.a.createElement("button",{className:"btn-primary",onClick:t},"Start Over"),a?r.a.createElement("button",{className:"btn-primary",onClick:n},"Shuffle Teams"):null)},v=Object(c.b)((function(e){var a=e.teamSize;return{teamsFilled:e.teamA.playersFilled===a&&e.teamB.playersFilled===a}}),(function(e){return{handleReset:function(){return e({type:"RESET"})},handleShuffle:function(){return e({type:"SHUFFLE_TEAMS"})}}}))(T);var _=function(e){var a=e.teamSize;return r.a.createElement("main",{className:"main-app"},r.a.createElement(u,null),0===a?r.a.createElement(A,{initial:5,min:3,max:11}):r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(O,null),r.a.createElement(b,null),r.a.createElement(v,null)),r.a.createElement(f,null))},F=Object(c.b)((function(e){return{teamSize:e.teamSize}}))(_),B=t(5),M={teamSize:0,editTeamName:!0,teamA:{name:"Team A",playersFilled:0,players:[]},teamB:{name:"Team B",playersFilled:0,players:[]}},g=t(17),k=t(12),z=t(1),C=function(e,a){return e=Math.ceil(e),a=Math.floor(a),Math.floor(Math.random()*(a-e+1))+e},D=function(e){var a=[].concat(Object(g.a)(e.teamA.players.map((function(e){return e.name}))),Object(g.a)(e.teamB.players.map((function(e){return e.name})))),t=(a=function(e){for(var a=e.length-1;a>0;a-=1){var t=Math.floor((a+1)*Math.random()),n=e[a];e[a]=e[t],e[t]=n}return e}(a)).slice(0,a.length/2),n=a.slice(a.length/2);return Object(z.a)(Object(z.a)({},e),{},{teamA:Object(z.a)(Object(z.a)({},e.teamA),{},{players:e.teamA.players.map((function(e,a){return Object(z.a)(Object(z.a)({},e),{},{name:t[a]})}))}),teamB:Object(z.a)(Object(z.a)({},e.teamB),{},{players:e.teamB.players.map((function(e,a){return Object(z.a)(Object(z.a)({},e),{},{name:n[a]})}))})})},x=function(e,a){switch(a.type){case"ADD_PLAYER":return function e(a,t){var n=1===C(1,2)?"teamA":"teamB",r=C(0,a.teamSize-1);return""!==a[n].players[r].name?e(a,t):Object(z.a)(Object(z.a)({},a),{},Object(k.a)({},n,Object(z.a)(Object(z.a)({},a[n]),{},{playersFilled:a[n].playersFilled+1,players:a[n].players.map((function(e,a){return a===r?Object(z.a)(Object(z.a)({},e),{},{name:t.name}):Object(z.a)({},e)}))})))}(e,a);case"SET_TEAM_SIZE":return function(e,a){for(var t=[],n="",r=a.teamSize,c=Math.floor((r-1)/2),l=0;l<r;l+=1)n=0===l?"GK":l>=1&&l<=c?"D":"F",t[l]={name:"",position:n};return Object(z.a)(Object(z.a)({},e),{},{teamSize:a.teamSize,teamA:Object(z.a)(Object(z.a)({},e.teamA),{},{players:t}),teamB:Object(z.a)(Object(z.a)({},e.teamB),{},{players:t})})}(e,a);case"SET_TEAM_NAMES":return function(e,a){return Object(z.a)(Object(z.a)({},e),{},{teamA:Object(z.a)(Object(z.a)({},e.teamA),{},{name:a.teamA}),teamB:Object(z.a)(Object(z.a)({},e.teamB),{},{name:a.teamB}),editTeamName:!1})}(e,a);case"EDIT_TEAM_NAMES":return function(e){return Object(z.a)(Object(z.a)({},e),{},{editTeamName:!0})}(e);case"SHUFFLE_TEAMS":return D(e);case"RESET":return Object(z.a)({},M);default:return e}},w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.b,P=Object(B.c)(x,M,w());t(34);m.a.render(r.a.createElement(c.a,{store:P},r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.4fd44503.chunk.js.map