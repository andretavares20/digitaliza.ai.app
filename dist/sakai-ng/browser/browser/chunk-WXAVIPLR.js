import{a as be}from"./chunk-7AGUKVC7.js";import{a as ge,b as _e}from"./chunk-YZWIVBZ6.js";import{a as he,b as Se}from"./chunk-GJ4P24OV.js";import"./chunk-W7RLWDMK.js";import"./chunk-XDEFSFLT.js";import{a as re,d as ne,e as se,k as ce}from"./chunk-TJXO462H.js";import"./chunk-2LAE7PIS.js";import"./chunk-P2EZZUPB.js";import{b as ae}from"./chunk-DMC57GVM.js";import"./chunk-YP5L5ZJC.js";import"./chunk-23JUSY23.js";import"./chunk-7IUY3HME.js";import"./chunk-YSULYWZ2.js";import{b as fe}from"./chunk-QNQCDOLG.js";import"./chunk-BAPKX6ZW.js";import{b as me,d as le,f as pe,g as ve}from"./chunk-OYCDVQJC.js";import{b as ue}from"./chunk-BTQIZ2O4.js";import{b as de}from"./chunk-Y5DHWKXY.js";import"./chunk-AZYOBSQQ.js";import{b as $}from"./chunk-5AQRUOLG.js";import{g as ee,j as oe}from"./chunk-GCSGIUNG.js";import"./chunk-RZPII6OE.js";import"./chunk-4ZTTY72Z.js";import"./chunk-5W5Z53MS.js";import"./chunk-WSOAQXAB.js";import{a as ie,b as te}from"./chunk-QIKBV2MJ.js";import"./chunk-WJSVVUIB.js";import"./chunk-JHG243E7.js";import"./chunk-DNXAUD27.js";import"./chunk-HTTFB544.js";import"./chunk-POQXMLX6.js";import"./chunk-WAACE3S3.js";import{b as J,e as K,f as Q,g as X,h as Y,i as Z}from"./chunk-P7PTI55Z.js";import"./chunk-XSSXK7EZ.js";import{i as G,j as O,k as U}from"./chunk-GWROTBBW.js";import{e as M,i as d,n as z,o as R}from"./chunk-W3XEXHXD.js";import{$a as b,Aa as F,Ea as n,Fa as s,Ga as g,Ka as V,L as N,La as l,M as f,Ma as E,Ob as q,Q as j,Qb as H,R as h,W as y,Wa as a,X as x,Xa as I,_a as _,a as k,ab as C,bb as W,db as P,gc as w,ja as m,ka as S,nb as A,pb as L,r as v,va as B,xa as D}from"./chunk-3BCS6XGD.js";var xe=()=>({width:"450px"});function De(o,i){o&1&&(n(0,"tr")(1,"th",17),a(2,"Nome "),g(3,"p-sortIcon",18),s(),n(4,"th",19),a(5,"Pre\xE7o "),g(6,"p-sortIcon",20),s(),n(7,"th"),a(8,"A\xE7\xF5es"),s()())}function Ee(o,i){if(o&1){let u=V();n(0,"tr")(1,"td"),a(2),s(),n(3,"td"),a(4),A(5,"currency"),s(),n(6,"td")(7,"button",21),l("click",function(){let t=y(u).$implicit,r=E();return x(r.confirmEditServico(t))}),s(),n(8,"button",22),l("click",function(){let t=y(u).$implicit,r=E();return x(r.confirmDeleteServico(t))}),s()()()}if(o&2){let u=i.$implicit;m(2),I(u.name),m(2),I(L(5,2,u.price,"BRL"))}}function Ie(o,i){o&1&&(n(0,"tr")(1,"td",23),a(2,"Nenhum servi\xE7o encontrado."),s()())}var Ce=(()=>{let i=class i{constructor(e,t,r){this.servicoService=e,this.messageService=t,this.confirmationService=r,this.servicos=[],this.servicoDialog=!1,this.servico={},this.submitted=!1}ngOnInit(){this.loadServicos()}loadServicos(){this.servicoService.getServicos().subscribe(e=>{this.servicos=e})}confirmNewServico(){this.confirmationService.confirm({message:"Deseja adicionar um novo servi\xE7o?",header:"Confirma\xE7\xE3o",icon:"pi pi-exclamation-triangle",accept:()=>{this.openNew()}})}confirmEditServico(e){this.confirmationService.confirm({message:`Deseja editar o servi\xE7o ${e.name}?`,header:"Confirma\xE7\xE3o",icon:"pi pi-exclamation-triangle",accept:()=>{this.editServico(e)}})}confirmDeleteServico(e){this.confirmationService.confirm({message:`Deseja excluir o servi\xE7o ${e.name}?`,header:"Confirma\xE7\xE3o",icon:"pi pi-exclamation-triangle",accept:()=>{this.deleteServico(e)}})}confirmSaveServico(){this.confirmationService.confirm({message:this.servico.id?`Deseja salvar as altera\xE7\xF5es no servi\xE7o ${this.servico.name}?`:"Deseja salvar o novo servi\xE7o?",header:"Confirma\xE7\xE3o",icon:"pi pi-exclamation-triangle",accept:()=>{this.saveServico()}})}openNew(){this.servico={},this.submitted=!1,this.servicoDialog=!0}editServico(e){this.servico=k({},e),this.servicoDialog=!0}deleteServico(e){this.servicoService.deleteServico(e.id).subscribe(()=>{this.servicos=this.servicos.filter(t=>t.id!==e.id),this.messageService.add({severity:"success",summary:"Sucesso",detail:"Servi\xE7o deletado com sucesso"})})}saveServico(){this.submitted=!0,this.servico.name.trim()&&(this.servico.id?this.servicoService.updateServico(this.servico).subscribe(e=>{this.servicos[this.findIndexById(e.id)]=e,this.messageService.add({severity:"success",summary:"Sucesso",detail:"Servi\xE7o atualizado com sucesso"})}):this.servicoService.addServico(this.servico).subscribe(e=>{this.servicos=[...this.servicos,e],this.messageService.add({severity:"success",summary:"Sucesso",detail:"Servi\xE7o adicionado com sucesso"})}),this.servicos=[...this.servicos],this.servicoDialog=!1,this.servico={})}findIndexById(e){return this.servicos.findIndex(t=>t.id===e)}hideDialog(){this.servicoDialog=!1,this.submitted=!1}};i.\u0275fac=function(t){return new(t||i)(S(be),S(d),S(M))},i.\u0275cmp=j({type:i,selectors:[["app-servicos"]],features:[W([d,M])],decls:24,vars:10,consts:[[1,"grid"],[1,"col-12"],[1,"card"],["label","Novo Servi\xE7o","icon","pi pi-plus",3,"click"],["responsiveLayout","scroll",3,"value","paginator","rows"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["header","Detalhes do Servi\xE7o",3,"visibleChange","onHide","visible","modal"],[1,"p-fluid"],[1,"p-field"],["for","name"],["id","name","type","text","pInputText","","required","","autofocus","",3,"ngModelChange","ngModel"],["for","price"],["id","price","type","number","pInputText","","required","",3,"ngModelChange","ngModel"],["label","Cancelar","icon","pi pi-times",1,"p-button-text",3,"click"],["label","Salvar","icon","pi pi-check",1,"p-button-text",3,"click"],["pSortableColumn","name"],["field","name"],["pSortableColumn","price"],["field","price"],["pButton","","icon","pi pi-pencil",1,"p-button-rounded","p-button-text",3,"click"],["pButton","","icon","pi pi-trash",1,"p-button-rounded","p-button-danger","p-button-text",3,"click"],["colspan","3"]],template:function(t,r){t&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),a(4,"Gerenciamento de Servi\xE7os"),s(),n(5,"p-button",3),l("click",function(){return r.confirmNewServico()}),s(),n(6,"p-table",4),B(7,De,9,0,"ng-template",5)(8,Ee,9,5,"ng-template",6)(9,Ie,3,0,"ng-template",7),s(),n(10,"p-dialog",8),C("visibleChange",function(c){return b(r.servicoDialog,c)||(r.servicoDialog=c),c}),l("onHide",function(){return r.hideDialog()}),n(11,"div",9)(12,"div",10)(13,"label",11),a(14,"Nome"),s(),n(15,"input",12),C("ngModelChange",function(c){return b(r.servico.name,c)||(r.servico.name=c),c}),s()(),n(16,"div",10)(17,"label",13),a(18,"Pre\xE7o"),s(),n(19,"input",14),C("ngModelChange",function(c){return b(r.servico.price,c)||(r.servico.price=c),c}),s()()(),n(20,"p-footer")(21,"p-button",15),l("click",function(){return r.hideDialog()}),s(),n(22,"p-button",16),l("click",function(){return r.confirmSaveServico()}),s()()()()(),g(23,"p-confirmDialog"),s()),t&2&&(m(6),D("value",r.servicos)("paginator",!0)("rows",10),m(4),F(P(9,xe)),_("visible",r.servicoDialog),D("modal",!0),m(5),_("ngModel",r.servico.name),m(4),_("ngModel",r.servico.price))},dependencies:[J,X,K,Y,Q,z,R,G,O,ie,re,ne,se,he,ge,q]});let o=i;return o})();var Me=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=h({type:i}),i.\u0275inj=f({imports:[w.forChild([{path:"",component:Ce}]),w]});let o=i;return o})();var ye=(()=>{let i=class i{constructor(){this.servicos=[{id:1,name:"Melhorar imagem",price:50},{id:2,name:"Vetoriza\xE7\xE3o",price:100},{id:3,name:"Ajuste fino",price:75}]}getServicos(){return v(this.servicos)}addServico(e){return e.id=this.servicos.length+1,this.servicos.push(e),v(e)}updateServico(e){let t=this.servicos.findIndex(r=>r.id===e.id);return t>-1&&(this.servicos[t]=e),v(e)}deleteServico(e){return this.servicos=this.servicos.filter(t=>t.id!==e),v({success:!0})}};i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();var vi=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=h({type:i}),i.\u0275inj=f({providers:[ye,d],imports:[H,Z,Me,me,$,le,ee,pe,oe,ve,de,ue,te,ce,U,Se,ae,fe,_e]});let o=i;return o})();export{vi as ServicosModule};