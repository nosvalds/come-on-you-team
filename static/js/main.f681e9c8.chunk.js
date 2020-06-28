(this["webpackJsonpcome-on-you-team"]=this["webpackJsonpcome-on-you-team"]||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/loader-large.2151e713.png"},50:function(e,t,a){e.exports=a(83)},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a(20),m=a.n(l),i=a(45),o=a(5),s=a(39),u=function(){var e=Object(s.useMediaPredicate)("(min-width: 730px)");return r.a.createElement("header",{className:"main-header"},r.a.createElement("h1",{className:"main-header-text"},e?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"accent-color"},"C"),"ome ",r.a.createElement("span",{className:"accent-color"},"O"),"n ",r.a.createElement("span",{className:"accent-color"},"Y"),"ou _____ !"):r.a.createElement("span",{className:"accent-color"},"COY__!")))},h=function(){return r.a.createElement("nav",null,r.a.createElement("a",{className:"nav-left-tab",href:"#/"},"Play"),r.a.createElement("a",{className:"nav-right-tab",href:"#/match-history"},"Match History"))},E=a(7),d=a(40),b=function(){return r.a.createElement("footer",{className:"main-footer"},r.a.createElement("p",null,"\xa9 2020 Nik Osvalds"),r.a.createElement("a",{className:"icon-link",href:"https://github.com/nosvalds/come-on-you-team"},r.a.createElement(E.a,{icon:d.a})))},f=function(){return r.a.createElement("section",{className:"four-oh-four"},r.a.createElement("h3",null,"Page not found! Head ",r.a.createElement("a",{href:"/"},"home")," to start over."))},p=a(13),y=a(6),O=function(e){var t=e.showInstructions,a=e.handleClick,c=Object(n.useState)(!0),l=Object(p.a)(c,2),m=l[0],i=l[1];return r.a.createElement("section",{className:"instructions-section"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"instructions-header"},r.a.createElement("h2",null,"HOW IT WORKS"),r.a.createElement("p",null,"Randomly select teams and track scores for football matches")),r.a.createElement("div",{className:"instructions-card-container"},r.a.createElement("div",{className:"instructions-card"},r.a.createElement(E.a,{icon:y.e,className:"instructions-icon",size:"lg"}),r.a.createElement("h5",null,"Player entry"),r.a.createElement("p",null,'Select the number of players per side you would like. Then enter the players names. They will be added randomly to the pitch. Once complete you have the option of shuffling the teams by clicking the "shuffle teams" button below the pitch.')),r.a.createElement("div",{className:"instructions-card"},r.a.createElement(E.a,{icon:y.f,className:"instructions-icon"}),r.a.createElement("h5",null,"Team info"),r.a.createElement("p",null,"Fill out your team names or accept the defaults. Then you're ready to play! You can click \"Start Over\" if you've made a mistake or don't want to save the match.")),r.a.createElement("div",{className:"instructions-card"},r.a.createElement(E.a,{icon:y.a,className:"instructions-icon ball",spin:m,onClick:function(){return i(!m)}}),r.a.createElement("h5",null,"Score and save"),r.a.createElement("p",null,'Update scores with the counters underneath the team names as you go or after the match. Once the match is over press the "Match Complete" button to save the match format and score. View results of previous matches on the "Match History" tab.')))):null,r.a.createElement("button",{onClick:function(){return a()}},t?"Hide Instructions":"Show Instructions"))},N=Object(c.b)((function(e){return{showInstructions:e.showInstructions}}),(function(e){return{handleClick:function(){return e({type:"TOGGLE_INSTRUCTIONS"})}}}))(O),j=function(e){var t=e.match,a=e.handleDelete,n=t.team_size;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{"aria-label":"match id and team size"},r.a.createElement("span",{className:"match-id"},"Match ",t.id),"".concat(n," x ").concat(n)),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("button",{className:"btn-primary","aria-label":"delete game button",onClick:function(){return a(t.id)}},r.a.createElement(E.a,{icon:y.d})))),r.a.createElement("tr",null,r.a.createElement("td",{"aria-label":"Team A name"},t.teamA.name),r.a.createElement("td",{"aria-label":"Team A score"},t.teamA.score),r.a.createElement("td",null,r.a.createElement(E.a,{icon:y.b})),r.a.createElement("td",{"aria-label":"Team B score"},t.teamB.score),r.a.createElement("td",{"aria-label":"Team B name"},t.teamB.name)))},v=a(41),S=a.n(v).a.create({baseURL:"https://niks-cors-anywhere.herokuapp.com/https://come-on-you-team.herokuapp.com/api/matches",headers:{Accept:"application/json"}}),T=Object(c.b)("",(function(e){return{handleDelete:function(t){return e(function(e){return function(t){S.delete("".concat(e)).then((function(){t(function(e){return{type:"REMOVE_MATCH",id:e}}(e))}))}}(t))}}}))(j),A=a(42),_=a(43),C=a(49),k=a(48),g=a(44),F=a.n(g),M=function(e){Object(C.a)(a,e);var t=Object(k.a)(a);function a(){return Object(A.a)(this,a),t.apply(this,arguments)}return Object(_.a)(a,[{key:"componentDidMount",value:function(){this.props.loaded||this.props.handleLoad()}},{key:"render",value:function(){var e=this.props,t=e.children;return e.loaded?t:r.a.createElement("div",{className:"loader","aria-label":"Loading..."},r.a.createElement("img",{alt:"Loading",src:F.a}))}}]),a}(n.Component),B=Object(c.b)((function(e){return{loaded:e.matchHistoryLoaded}}),(function(e){return{handleLoad:function(){return e((function(e){S.get("").then((function(t){var a=t.data;e(function(e){return{type:"LOAD_HISTORY",matchHistory:e}}(a.data))}))}))}}}))(M),H=function(e){var t=e.matchHistory;return r.a.createElement("section",{className:"match-hist-section"},r.a.createElement("header",null,r.a.createElement("h3",{className:"match-hist-header"},"Match History")),r.a.createElement(B,null,r.a.createElement("table",{className:"match-hist-table"},r.a.createElement("thead",null),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement(T,{key:t,match:e})}))))))},w=Object(c.b)((function(e){return{matchHistory:e.matchHistory}}))(H),I=function(e){var t=e.players;return r.a.createElement("section",{className:"pitch-section-container"},t.map((function(e,t){return r.a.createElement("h4",{key:t,className:"player-name"},e.name)})))},z=Object(c.b)((function(e,t){var a=t.team,n=t.position;return{players:e[a].players.filter((function(e){return e.position===n}))}}))(I),R=function(){var e=["GK","D","F"];return r.a.createElement("section",{className:"pitch-container-background"},r.a.createElement("div",{className:"pitch-container-inside"},e.map((function(e,t){return r.a.createElement(z,{key:t,team:"teamA",position:e})})),e.reverse().map((function(e,t){return r.a.createElement(z,{key:t,team:"teamB",position:e})}))))},D=function(e){var t=e.team,a=e.score,n=e.handleChange,c=function(e){var r=a+e;r>=0&&n(r,t)};return r.a.createElement("div",{className:"score-display"},r.a.createElement("div",{className:"increment-container"},r.a.createElement("button",{onClick:function(){return c(-1)},className:"btn-increment btn-increment-l"},r.a.createElement(E.a,{icon:y.b})),r.a.createElement("h5",null,a),r.a.createElement("button",{onClick:function(){return c(1)},className:"btn-increment btn-increment-r"},r.a.createElement(E.a,{icon:y.c}))))},L=Object(c.b)((function(e,t){return{score:e[t.team].score}}),(function(e){return{handleChange:function(t,a){return e(function(e,t){return{type:"CHANGE_SCORE",score:+e,team:t}}(t,a))}}}))(D),x=function(){return r.a.createElement("section",{className:"score-section"},r.a.createElement(L,{team:"teamA"}),r.a.createElement(L,{team:"teamB"}))},P=function(e){var t=e.edit,a=e.handleSubmit,c=e.handleClick,l=e.initialTeamA,m=e.initialTeamB,i=Object(n.useState)(l),o=Object(p.a)(i,2),s=o[0],u=o[1],h=Object(n.useState)(m),E=Object(p.a)(h,2),d=E[0],b=E[1];return r.a.createElement("section",{className:"team-info"},t?r.a.createElement("form",{className:"team-entry-form",onSubmit:function(e){e.preventDefault(),a({teamA:s,teamB:d})}},r.a.createElement("section",{className:"form-section"},r.a.createElement("label",{htmlFor:"teamA",className:"team-name-label","aria-label":"Team A name"}),r.a.createElement("input",{type:"text",id:"teamA",className:"name-input",value:s,onChange:function(e){u(e.currentTarget.value)},required:!0})),r.a.createElement("section",{className:"form-section"},r.a.createElement("label",{htmlFor:"teamA",className:"team-name-label","aria-label":"Team B name"}),r.a.createElement("input",{type:"text",id:"teamA",className:"name-input",value:d,onChange:function(e){b(e.currentTarget.value)},required:!0})),r.a.createElement("button",{className:"btn-primary"},"Set")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{onClick:c},s),r.a.createElement("h3",{onClick:c},d)))},G=Object(c.b)((function(e){var t=e.teamSize;return{edit:e.editTeamName&&e.teamA.playersFilled===t&&e.teamB.playersFilled===t,initialTeamA:e.teamA.name,initialTeamB:e.teamB.name}}),(function(e){return{handleSubmit:function(t){return e({type:"SET_TEAM_NAMES",teamA:(a=t).teamA,teamB:a.teamB});var a},handleClick:function(){return e({type:"EDIT_TEAM_NAMES"})}}}))(P),U=function(e){var t=e.handleSubmit,a=e.teamsFilled,c=Object(n.useState)(""),l=Object(p.a)(c,2),m=l[0],i=l[1];return a?null:r.a.createElement("form",{className:"player-entry-form",onSubmit:function(e){e.preventDefault(),t(m),i("")}},r.a.createElement("section",{className:"form-section"},r.a.createElement("label",{htmlFor:"playerName",className:"player-name-label"},"Player Name"),r.a.createElement("input",{type:"text",id:"playerName",className:"name-input",value:m,onChange:function(e){i(e.currentTarget.value)},required:!0})),r.a.createElement("button",{className:"btn-primary"},"Add Player"))},Y=Object(c.b)((function(e){var t=e.teamSize;return{teamsFilled:e.teamA.playersFilled===t&&e.teamB.playersFilled===t}}),(function(e){return{handleSubmit:function(t){return e(function(e){return{type:"ADD_PLAYER",name:e}}(t))}}}))(U),V=function(e){var t=e.initial,a=e.min,c=e.max,l=e.handleSubmit,m=Object(n.useState)(t),i=Object(p.a)(m,2),o=i[0],s=i[1],u=function(e){var t=o+e;t<=c&&t>=a&&s(t)};return r.a.createElement("section",{className:"team-size-section"},r.a.createElement("h5",null,"Team Size"),r.a.createElement("div",{className:"increment-container"},r.a.createElement("button",{onClick:function(){return u(-1)},className:"btn-increment btn-increment-l"},r.a.createElement(E.a,{icon:y.b})),r.a.createElement("h5",null,o)," ",r.a.createElement("button",{onClick:function(){return u(1)},className:"btn-increment btn-increment-r"},r.a.createElement(E.a,{icon:y.c}))),r.a.createElement("button",{className:"btn-primary",onClick:function(){return l(o)}},"Set"))},q=Object(c.b)("",(function(e){return{handleSubmit:function(t){return e({type:"SET_TEAM_SIZE",teamSize:t})}}}))(V),K=function(e){var t=e.teamsFilled,a=e.handleReset,n=e.handleShuffle,c=e.handleComplete;return r.a.createElement("section",{className:"match-options-section"},r.a.createElement("button",{className:"btn-primary",onClick:a},"Start Over"),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn-primary",onClick:c},"Match Complete"),r.a.createElement("button",{className:"btn-primary",onClick:n},"Shuffle Teams")):null)},J=Object(c.b)((function(e){var t=e.teamSize;return{teamsFilled:e.teamA.playersFilled===t&&e.teamB.playersFilled===t}}),(function(e,t){return{handleReset:function(){return e({type:"RESET"})},handleShuffle:function(){return e({type:"SHUFFLE_TEAMS"})},handleComplete:function(){return e((function(e,t){var a=t(),n=a.teamSize,r=a.teamA,c=a.teamB,l={team_size:n,team_a_name:r.name,team_b_name:c.name,team_a_score:r.score,team_b_score:c.score,game_complete:!0};S.post("",l).then((function(t){t.data,e({type:"RESET"})}))}))}}}))(K),W=function(e){var t=e.teamsFilled,a=e.editTeamName;return t&&a?r.a.createElement("h3",{className:"pitch-header"},"Players set, now name your teams!"):t?r.a.createElement("h3",{className:"pitch-header"},"Teams Complete, Game On!"):null},X=Object(c.b)((function(e){var t=e.teamSize,a=e.editTeamName,n=e.teamA,r=e.teamB;return{teamsFilled:n.playersFilled===t&&r.playersFilled===t,editTeamName:a}}))(W),Z=function(e){return 0===e.teamSize?r.a.createElement(q,{initial:5,min:3,max:11}):r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null),r.a.createElement(Y,null),r.a.createElement(G,null),r.a.createElement(x,null),r.a.createElement(R,null),r.a.createElement(J,null))},Q=Object(c.b)((function(e){return{teamSize:e.teamSize}}))(Z);var $=function(){return r.a.createElement("main",{className:"main-app"},r.a.createElement(i.a,null,r.a.createElement(u,null),r.a.createElement(h,null),r.a.createElement(N,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:Q}),r.a.createElement(o.a,{exact:!0,path:"/match-history",component:w}),r.a.createElement(f,null)),r.a.createElement(b,null)))},ee=a(14),te={teamSize:0,editTeamName:!0,showInstructions:!0,teamA:{name:"Team A",playersFilled:0,players:[],score:0},teamB:{name:"Team B",playersFilled:0,players:[],score:0},matchHistory:[],matchHistoryLoaded:!1},ae=a(27),ne=a(18),re=a(1),ce=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},le=function(e){var t=[].concat(Object(ae.a)(e.teamA.players.map((function(e){return e.name}))),Object(ae.a)(e.teamB.players.map((function(e){return e.name})))),a=(t=function(e){for(var t=e.length-1;t>0;t-=1){var a=Math.floor((t+1)*Math.random()),n=e[t];e[t]=e[a],e[a]=n}return e}(t)).slice(0,t.length/2),n=t.slice(t.length/2);return Object(re.a)(Object(re.a)({},e),{},{teamA:Object(re.a)(Object(re.a)({},e.teamA),{},{players:e.teamA.players.map((function(e,t){return Object(re.a)(Object(re.a)({},e),{},{name:a[t]})}))}),teamB:Object(re.a)(Object(re.a)({},e.teamB),{},{players:e.teamB.players.map((function(e,t){return Object(re.a)(Object(re.a)({},e),{},{name:n[t]})}))})})},me=function(e,t){switch(t.type){case"TOGGLE_INSTRUCTIONS":return function(e){return Object(re.a)(Object(re.a)({},e),{},{showInstructions:!e.showInstructions})}(e);case"ADD_PLAYER":return function e(t,a){var n=1===ce(1,2)?"teamA":"teamB",r=ce(0,t.teamSize-1);return""!==t[n].players[r].name?e(t,a):Object(re.a)(Object(re.a)({},t),{},Object(ne.a)({},n,Object(re.a)(Object(re.a)({},t[n]),{},{playersFilled:t[n].playersFilled+1,players:t[n].players.map((function(e,t){return t===r?Object(re.a)(Object(re.a)({},e),{},{name:a.name}):Object(re.a)({},e)}))})))}(e,t);case"SET_TEAM_SIZE":return function(e,t){for(var a=[],n="",r=t.teamSize,c=Math.floor((r-1)/2),l=0;l<r;l+=1)n=0===l?"GK":l>=1&&l<=c?"D":"F",a[l]={name:"",position:n};return Object(re.a)(Object(re.a)({},e),{},{teamSize:t.teamSize,teamA:Object(re.a)(Object(re.a)({},e.teamA),{},{players:a}),teamB:Object(re.a)(Object(re.a)({},e.teamB),{},{players:a})})}(e,t);case"SET_TEAM_NAMES":return function(e,t){return Object(re.a)(Object(re.a)({},e),{},{teamA:Object(re.a)(Object(re.a)({},e.teamA),{},{name:t.teamA}),teamB:Object(re.a)(Object(re.a)({},e.teamB),{},{name:t.teamB}),editTeamName:!1})}(e,t);case"EDIT_TEAM_NAMES":return function(e){return Object(re.a)(Object(re.a)({},e),{},{editTeamName:!0})}(e);case"SHUFFLE_TEAMS":return le(e);case"LOAD_HISTORY":return function(e,t){var a=t.matchHistory;return Object(re.a)(Object(re.a)({},e),{},{matchHistory:a,matchHistoryLoaded:!0})}(e,t);case"REMOVE_MATCH":return function(e,t){var a=t.id;return Object(re.a)(Object(re.a)({},e),{},{matchHistory:e.matchHistory.filter((function(e){return e.id!==a}))})}(e,t);case"CHANGE_SCORE":return function(e,t){var a=t.score,n=t.team;return Object(re.a)(Object(re.a)({},e),{},Object(ne.a)({},n,Object(re.a)(Object(re.a)({},e[n]),{},{score:a})))}(e,t);case"RESET":return function(e){return Object(re.a)(Object(re.a)({},te),{},{showInstructions:e.showInstructions})}(e);default:return e}},ie=a(46),oe=a(47),se=a.n(oe),ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.c,he=Object(ee.d)(me,te,ue(Object(ee.a)(ie.a),se()()));a(82);m.a.render(r.a.createElement(c.a,{store:he},r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null))),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.f681e9c8.chunk.js.map