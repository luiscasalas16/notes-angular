"use strict";(self.webpackChunkexample_angular=self.webpackChunkexample_angular||[]).push([[723],{3723:(q,v,a)=>{a.r(v),a.d(v,{RoutesModule:()=>c});var Z=a(6895),r=a(7459),t=a(8256),b=a(3686);const y=function(){return["/routes/query-params"]},k=function(){return{sort:"name",order:"desc"}},T=function(){return["/routes/route-params",12345]};class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-custom-master"]],decls:32,vars:6,consts:[[1,"container"],[1,"text-center"],[1,"row","align-items-center"],[1,"col"],[1,"nav","nav-pills","nav-justified"],[1,"nav-item"],["routerLink","/routes/main","routerLinkActive","active","href","#",1,"nav-link"],["routerLink","/routes/first","routerLinkActive","active","href","#",1,"nav-link"],["routerLink","/routes/second","routerLinkActive","active","href","#",1,"nav-link"],["routerLinkActive","active","href","#",1,"nav-link",3,"routerLink","queryParams"],["routerLinkActive","active","href","#",1,"nav-link",3,"routerLink"],["routerLink","/routes/external","routerLinkActive","active","href","#",1,"nav-link"],["routerLink","/routes/internal","routerLinkActive","active","href","#",1,"nav-link"]],template:function(e,o){1&e&&(t._UZ(0,"app-menu"),t.TgZ(1,"div",0)(2,"h2"),t._uU(3,"Routes"),t.qZA(),t._UZ(4,"hr"),t.TgZ(5,"div",1)(6,"div",2)(7,"div",3)(8,"ul",4)(9,"li",5)(10,"a",6),t._uU(11,"Main"),t.qZA()(),t.TgZ(12,"li",5)(13,"a",7),t._uU(14,"First"),t.qZA()(),t.TgZ(15,"li",5)(16,"a",8),t._uU(17,"Second"),t.qZA()(),t.TgZ(18,"li",5)(19,"a",9),t._uU(20,"Query Params"),t.qZA()(),t.TgZ(21,"li",5)(22,"a",10),t._uU(23,"Route Params"),t.qZA()(),t.TgZ(24,"li",5)(25,"a",11),t._uU(26,"External"),t.qZA()(),t.TgZ(27,"li",5)(28,"a",12),t._uU(29,"Internal"),t.qZA()()()()(),t._UZ(30,"br")(31,"router-outlet"),t.qZA()()),2&e&&(t.xp6(19),t.Q6J("routerLink",t.DdM(3,y))("queryParams",t.DdM(4,k)),t.xp6(3),t.Q6J("routerLink",t.DdM(5,T)))},dependencies:[r.lC,r.rH,r.Od,b.M],encapsulation:2});class l{constructor(e){this.router=e}btn1(){this.router.navigate(["/routes/first"])}btn2(){this.router.navigate(["/routes/second"])}btn3(){this.router.navigate(["/routes/route-params",12345])}btn4(){this.router.navigate(["/routes/query-params"],{queryParams:{page:2,sort:"name",order:"desc"}})}}l.\u0275fac=function(e){return new(e||l)(t.Y36(r.F0))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-main"]],decls:16,vars:0,consts:[["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"first"),t.qZA(),t.TgZ(2,"button",0),t.NdJ("click",function(){return o.btn1()}),t._uU(3,"Go to First"),t.qZA(),t._UZ(4,"br")(5,"br"),t.TgZ(6,"button",0),t.NdJ("click",function(){return o.btn2()}),t._uU(7,"Go to Second"),t.qZA(),t._UZ(8,"br")(9,"br"),t.TgZ(10,"button",0),t.NdJ("click",function(){return o.btn3()}),t._uU(11,"Go to Route Params"),t.qZA(),t._UZ(12,"br")(13,"br"),t.TgZ(14,"button",0),t.NdJ("click",function(){return o.btn4()}),t._uU(15,"Go to Quert Params"),t.qZA())},encapsulation:2});class m{constructor(e){this.router=e}btn1(){this.router.navigate(["/routes/second"])}}m.\u0275fac=function(e){return new(e||m)(t.Y36(r.F0))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-first"]],decls:4,vars:0,consts:[["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"first"),t.qZA(),t.TgZ(2,"button",0),t.NdJ("click",function(){return o.btn1()}),t._uU(3,"Go to Second"),t.qZA())},encapsulation:2});class d{constructor(e){this.router=e}btn1(){this.router.navigate(["/routes/first"])}}d.\u0275fac=function(e){return new(e||d)(t.Y36(r.F0))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-second"]],decls:4,vars:0,consts:[["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"second"),t.qZA(),t.TgZ(2,"button",0),t.NdJ("click",function(){return o.btn1()}),t._uU(3,"Go to First"),t.qZA())},encapsulation:2});class f{constructor(e){this.activatedRoute=e,this.page="",this.sort="",this.order=""}ngOnInit(){this.activatedRoute.queryParams.subscribe(e=>{this.page=e.page??"empty",this.sort=e.sort??"empty",this.order=e.order??"empty"}),console.log(this.activatedRoute.snapshot.queryParamMap.get("page")),console.log(this.activatedRoute.snapshot.queryParamMap.get("sort")),console.log(this.activatedRoute.snapshot.queryParamMap.get("order"))}}f.\u0275fac=function(e){return new(e||f)(t.Y36(r.gz))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-query-params"]],decls:8,vars:3,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"query-params"),t.qZA(),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA()),2&e&&(t.xp6(3),t.hij("page : ",o.page,""),t.xp6(2),t.hij("sort : ",o.sort,""),t.xp6(2),t.hij("order : ",o.order,""))},encapsulation:2});class g{constructor(e){this.activatedRoute=e,this.id=""}ngOnInit(){this.activatedRoute.params.subscribe(({id:e})=>this.id=e),console.log(this.activatedRoute.snapshot.paramMap.get("id"))}}g.\u0275fac=function(e){return new(e||g)(t.Y36(r.gz))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-route-params"]],decls:4,vars:1,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"route-params"),t.qZA(),t.TgZ(2,"p"),t._uU(3),t.qZA()),2&e&&(t.xp6(3),t.hij("id : ",o.id,""))},encapsulation:2});class _{constructor(e){this.router=e}btn1(){sessionStorage.setItem("token","123"),this.router.navigate(["/routes/internal"])}}_.\u0275fac=function(e){return new(e||_)(t.Y36(r.F0))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-external"]],decls:4,vars:0,consts:[["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"external"),t.qZA(),t.TgZ(2,"button",0),t.NdJ("click",function(){return o.btn1()}),t._uU(3,"Login and Go Internal"),t.qZA())},encapsulation:2});class h{constructor(e){this.router=e}btn1(){sessionStorage.removeItem("token"),this.router.navigate(["/routes/external"])}}h.\u0275fac=function(e){return new(e||h)(t.Y36(r.F0))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-internal"]],decls:4,vars:0,consts:[["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"internal"),t.qZA(),t.TgZ(2,"button",0),t.NdJ("click",function(){return o.btn1()}),t._uU(3,"Logout an Go External"),t.qZA())},encapsulation:2});class s{canActivate(e,o){return!!sessionStorage.getItem("token")}canLoad(e,o){return!!sessionStorage.getItem("token")}}s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"});const A=[{path:"",component:p,children:[{path:"",redirectTo:"/routes/main",pathMatch:"full"},{path:"main",component:l},{path:"first",component:m},{path:"second",component:d},{path:"query-params",component:f},{path:"route-params/:id",component:g},{path:"external",component:_},{path:"internal",component:h,canLoad:[s],canActivate:[s]},{path:"**",redirectTo:"/routes/main"}]}];class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[r.Bz.forChild(A),r.Bz]});var C=a(4466);class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[Z.ez,u,C.m]})}}]);