import{a as O,b as L}from"./chunk-IWB2Y4TF.js";import{a as F}from"./chunk-IVI3XLNH.js";import{a as w}from"./chunk-KQVLJ4TH.js";import{a as k}from"./chunk-4DSTCYQZ.js";import{c as re,d as M,f as S,h as E}from"./chunk-XSSXK7EZ.js";import{c as oe,d as ce}from"./chunk-OS55RPVL.js";import{i as se,l as ne,o as ae}from"./chunk-ZANQR5YZ.js";import{$ as y,Ca as g,Da as _,Ea as p,Eb as W,Fa as d,Fb as X,Ga as h,Gb as Z,Ha as V,Ia as z,Ja as q,Jb as ee,K as $,Ka as o,Kb as te,O as D,Ob as ie,P as H,Pa as B,Ra as G,Sa as Y,Ta as C,U as N,Ua as x,V as j,Va as T,_ as P,ca as b,cb as J,db as K,ha as a,ia as u,pb as I,sa as Q,sb as U,ta as m,ua as l,ub as v,v as A,va as s,za as f}from"./chunk-NR2BOPV4.js";var le=(t,n)=>({showTransitionParams:t,hideTransitionParams:n}),pe=t=>({value:"visible",params:t});function me(t,n){if(t&1&&p(0,"span"),t&2){let e=o().$implicit;f("p-message-icon pi "+e.icon),l("data-pc-section","icon")}}function ge(t,n){t&1&&p(0,"CheckIcon"),t&2&&l("data-pc-section","icon")}function _e(t,n){t&1&&p(0,"InfoCircleIcon"),t&2&&l("data-pc-section","icon")}function ue(t,n){t&1&&p(0,"TimesCircleIcon"),t&2&&l("data-pc-section","icon")}function fe(t,n){t&1&&p(0,"ExclamationTriangleIcon"),t&2&&l("data-pc-section","icon")}function de(t,n){if(t&1&&(g(0,"span",10),d(1),m(2,ge,1,1,"CheckIcon",11)(3,_e,1,1,"InfoCircleIcon",11)(4,ue,1,1,"TimesCircleIcon",11)(5,fe,1,1,"ExclamationTriangleIcon",11),h(),_()),t&2){let e=o().$implicit;a(2),s("ngIf",e.severity==="success"),a(),s("ngIf",e.severity==="info"),a(),s("ngIf",e.severity==="error"),a(),s("ngIf",e.severity==="warn")}}function he(t,n){if(t&1&&p(0,"span",14),t&2){let e=o(2).$implicit;s("innerHTML",e.summary,b),l("data-pc-section","summary")}}function ve(t,n){if(t&1&&p(0,"span",15),t&2){let e=o(2).$implicit;s("innerHTML",e.detail,b),l("data-pc-section","detail")}}function ye(t,n){if(t&1&&(d(0),m(1,he,1,2,"span",12)(2,ve,1,2,"span",13),h()),t&2){let e=o().$implicit;a(),s("ngIf",e.summary),a(),s("ngIf",e.detail)}}function be(t,n){if(t&1&&(g(0,"span",18),x(1),_()),t&2){let e=o(2).$implicit;l("data-pc-section","summary"),a(),T(e.summary)}}function Ce(t,n){if(t&1&&(g(0,"span",19),x(1),_()),t&2){let e=o(2).$implicit;l("data-pc-section","detail"),a(),T(e.detail)}}function xe(t,n){if(t&1&&m(0,be,2,2,"span",16)(1,Ce,2,2,"span",17),t&2){let e=o().$implicit;s("ngIf",e.summary),a(),s("ngIf",e.detail)}}function Te(t,n){if(t&1){let e=z();g(0,"button",20),q("click",function(){N(e);let r=o().index,c=o(2);return j(c.removeMessage(r))}),p(1,"TimesIcon",21),_()}if(t&2){let e=o(3);l("aria-label",e.closeAriaLabel)("data-pc-section","closebutton"),a(),s("styleClass","p-message-close-icon"),l("data-pc-section","closeicon")}}function Ie(t,n){if(t&1&&(g(0,"div",5)(1,"div",6),m(2,me,1,3,"span",7)(3,de,6,4,"span",8)(4,ye,3,2,"ng-container",3)(5,xe,2,2,"ng-template",null,1,I)(7,Te,2,4,"button",9),_()()),t&2){let e,i=n.$implicit,r=C(6),c=o(2);f("p-message p-message-"+i.severity),s("@messageAnimation",J(13,pe,K(10,le,c.showTransitionOptions,c.hideTransitionOptions))),a(),l("data-pc-section","wrapper")("id",i.id||null),a(),s("ngIf",i.icon),a(),s("ngIf",!i.icon),a(),s("ngIf",!c.escape)("ngIfElse",r),a(3),s("ngIf",c.closable&&((e=i.closable)!==null&&e!==void 0?e:!0))}}function Me(t,n){if(t&1&&(d(0),m(1,Ie,8,15,"div",4),h()),t&2){let e=o();a(),s("ngForOf",e.messages)}}function Se(t,n){t&1&&V(0)}function Ee(t,n){if(t&1&&(g(0,"div",22)(1,"div",6),m(2,Se,1,0,"ng-container",23),_()()),t&2){let e=o();s("ngClass","p-message p-message-"+e.severity),a(2),s("ngTemplateOutlet",e.contentTemplate)}}var We=(()=>{class t{messageService;el;cd;config;set value(e){this.messages=e,this.startMessageLifes(this.messages)}closable=!0;style;styleClass;enableService=!0;key;escape=!0;severity;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";valueChange=new y;onClose=new y;templates;messages;messageSubscription;clearSubscription;timerSubscriptions=[];contentTemplate;constructor(e,i,r,c){this.messageService=e,this.el=i,this.cd=r,this.config=c}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;default:this.contentTemplate=e.template;break}}),this.messageService&&this.enableService&&!this.contentTemplate&&(this.messageSubscription=this.messageService.messageObserver.subscribe(e=>{if(e){Array.isArray(e)||(e=[e]);let i=e.filter(r=>this.key===r.key);this.messages=this.messages?[...this.messages,...i]:[...i],this.startMessageLifes(i),this.cd.markForCheck()}}),this.clearSubscription=this.messageService.clearObserver.subscribe(e=>{e?this.key===e&&(this.messages=null):this.messages=null,this.cd.markForCheck()}))}hasMessages(){let e=this.el.nativeElement.parentElement;return e&&e.offsetParent?this.contentTemplate!=null||this.messages&&this.messages.length>0:!1}clear(){this.messages=[],this.valueChange.emit(this.messages)}removeMessage(e){let i=this.messages[e];this.messages=this.messages?.filter((r,c)=>c!==e),i&&this.onClose.emit(i),this.valueChange.emit(this.messages)}get icon(){let e=this.severity||(this.hasMessages()?this.messages[0].severity:null);if(this.hasMessages())switch(e){case"success":return"pi-check";case"info":return"pi-info-circle";case"error":return"pi-times";case"warn":return"pi-exclamation-triangle";default:return"pi-info-circle"}return null}get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.timerSubscriptions?.forEach(e=>e.unsubscribe())}startMessageLifes(e){e?.forEach(i=>i.life&&this.startMessageLife(i))}startMessageLife(e){let i=A(e.life).subscribe(()=>{this.messages=this.messages?.filter(r=>r!==e),this.timerSubscriptions=this.timerSubscriptions?.filter(r=>r!==i),this.valueChange.emit(this.messages),this.cd.markForCheck()});this.timerSubscriptions.push(i)}static \u0275fac=function(i){return new(i||t)(u(se,8),u(P),u(U),u(ne))};static \u0275cmp=D({type:t,selectors:[["p-messages"]],contentQueries:function(i,r,c){if(i&1&&B(c,ae,4),i&2){let R;G(R=Y())&&(r.templates=R)}},hostAttrs:[1,"p-element"],inputs:{value:"value",closable:[2,"closable","closable",v],style:"style",styleClass:"styleClass",enableService:[2,"enableService","enableService",v],key:"key",escape:[2,"escape","escape",v],severity:"severity",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{valueChange:"valueChange",onClose:"onClose"},features:[Q],decls:4,vars:8,consts:[["staticMessage",""],["escapeOut",""],["role","alert",1,"p-messages","p-component",3,"ngStyle"],[4,"ngIf","ngIfElse"],["role","alert",3,"class",4,"ngFor","ngForOf"],["role","alert"],[1,"p-message-wrapper"],[3,"class",4,"ngIf"],["class","p-message-icon",4,"ngIf"],["class","p-message-close p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-message-icon"],[4,"ngIf"],["class","p-message-summary",3,"innerHTML",4,"ngIf"],["class","p-message-detail",3,"innerHTML",4,"ngIf"],[1,"p-message-summary",3,"innerHTML"],[1,"p-message-detail",3,"innerHTML"],["class","p-message-summary",4,"ngIf"],["class","p-message-detail",4,"ngIf"],[1,"p-message-summary"],[1,"p-message-detail"],["type","button","pRipple","",1,"p-message-close","p-link",3,"click"],[3,"styleClass"],["role","alert",3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(i,r){if(i&1&&(g(0,"div",2),m(1,Me,2,1,"ng-container",3)(2,Ee,3,2,"ng-template",null,0,I),_()),i&2){let c=C(3);f(r.styleClass),s("ngStyle",r.style),l("aria-atomic",!0)("aria-live","assertive")("data-pc-name","message"),a(),s("ngIf",!r.contentTemplate)("ngIfElse",c)}},dependencies:()=>[W,X,Z,te,ee,oe,w,L,F,O,k],styles:[`@layer primeng{.p-message-wrapper{display:flex;align-items:center}.p-message-close{display:flex;align-items:center;justify-content:center;flex:none}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}.p-messages .p-message.ng-animating{overflow:hidden}}
`],encapsulation:2,data:{animation:[re("messageAnimation",[E(":enter",[S({opacity:0,transform:"translateY(-25%)"}),M("{{showTransitionParams}}")]),E(":leave",[M("{{hideTransitionParams}}",S({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})(),Xe=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=H({type:t});static \u0275inj=$({imports:[ie,ce,w,L,F,O,k]})}return t})();export{We as a,Xe as b};
