import{a as ne}from"./chunk-IFKN3HSV.js";import{a as oe,b as re}from"./chunk-PU3QCAXE.js";import{b as ie}from"./chunk-7TDONLQ4.js";import"./chunk-CHIKYNPS.js";import{a as N}from"./chunk-CUBNLFTF.js";import"./chunk-LOSE3ZCH.js";import{a as q,d as G,e as W,k as H}from"./chunk-XSC5Y3TF.js";import"./chunk-SRIKW5D3.js";import"./chunk-3A4JX6Z4.js";import{b as J}from"./chunk-2WGBGAFI.js";import"./chunk-T47GYVAA.js";import"./chunk-WW5DZKQB.js";import"./chunk-2SFWHTMH.js";import"./chunk-XKJ3NAA3.js";import{b as te}from"./chunk-KQ6UGMUZ.js";import"./chunk-PMZ4M3EN.js";import{b as K,d as Q,f as X,g as ee}from"./chunk-ONVOLHHI.js";import{b as Z}from"./chunk-H2TENRP2.js";import{b as Y}from"./chunk-JRNAGXHG.js";import"./chunk-ZIPWMH2T.js";import{b as B}from"./chunk-HGSZMTYW.js";import{g as D,j as $}from"./chunk-WKC2MAIV.js";import"./chunk-JTNVWCUD.js";import"./chunk-2HJI5TJ4.js";import"./chunk-ZITDWS4B.js";import"./chunk-M4LR44OC.js";import{a as P,b as O}from"./chunk-EHK26MBQ.js";import"./chunk-DTS6DWDC.js";import"./chunk-XDINQH66.js";import"./chunk-KUAJ4STB.js";import"./chunk-HA5ST3ZF.js";import"./chunk-W4S3GAQZ.js";import"./chunk-F7RNTJJK.js";import{i as z}from"./chunk-ZELHADQZ.js";import"./chunk-XSSXK7EZ.js";import{i as j,k as V}from"./chunk-DPFCPVSA.js";import{e as x,i as C,o as L}from"./chunk-VISTKU2Y.js";import{Ca as U,Fa as r,Ga as n,Ha as m,Jb as R,La as w,Ma as h,N as v,Na as d,R as M,Rb as F,S,Wa as I,X as f,Xa as s,Y as g,Ya as b,cb as T,eb as k,hc as E,ka as c,la as u,vb as A,wa as _,ya as p}from"./chunk-OQCQAMD7.js";var me=()=>["name","email","role","status"];function ue(o,i){if(o&1){let l=w();r(0,"div",10)(1,"button",11),h("click",function(){f(l);let t=d(),a=I(6);return g(t.clear(a))}),n(),r(2,"span",12),m(3,"i",13),r(4,"input",14),h("input",function(t){f(l);let a=d(),y=I(6);return g(a.onGlobalFilter(y,t))}),n()()()}}function pe(o,i){o&1&&(r(0,"tr")(1,"th",15),s(2,"Nome "),m(3,"p-sortIcon",16),n(),r(4,"th",17),s(5,"Email "),m(6,"p-sortIcon",18),n(),r(7,"th",19),s(8,"Fun\xE7\xE3o "),m(9,"p-sortIcon",20),n(),r(10,"th",21),s(11,"Status "),m(12,"p-sortIcon",22),n(),r(13,"th"),s(14,"A\xE7\xF5es"),n()())}function de(o,i){o&1&&(r(0,"td"),s(1,"ATIVO"),n())}function fe(o,i){o&1&&(r(0,"td"),s(1,"INATIVO"),n())}function ge(o,i){if(o&1){let l=w();r(0,"tr")(1,"td"),s(2),n(),r(3,"td"),s(4),n(),r(5,"td"),s(6),n(),_(7,de,2,0,"td",23)(8,fe,2,0,"td",23),r(9,"td")(10,"button",24),h("click",function(){let t=f(l).$implicit,a=d();return g(a.editUser(t))}),n(),r(11,"button",25),h("click",function(){let t=f(l).$implicit,a=d();return g(a.confirmStatusChange(t))}),n()()()}if(o&2){let l=i.$implicit,e=d();c(2),b(l.name),c(2),b(l.email),c(2),b(l.role),c(),p("ngIf",l.active),c(),p("ngIf",!l.active),c(3),U(e.getStatusButtonClass(l)+" p-button-rounded p-button-text"),p("icon",e.getStatusButtonIcon(l))}}function he(o,i){o&1&&(r(0,"tr")(1,"td",26),s(2,"Nenhum usu\xE1rio encontrado."),n()())}function ve(o,i){o&1&&(r(0,"div",27)(1,"div",28),m(2,"p-progressSpinner",29),r(3,"p"),s(4,"Aguarde enquanto processamos a a\xE7\xE3o..."),n()()())}var se=(()=>{let i=class i{constructor(e,t,a,y,ce){this.userService=e,this.authService=t,this.messageService=a,this.confirmationService=y,this.cdr=ce,this.usuarios=[],this.loading=!0,this.showLoading=!1}ngOnInit(){this.checkUserRole()}checkUserRole(){let e=this.authService.getRole();console.log("rolecheckuser: ",e),e==="ROLE_ADMIN"?this.loadUsers():(this.messageService.add({severity:"error",summary:"Acesso Negado",detail:"Voc\xEA n\xE3o tem permiss\xE3o para visualizar esta p\xE1gina."}),this.loading=!1)}loadUsers(){this.loading=!0,this.userService.getUsers().subscribe(e=>{this.usuarios=e,this.loading=!1,this.showLoading=!1,console.log(this.usuarios)},e=>{this.loading=!1,this.showLoading=!1,this.messageService.add({severity:"error",summary:"Erro",detail:"N\xE3o foi poss\xEDvel carregar a lista de usu\xE1rios."})})}editUser(e){let t=e.role==="USER"?"ADMIN":"USER";this.confirmationService.confirm({message:`Tem certeza que deseja alterar o papel do usu\xE1rio ${e.name} para ${t}?`,header:"Confirma\xE7\xE3o de Papel",icon:"pi pi-exclamation-triangle",accept:()=>{this.showLoading=!0,this.userService.updateUserRole(e.id,t).subscribe(()=>{e.role=t,console.log("role1:",t),this.showLoading=!1,this.messageService.add({severity:"success",summary:"Sucesso",detail:"Papel do usu\xE1rio atualizado com sucesso."})},a=>{console.log("role2:",t),this.showLoading=!1,this.messageService.add({severity:"error",summary:"Erro",detail:"Erro ao atualizar o papel do usu\xE1rio."})})}})}confirmStatusChange(e){let t=e.status==="Ativo"?"Inativo":"Ativo";this.confirmationService.confirm({message:`Tem certeza que deseja alterar o status do usu\xE1rio ${e.name} para ${t}?`,header:"Confirma\xE7\xE3o de Status",icon:"pi pi-exclamation-triangle",accept:()=>{this.showLoading=!0,this.toggleUserStatus(e)}})}toggleUserStatus(e){let t=e.status==="Ativo"?"Inativo":"Ativo";this.userService.updateUserStatus(e.id,t).subscribe(()=>{e.status=t,this.showLoading=!1,this.messageService.add({severity:"success",summary:"Sucesso",detail:"Status do usu\xE1rio atualizado com sucesso."})},a=>{this.showLoading=!1,this.messageService.add({severity:"error",summary:"Erro",detail:"N\xE3o foi poss\xEDvel atualizar o status do usu\xE1rio."})})}confirmRoleChange(e){let t=e.role==="Admin"?"User":"Admin";this.confirmationService.confirm({message:`Tem certeza que deseja alterar a fun\xE7\xE3o do usu\xE1rio ${e.name} para ${t}?`,header:"Confirma\xE7\xE3o de Fun\xE7\xE3o",icon:"pi pi-exclamation-triangle",accept:()=>{this.showLoading=!0,this.changeUserRole(e)}})}changeUserRole(e){let t=e.role==="Admin"?"User":"Admin";this.userService.updateUserRole(e.id,t).subscribe(()=>{e.role=t,this.showLoading=!1,this.messageService.add({severity:"success",summary:"Sucesso",detail:"Fun\xE7\xE3o do usu\xE1rio atualizada com sucesso."})},a=>{this.showLoading=!1,this.messageService.add({severity:"error",summary:"Erro",detail:"N\xE3o foi poss\xEDvel atualizar a fun\xE7\xE3o do usu\xE1rio."})})}getStatusButtonIcon(e){return e.status==="Ativo"?"pi pi-ban":"pi pi-check"}getStatusButtonClass(e){return e.status==="Ativo"?"p-button-danger":"p-button-success"}getRoleButtonIcon(e){return e.role==="Admin"?"pi pi-user":"pi pi-user-edit"}getRoleButtonClass(e){return e.role==="Admin"?"p-button-warning":"p-button-info"}clear(e){e.clear()}onGlobalFilter(e,t){e.filterGlobal(t.target.value,"contains")}};i.\u0275fac=function(t){return new(t||i)(u(ne),u(N),u(C),u(x),u(A))},i.\u0275cmp=M({type:i,selectors:[["app-usuarios"]],features:[T([C,x])],decls:13,vars:7,consts:[["dt",""],[1,"grid"],[1,"col-12"],[1,"card"],["responsiveLayout","scroll",3,"value","paginator","rows","loading","globalFilterFields"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["class","overlay",4,"ngIf"],[1,"flex","justify-content-between","flex-column","sm:flex-row"],["pButton","","label","Limpar","icon","pi pi-filter-slash",1,"p-button-outlined","mb-2",3,"click"],[1,"p-input-icon-left","mb-2"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Pesquisar...",1,"w-full",3,"input"],["pSortableColumn","name"],["field","name"],["pSortableColumn","email"],["field","email"],["pSortableColumn","role"],["field","role"],["pSortableColumn","status"],["field","status"],[4,"ngIf"],["pButton","","icon","pi pi-pencil",1,"p-button-rounded","p-button-text",3,"click"],["pButton","",3,"click","icon"],["colspan","5"],[1,"overlay"],[1,"spinner-container"],["strokeWidth","4"]],template:function(t,a){t&1&&(r(0,"div",1)(1,"div",2)(2,"div",3)(3,"h5"),s(4,"Lista de Usu\xE1rios"),n(),r(5,"p-table",4,0),_(7,ue,5,0,"ng-template",5)(8,pe,15,0,"ng-template",6)(9,ge,12,8,"ng-template",7)(10,he,3,0,"ng-template",8),n()()(),_(11,ve,5,0,"div",9),m(12,"p-confirmDialog"),n()),t&2&&(c(5),p("value",a.usuarios)("paginator",!0)("rows",10)("loading",a.loading)("globalFilterFields",k(6,me)),c(6),p("ngIf",a.showLoading))},dependencies:[R,L,j,P,q,G,W,oe],styles:[".p-button-rounded.p-button-warning[_ngcontent-%COMP%]{color:var(--orange-500);background-color:var(--surface-a);border-color:var(--orange-500)}.p-button-rounded.p-button-warning[_ngcontent-%COMP%]:hover{background-color:var(--orange-100);border-color:var(--orange-500)}.p-button-rounded.p-button-info[_ngcontent-%COMP%]{color:var(--cyan-500);background-color:var(--surface-a);border-color:var(--cyan-500)}.p-button-rounded.p-button-info[_ngcontent-%COMP%]:hover{background-color:var(--cyan-100);border-color:var(--cyan-500)}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:#0009;z-index:999;display:flex;justify-content:center;align-items:center}.spinner-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#fff;font-size:1.2rem}"]});let o=i;return o})();var le=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=S({type:i}),i.\u0275inj=v({imports:[E.forChild([{path:"",component:se}]),E]});let o=i;return o})();var Ye=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=S({type:i}),i.\u0275inj=v({imports:[F,z,le,K,B,Q,D,X,$,ee,Y,Z,O,H,V,ie,J,te,re]});let o=i;return o})();export{Ye as UsuariosModule};
