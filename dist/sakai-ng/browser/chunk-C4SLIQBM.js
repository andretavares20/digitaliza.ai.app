import{a as H,b as J,c as K,d as Q}from"./chunk-KRIXFSIS.js";import{a as k}from"./chunk-6EUBHLVS.js";import{a as A,b as G,c as j,d as R,e as x,f as q,g as U}from"./chunk-QVONU2JU.js";import{a as V,b as z}from"./chunk-CKGIWHXC.js";import{a as O,b as Y}from"./chunk-3Y45ZQMX.js";import{a as L,b as E}from"./chunk-PAKM22Z6.js";import{h as T,i as D,k as P,l as B}from"./chunk-RXT5QTRP.js";import"./chunk-CM56NBY7.js";import"./chunk-YRMYVX5W.js";import"./chunk-XSHLOVSR.js";import"./chunk-KRKZIUB7.js";import{a as F,b as N}from"./chunk-4RWBCLJX.js";import"./chunk-T22KTX4I.js";import"./chunk-YUR3ZCTK.js";import"./chunk-O6DKXQN7.js";import"./chunk-36GPJXQ3.js";import"./chunk-UHFSMSZS.js";import"./chunk-ATZD6M4U.js";import{b as v,d as b,e as I,h as W}from"./chunk-3ZIDJAHB.js";import"./chunk-XSSXK7EZ.js";import"./chunk-CCYSFV2Z.js";import{Ea as S,Hb as w,I as M,M as y,N as c,Pa as a,Ta as p,Ua as m,Va as d,Yb as h,da as r,ea as _,qa as f,xa as n,ya as i,za as C}from"./chunk-EOM5JP26.js";var Z=(()=>{let o=class o{constructor(g){this.countryService=g,this.countries=[],this.filteredCountries=[],this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}ngOnInit(){this.countryService.getCountries().then(g=>{this.countries=g})}searchCountry(g){let s=[],t=g.query;for(let l=0;l<this.countries.length;l++){let e=this.countries[l];e.name.toLowerCase().indexOf(t.toLowerCase())==0&&s.push(e)}this.filteredCountries=s}};o.\u0275fac=function(s){return new(s||o)(_(k))},o.\u0275cmp=y({type:o,selectors:[["ng-component"]],decls:74,vars:17,consts:[[1,"card"],[1,"grid","p-fluid","mt-3"],[1,"field","col-12","md:col-4"],[1,"p-float-label"],["type","text","id","inputtext","pInputText","",3,"ngModelChange","ngModel"],["for","inputtext"],["inputId","autocomplete","field","name",3,"ngModelChange","completeMethod","ngModel","suggestions"],["for","autocomplete"],[1,"p-float-label","p-input-icon-left"],[1,"pi","pi-search"],["type","text","id","lefticon","pInputText","",3,"ngModelChange","ngModel"],["for","lefticon"],[1,"p-float-label","p-input-icon-right"],["type","text","id","righticon","pInputText","",3,"ngModelChange","ngModel"],["for","righticon"],[1,"pi","pi-spin","pi-spinner"],["inputId","calendar",3,"ngModelChange","ngModel"],["for","calendar"],["inputId","chips",3,"ngModelChange","ngModel"],["for","chips"],["inputId","inputmask","mask","99/99/9999",3,"ngModelChange","ngModel"],["for","inputmask"],["inputId","inputnumber",3,"ngModelChange","ngModel"],["for","inputnumber"],[1,"pi","pi-user"],["type","text","inputId","inputgroup","pInputText","",3,"ngModelChange","ngModel"],["for","inputgroup"],["inputId","dropdown","optionLabel","name",3,"ngModelChange","autoDisplayFirst","options","ngModel"],["for","dropdown"],["inputId","multiselect","optionLabel","name",3,"ngModelChange","options","ngModel","filter"],["for","multiselect"],["inputId","textarea","rows","3","cols","30","pInputTextarea","",3,"ngModelChange","ngModel"],["for","textarea"]],template:function(s,t){s&1&&(n(0,"div",0)(1,"h5"),a(2,"Float Label"),i(),n(3,"p"),a(4," All input text components support floating labels by adding ("),n(5,"mark"),a(6,".p-float-label"),i(),a(7,") to wrapper class. "),i(),n(8,"div",1)(9,"div",2)(10,"span",3)(11,"input",4),d("ngModelChange",function(e){return m(t.value1,e)||(t.value1=e),e}),i(),n(12,"label",5),a(13,"InputText"),i()()(),n(14,"div",2)(15,"span",3)(16,"p-autoComplete",6),d("ngModelChange",function(e){return m(t.value2,e)||(t.value2=e),e}),S("completeMethod",function(e){return t.searchCountry(e)}),i(),n(17,"label",7),a(18,"AutoComplete"),i()()(),n(19,"div",2)(20,"span",8),C(21,"i",9),n(22,"input",10),d("ngModelChange",function(e){return m(t.value3,e)||(t.value3=e),e}),i(),n(23,"label",11),a(24,"Left Icon"),i()()(),n(25,"div",2)(26,"span",12)(27,"input",13),d("ngModelChange",function(e){return m(t.value4,e)||(t.value4=e),e}),i(),n(28,"label",14),a(29,"Right Icon"),i(),C(30,"i",15),i()(),n(31,"div",2)(32,"span",3)(33,"p-calendar",16),d("ngModelChange",function(e){return m(t.value5,e)||(t.value5=e),e}),i(),n(34,"label",17),a(35,"Calendar"),i()()(),n(36,"div",2)(37,"span",3)(38,"p-chips",18),d("ngModelChange",function(e){return m(t.value6,e)||(t.value6=e),e}),i(),n(39,"label",19),a(40,"Chips"),i()()(),n(41,"div",2)(42,"span",3)(43,"p-inputMask",20),d("ngModelChange",function(e){return m(t.value7,e)||(t.value7=e),e}),i(),n(44,"label",21),a(45,"InputMask"),i()()(),n(46,"div",2)(47,"span",3)(48,"p-inputNumber",22),d("ngModelChange",function(e){return m(t.value8,e)||(t.value8=e),e}),i(),n(49,"label",23),a(50,"InputNumber"),i()()(),n(51,"div",2)(52,"p-inputGroup")(53,"p-inputGroupAddon"),C(54,"i",24),i(),n(55,"span",3)(56,"input",25),d("ngModelChange",function(e){return m(t.value9,e)||(t.value9=e),e}),i(),n(57,"label",26),a(58,"InputGroup"),i()()()(),n(59,"div",2)(60,"span",3)(61,"p-dropdown",27),d("ngModelChange",function(e){return m(t.value10,e)||(t.value10=e),e}),i(),n(62,"label",28),a(63,"Dropdown"),i()()(),n(64,"div",2)(65,"span",3)(66,"p-multiSelect",29),d("ngModelChange",function(e){return m(t.value11,e)||(t.value11=e),e}),i(),n(67,"label",30),a(68,"MultiSelect"),i()()(),n(69,"div",2)(70,"span",3)(71,"textarea",31),d("ngModelChange",function(e){return m(t.value12,e)||(t.value12=e),e}),i(),n(72,"label",32),a(73,"Textarea"),i()()()()()),s&2&&(r(11),p("ngModel",t.value1),r(5),p("ngModel",t.value2),f("suggestions",t.filteredCountries),r(6),p("ngModel",t.value3),r(5),p("ngModel",t.value4),r(6),p("ngModel",t.value5),r(5),p("ngModel",t.value6),r(5),p("ngModel",t.value7),r(5),p("ngModel",t.value8),r(8),p("ngModel",t.value9),r(5),f("autoDisplayFirst",!1)("options",t.cities),p("ngModel",t.value10),r(5),f("options",t.cities),p("ngModel",t.value11),f("filter",!1),r(5),p("ngModel",t.value12))},dependencies:[v,b,I,A,L,j,F,T,x,P,O,V,H,K],encapsulation:2});let u=o;return u})();var $=(()=>{let o=class o{};o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=c({type:o}),o.\u0275inj=M({imports:[h.forChild([{path:"",component:Z}]),h]});let u=o;return u})();var Be=(()=>{let o=class o{};o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=c({type:o}),o.\u0275inj=M({imports:[w,W,$,G,E,R,D,q,B,U,Y,z,N,J,Q]});let u=o;return u})();export{Be as FloatlabelDemoModule};
