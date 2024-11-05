import{a as l}from"./chunk-E6LOM6XZ.js";import{a as h}from"./chunk-XDEFSFLT.js";import{J as n,M as a,Qb as o,Sb as c}from"./chunk-NR2BOPV4.js";var $=(()=>{let i=class i{constructor(t,e){this.http=t,this.authService=e,this.apiUrl=`${h.apiUrl}/admin/users`,this.clientUrl=`${h.apiUrl}/client/users`}getHeaders(){let t=this.authService.getToken();return new o({"Content-Type":"application/json",Authorization:`Bearer ${t}`})}getUsers(){let t=this.getHeaders();return this.http.get(`${this.apiUrl}`,{headers:t})}updateUserStatus(t,e){let s=this.getHeaders();return this.http.put(`${this.clientUrl}/${t}/status`,{status:e},{headers:s})}updateUserRole(t,e){let s=this.getHeaders();return this.http.put(`${this.apiUrl}/${t}/role`,{role:e},{headers:s})}register(t){let e=this.getHeaders();return this.http.post(`${this.clientUrl}`,t,{headers:e})}checkUsernameAvailability(t){let e=this.getHeaders();return this.http.get(`${this.clientUrl}/check-username?username=${t}`,{headers:e})}checkEmailAvailability(t){let e=this.getHeaders();return this.http.get(`${this.clientUrl}/check-email?email=${t}`,{headers:e})}checkTelephoneAvailability(t){let e=this.getHeaders();return this.http.get(`${this.clientUrl}/check-telephone?telephone=${t}`,{headers:e})}};i.\u0275fac=function(e){return new(e||i)(a(c),a(l))},i.\u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"});let r=i;return r})();export{$ as a};