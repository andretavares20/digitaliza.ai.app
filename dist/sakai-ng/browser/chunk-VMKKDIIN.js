import{a as q,c as W}from"./chunk-3ZIDJAHB.js";import{$a as C,Cb as G,Da as y,Ea as b,Fa as g,G as w,H as I,Hb as U,I as B,La as F,M as V,Ma as R,N as E,Na as D,Oa as _,Pa as j,Qa as L,S as c,T as u,W as N,Wa as T,Y as p,da as a,ea as m,mb as O,oa as S,pa as r,qa as l,ua as v,xa as h,xb as A,ya as f,za as M,zb as Q}from"./chunk-EOM5JP26.js";var H=["input"],J=(n,s,e)=>({"p-radiobutton p-component":!0,"p-radiobutton-checked":n,"p-radiobutton-disabled":s,"p-radiobutton-focused":e}),K=(n,s,e)=>({"p-radiobutton-box":!0,"p-highlight":n,"p-disabled":s,"p-focus":e}),X=(n,s,e)=>({"p-radiobutton-label":!0,"p-radiobutton-label-active":n,"p-disabled":s,"p-radiobutton-label-focus":e});function Y(n,s){if(n&1){let e=y();h(0,"label",7),b("click",function(i){c(e);let o=g();return u(o.select(i))}),j(1),f()}if(n&2){let e=g(),t=_(3);v(e.labelStyleClass),l("ngClass",C(6,X,t.checked,e.disabled,e.focused)),r("for",e.inputId)("data-pc-section","label"),a(),L(e.label)}}var Z={provide:q,useExisting:w(()=>P),multi:!0},$=(()=>{class n{accessors=[];add(e,t){this.accessors.push([e,t])}remove(e){this.accessors=this.accessors.filter(t=>t[1]!==e)}select(e){this.accessors.forEach(t=>{this.isSameGroup(t,e)&&t[1]!==e&&t[1].writeValue(e.value)})}isSameGroup(e,t){return e[0].control?e[0].control.root===t.control.control.root&&e[1].name===t.name:!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),P=(()=>{class n{cd;injector;registry;value;formControlName;name;disabled;label;tabindex;inputId;ariaLabelledBy;ariaLabel;style;styleClass;labelStyleClass;onClick=new p;onFocus=new p;onBlur=new p;inputViewChild;onModelChange=()=>{};onModelTouched=()=>{};checked;focused;control;constructor(e,t,i){this.cd=e,this.injector=t,this.registry=i}ngOnInit(){this.control=this.injector.get(W),this.checkName(),this.registry.add(this.control,this)}handleClick(e,t,i){e.preventDefault(),!this.disabled&&(this.select(e),i&&t.focus())}select(e){this.disabled||(this.inputViewChild.nativeElement.checked=!0,this.checked=!0,this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:e,value:this.value}))}writeValue(e){this.checked=e==this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onModelTouched(),this.onBlur.emit(e)}focus(){this.inputViewChild.nativeElement.focus()}ngOnDestroy(){this.registry.remove(this)}checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this.throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}throwNameError(){throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `)}static \u0275fac=function(t){return new(t||n)(m(O),m(N),m($))};static \u0275cmp=V({type:n,selectors:[["p-radioButton"]],viewQuery:function(t,i){if(t&1&&F(H,5),t&2){let o;R(o=D())&&(i.inputViewChild=o.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",formControlName:"formControlName",name:"name",disabled:"disabled",label:"label",tabindex:"tabindex",inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[T([Z])],decls:7,vars:29,consts:[["input",""],[3,"click","ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","radio",3,"focus","blur","checked","disabled","value"],[3,"ngClass"],[1,"p-radiobutton-icon"],[3,"class","ngClass","click",4,"ngIf"],[3,"click","ngClass"]],template:function(t,i){if(t&1){let o=y();h(0,"div",1),b("click",function(d){c(o);let z=_(3);return u(i.handleClick(d,z,!0))}),h(1,"div",2)(2,"input",3,0),b("focus",function(d){return c(o),u(i.onInputFocus(d))})("blur",function(d){return c(o),u(i.onInputBlur(d))}),f()(),h(4,"div",4),M(5,"span",5),f()(),S(6,Y,2,10,"label",6)}t&2&&(v(i.styleClass),l("ngStyle",i.style)("ngClass",C(21,J,i.checked,i.disabled,i.focused)),r("data-pc-name","radiobutton")("data-pc-section","root"),a(),r("data-pc-section","hiddenInputWrapper"),a(),l("checked",i.checked)("disabled",i.disabled)("value",i.value),r("id",i.inputId)("name",i.name)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("tabindex",i.tabindex)("aria-checked",i.checked)("data-pc-section","hiddenInput"),a(2),l("ngClass",C(25,K,i.checked,i.disabled,i.focused)),r("data-pc-section","input"),a(),r("data-pc-section","icon"),a(),l("ngIf",i.label))},dependencies:[A,Q,G],encapsulation:2,changeDetection:0})}return n})(),ue=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=B({imports:[U]})}return n})();export{P as a,ue as b};
