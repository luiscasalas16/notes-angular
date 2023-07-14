"use strict";(self.webpackChunkexample_angular=self.webpackChunkexample_angular||[]).push([[870],{6870:(U,m,u)=>{u.r(m),u.d(m,{TemplatesModule:()=>a});var r=u(6895),A=u(7459),_=u(7445),e=u(8256);function g(t,o){if(1&t&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.AsE("",n.key," : ",n.value,"")}}function Z(t,o){1&t&&(e.TgZ(0,"pre"),e._uU(1,"Resolving observable"),e.qZA())}function T(t,o){1&t&&(e.TgZ(0,"pre"),e._uU(1,"Resolving promise"),e.qZA())}const q=function(t){return[t,"EUR","symbol","0.2-2","fr"]},d=function(t){return[t,"EUR","symbol-narrow","0.2-2","fr"]};class s{constructor(){this.text="hELLO wORLD",this.date=new Date,this.pi=3.14,this.currency=123456.789,this.percent=.255,this.invites={male:"Invite him.",female:"Invite her.",other:"Invite them."},this.clients={"=0":"We don't have any customers waiting.","=1":"We have a client waiting.",other:"We have # customers waiting."},this.object={foo:"bar",baz:"qux",nested:{xyz:3,numbers:[1,2,3,4,5]}},this.collection=["a","b","c","d"],this.str="abcdefghij",this.myObservable=(0,_.F)(2e3),this.myPromise=new Promise(o=>{setTimeout(()=>{o("We have data.")},2e3)})}}s.\u0275fac=function(o){return new(o||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-built-in"]],decls:183,vars:200,consts:[[4,"ngFor","ngForOf"],[4,"ngIf"]],template:function(o,n){1&o&&(e.TgZ(0,"h2"),e._uU(1,"Templates / Pipes / Built-In"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"h4"),e._uU(4,"texts"),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.ALo(9,"uppercase"),e.qZA(),e.TgZ(10,"p"),e._uU(11),e.ALo(12,"lowercase"),e.qZA(),e.TgZ(13,"p"),e._uU(14),e.ALo(15,"titlecase"),e.qZA(),e._UZ(16,"hr"),e.TgZ(17,"h4"),e._uU(18,"date"),e.qZA(),e.TgZ(19,"p"),e._uU(20),e.qZA(),e.TgZ(21,"p"),e._uU(22),e.ALo(23,"date"),e.qZA(),e.TgZ(24,"p"),e._uU(25),e.ALo(26,"date"),e.qZA(),e.TgZ(27,"p"),e._uU(28),e.ALo(29,"date"),e.qZA(),e.TgZ(30,"p"),e._uU(31),e.ALo(32,"date"),e.qZA(),e.TgZ(33,"p"),e._uU(34),e.ALo(35,"date"),e.qZA(),e.TgZ(36,"p"),e._uU(37),e.ALo(38,"date"),e.qZA(),e.TgZ(39,"p"),e._uU(40),e.ALo(41,"date"),e.qZA(),e._UZ(42,"hr"),e.TgZ(43,"h4"),e._uU(44,"number"),e.qZA(),e.TgZ(45,"p"),e._uU(46),e.qZA(),e.TgZ(47,"p"),e._uU(48),e.ALo(49,"number"),e.qZA(),e.TgZ(50,"p"),e._uU(51),e.ALo(52,"number"),e.qZA(),e.TgZ(53,"p"),e._uU(54),e.ALo(55,"number"),e.qZA(),e.TgZ(56,"p"),e._uU(57),e.ALo(58,"number"),e.qZA(),e.TgZ(59,"p"),e._uU(60),e.ALo(61,"number"),e.qZA(),e.TgZ(62,"p"),e._uU(63),e.ALo(64,"number"),e.qZA(),e.TgZ(65,"p"),e._uU(66),e.ALo(67,"number"),e.qZA(),e._UZ(68,"hr"),e.TgZ(69,"h4"),e._uU(70,"currency"),e.qZA(),e.TgZ(71,"p"),e._uU(72),e.qZA(),e.TgZ(73,"p"),e._uU(74),e.ALo(75,"currency"),e.qZA(),e.TgZ(76,"p"),e._uU(77),e.ALo(78,"currency"),e.qZA(),e.TgZ(79,"p"),e._uU(80),e.ALo(81,"currency"),e.qZA(),e.TgZ(82,"p"),e._uU(83),e.ALo(84,"currency"),e.qZA(),e.TgZ(85,"p"),e._uU(86),e.ALo(87,"currency"),e.qZA(),e.TgZ(88,"p"),e._uU(89),e.ALo(90,"currency"),e.qZA(),e.TgZ(91,"p"),e._uU(92),e.ALo(93,"currency"),e.qZA(),e.TgZ(94,"p"),e._uU(95),e.ALo(96,"currency"),e.qZA(),e.TgZ(97,"p"),e._uU(98),e.ALo(99,"currency"),e.qZA(),e._UZ(100,"hr"),e.TgZ(101,"h4"),e._uU(102,"percent"),e.qZA(),e.TgZ(103,"p"),e._uU(104),e.qZA(),e.TgZ(105,"p"),e._uU(106),e.ALo(107,"percent"),e.qZA(),e.TgZ(108,"p"),e._uU(109),e.ALo(110,"percent"),e.qZA(),e.TgZ(111,"p"),e._uU(112),e.ALo(113,"percent"),e.qZA(),e._UZ(114,"hr"),e.TgZ(115,"h4"),e._uU(116,"i18nSelect"),e.qZA(),e.TgZ(117,"p"),e._uU(118),e.ALo(119,"i18nSelect"),e.qZA(),e.TgZ(120,"p"),e._uU(121),e.ALo(122,"i18nSelect"),e.qZA(),e._UZ(123,"hr"),e.TgZ(124,"h4"),e._uU(125,"i18nPlural"),e.qZA(),e.TgZ(126,"p"),e._uU(127),e.ALo(128,"i18nPlural"),e.qZA(),e.TgZ(129,"p"),e._uU(130),e.ALo(131,"i18nPlural"),e.qZA(),e.TgZ(132,"p"),e._uU(133),e.ALo(134,"i18nPlural"),e.qZA(),e._UZ(135,"hr"),e.TgZ(136,"h4"),e._uU(137,"slice"),e.qZA(),e.TgZ(138,"p"),e._uU(139),e.ALo(140,"slice"),e.qZA(),e.TgZ(141,"p"),e._uU(142),e.ALo(143,"slice"),e.qZA(),e.TgZ(144,"p"),e._uU(145),e.ALo(146,"slice"),e.qZA(),e.TgZ(147,"p"),e._uU(148),e.ALo(149,"slice"),e.qZA(),e.TgZ(150,"p"),e._uU(151),e.ALo(152,"slice"),e.qZA(),e._UZ(153,"hr"),e.TgZ(154,"h4"),e._uU(155,"json"),e.qZA(),e.TgZ(156,"p"),e._uU(157,"Without JSON pipe:"),e.qZA(),e.TgZ(158,"pre"),e._uU(159),e.qZA(),e.TgZ(160,"p"),e._uU(161,"With JSON pipe:"),e.qZA(),e.TgZ(162,"pre"),e._uU(163),e.ALo(164,"json"),e.qZA(),e._UZ(165,"hr"),e.TgZ(166,"h4"),e._uU(167,"keyvalue"),e.qZA(),e.YNc(168,g,2,2,"p",0),e.ALo(169,"keyvalue"),e._UZ(170,"hr"),e.TgZ(171,"h4"),e._uU(172,"async"),e.qZA(),e.YNc(173,Z,2,0,"pre",1),e.ALo(174,"async"),e.TgZ(175,"pre"),e._uU(176),e.ALo(177,"async"),e.qZA(),e.YNc(178,T,2,0,"pre",1),e.ALo(179,"async"),e.TgZ(180,"pre"),e._uU(181),e.ALo(182,"async"),e.qZA()),2&o&&(e.xp6(6),e.Oqu(n.text),e.xp6(2),e.hij("uppercase : ",e.lcZ(9,51,n.text),""),e.xp6(3),e.hij("uppercase : ",e.lcZ(12,53,n.text),""),e.xp6(3),e.hij("uppercase : ",e.lcZ(15,55,n.text),""),e.xp6(6),e.Oqu(n.date),e.xp6(2),e.hij("date : ",e.lcZ(23,57,n.date),""),e.xp6(3),e.hij("date:'short' : ",e.xi3(26,59,n.date,"short"),""),e.xp6(3),e.hij("date:'long' : ",e.xi3(29,62,n.date,"long"),""),e.xp6(3),e.hij("date:'dd - MMMM - yyyy' : ",e.xi3(32,65,n.date,"dd - MMMM - yyyy"),""),e.xp6(3),e.hij("date:'long':'':'en' : ",e.gM2(35,68,n.date,"long","","en"),""),e.xp6(3),e.hij("date:'long':'':'fr' : ",e.gM2(38,73,n.date,"long","","fr"),""),e.xp6(3),e.hij("date:'long':'GMT-0' : ",e.Dn7(41,78,n.date,"long","GMT-0"),""),e.xp6(6),e.Oqu(n.pi),e.xp6(2),e.hij("number : ",e.lcZ(49,82,n.pi),""),e.xp6(3),e.hij("number:'':'en' : ",e.Dn7(52,84,n.pi,"","en"),""),e.xp6(3),e.hij("number:'':'fr' : ",e.Dn7(55,88,n.pi,"","fr"),""),e.xp6(3),e.hij("number:'0.1-3': ",e.xi3(58,92,n.pi,"0.1-3"),""),e.xp6(3),e.hij("number:'0.3-3': ",e.xi3(61,95,n.pi,"0.3-3"),""),e.xp6(3),e.hij("number:'1.0-0': ",e.xi3(64,98,n.pi,"1.0-0"),""),e.xp6(3),e.hij("number:'3.0-0': ",e.xi3(67,101,n.pi,"3.0-0"),""),e.xp6(6),e.Oqu(n.currency),e.xp6(2),e.hij("currency : ",e.lcZ(75,104,n.currency),""),e.xp6(3),e.hij("currency:'CRC' : ",e.xi3(78,106,n.currency,"CRC"),""),e.xp6(3),e.hij("currency:'USD' : ",e.xi3(81,109,n.currency,"USD"),""),e.xp6(3),e.hij("currency:'CRC':'code' : ",e.Dn7(84,112,n.currency,"CRC","code"),""),e.xp6(3),e.hij("currency:'USD':'code' : ",e.Dn7(87,116,n.currency,"USD","code"),""),e.xp6(3),e.hij(" currency:'CRC':'symbol':'0.2-2' : ",e.gM2(90,120,n.currency,"CRC","symbol","0.2-2"),"\n"),e.xp6(3),e.hij(" currency:'EUR':'symbol':'0.2-2':'fr' : ",e.G7q(93,125,e.VKq(196,q,n.currency)),"\n"),e.xp6(3),e.hij(" currency:'CRC':'symbol-narrow':'0.2-2' : ",e.gM2(96,131,n.currency,"CRC","symbol-narrow","0.2-2"),"\n"),e.xp6(3),e.hij(" currency:'EUR':'symbol-narrow':'0.2-2':'fr' : ",e.G7q(99,136,e.VKq(198,d,n.currency)),"\n"),e.xp6(6),e.Oqu(n.percent),e.xp6(2),e.hij("currency : ",e.lcZ(107,142,n.percent),""),e.xp6(3),e.hij("percent:'0.2-2' : ",e.xi3(110,144,n.percent,"0.2-2"),""),e.xp6(3),e.hij("percent:'0.2-2':'fr' : ",e.Dn7(113,147,n.percent,"0.2-2","fr"),""),e.xp6(6),e.Oqu(e.xi3(119,151,"male",n.invites)),e.xp6(3),e.Oqu(e.xi3(122,154,"female",n.invites)),e.xp6(6),e.Oqu(e.xi3(128,157,0,n.clients)),e.xp6(3),e.Oqu(e.xi3(131,160,1,n.clients)),e.xp6(3),e.Oqu(e.xi3(134,163,5,n.clients)),e.xp6(6),e.hij("slice:0 : '",e.xi3(140,166,n.str,0),"'"),e.xp6(3),e.hij("slice:0:4 : '",e.Dn7(143,169,n.str,0,4),"'"),e.xp6(3),e.hij("slice:2:4 : '",e.Dn7(146,173,n.str,2,4),"'"),e.xp6(3),e.hij("slice:-4:-2 : '",e.Dn7(149,177,n.str,-4,-2),"'"),e.xp6(3),e.hij("slice:-4 : '",e.xi3(152,181,n.str,-4),"'"),e.xp6(8),e.Oqu(n.object),e.xp6(4),e.Oqu(e.lcZ(164,184,n.object)),e.xp6(5),e.Q6J("ngForOf",e.lcZ(169,186,n.invites)),e.xp6(5),e.Q6J("ngIf",!e.lcZ(174,188,n.myObservable)),e.xp6(3),e.Oqu(e.lcZ(177,190,n.myObservable)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(179,192,n.myPromise)),e.xp6(3),e.Oqu(e.lcZ(182,194,n.myPromise)))},dependencies:[r.sg,r.O5,r.Ov,r.gd,r.i8,r.Ts,r.OU,r.JJ,r.Zx,r.rS,r.H9,r.uU,r.Gx,r._K,r.Nd],encapsulation:2});class l{transform(o,n=""){switch(o=[...o],n){case"name":return o.sort((p,h)=>p.name>h.name?1:-1);case"population":return o.sort((p,h)=>p.population>h.population?-1:1);default:return o}}}function y(t,o){if(1&t&&(e.TgZ(0,"tr")(1,"th",5),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.ALo(7,"number"),e.qZA()()),2&t){const n=o.$implicit,p=o.index;e.xp6(2),e.Oqu(p+1),e.xp6(2),e.Oqu(n.name),e.xp6(2),e.Oqu(e.lcZ(7,3,n.population))}}function f(t,o){if(1&t&&(e.TgZ(0,"tr")(1,"th",5),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.ALo(7,"number"),e.qZA()()),2&t){const n=o.$implicit,p=o.index;e.xp6(2),e.Oqu(p+1),e.xp6(2),e.Oqu(n.name),e.xp6(2),e.Oqu(e.lcZ(7,3,n.population))}}l.\u0275fac=function(o){return new(o||l)},l.\u0275pipe=e.Yjl({name:"sort",type:l,pure:!0});class c{constructor(){this.orderColumn="",this.countries=[{name:"China",population:1439323776},{name:"India",population:1380004385},{name:"United States",population:331002651},{name:"Indonesia",population:273523615},{name:"Pakistan",population:220892340},{name:"Brazil",population:212559417},{name:"Nigeria",population:206139589},{name:"Bangladesh",population:164689383}]}order(o){this.orderColumn=o}}c.\u0275fac=function(o){return new(o||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-custom"]],decls:32,vars:6,consts:[["role","group",1,"btn-group"],["type","button",1,"btn","btn-outline-primary",3,"click"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(o,n){1&o&&(e.TgZ(0,"h2"),e._uU(1,"Templates / Pipes / Custom"),e.qZA(),e.TgZ(2,"div",0)(3,"button",1),e.NdJ("click",function(){return n.order("name")}),e._uU(4," Order by Name "),e.qZA(),e.TgZ(5,"button",1),e.NdJ("click",function(){return n.order("population")}),e._uU(6," Order by Population "),e.qZA()(),e.TgZ(7,"p"),e._uU(8),e.qZA(),e.TgZ(9,"table",2)(10,"thead")(11,"tr")(12,"th",3),e._uU(13,"#"),e.qZA(),e.TgZ(14,"th",3),e._uU(15,"Name"),e.qZA(),e.TgZ(16,"th",3),e._uU(17,"Population"),e.qZA()()(),e.TgZ(18,"tbody"),e.YNc(19,y,8,5,"tr",4),e.ALo(20,"sort"),e.qZA()(),e.TgZ(21,"table",2)(22,"thead")(23,"tr")(24,"th",3),e._uU(25,"#"),e.qZA(),e.TgZ(26,"th",3),e._uU(27,"Name"),e.qZA(),e.TgZ(28,"th",3),e._uU(29,"Population"),e.qZA()()(),e.TgZ(30,"tbody"),e.YNc(31,f,8,5,"tr",4),e.qZA()()),2&o&&(e.xp6(8),e.hij("order : ",n.orderColumn,""),e.xp6(11),e.Q6J("ngForOf",e.xi3(20,3,n.countries,n.orderColumn)),e.xp6(12),e.Q6J("ngForOf",n.countries))},dependencies:[r.sg,r.JJ,l],encapsulation:2});const C=[{path:"pipes",component:u(7556).c,children:[{path:"built-in",component:s},{path:"custom",component:c}]}];class i{}i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[A.Bz.forChild(C),A.Bz]});var b=u(4466);class a{}a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[r.ez,i,b.m]})},7556:(U,m,u)=>{u.d(m,{c:()=>e});var r=u(8256),A=u(7459),_=u(3686);class e{}e.\u0275fac=function(Z){return new(Z||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-master"]],decls:3,vars:0,consts:[[1,"container"]],template:function(Z,T){1&Z&&(r._UZ(0,"app-menu"),r.TgZ(1,"div",0),r._UZ(2,"router-outlet"),r.qZA())},dependencies:[A.lC,_.M],encapsulation:2})}}]);