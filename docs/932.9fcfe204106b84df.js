"use strict";(self.webpackChunkexample_angular=self.webpackChunkexample_angular||[]).push([[932],{9932:(d,c,t)=>{t.r(c),t.d(c,{ToolsModule:()=>u});var m=t(6895),i=t(7459),n=t(8256);class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-commands"]],decls:14,vars:0,template:function(e,o){1&e&&(n.TgZ(0,"h2"),n._uU(1,"Tools / Commands"),n.qZA(),n._UZ(2,"hr"),n.TgZ(3,"h4"),n._uU(4,"manage commands"),n.qZA(),n.TgZ(5,"pre")(6,"code"),n._uU(7,"\n//install\nnpm install -g @angular/cli@latest\n\n//version\nng version\n\n//create\nng new XYZ\n\n//modules\nnpm install\n\n//run angular <= 11\nset NODE_OPTIONS=--openssl-legacy-provider\nng serve -o\n\n//run angular > 11\nng serve -o\n\n//build\nng build --configuration production\n"),n.qZA()(),n._UZ(8,"hr"),n.TgZ(9,"h4"),n._uU(10,"generate commands"),n.qZA(),n.TgZ(11,"pre")(12,"code"),n._uU(13,"\nng generate module XYZ --routing\n\nng generate component XYZ --skip-tests --inline-style\n\nng generate service XYZ"),n.qZA()())},encapsulation:2});var p=t(2340);class a{constructor(){this.production=p.N.production,this.testString=p.N.testString,this.testInteger=p.N.testInteger,this.testBoolean=p.N.testBoolean}type(e){return typeof e}}a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-environments"]],decls:19,vars:8,template:function(e,o){1&e&&(n.TgZ(0,"h2"),n._uU(1,"Tools / Environments"),n.qZA(),n._UZ(2,"hr"),n.TgZ(3,"h4"),n._uU(4,"command"),n.qZA(),n.TgZ(5,"pre")(6,"code"),n._uU(7,"ng generate environments"),n.qZA()(),n._UZ(8,"hr"),n.TgZ(9,"h4"),n._uU(10,"example"),n.qZA(),n.TgZ(11,"p"),n._uU(12),n.qZA(),n.TgZ(13,"p"),n._uU(14),n.qZA(),n.TgZ(15,"p"),n._uU(16),n.qZA(),n.TgZ(17,"p"),n._uU(18),n.qZA()),2&e&&(n.xp6(12),n.AsE("production - ",o.production," - ",o.type(o.production),""),n.xp6(2),n.AsE("testString - ",o.testString," - ",o.type(o.testString),""),n.xp6(2),n.AsE("testInteger - ",o.testInteger," - ",o.type(o.testInteger),""),n.xp6(2),n.AsE("testBoolean - ",o.testBoolean," - ",o.type(o.testBoolean),""))},encapsulation:2});const Z=[{path:"",component:t(7556).c,children:[{path:"commands",component:s},{path:"environments",component:a}]}];class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[i.Bz.forChild(Z),i.Bz]});var T=t(4466);class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=n.oAB({type:u}),u.\u0275inj=n.cJS({imports:[m.ez,l,T.m]})},7556:(d,c,t)=>{t.d(c,{c:()=>s});var m=t(8256),i=t(7459),n=t(3686);class s{}s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=m.Xpm({type:s,selectors:[["app-master"]],decls:3,vars:0,consts:[[1,"container"]],template:function(a,g){1&a&&(m._UZ(0,"app-menu"),m.TgZ(1,"div",0),m._UZ(2,"router-outlet"),m.qZA())},dependencies:[i.lC,n.M],encapsulation:2})}}]);