import{a as I,b as D}from"./chunk-SWT3BTO7.js";import"./chunk-J4AIIC6A.js";import"./chunk-Q2ITSG2L.js";import"./chunk-KPXVOOCJ.js";import"./chunk-TNABXVKL.js";import"./chunk-36GPJXQ3.js";import"./chunk-UHFSMSZS.js";import"./chunk-ATZD6M4U.js";import{h as T}from"./chunk-3ZIDJAHB.js";import"./chunk-XSSXK7EZ.js";import{i as f,o as M}from"./chunk-CCYSFV2Z.js";import{Ea as u,Fa as g,Hb as C,I as p,M as h,N as s,Pa as c,Sa as x,Wa as U,Yb as F,da as r,ea as v,oa as d,qa as m,xa as n,ya as a,yb as S,zb as y}from"./chunk-EOM5JP26.js";function B(t,e){if(t&1&&(n(0,"li"),c(1),a()),t&2){let l=e.$implicit;r(),x("",l.name," - ",l.size," bytes")}}function O(t,e){if(t&1&&(n(0,"ul"),d(1,B,2,2,"li",7),a()),t&2){let l=g(2);r(),m("ngForOf",l.uploadedFiles)}}function b(t,e){if(t&1&&d(0,O,2,1,"ul",6),t&2){let l=g();m("ngIf",l.uploadedFiles.length)}}var N=(()=>{let e=class e{constructor(o){this.messageService=o,this.uploadedFiles=[]}onUpload(o){for(let i of o.files)this.uploadedFiles.push(i);this.messageService.add({severity:"info",summary:"Success",detail:"File Uploaded"})}onBasicUpload(){this.messageService.add({severity:"info",summary:"Success",detail:"File Uploaded with Basic Mode"})}};e.\u0275fac=function(i){return new(i||e)(v(f))},e.\u0275cmp=h({type:e,selectors:[["ng-component"]],features:[U([f])],decls:10,vars:3,consts:[[1,"grid"],[1,"col-12"],[1,"card"],["name","demo[]","url","./upload.php","accept","image/*",3,"onUpload","multiple","maxFileSize"],["pTemplate","content"],["mode","basic","name","demo[]","url","./upload.php","accept","image/*",3,"onUpload","maxFileSize"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(i,_){i&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),c(4,"Advanced"),a(),n(5,"p-fileUpload",3),u("onUpload",function(w){return _.onUpload(w)}),d(6,b,1,1,"ng-template",4),a(),n(7,"h5"),c(8,"Basic"),a(),n(9,"p-fileUpload",5),u("onUpload",function(){return _.onBasicUpload()}),a()()()()),i&2&&(r(5),m("multiple",!0)("maxFileSize",1e6),r(4),m("maxFileSize",1e6))},dependencies:[S,y,I,M],encapsulation:2});let t=e;return t})();var j=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=s({type:e}),e.\u0275inj=p({imports:[F.forChild([{path:"",component:N}]),F]});let t=e;return t})();var X=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=s({type:e}),e.\u0275inj=p({imports:[C,T,j,D]});let t=e;return t})();export{X as FileDemoModule};
