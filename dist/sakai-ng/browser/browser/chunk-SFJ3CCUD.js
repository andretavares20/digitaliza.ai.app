import{a as J}from"./chunk-LKAC5SOC.js";import{c as q,d as z,f as $,g as H}from"./chunk-OS55RPVL.js";import{o as K,p as C}from"./chunk-ZANQR5YZ.js";import{$ as m,$a as F,Ba as T,Ca as b,Da as d,Ea as L,Eb as j,Gb as Q,Ha as k,I as _,Ja as v,Jb as G,K as h,Ka as l,Kb as U,O as M,Ob as V,P as O,Pa as I,Ra as B,Sa as w,Ua as x,Va as E,cb as S,db as D,eb as A,ha as p,ia as P,sa as y,sb as N,ta as s,ua as u,ub as f,va as a,vb as R,za as g}from"./chunk-NR2BOPV4.js";var W=(n,i,t)=>({"p-togglebutton p-button p-component":!0,"p-button-icon-only":n,"p-highlight":i,"p-disabled":t}),X=(n,i)=>({"p-button-icon":!0,"p-button-icon-left":n,"p-button-icon-right":i}),Y=n=>({$implicit:n});function Z(n,i){if(n&1&&L(0,"span",4),n&2){let t=l(2);g(t.checked?t.onIcon:t.offIcon),a("ngClass",D(4,X,t.iconPos==="left",t.iconPos==="right")),u("data-pc-section","icon")}}function tt(n,i){if(n&1&&s(0,Z,1,7,"span",3),n&2){let t=l();a("ngIf",t.onIcon||t.offIcon)}}function nt(n,i){n&1&&k(0)}function et(n,i){if(n&1&&s(0,nt,1,0,"ng-container",5),n&2){let t=l();a("ngTemplateOutlet",t.iconTemplate)("ngTemplateOutletContext",S(2,Y,t.checked))}}function ot(n,i){if(n&1&&(b(0,"span",6),x(1),d()),n&2){let t=l();u("data-pc-section","label"),p(),E(t.checked?t.hasOnLabel?t.onLabel:"":t.hasOffLabel?t.offLabel:"")}}var it={provide:J,useExisting:_(()=>ct),multi:!0},ct=(()=>{class n{cd;onLabel;offLabel;onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;inputId;tabindex=0;iconPos="left";autofocus;onChange=new m;templates;iconTemplate;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};constructor(t){this.cd=t}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this.iconTemplate=t.template;break;default:this.iconTemplate=t.template;break}})}toggle(t){this.disabled||(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}static \u0275fac=function(o){return new(o||n)(P(N))};static \u0275cmp=M({type:n,selectors:[["p-toggleButton"]],contentQueries:function(o,e,r){if(o&1&&I(r,K,4),o&2){let c;B(c=w())&&(e.templates=c)}},hostAttrs:[1,"p-element"],inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",f],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",R],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",f]},outputs:{onChange:"onChange"},features:[F([it]),y],decls:4,vars:17,consts:[["role","switch","pRipple","","pAutoFocus","",3,"click","keydown","ngClass","ngStyle","autofocus"],[3,"class","ngClass"],["class","p-button-label",4,"ngIf"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-button-label"]],template:function(o,e){o&1&&(b(0,"div",0),v("click",function(c){return e.toggle(c)})("keydown",function(c){return e.onKeyDown(c)}),s(1,tt,1,1,"span",1)(2,et,1,4,"ng-container")(3,ot,2,2,"span",2),d()),o&2&&(g(e.styleClass),a("ngClass",A(13,W,e.onIcon&&e.offIcon&&!e.hasOnLabel&&!e.hasOffLabel,e.checked,e.disabled))("ngStyle",e.style)("autofocus",e.autofocus),u("tabindex",e.disabled?null:e.tabindex)("aria-checked",e.checked)("aria-labelledby",e.ariaLabelledBy)("aria-label",e.ariaLabel)("data-pc-name","togglebutton")("data-pc-section","root"),p(),T(e.iconTemplate?2:1),p(2),a("ngIf",e.onLabel||e.offLabel))},dependencies:[j,Q,U,G,q,$],styles:['@layer primeng{.p-button[_ngcontent-%COMP%]{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default;pointer-events:none}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]:after{content:"p";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus, .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:focus   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus, .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:focus   .p-button[_ngcontent-%COMP%]{position:relative;z-index:1}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child), .p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child):hover, .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:last-child)   .p-button[_ngcontent-%COMP%], .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:last-child)   .p-button[_ngcontent-%COMP%]:hover, .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child), .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child):hover, .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:last-child)   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:last-child)   .p-button[_ngcontent-%COMP%]:hover{border-right:0 none}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type), .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type)   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type), .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type)   .p-button[_ngcontent-%COMP%]{border-radius:0}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type:not(:only-of-type), .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:first-of-type:not(:only-of-type)   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type:not(:only-of-type), .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:first-of-type:not(:only-of-type)   .p-button[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type:not(:only-of-type), .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:last-of-type:not(:only-of-type)   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type:not(:only-of-type), .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:last-of-type:not(:only-of-type)   .p-button[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}p-button[iconpos=right][_ngcontent-%COMP%]   spinnericon[_ngcontent-%COMP%]{order:1}}'],changeDetection:0})}return n})(),Pt=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=O({type:n});static \u0275inj=h({imports:[V,z,C,H,C]})}return n})();export{ct as a,Pt as b};