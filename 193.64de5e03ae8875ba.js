"use strict";(self.webpackChunkmovie_web_front=self.webpackChunkmovie_web_front||[]).push([[193],{9193:(R,h,a)=>{a.r(h),a.d(h,{RegisterRoutingModule:()=>Q});var p=a(27),o=a(4006),_=a(8372),v=a(4004),e=a(4650);let C=(()=>{class t{isErrorState(n,r){return!!(n&&n.invalid&&(n.dirty||n.touched||r&&r.submitted))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=a(9820),c=a(6895),d=a(4859),s=a(7676),u=a(4144);function w(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a valid email address "),e.qZA())}function y(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Email is taken, please choose another. "),e.qZA())}function Z(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Email does not match! "),e.qZA())}function T(t,i){if(1&t&&(e.TgZ(0,"div",9),e.YNc(1,Z,2,0,"mat-error",5),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",null==n.registerForm1.errors?null:n.registerForm1.errors[n.notSame])}}const F=function(){return{"text-decoration":"underline","text-decoration-thickness":"5px","text-underline-offset":"8px"}};let x=(()=>{class t{constructor(n,r,m){this.errorMatcher=n,this.fb=r,this.formService=m,this.notSame="false",this.checkConfirm=l=>{const f=l.get("email")?.value,Y=l.get("confirmEmail")?.value;return f!==Y?{[this.notSame]:!0}:null},this.emailChecker=l=>this.formService.checkEmail(l.value).pipe((0,_.b)(500),(0,v.U)(f=>!0===f?{taken:!0}:null))}ngOnInit(){this.registerForm1=this.fb.group({email:new o.NI("",[o.kI.email,o.kI.required],[this.emailChecker]),confirmEmail:new o.NI("",[])},{validators:this.checkConfirm})}transferEmail(n){this.formService.transferEmail(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(C),e.Y36(o.qu),e.Y36(g.C))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-form-one"]],decls:28,vars:8,consts:[[1,"wrapper"],[1,"register-form",3,"formGroup"],[3,"ngStyle"],["appearance","fill"],["type","email","matInput","","formControlName","email","placeholder","Ex. craig@example.com","required","",3,"errorStateMatcher"],[4,"ngIf"],["type","email","matInput","","formControlName","confirmEmail","placeholder","Ex. craig@example.com","required",""],["class","confirm-error",4,"ngIf"],["mat-flat-button","","type","button","color","primary","routerLink","form2",3,"disabled","click"],[1,"confirm-error"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h1",2)(3,"b"),e._uU(4,"Step 1 of 3"),e.qZA()(),e.TgZ(5,"h1"),e._uU(6," Just three steps and you can be binging"),e._UZ(7,"br"),e._uU(8,"your favorite "),e.TgZ(9,"b"),e._uU(10,"Shows"),e.qZA(),e._uU(11," and "),e.TgZ(12,"b"),e._uU(13,"Movies"),e.qZA(),e._uU(14,"! "),e.qZA(),e.TgZ(15,"mat-form-field",3)(16,"mat-label"),e._uU(17,"Email"),e.qZA(),e._UZ(18,"input",4),e.YNc(19,w,2,0,"mat-error",5),e.YNc(20,y,2,0,"mat-error",5),e.qZA(),e.TgZ(21,"mat-form-field",3)(22,"mat-label"),e._uU(23,"Confirm Email"),e.qZA(),e._UZ(24,"input",6),e.qZA(),e.YNc(25,T,2,1,"div",7),e.TgZ(26,"button",8),e.NdJ("click",function(){return r.transferEmail(r.registerForm1.get("email").value)}),e._uU(27," Next "),e.qZA()()()),2&n&&(e.xp6(1),e.Q6J("formGroup",r.registerForm1),e.xp6(1),e.Q6J("ngStyle",e.DdM(7,F)),e.xp6(16),e.Q6J("errorStateMatcher",r.errorMatcher),e.xp6(1),e.Q6J("ngIf",r.registerForm1.get("email").hasError("email")&&!r.registerForm1.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",null==r.registerForm1.get("email").errors?null:r.registerForm1.get("email").errors.taken),e.xp6(5),e.Q6J("ngIf",r.registerForm1.dirty||r.registerForm1.touched),e.xp6(1),e.Q6J("disabled",!r.registerForm1.valid))},dependencies:[c.O5,c.PC,p.rH,d.lW,s.TO,s.KE,s.hX,u.Nt,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.sg,o.u],styles:[".wrapper[_ngcontent-%COMP%]{height:60%;width:100%;display:flex;align-items:center;justify-content:center;text-align:center}.register-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 10px;width:450px}h1[_ngcontent-%COMP%]{margin-top:10px}.confirm-error[_ngcontent-%COMP%]{display:block;margin-top:-1.34375em;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;text-align:left;font-size:75%;padding-left:10px}button[_ngcontent-%COMP%]{height:50px;margin:24px 0;font-size:1rem;padding:16px;display:flex;justify-content:center;align-items:center}@media (max-height: 870px){.wrapper[_ngcontent-%COMP%]{margin-top:10px;height:-moz-fit-content;height:fit-content;width:100%}h1[_ngcontent-%COMP%]{display:none}}"]}),t})();var b=a(9583),O=a(3238);const U=function(){return{"text-decoration":"underline","text-decoration-thickness":"5px","text-underline-offset":"8px"}};let P=(()=>{class t{constructor(n,r){this.fb=n,this.formService=r}ngOnInit(){this.registerForm3=this.fb.group({tmdbKey:new o.NI("",[o.kI.required]),userName:new o.NI("",[o.kI.required]),role:new o.NI("",[o.kI.required])})}transferInfo(n,r,m){this.formService.transferForm3(n,r,m)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(o.qu),e.Y36(g.C))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-form-three"]],decls:27,vars:4,consts:[[1,"wrapper"],[1,"register-form",3,"formGroup"],[3,"ngStyle"],["appearance","fill"],["type","text","matInput","","formControlName","userName","placeholder","Username","required",""],["type","text","matInput","","formControlName","tmdbKey","placeholder","TMBD Key","required",""],["required","","formControlName","role"],["value","User"],["value","Admin"],["value","Super"],["mat-flat-button","","color","primary",3,"disabled","click"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h1",2)(3,"b"),e._uU(4,"Step 3 of 3"),e.qZA()(),e.TgZ(5,"h1"),e._uU(6,"Just one more step, hope the popcorn is ready!!!"),e.qZA(),e.TgZ(7,"mat-form-field",3)(8,"mat-label"),e._uU(9,"Username"),e.qZA(),e._UZ(10,"input",4),e.qZA(),e.TgZ(11,"mat-form-field",3)(12,"mat-label"),e._uU(13,"TMDB Key"),e.qZA(),e._UZ(14,"input",5),e.qZA(),e.TgZ(15,"mat-form-field",3)(16,"mat-label"),e._uU(17,"Select Role"),e.qZA(),e.TgZ(18,"mat-select",6)(19,"mat-option",7),e._uU(20,"User"),e.qZA(),e.TgZ(21,"mat-option",8),e._uU(22,"Admin"),e.qZA(),e.TgZ(23,"mat-option",9),e._uU(24,"SuperUser"),e.qZA()()(),e.TgZ(25,"button",10),e.NdJ("click",function(){return r.transferInfo(r.registerForm3.get("userName").value,r.registerForm3.get("tmdbKey").value,r.registerForm3.get("role").value)}),e._uU(26," Register "),e.qZA()()()),2&n&&(e.xp6(1),e.Q6J("formGroup",r.registerForm3),e.xp6(1),e.Q6J("ngStyle",e.DdM(3,U)),e.xp6(23),e.Q6J("disabled",!r.registerForm3.valid))},dependencies:[c.PC,d.lW,s.KE,s.hX,u.Nt,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.sg,o.u,b.gD,O.ey],styles:[".wrapper[_ngcontent-%COMP%]{height:60%;width:100%;display:flex;align-items:center;justify-content:center;text-align:center}.register-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 10px;width:450px}h1[_ngcontent-%COMP%]{margin-top:10px}button[_ngcontent-%COMP%]{height:50px;margin:24px 0;font-size:1rem;padding:16px;display:flex;justify-content:center;align-items:center}@media (max-height: 870px){.wrapper[_ngcontent-%COMP%]{margin-top:10px;height:-moz-fit-content;height:fit-content;width:100%}h1[_ngcontent-%COMP%]{display:none}}"]}),t})();var q=a(7392);function M(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a password "),e.qZA())}function A(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Password must be at least 4 characters "),e.qZA())}function I(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Password does not match!"),e.qZA())}function J(t,i){if(1&t&&(e.TgZ(0,"div",10),e.YNc(1,I,2,0,"mat-error",6),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",null==n.registerForm2.errors?null:n.registerForm2.errors[n.notSame])}}const N=function(){return{"text-decoration":"underline","text-decoration-thickness":"5px","text-underline-offset":"8px"}};let S=(()=>{class t{constructor(n,r){this.fb=n,this.formService=r,this.hide=!0,this.notSame="false",this.checkConfirm=m=>{const l=m.get("password")?.value,f=m.get("confirmPassword")?.value;return l!==f?{[this.notSame]:!0}:null}}ngOnInit(){this.registerForm2=this.fb.group({password:new o.NI("",[o.kI.minLength(4),o.kI.required]),confirmPassword:new o.NI("",[])},{validators:this.checkConfirm})}transferPassword(n){this.formService.transferPassword(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(o.qu),e.Y36(g.C))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-form-two"]],decls:24,vars:11,consts:[[1,"wrapper"],[1,"register-form",3,"formGroup"],[3,"ngStyle"],["appearance","fill"],["matInput","","placeholder","Enter You're Password","formControlName","password","required","",3,"type"],["matSuffix","",3,"click"],[4,"ngIf"],["matInput","","placeholder","Confirm Password","formControlName","confirmPassword","required","",3,"type"],["class","confirm-error",4,"ngIf"],["mat-flat-button","","color","primary","routerLink","../form3",3,"disabled","click"],[1,"confirm-error"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h1",2)(3,"b"),e._uU(4,"Step 2 of 3"),e.qZA()(),e.TgZ(5,"h1"),e._uU(6," Just two more steps, with all those movie choices we hope you can decide!!! "),e.qZA(),e.TgZ(7,"mat-form-field",3)(8,"mat-label"),e._uU(9,"Password"),e.qZA(),e._UZ(10,"input",4),e.TgZ(11,"mat-icon",5),e.NdJ("click",function(){return r.hide=!r.hide}),e._uU(12),e.qZA(),e.YNc(13,M,2,0,"mat-error",6),e.YNc(14,A,2,0,"mat-error",6),e.qZA(),e.TgZ(15,"mat-form-field",3)(16,"mat-label"),e._uU(17,"Confirm Password"),e.qZA(),e._UZ(18,"input",7),e.TgZ(19,"mat-icon",5),e.NdJ("click",function(){return r.hide=!r.hide}),e._uU(20),e.qZA()(),e.YNc(21,J,2,1,"div",8),e.TgZ(22,"button",9),e.NdJ("click",function(){return r.transferPassword(r.registerForm2.get("password").value)}),e._uU(23," Next "),e.qZA()()()),2&n&&(e.xp6(1),e.Q6J("formGroup",r.registerForm2),e.xp6(1),e.Q6J("ngStyle",e.DdM(10,N)),e.xp6(8),e.Q6J("type",r.hide?"password":"text"),e.xp6(2),e.Oqu(r.hide?"visibility":"visibility_off"),e.xp6(1),e.Q6J("ngIf",r.registerForm2.get("password").hasError("required")&&r.registerForm2.get("password").touched),e.xp6(1),e.Q6J("ngIf",!r.registerForm2.get("password").hasError("minLength")&&!r.registerForm2.get("password").hasError("required")),e.xp6(4),e.Q6J("type",r.hide?"password":"text"),e.xp6(2),e.Oqu(r.hide?"visibility":"visibility_off"),e.xp6(1),e.Q6J("ngIf",!r.registerForm2.valid&&(r.registerForm2.dirty||r.registerForm2.touched)),e.xp6(1),e.Q6J("disabled",!r.registerForm2.valid))},dependencies:[c.O5,c.PC,p.rH,d.lW,s.TO,s.KE,s.hX,s.R9,u.Nt,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.sg,o.u,q.Hw],styles:[".wrapper[_ngcontent-%COMP%]{height:60%;width:100%;display:flex;align-items:center;justify-content:center;text-align:center}.register-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 10px;width:450px}h1[_ngcontent-%COMP%]{margin-top:10px}.confirm-error[_ngcontent-%COMP%]{display:block;margin-top:-1.34375em;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;text-align:left;font-size:75%;padding-left:10px;color:red}button[_ngcontent-%COMP%]{height:50px;margin:24px 0;font-size:1rem;padding:16px;display:flex;justify-content:center;align-items:center}@media (max-height: 870px){.wrapper[_ngcontent-%COMP%]{margin-top:10px;height:-moz-fit-content;height:fit-content;width:100%}h1[_ngcontent-%COMP%]{display:none}}"]}),t})();var k=a(3546);const E=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],decls:6,vars:0,consts:[[1,"wrapper"],[1,"card"],[1,"form-wrapper"],[1,"logo-container"],[1,"img-span"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"mat-card",1)(2,"div",2)(3,"div",3),e._UZ(4,"span",4),e.qZA(),e._UZ(5,"router-outlet"),e.qZA()()())},dependencies:[p.lC,k.a8],styles:[".wrapper[_ngcontent-%COMP%]{height:100vh;width:100vw;display:flex;flex-direction:column;justify-content:flex-end;align-items:center}.card[_ngcontent-%COMP%]{height:calc(100vh - 5rem - 40px);width:100vw;display:flex;justify-content:center;align-items:flex-start;padding:0;margin:0}.form-wrapper[_ngcontent-%COMP%]{height:calc(100vh - 5rem - 130px);width:960px}.logo-container[_ngcontent-%COMP%]{height:20%;width:100%;margin-top:20px}.img-span[_ngcontent-%COMP%]{display:block;background:url(https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png) no-repeat 50% 50%;background-size:260px;height:90px}@media (max-width: 900px){.form-wrapper[_ngcontent-%COMP%]{width:100vw}}@media (max-height: 870px) and (max-width: 900px){.card[_ngcontent-%COMP%]{height:calc(100vh - 5rem)}.logo-container[_ngcontent-%COMP%]{margin-top:5px}}"]}),t})(),children:[{path:"form3",component:P},{path:"form2",component:S},{path:"form1",component:x},{path:"",component:x}]}];let Q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(E),p.Bz]}),t})()}}]);