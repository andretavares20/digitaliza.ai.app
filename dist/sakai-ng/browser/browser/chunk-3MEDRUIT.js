import{a as i,b as B}from"./chunk-OS55RPVL.js";import{b as I,c,l as S}from"./chunk-ZANQR5YZ.js";import{Ja as H,K as u,Ob as D,P as f,Pb as x,Q as g,T as O,_ as v,a as h,aa as m,ga as L,ia as s,ja as T,la as y,na as E,pa as b,sa as w,ub as p,vb as r}from"./chunk-NR2BOPV4.js";var Z=(()=>{class n{platformId;el;zone;config;renderer;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:I()+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;scrollHandler;resizeListener;interactionInProgress=!1;constructor(t,e,o,l,a,d){this.platformId=t,this.el=e,this.zone=o,this.config=l,this.renderer=a,this.viewContainer=d}ngAfterViewInit(){x(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let e=this.getTarget(this.el.nativeElement);e.addEventListener("focus",this.focusListener),e.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=h(h({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(i.hasClass(t.relatedTarget,"p-tooltip")||i.hasClass(t.relatedTarget,"p-tooltip-text")||i.hasClass(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}onPressEscape(){this.hideOnEscape&&this.deactivate()}activate(){if(!this.interactionInProgress&&(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life"))){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.interactionInProgress=!0}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?i.appendChild(this.container,this.el.nativeElement):i.appendChild(this.container,this.getOption("appendTo")),this.container.style.display="inline-block",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",e=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&this.align()},100):this.align(),i.fadeIn(this.container,250),this.getOption("tooltipZIndex")==="auto"?c.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&c.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t instanceof T){let e=this.viewContainer.createEmbeddedView(t);e.detectChanges(),e.rootNodes.forEach(o=>this.tooltipText.appendChild(o))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){switch(this.getOption("tooltipPosition")){case"top":this.alignTop(),this.isOutOfBounds()&&(this.alignBottom(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"bottom":this.alignBottom(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"left":this.alignLeft(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break;case"right":this.alignRight(),this.isOutOfBounds()&&(this.alignLeft(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break}}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),e=t.left+i.getWindowScrollLeft(),o=t.top+i.getWindowScrollTop();return{left:e,top:o}}else return{left:0,top:0}}alignRight(){this.preAlign("right");let t=this.activeElement,e=this.getHostOffset(),o=e.left+i.getOuterWidth(t),l=e.top+(i.getOuterHeight(t)-i.getOuterHeight(this.container))/2;this.container.style.left=o+this.getOption("positionLeft")+"px",this.container.style.top=l+this.getOption("positionTop")+"px"}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?i.findSingle(this.el.nativeElement,".p-component")||this.el.nativeElement:this.el.nativeElement}alignLeft(){this.preAlign("left");let t=this.getHostOffset(),e=t.left-i.getOuterWidth(this.container),o=t.top+(i.getOuterHeight(this.el.nativeElement)-i.getOuterHeight(this.container))/2;this.container.style.left=e+this.getOption("positionLeft")+"px",this.container.style.top=o+this.getOption("positionTop")+"px"}alignTop(){this.preAlign("top");let t=this.getHostOffset(),e=t.left+(i.getOuterWidth(this.el.nativeElement)-i.getOuterWidth(this.container))/2,o=t.top-i.getOuterHeight(this.container);this.container.style.left=e+this.getOption("positionLeft")+"px",this.container.style.top=o+this.getOption("positionTop")+"px"}alignBottom(){this.preAlign("bottom");let t=this.getHostOffset(),e=t.left+(i.getOuterWidth(this.el.nativeElement)-i.getOuterWidth(this.container))/2,o=t.top+i.getOuterHeight(this.el.nativeElement);this.container.style.left=e+this.getOption("positionLeft")+"px",this.container.style.top=o+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=h(h({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return i.hasClass(t,"p-inputwrapper")?i.findSingle(t,"input"):t.querySelector(".p-component")||t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let e="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?e+" "+this.getOption("tooltipStyleClass"):e}isOutOfBounds(){let t=this.container.getBoundingClientRect(),e=t.top,o=t.left,l=i.getOuterWidth(this.container),a=i.getOuterHeight(this.container),d=i.getViewport();return o+l>d.width||o<0||e<0||e+a>d.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new B(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let e=this.getTarget(this.el.nativeElement);e.removeEventListener("focus",this.focusListener),e.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):i.removeChild(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),this.container&&c.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}static \u0275fac=function(e){return new(e||n)(s(m),s(v),s(E),s(S),s(y),s(b))};static \u0275dir=g({type:n,selectors:[["","pTooltip",""]],hostAttrs:[1,"p-element"],hostBindings:function(e,o){e&1&&H("keydown.escape",function(a){return o.onPressEscape(a)},!1,L)},inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",p],showDelay:[2,"showDelay","showDelay",r],hideDelay:[2,"hideDelay","hideDelay",r],life:[2,"life","life",r],positionTop:[2,"positionTop","positionTop",r],positionLeft:[2,"positionLeft","positionLeft",r],autoHide:[2,"autoHide","autoHide",p],fitContent:[2,"fitContent","fitContent",p],hideOnEscape:[2,"hideOnEscape","hideOnEscape",p],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[w,O]})}return n})(),j=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=f({type:n});static \u0275inj=u({imports:[D]})}return n})();export{Z as a,j as b};
