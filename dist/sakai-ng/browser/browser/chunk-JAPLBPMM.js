import{a as we,b as be}from"./chunk-ILASPGTF.js";import{a as ge,b as xe}from"./chunk-YZWIVBZ6.js";import{a as fe,b as _e}from"./chunk-GJ4P24OV.js";import"./chunk-W7RLWDMK.js";import{b as ue}from"./chunk-MKB7KLW2.js";import"./chunk-XDEFSFLT.js";import{a as te,d as ie,e as oe,k as ne}from"./chunk-TJXO462H.js";import"./chunk-2LAE7PIS.js";import"./chunk-P2EZZUPB.js";import{b as re}from"./chunk-DMC57GVM.js";import"./chunk-YP5L5ZJC.js";import"./chunk-23JUSY23.js";import"./chunk-7IUY3HME.js";import"./chunk-YSULYWZ2.js";import{b as ce}from"./chunk-QNQCDOLG.js";import"./chunk-BAPKX6ZW.js";import{b as ae,d as le,f as se,g as me}from"./chunk-OYCDVQJC.js";import{b as pe}from"./chunk-BTQIZ2O4.js";import{b as de}from"./chunk-Y5DHWKXY.js";import"./chunk-AZYOBSQQ.js";import{b as K}from"./chunk-5AQRUOLG.js";import{g as Q,j as ee}from"./chunk-GCSGIUNG.js";import"./chunk-RZPII6OE.js";import"./chunk-4ZTTY72Z.js";import"./chunk-5W5Z53MS.js";import"./chunk-WSOAQXAB.js";import{a as X,b as Y}from"./chunk-QIKBV2MJ.js";import"./chunk-WJSVVUIB.js";import{a as Z,b as J}from"./chunk-JHG243E7.js";import"./chunk-DNXAUD27.js";import"./chunk-HTTFB544.js";import"./chunk-POQXMLX6.js";import"./chunk-WAACE3S3.js";import{i as H}from"./chunk-P7PTI55Z.js";import"./chunk-XSSXK7EZ.js";import{i as G,k as W}from"./chunk-GWROTBBW.js";import{e as P,i as I,o as z}from"./chunk-W3XEXHXD.js";import{$a as B,Aa as A,Ea as a,Fa as n,Ga as x,Hb as R,Ib as q,Ka as v,La as g,M as y,Ma as p,Nb as U,Q as O,Qb as $,R as S,Va as E,W as c,Wa as d,X as u,Xa as b,Ya as C,_a as F,ab as L,bb as j,db as M,f as Se,fa as V,gc as N,ja as s,ka as w,nb as k,pb as D,va as f,xa as m}from"./chunk-3BCS6XGD.js";var he=Se(we());var Ee=()=>["orderNumber","userName","status","orderDate"],Pe=()=>({width:"50vw"});function Ie(e,i){if(e&1){let o=v();a(0,"div",13)(1,"button",14),g("click",function(){c(o);let t=p(),l=E(6);return u(t.clear(l))}),n(),a(2,"span",15),x(3,"i",16),a(4,"input",17),g("input",function(t){c(o);let l=p(),_=E(6);return u(l.onGlobalFilter(_,t))}),n()()()}}function Te(e,i){e&1&&(a(0,"tr")(1,"th",18),d(2,"N\xFAmero do Pedido "),x(3,"p-sortIcon",19),n(),a(4,"th",20),d(5,"Usu\xE1rio "),x(6,"p-sortIcon",21),n(),a(7,"th",22),d(8,"Status "),x(9,"p-sortIcon",23),n(),a(10,"th",24),d(11,"Data "),x(12,"p-sortIcon",25),n(),a(13,"th"),d(14,"A\xE7\xF5es"),n()())}function Me(e,i){if(e&1){let o=v();a(0,"button",32),g("click",function(){c(o);let t=p().$implicit,l=p();return u(l.confirmAction(t))}),n()}}function ke(e,i){if(e&1){let o=v();a(0,"button",33),g("click",function(){c(o),p();let t=E(15);return u(t.click())}),n()}}function De(e,i){if(e&1){let o=v();a(0,"button",34),g("click",function(){c(o);let t=p().$implicit,l=p();return u(l.downloadResult(t))}),n()}}function Ne(e,i){if(e&1){let o=v();a(0,"tr")(1,"td"),d(2),n(),a(3,"td"),d(4),n(),a(5,"td"),d(6),n(),a(7,"td"),d(8),k(9,"date"),n(),a(10,"td")(11,"button",26),g("click",function(){let t=c(o).$implicit,l=p();return u(l.viewDetails(t))}),n(),f(12,Me,1,0,"button",27)(13,ke,1,0,"button",28),a(14,"input",29,1),g("change",function(t){let l=c(o).$implicit,_=p();return u(_.confirmImportResults(t,l))}),n(),a(16,"button",30),g("click",function(){let t=c(o).$implicit,l=p();return u(l.downloadCustomerFiles(t))}),n(),f(17,De,1,0,"button",31),n()()}if(e&2){let o=i.$implicit;s(2),b(o.id),s(2),b(o.userName),s(2),b(o.status),s(2),b(D(9,7,o.orderDate,"dd/MM/yyyy")),s(4),m("ngIf",o.status==="PAGAMENTO_APROVADO"),s(),m("ngIf",o.status==="EM_ANDAMENTO"),s(4),m("ngIf",o.status==="CONCLUIDO")}}function Oe(e,i){e&1&&(a(0,"tr")(1,"td",35),d(2,"Nenhum pedido encontrado."),n()())}function Ve(e,i){e&1&&(a(0,"div",36)(1,"div",37),x(2,"p-progressSpinner",38),a(3,"p"),d(4,"Aguarde enquanto o pedido \xE9 conclu\xEDdo..."),n()()())}function Ae(e,i){if(e&1&&(a(0,"li"),d(1),n()),e&2){let o=i.$implicit;s(),b(o.name)}}function Fe(e,i){if(e&1&&(a(0,"li")(1,"a",41),d(2),n(),a(3,"ul"),f(4,Ae,2,1,"li",40),n()()),e&2){let o=i.$implicit;s(),m("href",o.fileUrl,V),s(),b(o.fileName),s(2),m("ngForOf",o.services)}}function Be(e,i){if(e&1&&(a(0,"div")(1,"h5"),d(2,"Arquivos Enviados:"),n(),a(3,"ul"),f(4,Fe,5,3,"li",40),n()()),e&2){let o=p(3);s(4),m("ngForOf",o.selectedPedido.files)}}function Le(e,i){if(e&1&&(a(0,"div")(1,"h3"),d(2),n(),a(3,"p"),d(4),n(),a(5,"p"),d(6),n(),a(7,"p"),d(8),n(),a(9,"p"),d(10),k(11,"date"),n(),f(12,Be,5,1,"div",39),n()),e&2){let o=p(2);s(2),b(o.selectedPedido.name),s(2),C("N\xFAmero do Pedido: ",o.selectedPedido.id,""),s(2),C("Usu\xE1rio: ",o.selectedPedido.userName,""),s(2),C("Status: ",o.selectedPedido.status,""),s(2),C("Data: ",D(11,6,o.selectedPedido.orderDate,"dd/MM/yyyy HH:mm:ss"),""),s(2),m("ngIf",o.selectedPedido.files&&o.selectedPedido.files.length)}}function je(e,i){if(e&1&&f(0,Le,13,9,"div",39),e&2){let o=p();m("ngIf",o.selectedPedido)}}var Ce=(()=>{let i=class i{constructor(r,t,l){this.pedidoService=r,this.messageService=t,this.confirmationService=l,this.pedidos=[],this.loading=!0,this.selectedPedido=null,this.displayDetails=!1,this.showLoading=!1}ngOnInit(){this.loadPedidos()}loadPedidos(){this.pedidoService.getAllOrders().subscribe(r=>{this.pedidos=r,this.loading=!1},r=>{this.messageService.add({severity:"error",summary:"Erro",detail:"Erro ao carregar pedidos"}),this.loading=!1})}viewDetails(r){this.selectedPedido=r,this.displayDetails=!0}confirmAction(r){this.confirmationService.confirm({message:`Tem certeza que deseja iniciar o pedido ${r.id}?`,header:"Confirma\xE7\xE3o",icon:"pi pi-exclamation-triangle",accept:()=>{this.changeStatus(r,"EM_ANDAMENTO")}})}changeStatus(r,t){t==="EM_ANDAMENTO"&&r.status==="PAGAMENTO_APROVADO"?(this.showLoading=!0,this.pedidoService.updateOrderStatus(r.id,{status:t}).subscribe(()=>{r.status=t,this.showLoading=!1,this.messageService.add({severity:"success",summary:"Sucesso",detail:"Pedido colocado em andamento"})},l=>{this.showLoading=!1,this.messageService.add({severity:"error",summary:"Erro",detail:"N\xE3o foi poss\xEDvel atualizar o status do pedido"})})):this.messageService.add({severity:"error",summary:"Erro",detail:"A\xE7\xE3o inv\xE1lida."})}confirmImportResults(r,t){let l=Array.from(r.target.files);this.confirmationService.confirm({message:`Voc\xEA est\xE1 prestes a importar os seguintes arquivos para o pedido ${t.id}: 
${l.map(_=>_.name).join(", ")}`,header:"Confirma\xE7\xE3o de Importa\xE7\xE3o",icon:"pi pi-exclamation-triangle",accept:()=>{this.importResults(l,t)}})}importResults(r,t){this.showLoading=!0,this.pedidoService.uploadOrderResults(t.id,r).subscribe(()=>{this.messageService.add({severity:"success",summary:"Sucesso",detail:"Resultados importados com sucesso"}),t.status="CONCLUIDO",this.showLoading=!1,this.loadPedidos()},l=>{this.showLoading=!1,this.messageService.add({severity:"error",summary:"Erro",detail:"Erro ao importar os resultados"})})}downloadCustomerFiles(r){this.pedidoService.downloadCustomerFilesAsZip(r.id).subscribe(t=>{let l=new Blob([t],{type:"application/zip"}),_=window.URL.createObjectURL(l),h=document.createElement("a");h.href=_,h.download=`pedido_${r.id}_arquivos.zip`,document.body.appendChild(h),h.click(),document.body.removeChild(h)},t=>{this.messageService.add({severity:"error",summary:"Erro",detail:"Erro ao baixar os arquivos do cliente"})})}downloadResult(r){this.pedidoService.downloadOrderResult(r.id).subscribe(t=>{let l=new Blob([t],{type:"application/octet-stream"});(0,he.saveAs)(l,"resultado_"+r.id+".pdf")},t=>{this.messageService.add({severity:"error",summary:"Erro",detail:"Erro ao baixar o resultado do pedido."})})}};i.\u0275fac=function(t){return new(t||i)(w(be),w(I),w(P))},i.\u0275cmp=O({type:i,selectors:[["app-pedidos"]],features:[j([I,P])],decls:15,vars:13,consts:[["dt",""],["fileInput",""],[1,"grid"],[1,"col-12"],[1,"card"],["responsiveLayout","scroll",3,"value","paginator","rows","loading","globalFilterFields"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["class","loading-overlay",4,"ngIf"],["header","Detalhes do Pedido","appendTo","body",3,"visibleChange","visible","modal","closable"],["pTemplate","content"],[1,"flex","justify-content-between","flex-column","sm:flex-row"],["pButton","","label","Limpar","icon","pi pi-filter-slash","pTooltip","Limpar filtros","tooltipPosition","top","accesskey","l",1,"p-button-outlined","mb-2",3,"click"],[1,"p-input-icon-left","mb-2"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Pesquisar...","aria-label","Pesquisar pedidos","accesskey","p",1,"w-full",3,"input"],["pSortableColumn","orderNumber"],["field","orderNumber"],["pSortableColumn","userName"],["field","userName"],["pSortableColumn","status"],["field","status"],["pSortableColumn","orderDate"],["field","orderDate"],["pButton","","icon","pi pi-eye","pTooltip","Ver detalhes do pedido","aria-label","Ver detalhes",1,"p-button-rounded","p-button-text",3,"click"],["pButton","","label","Iniciar","icon","pi pi-play","class","p-button-rounded p-button-text","pTooltip","Iniciar pedido","tooltipPosition","top","aria-label","Iniciar pedido",3,"click",4,"ngIf"],["pButton","","icon","pi pi-upload","class","p-button-rounded p-button-text","pTooltip","Importar resultados","aria-label","Importar resultados",3,"click",4,"ngIf"],["type","file","multiple","",2,"display","none",3,"change"],["pButton","","icon","pi pi-download","pTooltip","Baixar arquivos do cliente","aria-label","Baixar arquivos do cliente",1,"p-button-rounded","p-button-text",3,"click"],["pButton","","icon","pi pi-file","class","p-button-rounded p-button-text","pTooltip","Baixar resultado importado","aria-label","Baixar resultado importado",3,"click",4,"ngIf"],["pButton","","label","Iniciar","icon","pi pi-play","pTooltip","Iniciar pedido","tooltipPosition","top","aria-label","Iniciar pedido",1,"p-button-rounded","p-button-text",3,"click"],["pButton","","icon","pi pi-upload","pTooltip","Importar resultados","aria-label","Importar resultados",1,"p-button-rounded","p-button-text",3,"click"],["pButton","","icon","pi pi-file","pTooltip","Baixar resultado importado","aria-label","Baixar resultado importado",1,"p-button-rounded","p-button-text",3,"click"],["colspan","5"],[1,"loading-overlay"],[1,"spinner-container"],["strokeWidth","4"],[4,"ngIf"],[4,"ngFor","ngForOf"],["target","_blank",3,"href"]],template:function(t,l){if(t&1){let _=v();a(0,"div",2)(1,"div",3)(2,"div",4)(3,"h5"),d(4,"Gerenciamento de Pedidos"),n(),a(5,"p-table",5,0),f(7,Ie,5,0,"ng-template",6)(8,Te,15,0,"ng-template",7)(9,Ne,18,10,"ng-template",8)(10,Oe,3,0,"ng-template",9),n()()(),f(11,Ve,5,0,"div",10),a(12,"p-dialog",11),L("visibleChange",function(T){return c(_),B(l.displayDetails,T)||(l.displayDetails=T),u(T)}),f(13,je,1,1,"ng-template",12),n(),x(14,"p-confirmDialog"),n()}t&2&&(s(5),m("value",l.pedidos)("paginator",!0)("rows",10)("loading",l.loading)("globalFilterFields",M(11,Ee)),s(6),m("ngIf",l.showLoading),s(),A(M(12,Pe)),F("visible",l.displayDetails),m("modal",!0)("closable",!0))},dependencies:[R,q,z,G,X,te,ie,oe,fe,Z,ge,U],styles:['@charset "UTF-8";.thumbnail[_ngcontent-%COMP%]{width:100px;height:100px;object-fit:cover;border-radius:8px;margin-right:.5rem;transition:transform .3s ease}.thumbnail[_ngcontent-%COMP%]:hover{transform:scale(1.05)}button[_ngcontent-%COMP%]:focus{outline:2px solid #007ad9;outline-offset:2px;background-color:#e0f7ff;box-shadow:0 0 5px #007ad980}button[_ngcontent-%COMP%]:hover{background-color:#007ad9;color:#fff;transition:background-color .2s ease,color .2s ease}.loading-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:9999}.spinner-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;color:#fff}']});let e=i;return e})();var ye=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=S({type:i}),i.\u0275inj=y({imports:[N.forChild([{path:"",component:Ce}]),N]});let e=i;return e})();var St=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=S({type:i}),i.\u0275inj=y({imports:[$,H,ye,ae,K,le,Q,se,ee,me,de,pe,Y,ne,W,_e,re,ce,J,ue,xe]});let e=i;return e})();export{St as PedidosModule};
