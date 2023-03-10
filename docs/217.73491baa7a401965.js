"use strict";(self.webpackChunkexample_angular=self.webpackChunkexample_angular||[]).push([[217],{6217:(J,m,r)=>{r.r(m),r.d(m,{DirectivesModule:()=>s});var u=r(6895),a=r(433),d=r(7459),t=r(8256);const Z=function(){return["text-capitalize","fw-bold"]},f=function(){return{"text-capitalize fw-bold":!0}},h=function(){return{"text-capitalize":!0,"fw-bold":!0}};class o{constructor(){this.currentItem="",this.classes1_field={"text-capitalize fw-bold":!0},this.classes2_field={"text-capitalize":!0,"fw-bold":!0}}getClassObject(){return{"text-capitalize":!0,"fw-bold":!0}}getStylesObject(){return{"text-transform":"capitalize","font-weight":"bold"}}getCurrentItem(n){return n.target.value}}function _(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"this text is displayed"),t.qZA())}function T(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"this text is displayed"),t.qZA())}function A(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"this text is not displayed"),t.qZA())}function C(e,n){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const i=n.$implicit,p=n.index;t.xp6(1),t.AsE(" ",p+1," - ",i," ")}}function v(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"one"),t.qZA())}function x(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"two"),t.qZA())}function U(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"three"),t.qZA())}function D(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"unknow"),t.qZA())}o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-attribute-directives"]],decls:40,vars:14,consts:[[3,"ngClass"],[3,"ngStyle"],["for","without"],["id","without",3,"value","input"],["for","with"],["id","with",3,"ngModel","ngModelChange"]],template:function(n,i){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Directives / Attribute"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"h4"),t._uU(4,"ngClass"),t.qZA(),t.TgZ(5,"p",0),t._uU(6,"capitalized text."),t.qZA(),t.TgZ(7,"p",0),t._uU(8,"capitalized text."),t.qZA(),t.TgZ(9,"p",0),t._uU(10,"capitalized text."),t.qZA(),t.TgZ(11,"p",0),t._uU(12,"capitalized text."),t.qZA(),t.TgZ(13,"p",0),t._uU(14,"capitalized text."),t.qZA(),t.TgZ(15,"p",0),t._uU(16,"capitalized text."),t.qZA(),t.TgZ(17,"p",0),t._uU(18,"capitalized text."),t.qZA(),t._UZ(19,"hr"),t.TgZ(20,"h4"),t._uU(21,"ngStyle"),t.qZA(),t.TgZ(22,"p",1),t._uU(23,"capitalized text."),t.qZA(),t._UZ(24,"hr"),t.TgZ(25,"h4"),t._uU(26,"ngModel"),t.qZA(),t.TgZ(27,"fieldset")(28,"p"),t._uU(29,"* must import FormsModule into the NgModule"),t.qZA(),t.TgZ(30,"p"),t._uU(31),t.qZA(),t.TgZ(32,"p")(33,"label",2),t._uU(34,"without ngModel:"),t.qZA(),t.TgZ(35,"input",3),t.NdJ("input",function(g){return i.currentItem=i.getCurrentItem(g)}),t.qZA()(),t.TgZ(36,"p")(37,"label",4),t._uU(38,"with ngModel:"),t.qZA(),t.TgZ(39,"input",5),t.NdJ("ngModelChange",function(g){return i.currentItem=g}),t.qZA()()()),2&n&&(t.xp6(5),t.Q6J("ngClass","text-capitalize fw-bold"),t.xp6(2),t.Q6J("ngClass",t.DdM(11,Z)),t.xp6(2),t.Q6J("ngClass",t.DdM(12,f)),t.xp6(2),t.Q6J("ngClass",t.DdM(13,h)),t.xp6(2),t.Q6J("ngClass",i.classes1_field),t.xp6(2),t.Q6J("ngClass",i.classes2_field),t.xp6(2),t.Q6J("ngClass",i.getClassObject()),t.xp6(5),t.Q6J("ngStyle",i.getStylesObject()),t.xp6(9),t.hij("Current item: ",i.currentItem,""),t.xp6(4),t.Q6J("value",i.currentItem),t.xp6(4),t.Q6J("ngModel",i.currentItem))},dependencies:[u.mk,u.PC,a.Fj,a.JJ,a.On],encapsulation:2});class l{constructor(){this.numbers=["one","two","three","four","five"],this.number="one"}}l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-structural-directives"]],decls:24,vars:8,consts:[[4,"ngIf"],[4,"ngIf","ngIfElse"],["ABC",""],[4,"ngFor","ngForOf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(n,i){if(1&n&&(t.TgZ(0,"h2"),t._uU(1,"Directives / Structural"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"h4"),t._uU(4,"ngIf"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"this text is displayed"),t.qZA(),t.YNc(7,_,2,0,"p",0),t.YNc(8,T,2,0,"p",1),t.YNc(9,A,2,0,"ng-template",null,2,t.W1O),t._UZ(11,"hr"),t.TgZ(12,"h4"),t._uU(13,"ngFor"),t.qZA(),t.TgZ(14,"ul"),t.YNc(15,C,2,2,"li",3),t.qZA(),t._UZ(16,"hr"),t.TgZ(17,"h4"),t._uU(18,"ngSwitch"),t.qZA(),t.TgZ(19,"div",4),t.YNc(20,v,2,0,"p",5),t.YNc(21,x,2,0,"p",5),t.YNc(22,U,2,0,"p",5),t.YNc(23,D,2,0,"p",6),t.qZA()),2&n){const p=t.MAs(10);t.xp6(7),t.Q6J("ngIf",!0),t.xp6(1),t.Q6J("ngIf",!0)("ngIfElse",p),t.xp6(7),t.Q6J("ngForOf",i.numbers),t.xp6(4),t.Q6J("ngSwitch",i.number),t.xp6(1),t.Q6J("ngSwitchCase","one"),t.xp6(1),t.Q6J("ngSwitchCase","two"),t.xp6(1),t.Q6J("ngSwitchCase","three")}},dependencies:[u.sg,u.O5,u.RF,u.n9,u.ED],encapsulation:2});const q=[{path:"",component:r(7556).c,children:[{path:"attribute-directives",component:o},{path:"structural-directives",component:l}]}];class c{}c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[d.Bz.forChild(q),d.Bz]});var w=r(4466);class s{}s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[u.ez,a.u5,c,w.m]})}}]);