(this["webpackJsonpcome-on-you-team"]=this["webpackJsonpcome-on-you-team"]||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/loader-large.2151e713.png"},49:function(e,t,a){e.exports=a(78)},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a(20),m=a.n(l),i=a(45),o=a(5),u=a(39),s=function(){var e=Object(u.useMediaPredicate)("(min-width: 730px)");return r.a.createElement("header",{className:"main-header"},r.a.createElement("h1",{className:"main-header-text"},e?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"accent-color"},"C"),"ome ",r.a.createElement("span",{className:"accent-color"},"O"),"n ",r.a.createElement("span",{className:"accent-color"},"Y"),"ou _____ !"):r.a.createElement("span",{className:"accent-color"},"COY__!")),r.a.createElement("p",null,"Select your team size, add players to the pitch, then set your team name."),r.a.createElement("p",null,"Players will be assigned randomly."))},E=function(){return r.a.createElement("nav",null,r.a.createElement("a",{className:"nav-left-tab",href:"#/"},"Play"),r.a.createElement("a",{className:"nav-right-tab",href:"#/match-history"},"Match History"))},b=a(12),d=a(40),p=function(){return r.a.createElement("footer",{className:"main-footer"},r.a.createElement("p",null,"\xa9 2020 Nik Osvalds"),r.a.createElement("a",{className:"icon-link",href:"https://github.com/nosvalds/come-on-you-team"},r.a.createElement(b.a,{icon:d.a})))},f=function(){return r.a.createElement("section",{className:"four-oh-four"},r.a.createElement("h3",null,"Page not found! Head ",r.a.createElement("a",{href:"/"},"home")," to start over."))},h=a(10),y=function(e){var t=e.match,a=e.handleDelete,n=t.team_size;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{"aria-label":"match id and team size"},r.a.createElement("span",{className:"match-id"},"Game ",t.id),"".concat(n," x ").concat(n)),r.a.createElement("td",null),r.a.createElement("td",null,t.game_complete?null:r.a.createElement("button",{className:"btn-primary","aria-label":"resume unfinished game button"},"Resume")),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("button",{className:"btn-primary","aria-label":"delete game button",onClick:function(){return a(t.id)}},r.a.createElement(b.a,{icon:h.c})))),r.a.createElement("tr",null,r.a.createElement("td",{"aria-label":"Team A name"},t.teamA.name),r.a.createElement("td",{"aria-label":"Team A score"},t.teamA.score),r.a.createElement("td",null,r.a.createElement(b.a,{icon:h.a})),r.a.createElement("td",{"aria-label":"Team B score"},t.teamB.score),r.a.createElement("td",{"aria-label":"Team B name"},t.teamB.name)))},O=a(41),N=a.n(O).a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://come-on-you-team.herokuapp.com/api/matches",headers:{Accept:"application/json"}}),j=Object(c.b)("",(function(e){return{handleDelete:function(t){return e(function(e){return function(t){N.delete("/".concat(e)).then((function(){t(function(e){return{type:"REMOVE_MATCH",id:e}}(e))}))}}(t))}}}))(y),S=a(42),A=a(43),v=a(48),T=a(47),_=a(44),g=a.n(_),F=function(e){Object(v.a)(a,e);var t=Object(T.a)(a);function a(){return Object(S.a)(this,a),t.apply(this,arguments)}return Object(A.a)(a,[{key:"componentDidMount",value:function(){this.props.loaded||this.props.handleLoad()}},{key:"render",value:function(){var e=this.props,t=e.children;return e.loaded?t:r.a.createElement("div",{className:"loader","aria-label":"Loading..."},r.a.createElement("img",{alt:"Loading",src:g.a}))}}]),a}(n.Component),C=Object(c.b)((function(e){return{loaded:e.matchHistoryLoaded}}),(function(e){return{handleLoad:function(){return e((function(e){N.get("/").then((function(t){var a=t.data;e(function(e){return{type:"LOAD_HISTORY",matchHistory:e}}(a.data))}))}))}}}))(F),B=function(e){var t=e.matchHistory;return r.a.createElement("section",{className:"match-hist-section"},r.a.createElement("header",null,r.a.createElement("h3",{className:"match-hist-header"},"Match History")),r.a.createElement(C,null,r.a.createElement("table",{className:"match-hist-table"},r.a.createElement("thead",null),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement(j,{key:t,match:e})}))))))},M=Object(c.b)((function(e){return{matchHistory:e.matchHistory}}))(B),k=function(e){var t=e.players;return r.a.createElement("section",{className:"pitch-section-container"},t.map((function(e,t){return r.a.createElement("h4",{key:t,className:"player-name"},e.name)})))},H=Object(c.b)((function(e,t){var a=t.team,n=t.position;return{players:e[a].players.filter((function(e){return e.position===n}))}}))(k),z=function(){var e=["GK","D","F"];return r.a.createElement("section",{className:"pitch-container-background"},r.a.createElement("div",{className:"pitch-container-inside"},e.map((function(e,t){return r.a.createElement(H,{key:t,team:"teamA",position:e})})),e.reverse().map((function(e,t){return r.a.createElement(H,{key:t,team:"teamB",position:e})}))))},D=function(e){var t=e.team,a=e.score,n=e.handleChange,c=function(e){var r=a+e;r>=0&&n(r,t)};return r.a.createElement("div",{className:"score-display"},r.a.createElement("div",{className:"increment-container"},r.a.createElement("button",{onClick:function(){return c(-1)},className:"btn-increment btn-increment-l"},r.a.createElement(b.a,{icon:h.a})),r.a.createElement("h5",null,a),r.a.createElement("button",{onClick:function(){return c(1)},className:"btn-increment btn-increment-r"},r.a.createElement(b.a,{icon:h.b}))))},R=Object(c.b)((function(e,t){return{score:e[t.team].score}}),(function(e){return{handleChange:function(t,a){return e(function(e,t){return{type:"CHANGE_SCORE",score:+e,team:t}}(t,a))}}}))(D),L=function(){return r.a.createElement("section",{className:"score-section"},r.a.createElement(R,{team:"teamA"}),r.a.createElement(R,{team:"teamB"}))},x=a(13),P=function(e){var t=e.edit,a=e.handleSubmit,c=e.handleClick,l=e.initialTeamA,m=e.initialTeamB,i=Object(n.useState)(l),o=Object(x.a)(i,2),u=o[0],s=o[1],E=Object(n.useState)(m),b=Object(x.a)(E,2),d=b[0],p=b[1];return r.a.createElement("section",{className:"team-info"},t?r.a.createElement("form",{className:"team-entry-form",onSubmit:function(e){e.preventDefault(),a({teamA:u,teamB:d})}},r.a.createElement("section",{className:"form-section"},r.a.createElement("label",{htmlFor:"teamA",className:"team-name-label","aria-label":"Team A name"}),r.a.createElement("input",{type:"text",id:"teamA",className:"name-input",value:u,onChange:function(e){s(e.currentTarget.value)},required:!0})),r.a.createElement("section",{className:"form-section"},r.a.createElement("label",{htmlFor:"teamA",className:"team-name-label","aria-label":"Team B name"}),r.a.createElement("input",{type:"text",id:"teamA",className:"name-input",value:d,onChange:function(e){p(e.currentTarget.value)},required:!0})),r.a.createElement("button",{className:"btn-primary"},"Set")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{onClick:c},u),r.a.createElement("h3",{onClick:c},d)))},w=Object(c.b)((function(e){var t=e.teamSize;return{edit:e.editTeamName&&e.teamA.playersFilled===t&&e.teamB.playersFilled===t,initialTeamA:e.teamA.name,initialTeamB:e.teamB.name}}),(function(e){return{handleSubmit:function(t){return e({type:"SET_TEAM_NAMES",teamA:(a=t).teamA,teamB:a.teamB});var a},handleClick:function(){return e({type:"EDIT_TEAM_NAMES"})}}}))(P),I=function(e){var t=e.handleSubmit,a=e.teamsFilled,c=Object(n.useState)(""),l=Object(x.a)(c,2),m=l[0],i=l[1];return a?null:r.a.createElement("form",{className:"player-entry-form",onSubmit:function(e){e.preventDefault(),t(m),i("")}},r.a.createElement("section",{className:"form-section"},r.a.createElement("label",{htmlFor:"playerName",className:"player-name-label"},"Player Name"),r.a.createElement("input",{type:"text",id:"playerName",className:"name-input",value:m,onChange:function(e){i(e.currentTarget.value)},required:!0})),r.a.createElement("button",{className:"btn-primary"},"Add Player"))},G=Object(c.b)((function(e){var t=e.teamSize;return{teamsFilled:e.teamA.playersFilled===t&&e.teamB.playersFilled===t}}),(function(e){return{handleSubmit:function(t){return e(function(e){return{type:"ADD_PLAYER",name:e}}(t))}}}))(I),Y=function(e){var t=e.initial,a=e.min,c=e.max,l=e.handleSubmit,m=Object(n.useState)(t),i=Object(x.a)(m,2),o=i[0],u=i[1],s=function(e){var t=o+e;t<=c&&t>=a&&u(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"team-size-section"},r.a.createElement("h5",null,"Team Size"),r.a.createElement("div",{className:"increment-container"},r.a.createElement("button",{onClick:function(){return s(-1)},className:"btn-increment btn-increment-l"},r.a.createElement(b.a,{icon:h.a})),r.a.createElement("h5",null,o),r.a.createElement("button",{onClick:function(){return s(1)},className:"btn-increment btn-increment-r"},r.a.createElement(b.a,{icon:h.b}))),r.a.createElement("button",{className:"btn-primary",onClick:function(){return l(o)}},"Set")))},U=Object(c.b)("",(function(e){return{handleSubmit:function(t){return e({type:"SET_TEAM_SIZE",teamSize:t})}}}))(Y),q=function(e){var t=e.teamsFilled,a=e.handleReset,n=e.handleShuffle,c=e.handleComplete;return r.a.createElement("section",{className:"match-options-section"},r.a.createElement("button",{className:"btn-primary",onClick:a},"Start Over"),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn-primary",onClick:c},"Match Complete"),r.a.createElement("button",{className:"btn-primary",onClick:n},"Shuffle Teams")):null)},V=Object(c.b)((function(e){var t=e.teamSize;return{teamsFilled:e.teamA.playersFilled===t&&e.teamB.playersFilled===t}}),(function(e,t){return{handleReset:function(){return e({type:"RESET"})},handleShuffle:function(){return e({type:"SHUFFLE_TEAMS"})},handleComplete:function(){return e((function(e,t){var a=t(),n=a.teamSize,r=a.teamA,c=a.teamB,l={team_size:n,team_a_name:r.name,team_b_name:c.name,team_a_score:r.score,team_b_score:c.score,game_complete:!0};N.post("/",l).then((function(t){t.data,e({type:"RESET"})}))}))}}}))(q),J=function(e){var t=e.teamsFilled,a=e.editTeamName;return t&&a?r.a.createElement("h3",{className:"pitch-header"},"Players set, now name your teams!"):t?r.a.createElement("h3",{className:"pitch-header"},"Teams Complete, Game On!"):null},K=Object(c.b)((function(e){var t=e.teamSize,a=e.editTeamName,n=e.teamA,r=e.teamB;return{teamsFilled:n.playersFilled===t&&r.playersFilled===t,editTeamName:a}}))(J),X=function(e){return 0===e.teamSize?r.a.createElement(U,{initial:5,min:3,max:11}):r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),r.a.createElement(G,null),r.a.createElement(w,null),r.a.createElement(L,null),r.a.createElement(z,null),r.a.createElement(V,null))},Z=Object(c.b)((function(e){return{teamSize:e.teamSize}}))(X);var Q=function(){return r.a.createElement("main",{className:"main-app"},r.a.createElement(i.a,null,r.a.createElement(s,null),r.a.createElement(E,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:Z}),r.a.createElement(o.a,{exact:!0,path:"/match-history",component:M}),r.a.createElement(f,null)),r.a.createElement(p,null)))},W=a(14),$={teamSize:0,editTeamName:!0,teamA:{name:"Team A",playersFilled:0,players:[],score:0},teamB:{name:"Team B",playersFilled:0,players:[],score:0},matchHistory:[],matchHistoryLoaded:!1},ee=a(27),te=a(18),ae=a(1),ne=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},re=function(e){var t=[].concat(Object(ee.a)(e.teamA.players.map((function(e){return e.name}))),Object(ee.a)(e.teamB.players.map((function(e){return e.name})))),a=(t=function(e){for(var t=e.length-1;t>0;t-=1){var a=Math.floor((t+1)*Math.random()),n=e[t];e[t]=e[a],e[a]=n}return e}(t)).slice(0,t.length/2),n=t.slice(t.length/2);return Object(ae.a)(Object(ae.a)({},e),{},{teamA:Object(ae.a)(Object(ae.a)({},e.teamA),{},{players:e.teamA.players.map((function(e,t){return Object(ae.a)(Object(ae.a)({},e),{},{name:a[t]})}))}),teamB:Object(ae.a)(Object(ae.a)({},e.teamB),{},{players:e.teamB.players.map((function(e,t){return Object(ae.a)(Object(ae.a)({},e),{},{name:n[t]})}))})})},ce=function(e,t){switch(t.type){case"ADD_PLAYER":return function e(t,a){var n=1===ne(1,2)?"teamA":"teamB",r=ne(0,t.teamSize-1);return""!==t[n].players[r].name?e(t,a):Object(ae.a)(Object(ae.a)({},t),{},Object(te.a)({},n,Object(ae.a)(Object(ae.a)({},t[n]),{},{playersFilled:t[n].playersFilled+1,players:t[n].players.map((function(e,t){return t===r?Object(ae.a)(Object(ae.a)({},e),{},{name:a.name}):Object(ae.a)({},e)}))})))}(e,t);case"SET_TEAM_SIZE":return function(e,t){for(var a=[],n="",r=t.teamSize,c=Math.floor((r-1)/2),l=0;l<r;l+=1)n=0===l?"GK":l>=1&&l<=c?"D":"F",a[l]={name:"",position:n};return Object(ae.a)(Object(ae.a)({},e),{},{teamSize:t.teamSize,teamA:Object(ae.a)(Object(ae.a)({},e.teamA),{},{players:a}),teamB:Object(ae.a)(Object(ae.a)({},e.teamB),{},{players:a})})}(e,t);case"SET_TEAM_NAMES":return function(e,t){return Object(ae.a)(Object(ae.a)({},e),{},{teamA:Object(ae.a)(Object(ae.a)({},e.teamA),{},{name:t.teamA}),teamB:Object(ae.a)(Object(ae.a)({},e.teamB),{},{name:t.teamB}),editTeamName:!1})}(e,t);case"EDIT_TEAM_NAMES":return function(e){return Object(ae.a)(Object(ae.a)({},e),{},{editTeamName:!0})}(e);case"SHUFFLE_TEAMS":return re(e);case"LOAD_HISTORY":return function(e,t){var a=t.matchHistory;return Object(ae.a)(Object(ae.a)({},e),{},{matchHistory:a,matchHistoryLoaded:!0})}(e,t);case"REMOVE_MATCH":return function(e,t){var a=t.id;return Object(ae.a)(Object(ae.a)({},e),{},{matchHistory:e.matchHistory.filter((function(e){return e.id!==a}))})}(e,t);case"CHANGE_SCORE":return function(e,t){var a=t.score,n=t.team;return Object(ae.a)(Object(ae.a)({},e),{},Object(te.a)({},n,Object(ae.a)(Object(ae.a)({},e[n]),{},{score:a})))}(e,t);case"RESET":return Object(ae.a)({},$);default:return e}},le=a(46),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.c,ie=Object(W.d)(ce,$,me(Object(W.a)(le.a)));a(77);m.a.render(r.a.createElement(c.a,{store:ie},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null))),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.15600d85.chunk.js.map