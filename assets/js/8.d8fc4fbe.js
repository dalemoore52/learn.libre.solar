(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{276:function(t,s,e){"use strict";var a=e(284),n=a.b.reactiveProp;s.a={extends:a.a,mixins:[n],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},283:function(t,s,e){var a={"./af":149,"./af.js":149,"./ar":150,"./ar-dz":151,"./ar-dz.js":151,"./ar-kw":152,"./ar-kw.js":152,"./ar-ly":153,"./ar-ly.js":153,"./ar-ma":154,"./ar-ma.js":154,"./ar-sa":155,"./ar-sa.js":155,"./ar-tn":156,"./ar-tn.js":156,"./ar.js":150,"./az":157,"./az.js":157,"./be":158,"./be.js":158,"./bg":159,"./bg.js":159,"./bm":160,"./bm.js":160,"./bn":161,"./bn.js":161,"./bo":162,"./bo.js":162,"./br":163,"./br.js":163,"./bs":164,"./bs.js":164,"./ca":165,"./ca.js":165,"./cs":166,"./cs.js":166,"./cv":167,"./cv.js":167,"./cy":168,"./cy.js":168,"./da":169,"./da.js":169,"./de":170,"./de-at":171,"./de-at.js":171,"./de-ch":172,"./de-ch.js":172,"./de.js":170,"./dv":173,"./dv.js":173,"./el":174,"./el.js":174,"./en-SG":175,"./en-SG.js":175,"./en-au":176,"./en-au.js":176,"./en-ca":177,"./en-ca.js":177,"./en-gb":178,"./en-gb.js":178,"./en-ie":179,"./en-ie.js":179,"./en-il":180,"./en-il.js":180,"./en-nz":181,"./en-nz.js":181,"./eo":182,"./eo.js":182,"./es":183,"./es-do":184,"./es-do.js":184,"./es-us":185,"./es-us.js":185,"./es.js":183,"./et":186,"./et.js":186,"./eu":187,"./eu.js":187,"./fa":188,"./fa.js":188,"./fi":189,"./fi.js":189,"./fo":190,"./fo.js":190,"./fr":191,"./fr-ca":192,"./fr-ca.js":192,"./fr-ch":193,"./fr-ch.js":193,"./fr.js":191,"./fy":194,"./fy.js":194,"./ga":195,"./ga.js":195,"./gd":196,"./gd.js":196,"./gl":197,"./gl.js":197,"./gom-latn":198,"./gom-latn.js":198,"./gu":199,"./gu.js":199,"./he":200,"./he.js":200,"./hi":201,"./hi.js":201,"./hr":202,"./hr.js":202,"./hu":203,"./hu.js":203,"./hy-am":204,"./hy-am.js":204,"./id":205,"./id.js":205,"./is":206,"./is.js":206,"./it":207,"./it-ch":208,"./it-ch.js":208,"./it.js":207,"./ja":209,"./ja.js":209,"./jv":210,"./jv.js":210,"./ka":211,"./ka.js":211,"./kk":212,"./kk.js":212,"./km":213,"./km.js":213,"./kn":214,"./kn.js":214,"./ko":215,"./ko.js":215,"./ku":216,"./ku.js":216,"./ky":217,"./ky.js":217,"./lb":218,"./lb.js":218,"./lo":219,"./lo.js":219,"./lt":220,"./lt.js":220,"./lv":221,"./lv.js":221,"./me":222,"./me.js":222,"./mi":223,"./mi.js":223,"./mk":224,"./mk.js":224,"./ml":225,"./ml.js":225,"./mn":226,"./mn.js":226,"./mr":227,"./mr.js":227,"./ms":228,"./ms-my":229,"./ms-my.js":229,"./ms.js":228,"./mt":230,"./mt.js":230,"./my":231,"./my.js":231,"./nb":232,"./nb.js":232,"./ne":233,"./ne.js":233,"./nl":234,"./nl-be":235,"./nl-be.js":235,"./nl.js":234,"./nn":236,"./nn.js":236,"./pa-in":237,"./pa-in.js":237,"./pl":238,"./pl.js":238,"./pt":239,"./pt-br":240,"./pt-br.js":240,"./pt.js":239,"./ro":241,"./ro.js":241,"./ru":242,"./ru.js":242,"./sd":243,"./sd.js":243,"./se":244,"./se.js":244,"./si":245,"./si.js":245,"./sk":246,"./sk.js":246,"./sl":247,"./sl.js":247,"./sq":248,"./sq.js":248,"./sr":249,"./sr-cyrl":250,"./sr-cyrl.js":250,"./sr.js":249,"./ss":251,"./ss.js":251,"./sv":252,"./sv.js":252,"./sw":253,"./sw.js":253,"./ta":254,"./ta.js":254,"./te":255,"./te.js":255,"./tet":256,"./tet.js":256,"./tg":257,"./tg.js":257,"./th":258,"./th.js":258,"./tl-ph":259,"./tl-ph.js":259,"./tlh":260,"./tlh.js":260,"./tr":261,"./tr.js":261,"./tzl":262,"./tzl.js":262,"./tzm":263,"./tzm-latn":264,"./tzm-latn.js":264,"./tzm.js":263,"./ug-cn":265,"./ug-cn.js":265,"./uk":266,"./uk.js":266,"./ur":267,"./ur.js":267,"./uz":268,"./uz-latn":269,"./uz-latn.js":269,"./uz.js":268,"./vi":270,"./vi.js":270,"./x-pseudo":271,"./x-pseudo.js":271,"./yo":272,"./yo.js":272,"./zh-cn":273,"./zh-cn.js":273,"./zh-hk":274,"./zh-hk.js":274,"./zh-tw":275,"./zh-tw.js":275};function n(t){var s=r(t);return e(s)}function r(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id=283},305:function(t,s,e){},416:function(t,s,e){"use strict";var a=e(305);e.n(a).a},422:function(t,s,e){"use strict";e.r(s);var a={components:{LineChart:e(276).a},data:function(){return{chartData:null,chartOptions:null}},mounted:function(){this.updateGraph()},methods:{updateGraph:function(){for(var t=[],s=0;s<=200;s+=5)t.push({x:s,y:this.I_cap(s)});var e=[];for(s=0;s<=200;s+=5)e.push({x:s,y:this.I_sc(s)});this.chartData={datasets:[{label:"Short circuit",pointRadius:0,borderWidth:2,borderColor:"#fbbe59",backgroundColor:"#fbbe59",fill:!1,data:e},{label:"Capacitive load",pointRadius:0,borderWidth:2,borderColor:"#005e85",backgroundColor:"#005e85",fill:!1,data:t}]},this.chartOptions={scales:{xAxes:[{type:"linear",display:!0,scaleLabel:{display:!0,labelString:"Time (µs)"},gridLines:{display:!0}}],yAxes:[{type:"linear",display:!0,scaleLabel:{display:!0,labelString:"Current (A)"},ticks:{beginAtZero:!0},gridLines:{display:!0}}]},legend:{usePointStyle:!0},tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!1}},I_cap:function(t){var s=1e-6*document.getElementById("wirelength").value,e=.001*document.getElementById("bat_ir").value,a=document.getElementById("voltage").value,n=1e-6*document.getElementById("capacitance").value,r=e+.001*document.getElementById("cap_esr").value+.0042*document.getElementById("wirelength").value,i=1/Math.sqrt(s*n),l=r/(2*s),j=Math.sqrt(Math.pow(i,2)-Math.pow(l,2));return a/(s*j)*Math.exp(-l*t*1e-6)*Math.sin(j*t*1e-6)},I_sc:function(t){var s=1e-6*document.getElementById("wirelength").value,e=document.getElementById("voltage").value,a=.001*document.getElementById("bat_ir").value+.0042*document.getElementById("wirelength").value;return e/a*(1-Math.exp(-a/s*t*1e-6))}}},n=(e(416),e(29)),r=Object(n.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticStyle:{overflow:"auto"}},[e("line-chart",{attrs:{"chart-data":t.chartData,options:t.chartOptions}}),t._v(" "),e("p"),e("div",{staticClass:"left"},[t._v("Battery voltage:")]),t._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"voltage",step:"2",value:"14"},on:{change:function(s){return t.updateGraph()}}}),t._v(" V")]),t._v(" "),e("div",{staticClass:"left"},[t._v("Battery and charge controller resistance: ")]),t._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"bat_ir",step:"5",value:"10"},on:{change:function(s){return t.updateGraph()}}}),t._v(" mΩ"),e("br")]),t._v(" "),e("div",{staticClass:"left"},[t._v("Total wire length: ")]),t._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"wirelength",step:"1",value:"1"},on:{change:function(s){return t.updateGraph()}}}),t._v(" m")]),t._v(" "),e("div",{staticClass:"left"},[t._v("Capacitance: ")]),t._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"capacitance",step:"100",value:"1000"},on:{change:function(s){return t.updateGraph()}}}),t._v(" µF"),e("br")]),t._v(" "),e("div",{staticClass:"left"},[t._v("Capacitor ESR: ")]),t._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"cap_esr",step:"5",value:"20"},on:{change:function(s){return t.updateGraph()}}}),t._v(" mΩ"),e("br")]),t._v(" "),e("p")],1)}),[],!1,null,null,null);s.default=r.exports}}]);