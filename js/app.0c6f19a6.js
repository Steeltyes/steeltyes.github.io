(function(e){function t(t){for(var r,a,s=t[0],i=t[1],l=t[2],d=0,b=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03a9":function(e,t,n){},"06b3":function(e,t,n){"use strict";n("a691")},"2cf6":function(e,t,n){"use strict";n("87ee")},3073:function(e,t,n){"use strict";n("03a9")},"3c3e":function(e,t,n){},5352:function(e,t,n){"use strict";n("75fe")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c={id:"view"};function o(e,t,n,o,a,s){var i=this,l=Object(r["B"])("modal-basic"),u=Object(r["B"])("loader"),d=Object(r["B"])("router-view");return Object(r["t"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(l,{isVisible:this.$store.state.modalVisible,color:this.$store.state.modalColor,icon:this.$store.state.modalIcon,title:this.$store.state.modalTitle},{default:Object(r["H"])((function(){return[Object(r["h"])(Object(r["D"])(i.$store.state.modalText),1)]})),_:1},8,["isVisible","color","icon","title"]),Object(r["i"])(u,{isVisible:this.$store.state.loaderVisible},null,8,["isVisible"]),Object(r["g"])("div",c,[Object(r["i"])(d)])],64)}var a={created:function(){var e=document.createElement("script");e.setAttribute("type","text/x-mathjax-config"),e.text="MathJax.Hub.Config( {tex2jax: { inlineMath: [['$', '$']] }} )",document.head.appendChild(e),e=document.createElement("script"),e.setAttribute("src","https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=default"),document.head.appendChild(e)}},s=(n("f26a"),n("6b0d")),i=n.n(s);const l=i()(a,[["render",o]]);var u=l,d=n("5502"),b=n("970b"),f=n.n(b),j=n("5bc3"),O=n.n(j),p=function(){function e(t){f()(this,e),this.name=t.name,this.tasks=t.tasks,this.answers=t.answers}return O()(e,[{key:"taskBools",get:function(){var e=this;return this.answers.map((function(t,n){return t.map((function(t,r){return t==e.tasks[n].key[r]}))}))}},{key:"taskRatios",get:function(){return this.taskBools.map((function(e){return e.reduce((function(e,t){return e+t}))/e.length}))}},{key:"taskScores",get:function(){var e=this;return this.taskRatios.map((function(t,n){return Math.round(t*e.tasks[n].weight)}))}},{key:"levelScore",get:function(){return this.answers?this.taskScores.reduce((function(e,t){return e+t})):0}},{key:"levelScoreMax",get:function(){return this.tasks.map((function(e){return e.weight})).reduce((function(e,t){return e+t}))}},{key:"levelRatio",get:function(){return this.answers?this.levelScore/this.levelScoreMax:0}}]),e}(),v=Object(d["a"])({state:function(){return{levels:[],level:[],modules:[],rating:[],loaderVisible:!1,modalVisible:!1,modalColor:void 0,modalIcon:void 0,modalTitle:void 0,modalText:void 0,server_url:"https://skywing.openode.dev"}},mutations:{updateModules:function(e,t){e.modules=t},updateLevels:function(e,t){e.levels=t},updateTasks:function(e,t){e.level=new p(t)},updateTheory:function(e,t){e.level=t},updateRating:function(e,t){e.rating=t},updateAnswers:function(e,t){e.level.answers=t.body},showLoader:function(e,t){e.loaderVisible=!e.loaderVisible},showError:function(e,t){e.modalVisible=!0,e.modalColor="#E74C3C",e.modalIcon="close",e.modalTitle="Помилка",e.modalText=t.text},showSuccess:function(e,t){e.modalVisible=!0,e.modalColor="#2ECC71",e.modalIcon="done",e.modalTitle="Успіх!",e.modalText=t.text},hideModal:function(e){e.modalVisible=!1}},getters:{getLevels:function(e){return e.levels}}}),m=n("c973"),h=n.n(m),g=n("a34a"),k=n.n(g),w={id:"task-title-wrapper"},x=Object(r["h"])("arrow_back"),y={class:"title"},I={id:"task-body-wrapper"},C={id:"task-pagination-wrapper"},_={id:"task-pagination"},S=Object(r["h"])(" З цим завданням впоралося   "),V=Object(r["h"])("   учасників   "),$={id:"task-body"},M={id:"task-text"},T={id:"task-grid-A"},D={key:0,id:"task-items"},B={key:1,id:"task-options"},E={class:"task-option"},z=["src"],H={key:2,id:"task-image"},F=["src"],R={id:"task-grid-B"},L={id:"task-tab"},A=Object(r["h"])("Далі"),J=Object(r["h"])("Перевірити"),q=Object(r["h"])("Результат");function P(e,t,n,c,o,a){var s=this,i=Object(r["B"])("router-link"),l=Object(r["B"])("modal-result"),u=Object(r["B"])("task-pagination-cell"),d=Object(r["B"])("task-table"),b=Object(r["B"])("button-plain");return Object(r["t"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",w,[Object(r["i"])(i,{to:"/",class:"material-icons"},{default:Object(r["H"])((function(){return[x]})),_:1}),Object(r["g"])("span",y,Object(r["D"])(a.level.name),1)]),Object(r["i"])(l,{isVisible:o.modalVisible,"onUpdate:isVisible":t[0]||(t[0]=function(e){return o.modalVisible=e}),ratio:o.levelRatio},null,8,["isVisible","ratio"]),Object(r["g"])("div",I,[Object(r["g"])("div",C,[Object(r["g"])("div",_,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(a.level.tasks.length,(function(e){return Object(r["t"])(),Object(r["d"])(u,{key:e,onTaskGoto:function(t){return a.taskGoto(e-1)},ref_for:!0,ref:"page",ratio:o.taskRatios[e-1]},{default:Object(r["H"])((function(){return[Object(r["h"])(Object(r["D"])(e),1)]})),_:2},1032,["onTaskGoto","ratio"])})),128))]),1==o.levelFinished?(Object(r["t"])(),Object(r["f"])("div",{key:0,id:"task-stats",style:Object(r["p"])("animation: col 1s -".concat(a.task.correct/a.task.total,"s linear forwards paused"))},[S,Object(r["g"])("strong",null,Object(r["D"])(Math.round(a.task.correct/a.task.total*100))+"%",1),V,Object(r["g"])("strong",null,"("+Object(r["D"])(a.task.correct)+" з "+Object(r["D"])(a.task.total)+")",1)],4)):Object(r["e"])("",!0)]),Object(r["g"])("div",$,[Object(r["g"])("div",M,Object(r["D"])(a.task.text),1),Object(r["g"])("div",T,[a.task.items?(Object(r["t"])(),Object(r["f"])("div",D,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(a.task.items,(function(e,t){return Object(r["t"])(),Object(r["f"])("div",{class:"task-option",key:t},Object(r["D"])(1+t)+" "+Object(r["D"])(e),1)})),128))])):Object(r["e"])("",!0),a.task.options?(Object(r["t"])(),Object(r["f"])("div",B,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(a.task.options,(function(e,t){return Object(r["t"])(),Object(r["f"])("div",{key:t},[Object(r["g"])("div",E,Object(r["D"])(String.fromCharCode(1040+t))+" "+Object(r["D"])(e.includes("https://")?"":e),1),e.includes("https://")?(Object(r["t"])(),Object(r["f"])("img",{key:0,src:e},null,8,z)):Object(r["e"])("",!0)])})),128))])):Object(r["e"])("",!0),a.task.image?(Object(r["t"])(),Object(r["f"])("div",H,[Object(r["g"])("img",{src:a.task.image,alt:"loading..."},null,8,F)])):Object(r["e"])("",!0)]),Object(r["g"])("div",R,[Object(r["g"])("div",L,[Object(r["i"])(d,{answer:o.answers[o.taskIndex],isCorrect:a.levelCompleted?o.taskBools[o.taskIndex]:void 0,isInput:void 0!==a.level.tasks[o.taskIndex].options},null,8,["answer","isCorrect","isInput"])]),Object(r["i"])(b,{onClick:t[1]||(t[1]=function(e){return s.$refs.page[Math.min(s.taskIndex+1,s.level.tasks.length-1)].click()}),style:Object(r["p"])("".concat(this.levelCompleted?"background: rgba(0,0,0,.25); box-shadow: 0 0 white":""))},{default:Object(r["H"])((function(){return[A]})),_:1},8,["style"]),a.levelCompleted&&!o.levelFinished?(Object(r["t"])(),Object(r["d"])(b,{key:0,onClick:t[2]||(t[2]=function(e){return a.levelCheck()})},{default:Object(r["H"])((function(){return[J]})),_:1})):Object(r["e"])("",!0),o.levelFinished?(Object(r["t"])(),Object(r["d"])(b,{key:1,onClick:t[3]||(t[3]=function(e){return o.modalVisible=!0})},{default:Object(r["H"])((function(){return[q]})),_:1})):Object(r["e"])("",!0)])])])],64)}var U=n("bc3a"),G=n.n(U),Q={key:0,cellspacing:"5"},K={key:1};function N(e,t,n,c,o,a){var s=Object(r["B"])("task-table-cell"),i=Object(r["B"])("task-table-input");return Object(r["t"])(),Object(r["f"])(r["a"],null,[n.isInput?(Object(r["t"])(),Object(r["f"])("table",Q,[Object(r["g"])("tr",null,[(Object(r["t"])(),Object(r["f"])(r["a"],null,Object(r["z"])(5,(function(e){return Object(r["g"])("th",{key:e},Object(r["D"])(String.fromCharCode(1039+e)),1)})),64))]),(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(n.answer.length,(function(e){return Object(r["t"])(),Object(r["f"])("tr",{key:e},[(Object(r["t"])(),Object(r["f"])(r["a"],null,Object(r["z"])(5,(function(t){return Object(r["g"])("td",{key:t},[Object(r["i"])(s,{rowIndex:e-1,cellIndex:t-1,isCorrect:void 0==n.isCorrect?void 0:n.isCorrect[e-1],modelValue:n.answer[e-1],"onUpdate:modelValue":function(t){return n.answer[e-1]=t}},null,8,["rowIndex","cellIndex","isCorrect","modelValue","onUpdate:modelValue"])])})),64))])})),128))])):Object(r["e"])("",!0),n.isInput?Object(r["e"])("",!0):(Object(r["t"])(),Object(r["f"])("div",K,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(n.answer.length,(function(e){return Object(r["t"])(),Object(r["d"])(i,{key:e,isCorrect:void 0==n.isCorrect?void 0:n.isCorrect[e-1],modelValue:n.answer[e-1],"onUpdate:modelValue":function(t){return n.answer[e-1]=t}},null,8,["isCorrect","modelValue","onUpdate:modelValue"])})),128))]))],64)}var W=["name","value","checked","disabled"];function X(e,t,n,c,o,a){return Object(r["t"])(),Object(r["f"])("input",{type:"radio",name:n.rowIndex,value:String.fromCharCode(1040+n.cellIndex),class:Object(r["o"])(void 0==n.isCorrect?"undefined":1==n.isCorrect?"correct":"incorrect"),checked:n.modelValue==String.fromCharCode(1040+n.cellIndex),disabled:void 0==n.isCorrect?0:1,onChange:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,42,W)}var Y={props:["rowIndex","cellIndex","isCorrect","modelValue"]};n("3073");const Z=i()(Y,[["render",X],["__scopeId","data-v-47e43a4a"]]);var ee=Z,te=["value","disabled"];function ne(e,t,n,c,o,a){return Object(r["t"])(),Object(r["f"])("input",{type:"text",value:n.modelValue,disabled:void 0==n.isCorrect?0:1,onChange:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),class:Object(r["o"])(void 0==n.isCorrect?"undefined":1==n.isCorrect?"correct":"incorrect")},null,42,te)}var re={props:["isCorrect","modelValue"]};n("c679");const ce=i()(re,[["render",ne],["__scopeId","data-v-7153282f"]]);var oe=ce,ae={components:{taskTableCell:ee,taskTableInput:oe},props:["answer","isCorrect","isInput"]};const se=i()(ae,[["render",N]]);var ie=se,le={class:"wrapper"},ue={class:"input-counter"};function de(e,t,n,c,o,a){return Object(r["t"])(),Object(r["f"])("div",le,[Object(r["g"])("input",{type:"radio",ref:"input",name:"pagination-panel",onClick:t[0]||(t[0]=function(t){return e.$emit("taskGoto")}),class:Object(r["o"])(void 0==n.ratio?"undefined":1==n.ratio?"correct":"incorrect")},null,2),Object(r["g"])("span",ue,[Object(r["A"])(e.$slots,"default",{},void 0,!0)])])}var be={props:["ratio"],methods:{click:function(){this.$refs.input.click()}}};n("c027");const fe=i()(be,[["render",de],["__scopeId","data-v-0718732a"]]);var je=fe,Oe={components:{taskTable:ie,taskPaginationCell:je},data:function(){return{answers:[],taskIndex:0,taskRatios:[],taskBools:[void 0],levelRatio:void 0,levelFinished:!1,modalVisible:!1}},beforeMount:function(){this.$nextTick((function(e){return MathJax.Hub.Queue(["Typeset",MathJax.Hub])})),void 0==this.level.answers?this.answers=this.level.tasks.map((function(e){return Array.from(e.key).fill(void 0)})):(this.answers=this.level.answers,this.levelFinish())},mounted:function(){this.$refs.page[0].click()},computed:{levelCompleted:function(){return!this.answers.flat().includes(void 0)},level:function(){return this.$store.state.level},task:function(){return this.$store.state.level.tasks[this.taskIndex]}},methods:{taskGoto:function(e){this.taskIndex=e,this.$nextTick((function(e){return MathJax.Hub.Queue(["Typeset",MathJax.Hub])}))},levelCheck:function(){var e=this;return h()(k.a.mark((function t(){return k.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("updateAnswers",{index:e.$store.state.levelIndex,body:e.answers}),t.next=3,G.a.post("".concat(e.$store.state.server_url,"/publish-answer"),{username:localStorage.login,module:e.$store.state.modules[localStorage.currentModuleIndex],index:localStorage.currentLevelIndex,answers:e.answers,ratios:e.level.taskRatios,score:e.level.levelScore,maxscore:e.level.levelScoreMax});case 3:return t.next=5,G.a.post("".concat(e.$store.state.server_url,"/publish-score"),{username:localStorage.login,score:e.level.levelScore});case 5:e.modalVisible=!0,e.levelFinish();case 7:case"end":return t.stop()}}),t)})))()},levelFinish:function(){this.levelFinished=!0,this.taskBools=this.level.taskBools,this.taskRatios=this.level.taskRatios,this.levelRatio=this.level.levelRatio}}};n("06b3");const pe=i()(Oe,[["render",P],["__scopeId","data-v-2eac3fe4"]]);var ve=pe,me={class:"title-wrapper"},he={class:"title"},ge={class:"material-icons"},ke={class:"level-block-body"},we={class:"level-name"};function xe(e,t,n,c,o,a){var s=Object(r["B"])("side-menu"),i=Object(r["B"])("progress-bar"),l=Object(r["B"])("router-link");return Object(r["t"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",me,[Object(r["i"])(s),Object(r["g"])("div",he,Object(r["D"])(a.modules),1)]),(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(a.levels.length,(function(e){return Object(r["t"])(),Object(r["d"])(l,{to:"quiz"==a.levels[e-1].type?"/quiz":"/theory",key:e,class:Object(r["o"])((a.levelIsOpened(e-1),"level-block")),onClick:function(t){return a.setCurrentLevelIndex(a.levels[e-1].index)}},{default:Object(r["H"])((function(){return[Object(r["g"])("span",ge,Object(r["D"])(a.levelIsOpened(e-1)?"quiz"==a.levels[e-1].type?"widgets":"visibility":"lock"),1),Object(r["g"])("span",ke,[Object(r["g"])("div",we,Object(r["D"])("theory"==a.levels[e-1].type?"Конспект: ":"")+" "+Object(r["D"])(a.levels[e-1].name),1),Object(r["g"])("div",{class:"level-score",style:Object(r["p"])(a.levels[e-1].score?"color: gray":"color: lightgray")},Object(r["D"])(a.levels[e-1].score?"quiz"==a.levels[e-1].type?"".concat(a.levels[e-1].score," / ").concat(a.levels[e-1].maxscore," балів"):"Переглянуто":"Не розпочато"),5)]),Object(r["g"])("div",{class:"progress-bar-wrapper",style:Object(r["p"])(a.levels[e-1].score?"theory"==a.levels[e-1].type?"background: #5F9EA0":"animation: col 1s -".concat(a.levels[e-1].score/a.levels[e-1].maxscore,"s linear forwards paused"):"background: lightgray")},[Object(r["i"])(i,{ratio:a.levels[e-1].score/a.levels[e-1].maxscore,isTicked:"quiz"==a.levels[e-1].type},null,8,["ratio","isTicked"])],4)]})),_:2},1032,["to","class","onClick"])})),128))],64)}var ye=function(e){return Object(r["w"])("data-v-4eae7dcf"),e=e(),Object(r["u"])(),e},Ie={type:"checkbox",id:"side-menu-checkbox",ref:"checkbox"},Ce=ye((function(){return Object(r["g"])("label",{for:"side-menu-checkbox"},[Object(r["g"])("div",{class:"material-icons",id:"side-menu-icon"},"menu")],-1)})),_e={class:"side-menu"},Se={class:"side-menu-modules"},Ve=ye((function(){return Object(r["g"])("div",{class:"side-menu-header"},"МОЇ МОДУЛІ",-1)})),$e=["onClick"],Me={class:"side-menu-other"},Te=ye((function(){return Object(r["g"])("div",{class:"side-menu-header"},"ІНШЕ",-1)})),De=Object(r["h"])("Рейтинг"),Be=Object(r["h"])("Налаштування");function Ee(e,t,n,c,o,a){var s=Object(r["B"])("router-link");return Object(r["t"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("input",Ie,null,512),Ce,Object(r["g"])("div",{class:"underlay",onClick:t[0]||(t[0]=function(t){return e.$refs.checkbox.click()})}),Object(r["g"])("div",_e,[Object(r["g"])("div",Se,[Ve,(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(a.modules.length,(function(e){return Object(r["t"])(),Object(r["f"])("div",{class:"side-menu-entry",key:e,onClick:function(t){return a.gotoModule(e-1)}},"Математика – "+Object(r["D"])(a.modules[e-1]),9,$e)})),128))]),Object(r["g"])("div",Me,[Te,Object(r["i"])(s,{to:"/rating",class:"side-menu-entry"},{default:Object(r["H"])((function(){return[De]})),_:1}),Object(r["i"])(s,{to:"/settings",class:"side-menu-entry"},{default:Object(r["H"])((function(){return[Be]})),_:1})])])],64)}var ze={computed:{modules:function(){return this.$store.state.modules}},methods:{gotoModule:function(e){localStorage.setItem("currentModuleIndex",e),window.location.reload()}}};n("c71b");const He=i()(ze,[["render",Ee],["__scopeId","data-v-4eae7dcf"]]);var Fe=He,Re={components:{sideMenu:Fe},computed:{levels:function(){return this.$store.state.levels},modules:function(){return this.$store.state.modules[localStorage.currentModuleIndex]}},methods:{setCurrentLevelIndex:function(e){localStorage.setItem("currentLevelIndex",e)},levelIsOpened:function(e){return!e||!!this.levels[e-1].score}}};n("cfa2");const Le=i()(Re,[["render",xe],["__scopeId","data-v-d62a4414"]]);var Ae=Le,Je=function(e){return Object(r["w"])("data-v-6e34680f"),e=e(),Object(r["u"])(),e},qe={class:"form-wrapper"},Pe=Je((function(){return Object(r["g"])("div",{class:"form-header"},"Авторизація",-1)})),Ue=Je((function(){return Object(r["g"])("button",{type:"submit",class:"button-plain"},"Увійти",-1)}));function Ge(e,t,n,c,o,a){return Object(r["t"])(),Object(r["f"])("div",qe,[Object(r["g"])("form",{onSubmit:t[2]||(t[2]=Object(r["J"])((function(e){return a.signIn()}),["prevent"]))},[Pe,Object(r["I"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.login=e}),placeholder:"Логін",required:""},null,512),[[r["F"],o.login]]),Object(r["I"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.password=e}),placeholder:"Пароль",required:""},null,512),[[r["F"],o.password]]),Ue],32)])}var Qe={data:function(){return{login:void 0,password:void 0}},methods:{signIn:function(){var e=this;return h()(k.a.mark((function t(){return k.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,G.a.post(e.$store.state.server_url+"/sign-in",{login:e.login,password:e.password}).then((function(t){e.$store.commit("showSuccess",{text:t.data.message}),localStorage.setItem("isAuthorized",1),localStorage.setItem("login",e.login),localStorage.setItem("currentModuleIndex",0),$t.push({path:"/"})})).catch((function(t){t.response&&e.$store.commit("showError",{text:t.response.data.message})}));case 2:case"end":return t.stop()}}),t)})))()}}};n("c94f");const Ke=i()(Qe,[["render",Ge],["__scopeId","data-v-6e34680f"]]);var Ne=Ke,We=function(e){return Object(r["w"])("data-v-61130461"),e=e(),Object(r["u"])(),e},Xe={class:"form-wrapper"},Ye=We((function(){return Object(r["g"])("div",{class:"form-header"},"Зміна паролю",-1)})),Ze=We((function(){return Object(r["g"])("button",{type:"submit",class:"button-plain"},"Змінити",-1)})),et=Object(r["h"])("Повернутися");function tt(e,t,n,c,o,a){var s=Object(r["B"])("router-link");return Object(r["t"])(),Object(r["f"])("div",Xe,[Object(r["g"])("form",{onSubmit:t[2]||(t[2]=Object(r["J"])((function(e){return a.resetPassword()}),["prevent"]))},[Ye,Object(r["I"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.password=e}),placeholder:"Старий пароль",required:""},null,512),[[r["F"],o.password]]),Object(r["I"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.newpassword=e}),placeholder:"Новий пароль",required:""},null,512),[[r["F"],o.newpassword]]),Ze,Object(r["i"])(s,{to:"/",class:"form-back"},{default:Object(r["H"])((function(){return[et]})),_:1})],32)])}var nt={data:function(){return{password:void 0,newpassword:void 0}},methods:{resetPassword:function(){var e=this;return h()(k.a.mark((function t(){return k.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,G.a.post(e.$store.state.server_url+"/reset-password",{login:localStorage.login,password:e.password,newpassword:e.newpassword}).then((function(t){e.$store.commit("showSuccess",{text:t.data.message})})).catch((function(t){t.response&&e.$store.commit("showError",{text:t.response.data.message})}));case 2:case"end":return t.stop()}}),t)})))()}}};n("6ebd");const rt=i()(nt,[["render",tt],["__scopeId","data-v-61130461"]]);var ct=rt,ot=function(e){return Object(r["w"])("data-v-e2af1ec4"),e=e(),Object(r["u"])(),e},at={id:"title-wrapper"},st=Object(r["h"])("arrow_back"),it=ot((function(){return Object(r["g"])("span",{class:"title"},"Рейтинг",-1)})),lt={class:"member-name"},ut={class:"member-score"};function dt(e,t,n,c,o,a){var s=Object(r["B"])("router-link");return Object(r["t"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",at,[Object(r["i"])(s,{to:"/",class:"material-icons"},{default:Object(r["H"])((function(){return[st]})),_:1}),it]),(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(a.rating.length,(function(e){return Object(r["t"])(),Object(r["f"])("div",{class:"rating-entry",key:e},[Object(r["g"])("span",{class:"member-icon material-icons",style:Object(r["p"])("animation: textcol 1s -".concat(a.rating[e-1].score/a.rating[0].score,"s linear forwards paused"))},"person",4),Object(r["g"])("span",lt,[Object(r["g"])("strong",null,Object(r["D"])(e),1),Object(r["h"])("   "+Object(r["D"])(a.rating[e-1].username),1)]),Object(r["g"])("span",ut,[Object(r["g"])("strong",null,Object(r["D"])(a.rating[e-1].score)+" балів",1)])])})),128))],64)}var bt={computed:{rating:function(){return this.$store.state.rating}}};n("2cf6");const ft=i()(bt,[["render",dt],["__scopeId","data-v-e2af1ec4"]]);var jt=ft,Ot={class:"title-wrapper"},pt=Object(r["h"])("arrow_back"),vt={class:"title"},mt={class:"theory-header-wrapper"},ht={class:"theory-header"},gt={class:"theory-body-wrapper"},kt={class:"theory-def"},wt={key:0};function xt(e,t,n,c,o,a){var s=Object(r["B"])("router-link");return Object(r["t"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",Ot,[Object(r["i"])(s,{to:"/",class:"material-icons"},{default:Object(r["H"])((function(){return[pt]})),_:1}),Object(r["g"])("span",vt,Object(r["D"])(a.level.name),1)]),Object(r["g"])("div",null,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(a.level.entries.length,(function(e){return Object(r["t"])(),Object(r["f"])("div",{key:e,class:"theory-card"},[Object(r["g"])("div",mt,[Object(r["g"])("span",ht,Object(r["D"])(a.level.entries[e-1].header),1)]),Object(r["g"])("div",gt,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(a.level.entries[e-1].def.length,(function(t){return Object(r["t"])(),Object(r["f"])("div",{key:t},[Object(r["g"])("div",kt,[Object(r["g"])("div",null,Object(r["D"])(a.level.entries[e-1].def[t-1]),1),Object(r["g"])("div",null,Object(r["D"])(a.level.entries[e-1].formula[t-1]),1)]),t!=a.level.entries[e-1].def.length?(Object(r["t"])(),Object(r["f"])("hr",wt)):Object(r["e"])("",!0)])})),128))])])})),128))])],64)}var yt={beforeMount:function(){this.$nextTick((function(e){return MathJax.Hub.Queue(["Typeset",MathJax.Hub])})),void 0==this.level.score&&this.levelFinish()},computed:{level:function(){return this.$store.state.level}},methods:{levelFinish:function(){var e=this;return h()(k.a.mark((function t(){return k.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,G.a.post("".concat(e.$store.state.server_url,"/publish-answer"),{username:localStorage.login,module:e.$store.state.modules[localStorage.currentModuleIndex],index:localStorage.currentLevelIndex,score:10,maxscore:10});case 2:return t.next=4,G.a.post("".concat(e.$store.state.server_url,"/publish-score"),{username:localStorage.login,score:10});case 4:case"end":return t.stop()}}),t)})))()}}};n("838c");const It=i()(yt,[["render",xt],["__scopeId","data-v-7315de6e"]]);var Ct=It,_t=n("6c02"),St=[{path:"/",component:Ae,beforeEnter:function(){var e=h()(k.a.mark((function e(t,n,r){return k.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G.a.get(v.state.server_url+"/get-modules:"+localStorage.getItem("login")).then((function(e){return v.commit("updateModules",e.data)})).catch((function(e){return v.commit("showError",{text:"Недійсна відповідь сервера"})}));case 2:return e.next=4,G.a.get("".concat(v.state.server_url,"/modules/:").concat(localStorage.login,"/:").concat(v.state.modules[localStorage.currentModuleIndex])).then((function(e){v.commit("updateLevels",e.data),r()})).catch((function(e){return v.commit("showError",{text:"Недійсна відповідь сервера"})}));case 4:case"end":return e.stop()}}),e)})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{path:"/quiz",component:ve,beforeEnter:function(){var e=h()(k.a.mark((function e(t,n,r){return k.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G.a.get(v.state.server_url+"/get-modules:"+localStorage.getItem("login")).then((function(e){return v.commit("updateModules",e.data)})).catch((function(e){return v.commit("showError",{text:"Недійсна відповідь сервера"})}));case 2:return e.next=4,G.a.get("".concat(v.state.server_url,"/modules/:").concat(localStorage.login,"/:").concat(v.state.modules[localStorage.currentModuleIndex],"/:").concat(localStorage.currentLevelIndex)).then((function(e){v.commit("updateTasks",e.data),r()})).catch((function(e){return v.commit("showError",{text:"Недійсна відповідь сервера"})}));case 4:case"end":return e.stop()}}),e)})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{path:"/theory",component:Ct,beforeEnter:function(){var e=h()(k.a.mark((function e(t,n,r){return k.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G.a.get(v.state.server_url+"/get-modules:"+localStorage.getItem("login")).then((function(e){return v.commit("updateModules",e.data)})).catch((function(e){return v.commit("showError",{text:"Недійсна відповідь сервера"})}));case 2:return e.next=4,G.a.get("".concat(v.state.server_url,"/modules/:").concat(localStorage.login,"/:").concat(v.state.modules[localStorage.currentModuleIndex],"/:").concat(localStorage.currentLevelIndex)).then((function(e){v.commit("updateTheory",e.data),r()})).catch((function(e){return v.commit("showError",{text:"Недійсна відповідь сервера"})}));case 4:case"end":return e.stop()}}),e)})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{path:"/rating",component:jt,beforeEnter:function(){var e=h()(k.a.mark((function e(t,n,r){return k.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("".concat(v.state.server_url,"/get-rating")).then((function(e){v.commit("updateRating",e.data),r()})).catch((function(e){return v.commit("showError",{text:"Недійсна відповідь сервера"})}));case 2:case"end":return e.stop()}}),e)})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{path:"/auth",name:"auth",component:Ne},{path:"/settings",component:ct}],Vt=Object(_t["a"])({routes:St,history:Object(_t["b"])()});Vt.beforeEach((function(e,t,n){v.commit("showLoader"),window.localStorage.isAuthorized||"auth"===e.name?n():Vt.push("/auth").catch((function(){}))})),Vt.afterEach((function(e,t,n){v.commit("showLoader")}));var $t=Vt,Mt={class:"button-plain"};function Tt(e,t,n,c,o,a){return Object(r["t"])(),Object(r["f"])("div",Mt,[Object(r["A"])(e.$slots,"default")])}var Dt={name:"button-plain"};n("8e58");const Bt=i()(Dt,[["render",Tt]]);var Et=Bt,zt={key:0,class:"modal-underlay"},Ht={class:"modal-window"},Ft={class:"material-icons modal-icon"},Rt={class:"modal-title-text"},Lt={class:"modal-body"},At={class:"modal-content"},Jt=["color"];function qt(e,t,n,c,o,a){return n.isVisible?(Object(r["t"])(),Object(r["f"])("div",zt,[Object(r["g"])("div",Ht,[Object(r["g"])("div",{class:"modal-title",style:Object(r["p"])("background: ".concat(n.color))},[Object(r["g"])("div",Ft,Object(r["D"])(n.icon),1),Object(r["g"])("div",Rt,Object(r["D"])(n.title),1)],4),Object(r["g"])("div",Lt,[Object(r["g"])("div",At,[Object(r["A"])(e.$slots,"default")]),Object(r["g"])("div",{class:"modal-button",onClick:t[0]||(t[0]=function(t){return e.$store.commit("hideModal")}),color:n.color},"ЗАКРИТИ",8,Jt)])])])):Object(r["e"])("",!0)}var Pt={name:"modal-basic",props:["isVisible","title","text","color","icon"]};n("5352");const Ut=i()(Pt,[["render",qt]]);var Gt=Ut,Qt={key:0,class:"modal-underlay"},Kt={class:"modal-window"},Nt={class:"modal-body"};function Wt(e,t,n,c,o,a){var s=Object(r["B"])("progress-bar");return n.isVisible?(Object(r["t"])(),Object(r["f"])("div",Qt,[Object(r["g"])("div",Kt,[Object(r["g"])("div",{class:"modal-title",style:Object(r["p"])("animation: col 2s linear forwards ".concat(n.ratio))},[Object(r["i"])(s,{ratio:n.ratio,isTicked:"0"},null,8,["ratio"])],4),Object(r["g"])("div",Nt,[Object(r["g"])("div",{class:"modal-button",onClick:t[0]||(t[0]=function(t){return e.$emit("update:isVisible",!1)})},"Закрити")])])])):Object(r["e"])("",!0)}var Xt={name:"modal-result",props:["isVisible","ratio"]};const Yt=i()(Xt,[["render",Wt]]);var Zt=Yt,en=function(e){return Object(r["w"])("data-v-582e5e0a"),e=e(),Object(r["u"])(),e},tn={id:"wrapper"},nn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 120 120"},rn=en((function(){return Object(r["g"])("circle",{class:"circle1",r:"50",cx:"60",cy:"60"},null,-1)})),cn=["stroke-dasharray"],on={key:1,class:"material-icons"};function an(e,t,n,c,o,a){return Object(r["t"])(),Object(r["f"])("div",tn,[(Object(r["t"])(),Object(r["f"])("svg",nn,[rn,Object(r["g"])("circle",{class:"circle2",r:"50",cx:"60",cy:"60","stroke-dasharray":314*n.ratio+" 314",ref:"circ",style:Object(r["p"])("--len: ".concat(314*n.ratio))},null,12,cn)])),n.isTicked?(Object(r["t"])(),Object(r["f"])("span",{key:0,class:"counter",style:Object(r["p"])("--perc: ".concat(Math.floor(100*n.ratio)))},null,4)):(Object(r["t"])(),Object(r["f"])("span",on,Object(r["D"])(n.ratio>0?"done":"close"),1))])}var sn={name:"progress-bar",props:["isTicked","ratio"]};n("5a61");const ln=i()(sn,[["render",an],["__scopeId","data-v-582e5e0a"]]);var un=ln,dn=function(e){return Object(r["w"])("data-v-4dcf1c53"),e=e(),Object(r["u"])(),e},bn={key:0,class:"modal-underlay"},fn=dn((function(){return Object(r["g"])("div",{class:"loader"},"Зачекайте...",-1)})),jn=[fn];function On(e,t,n,c,o,a){return n.isVisible?(Object(r["t"])(),Object(r["f"])("div",bn,jn)):Object(r["e"])("",!0)}var pn={name:"loader",props:["isVisible"]};n("ad25");const vn=i()(pn,[["render",On],["__scopeId","data-v-4dcf1c53"]]);var mn=vn,hn=[Et,Gt,Zt,un,mn],gn=(n("d1e7"),Object(r["c"])(u));hn.forEach((function(e){return gn.component(e.name,e)})),gn.use(v).use($t).mount("#app")},"5a61":function(e,t,n){"use strict";n("d7d1")},"6ebd":function(e,t,n){"use strict";n("a46b")},7133:function(e,t,n){},"75fe":function(e,t,n){},"7d37":function(e,t,n){},"838c":function(e,t,n){"use strict";n("e495")},"85b9":function(e,t,n){},"87ee":function(e,t,n){},"8e58":function(e,t,n){"use strict";n("9dfd")},"9dfd":function(e,t,n){},a46b:function(e,t,n){},a691:function(e,t,n){},ad25:function(e,t,n){"use strict";n("7d37")},c027:function(e,t,n){"use strict";n("f668")},c679:function(e,t,n){"use strict";n("85b9")},c6f3:function(e,t,n){},c71b:function(e,t,n){"use strict";n("c6f3")},c94f:function(e,t,n){"use strict";n("3c3e")},cfa2:function(e,t,n){"use strict";n("d61c")},d61c:function(e,t,n){},d7d1:function(e,t,n){},e495:function(e,t,n){},f26a:function(e,t,n){"use strict";n("7133")},f668:function(e,t,n){}});
//# sourceMappingURL=app.0c6f19a6.js.map