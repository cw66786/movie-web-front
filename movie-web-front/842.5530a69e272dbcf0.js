"use strict";(self.webpackChunkmovie_web_front=self.webpackChunkmovie_web_front||[]).push([[842],{9842:(x,l,i)=>{i.r(l),i.d(l,{SignInRoutingModule:()=>C});var s=i(27),o=i(4006),e=i(4650),p=i(9820),f=i(6895),d=i(4859),m=i(3546),c=i(7676),g=i(4144),u=i(7392);function h(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Email or Password is Incorrect!"),e.qZA())}function v(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a valid email address "),e.qZA())}function b(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1," Password must be min 4 characters "),e.qZA())}class w{isErrorState(a,r){return!!(a&&a.invalid&&(a.dirty||a.touched||r&&r.submitted))}}const I=[{path:"",component:(()=>{class n{constructor(r,t){this.formService=r,this.router=t,this.hide=!0,this.email=new o.NI("",[o.kI.email,o.kI.required]),this.password=new o.NI("",[o.kI.required,o.kI.minLength(4)]),this.matcher=new w}ngOnInit(){this.formService.loginError$.subscribe(r=>this.loginError=r)}transferInfo(r,t){this.email.valid&&this.password.valid&&this.formService.signIn(r,t)}}return n.\u0275fac=function(r){return new(r||n)(e.Y36(p.C),e.Y36(s.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-signIn"]],decls:28,vars:9,consts:[[1,"wrapper"],[1,"background"],["src","https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/be1d82ef-72c1-4a2a-8c16-5170169f9ef8/US-en-20221017-popsignuptwoweeks-perspective_alpha_website_small.jpg","srcset","\n        https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/be1d82ef-72c1-4a2a-8c16-5170169f9ef8/US-en-20221017-popsignuptwoweeks-perspective_alpha_website_small.jpg  1000w,\n        https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/be1d82ef-72c1-4a2a-8c16-5170169f9ef8/US-en-20221017-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w,\n        https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/be1d82ef-72c1-4a2a-8c16-5170169f9ef8/US-en-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg  1800w\n      ",1,"background-img"],[1,"spacing-wrapper"],[1,"card"],[1,"signIn-form",3,"submit"],[1,"card-title"],[4,"ngIf"],["appearance","fill"],["type","email","matInput","","placeholder","Ex. craig@example.com",3,"formControl","errorStateMatcher"],["matInput","","placeholder","Enter You're Password","required","",3,"type","formControl","errorStateMatcher"],["matSuffix","",3,"click"],["mat-flat-button","","color","primary","type","submit"],[1,"register-hint"],["routerLink","../register"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"div",3)(4,"mat-card",4)(5,"form",5),e.NdJ("submit",function(){return t.transferInfo(t.email.value,t.password.value)}),e.TgZ(6,"mat-card-title",6),e._uU(7,"Sign In"),e.qZA(),e.YNc(8,h,2,0,"mat-error",7),e.TgZ(9,"mat-form-field",8)(10,"mat-label"),e._uU(11,"Email"),e.qZA(),e._UZ(12,"input",9),e.YNc(13,v,2,0,"mat-error",7),e.qZA(),e.TgZ(14,"mat-form-field",8)(15,"mat-label"),e._uU(16,"Password"),e.qZA(),e._UZ(17,"input",10),e.TgZ(18,"mat-icon",11),e.NdJ("click",function(){return t.hide=!t.hide}),e._uU(19),e.qZA(),e.YNc(20,b,2,0,"mat-error",7),e.qZA(),e.TgZ(21,"button",12),e._uU(22,"Sign In"),e.qZA(),e.TgZ(23,"span",13),e._uU(24,"New to Craig's-Flix? "),e.TgZ(25,"a",14),e._uU(26,"Sign up now"),e.qZA(),e._uU(27,"."),e.qZA()()()()()),2&r&&(e.xp6(8),e.Q6J("ngIf",!0===t.loginError),e.xp6(4),e.Q6J("formControl",t.email)("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",t.email.hasError("email")&&!t.email.hasError("required")),e.xp6(4),e.Q6J("type",t.hide?"password":"text")("formControl",t.password)("errorStateMatcher",t.matcher),e.xp6(2),e.Oqu(t.hide?"visibility":"visibility_off"),e.xp6(1),e.Q6J("ngIf",t.password.hasError("minlength")&&!t.password.hasError("required")))},dependencies:[f.O5,s.yS,d.lW,m.a8,m.n5,c.TO,c.KE,c.hX,c.R9,g.Nt,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.F,o.oH,u.Hw],styles:["*[_ngcontent-%COMP%]{color:#fff}.wrapper[_ngcontent-%COMP%]{height:100vh;width:100vw;background-color:#000}.background[_ngcontent-%COMP%]{background-color:#000;opacity:.5}.background-img[_ngcontent-%COMP%]{background-size:cover;display:block;height:100%;min-height:100vh;overflow:hidden;position:absolute;width:100%;z-index:-1}.spacing-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;width:100vw}.card[_ngcontent-%COMP%]{background-color:#000000bf;border-radius:4px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;margin-bottom:0;height:660px;width:450px}.card-title[_ngcontent-%COMP%]{font-size:32px;font-weight:500;margin-bottom:28px;text-align:left;width:80%;margin-top:50px}.signIn-form[_ngcontent-%COMP%]{width:90%;height:50%;display:flex;flex-direction:column;justify-content:space-between}mat-form-field[_ngcontent-%COMP%]{display:block;-webkit-appearance:none;appearance:none;border-radius:4px;color:#fff;height:50px;background-color:#333;width:100%;margin:12px 0}input[_ngcontent-%COMP%]::placeholder{font-size:1rem;color:#8c8c8c}mat-label[_ngcontent-%COMP%]{font-size:1rem;left:20px;padding:15px 0;color:#8c8c8c;position:absolute;top:50%;transform:translateY(-50%);transition:font .1s ease,top .1s ease,transform .1s ease}mat-icon[_ngcontent-%COMP%]{color:#8c8c8c}mat-error[_ngcontent-%COMP%]{color:red}button[_ngcontent-%COMP%]{height:50px;margin:24px 0;font-size:1rem;padding:16px;display:flex;justify-content:center;align-items:center}.register-hint[_ngcontent-%COMP%]{color:#757575;font-size:1rem;margin-top:50px}a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.Bz.forChild(I),s.Bz]}),n})()}}]);