(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e15e324"],{"16d8":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:t.id}})},s=[],r=i("cebc"),o=i("5176"),u=i.n(o),a=(i("a7be"),i("44f8"),i("a6e0"),i("547e")),c=i.n(a),d={minHeight:"400px",previewStyle:"vertical",useCommandShortcut:!0,useDefaultHTMLSanitizer:!0,usageStatistics:!0,hideModeSwitch:!0,toolbarItems:[]},h={name:"MarddownEditor",props:{value:{type:String,default:""},id:{type:String,required:!1,default:function(){return"markdown-editor-"+ +new Date+(1e3*Math.random()).toFixed(0)}},options:{type:Object,default:function(){return d}},mode:{type:String,default:"wysiwyg"},height:{type:String,required:!1,default:"auto"},language:{type:String,required:!1,default:"en_US"}},data:function(){return{editor:null}},computed:{editorOptions:function(){var t=u()({},d,this.options);return t.initialEditType=this.mode,t.height=this.height,t.language=this.language,t}},watch:{value:function(t,e){t!==e&&t!==this.editor.getValue()&&this.editor.setValue(t)},language:function(t){this.destroyEditor(),this.initEditor()},height:function(t){this.editor.height(t)},mode:function(t){this.editor.changeMode(t)}},mounted:function(){this.initEditor()},destroyed:function(){this.destroyEditor()},methods:{initEditor:function(){var t=this;this.editor=new c.a(Object(r["a"])({el:document.getElementById(this.id)},this.editorOptions)),this.value&&this.editor.setValue(this.value),this.editor.on("change",function(){t.$emit("input",t.editor.getValue())})},destroyEditor:function(){this.editor&&(this.editor.off("change"),this.editor.remove())},setValue:function(t){this.editor.setValue(t)},getValue:function(){return this.editor.getValue()},setHtml:function(t){this.editor.setHtml(t)},getHtml:function(){return this.editor.getHtml()}}},l=h,f=i("2877"),p=Object(f["a"])(l,n,s,!1,null,null,null);e["a"]=p.exports},"2a5f":function(t,e,i){"use strict";var n=i("71d4"),s=i.n(n);s.a},"71d4":function(t,e,i){},"946f":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("h2",{staticClass:"tit"},[t._v("阅卷")]),t._v(" "),i("div",{staticClass:"main"},[i("div",{staticClass:"main_left"},t._l(t.student?t.student.questions:[],function(e,n){return i("div",{key:e.exam_exam_id,staticClass:"item_exam"},[i("p",[t._v(t._s(e.title))]),t._v(" "),i("markdown-editor",{attrs:{value:t.stem[n]}})],1)}),0),t._v(" "),i("div",{staticClass:"main_right"},[i("div",{staticClass:"score"},[i("h2",[t._v(t._s(t.student.student_name))]),t._v(" "),i("div",[i("p",[t._v("得分:")]),t._v(" "),i("h2",[t._v(t._s(t.score))])])]),t._v(" "),i("div",{staticClass:"block"},[i("el-slider",{staticClass:"slider",model:{value:t.score,callback:function(e){t.score=e},expression:"score"}})],1),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.upup}},[t._v("确定")])],1)])])},s=[],r=(i("96cf"),i("3b8d")),o=i("cebc"),u=i("2f62"),a=i("16d8"),c={data:function(){return{score:0,stem:[],answer:[]}},components:{MarkdownEditor:a["a"]},computed:Object(o["a"])({},Object(u["d"])({student:function(t){return t.testpaper.student}})),mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getstudent(this.$route.query);case 2:for(this.score=this.student.score||0,e=0;e<this.student.questions.length;e++)this.stem.push(this.student.questions[e].questions_stem),this.answer.push(this.student.questions[e].questions_answer);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:Object(o["a"])({},Object(u["b"])({getstudent:"testpaper/getstudent",upscore:"testpaper/upscore"}),{upup:function(){var t=this;this.$confirm("你确定批改试卷吗?",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.upscore({score:t.score}).then(function(){t.$router.push({path:"/read/classmate",query:{exam_student_id:t.getstudent.exam_student_id}})});case 2:case"end":return e.stop()}},e)})),function(){})},formatTooltip:function(t){return t/100}})},d=c,h=(i("2a5f"),i("2877")),l=Object(h["a"])(d,n,s,!1,null,"28d56606",null);e["default"]=l.exports}}]);