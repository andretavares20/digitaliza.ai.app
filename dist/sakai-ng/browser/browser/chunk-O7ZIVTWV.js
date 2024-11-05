import{a as A,b as F}from"./chunk-UZLPIQVA.js";import"./chunk-LM27STZU.js";import{a as G,b as D}from"./chunk-IB33HFXP.js";import{a as E}from"./chunk-E6LOM6XZ.js";import{a as k}from"./chunk-XDEFSFLT.js";import{a as _}from"./chunk-PUQCP6Q3.js";import"./chunk-IWB2Y4TF.js";import{a as P,b as N}from"./chunk-CNPNJMPW.js";import{a as W,b as z}from"./chunk-B5EANUUN.js";import"./chunk-IVI3XLNH.js";import"./chunk-KQVLJ4TH.js";import"./chunk-4DSTCYQZ.js";import{b as T,e as j,f as L,i as R}from"./chunk-LKAC5SOC.js";import"./chunk-XSSXK7EZ.js";import{i as I,k as B}from"./chunk-OS55RPVL.js";import{i as x}from"./chunk-ZANQR5YZ.js";import{Ca as n,Da as r,Ea as g,Ja as f,K as c,O as w,Ob as C,P as p,Ua as m,Ya as h,Za as y,_a as v,bc as M,ec as b,ha as u,ia as d,va as S}from"./chunk-NR2BOPV4.js";var J=(()=>{let e=class e{constructor(t,i,o,s){this.layoutService=t,this.router=i,this.authService=o,this.messageService=s,this.valCheck=["remember"]}ngAfterViewInit(){this.loadGoogleScript()}loadGoogleScript(){let t=document.createElement("script");t.src="https://accounts.google.com/gsi/client",t.onload=()=>this.initializeGoogleSignIn(),document.head.appendChild(t)}initializeGoogleSignIn(){google.accounts.id.initialize({client_id:k.clientIdGoogle,callback:this.handleCredentialResponse.bind(this)}),google.accounts.id.renderButton(document.getElementById("googleSignInButton"),{theme:"outline",size:"large",width:"100%"})}handleCredentialResponse(t){let i=this.decodeJwtResponse(t.credential);this.authService.setSession(t.credential),this.authService.handleRoleRedirect()}decodeJwtResponse(t){return JSON.parse(atob(t.split(".")[1]))}login(){let t={email:this.email,password:this.password};this.authService.login(t).subscribe(i=>{this.authService.saveToken(i),this.messageService.add({severity:"success",summary:"Sucesso",detail:"Login realizado com sucesso!"}),this.authService.handleRoleRedirect()},i=>{i.status===403?this.messageService.add({severity:"error",summary:"Erro",detail:"Email ou senha inv\xE1lidos."}):this.messageService.add({severity:"error",summary:"Erro",detail:"Erro ao fazer login, tente novamente."})})}createAccount(){this.router.navigate(["/auth/create-account"])}};e.\u0275fac=function(i){return new(i||e)(d(_),d(M),d(E),d(x))},e.\u0275cmp=w({type:e,selectors:[["app-login"]],decls:29,vars:5,consts:[[1,"surface-ground","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"flex","flex-column","align-items-center","justify-content-center"],["src","assets/logo digitalize2.png","alt","Sakai logo",1,"mb-5","w-6rem","flex-shrink-0"],[2,"border-radius","56px","padding","0.3rem","background","linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"],[1,"w-full","surface-card","py-8","px-5","sm:px-8",2,"border-radius","53px"],[1,"text-center","mb-5"],[1,"text-900","text-3xl","font-medium","mb-3"],[1,"text-600","font-medium"],[3,"keydown.enter"],["for","email1",1,"block","text-900","text-xl","font-medium","mb-2"],["id","email1","type","text","placeholder","Endere\xE7o de email","pInputText","",1,"w-full","md:w-30rem","mb-5",2,"padding","1rem",3,"ngModelChange","ngModel"],["for","password1",1,"block","text-900","font-medium","text-xl","mb-2"],["id","password1","placeholder","Senha","styleClass","mb-5","inputStyleClass","w-full p-3 md:w-30rem",3,"ngModelChange","ngModel","toggleMask"],[1,"flex","align-items-center","justify-content-between","mb-5","gap-5"],[1,"flex","align-items-center"],["id","rememberme1","styleClass","mr-2",3,"ngModelChange","binary","ngModel"],["for","rememberme1"],[1,"font-medium","no-underline","ml-2","text-right","cursor-pointer",2,"color","var(--primary-color)"],["pButton","","pRipple","","label","Entrar",1,"w-full","p-3","text-xl",3,"click"],["pButton","","pRipple","","label","Criar Conta",1,"w-full","p-3","text-xl","mt-2",3,"click"],["id","googleSignInButtonContainer",1,"google-signin-container"],["id","googleSignInButton","data-type","standard","data-shape","rectangular","data-theme","outline","data-text","signin_with","data-size","large","data-logo_alignment","left",1,"g_id_signin"]],template:function(i,o){i&1&&(n(0,"div",0)(1,"div",1),g(2,"img",2),n(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),m(7,"Bem-vindo!"),r(),n(8,"span",7),m(9,"Fa\xE7a login para continuar"),r()(),n(10,"div",8),f("keydown.enter",function(){return o.login()}),n(11,"label",9),m(12,"Email"),r(),n(13,"input",10),v("ngModelChange",function(l){return y(o.email,l)||(o.email=l),l}),r(),n(14,"label",11),m(15,"Senha"),r(),n(16,"p-password",12),v("ngModelChange",function(l){return y(o.password,l)||(o.password=l),l}),r(),n(17,"div",13)(18,"div",14)(19,"p-checkbox",15),v("ngModelChange",function(l){return y(o.valCheck,l)||(o.valCheck=l),l}),r(),n(20,"label",16),m(21,"Lembre de mim"),r()(),n(22,"a",17),m(23,"Esqueceu sua senha?"),r()(),n(24,"button",18),f("click",function(){return o.login()}),r(),n(25,"button",19),f("click",function(){return o.createAccount()}),r(),n(26,"div",20),g(27,"div",21),r()()()()()(),g(28,"p-toast")),i&2&&(u(13),h("ngModel",o.email),u(3),h("ngModel",o.password),S("toggleMask",!0),u(3),S("binary",!0),h("ngModel",o.valCheck))},dependencies:[I,P,W,T,j,L,A,G],styles:["[_nghost-%COMP%]     .pi-eye, [_nghost-%COMP%]     .pi-eye-slash{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}.google-button[_ngcontent-%COMP%]{background-color:#db4437;border-color:#db4437}"]});let a=e;return a})();var V=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=p({type:e}),e.\u0275inj=c({imports:[b.forChild([{path:"",component:J}]),b]});let a=e;return a})();var he=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=p({type:e}),e.\u0275inj=c({imports:[C,V,B,N,z,R,F,D]});let a=e;return a})();export{he as LoginModule};