(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-206ac5d3"],{1745:function(e,t,a){"use strict";var r=a("9516"),n=a.n(r);n.a},"521d":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("h2",{staticClass:"tit"},[e._v("待批班级")]),e._v(" "),a("div",{staticClass:"main"},[a("el-table",{staticClass:"table",staticStyle:{width:"100%","border-radius":"'10px'"},attrs:{data:e.paperData.slice((e.currentPage-1)*e.pagesize,e.currentPage*e.pagesize),id:"tabels"}},[a("el-table-column",{attrs:{prop:"grade_name",label:"班级名",width:"134"}}),e._v(" "),a("el-table-column",{attrs:{prop:"subject_text",label:"课程名称",width:"257"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"阅卷状态",width:"170"}}),e._v(" "),a("el-table-column",{attrs:{prop:"subject_text",label:"课程名称",width:"257"}}),e._v(" "),a("el-table-column",{attrs:{prop:"room_text",label:"成材率",width:"135"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"options",attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleClick(t.row)}}},[e._v("批卷")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination_box"},[a("el-pagination",{staticClass:"pagination",attrs:{"current-page":e.currentPage4,"page-sizes":[5,10,15,20],"page-size":5,layout:"prev, pager, next,sizes,jumper",total:e.paperData.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])},n=[],s=(a("96cf"),a("3b8d")),i=a("cebc"),l=a("2f62"),c={computed:Object(i["a"])({},Object(l["d"])({paperData:function(e){return e.testpaper.paperData}})),data:function(){return{currentPage4:1,currentPage:1,pagesize:5}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getpaper();case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:Object(i["a"])({},Object(l["b"])({getpaper:"testpaper/getpaper"}),{handleClick:function(e){localStorage.setItem("grade_id",e.grade_id),localStorage.setItem("grade",e.grade_name),this.$router.push({path:"/read/classmate",query:{grade_id:e.grade_id}})},handleSizeChange:function(e){this.pagesize=e},handleCurrentChange:function(e){this.currentPage=e}})},u=c,o=(a("1745"),a("2877")),p=Object(o["a"])(u,r,n,!1,null,"61a41e24",null);t["default"]=p.exports},9516:function(e,t,a){}}]);