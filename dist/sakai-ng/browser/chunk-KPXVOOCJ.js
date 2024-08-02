import{o as E}from"./chunk-CCYSFV2Z.js";import{Ca as h,Cb as k,Db as S,Fa as d,Hb as D,I as g,Ka as _,M as f,Ma as C,N as b,Na as x,Pa as w,Sa as T,Za as P,_a as I,da as n,oa as m,pa as a,qa as o,ra as c,ua as v,xa as l,xb as B,ya as p,za as y,zb as M}from"./chunk-EOM5JP26.js";var O=(e,s)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":e,"p-progressbar-indeterminate":s}),V=e=>({$implicit:e});function F(e,s){if(e&1&&(l(0,"div"),w(1),p()),e&2){let t=d(2);c("display",t.value!=null&&t.value!==0?"flex":"none"),a("data-pc-section","label"),n(),T("",t.value,"",t.unit,"")}}function Q(e,s){e&1&&h(0)}function j(e,s){if(e&1&&(l(0,"div",3)(1,"div",4),m(2,F,2,5,"div",5)(3,Q,1,0,"ng-container",6),p()()),e&2){let t=d();c("width",t.value+"%")("background",t.color),a("data-pc-section","value"),n(2),o("ngIf",t.showValue&&!t.contentTemplate),n(),o("ngTemplateOutlet",t.contentTemplate)("ngTemplateOutletContext",P(8,V,t.value))}}function z(e,s){if(e&1&&(l(0,"div",7),y(1,"div",8),p()),e&2){let t=d();a("data-pc-section","container"),n(),c("background",t.color),a("data-pc-section","value")}}var G=(()=>{class e{value;showValue=!0;styleClass;style;unit="%";mode="determinate";color;templates;contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;default:this.contentTemplate=t.template}})}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=f({type:e,selectors:[["p-progressBar"]],contentQueries:function(r,i,N){if(r&1&&_(N,E,4),r&2){let u;C(u=x())&&(i.templates=u)}},hostAttrs:[1,"p-element"],inputs:{value:"value",showValue:"showValue",styleClass:"styleClass",style:"style",unit:"unit",mode:"mode",color:"color"},decls:3,vars:14,consts:[["role","progressbar",3,"ngStyle","ngClass"],["class","p-progressbar-value p-progressbar-value-animate","style","display:flex",3,"width","background",4,"ngIf"],["class","p-progressbar-indeterminate-container",4,"ngIf"],[1,"p-progressbar-value","p-progressbar-value-animate",2,"display","flex"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-progressbar-indeterminate-container"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(r,i){r&1&&(l(0,"div",0),m(1,j,4,10,"div",1)(2,z,2,4,"div",2),p()),r&2&&(v(i.styleClass),o("ngStyle",i.style)("ngClass",I(11,O,i.mode==="determinate",i.mode==="indeterminate")),a("aria-valuemin",0)("aria-valuenow",i.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root"),n(),o("ngIf",i.mode==="determinate"),n(),o("ngIf",i.mode==="indeterminate"))},dependencies:[B,M,S,k],styles:[`@layer primeng{.p-progressbar{position:relative;overflow:hidden}.p-progressbar-determinate .p-progressbar-value{height:100%;width:0%;position:absolute;display:none;border:0 none;display:flex;align-items:center;justify-content:center;overflow:hidden}.p-progressbar-determinate .p-progressbar-label{display:inline-flex}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-indeterminate .p-progressbar-value:before{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.p-progressbar-indeterminate .p-progressbar-value:after{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s}}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}
`],encapsulation:2,changeDetection:0})}return e})(),H=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=b({type:e});static \u0275inj=g({imports:[D]})}return e})();export{G as a,H as b};