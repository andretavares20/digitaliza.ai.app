import{a as K}from"./chunk-3ZIDJAHB.js";import{o as G,p as b,u as U,v as V}from"./chunk-CCYSFV2Z.js";import{$a as D,Ca as L,Cb as A,Db as j,Ea as k,Fa as c,G as h,Hb as Q,I as m,Ka as P,M as C,Ma as I,N as _,Na as v,Pa as B,Qa as w,Wa as x,Y as y,Za as E,_a as S,da as s,ea as M,mb as F,oa as r,pa as p,qa as l,ua as u,wa as O,xa as g,xb as N,ya as f,za as T,zb as R}from"./chunk-EOM5JP26.js";var q=(e,i,t)=>({"p-button p-togglebutton p-component":!0,"p-button-icon-only":e,"p-highlight":i,"p-disabled":t}),z=(e,i)=>({"p-button-icon":!0,"p-button-icon-left":e,"p-button-icon-right":i}),$=e=>({$implicit:e});function H(e,i){if(e&1&&T(0,"span",4),e&2){let t=c(2);u(t.checked?t.onIcon:t.offIcon),l("ngClass",S(4,z,t.iconPos==="left",t.iconPos==="right")),p("data-pc-section","icon")}}function J(e,i){if(e&1&&r(0,H,1,7,"span",3),e&2){let t=c();l("ngIf",t.onIcon||t.offIcon)}}function W(e,i){e&1&&L(0)}function X(e,i){if(e&1&&r(0,W,1,0,"ng-container",5),e&2){let t=c();l("ngTemplateOutlet",t.iconTemplate)("ngTemplateOutletContext",E(2,$,t.checked))}}function Y(e,i){if(e&1&&(g(0,"span",6),B(1),f()),e&2){let t=c();p("data-pc-section","label"),s(),w(t.checked?t.hasOnLabel?t.onLabel:"":t.hasOffLabel?t.offLabel:"")}}var Z={provide:K,useExisting:h(()=>tt),multi:!0},tt=(()=>{class e{cd;onLabel;offLabel;onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;inputId;tabindex;iconPos="left";onChange=new y;templates;iconTemplate;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};constructor(t){this.cd=t}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this.iconTemplate=t.template;break;default:this.iconTemplate=t.template;break}})}toggle(t){this.disabled||(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}static \u0275fac=function(o){return new(o||e)(M(F))};static \u0275cmp=C({type:e,selectors:[["p-toggleButton"]],contentQueries:function(o,n,d){if(o&1&&P(d,G,4),o&2){let a;I(a=v())&&(n.templates=a)}},hostAttrs:[1,"p-element"],inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:"disabled",style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:"tabindex",iconPos:"iconPos"},outputs:{onChange:"onChange"},features:[x([Z])],decls:4,vars:16,consts:[["role","switch","pRipple","",3,"click","keydown","ngClass","ngStyle"],[3,"class","ngClass"],["class","p-button-label",4,"ngIf"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-button-label"]],template:function(o,n){o&1&&(g(0,"div",0),k("click",function(a){return n.toggle(a)})("keydown",function(a){return n.onKeyDown(a)}),r(1,J,1,1,"span",1)(2,X,1,4,"ng-container")(3,Y,2,2,"span",2),f()),o&2&&(u(n.styleClass),l("ngClass",D(12,q,n.onIcon&&n.offIcon&&!n.hasOnLabel&&!n.hasOffLabel,n.checked,n.disabled))("ngStyle",n.style),p("tabindex",n.disabled?null:"0")("aria-checked",n.checked)("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel)("data-pc-name","togglebutton")("data-pc-section","root"),s(),O(n.iconTemplate?2:1),s(2),l("ngIf",n.onLabel||n.offLabel))},dependencies:[N,R,j,A,U],styles:['@layer primeng{.p-button[_ngcontent-%COMP%]{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default;pointer-events:none}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]:after{content:"p";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child){border-right:0 none}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus{position:relative;z-index:1}p-button[iconpos=right][_ngcontent-%COMP%]   spinnericon[_ngcontent-%COMP%]{order:1}}'],changeDetection:0})}return e})(),bt=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=_({type:e});static \u0275inj=m({imports:[Q,V,b,b]})}return e})();export{tt as a,bt as b};
