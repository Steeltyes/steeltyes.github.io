(function(e){function t(t){for(var c,a,s=t[0],i=t[1],l=t[2],d=0,b=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03a9":function(e,t,n){},2433:function(e,t,n){"use strict";n("c18a")},2623:function(e,t,n){},"2cf6":function(e,t,n){"use strict";n("87ee")},3073:function(e,t,n){"use strict";n("03a9")},"34a3":function(e,t,n){},"36c7":function(e,t,n){},"3c3e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r={id:"view"};function o(e,t,n,o,a,s){var i=this,l=Object(c["B"])("modal-basic"),u=Object(c["B"])("loader"),d=Object(c["B"])("router-view");return Object(c["t"])(),Object(c["f"])(c["a"],null,[Object(c["i"])(l,{isVisible:this.$store.state.modalVisible,color:this.$store.state.modalColor,icon:this.$store.state.modalIcon,title:this.$store.state.modalTitle},{default:Object(c["H"])((function(){return[Object(c["h"])(Object(c["D"])(i.$store.state.modalText),1)]})),_:1},8,["isVisible","color","icon","title"]),Object(c["i"])(u,{isVisible:this.$store.state.loaderVisible},null,8,["isVisible"]),Object(c["g"])("div",r,[Object(c["i"])(d)])],64)}var a={created:function(){var e=document.createElement("script");e.setAttribute("type","text/x-mathjax-config"),e.text="MathJax.Hub.Config( {tex2jax: { inlineMath: [['$', '$']] }} )",document.head.appendChild(e),e=document.createElement("script"),e.setAttribute("src","https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=default"),document.head.appendChild(e)}},s=(n("5d6c"),n("6b0d")),i=n.n(s);const l=i()(a,[["render",o]]);var u=l,d=n("5502"),b=n("970b"),f=n.n(b),j=n("5bc3"),O=n.n(j),p=function(){function e(t){f()(this,e),this.name=t.name,this.tasks=t.tasks,this.answers=t.answers,this.total=t.total,this.avg=t.avg}return O()(e,[{key:"taskBools",get:function(){var e=this;return this.answers.map((function(t,n){return t.map((function(t,c){return t==e.tasks[n].key[c]}))}))}},{key:"taskRatios",get:function(){return this.taskBools.map((function(e){return e.reduce((function(e,t){return e+t}))/e.length}))}},{key:"taskScores",get:function(){var e=this;return this.taskRatios.map((function(t,n){return Math.round(t*e.tasks[n].weight)}))}},{key:"levelScore",get:function(){return this.answers?this.taskScores.reduce((function(e,t){return e+t})):0}},{key:"levelScoreMax",get:function(){return this.tasks.map((function(e){return e.weight})).reduce((function(e,t){return e+t}))}},{key:"levelRatio",get:function(){return this.answers?this.levelScore/this.levelScoreMax:0}}]),e}(),v=Object(d["a"])({state:function(){return{levels:[],level:[],modules:[],rating:[],loaderVisible:!1,modalVisible:!1,modalColor:void 0,modalIcon:void 0,modalTitle:void 0,modalText:void 0,server_url:"https://skywing.openode.dev"}},mutations:{updateModules:function(e,t){e.modules=t},updateLevels:function(e,t){e.levels=t},updateTasks:function(e,t){e.level=new p(t)},updateTheory:function(e,t){e.level=t},updateRating:function(e,t){e.rating=t},updateAnswers:function(e,t){e.level.answers=t.body},hideLoader:function(e){e.loaderVisible=!1},showLoader:function(e){e.loaderVisible=!0},showError:function(e,t){e.modalVisible=!0,e.modalColor="#E74C3C",e.modalIcon="close",e.modalTitle="Помилка",e.modalText=t.text},showSuccess:function(e,t){e.modalVisible=!0,e.modalColor="#2ECC71",e.modalIcon="done",e.modalTitle="Успіх!",e.modalText=t.text},hideModal:function(e){e.modalVisible=!1}},getters:{getLevels:function(e){return e.levels}}}),m=n("c973"),h=n.n(m),g=n("a34a"),k=n.n(g),w={id:"task-title-wrapper"},x=Object(c["h"])("arrow_back"),y={class:"title"},I={id:"task-body-wrapper"},_={id:"task-pagination-wrapper"},C={id:"task-pagination"},S=Object(c["h"])(" З цим завданням впоралося  "),V=Object(c["h"])("  учасників  "),$={id:"task-body"},M={id:"task-text"},D={id:"task-grid-A"},T={key:0,id:"task-items"},B={key:1,id:"task-options"},E={class:"task-option"},z=["src"],H={key:2,id:"task-image"},F=["src"],R={id:"task-grid-B"},L={id:"task-tab"},A=Object(c["h"])("Далі"),J=Object(c["h"])("Перевірити"),P=Object(c["h"])("Результат");function q(e,t,n,r,o,a){var s=this,i=Object(c["B"])("router-link"),l=Object(c["B"])("modal-result"),u=Object(c["B"])("task-pagination-cell"),d=Object(c["B"])("task-table"),b=Object(c["B"])("button-plain");return Object(c["t"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("div",w,[Object(c["i"])(i,{to:"/",class:"material-icons"},{default:Object(c["H"])((function(){return[x]})),_:1}),Object(c["g"])("span",y,Object(c["D"])(a.level.name),1)]),Object(c["i"])(l,{isVisible:o.modalVisible,"onUpdate:isVisible":t[0]||(t[0]=function(e){return o.modalVisible=e}),ratio:o.levelRatio},null,8,["isVisible","ratio"]),Object(c["g"])("div",I,[Object(c["g"])("div",_,[Object(c["g"])("div",C,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(a.level.tasks.length,(function(e){return Object(c["t"])(),Object(c["d"])(u,{key:e,onTaskGoto:function(t){return a.taskGoto(e-1)},ref_for:!0,ref:"page",ratio:o.taskRatios[e-1]},{default:Object(c["H"])((function(){return[Object(c["h"])(Object(c["D"])(e),1)]})),_:2},1032,["onTaskGoto","ratio"])})),128))]),1==o.levelFinished?(Object(c["t"])(),Object(c["f"])("div",{key:0,id:"task-stats",style:Object(c["p"])("animation: col 1s -".concat(a.task.correct/a.level.total,"s linear forwards paused"))},[S,Object(c["g"])("strong",null,Object(c["D"])(Math.round(a.task.correct/a.level.total*100))+"%",1),V,Object(c["g"])("strong",null,"("+Object(c["D"])(a.task.correct)+" з "+Object(c["D"])(a.level.total)+")",1)],4)):Object(c["e"])("",!0)]),Object(c["g"])("div",$,[Object(c["g"])("div",M,Object(c["D"])(a.task.text),1),Object(c["g"])("div",D,[a.task.items?(Object(c["t"])(),Object(c["f"])("div",T,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(a.task.items,(function(e,t){return Object(c["t"])(),Object(c["f"])("div",{class:"task-option",key:t},Object(c["D"])(1+t)+" "+Object(c["D"])(e),1)})),128))])):Object(c["e"])("",!0),a.task.options?(Object(c["t"])(),Object(c["f"])("div",B,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(a.task.options,(function(e,t){return Object(c["t"])(),Object(c["f"])("div",{key:t},[Object(c["g"])("div",E,Object(c["D"])(String.fromCharCode(1040+t))+" "+Object(c["D"])(e.includes("https://")?"":e),1),e.includes("https://")?(Object(c["t"])(),Object(c["f"])("img",{key:0,src:e},null,8,z)):Object(c["e"])("",!0)])})),128))])):Object(c["e"])("",!0),a.task.image?(Object(c["t"])(),Object(c["f"])("div",H,[Object(c["g"])("img",{src:a.task.image,alt:"loading..."},null,8,F)])):Object(c["e"])("",!0)]),Object(c["g"])("div",R,[Object(c["g"])("div",L,[Object(c["i"])(d,{answer:o.answers[o.taskIndex],isCorrect:a.levelCompleted?o.taskBools[o.taskIndex]:void 0,isInput:void 0!==a.level.tasks[o.taskIndex].options},null,8,["answer","isCorrect","isInput"])]),Object(c["i"])(b,{onClick:t[1]||(t[1]=function(e){return s.$refs.page[Math.min(s.taskIndex+1,s.level.tasks.length-1)].click()}),style:Object(c["p"])("".concat(this.levelCompleted?"background: rgba(0,0,0,.25); box-shadow: 0 2px 3px rgba(0,0,0,.1)":""))},{default:Object(c["H"])((function(){return[A]})),_:1},8,["style"]),a.levelCompleted&&!o.levelFinished?(Object(c["t"])(),Object(c["d"])(b,{key:0,onClick:t[2]||(t[2]=function(e){return a.levelCheck()})},{default:Object(c["H"])((function(){return[J]})),_:1})):Object(c["e"])("",!0),o.levelFinished?(Object(c["t"])(),Object(c["d"])(b,{key:1,onClick:t[3]||(t[3]=function(e){return o.modalVisible=!0})},{default:Object(c["H"])((function(){return[P]})),_:1})):Object(c["e"])("",!0)])])])],64)}var U=n("bc3a"),G=n.n(U),Q={key:0,cellspacing:"5"},N={key:1};function W(e,t,n,r,o,a){var s=Object(c["B"])("task-table-cell"),i=Object(c["B"])("task-table-input");return Object(c["t"])(),Object(c["f"])(c["a"],null,[n.isInput?(Object(c["t"])(),Object(c["f"])("table",Q,[Object(c["g"])("tr",null,[(Object(c["t"])(),Object(c["f"])(c["a"],null,Object(c["z"])(5,(function(e){return Object(c["g"])("th",{key:e},Object(c["D"])(String.fromCharCode(1039+e)),1)})),64))]),(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(n.answer.length,(function(e){return Object(c["t"])(),Object(c["f"])("tr",{key:e},[(Object(c["t"])(),Object(c["f"])(c["a"],null,Object(c["z"])(5,(function(t){return Object(c["g"])("td",{key:t},[Object(c["i"])(s,{rowIndex:e-1,cellIndex:t-1,isCorrect:void 0==n.isCorrect?void 0:n.isCorrect[e-1],modelValue:n.answer[e-1],"onUpdate:modelValue":function(t){return n.answer[e-1]=t}},null,8,["rowIndex","cellIndex","isCorrect","modelValue","onUpdate:modelValue"])])})),64))])})),128))])):Object(c["e"])("",!0),n.isInput?Object(c["e"])("",!0):(Object(c["t"])(),Object(c["f"])("div",N,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(n.answer.length,(function(e){return Object(c["t"])(),Object(c["d"])(i,{key:e,isCorrect:void 0==n.isCorrect?void 0:n.isCorrect[e-1],modelValue:n.answer[e-1],"onUpdate:modelValue":function(t){return n.answer[e-1]=t}},null,8,["isCorrect","modelValue","onUpdate:modelValue"])})),128))]))],64)}var K=["name","value","checked","disabled"];function X(e,t,n,r,o,a){return Object(c["t"])(),Object(c["f"])("input",{type:"radio",name:n.rowIndex,value:String.fromCharCode(1040+n.cellIndex),class:Object(c["o"])(void 0==n.isCorrect?"undefined":1==n.isCorrect?"correct":"incorrect"),checked:n.modelValue==String.fromCharCode(1040+n.cellIndex),disabled:void 0==n.isCorrect?0:1,onChange:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,42,K)}var Y={props:["rowIndex","cellIndex","isCorrect","modelValue"]};n("3073");const Z=i()(Y,[["render",X],["__scopeId","data-v-47e43a4a"]]);var ee=Z,te=["value","disabled"];function ne(e,t,n,r,o,a){return Object(c["t"])(),Object(c["f"])("input",{type:"text",value:n.modelValue,disabled:void 0==n.isCorrect?0:1,onChange:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),class:Object(c["o"])(void 0==n.isCorrect?"undefined":1==n.isCorrect?"correct":"incorrect")},null,42,te)}var ce={props:["isCorrect","modelValue"]};n("c679");const re=i()(ce,[["render",ne],["__scopeId","data-v-7153282f"]]);var oe=re,ae={components:{taskTableCell:ee,taskTableInput:oe},props:["answer","isCorrect","isInput"]};const se=i()(ae,[["render",W]]);var ie=se,le={class:"wrapper"},ue={class:"input-counter"};function de(e,t,n,r,o,a){return Object(c["t"])(),Object(c["f"])("div",le,[Object(c["g"])("input",{type:"radio",ref:"input",name:"pagination-panel",onClick:t[0]||(t[0]=function(t){return e.$emit("taskGoto")}),class:Object(c["o"])(void 0==n.ratio?"undefined":1==n.ratio?"correct":"incorrect")},null,2),Object(c["g"])("span",ue,[Object(c["A"])(e.$slots,"default",{},void 0,!0)])])}var be={props:["ratio"],methods:{click:function(){this.$refs.input.click()}}};n("c027");const fe=i()(be,[["render",de],["__scopeId","data-v-0718732a"]]);var je=fe,Oe={components:{taskTable:ie,taskPaginationCell:je},data:function(){return{answers:[],taskIndex:0,taskRatios:[],taskBools:[void 0],levelRatio:void 0,levelFinished:!1,modalVisible:!1}},beforeMount:function(){this.$nextTick((function(e){return MathJax.Hub.Queue(["Typeset",MathJax.Hub])})),void 0==this.level.answers?this.answers=this.level.tasks.map((function(e){return Array.from(e.key).fill(void 0)})):(this.answers=this.level.answers,this.levelFinish())},mounted:function(){this.$refs.page[0].click()},computed:{levelCompleted:function(){return!this.answers.flat().includes(void 0)},level:function(){return this.$store.state.level},task:function(){return this.$store.state.level.tasks[this.taskIndex]}},methods:{taskGoto:function(e){this.taskIndex=e,this.$nextTick((function(e){return MathJax.Hub.Queue(["Typeset",MathJax.Hub])}))},levelCheck:function(){var e=this;return h()(k.a.mark((function t(){return k.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("updateAnswers",{index:e.$store.state.levelIndex,body:e.answers}),t.next=3,G.a.post("".concat(e.$store.state.server_url,"/publish-answer"),{username:localStorage.login,module:e.$store.state.modules[localStorage.currentModuleIndex],index:localStorage.currentLevelIndex,answers:e.answers,ratios:e.level.taskRatios,ratio:Math.round(100*e.level.levelRatio),score:e.level.levelScore,maxscore:e.level.levelScoreMax});case 3:return t.next=5,G.a.post("".concat(e.$store.state.server_url,"/publish-score"),{username:localStorage.login,score:e.level.levelScore});case 5:e.modalVisible=!0,e.levelFinish();case 7:case"end":return t.stop()}}),t)})))()},levelFinish:function(){this.levelFinished=!0,this.taskBools=this.level.taskBools,this.taskRatios=this.level.taskRatios,this.levelRatio=this.level.levelRatio}}};n("674e");const pe=i()(Oe,[["render",q],["__scopeId","data-v-1f6ed466"]]);var ve=pe,me=function(e){return Object(c["w"])("data-v-333b97c7"),e=e(),Object(c["u"])(),e},he={class:"title-wrapper"},ge={class:"title"},ke={class:"level-block-body"},we={class:"level-name"},xe={key:0},ye={class:"level-info"},Ie={class:"level-stats"},_e=me((function(){return Object(c["g"])("span",{class:"material-icons level-stats-icon"},"people",-1)})),Ce={class:"level-score"},Se={class:"level-stats"},Ve=me((function(){return Object(c["g"])("span",{class:"material-icons level-stats-icon"},"data_saver_off",-1)})),$e={class:"level-score"};function Me(e,t,n,r,o,a){var s=Object(c["B"])("side-menu"),i=Object(c["B"])("progress-bar"),l=Object(c["B"])("router-link");return Object(c["t"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("div",he,[Object(c["i"])(s),Object(c["g"])("div",ge,Object(c["D"])(a.modules),1)]),(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(a.levels.length,(function(e){return Object(c["t"])(),Object(c["d"])(l,{to:"quiz"==a.levels[e-1].type?"/quiz":"/theory",key:e,class:Object(c["o"])(a.levelIsOpened(e-1)?"level-block":"level-block disabled"),onClick:function(t){return a.setCurrentLevelIndex(a.levels[e-1].index)}},{default:Object(c["H"])((function(){var t,n;return[Object(c["g"])("div",{class:"progress-bar-wrapper",style:Object(c["p"])(a.levels[e-1].score?"theory"==a.levels[e-1].type?"background: #5F9EA0":"animation: col 1s -".concat(a.ratios[e-1],"s linear forwards paused"):"background: lightgray")},[Object(c["i"])(i,{ratio:a.ratios[e-1],col1:"white",col2:"white",isTicked:"quiz"==a.levels[e-1].type},null,8,["ratio","isTicked"])],4),Object(c["g"])("span",ke,[Object(c["g"])("div",we,[Object(c["g"])("span",null,Object(c["D"])("theory"==a.levels[e-1].type?"Конспект: ":"")+" "+Object(c["D"])(a.levels[e-1].name),1),a.isMobile?(Object(c["t"])(),Object(c["f"])("span",xe," ("+Object(c["D"])(100*a.ratios[e-1])+"%)",1)):Object(c["e"])("",!0)]),Object(c["g"])("div",ye,[Object(c["g"])("span",{class:"level-score",style:Object(c["p"])(a.levels[e-1].score?"color: gray":"color: lightgray")},Object(c["D"])(a.levels[e-1].score?"quiz"==a.levels[e-1].type?"".concat(a.levels[e-1].score," / ").concat(a.levels[e-1].maxscore," балів"):"Переглянуто":"Не розпочато"),5),Object(c["g"])("span",Ie,[_e,Object(c["g"])("span",Ce,Object(c["D"])(null!==(t=a.levels[e-1].total)&&void 0!==t?t:0),1)]),Object(c["g"])("span",Se,[Ve,Object(c["g"])("span",$e,Object(c["D"])(Math.round(null!==(n=a.levels[e-1].avg)&&void 0!==n?n:0))+"%",1)])])])]})),_:2},1032,["to","class","onClick"])})),128))],64)}var De=function(e){return Object(c["w"])("data-v-5d1f8192"),e=e(),Object(c["u"])(),e},Te={type:"checkbox",id:"side-menu-checkbox",ref:"checkbox"},Be=De((function(){return Object(c["g"])("label",{for:"side-menu-checkbox"},[Object(c["g"])("div",{class:"material-icons",id:"side-menu-icon"},"menu")],-1)})),Ee={class:"side-menu"},ze={class:"side-menu-modules"},He=De((function(){return Object(c["g"])("div",{class:"side-menu-header"},"МОЇ МОДУЛІ",-1)})),Fe=["onClick"],Re={class:"side-menu-other"},Le=De((function(){return Object(c["g"])("div",{class:"side-menu-header"},"ІНШЕ",-1)})),Ae=Object(c["h"])("Рейтинг"),Je=Object(c["h"])("Налаштування");function Pe(e,t,n,r,o,a){var s=Object(c["B"])("router-link");return Object(c["t"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("input",Te,null,512),Be,Object(c["g"])("div",{class:"underlay",onClick:t[0]||(t[0]=function(t){return e.$refs.checkbox.click()})}),Object(c["g"])("div",Ee,[Object(c["g"])("div",ze,[He,(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(a.modules.length,(function(e){return Object(c["t"])(),Object(c["f"])("div",{class:"side-menu-entry",key:e,onClick:function(t){return a.gotoModule(e-1)}},"Математика – "+Object(c["D"])(a.modules[e-1]),9,Fe)})),128))]),Object(c["g"])("div",Re,[Le,Object(c["i"])(s,{to:"/rating",class:"side-menu-entry"},{default:Object(c["H"])((function(){return[Ae]})),_:1}),Object(c["i"])(s,{to:"/settings",class:"side-menu-entry"},{default:Object(c["H"])((function(){return[Je]})),_:1})])])],64)}var qe={computed:{modules:function(){return this.$store.state.modules}},methods:{gotoModule:function(e){localStorage.setItem("currentModuleIndex",e),window.location.reload()}}};n("2433");const Ue=i()(qe,[["render",Pe],["__scopeId","data-v-5d1f8192"]]);var Ge=Ue,Qe={components:{sideMenu:Ge},computed:{isMobile:function(){return window.innerWidth<=450},levels:function(){return this.$store.state.levels},modules:function(){return this.$store.state.modules[localStorage.currentModuleIndex]},ratios:function(){return this.levels.map((function(e){return isNaN(e.score/e.maxscore)?0:e.score/e.maxscore}))}},methods:{setCurrentLevelIndex:function(e){localStorage.setItem("currentLevelIndex",e)},levelIsOpened:function(e){return!e||!!this.levels[e-1].score}}};n("ca35");const Ne=i()(Qe,[["render",Me],["__scopeId","data-v-333b97c7"]]);var We=Ne,Ke=function(e){return Object(c["w"])("data-v-6e34680f"),e=e(),Object(c["u"])(),e},Xe={class:"form-wrapper"},Ye=Ke((function(){return Object(c["g"])("div",{class:"form-header"},"Авторизація",-1)})),Ze=Ke((function(){return Object(c["g"])("button",{type:"submit",class:"button-plain"},"Увійти",-1)}));function et(e,t,n,r,o,a){return Object(c["t"])(),Object(c["f"])("div",Xe,[Object(c["g"])("form",{onSubmit:t[2]||(t[2]=Object(c["J"])((function(e){return a.signIn()}),["prevent"]))},[Ye,Object(c["I"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.login=e}),placeholder:"Логін",required:""},null,512),[[c["F"],o.login]]),Object(c["I"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.password=e}),placeholder:"Пароль",required:""},null,512),[[c["F"],o.password]]),Ze],32)])}var tt={data:function(){return{login:void 0,password:void 0}},methods:{signIn:function(){var e=this;return h()(k.a.mark((function t(){return k.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,G.a.post(e.$store.state.server_url+"/sign-in",{login:e.login,password:e.password}).then((function(t){e.$store.commit("showSuccess",{text:t.data.message}),localStorage.setItem("isAuthorized",1),localStorage.setItem("login",e.login),localStorage.setItem("currentModuleIndex",0),Ft.push({path:"/"})})).catch((function(t){t.response&&e.$store.commit("showError",{text:t.response.data.message})}));case 2:case"end":return t.stop()}}),t)})))()}}};n("c94f");const nt=i()(tt,[["render",et],["__scopeId","data-v-6e34680f"]]);var ct=nt,rt=function(e){return Object(c["w"])("data-v-61130461"),e=e(),Object(c["u"])(),e},ot={class:"form-wrapper"},at=rt((function(){return Object(c["g"])("div",{class:"form-header"},"Зміна паролю",-1)})),st=rt((function(){return Object(c["g"])("button",{type:"submit",class:"button-plain"},"Змінити",-1)})),it=Object(c["h"])("Повернутися");function lt(e,t,n,r,o,a){var s=Object(c["B"])("router-link");return Object(c["t"])(),Object(c["f"])("div",ot,[Object(c["g"])("form",{onSubmit:t[2]||(t[2]=Object(c["J"])((function(e){return a.resetPassword()}),["prevent"]))},[at,Object(c["I"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.password=e}),placeholder:"Старий пароль",required:""},null,512),[[c["F"],o.password]]),Object(c["I"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.newpassword=e}),placeholder:"Новий пароль",required:""},null,512),[[c["F"],o.newpassword]]),st,Object(c["i"])(s,{to:"/",class:"form-back"},{default:Object(c["H"])((function(){return[it]})),_:1})],32)])}var ut={data:function(){return{password:void 0,newpassword:void 0}},methods:{resetPassword:function(){var e=this;return h()(k.a.mark((function t(){return k.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,G.a.post(e.$store.state.server_url+"/reset-password",{login:localStorage.login,password:e.password,newpassword:e.newpassword}).then((function(t){e.$store.commit("showSuccess",{text:t.data.message})})).catch((function(t){t.response&&e.$store.commit("showError",{text:t.response.data.message})}));case 2:case"end":return t.stop()}}),t)})))()}}};n("6ebd");const dt=i()(ut,[["render",lt],["__scopeId","data-v-61130461"]]);var bt=dt,ft=function(e){return Object(c["w"])("data-v-e2af1ec4"),e=e(),Object(c["u"])(),e},jt={id:"title-wrapper"},Ot=Object(c["h"])("arrow_back"),pt=ft((function(){return Object(c["g"])("span",{class:"title"},"Рейтинг",-1)})),vt={class:"member-name"},mt={class:"member-score"};function ht(e,t,n,r,o,a){var s=Object(c["B"])("router-link");return Object(c["t"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("div",jt,[Object(c["i"])(s,{to:"/",class:"material-icons"},{default:Object(c["H"])((function(){return[Ot]})),_:1}),pt]),(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(a.rating.length,(function(e){return Object(c["t"])(),Object(c["f"])("div",{class:"rating-entry",key:e},[Object(c["g"])("span",{class:"member-icon material-icons",style:Object(c["p"])("animation: textcol 1s -".concat(a.rating[e-1].score/a.rating[0].score,"s linear forwards paused"))},"person",4),Object(c["g"])("span",vt,[Object(c["g"])("strong",null,Object(c["D"])(e),1),Object(c["h"])("   "+Object(c["D"])(a.rating[e-1].username),1)]),Object(c["g"])("span",mt,[Object(c["g"])("strong",null,Object(c["D"])(a.rating[e-1].score)+" балів",1)])])})),128))],64)}var gt={computed:{rating:function(){return this.$store.state.rating}}};n("2cf6");const kt=i()(gt,[["render",ht],["__scopeId","data-v-e2af1ec4"]]);var wt=kt,xt={class:"title-wrapper"},yt=Object(c["h"])("arrow_back"),It={class:"title"},_t={class:"theory-header-wrapper"},Ct={class:"theory-header"},St={class:"theory-body-wrapper"},Vt={class:"theory-def"},$t={key:0};function Mt(e,t,n,r,o,a){var s=Object(c["B"])("router-link");return Object(c["t"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("div",xt,[Object(c["i"])(s,{to:"/",class:"material-icons"},{default:Object(c["H"])((function(){return[yt]})),_:1}),Object(c["g"])("span",It,Object(c["D"])(a.level.name),1)]),Object(c["g"])("div",null,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(a.level.entries.length,(function(e){return Object(c["t"])(),Object(c["f"])("div",{key:e,class:"theory-card"},[Object(c["g"])("div",_t,[Object(c["g"])("span",Ct,Object(c["D"])(a.level.entries[e-1].header),1)]),Object(c["g"])("div",St,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(a.level.entries[e-1].def.length,(function(t){return Object(c["t"])(),Object(c["f"])("div",{key:t},[Object(c["g"])("div",Vt,[Object(c["g"])("div",null,Object(c["D"])(a.level.entries[e-1].def[t-1]),1),Object(c["g"])("div",null,Object(c["D"])(a.level.entries[e-1].formula[t-1]),1)]),t!=a.level.entries[e-1].def.length?(Object(c["t"])(),Object(c["f"])("hr",$t)):Object(c["e"])("",!0)])})),128))])])})),128))])],64)}var Dt={beforeMount:function(){this.$nextTick((function(e){return MathJax.Hub.Queue(["Typeset",MathJax.Hub])})),void 0==this.level.score&&this.levelFinish()},computed:{level:function(){return this.$store.state.level}},methods:{levelFinish:function(){var e=this;return h()(k.a.mark((function t(){return k.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,G.a.post("".concat(e.$store.state.server_url,"/publish-answer"),{username:localStorage.login,module:e.$store.state.modules[localStorage.currentModuleIndex],index:localStorage.currentLevelIndex,score:10,maxscore:10});case 2:return t.next=4,G.a.post("".concat(e.$store.state.server_url,"/publish-score"),{username:localStorage.login,score:10});case 4:case"end":return t.stop()}}),t)})))()}}};n("838c");const Tt=i()(Dt,[["render",Mt],["__scopeId","data-v-7315de6e"]]);var Bt=Tt,Et=n("6c02"),zt=[{path:"/",component:We,beforeEnter:function(){var e=h()(k.a.mark((function e(t,n,c){return k.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G.a.get(v.state.server_url+"/get-modules:"+localStorage.getItem("login")).then((function(e){return v.commit("updateModules",e.data)})).catch((function(e){return v.commit("showError",{text:"Недійсна відповідь сервера"})}));case 2:return e.next=4,G.a.get("".concat(v.state.server_url,"/modules/:").concat(localStorage.login,"/:").concat(v.state.modules[localStorage.currentModuleIndex])).then((function(e){v.commit("updateLevels",e.data),c()})).catch((function(e){return v.commit("showError",{text:"Недійсна відповідь сервера"})}));case 4:case"end":return e.stop()}}),e)})));function t(t,n,c){return e.apply(this,arguments)}return t}()},{path:"/quiz",component:ve,beforeEnter:function(){var e=h()(k.a.mark((function e(t,n,c){return k.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G.a.get(v.state.server_url+"/get-modules:"+localStorage.getItem("login")).then((function(e){return v.commit("updateModules",e.data)})).catch((function(e){return v.commit("showError",{text:"Недійсна відповідь сервера"})}));case 2:return e.next=4,G.a.get("".concat(v.state.server_url,"/modules/:").concat(localStorage.login,"/:").concat(v.state.modules[localStorage.currentModuleIndex],"/:").concat(localStorage.currentLevelIndex)).then((function(e){v.commit("updateTasks",e.data),c()})).catch((function(e){return v.commit("showError",{text:"Недійсна відповідь сервера"})}));case 4:case"end":return e.stop()}}),e)})));function t(t,n,c){return e.apply(this,arguments)}return t}()},{path:"/theory",component:Bt,beforeEnter:function(){var e=h()(k.a.mark((function e(t,n,c){return k.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G.a.get(v.state.server_url+"/get-modules:"+localStorage.getItem("login")).then((function(e){return v.commit("updateModules",e.data)})).catch((function(e){return v.commit("showError",{text:"Недійсна відповідь сервера"})}));case 2:return e.next=4,G.a.get("".concat(v.state.server_url,"/modules/:").concat(localStorage.login,"/:").concat(v.state.modules[localStorage.currentModuleIndex],"/:").concat(localStorage.currentLevelIndex)).then((function(e){v.commit("updateTheory",e.data),c()})).catch((function(e){return v.commit("showError",{text:"Недійсна відповідь сервера"})}));case 4:case"end":return e.stop()}}),e)})));function t(t,n,c){return e.apply(this,arguments)}return t}()},{path:"/rating",component:wt,beforeEnter:function(){var e=h()(k.a.mark((function e(t,n,c){return k.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("".concat(v.state.server_url,"/get-rating")).then((function(e){v.commit("updateRating",e.data),c()})).catch((function(e){return v.commit("showError",{text:"Недійсна відповідь сервера"})}));case 2:case"end":return e.stop()}}),e)})));function t(t,n,c){return e.apply(this,arguments)}return t}()},{path:"/auth",name:"auth",component:ct},{path:"/settings",component:bt}],Ht=Object(Et["a"])({routes:zt,history:Object(Et["b"])()});Ht.beforeEach((function(e,t,n){v.commit("showLoader"),0==window.localStorage.isAuthorized&&"auth"!==e.name?Ht.push("/auth").catch((function(){})):n()})),Ht.afterEach((function(e,t,n){v.commit("hideLoader")}));var Ft=Ht,Rt={class:"button-plain"};function Lt(e,t,n,r,o,a){return Object(c["t"])(),Object(c["f"])("div",Rt,[Object(c["A"])(e.$slots,"default")])}var At={name:"button-plain"};n("a5d7");const Jt=i()(At,[["render",Lt]]);var Pt=Jt,qt={key:0,class:"modal-underlay"},Ut={class:"modal-window"},Gt={class:"material-icons modal-icon"},Qt={class:"modal-title-text"},Nt={class:"modal-body"},Wt={class:"modal-content"},Kt=["color"];function Xt(e,t,n,r,o,a){return n.isVisible?(Object(c["t"])(),Object(c["f"])("div",qt,[Object(c["g"])("div",Ut,[Object(c["g"])("div",{class:"modal-title",style:Object(c["p"])("background: ".concat(n.color))},[Object(c["g"])("div",Gt,Object(c["D"])(n.icon),1),Object(c["g"])("div",Qt,Object(c["D"])(n.title),1)],4),Object(c["g"])("div",Nt,[Object(c["g"])("div",Wt,[Object(c["A"])(e.$slots,"default")]),Object(c["g"])("div",{class:"modal-button",onClick:t[0]||(t[0]=function(t){return e.$store.commit("hideModal")}),color:n.color},"ЗАКРИТИ",8,Kt)])])])):Object(c["e"])("",!0)}var Yt={name:"modal-basic",props:["isVisible","title","text","color","icon"]};n("d430");const Zt=i()(Yt,[["render",Xt]]);var en=Zt,tn={key:0,class:"modal-underlay"},nn={class:"modal-window"},cn={class:"modal-body"};function rn(e,t,n,r,o,a){var s=Object(c["B"])("progress-bar");return n.isVisible?(Object(c["t"])(),Object(c["f"])("div",tn,[Object(c["g"])("div",nn,[Object(c["g"])("div",{class:"modal-title",style:Object(c["p"])("animation: col 2s linear forwards ".concat(n.ratio))},[Object(c["i"])(s,{ratio:n.ratio,isTicked:"0",col1:"white",col2:"white"},null,8,["ratio"])],4),Object(c["g"])("div",cn,[Object(c["g"])("div",{class:"modal-button",onClick:t[0]||(t[0]=function(t){return e.$emit("update:isVisible",!1)})},"Закрити")])])])):Object(c["e"])("",!0)}var on={name:"modal-result",props:["isVisible","ratio"]};const an=i()(on,[["render",rn]]);var sn=an,ln={id:"wrapper"},un={viewBox:"0 0 120 120"},dn=["stroke-dasharray"];function bn(e,t,n,r,o,a){return Object(c["t"])(),Object(c["f"])("div",ln,[(Object(c["t"])(),Object(c["f"])("svg",un,[Object(c["g"])("circle",{class:"circle1",r:"50",cx:"60",cy:"60",style:Object(c["p"])({stroke:n.col1})},null,4),Object(c["g"])("circle",{class:"circle2",r:"50",cx:"60",cy:"60","stroke-dasharray":314*n.ratio+" 314",ref:"circ",style:Object(c["p"])("--len: ".concat(314*n.ratio,"; stroke: ").concat(n.col2))},null,12,dn)])),n.isTicked?(Object(c["t"])(),Object(c["f"])("span",{key:0,class:"counter",style:Object(c["p"])("--perc: ".concat(Math.floor(100*n.ratio),"; color: ").concat(n.col1))},null,4)):(Object(c["t"])(),Object(c["f"])("span",{key:1,class:"material-icons",style:Object(c["p"])({color:n.col1})},Object(c["D"])(n.ratio>0?"done":"close"),5))])}var fn={name:"progress-bar",props:["isTicked","ratio","col1","col2"]};n("9ed0");const jn=i()(fn,[["render",bn],["__scopeId","data-v-584e729b"]]);var On=jn,pn=function(e){return Object(c["w"])("data-v-4dcf1c53"),e=e(),Object(c["u"])(),e},vn={key:0,class:"modal-underlay"},mn=pn((function(){return Object(c["g"])("div",{class:"loader"},"Зачекайте...",-1)})),hn=[mn];function gn(e,t,n,r,o,a){return n.isVisible?(Object(c["t"])(),Object(c["f"])("div",vn,hn)):Object(c["e"])("",!0)}var kn={name:"loader",props:["isVisible"]};n("ad25");const wn=i()(kn,[["render",gn],["__scopeId","data-v-4dcf1c53"]]);var xn=wn,yn=[Pt,en,sn,On,xn],In=(n("d1e7"),Object(c["c"])(u));yn.forEach((function(e){return In.component(e.name,e)})),In.use(v).use(Ft).mount("#app")},"5d6c":function(e,t,n){"use strict";n("36c7")},"5d7d":function(e,t,n){},"674e":function(e,t,n){"use strict";n("d9a3")},"6ebd":function(e,t,n){"use strict";n("a46b")},"7d37":function(e,t,n){},"838c":function(e,t,n){"use strict";n("e495")},"85b9":function(e,t,n){},"87ee":function(e,t,n){},9166:function(e,t,n){},"9ed0":function(e,t,n){"use strict";n("34a3")},a46b:function(e,t,n){},a5d7:function(e,t,n){"use strict";n("2623")},ad25:function(e,t,n){"use strict";n("7d37")},c027:function(e,t,n){"use strict";n("f668")},c18a:function(e,t,n){},c679:function(e,t,n){"use strict";n("85b9")},c94f:function(e,t,n){"use strict";n("3c3e")},ca35:function(e,t,n){"use strict";n("9166")},d430:function(e,t,n){"use strict";n("5d7d")},d9a3:function(e,t,n){},e495:function(e,t,n){},f668:function(e,t,n){}});
//# sourceMappingURL=app.a4d4b296.js.map