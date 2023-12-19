"use strict";(self.webpackChunkconnections=self.webpackChunkconnections||[]).push([[969],{8969:(mt,T,e)=>{e.r(T),e.d(T,{AuthModule:()=>et});var f=e(6814),s=e(6223),S=e(2296),p=e(5683),L=e(617),U=e(2032),N=e(7472),b=e(5940),h=e(5959),u=e(7483),a=e(4221),F=e(708),C=e(4664),_=e(7398),A=e(6306),y=e(2096);const g=(0,a.R7)({source:"Connections Registration Api",events:{"Sign Up Success":(0,a.uZ)(),"Sign Up Failure":(0,a.Ky)(),"Sign In Success":(0,a.uZ)(),"Sign In Failure":(0,a.Ky)()}}),Z=(0,a.R7)({source:"Sign In Page",events:{"Sign In":(0,a.Ky)()}}),v=(0,a.R7)({source:"Sign Up Page",events:{"Sign Up":(0,a.Ky)()}});var t=e(5879),J=e(9595),x=e(2313),E=e(6254);let P=(()=>{class n{constructor(i,r,o,w,st){this.actions$=i,this.connectionsHttpService=r,this.matSnackBarService=o,this.router=w,this.localStorageService=st,this.signUpEffect$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(v.signUp),(0,C.w)(({userSignInData:d})=>this.connectionsHttpService.signUp(d).pipe((0,_.U)(c=>c.ok?(this.router.navigate(["/","auth","signin"],{replaceUrl:!0}).catch(()=>null),g.signUpSuccess()):g.signUpFailure({errorMessage:"Something went wrong"})),(0,A.K)(({message:c})=>(this.matSnackBarService.open(c),(0,y.of)(g.signUpFailure({errorMessage:c})))))))),this.signInEffect$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(Z.signIn),(0,C.w)(({userSignInData:d})=>this.connectionsHttpService.signIn(d).pipe((0,_.U)(c=>{if(c.ok&&c.body){const at=JSON.parse(c.body);return this.localStorageService.setPrivateCredentials(at),this.localStorageService.setItem("email",d.email),this.router.navigate(["/","home"],{replaceUrl:!0}).catch(()=>null),g.signInSuccess()}return this.localStorageService.clear(),g.signInFailure({errorMessage:"Something went wrong"})}),(0,A.K)(({message:c})=>(this.localStorageService.clear(),this.matSnackBarService.open(c),(0,y.of)(g.signInFailure({errorMessage:c}))))))))}static#t=this.\u0275fac=function(r){return new(r||n)(t.LFG(u.eX),t.LFG(J.a),t.LFG(x.s),t.LFG(h.F0),t.LFG(E.n))};static#n=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac})}return n})();const Y=(0,a.Lq)({isLoading:!1,errorMessage:null},(0,a.on)(v.signUp,n=>({...n,isLoading:!0})),(0,a.on)(g.signUpSuccess,n=>({...n,isLoading:!1,errorMessage:null})),(0,a.on)(g.signUpFailure,(n,{errorMessage:m})=>({...n,errorMessage:m,isLoading:!1})),(0,a.on)(Z.signIn,n=>({...n,isLoading:!0})),(0,a.on)(g.signInSuccess,n=>({...n,isLoading:!1,errorMessage:null})),(0,a.on)(g.signInFailure,(n,{errorMessage:m})=>({...n,errorMessage:m,isLoading:!1}))),q=(0,a.ZF)("auth"),Q=(0,a.P1)(q,n=>n.isLoading);let I=(()=>{class n{constructor(i){this.store=i,this.isLoading$=this.store.select(Q)}signUp(i){this.store.dispatch(v.signUp({userSignInData:i}))}signIn(i){this.store.dispatch(Z.signIn({userSignInData:i}))}static#t=this.\u0275fac=function(r){return new(r||n)(t.LFG(a.yh))};static#n=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac})}return n})();var O=e(7351),l=e(9073);function $(n,m){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Email is required "),t.qZA())}function R(n,m){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Your email is not valid "),t.qZA())}function D(n,m){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Password is required "),t.qZA())}function G(n,m){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const i=t.oxw();let r;t.xp6(1),t.hij(" ",null!==(r=i.password.getError("passwordStrength"))&&void 0!==r?r:"password must be at least 8 characters"," ")}}const K=function(){return["/","auth","signup"]};let X=(()=>{class n{constructor(i,r){this.fb=i,this.authFacade=r,this.isLoading$=this.authFacade.isLoading$,this.signUpForm=this.fb.group({email:new s.NI("",l.Tt),password:new s.NI("",l.dZ)}),this.email=this.signUpForm.controls.email,this.password=this.signUpForm.controls.password}onSubmit(){const{email:i,password:r}=this.signUpForm.getRawValue();this.authFacade.signIn({email:i??"",password:r??""})}static#t=this.\u0275fac=function(r){return new(r||n)(t.Y36(s.qu),t.Y36(I))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["cn-sign-in-form"]],decls:20,vars:9,consts:[[1,"sign-in"],[1,"sign-in__title","mat-h-2"],[3,"formGroup","ngSubmit"],["formControlName","email","placeholder","email@mail.com","matInput","","type","text"],[4,"ngIf"],["formControlName","password","placeholder","password","matInput","","type","text"],[1,"sign-in__submit",3,"isDisabled","isLoading$"],["mat-flat-button","",1,"sign-in__button",3,"routerLink"]],template:function(r,o){1&r&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Sign in"),t.qZA(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(4,"mat-form-field")(5,"mat-label"),t._uU(6,"Email"),t.qZA(),t._UZ(7,"input",3),t.YNc(8,$,2,0,"mat-error",4),t.YNc(9,R,2,0,"mat-error",4),t.qZA(),t.TgZ(10,"mat-form-field")(11,"mat-label"),t._uU(12,"Password"),t.qZA(),t._UZ(13,"input",5),t.YNc(14,D,2,0,"mat-error",4),t.YNc(15,G,2,1,"mat-error",4),t.qZA(),t.TgZ(16,"cn-button-with-spinner",6),t._uU(17,"Sign in"),t.qZA()(),t.TgZ(18,"button",7),t._uU(19,"Don't have an account?"),t.qZA()()),2&r&&(t.xp6(3),t.Q6J("formGroup",o.signUpForm),t.xp6(5),t.Q6J("ngIf",o.email.hasError("required")),t.xp6(1),t.Q6J("ngIf",o.email.hasError("email")),t.xp6(5),t.Q6J("ngIf",o.password.hasError("required")),t.xp6(1),t.Q6J("ngIf",(o.password.hasError("passwordStrength")||o.password.hasError("minlength"))&&!o.password.hasError("required")),t.xp6(1),t.Q6J("isDisabled",o.signUpForm.invalid)("isLoading$",o.isLoading$),t.xp6(2),t.Q6J("routerLink",t.DdM(8,K)))},dependencies:[f.O5,h.rH,p.KE,p.hX,p.TO,U.Nt,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,S.lW,F.R],styles:["[_nghost-%COMP%]     .mat-mdc-form-field{width:100%;margin-top:.5rem}.sign-in[_ngcontent-%COMP%]{max-width:30rem;margin:auto;margin-top:3rem;padding:1rem;margin-top:5rem}.sign-in__title[_ngcontent-%COMP%]{text-align:center}.sign-in__submit[_ngcontent-%COMP%]{display:block;width:-moz-fit-content;width:fit-content;margin:auto}.sign-in__button[_ngcontent-%COMP%]{display:block;margin:auto;margin-top:3rem}"],changeDetection:0})}return n})(),z=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["cn-sign-in-page"]],decls:1,vars:0,template:function(r,o){1&r&&t._UZ(0,"cn-sign-in-form")},dependencies:[X],changeDetection:0})}return n})();function B(n,m){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Name is required "),t.qZA())}function H(n,m){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Name cannot contain special characters or numbers "),t.qZA())}function W(n,m){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Your name is too long"),t.qZA())}function V(n,m){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Email is required "),t.qZA())}function k(n,m){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Your email is not valid "),t.qZA())}function tt(n,m){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Password is required "),t.qZA())}function nt(n,m){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const i=t.oxw();let r;t.xp6(1),t.hij(" ",null!==(r=i.password.getError("passwordStrength"))&&void 0!==r?r:"password must be at least 8 characters"," ")}}const rt=function(){return["/","auth","signin"]};let it=(()=>{class n{constructor(i,r){this.fb=i,this.authFacade=r,this.isLoading$=this.authFacade.isLoading$,this.signUpForm=this.fb.group({name:new s.NI("",l.ZU),email:new s.NI("",l.Tt),password:new s.NI("",l.dZ)}),this.name=this.signUpForm.controls.name,this.email=this.signUpForm.controls.email,this.password=this.signUpForm.controls.password}onSubmit(){const i=(n=>({name:n.name??"",email:n.email??"",password:n.password??""}))(this.signUpForm.getRawValue());this.authFacade.signUp(i)}static#t=this.\u0275fac=function(r){return new(r||n)(t.Y36(s.qu),t.Y36(I))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["cn-sign-up-form"]],decls:27,vars:12,consts:[[1,"sign-up"],[1,"sign-up__title","mat-h-2"],[3,"formGroup","ngSubmit"],["formControlName","name","matInput","","type","text"],[4,"ngIf"],["formControlName","email","placeholder","email@mail.com","matInput","","type","text"],["formControlName","password","placeholder","password","matInput","","type","text"],[1,"sign-up__submit",3,"isDisabled","isLoading$"],["mat-flat-button","",1,"sign-up__button",3,"routerLink"]],template:function(r,o){1&r&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Sign up"),t.qZA(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(4,"mat-form-field")(5,"mat-label"),t._uU(6,"Name"),t.qZA(),t._UZ(7,"input",3),t.YNc(8,B,2,0,"mat-error",4),t.YNc(9,H,2,0,"mat-error",4),t.YNc(10,W,2,0,"mat-error",4),t.qZA(),t.TgZ(11,"mat-form-field")(12,"mat-label"),t._uU(13,"Email"),t.qZA(),t._UZ(14,"input",5),t.YNc(15,V,2,0,"mat-error",4),t.YNc(16,k,2,0,"mat-error",4),t.qZA(),t.TgZ(17,"mat-form-field")(18,"mat-label"),t._uU(19,"Password"),t.qZA(),t._UZ(20,"input",6),t.YNc(21,tt,2,0,"mat-error",4),t.YNc(22,nt,2,1,"mat-error",4),t.qZA(),t.TgZ(23,"cn-button-with-spinner",7),t._uU(24,"Sign up"),t.qZA()(),t.TgZ(25,"button",8),t._uU(26," Already have an account? "),t.qZA()()),2&r&&(t.xp6(3),t.Q6J("formGroup",o.signUpForm),t.xp6(5),t.Q6J("ngIf",o.name.hasError("required")),t.xp6(1),t.Q6J("ngIf",o.name.hasError("noSpecialCharsOrNumbers")),t.xp6(1),t.Q6J("ngIf",o.name.hasError("maxLength")),t.xp6(5),t.Q6J("ngIf",o.email.hasError("required")),t.xp6(1),t.Q6J("ngIf",o.email.hasError("email")),t.xp6(5),t.Q6J("ngIf",o.password.hasError("required")),t.xp6(1),t.Q6J("ngIf",(o.password.hasError("passwordStrength")||o.password.hasError("minlength"))&&!o.password.hasError("required")),t.xp6(1),t.Q6J("isDisabled",o.signUpForm.invalid)("isLoading$",o.isLoading$),t.xp6(2),t.Q6J("routerLink",t.DdM(11,rt)))},dependencies:[f.O5,h.rH,p.KE,p.hX,p.TO,U.Nt,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,S.lW,F.R],styles:["[_nghost-%COMP%]     .mat-mdc-form-field{width:100%;margin-top:.5rem}.sign-up[_ngcontent-%COMP%]{max-width:30rem;margin:auto;margin-top:3rem;padding:1rem}.sign-up__title[_ngcontent-%COMP%]{text-align:center}.sign-up__submit[_ngcontent-%COMP%]{display:block;width:-moz-fit-content;width:fit-content;margin:auto}.sign-up__button[_ngcontent-%COMP%]{display:block;margin:auto;margin-top:3rem}"],changeDetection:0})}return n})();const ot=[{path:"signup",component:(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["cn-sign-up-page"]],decls:1,vars:0,template:function(r,o){1&r&&t._UZ(0,"cn-sign-up-form")},dependencies:[it],changeDetection:0})}return n})()},{path:"signin",component:z},{path:"",pathMatch:"full",redirectTo:"signin"},{path:"**",component:O.w}];let et=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#n=this.\u0275mod=t.oAB({type:n});static#r=this.\u0275inj=t.cJS({providers:[I],imports:[f.ez,h.Bz.forChild(ot),p.lN,N.ie,U.c,s.UX,S.ot,a.Aw.forFeature("auth",Y),u.sQ.forFeature(P),b.Cq,L.Ps,F.R]})}return n})()}}]);