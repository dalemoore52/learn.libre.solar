(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{357:function(e,t,r){e.exports=r.p+"assets/img/docs_kicad_pads_clearance.3a087b51.png"},358:function(e,t,r){e.exports=r.p+"assets/img/docs_kicad_gerber_export.ffb68abc.png"},359:function(e,t,r){e.exports=r.p+"assets/img/docs_kicad_drill_file.c5be2c7a.png"},425:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"pcb-manufacturing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pcb-manufacturing"}},[e._v("#")]),e._v(" PCB Manufacturing")]),e._v(" "),a("p",[a("strong",[e._v("There are two options to send the manufacturing data of a PCB designed in KiCAD")]),e._v(":")]),e._v(" "),a("h2",{attrs:{id:"native-kicad-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#native-kicad-files"}},[e._v("#")]),e._v(" Native KiCAD Files")]),e._v(" "),a("p",[e._v("More and more PCB manufacturers accept native KiCAD board files "),a("strong",[e._v("(extension .kicad_pcb)")]),e._v(" which is the easiest way to get the PCB produced. Just the "),a("strong",[e._v(".kicad_pcb file")]),e._v(" is uploaded and then it is done.")]),e._v(" "),a("h2",{attrs:{id:"kicad-gerber-file-export"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kicad-gerber-file-export"}},[e._v("#")]),e._v(" KiCAD Gerber File Export")]),e._v(" "),a("p",[e._v("The Gerber export is a little bit more complicated.")]),e._v(" "),a("p",[e._v("After the board is opened in Pcbnew, the solder mask clearance and min width must be set to zero. This is important because the manufacturers normally want to define the clearance themselves based on their process. Setting it to zero makes it easier for them to shrink/enlarge the pads for the solder mask. The dialogue can be found under "),a("strong",[e._v("Dimensions > Pads to Mask Clearance")]),e._v(" as shown in "),a("strong",[e._v("Figure 1")]),e._v(" below:")]),e._v(" "),a("figure",[a("center",[a("img",{attrs:{src:r(357),alt:"Pads and Mask Clearance dialog",height:"auto",width:"auto"}}),e._v(" "),a("figcaption",[a("b",[e._v("Figure 1.")]),e._v(" Pads and Mask Clearance dialog.")])])],1),e._v(" "),a("p",[e._v("After that, open the Gerber export dialog under "),a("strong",[e._v("File > Plot")]),e._v(" and select at least the following layers for export:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Top")]),e._v(" (Top copper plane)")]),e._v(" "),a("li",[a("strong",[e._v("Bottom")]),e._v(" (Bottom copper plane)")]),e._v(" "),a("li",[a("strong",[e._v("In"),a("em",[e._v("X")]),e._v(".Cu")]),e._v(" (Internal copper planes, if existing)")]),e._v(" "),a("li",[a("strong",[e._v("B.Silk")]),e._v(" (Bottom silk screen: white plots with part names, etc.)")]),e._v(" "),a("li",[a("strong",[e._v("F.Silk")]),e._v(" (Front silk screen)")]),e._v(" "),a("li",[a("strong",[e._v("B.Mask")]),e._v(" (Bottom solder mask: inverted surface areas for the green paint of the PCB)")]),e._v(" "),a("li",[a("strong",[e._v("F.Mask")]),e._v(" (Front solder mask)")]),e._v(" "),a("li",[a("strong",[e._v("Edge.Cuts")]),e._v(" (Margins where the PCB should be cut by milling)")])]),e._v(" "),a("p",[e._v("Select a folder where your files should be saved and press "),a("strong",[e._v("Plot")]),e._v(":")]),e._v(" "),a("figure",[a("center",[a("img",{attrs:{src:r(358),alt:"Gerber Export Settings",height:"auto",width:"auto"}}),e._v(" "),a("figcaption",[a("b",[e._v("Figure 2.")]),e._v(" Gerber Export Settings.")])])],1),e._v(" "),a("p",[e._v("After sucessful export, press "),a("strong",[e._v("Generate Drill Files")]),e._v(". Then select the same output directory and make sure that "),a("strong",[e._v("Merge PTH and NPTH holes into one file")]),e._v(" is not checked. Otherwise, your manufacturer doesn't know which holes are copper plated or not.")]),e._v(" "),a("figure",[a("center",[a("img",{attrs:{src:r(359),alt:"Drill Files Generation",height:"auto",width:"auto"}}),e._v(" "),a("figcaption",[a("b",[e._v("Figure 3.")]),e._v(" Drill Files Generation.")])])],1),e._v(" "),a("p",[e._v("After that you should have all files necessary for the PCB production. "),a("strong",[e._v("Compress all the files (gerber and drill files) to a .zip file and send them to the manufacturer")]),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);