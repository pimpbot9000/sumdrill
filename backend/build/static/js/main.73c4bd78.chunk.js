(this.webpackJsonpsumdrill=this.webpackJsonpsumdrill||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(10),s=n.n(a),o=(n(43),n(35)),i=n(19),u=n(18),j=(n(44),n(5)),l=n(37),d=n(1),b=c.a.forwardRef((function(e,t){var n=e.onTimeout,a=Object(r.useState)(100),s=Object(j.a)(a,2),o=s[0],i=s[1],u=Object(r.useState)(!0),b=Object(j.a)(u,2),f=b[0],O=b[1],h=function(){i(100),p()};c.a.useImperativeHandle(t,(function(){return{resetTime:h,startGame:v}}));var v=function(){O(!1)},p=function(){O(!0),setTimeout((function(){O(!1)}),1e3)};return Object(r.useEffect)((function(){var e=setTimeout((function(){o<=0?(i(100),n(),p()):f||i(o-1)}),100);return function(){return clearTimeout(e)}})),Object(d.jsx)(l.a,{now:o,label:"".concat(o,"%")})})),f=n(16),O=n(38),h=function(e){var t=e.onStartGame,n=Object(r.useState)(!0),c=Object(j.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(j.a)(o,2),u=i[0],l=i[1];return Object(d.jsxs)(f.a,{show:a,onHide:function(){},children:[Object(d.jsx)(f.a.Header,{children:Object(d.jsx)(f.a.Title,{children:"Are you ready?"})}),Object(d.jsx)(f.a.Body,{children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"formGroupExampleInput",children:"Player's name"}),Object(d.jsx)("input",{onChange:function(e){return l(e.target.value)},value:u,type:"text",className:"form-control",id:"formGroupExampleInput"})]})}),Object(d.jsx)(f.a.Footer,{children:Object(d.jsx)(O.a,{variant:"primary",onClick:function(){s(!1),t(u)},children:"I'm scared ...but I think so"})})]})},v=function(e,t){var n=0;do{n=Math.floor(Math.random()*(t-e+1))+e}while(0===n);return n},p=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}},m=function(e,t){var n="";return t&&(n="\u2800"),e<0?"\u2212"+Math.abs(e)+n:e},x=n(13),S=function(e){var t=new Set;t.add(e),t.add(-e);do{t.add(v(-5,5))}while(t.size<4);var n=Object(x.a)(t);return p(n),n},g=function(e){var t=new Set;t.add(e),t.add(-e);do{t.add(v(-20,21))}while(t.size<4);var n=Object(x.a)(t);return p(n),n},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{numbers:[0,0],operation:"SUM",candidates:[]},t=arguments.length>1?arguments[1]:void 0;if("SET_RANDOM_VALUES"===t.type){var n=[v(t.min,t.max),v(t.min,t.max)],r=0,c=[];return"SUM"===t.operation?(r=n[0]+n[1],c=S(r)):"MULTIPLICATION"===t.operation&&(r=n[0]*n[1],c=g(r)),{numbers:n,operation:t.operation,answer:r,candidates:c}}return e},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CORRECT":return[].concat(Object(x.a)(e),[1]);case"INCORRECT":return[];default:return e}},y=n(9),N=n(11),T=n.n(N),C=n(15),I="http://localhost:8080/api/v1",M=n(52),R="".concat(I,"/scores");console.log(I);var k=function(){var e=Object(C.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.get(R);case 2:return t=e.sent,e.abrupt("return",t.data.map((function(e){return{name:e.name,score:e.score}})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(C.a)(T.a.mark((function e(t){var n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.post(R,t);case 2:return n=e.sent,r=n.data,e.abrupt("return",{name:r.name,score:r.score});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_={getAll:k,createNew:A},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_SCORE":var n=[].concat(Object(x.a)(e.topScores),[t.data]);n.sort((function(e,t){return t.score-e.score}));var r=n[n.length-1].score,c={topScores:n.slice(0,10),lowestScore:r};return c;case"INIT_SCORES":return t.data;default:return e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"SET_NAME"===t.type?t.value:e};var L=function(){var e=Object(y.c)((function(e){return e.results})),t=e.length,n=10*Math.floor(t/10),r=t<5?t:t%10,c=e.slice(0,r).map((function(e,t){return 1===e?Object(d.jsx)("span",{children:"\ud83d\ude03"},t):Object(d.jsx)("span",{children:"\ud83d\ude22"},t)}));return Object(d.jsxs)("div",{className:"Emoji",children:[n>0?Object(d.jsxs)("div",{children:[n,"x\ud83d\ude03"]}):Object(d.jsx)(d.Fragment,{}),Object(d.jsx)("div",{children:c})]})},H=function(){var e=Object(y.c)((function(e){return e.scores}));if(0===Object.keys(e).length)return Object(d.jsx)("div",{children:"Loading..."});var t=e.topScores.map((function(e,t){return Object(d.jsxs)("div",{children:[t+1,". ",e.name,": ",e.score]},t)}));return Object(d.jsxs)("div",{className:"HighScores",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"HIGHSCORES"}),Object(d.jsx)("hr",{})]}),Object(d.jsx)("div",{children:t})]})},F=function(e){var t=e.onSelected,n=Object(y.c)((function(e){return e.task.candidates})),r=n.map((function(e){return Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{onClick:function(){return t(e)},className:"Number",children:[" ",m(e,!0)," "]})},e)})),c=r.slice(0,2),a=r.slice(-2);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.a,{children:c}),Object(d.jsx)(u.a,{children:a})]})},B=function(){for(var e=Object(y.c)((function(e){return e.results})),t=e.length-1,n=0;t>=0&&1===e[t];)n+=1,t-=1;return Object(d.jsxs)("div",{className:"Streak",children:["Win Streak: ",n]})},P=function(){var e=Object(y.c)((function(e){return e.task})),t="SUM"===e.operation?"+":"\xb7",n=e.numbers.map((function(e){return m(e,!1)}));if(e.numbers[1]<0){var r="".concat(n[0]," ").concat(t," (").concat(n[1],") =");return Object(d.jsx)("div",{children:r})}var c="".concat(n[0]," ").concat(t," ").concat(n[1]," =");return Object(d.jsx)("div",{children:c})},W=function(){var e=Object(y.c)((function(e){return e.task})),t=Object(y.c)((function(e){return e.results})),n=Object(y.c)((function(e){return e.scores})),a=Object(y.c)((function(e){return e.player})),s=c.a.createRef(),j=Object(y.b)(),l=function(){var e,t,n,r;j((e=-5,t=5,n=(r=["SUM","MULTIPLICATION"])[Math.floor(Math.random()*r.length)],{type:"SET_RANDOM_VALUES",min:e,max:t,operation:n}))};Object(r.useEffect)((function(){l()}),[]),Object(r.useEffect)((function(){j(function(){var e=Object(C.a)(T.a.mark((function e(t){var n,r,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getAll();case 2:(n=e.sent).sort((function(e,t){return t.score-e.score})),r=n.slice(0,10),c=0===n.length?0:n[r.length-1].score,t({type:"INIT_SCORES",data:{topScores:r,lowestScore:c}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var f=function(e,t){var r,c;0!==t&&((t>=n.lowestScore||n.topScores.length<10)&&j((r=e,c=t,function(){var e=Object(C.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.createNew({name:r,score:c});case 2:n=e.sent,t({type:"NEW_SCORE",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{onStartGame:function(e){j({type:"SET_NAME",value:e}),s.current.startGame()}}),Object(d.jsx)("div",{className:"Container",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(u.a,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)("div",{className:"Blackboard",children:Object(d.jsx)(P,{})})})}),Object(d.jsx)(F,{onSelected:function(n){var r=n===e.answer;s.current.resetTime(),r?j({type:"CORRECT"}):(f(a,t.length),j({type:"INCORRECT"})),l()}}),Object(d.jsx)(B,{results:t}),Object(d.jsx)(b,{ref:s,onTimeout:function(){return f(a,t.length),j({type:"INCORRECT"}),void l()}}),Object(d.jsx)("hr",{}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(i.a,{children:Object(d.jsx)(L,{})}),Object(d.jsx)(i.a,{children:Object(d.jsx)(H,{})})]})]})})]})},z=(n(71),n(23)),D=n(36),J=Object(z.b)({task:w,results:E,scores:U,player:G}),V=Object(z.c)(J,Object(z.a)(D.a));s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(y.a,{store:V,children:Object(d.jsx)(W,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.73c4bd78.chunk.js.map