import{b as M,p as S,s}from"./chunk-CCYSFV2Z.js";import{Cb as x,Fa as f,Hb as I,I as l,M as r,N as o,O as g,Pa as y,Qa as C,X as p,da as c,ea as a,ha as u,oa as h,qa as d,ua as m,ub as z,xa as v,xb as _,ya as b,zb as D}from"./chunk-EOM5JP26.js";function E(i,N){if(i&1&&(v(0,"span",1),y(1),b()),i&2){let t=f();m(t.styleClass),d("ngClass",t.containerClass())("ngStyle",t.style),c(),C(t.value)}}var O=(()=>{class i{document;el;renderer;iconPos="left";get disabled(){return this._disabled}set disabled(t){this._disabled=t}get size(){return this._size}set size(t){this._size=t,this.initialized&&this.setSizeClasses()}get value(){return this._value}set value(t){if(t!==this._value&&(this._value=t,this.initialized)){let e=document.getElementById(this.id);this._value?(s.hasClass(e,"p-badge-dot")&&s.removeClass(e,"p-badge-dot"),String(this._value).length===1?s.addClass(e,"p-badge-no-gutter"):s.removeClass(e,"p-badge-no-gutter")):!this._value&&!s.hasClass(e,"p-badge-dot")&&s.addClass(e,"p-badge-dot"),e.innerHTML="",this.renderer.appendChild(e,document.createTextNode(this._value))}}severity;_value;initialized=!1;id;_disabled=!1;_size;constructor(t,e,n){this.document=t,this.el=e,this.renderer=n}ngAfterViewInit(){this.id=M()+"_badge";let t=this.el.nativeElement.nodeName.indexOf("-")!=-1?this.el.nativeElement.firstChild:this.el.nativeElement;if(this._disabled)return null;let e=this.document.createElement("span");e.id=this.id,e.className="p-badge p-component",this.severity&&s.addClass(e,"p-badge-"+this.severity),this.setSizeClasses(e),this.value!=null?(this.renderer.appendChild(e,this.document.createTextNode(this.value)),String(this.value).length===1&&s.addClass(e,"p-badge-no-gutter")):s.addClass(e,"p-badge-dot"),s.addClass(t,"p-overlay-badge"),this.renderer.appendChild(t,e),this.initialized=!0}setSizeClasses(t){let e=t??this.document.getElementById(this.id);e&&(this._size?(this._size==="large"&&(s.addClass(e,"p-badge-lg"),s.removeClass(e,"p-badge-xl")),this._size==="xlarge"&&(s.addClass(e,"p-badge-xl"),s.removeClass(e,"p-badge-lg"))):(s.removeClass(e,"p-badge-lg"),s.removeClass(e,"p-badge-xl")))}ngOnDestroy(){this.initialized=!1}static \u0275fac=function(e){return new(e||i)(a(z),a(p),a(u))};static \u0275dir=g({type:i,selectors:[["","pBadge",""]],hostAttrs:[1,"p-element"],inputs:{iconPos:"iconPos",disabled:[0,"badgeDisabled","disabled"],size:"size",value:"value",severity:"severity"}})}return i})(),P=(()=>{class i{styleClass;style;size;severity;value;badgeDisabled=!1;containerClass(){return{"p-badge p-component":!0,"p-badge-no-gutter":this.value!=null&&String(this.value).length===1,"p-badge-lg":this.size==="large","p-badge-xl":this.size==="xlarge","p-badge-info":this.severity==="info","p-badge-success":this.severity==="success","p-badge-warning":this.severity==="warning","p-badge-danger":this.severity==="danger"}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=r({type:i,selectors:[["p-badge"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",size:"size",severity:"severity",value:"value",badgeDisabled:"badgeDisabled"},decls:1,vars:1,consts:[[3,"ngClass","class","ngStyle",4,"ngIf"],[3,"ngClass","ngStyle"]],template:function(e,n){e&1&&h(0,E,2,5,"span",0),e&2&&d("ngIf",!n.badgeDisabled)},dependencies:[_,D,x],styles:[`@layer primeng{.p-badge{display:inline-block;border-radius:10px;text-align:center;padding:0 .5rem}.p-overlay-badge{position:relative}.p-overlay-badge .p-badge{position:absolute;top:0;right:0;transform:translate(50%,-50%);transform-origin:100% 0;margin:0}.p-badge-dot{width:.5rem;min-width:.5rem;height:.5rem;border-radius:50%;padding:0}.p-badge-no-gutter{padding:0;border-radius:50%}}
`],encapsulation:2,changeDetection:0})}return i})(),H=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=o({type:i});static \u0275inj=l({imports:[I,S]})}return i})();export{O as a,P as b,H as c};