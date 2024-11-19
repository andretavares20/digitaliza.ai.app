import{Cb as U,K as y,La as j,M as P,N as p,R as k,S as u,V as G,Z as M,a,aa as T,b as l,ba as E,bb as _,ka as o,n as Z,na as R,q as X,sa as w,sb as ee,t as Y,ta as h,u as K,ub as te,wa as J,wb as B,yb as F,za as Q,zb as f}from"./chunk-3BCS6XGD.js";var ce=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(o(R),o(T))},e.\u0275dir=u({type:e});let t=e;return t})(),de=(()=>{let e=class e extends ce{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=M(e)))(s||e)}})(),e.\u0275dir=u({type:e,features:[h]});let t=e;return t})(),q=new p("");var Ae={provide:q,useExisting:y(()=>he),multi:!0};function Me(){let t=U()?U().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Ee=new p(""),he=(()=>{let e=class e extends ce{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Me())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(o(R),o(T),o(Ee,8))},e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&j("input",function(d){return s._handleInput(d.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(d){return s._compositionEnd(d.target.value)})},features:[_([Ae]),h]});let t=e;return t})();function we(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}var fe=new p(""),Fe=new p("");function Ie(t){return we(t.value)?{required:!0}:null}function ie(t){return null}function pe(t){return t!=null}function ge(t){return ee(t)?X(t):t}function me(t){let e={};return t.forEach(n=>{e=n!=null?a(a({},e),n):e}),Object.keys(e).length===0?null:e}function ve(t,e){return e.map(n=>n(t))}function Se(t){return!t.validate}function ye(t){return t.map(e=>Se(e)?e:n=>e.validate(n))}function Oe(t){if(!t)return null;let e=t.filter(pe);return e.length==0?null:function(n){return me(ve(n,e))}}function _e(t){return t!=null?Oe(ye(t)):null}function xe(t){if(!t)return null;let e=t.filter(pe);return e.length==0?null:function(n){let i=ve(n,e).map(ge);return K(i).pipe(Y(me))}}function Ce(t){return t!=null?xe(ye(t)):null}function ne(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ne(t){return t._rawValidators}function Pe(t){return t._rawAsyncValidators}function H(t){return t?Array.isArray(t)?t:[t]:[]}function S(t,e){return Array.isArray(t)?t.includes(e):t===e}function re(t,e){let n=H(e);return H(t).forEach(r=>{S(n,r)||n.push(r)}),n}function se(t,e){return H(e).filter(n=>!S(t,n))}var O=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=_e(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ce(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},L=class extends O{get formDirective(){return null}get path(){return null}},A=class extends O{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},$=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},ke={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Et=l(a({},ke),{"[class.ng-submitted]":"isSubmitted"}),wt=(()=>{let e=class e extends ${constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(o(A,2))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&Q("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[h]});let t=e;return t})();var C="VALID",I="INVALID",g="PENDING",V="DISABLED",v=class{},x=class extends v{constructor(e,n){super(),this.value=e,this.source=n}},D=class extends v{constructor(e,n){super(),this.pristine=e,this.source=n}},b=class extends v{constructor(e,n){super(),this.touched=e,this.source=n}},m=class extends v{constructor(e,n){super(),this.status=e,this.source=n}};function Ge(t){return(N(t)?t.validators:t)||null}function Te(t){return Array.isArray(t)?_e(t):t||null}function Re(t,e){return(N(e)?e.asyncValidators:t)||null}function je(t){return Array.isArray(t)?Ce(t):t||null}function N(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var W=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=F(()=>this.statusReactive()),this.statusReactive=w(void 0),this._pristine=F(()=>this.pristineReactive()),this.pristineReactive=w(!0),this._touched=F(()=>this.touchedReactive()),this.touchedReactive=w(!1),this._events=new Z,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return f(this.statusReactive)}set status(e){f(()=>this.statusReactive.set(e))}get valid(){return this.status===C}get invalid(){return this.status===I}get pending(){return this.status==g}get disabled(){return this.status===V}get enabled(){return this.status!==V}get pristine(){return f(this.pristineReactive)}set pristine(e){f(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return f(this.touchedReactive)}set touched(e){f(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(re(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(re(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(se(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(se(e,this._rawAsyncValidators))}hasValidator(e){return S(this._rawValidators,e)}hasAsyncValidator(e){return S(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(l(a({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new b(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),n&&e.emitEvent!==!1&&this._events.next(new b(!1,i))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(l(a({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new D(!1,i))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),n&&e.emitEvent!==!1&&this._events.next(new D(!0,i))}markAsPending(e={}){this.status=g;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new m(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(l(a({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=V,this.errors=null,this._forEachChild(r=>{r.disable(l(a({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new x(this.value,i)),this._events.next(new m(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(l(a({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=C,this._forEachChild(i=>{i.enable(l(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(l(a({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===C||this.status===g)&&this._runAsyncValidator(i,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new x(this.value,n)),this._events.next(new m(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(l(a({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?V:C}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=g,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let i=ge(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new m(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,i)}_initObservables(){this.valueChanges=new E,this.statusChanges=new E}_calculateStatus(){return this._allControlsDisabled()?V:this.errors?I:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(g)?g:this._anyControlsHaveStatus(I)?I:C}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new D(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new b(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){N(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Te(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=je(this._rawAsyncValidators)}};var Ve=new p("CallSetDisabledState",{providedIn:"root",factory:()=>z}),z="always";function Be(t,e){return[...e.path,t]}function Ue(t,e,n=z){Le(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),$e(t,e),qe(t,e),We(t,e),He(t,e)}function oe(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function He(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Le(t,e){let n=Ne(t);e.validator!==null?t.setValidators(ne(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Pe(t);e.asyncValidator!==null?t.setAsyncValidators(ne(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();oe(e._rawValidators,r),oe(e._rawAsyncValidators,r)}function $e(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&De(t,e)})}function We(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&De(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function De(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function qe(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function ze(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Ze(t){return Object.getPrototypeOf(t.constructor)===de}function Xe(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(s=>{s.constructor===he?n=s:Ze(s)?i=s:r=s}),r||i||n||null}function ae(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function le(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ye=class extends W{constructor(e=null,n,i){super(Ge(n),Re(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),N(n)&&(n.nonNullable||n.initialValueIsDefault)&&(le(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ae(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ae(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){le(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ke={provide:A,useExisting:y(()=>Je)},ue=Promise.resolve(),Je=(()=>{let e=class e extends A{constructor(i,r,s,c,d,be){super(),this._changeDetectorRef=d,this.callSetDisabledState=be,this.control=new Ye,this._registered=!1,this.name="",this.update=new E,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Xe(this,c)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),ze(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ue(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){ue.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,s=r!==0&&B(r);ue.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Be(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(o(L,9),o(fe,10),o(Fe,10),o(q,10),o(te,8),o(Ve,8))},e.\u0275dir=u({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[_([Ke]),h,G]});let t=e;return t})();var Qe={provide:q,useExisting:y(()=>et),multi:!0},et=(()=>{let e=class e extends de{writeValue(i){let r=i??"";this.setProperty("value",r)}registerOnChange(i){this.onChange=r=>{i(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=M(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,s){r&1&&j("input",function(d){return s.onChange(d.target.value)})("blur",function(){return s.onTouched()})},features:[_([Qe]),h]});let t=e;return t})();var tt=(()=>{let e=class e{constructor(){this._validator=ie}ngOnChanges(i){if(this.inputName in i){let r=this.normalizeInput(i[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):ie,this._onChange&&this._onChange()}}validate(i){return this._validator(i)}registerOnValidatorChange(i){this._onChange=i}enabled(i){return i!=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=u({type:e,features:[G]});let t=e;return t})();var it={provide:fe,useExisting:y(()=>nt),multi:!0};var nt=(()=>{let e=class e extends tt{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=B,this.createValidator=i=>Ie}enabled(i){return i}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=M(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,s){r&2&&J("required",s._enabled?"":null)},inputs:{required:"required"},features:[_([it]),h]});let t=e;return t})();var rt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=k({type:e}),e.\u0275inj=P({});let t=e;return t})();var It=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Ve,useValue:i.callSetDisabledState??z}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=k({type:e}),e.\u0275inj=P({imports:[rt]});let t=e;return t})();export{q as a,he as b,fe as c,A as d,wt as e,Je as f,et as g,nt as h,It as i};
