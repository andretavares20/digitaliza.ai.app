import{a as e}from"./chunk-OS55RPVL.js";import{Ja as v,K as h,Ob as f,P as d,Q as c,_ as C,ia as a,la as m,na as u,sa as g,ub as l}from"./chunk-NR2BOPV4.js";var b=(()=>{class s{el;renderer;zone;constructor(t,i,n){this.el=t,this.renderer=i,this.zone=n}selector;set enterClass(t){this._enterClass=t,console.warn("enterClass is deprecated, use enterFromClass instead")}get enterClass(){return this._enterClass}enterFromClass;enterActiveClass;enterToClass;set leaveClass(t){this._leaveClass=t,console.warn("leaveClass is deprecated, use leaveFromClass instead")}get leaveClass(){return this._leaveClass}leaveFromClass;leaveActiveClass;leaveToClass;hideOnOutsideClick;toggleClass;hideOnEscape;eventListener;documentClickListener;documentKeydownListener;target;enterListener;leaveListener;animating;_enterClass;_leaveClass;clickListener(){this.target=this.resolveTarget(),this.toggleClass?this.toggle():this.target.offsetParent===null?this.enter():this.leave()}toggle(){e.hasClass(this.target,this.toggleClass)?e.removeClass(this.target,this.toggleClass):e.addClass(this.target,this.toggleClass)}enter(){this.enterActiveClass?this.animating||(this.animating=!0,this.enterActiveClass==="slidedown"&&(this.target.style.height="0px",e.removeClass(this.target,"hidden"),this.target.style.maxHeight=this.target.scrollHeight+"px",e.addClass(this.target,"hidden"),this.target.style.height=""),e.addClass(this.target,this.enterActiveClass),(this.enterClass||this.enterFromClass)&&e.removeClass(this.target,this.enterClass||this.enterFromClass),this.enterListener=this.renderer.listen(this.target,"animationend",()=>{e.removeClass(this.target,this.enterActiveClass),this.enterToClass&&e.addClass(this.target,this.enterToClass),this.enterListener&&this.enterListener(),this.enterActiveClass==="slidedown"&&(this.target.style.maxHeight=""),this.animating=!1})):((this.enterClass||this.enterFromClass)&&e.removeClass(this.target,this.enterClass||this.enterFromClass),this.enterToClass&&e.addClass(this.target,this.enterToClass)),this.hideOnOutsideClick&&this.bindDocumentClickListener(),this.hideOnEscape&&this.bindDocumentKeydownListener()}leave(){this.leaveActiveClass?this.animating||(this.animating=!0,e.addClass(this.target,this.leaveActiveClass),(this.leaveClass||this.leaveFromClass)&&e.removeClass(this.target,this.leaveClass||this.leaveFromClass),this.leaveListener=this.renderer.listen(this.target,"animationend",()=>{e.removeClass(this.target,this.leaveActiveClass),this.leaveToClass&&e.addClass(this.target,this.leaveToClass),this.leaveListener&&this.leaveListener(),this.animating=!1})):((this.leaveClass||this.leaveFromClass)&&e.removeClass(this.target,this.leaveClass||this.leaveFromClass),this.leaveToClass&&e.addClass(this.target,this.leaveToClass)),this.hideOnOutsideClick&&this.unbindDocumentClickListener(),this.hideOnEscape&&this.unbindDocumentKeydownListener()}resolveTarget(){if(this.target)return this.target;switch(this.selector){case"@next":return this.el.nativeElement.nextElementSibling;case"@prev":return this.el.nativeElement.previousElementSibling;case"@parent":return this.el.nativeElement.parentElement;case"@grandparent":return this.el.nativeElement.parentElement.parentElement;default:return document.querySelector(this.selector)}}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.el.nativeElement.ownerDocument,"click",t=>{!this.isVisible()||getComputedStyle(this.target).getPropertyValue("position")==="static"?this.unbindDocumentClickListener():this.isOutsideClick(t)&&this.leave()}))}bindDocumentKeydownListener(){this.documentKeydownListener||this.zone.runOutsideAngular(()=>{this.documentKeydownListener=this.renderer.listen(this.el.nativeElement.ownerDocument,"keydown",t=>{let{key:i,keyCode:n,which:r,type:o}=t;(!this.isVisible()||getComputedStyle(this.target).getPropertyValue("position")==="static")&&this.unbindDocumentKeydownListener(),this.isVisible()&&i==="Escape"&&n===27&&r===27&&this.leave()})})}isVisible(){return this.target.offsetParent!==null}isOutsideClick(t){return!this.el.nativeElement.isSameNode(t.target)&&!this.el.nativeElement.contains(t.target)&&!this.target.contains(t.target)}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}unbindDocumentKeydownListener(){this.documentKeydownListener&&(this.documentKeydownListener(),this.documentKeydownListener=null)}ngOnDestroy(){this.target=null,this.eventListener&&this.eventListener(),this.unbindDocumentClickListener(),this.unbindDocumentKeydownListener()}static \u0275fac=function(i){return new(i||s)(a(C),a(m),a(u))};static \u0275dir=c({type:s,selectors:[["","pStyleClass",""]],hostAttrs:[1,"p-element"],hostBindings:function(i,n){i&1&&v("click",function(o){return n.clickListener(o)})},inputs:{selector:[0,"pStyleClass","selector"],enterClass:"enterClass",enterFromClass:"enterFromClass",enterActiveClass:"enterActiveClass",enterToClass:"enterToClass",leaveClass:"leaveClass",leaveFromClass:"leaveFromClass",leaveActiveClass:"leaveActiveClass",leaveToClass:"leaveToClass",hideOnOutsideClick:[2,"hideOnOutsideClick","hideOnOutsideClick",l],toggleClass:"toggleClass",hideOnEscape:[2,"hideOnEscape","hideOnEscape",l]},features:[g]})}return s})(),F=(()=>{class s{static \u0275fac=function(i){return new(i||s)};static \u0275mod=d({type:s});static \u0275inj=h({imports:[f]})}return s})();export{b as a,F as b};