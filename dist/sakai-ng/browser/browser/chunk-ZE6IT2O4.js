import{a as N,b as A}from"./chunk-CHVYWF5D.js";import"./chunk-VV2CGQPP.js";import{a as F,b as O}from"./chunk-MKB7KLW2.js";import{a as E}from"./chunk-XQA3FTOI.js";import{a as k}from"./chunk-XDEFSFLT.js";import{a as _}from"./chunk-KSEHUL7S.js";import"./chunk-7IUY3HME.js";import{a as P,b as G}from"./chunk-QNQCDOLG.js";import{a as z,b as W}from"./chunk-QIKBV2MJ.js";import"./chunk-HTTFB544.js";import"./chunk-POQXMLX6.js";import"./chunk-WAACE3S3.js";import{b as B,e as j,f as L,i as R}from"./chunk-P7PTI55Z.js";import"./chunk-XSSXK7EZ.js";import{i as I,k as T}from"./chunk-GWROTBBW.js";import{i as x}from"./chunk-W3XEXHXD.js";import{$a as y,Ea as n,Fa as r,Ga as u,La as h,M as c,Q as w,Qb as C,R as p,Wa as m,_a as f,ab as v,dc as M,gc as b,ja as g,ka as d,xa as S}from"./chunk-3BCS6XGD.js";var J=(()=>{let e=class e{constructor(o,i,t,s){this.layoutService=o,this.router=i,this.authService=t,this.messageService=s,this.valCheck=["remember"]}ngAfterViewInit(){this.loadGoogleScript()}loadGoogleScript(){let o=document.createElement("script");o.src="https://accounts.google.com/gsi/client",o.onload=()=>this.initializeGoogleSignIn(),document.head.appendChild(o)}initializeGoogleSignIn(){google.accounts.id.initialize({client_id:k.clientIdGoogle,callback:this.handleCredentialResponse.bind(this)}),google.accounts.id.renderButton(document.getElementById("googleSignInButton"),{theme:"outline",size:"large",width:"100%"})}handleCredentialResponse(o){let i=o.credential;console.log(1),this.authService.verifyOrCreateUserByIdToken(i).subscribe(t=>{console.log(2),this.authService.setSession(t),console.log(3),this.authService.handleRoleRedirect(),console.log(4)},t=>{this.messageService.add({severity:"error",summary:"Erro",detail:"Erro ao fazer login com Google."}),console.error("Erro no login com Google",t)})}decodeJwtResponse(o){return JSON.parse(atob(o.split(".")[1]))}login(){let o={email:this.email,password:this.password};this.authService.login(o).subscribe(i=>{this.authService.saveToken(i),this.messageService.add({severity:"success",summary:"Sucesso",detail:"Login realizado com sucesso!"}),this.authService.handleRoleRedirect()},i=>{i.status===403?this.messageService.add({severity:"error",summary:"Erro",detail:"Email ou senha inv\xE1lidos."}):this.messageService.add({severity:"error",summary:"Erro",detail:"Erro ao fazer login, tente novamente."})})}createAccount(){this.router.navigate(["/auth/create-account"])}};e.\u0275fac=function(i){return new(i||e)(d(_),d(M),d(E),d(x))},e.\u0275cmp=w({type:e,selectors:[["app-login"]],decls:29,vars:5,consts:[[1,"surface-ground","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"flex","flex-column","align-items-center","justify-content-center"],["src","assets/logo digitalize2.png","alt","Sakai logo",1,"mb-5","w-6rem","flex-shrink-0"],[2,"border-radius","56px","padding","0.3rem","background","linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"],[1,"w-full","surface-card","py-8","px-5","sm:px-8",2,"border-radius","53px"],[1,"text-center","mb-5"],[1,"text-900","text-3xl","font-medium","mb-3"],[1,"text-600","font-medium"],[3,"keydown.enter"],["for","email1",1,"block","text-900","text-xl","font-medium","mb-2"],["id","email1","type","text","placeholder","Endere\xE7o de email","pInputText","",1,"w-full","md:w-30rem","mb-5",2,"padding","1rem",3,"ngModelChange","ngModel"],["for","password1",1,"block","text-900","font-medium","text-xl","mb-2"],["id","password1","placeholder","Senha","styleClass","mb-5","inputStyleClass","w-full p-3 md:w-30rem",3,"ngModelChange","ngModel","toggleMask"],[1,"flex","align-items-center","justify-content-between","mb-5","gap-5"],[1,"flex","align-items-center"],["id","rememberme1","styleClass","mr-2",3,"ngModelChange","binary","ngModel"],["for","rememberme1"],[1,"font-medium","no-underline","ml-2","text-right","cursor-pointer",2,"color","var(--primary-color)"],["pButton","","pRipple","","label","Entrar",1,"w-full","p-3","text-xl",3,"click"],["pButton","","pRipple","","label","Criar Conta",1,"w-full","p-3","text-xl","mt-2",3,"click"],["id","googleSignInButtonContainer",1,"google-signin-container"],["id","googleSignInButton","data-type","standard","data-shape","rectangular","data-theme","outline","data-text","signin_with","data-size","large","data-logo_alignment","left",1,"g_id_signin"]],template:function(i,t){i&1&&(n(0,"div",0)(1,"div",1),u(2,"img",2),n(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),m(7,"Bem-vindo!"),r(),n(8,"span",7),m(9,"Fa\xE7a login para continuar"),r()(),n(10,"div",8),h("keydown.enter",function(){return t.login()}),n(11,"label",9),m(12,"Email"),r(),n(13,"input",10),v("ngModelChange",function(l){return y(t.email,l)||(t.email=l),l}),r(),n(14,"label",11),m(15,"Senha"),r(),n(16,"p-password",12),v("ngModelChange",function(l){return y(t.password,l)||(t.password=l),l}),r(),n(17,"div",13)(18,"div",14)(19,"p-checkbox",15),v("ngModelChange",function(l){return y(t.valCheck,l)||(t.valCheck=l),l}),r(),n(20,"label",16),m(21,"Lembre de mim"),r()(),n(22,"a",17),m(23,"Esqueceu sua senha?"),r()(),n(24,"button",18),h("click",function(){return t.login()}),r(),n(25,"button",19),h("click",function(){return t.createAccount()}),r(),n(26,"div",20),u(27,"div",21),r()()()()()(),u(28,"p-toast")),i&2&&(g(13),f("ngModel",t.email),g(3),f("ngModel",t.password),S("toggleMask",!0),g(3),S("binary",!0),f("ngModel",t.valCheck))},dependencies:[I,P,z,B,j,L,N,F],styles:["[_nghost-%COMP%]     .pi-eye, [_nghost-%COMP%]     .pi-eye-slash{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}.google-button[_ngcontent-%COMP%]{background-color:#db4437;border-color:#db4437}"]});let a=e;return a})();var V=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=p({type:e}),e.\u0275inj=c({imports:[b.forChild([{path:"",component:J}]),b]});let a=e;return a})();var fe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=p({type:e}),e.\u0275inj=c({imports:[C,V,T,G,W,R,A,O]});let a=e;return a})();export{fe as LoginModule};