(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0696298f"],{"16d8":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:t.id}})},s=[],o=i("cebc"),a=i("5176"),d=i.n(a),r=(i("a7be"),i("44f8"),i("a6e0"),i("547e")),u=i.n(r),l={minHeight:"400px",previewStyle:"vertical",useCommandShortcut:!0,useDefaultHTMLSanitizer:!0,usageStatistics:!0,hideModeSwitch:!0,toolbarItems:[]},c={name:"MarddownEditor",props:{value:{type:String,default:""},id:{type:String,required:!1,default:function(){return"markdown-editor-"+ +new Date+(1e3*Math.random()).toFixed(0)}},options:{type:Object,default:function(){return l}},mode:{type:String,default:"wysiwyg"},height:{type:String,required:!1,default:"auto"},language:{type:String,required:!1,default:"en_US"}},data:function(){return{editor:null}},computed:{editorOptions:function(){var t=d()({},l,this.options);return t.initialEditType=this.mode,t.height=this.height,t.language=this.language,t}},watch:{value:function(t,e){t!==e&&t!==this.editor.getValue()&&this.editor.setValue(t)},language:function(t){this.destroyEditor(),this.initEditor()},height:function(t){this.editor.height(t)},mode:function(t){this.editor.changeMode(t)}},mounted:function(){this.initEditor()},destroyed:function(){this.destroyEditor()},methods:{initEditor:function(){var t=this;this.editor=new u.a(Object(o["a"])({el:document.getElementById(this.id)},this.editorOptions)),this.value&&this.editor.setValue(this.value),this.editor.on("change",function(){t.$emit("input",t.editor.getValue())})},destroyEditor:function(){this.editor&&(this.editor.off("change"),this.editor.remove())},setValue:function(t){this.editor.setValue(t)},getValue:function(){return this.editor.getValue()},setHtml:function(t){this.editor.setHtml(t)},getHtml:function(){return this.editor.getHtml()}}},h=c,f=i("2877"),v=Object(f["a"])(h,n,s,!1,null,null,null);e["a"]=v.exports},"5f5e":function(t,e,i){},"8f67":function(t,e,i){"use strict";var n=i("5f5e"),s=i.n(n);s.a},ad5d:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edittest"},[i("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("span",[t._v("确认删除吗?")]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1,t.confirmdel()}}},[t._v("确 定")])],1)]),t._v(" "),i("p",{staticClass:"createedit"},[t._v("创建试卷")]),t._v(" "),i("div",{staticClass:"createboard"},[i("p",{staticClass:"addnewqs"},[t._v("添加新题")]),t._v(" "),i("div",{staticClass:"edittitle"},[i("p",[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"editboard"},t._l(t.questions,function(e,n){return i("div",{key:n,staticClass:"eachqs"},[i("div",{staticClass:"eachtop"},[i("p",[t._v(t._s(n+1)+".   "+t._s(e.title))]),t._v(" "),i("el-button",{attrs:{type:"text"},on:{click:function(e){t.dialogVisible=!0,t.edit_del_btn(n)}}},[t._v("删除")])],1),t._v(" "),i("div",{staticClass:"eachdescribe"},[i("markdown-editor",{model:{value:e.questions_stem,callback:function(i){t.$set(e,"questions_stem",i)},expression:"item.questions_stem"}}),t._v(" "),i("span",[t._v("答案")]),t._v(" "),i("markdown-editor",{model:{value:e.questions_answer,callback:function(i){t.$set(e,"questions_answer",i)},expression:"item.questions_answer"}}),t._v(" "),i("p",[i("b",[t._v("类型:  ")]),t._v(t._s(e.questions_type_text)+"\n                        "),i("b",[t._v("来源:  ")]),t._v("\n                        "+t._s(e.subject_text))])],1)])}),0),t._v(" "),i("div",{staticClass:"editbtn",on:{click:t.updtatedtest}},[t._v("创建试卷")])])])],1)},s=[],o=i("cebc"),a=i("2f62"),d=i("16d8"),r={data:function(){return{dialogVisible:!1,index:""}},components:{MarkdownEditor:d["a"]},computed:Object(o["a"])({},Object(a["d"])("testmanager",{addflag:function(t){return t.addflag},questions:function(t){return t.questions},title:function(t){return t.title}})),methods:{updtatedtest:function(){this.$store.dispatch("testmanager/updatetest"),this.$router.push({path:"testlist"})},confirmdel:function(){var t=this.index;this.$store.dispatch("testmanager/deletetest",t)},edit_del_btn:function(t){this.index=t}}},u=r,l=(i("8f67"),i("2877")),c=Object(l["a"])(u,n,s,!1,null,null,null);e["default"]=c.exports}}]);