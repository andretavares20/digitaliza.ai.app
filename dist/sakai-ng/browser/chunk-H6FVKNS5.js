import{a as ue,b as fe}from"./chunk-JGDHNRTM.js";import"./chunk-RMFINLED.js";import{a as te,d as ie,e as oe,k as ne}from"./chunk-KG7YTVHA.js";import"./chunk-NVGTPZR2.js";import"./chunk-ATI5C2A4.js";import{b as re}from"./chunk-SWT3BTO7.js";import"./chunk-J4AIIC6A.js";import"./chunk-Q2ITSG2L.js";import"./chunk-KPXVOOCJ.js";import"./chunk-TNABXVKL.js";import{b as ce}from"./chunk-6Z3H2M45.js";import"./chunk-VLJCDE2P.js";import{b as se,d as le,f as ae,g as pe}from"./chunk-QVONU2JU.js";import{b as me}from"./chunk-CKGIWHXC.js";import{b as de}from"./chunk-3Y45ZQMX.js";import{b as K}from"./chunk-PAKM22Z6.js";import{h as Q,i as X,l as ee}from"./chunk-RXT5QTRP.js";import"./chunk-CM56NBY7.js";import"./chunk-YRMYVX5W.js";import"./chunk-XSHLOVSR.js";import"./chunk-KRKZIUB7.js";import{a as Y,b as Z}from"./chunk-4RWBCLJX.js";import"./chunk-T22KTX4I.js";import"./chunk-YUR3ZCTK.js";import"./chunk-O6DKXQN7.js";import"./chunk-36GPJXQ3.js";import"./chunk-UHFSMSZS.js";import"./chunk-ATZD6M4U.js";import{d as $,e as H,h as J}from"./chunk-3ZIDJAHB.js";import"./chunk-XSSXK7EZ.js";import{A as q,i as w,o as G,y as z}from"./chunk-CCYSFV2Z.js";import{Da as v,Ea as _,Fa as p,H as j,Hb as W,I as S,M as U,N as P,Oa as y,Pa as a,Qa as b,Ra as x,S as c,T as u,Ta as M,Ua as T,Va as F,Wa as L,Ya as N,Yb as V,aa as R,da as m,ea as E,oa as h,p as C,qa as f,ta as B,xa as r,ya as s,yb as A,za as g,zb as O}from"./chunk-EOM5JP26.js";var _e=(()=>{let t=class t{constructor(){this.pedidos=[{id:1,name:"Pedido 1",status:"Pendente",date:"2023-01-01",user:"Usu\xE1rio A",orderNumber:1001,results:[]},{id:2,name:"Pedido 2",status:"Em andamento",date:"2023-02-01",user:"Usu\xE1rio B",orderNumber:1002,results:[]},{id:3,name:"Pedido 3",status:"Conclu\xEDdo",date:"2023-03-01",user:"Usu\xE1rio C",orderNumber:1003,results:[]}]}getPedidos(){return C(this.pedidos)}importResult(o,e){let l=this.pedidos.find(d=>d.id===o);if(l)for(let d of e){console.log("Arquivo importado:",d);let D=URL.createObjectURL(d);l.results.push({name:d.name,objectURL:D})}return C({success:!0})}updatePedidoStatus(o,e){let l=this.pedidos.find(d=>d.id===o);return l&&(l.status=e),C({success:!0})}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var ve=()=>["name","status","date","user","orderNumber"],be=()=>({width:"50vw"});function Ce(i,t){if(i&1){let n=v();r(0,"div",12)(1,"button",13),_("click",function(){c(n);let e=p(),l=y(6);return u(e.clear(l))}),s(),r(2,"span",14),g(3,"i",15),r(4,"input",16),_("input",function(e){c(n);let l=p(),d=y(6);return u(l.onGlobalFilter(d,e))}),s()()()}}function Se(i,t){i&1&&(r(0,"tr")(1,"th",17),a(2,"N\xFAmero do Pedido "),g(3,"p-sortIcon",18),s(),r(4,"th",19),a(5,"Usu\xE1rio "),g(6,"p-sortIcon",20),s(),r(7,"th",21),a(8,"Status "),g(9,"p-sortIcon",22),s(),r(10,"th",23),a(11,"Data "),g(12,"p-sortIcon",24),s(),r(13,"th"),a(14,"A\xE7\xF5es"),s()())}function Pe(i,t){if(i&1){let n=v();r(0,"tr")(1,"td"),a(2),s(),r(3,"td"),a(4),s(),r(5,"td")(6,"p-dropdown",25),F("ngModelChange",function(e){let l=c(n).$implicit;return T(l.status,e)||(l.status=e),u(e)}),_("onChange",function(e){let l=c(n).$implicit,d=p();return u(d.changeStatus(l,e.value))}),s()(),r(7,"td"),a(8),s(),r(9,"td")(10,"button",26),_("click",function(){let e=c(n).$implicit,l=p();return u(l.viewDetails(e))}),s(),r(11,"button",27),_("click",function(){c(n);let e=y(13);return u(e.click())}),s(),r(12,"input",28,1),_("change",function(e){let l=c(n).$implicit,d=p();return u(d.importResults(e,l))}),s()()()}if(i&2){let n=t.$implicit,o=p();m(2),b(n.orderNumber),m(2),b(n.user),m(2),f("options",o.statuses),M("ngModel",n.status),m(2),b(n.date)}}function ye(i,t){i&1&&(r(0,"tr")(1,"td",29),a(2,"Nenhum pedido encontrado."),s()())}function we(i,t){if(i&1&&(r(0,"li"),g(1,"img",33),a(2),s()),i&2){let n=t.$implicit;m(),f("src",n.objectURL,R)("alt",n.name),m(),x(" ",n.name," ")}}function Ie(i,t){if(i&1&&(r(0,"div")(1,"h5"),a(2,"Resultados Importados:"),s(),r(3,"ul"),h(4,we,3,3,"li",32),s()()),i&2){let n=p(3);m(4),f("ngForOf",n.selectedPedido.results)}}function Ee(i,t){if(i&1){let n=v();r(0,"div")(1,"h3"),a(2),s(),r(3,"p"),a(4),s(),r(5,"p"),a(6),s(),r(7,"p"),a(8),s(),r(9,"p"),a(10),s(),h(11,Ie,5,1,"div",30),r(12,"button",31),_("click",function(){c(n);let e=p(2);return u(e.displayDetails=!1)}),s()()}if(i&2){let n=p(2);m(2),b(n.selectedPedido.name),m(2),x("N\xFAmero do Pedido: ",n.selectedPedido.orderNumber,""),m(2),x("Usu\xE1rio: ",n.selectedPedido.user,""),m(2),x("Status: ",n.selectedPedido.status,""),m(2),x("Data: ",n.selectedPedido.date,""),m(),f("ngIf",n.selectedPedido.results&&n.selectedPedido.results.length)}}function Me(i,t){if(i&1&&h(0,Ee,13,6,"div",30),i&2){let n=p();f("ngIf",n.selectedPedido)}}var ge=(()=>{let t=class t{constructor(o,e){this.mockPedidoService=o,this.messageService=e,this.pedidos=[],this.loading=!0,this.statuses=["Pendente","Em andamento","Conclu\xEDdo"],this.selectedPedido=null,this.displayDetails=!1}ngOnInit(){this.loadPedidos()}loadPedidos(){this.mockPedidoService.getPedidos().subscribe(o=>{this.pedidos=o,this.loading=!1})}viewDetails(o){this.selectedPedido=o,this.displayDetails=!0}importResults(o,e){let l=Array.from(o.target.files);this.mockPedidoService.importResult(e.id,l).subscribe(()=>{this.messageService.add({severity:"success",summary:"Sucesso",detail:"Resultado importado com sucesso"}),this.viewDetails(e)},d=>{this.messageService.add({severity:"error",summary:"Erro",detail:"N\xE3o foi poss\xEDvel importar o resultado"})})}changeStatus(o,e){this.mockPedidoService.updatePedidoStatus(o.id,e).subscribe(()=>{o.status=e,this.messageService.add({severity:"success",summary:"Sucesso",detail:"Status do pedido atualizado com sucesso"})},l=>{this.messageService.add({severity:"error",summary:"Erro",detail:"N\xE3o foi poss\xEDvel atualizar o status do pedido"})})}clear(o){o.clear()}onGlobalFilter(o,e){o.filterGlobal(e.target.value,"contains")}};t.\u0275fac=function(e){return new(e||t)(E(_e),E(w))},t.\u0275cmp=U({type:t,selectors:[["app-pedidos"]],features:[L([w])],decls:13,vars:12,consts:[["dt",""],["fileInput",""],[1,"grid"],[1,"col-12"],[1,"card"],["responsiveLayout","scroll",3,"value","paginator","rows","loading","globalFilterFields"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["header","Detalhes do Pedido","appendTo","body",3,"visibleChange","visible","modal","closable"],["pTemplate","content"],[1,"flex","justify-content-between","flex-column","sm:flex-row"],["pButton","","label","Limpar","icon","pi pi-filter-slash",1,"p-button-outlined","mb-2",3,"click"],[1,"p-input-icon-left","mb-2"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Pesquisar...",1,"w-full",3,"input"],["pSortableColumn","orderNumber"],["field","orderNumber"],["pSortableColumn","user"],["field","user"],["pSortableColumn","status"],["field","status"],["pSortableColumn","date"],["field","date"],[3,"ngModelChange","onChange","options","ngModel"],["pButton","","icon","pi pi-eye",1,"p-button-rounded","p-button-text",3,"click"],["pButton","","icon","pi pi-upload",1,"p-button-rounded","p-button-text",3,"click"],["type","file","multiple","",2,"display","none",3,"change"],["colspan","6"],[4,"ngIf"],["pButton","","label","Fechar","icon","pi pi-times",3,"click"],[4,"ngFor","ngForOf"],[1,"thumbnail",3,"src","alt"]],template:function(e,l){if(e&1){let d=v();r(0,"div",2)(1,"div",3)(2,"div",4)(3,"h5"),a(4,"Gerenciamento de Pedidos"),s(),r(5,"p-table",5,0),h(7,Ce,5,0,"ng-template",6)(8,Se,15,0,"ng-template",7)(9,Pe,14,5,"ng-template",8)(10,ye,3,0,"ng-template",9),s()()(),r(11,"p-dialog",10),F("visibleChange",function(I){return c(d),T(l.displayDetails,I)||(l.displayDetails=I),u(I)}),h(12,Me,1,1,"ng-template",11),s()()}e&2&&(m(5),f("value",l.pedidos)("paginator",!0)("rows",10)("loading",l.loading)("globalFilterFields",N(10,ve)),m(6),B(N(11,be)),M("visible",l.displayDetails),f("modal",!0)("closable",!1))},dependencies:[A,O,$,H,G,z,Y,Q,te,ie,oe,ue],styles:[".thumbnail[_ngcontent-%COMP%]{width:100px;height:100px;object-fit:cover;border-radius:8px;margin-right:.5rem}"]});let i=t;return i})();var he=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=P({type:t}),t.\u0275inj=S({imports:[V.forChild([{path:"",component:ge}]),V]});let i=t;return i})();var dt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=P({type:t}),t.\u0275inj=S({imports:[W,J,he,se,K,le,X,ae,ee,pe,de,me,Z,ne,q,fe,re,ce]});let i=t;return i})();export{dt as PedidosModule};