webpackJsonp([1],{"+h1B":function(n,l,t){"use strict";var e=t("/oeL"),i=t("aR8+"),o=t("wQAS"),u=t("q4dy"),a=t("qbdv"),r=t("fc+i"),s=t("f9zQ"),d=t("fL27"),c=t("EyWH"),p=t("CPp0"),g=t("8W49"),f=t("48IG"),m=t("6ReJ"),h=(t.n(m),t("u+1Z"));t.n(h);t.d(l,"a",function(){return x});var x=e["ɵcmf"](i.a,[o.a],function(n){return e["ɵmod"]([e["ɵmpd"](512,e.ComponentFactoryResolver,e["ɵCodegenComponentFactoryResolver"],[[8,[u.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["ɵmpd"](5120,e.LOCALE_ID,e["ɵm"],[[3,e.LOCALE_ID]]),e["ɵmpd"](4608,a.a,a.b,[e.LOCALE_ID]),e["ɵmpd"](4608,e.Compiler,e.Compiler,[]),e["ɵmpd"](5120,e.APP_ID,e["ɵf"],[]),e["ɵmpd"](5120,e.IterableDiffers,e["ɵk"],[]),e["ɵmpd"](5120,e.KeyValueDiffers,e["ɵl"],[]),e["ɵmpd"](4608,r.b,r.c,[r.d]),e["ɵmpd"](6144,e.Sanitizer,null,[r.b]),e["ɵmpd"](4608,r.e,r.f,[]),e["ɵmpd"](5120,r.g,function(n,l,t,e){return[new r.h(n),new r.i(l),new r.j(t,e)]},[r.d,r.d,r.d,r.e]),e["ɵmpd"](4608,r.k,r.k,[r.g,e.NgZone]),e["ɵmpd"](135680,r.l,r.l,[r.d]),e["ɵmpd"](4608,r.m,r.m,[r.k,r.l]),e["ɵmpd"](5120,s.a,d.a,[]),e["ɵmpd"](5120,s.b,d.b,[]),e["ɵmpd"](4608,s.c,d.c,[s.a,s.b]),e["ɵmpd"](5120,e.RendererFactory2,d.d,[r.m,s.c,e.NgZone]),e["ɵmpd"](6144,r.n,null,[r.l]),e["ɵmpd"](4608,e.Testability,e.Testability,[e.NgZone]),e["ɵmpd"](4608,r.o,r.o,[r.d]),e["ɵmpd"](4608,r.p,r.p,[r.d]),e["ɵmpd"](4608,c.a,d.e,[e.RendererFactory2]),e["ɵmpd"](4608,p.a,p.a,[]),e["ɵmpd"](4608,p.b,p.c,[]),e["ɵmpd"](5120,p.d,p.e,[]),e["ɵmpd"](4608,p.f,p.f,[p.a,p.b,p.d]),e["ɵmpd"](4608,p.g,p.h,[]),e["ɵmpd"](5120,p.i,p.j,[p.f,p.g]),e["ɵmpd"](4608,g.a,g.a,[p.i]),e["ɵmpd"](4608,f.a,f.a,[]),e["ɵmpd"](512,a.c,a.c,[]),e["ɵmpd"](1024,e.ErrorHandler,r.q,[]),e["ɵmpd"](1024,e.APP_INITIALIZER,function(n,l){return[r.r(n,l)]},[[2,r.s],[2,e.NgProbeToken]]),e["ɵmpd"](512,e.ApplicationInitStatus,e.ApplicationInitStatus,[[2,e.APP_INITIALIZER]]),e["ɵmpd"](131584,e["ɵe"],e["ɵe"],[e.NgZone,e["ɵConsole"],e.Injector,e.ErrorHandler,e.ComponentFactoryResolver,e.ApplicationInitStatus]),e["ɵmpd"](2048,e.ApplicationRef,null,[e["ɵe"]]),e["ɵmpd"](512,e.ApplicationModule,e.ApplicationModule,[e.ApplicationRef]),e["ɵmpd"](512,r.t,r.t,[[3,r.t]]),e["ɵmpd"](512,d.f,d.f,[]),e["ɵmpd"](512,p.k,p.k,[]),e["ɵmpd"](512,m.ChartsModule,m.ChartsModule,[]),e["ɵmpd"](512,h.NouisliderModule,h.NouisliderModule,[]),e["ɵmpd"](512,i.a,i.a,[])])})},"/Aqq":function(n,l,t){"use strict";var e=t("8W49");t.d(l,"a",function(){return i});var i=function(){function n(n){this.twitter=n,this.custom="",this.result="",this.res="",this.ownTwitter=!1,this.arousal="",this.showSpinner=!1,this.someKeyboardConfig={pips:{mode:"count",density:1,values:6,stepped:!0}}}return n.prototype.onEnter=function(n){console.log("aaa"),this.getTweet(n,"own"),this.showSpinner=!0},n.prototype.ngOnInit=function(){},n.prototype.getTweet=function(n,l){var t=this;this.twitter.getTweet(n).subscribe(function(n){console.log(n),"none"===l||(t.ownTwitter=!0,t.showSpinner=!1,t.res=n,console.log("show reeeeeeeees",n.arousal)),n.arousal>4?n.arousal="High ⬆️":n.arousal="Low ⬇️"})},n.ctorParameters=function(){return[{type:e.a}]},n}()},0:function(n,l,t){n.exports=t("cDNt")},"2oX3":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[".bot[_ngcontent-%COMP%]{text-align:center;width:100%}.typing-container[_ngcontent-%COMP%]{width:50px;height:70px;margin-left:3px;border-radius:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;line-height:70px;-ms-flex-pack:distribute;justify-content:space-around;padding-left:15px;padding-right:5px;max-width:500px;float:left;padding-top:25px}.typing-indicator[_ngcontent-%COMP%]{width:10px;height:10px;background-color:#1985a1;border-radius:10px;margin-top:10px;margin-left:3px;-webkit-animation:2s jump infinite;animation:2s jump infinite}.typing-indicator[_ngcontent-%COMP%]:first-of-type{-webkit-animation-delay:0s;animation-delay:0s}.typing-indicator[_ngcontent-%COMP%]:nth-of-type(2){-webkit-animation-delay:.1s;animation-delay:.1s}.typing-indicator[_ngcontent-%COMP%]:nth-of-type(3){-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes jump{0%{margin-top:10px}10%{margin-top:0}20%{margin-top:10px}to{margin-top:10px}}@keyframes jump{0%{margin-top:10px}10%{margin-top:0}20%{margin-top:10px}to{margin-top:10px}}.bot-box[_ngcontent-%COMP%]{width:320px;height:80px;border-radius:20px 20px 20px 5px;background:#fff;margin-bottom:20px;margin-left:10px}.showText[_ngcontent-%COMP%]{margin-left:3px;border-radius:10px;display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:15px;padding-right:5px;max-width:500px;float:left;padding:10px}.messages[_ngcontent-%COMP%]{display:inline-block;width:300px;height:120px}.bot-image[_ngcontent-%COMP%]{width:150px;height:150px}.container-bot[_ngcontent-%COMP%]{text-align:center}"]},"48IG":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n.ctorParameters=function(){return[]},n}()},"8Sw2":function(n,l,t){function e(n){return t(i(n))}function i(n){var l=o[n];if(!(l+1))throw new Error("Cannot find module '"+n+"'.");return l}var o={"./af":"FQor","./af.js":"FQor","./ar":"EcI0","./ar-dz":"cw72","./ar-dz.js":"cw72","./ar-kw":"fu+8","./ar-kw.js":"fu+8","./ar-ly":"7CVz","./ar-ly.js":"7CVz","./ar-ma":"1dFW","./ar-ma.js":"1dFW","./ar-sa":"UxV2","./ar-sa.js":"UxV2","./ar-tn":"nm31","./ar-tn.js":"nm31","./ar.js":"EcI0","./az":"EbpX","./az.js":"EbpX","./be":"SQlX","./be.js":"SQlX","./bg":"R3V+","./bg.js":"R3V+","./bn":"cAX3","./bn.js":"cAX3","./bo":"dHgA","./bo.js":"dHgA","./br":"W7ww","./br.js":"W7ww","./bs":"lZ6K","./bs.js":"lZ6K","./ca":"udbC","./ca.js":"udbC","./cs":"oSQb","./cs.js":"oSQb","./cv":"yPEm","./cv.js":"yPEm","./cy":"PpYB","./cy.js":"PpYB","./da":"oiZG","./da.js":"oiZG","./de":"LYe6","./de-at":"KOG5","./de-at.js":"KOG5","./de-ch":"o3JY","./de-ch.js":"o3JY","./de.js":"LYe6","./dv":"OkYT","./dv.js":"OkYT","./el":"QFnp","./el.js":"QFnp","./en-au":"dBGl","./en-au.js":"dBGl","./en-ca":"vv0C","./en-ca.js":"vv0C","./en-gb":"IoCy","./en-gb.js":"IoCy","./en-ie":"qVAg","./en-ie.js":"qVAg","./en-nz":"FbT0","./en-nz.js":"FbT0","./eo":"y/6j","./eo.js":"y/6j","./es":"ivpd","./es-do":"DBbP","./es-do.js":"DBbP","./es.js":"ivpd","./et":"FrUj","./et.js":"FrUj","./eu":"LAVD","./eu.js":"LAVD","./fa":"J2cK","./fa.js":"J2cK","./fi":"5FCP","./fi.js":"5FCP","./fo":"jIZb","./fo.js":"jIZb","./fr":"Lq8I","./fr-ca":"ICRA","./fr-ca.js":"ICRA","./fr-ch":"QWmo","./fr-ch.js":"QWmo","./fr.js":"Lq8I","./fy":"Fbnp","./fy.js":"Fbnp","./gd":"zhFu","./gd.js":"zhFu","./gl":"o10m","./gl.js":"o10m","./gom-latn":"UoXv","./gom-latn.js":"UoXv","./he":"gbvS","./he.js":"gbvS","./hi":"+UQz","./hi.js":"+UQz","./hr":"qGYH","./hr.js":"qGYH","./hu":"hGGh","./hu.js":"hGGh","./hy-am":"1AR5","./hy-am.js":"1AR5","./id":"Ie9h","./id.js":"Ie9h","./is":"piS+","./is.js":"piS+","./it":"5P9/","./it.js":"5P9/","./ja":"3cRe","./ja.js":"3cRe","./jv":"vwCJ","./jv.js":"vwCJ","./ka":"R7aq","./ka.js":"R7aq","./kk":"d8hV","./kk.js":"d8hV","./km":"nCdc","./km.js":"nCdc","./kn":"5K8n","./kn.js":"5K8n","./ko":"1jN3","./ko.js":"1jN3","./ky":"74/W","./ky.js":"74/W","./lb":"XAyT","./lb.js":"XAyT","./lo":"w/Mz","./lo.js":"w/Mz","./lt":"IetG","./lt.js":"IetG","./lv":"CRPd","./lv.js":"CRPd","./me":"1mee","./me.js":"1mee","./mi":"yRr3","./mi.js":"yRr3","./mk":"bfn1","./mk.js":"bfn1","./ml":"r1ky","./ml.js":"r1ky","./mr":"+K6p","./mr.js":"+K6p","./ms":"asMk","./ms-my":"IcWU","./ms-my.js":"IcWU","./ms.js":"asMk","./my":"Isng","./my.js":"Isng","./nb":"FjNp","./nb.js":"FjNp","./ne":"P9zQ","./ne.js":"P9zQ","./nl":"pejQ","./nl-be":"c3/i","./nl-be.js":"c3/i","./nl.js":"pejQ","./nn":"ALD8","./nn.js":"ALD8","./pa-in":"1YTd","./pa-in.js":"1YTd","./pl":"Gs99","./pl.js":"Gs99","./pt":"eunO","./pt-br":"uHKL","./pt-br.js":"uHKL","./pt.js":"eunO","./ro":"1FZw","./ro.js":"1FZw","./ru":"Cy48","./ru.js":"Cy48","./sd":"+28k","./sd.js":"+28k","./se":"EiHj","./se.js":"EiHj","./si":"77bI","./si.js":"77bI","./sk":"BgyH","./sk.js":"BgyH","./sl":"K7sG","./sl.js":"K7sG","./sq":"pwQJ","./sq.js":"pwQJ","./sr":"N0T2","./sr-cyrl":"9OoP","./sr-cyrl.js":"9OoP","./sr.js":"N0T2","./ss":"Mh9L","./ss.js":"Mh9L","./sv":"YZAt","./sv.js":"YZAt","./sw":"/7jV","./sw.js":"/7jV","./ta":"VKBt","./ta.js":"VKBt","./te":"TIcV","./te.js":"TIcV","./tet":"BlC1","./tet.js":"BlC1","./th":"Zi3L","./th.js":"Zi3L","./tl-ph":"D4Y9","./tl-ph.js":"D4Y9","./tlh":"muBP","./tlh.js":"muBP","./tr":"82s3","./tr.js":"82s3","./tzl":"vjXv","./tzl.js":"vjXv","./tzm":"Vhfe","./tzm-latn":"m0Pg","./tzm-latn.js":"m0Pg","./tzm.js":"Vhfe","./uk":"Y3Ex","./uk.js":"Y3Ex","./ur":"4DIg","./ur.js":"4DIg","./uz":"wDue","./uz-latn":"Li28","./uz-latn.js":"Li28","./uz.js":"wDue","./vi":"UbP6","./vi.js":"UbP6","./x-pseudo":"fQLM","./x-pseudo.js":"fQLM","./yo":"evMD","./yo.js":"evMD","./zh-cn":"DV5H","./zh-cn.js":"DV5H","./zh-hk":"iEKH","./zh-hk.js":"iEKH","./zh-tw":"X9uL","./zh-tw.js":"X9uL"};e.keys=function(){return Object.keys(o)},e.resolve=i,n.exports=e,e.id="8Sw2"},"8W49":function(n,l,t){"use strict";var e=t("CPp0"),i=t("Dqrr");t.n(i);t.d(l,"a",function(){return o});var o=function(){function n(n){this.http=n}return n.prototype.getTweet=function(n){var l={params:{user:n}};return this.http.get("https://emolizer.herokuapp.com/",l).map(function(n){return n.json()})},n.ctorParameters=function(){return[{type:e.i}]},n}()},JyZc:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[".section[_ngcontent-%COMP%]{min-width:350px;text-align:center;margin:auto;max-width:450px}.section2[_ngcontent-%COMP%]{width:100%;text-align:center;margin-right:30px}.tweet[_ngcontent-%COMP%]{height:100%;margin:10px}.tweet[_ngcontent-%COMP%], .tweet2[_ngcontent-%COMP%]{background:#dcdcdd}.tweet2[_ngcontent-%COMP%]{height:700px}[_nghost-%COMP%]{display:block;padding:0 8px;color:#292f33;font-size:14px;line-height:18px}.user[_ngcontent-%COMP%]{float:left;margin-top:5px}.name[_ngcontent-%COMP%]{float:left;font-weight:700;color:#292f33;font-size:14px;line-height:18px;margin-right:5px}.username[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.tweet[_ngcontent-%COMP%]{max-width:450px}.tweet[_ngcontent-%COMP%], .tweet2[_ngcontent-%COMP%]{min-width:350px;height:80px;border-top:1px solid #e5e5e5;border-left:1px solid #e5e5e5;border-right:1px solid #e5e5e5;background-color:#fff;text-align:left}.tweet2[_ngcontent-%COMP%]{margin:10px}img[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:30px;margin-right:10px;margin-top:5px;margin-left:5px}.left[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{float:left}.left[_ngcontent-%COMP%]{margin-top:3px}.right[_ngcontent-%COMP%]{margin-left:10px;display:inline-block}.text[_ngcontent-%COMP%]{margin-top:-10px;font-size:12px}.tweets[_ngcontent-%COMP%]{margin-left:400px}.retweets[_ngcontent-%COMP%]{background-image:url(/gradient-emotional-analysis/img/retweet.JPG) repeat 0 0}button[_ngcontent-%COMP%]{margin-left:20px}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{margin-bottom:20px;margin-top:50px}input[_ngcontent-%COMP%]{float:left;margin-left:400px}.classification[_ngcontent-%COMP%]{height:80px;background:#fff;padding-bottom:50px;font:20px;min-width:350px;max-width:450px;margin:10px}.classification[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-top:10px}.classification2[_ngcontent-%COMP%]{margin:10px;min-width:350px;max-width:700px;height:80px;background:#fff;padding-bottom:50px;font:20px}.classification2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-top:10px}.classification2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .classification[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:20px;margin-bottom:10px}.noUiSlider[_ngcontent-%COMP%]{float:left;width:300px;margin-left:80px}.classification2[_ngcontent-%COMP%]   .noUiSlider[_ngcontent-%COMP%]{width:90%;margin-left:35px}.custom[_ngcontent-%COMP%]{width:100%;float:left}.custom[_ngcontent-%COMP%], .custom-main[_ngcontent-%COMP%]{text-align:center}.custom-main[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-left:0;float:none}.section-inline[_ngcontent-%COMP%]{text-align:center;display:inline-block}.spinner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{float:none;width:120px;height:120px}.prob[_ngcontent-%COMP%]{color:grey;font-size:14px}.wrapper[_ngcontent-%COMP%]{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}"]},N2rp:function(n,l,t){"use strict";function e(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,null,null,16,"div",[["class","classification"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵeld"](0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),s["ɵted"](null,["Classification:"])),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵeld"](0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(n()(),s["ɵted"](null,["Sentiment: "," "," "])),(n()(),s["ɵeld"](0,null,null,1,"span",[["class","prob"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["","%"])),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵeld"](0,null,null,1,"div",[],null,null,null,null,null)),(n()(),s["ɵted"](null,["Arousal: "," "])),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵted"](null,["\n    "]))],null,function(n,l){n(l,9,0,l.parent.context.$implicit.classification,l.parent.context.$implicit.emoji),n(l,11,0,l.parent.context.$implicit.probability),n(l,14,0,l.parent.context.$implicit.arousal)})}function i(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,null,null,28,"div",[["class","section"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n    "])),(n()(),s["ɵeld"](0,null,null,22,"div",[["class","tweet"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵeld"](0,null,null,0,"img",[["class","picture"]],[[8,"src",4]],null,null,null,null)),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵeld"](0,null,null,9,"div",[["class","user"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n        "])),(n()(),s["ɵeld"](0,null,null,0,"div",[["class","name"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n        "])),(n()(),s["ɵeld"](0,null,null,1,"span",[["class","username"]],null,null,null,null,null)),(n()(),s["ɵted"](null,[" ",""])),(n()(),s["ɵted"](null,["\n        "])),(n()(),s["ɵeld"](0,null,null,1,"span",[],null,null,null,null,null)),(n()(),s["ɵted"](null,["@",""])),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵted"](null,[" "])),(n()(),s["ɵeld"](0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s["ɵeld"](0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵeld"](0,null,null,1,"div",[["class","text"]],null,null,null,null,null)),(n()(),s["ɵted"](null,[" ",""])),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵted"](null,["\n    "])),(n()(),s["ɵted"](null,["\n    "])),(n()(),s["ɵand"](16777216,null,null,1,null,e)),s["ɵdid"](16384,null,0,d.f,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),s["ɵted"](null,["\n  "]))],function(n,l){n(l,27,0,l.component.results)},function(n,l){n(l,4,0,l.context.$implicit.picture),n(l,12,0,l.context.$implicit.name),n(l,15,0,l.context.$implicit.screen_name),n(l,22,0,l.context.$implicit.sentence)})}function o(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,null,null,4,"div",[["class","wrapper"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n  "])),(n()(),s["ɵand"](16777216,null,null,1,null,i)),s["ɵdid"](802816,null,0,d.g,[s.ViewContainerRef,s.TemplateRef,s.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),s["ɵted"](null,["\n"]))],function(n,l){n(l,3,0,l.component.results)},null)}function u(n){return s["ɵvid"](0,[(n()(),s["ɵted"](null,["\n"])),(n()(),s["ɵand"](16777216,null,null,1,null,o)),s["ɵdid"](16384,null,0,d.f,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,l.component.displayExamples)},null)}function a(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,null,null,1,"app-twitter-feed",[],null,null,null,u,m)),s["ɵdid"](114688,null,0,c.a,[p.a,g.a,s.ChangeDetectorRef],null,null)],function(n,l){n(l,1,0)},null)}var r=t("JyZc"),s=t("/oeL"),d=t("qbdv"),c=t("nL5L"),p=t("8W49"),g=t("48IG");t.d(l,"b",function(){return m}),l.a=u;var f=[r.a],m=s["ɵcrt"]({encapsulation:0,styles:f,data:{}});s["ɵccf"]("app-twitter-feed",c.a,a,{},{},[])},NhKt:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=['.noUi-target[_ngcontent-%COMP%], .noUi-target[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-ms-touch-action:none;touch-action:none;-ms-user-select:none;-moz-user-select:none;user-select:none;box-sizing:border-box}.noUi-target[_ngcontent-%COMP%]{position:relative;direction:ltr}.noUi-base[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;z-index:1}.noUi-connect[_ngcontent-%COMP%]{position:absolute;right:0;top:0;left:0;bottom:0}.noUi-origin[_ngcontent-%COMP%]{position:absolute;height:0;width:0}.noUi-handle[_ngcontent-%COMP%]{position:relative;z-index:1}.noUi-state-tap[_ngcontent-%COMP%]   .noUi-connect[_ngcontent-%COMP%], .noUi-state-tap[_ngcontent-%COMP%]   .noUi-origin[_ngcontent-%COMP%]{transition:top .3s,right .3s,bottom .3s,left .3s}.noUi-state-drag[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{cursor:inherit!important}.noUi-base[_ngcontent-%COMP%], .noUi-handle[_ngcontent-%COMP%]{-webkit-transform:translateZ(0);transform:translateZ(0)}.noUi-horizontal[_ngcontent-%COMP%]{height:18px}.noUi-horizontal[_ngcontent-%COMP%]   .noUi-handle[_ngcontent-%COMP%]{width:34px;height:28px;left:-17px;top:-6px}.noUi-vertical[_ngcontent-%COMP%]{width:18px}.noUi-vertical[_ngcontent-%COMP%]   .noUi-handle[_ngcontent-%COMP%]{width:28px;height:34px;left:-6px;top:-17px}.noUi-target[_ngcontent-%COMP%]{background:#fafafa;border-radius:4px;border:1px solid #d3d3d3;box-shadow:inset 0 1px 1px #f0f0f0,0 3px 6px -5px #bbb}.noUi-connect[_ngcontent-%COMP%]{background:#3fb8af;border-radius:4px;box-shadow:inset 0 0 3px rgba(51,51,51,.45);transition:background .45s}.noUi-draggable[_ngcontent-%COMP%]{cursor:ew-resize}.noUi-vertical[_ngcontent-%COMP%]   .noUi-draggable[_ngcontent-%COMP%]{cursor:ns-resize}.noUi-handle[_ngcontent-%COMP%]{border:1px solid #d9d9d9;border-radius:3px;background:#fff;cursor:default;box-shadow:inset 0 0 1px #fff,inset 0 1px 7px #ebebeb,0 3px 6px -3px #bbb}.noUi-active[_ngcontent-%COMP%]{box-shadow:inset 0 0 1px #fff,inset 0 1px 7px #ddd,0 3px 6px -3px #bbb}.noUi-handle[_ngcontent-%COMP%]:after, .noUi-handle[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;height:14px;width:1px;background:#e8e7e6;left:14px;top:6px}.noUi-handle[_ngcontent-%COMP%]:after{left:17px}.noUi-vertical[_ngcontent-%COMP%]   .noUi-handle[_ngcontent-%COMP%]:after, .noUi-vertical[_ngcontent-%COMP%]   .noUi-handle[_ngcontent-%COMP%]:before{width:14px;height:1px;left:6px;top:14px}.noUi-vertical[_ngcontent-%COMP%]   .noUi-handle[_ngcontent-%COMP%]:after{top:17px}[disabled][_ngcontent-%COMP%]   .noUi-connect[_ngcontent-%COMP%]{background:#b8b8b8}[disabled].noUi-handle[_ngcontent-%COMP%], [disabled][_ngcontent-%COMP%]   .noUi-handle[_ngcontent-%COMP%], [disabled].noUi-target[_ngcontent-%COMP%]{cursor:not-allowed}.noUi-pips[_ngcontent-%COMP%], .noUi-pips[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}.noUi-pips[_ngcontent-%COMP%]{position:absolute;color:#999}.noUi-value[_ngcontent-%COMP%]{position:absolute;white-space:nowrap;text-align:center}.noUi-value-sub[_ngcontent-%COMP%]{color:#ccc;font-size:10px}.noUi-marker[_ngcontent-%COMP%]{position:absolute;background:#ccc}.noUi-marker-large[_ngcontent-%COMP%], .noUi-marker-sub[_ngcontent-%COMP%]{background:#aaa}.noUi-pips-horizontal[_ngcontent-%COMP%]{padding:10px 0;height:80px;top:100%;left:0;width:100%}.noUi-value-horizontal[_ngcontent-%COMP%]{-webkit-transform:translate3d(-50%,50%,0);transform:translate3d(-50%,50%,0)}.noUi-marker-horizontal.noUi-marker[_ngcontent-%COMP%]{margin-left:-1px;width:2px;height:5px}.noUi-marker-horizontal.noUi-marker-sub[_ngcontent-%COMP%]{height:10px}.noUi-marker-horizontal.noUi-marker-large[_ngcontent-%COMP%]{height:15px}.noUi-pips-vertical[_ngcontent-%COMP%]{padding:0 10px;height:100%;top:0;left:100%}.noUi-value-vertical[_ngcontent-%COMP%]{-webkit-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0);padding-left:25px}.noUi-marker-vertical.noUi-marker[_ngcontent-%COMP%]{width:5px;height:2px;margin-top:-1px}.noUi-marker-vertical.noUi-marker-sub[_ngcontent-%COMP%]{width:10px}.noUi-marker-vertical.noUi-marker-large[_ngcontent-%COMP%]{width:15px}.noUi-tooltip[_ngcontent-%COMP%]{display:block;position:absolute;border:1px solid #d9d9d9;border-radius:3px;background:#fff;color:#000;padding:5px;text-align:center;white-space:nowrap}.noUi-horizontal[_ngcontent-%COMP%]   .noUi-tooltip[_ngcontent-%COMP%]{-webkit-transform:translate(-50%);transform:translate(-50%);left:50%;bottom:120%}.noUi-vertical[_ngcontent-%COMP%]   .noUi-tooltip[_ngcontent-%COMP%]{-webkit-transform:translateY(-50%);transform:translateY(-50%);top:50%;right:120%}@media only screen and (min-device-width:320px) and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2){color:red}']},"aR8+":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n}()},cDNt:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=t("/oeL"),i=t("p5Ee"),o=t("+h1B"),u=t("fc+i");i.a.production&&t.i(e.enableProdMode)(),t.i(u.a)().bootstrapModuleFactory(o.a)},iEgE:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){this.showText="",this.showText2="",this.text=!1,this.message2=!1,this.messages=["aaaaa","bbbbb"]}return n.prototype.ngOnInit=function(){var n=this;this.text=!0,setTimeout(function(){n.showText="Hi there, I'm Emotional Analyzer! Powered by AI, I can evaluate sentiment and arousal level of tweets..."},5e3),setTimeout(function(){n.showText2="Check out what I can do..."},7e3),setTimeout(function(){n.message2=!0},5e3)},n.ctorParameters=function(){return[]},n}()},nL5L:function(n,l,t){"use strict";var e=t("/oeL"),i=t("8W49"),o=t("48IG");t.d(l,"a",function(){return u});var u=function(){function n(n,l,t){this.twitter=n,this.coordinates=l,this.ref=t,this.imageURL="",this.name="",this.status="",this.arousal="",this.someRange=2,this.classification="",this.probability=0,this.showSpinner=!1,this.test=20,this.someKeyboardConfig={pips:{mode:"count",density:1,values:2,stepped:!0}},this.results=[],this.custom="",this.res="",this.ownTwitter=!1,this.displayExamples=!1}return n.prototype.onEnter=function(n){this.getTweet(n,"own"),this.showSpinner=!0},n.prototype.ngOnInit=function(){for(var n=["malala","iamjohnoliver","elonmusk"],l=0;l<n.length;l++)this.getTweet(n[l],l)},n.prototype.getTweet=function(n,l){var t=this;this.twitter.getTweet(n).subscribe(function(n){console.log(n),t.results.push(n),2===l&&(t.displayExamples=!0),t.result=t.coordinates.value,n.arousal>4?n.arousal="High ⬆️":n.arousal="Low ⬇️",t.prob=100*n.probability.toFixed(2),n.probability=parseInt(t.prob)})},n.ctorParameters=function(){return[{type:i.a},{type:o.a},{type:e.ChangeDetectorRef}]},n}()},o3pc:function(n,l,t){"use strict";function e(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,null,null,3,"div",[["class","spinner"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n          "])),(n()(),s["ɵeld"](0,null,null,0,"img",[["height","100"],["src","assets/default (1).gif"],["width","100"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n      "]))],null,null)}function i(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,null,null,14,"div",[["class","classification2"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n        "])),(n()(),s["ɵted"](null,["\n        "])),(n()(),s["ɵeld"](0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),s["ɵted"](null,["Classification:"])),(n()(),s["ɵted"](null,["\n        "])),(n()(),s["ɵeld"](0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n        "])),(n()(),s["ɵeld"](0,null,null,1,"div",[],null,null,null,null,null)),(n()(),s["ɵted"](null,["Sentiment: "," "," "])),(n()(),s["ɵted"](null,["\n        "])),(n()(),s["ɵeld"](0,null,null,1,"div",[],null,null,null,null,null)),(n()(),s["ɵted"](null,["Arousal: "," "])),(n()(),s["ɵted"](null,["\n        "])),(n()(),s["ɵted"](null,["\n      "]))],null,function(n,l){var t=l.component;n(l,9,0,t.res.classification,t.res.emoji),n(l,12,0,t.res.arousal)})}function o(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,null,null,34,"div",[],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n  "])),(n()(),s["ɵeld"](0,null,null,31,"div",[["class","section2"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n    "])),(n()(),s["ɵeld"](0,null,null,28,"div",[["class","section-inline"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵeld"](0,null,null,22,"div",[["class","tweet2"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n        "])),(n()(),s["ɵeld"](0,null,null,0,"img",[["class","picture"]],[[8,"src",4]],null,null,null,null)),(n()(),s["ɵted"](null,["\n        "])),(n()(),s["ɵted"](null,["\n        "])),(n()(),s["ɵeld"](0,null,null,9,"div",[["class","user"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n          "])),(n()(),s["ɵeld"](0,null,null,0,"div",[["class","name"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n          "])),(n()(),s["ɵeld"](0,null,null,1,"span",[["class","username"]],null,null,null,null,null)),(n()(),s["ɵted"](null,[" ",""])),(n()(),s["ɵted"](null,["\n          "])),(n()(),s["ɵeld"](0,null,null,1,"span",[],null,null,null,null,null)),(n()(),s["ɵted"](null,["@",""])),(n()(),s["ɵted"](null,["\n        "])),(n()(),s["ɵted"](null,[" "])),(n()(),s["ɵeld"](0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s["ɵeld"](0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n        "])),(n()(),s["ɵeld"](0,null,null,1,"div",[["class","text"]],null,null,null,null,null)),(n()(),s["ɵted"](null,[" ",""])),(n()(),s["ɵted"](null,["\n        "])),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵand"](16777216,null,null,1,null,i)),s["ɵdid"](16384,null,0,d.f,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),s["ɵted"](null,["\n    "])),(n()(),s["ɵted"](null,["\n  "])),(n()(),s["ɵted"](null,["\n"]))],function(n,l){n(l,31,0,l.component.res)},function(n,l){var t=l.component;n(l,8,0,t.res.picture),n(l,16,0,t.res.name),n(l,19,0,t.res.screen_name),n(l,26,0,t.res.sentence)})}function u(n){return s["ɵvid"](0,[(n()(),s["ɵted"](null,["\n"])),(n()(),s["ɵeld"](0,null,null,12,"div",[["class","custom"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n  "])),(n()(),s["ɵeld"](0,null,null,9,"div",[["class","custom-main"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n    "])),(n()(),s["ɵeld"](0,[["box",1]],null,0,"input",[],null,[[null,"keyup.enter"]],function(n,l,t){var e=!0,i=n.component;if("keyup.enter"===l){e=!1!==i.onEnter(s["ɵnov"](n,5).value)&&e}return e},null,null)),(n()(),s["ɵted"](null,["\n    "])),(n()(),s["ɵeld"](0,null,null,1,"button",[["class","btn"]],null,[[null,"click"]],function(n,l,t){var e=!0,i=n.component;if("click"===l){e=!1!==i.onEnter(s["ɵnov"](n,5).value)&&e}return e},null,null)),(n()(),s["ɵted"](null,["Search by twitter handler"])),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵand"](16777216,null,null,1,null,e)),s["ɵdid"](16384,null,0,d.f,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),s["ɵted"](null,["\n  "])),(n()(),s["ɵted"](null,["\n\n"])),(n()(),s["ɵted"](null,["\n"])),(n()(),s["ɵted"](null,["\n  "])),(n()(),s["ɵand"](16777216,null,null,1,null,o)),s["ɵdid"](16384,null,0,d.f,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),s["ɵted"](null,["\n"]))],function(n,l){var t=l.component;n(l,11,0,t.showSpinner),n(l,17,0,t.res)},null)}function a(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,null,null,1,"app-custom",[],null,null,null,u,f)),s["ɵdid"](114688,null,0,c.a,[p.a],null,null)],function(n,l){n(l,1,0)},null)}var r=t("JyZc"),s=t("/oeL"),d=t("qbdv"),c=t("/Aqq"),p=t("8W49");t.d(l,"b",function(){return f}),l.a=u;var g=[r.a],f=s["ɵcrt"]({encapsulation:0,styles:g,data:{}});s["ɵccf"]("app-custom",c.a,a,{},{},[])},p5Ee:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e={production:!0}},q4dy:function(n,l,t){"use strict";function e(n){return u["ɵvid"](0,[(n()(),u["ɵted"](null,["\n\n "])),(n()(),u["ɵeld"](0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u["ɵted"](null,["\n    Gradient Emotional Analysis!\n  "])),(n()(),u["ɵted"](null,["\n  "])),(n()(),u["ɵeld"](0,null,null,10,"div",[["style","text-align:center"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["\n \n  "])),(n()(),u["ɵeld"](0,null,null,1,"app-botalike",[],null,null,null,a.a,a.b)),u["ɵdid"](114688,null,0,r.a,[],null,null),(n()(),u["ɵted"](null,["\n  "])),(n()(),u["ɵeld"](0,null,null,1,"app-custom",[],null,null,null,s.a,s.b)),u["ɵdid"](114688,null,0,d.a,[c.a],null,null),(n()(),u["ɵted"](null,["\n  "])),(n()(),u["ɵeld"](0,null,null,1,"app-twitter-feed",[["style","width:100%, padding: 0px"]],null,null,null,p.a,p.b)),u["ɵdid"](114688,null,0,g.a,[c.a,f.a,u.ChangeDetectorRef],null,null),(n()(),u["ɵted"](null,["\n  "]))],function(n,l){n(l,7,0),n(l,10,0),n(l,13,0)},null)}function i(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,1,"app-root",[],null,null,null,e,x)),u["ɵdid"](49152,null,0,m.a,[],null,null)],null,null)}var o=t("NhKt"),u=t("/oeL"),a=t("tF6N"),r=t("iEgE"),s=t("o3pc"),d=t("/Aqq"),c=t("8W49"),p=t("N2rp"),g=t("nL5L"),f=t("48IG"),m=t("wQAS");t.d(l,"a",function(){return b});var h=[o.a],x=u["ɵcrt"]({encapsulation:0,styles:h,data:{}}),b=u["ɵccf"]("app-root",m.a,i,{},{},[])},qtrl:function(n,l){function t(n){throw new Error("Cannot find module '"+n+"'.")}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="qtrl"},tF6N:function(n,l,t){"use strict";function e(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,null,null,7,"div",[["class","typing-container"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n            "])),(n()(),s["ɵeld"](0,null,null,0,"div",[["class","typing-indicator"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n            "])),(n()(),s["ɵeld"](0,null,null,0,"div",[["class","typing-indicator"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n            "])),(n()(),s["ɵeld"](0,null,null,0,"div",[["class","typing-indicator"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n          "]))],null,null)}function i(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,null,null,1,"div",[["class","showText"]],null,null,null,null,null)),(n()(),s["ɵted"](null,[" ",""]))],null,function(n,l){n(l,1,0,l.component.showText)})}function o(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,null,null,10,"div",[["class","animation"]],[[24,"@flyInOut",0]],null,null,null,null)),(n()(),s["ɵted"](null,["\n        "])),(n()(),s["ɵeld"](0,null,null,7,"div",[["class","bot-box"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n          "])),(n()(),s["ɵand"](16777216,null,null,1,null,e)),s["ɵdid"](16384,null,0,d.f,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),s["ɵted"](null,["\n          "])),(n()(),s["ɵand"](16777216,null,null,1,null,i)),s["ɵdid"](16384,null,0,d.f,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),s["ɵted"](null,["\n        "])),(n()(),s["ɵted"](null,["\n      "]))],function(n,l){var t=l.component;n(l,5,0,!t.showText),n(l,8,0,t.showText)},function(n,l){n(l,0,0,"in")})}function u(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,null,null,13,"div",[["class","container-bot"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n  "])),(n()(),s["ɵeld"](0,null,null,10,"div",[["class","bot"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n    "])),(n()(),s["ɵeld"](0,null,null,0,"img",[["class","bot-image"],["src","assets/robot (1).svg"],["title",'Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>']],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n    "])),(n()(),s["ɵeld"](0,null,null,5,"div",[["class","messages"]],null,null,null,null,null)),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵand"](16777216,null,null,1,null,o)),s["ɵdid"](16384,null,0,d.f,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),s["ɵted"](null,["\n      "])),(n()(),s["ɵted"](null,["\n    "])),(n()(),s["ɵted"](null,["\n  "])),(n()(),s["ɵted"](null,["\n"]))],function(n,l){n(l,9,0,l.component.text)},null)}function a(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,null,null,1,"app-botalike",[],null,null,null,u,g)),s["ɵdid"](114688,null,0,c.a,[],null,null)],function(n,l){n(l,1,0)},null)}var r=t("2oX3"),s=t("/oeL"),d=t("qbdv"),c=t("iEgE");t.d(l,"b",function(){return g}),l.a=u;var p=[r.a],g=s["ɵcrt"]({encapsulation:0,styles:p,data:{animation:[{type:7,name:"flyInOut",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{opacity:0,transform:"translateX(100%)"},offset:null},{type:4,styles:null,timings:"3s ease-in"}],options:null},{type:1,expr:"* => void",animation:[{type:4,styles:{type:6,styles:{opacity:0,transform:"translateX(100%)"},offset:null},timings:"0.2s 0.1s ease-out"}],options:null}],options:{}}]}});s["ɵccf"]("app-botalike",c.a,a,{},{},[])},wQAS:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){this.title="app"}return n}()}},[0]);