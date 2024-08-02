import{a as k,b as w}from"./chunk-TNABXVKL.js";import{a as O}from"./chunk-36GPJXQ3.js";import{a as E}from"./chunk-UHFSMSZS.js";import{a as S}from"./chunk-ATZD6M4U.js";import{c as se,d as T,f as I,h as M}from"./chunk-XSSXK7EZ.js";import{i as te,l as ie,o as ne,u as ae,v as re}from"./chunk-CCYSFV2Z.js";import{$ as v,Aa as d,Ba as h,Ca as P,Cb as X,Da as Q,Db as Z,Ea as V,Fa as o,Hb as ee,I as R,Ka as z,M as $,Ma as q,N as A,Na as B,Oa as y,Pa as b,Qa as x,S as D,T as H,X as N,Y as j,Za as G,_a as Y,da as r,ea as f,jb as C,mb as J,oa as p,pa as c,qa as s,t as F,ua as u,xa as m,xb as K,ya as g,yb as U,za as l,zb as W}from"./chunk-EOM5JP26.js";var oe=(t,a)=>({showTransitionParams:t,hideTransitionParams:a}),ce=t=>({value:"visible",params:t});function le(t,a){if(t&1&&l(0,"span"),t&2){let e=o().$implicit;u("p-message-icon pi "+e.icon),c("data-pc-section","icon")}}function pe(t,a){t&1&&l(0,"CheckIcon"),t&2&&c("data-pc-section","icon")}function me(t,a){t&1&&l(0,"InfoCircleIcon"),t&2&&c("data-pc-section","icon")}function ge(t,a){t&1&&l(0,"TimesCircleIcon"),t&2&&c("data-pc-section","icon")}function _e(t,a){t&1&&l(0,"ExclamationTriangleIcon"),t&2&&c("data-pc-section","icon")}function fe(t,a){if(t&1&&(m(0,"span",10),d(1),p(2,pe,1,1,"CheckIcon",11)(3,me,1,1,"InfoCircleIcon",11)(4,ge,1,1,"TimesCircleIcon",11)(5,_e,1,1,"ExclamationTriangleIcon",11),h(),g()),t&2){let e=o().$implicit;r(2),s("ngIf",e.severity==="success"),r(),s("ngIf",e.severity==="info"),r(),s("ngIf",e.severity==="error"),r(),s("ngIf",e.severity==="warn")}}function ue(t,a){if(t&1&&l(0,"span",14),t&2){let e=o(2).$implicit;s("innerHTML",e.summary,v),c("data-pc-section","summary")}}function de(t,a){if(t&1&&l(0,"span",15),t&2){let e=o(2).$implicit;s("innerHTML",e.detail,v),c("data-pc-section","detail")}}function he(t,a){if(t&1&&(d(0),p(1,ue,1,2,"span",12)(2,de,1,2,"span",13),h()),t&2){let e=o().$implicit;r(),s("ngIf",e.summary),r(),s("ngIf",e.detail)}}function ve(t,a){if(t&1&&(m(0,"span",18),b(1),g()),t&2){let e=o(2).$implicit;c("data-pc-section","summary"),r(),x(e.summary)}}function ye(t,a){if(t&1&&(m(0,"span",19),b(1),g()),t&2){let e=o(2).$implicit;c("data-pc-section","detail"),r(),x(e.detail)}}function be(t,a){if(t&1&&p(0,ve,2,2,"span",16)(1,ye,2,2,"span",17),t&2){let e=o().$implicit;s("ngIf",e.summary),r(),s("ngIf",e.detail)}}function xe(t,a){if(t&1){let e=Q();m(0,"button",20),V("click",function(){D(e);let n=o().index,_=o(2);return H(_.removeMessage(n))}),l(1,"TimesIcon",21),g()}if(t&2){let e=o(3);c("aria-label",e.closeAriaLabel)("data-pc-section","closebutton"),r(),s("styleClass","p-message-close-icon"),c("data-pc-section","closeicon")}}function Ce(t,a){if(t&1&&(m(0,"div",5)(1,"div",6),p(2,le,1,3,"span",7)(3,fe,6,4,"span",8)(4,he,3,2,"ng-container",3)(5,be,2,2,"ng-template",null,1,C)(7,xe,2,4,"button",9),g()()),t&2){let e=a.$implicit,i=y(6),n=o(2);u("p-message p-message-"+e.severity),s("@messageAnimation",G(12,ce,Y(9,oe,n.showTransitionOptions,n.hideTransitionOptions))),r(),c("data-pc-section","wrapper"),r(),s("ngIf",e.icon),r(),s("ngIf",!e.icon),r(),s("ngIf",!n.escape)("ngIfElse",i),r(3),s("ngIf",n.closable)}}function Te(t,a){if(t&1&&(d(0),p(1,Ce,8,14,"div",4),h()),t&2){let e=o();r(),s("ngForOf",e.messages)}}function Ie(t,a){t&1&&P(0)}function Me(t,a){if(t&1&&(m(0,"div",22)(1,"div",6),p(2,Ie,1,0,"ng-container",23),g()()),t&2){let e=o();s("ngClass","p-message p-message-"+e.severity),r(2),s("ngTemplateOutlet",e.contentTemplate)}}var Ke=(()=>{class t{messageService;el;cd;config;set value(e){this.messages=e,this.startMessageLifes(this.messages)}closable=!0;style;styleClass;enableService=!0;key;escape=!0;severity;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";valueChange=new j;templates;messages;messageSubscription;clearSubscription;timerSubscriptions=[];contentTemplate;constructor(e,i,n,_){this.messageService=e,this.el=i,this.cd=n,this.config=_}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;default:this.contentTemplate=e.template;break}}),this.messageService&&this.enableService&&!this.contentTemplate&&(this.messageSubscription=this.messageService.messageObserver.subscribe(e=>{if(e){Array.isArray(e)||(e=[e]);let i=e.filter(n=>this.key===n.key);this.messages=this.messages?[...this.messages,...i]:[...i],this.startMessageLifes(i),this.cd.markForCheck()}}),this.clearSubscription=this.messageService.clearObserver.subscribe(e=>{e?this.key===e&&(this.messages=null):this.messages=null,this.cd.markForCheck()}))}hasMessages(){let e=this.el.nativeElement.parentElement;return e&&e.offsetParent?this.contentTemplate!=null||this.messages&&this.messages.length>0:!1}clear(){this.messages=[],this.valueChange.emit(this.messages)}removeMessage(e){this.messages=this.messages?.filter((i,n)=>n!==e),this.valueChange.emit(this.messages)}get icon(){let e=this.severity||(this.hasMessages()?this.messages[0].severity:null);if(this.hasMessages())switch(e){case"success":return"pi-check";case"info":return"pi-info-circle";case"error":return"pi-times";case"warn":return"pi-exclamation-triangle";default:return"pi-info-circle"}return null}get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.timerSubscriptions?.forEach(e=>e.unsubscribe())}startMessageLifes(e){e?.forEach(i=>i.life&&this.startMessageLife(i))}startMessageLife(e){let i=F(e.life).subscribe(()=>{this.messages=this.messages?.filter(n=>n!==e),this.timerSubscriptions=this.timerSubscriptions?.filter(n=>n!==i),this.valueChange.emit(this.messages),this.cd.markForCheck()});this.timerSubscriptions.push(i)}static \u0275fac=function(i){return new(i||t)(f(te,8),f(N),f(J),f(ie))};static \u0275cmp=$({type:t,selectors:[["p-messages"]],contentQueries:function(i,n,_){if(i&1&&z(_,ne,4),i&2){let L;q(L=B())&&(n.templates=L)}},hostAttrs:[1,"p-element"],inputs:{value:"value",closable:"closable",style:"style",styleClass:"styleClass",enableService:"enableService",key:"key",escape:"escape",severity:"severity",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{valueChange:"valueChange"},decls:4,vars:8,consts:[["staticMessage",""],["escapeOut",""],["role","alert",1,"p-messages","p-component",3,"ngStyle"],[4,"ngIf","ngIfElse"],["role","alert",3,"class",4,"ngFor","ngForOf"],["role","alert"],[1,"p-message-wrapper"],[3,"class",4,"ngIf"],["class","p-message-icon",4,"ngIf"],["class","p-message-close p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-message-icon"],[4,"ngIf"],["class","p-message-summary",3,"innerHTML",4,"ngIf"],["class","p-message-detail",3,"innerHTML",4,"ngIf"],[1,"p-message-summary",3,"innerHTML"],[1,"p-message-detail",3,"innerHTML"],["class","p-message-summary",4,"ngIf"],["class","p-message-detail",4,"ngIf"],[1,"p-message-summary"],[1,"p-message-detail"],["type","button","pRipple","",1,"p-message-close","p-link",3,"click"],[3,"styleClass"],["role","alert",3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(i,n){if(i&1&&(m(0,"div",2),p(1,Te,2,1,"ng-container",3)(2,Me,3,2,"ng-template",null,0,C),g()),i&2){let _=y(3);u(n.styleClass),s("ngStyle",n.style),c("aria-atomic",!0)("aria-live","assertive")("data-pc-name","message"),r(),s("ngIf",!n.contentTemplate)("ngIfElse",_)}},dependencies:()=>[K,U,W,Z,X,ae,E,w,O,k,S],styles:[`@layer primeng{.p-message-wrapper{display:flex;align-items:center}.p-message-close{display:flex;align-items:center;justify-content:center;flex:none}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}.p-messages .p-message.ng-animating{overflow:hidden}}
`],encapsulation:2,data:{animation:[se("messageAnimation",[M(":enter",[I({opacity:0,transform:"translateY(-25%)"}),T("{{showTransitionParams}}")]),M(":leave",[T("{{hideTransitionParams}}",I({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})(),Ue=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=A({type:t});static \u0275inj=R({imports:[ee,re,E,w,O,k,S]})}return t})();export{Ke as a,Ue as b};
