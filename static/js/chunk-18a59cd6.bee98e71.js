(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18a59cd6"],{1779:function(t,e,n){},7084:function(t,e,n){},9133:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.records}},[n("el-table-column",{attrs:{type:"index",label:"序号",width:"80",align:"center"}}),n("el-table-column",{attrs:{prop:"skuName",label:"名称",width:"width"}}),n("el-table-column",{attrs:{prop:"skuDesc",label:"描述",width:"width"}}),n("el-table-column",{attrs:{label:"默认图片",width:"110"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.row;t.$index;return[n("img",{staticStyle:{width:"80px",height:"80px"},attrs:{src:e.skuDefaultImg,alt:""}})]}}])}),n("el-table-column",{attrs:{prop:"weight",label:"重量",width:"80"}}),n("el-table-column",{attrs:{prop:"price",label:"价格",width:"80"}}),n("el-table-column",{attrs:{prop:"prop",label:"操作",width:"width"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;e.$index;return[0==s.isSale?n("el-button",{attrs:{type:"success",icon:"el-icon-sort-down",size:"mini"},on:{click:function(e){return t.sale(s)}}}):n("el-button",{attrs:{type:"success",icon:"el-icon-sort-up",size:"mini"},on:{click:function(e){return t.cancel(s)}}}),n("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:t.edit}}),n("el-button",{attrs:{type:"info",icon:"el-icon-info",size:"mini"},on:{click:function(e){return t.getSkuInfo(s)}}}),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"}})]}}])})],1),n("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"current-page":t.page,"page-sizes":[3,5,10],"page-size":t.limit,layout:"prev, pager, next, jumper,->,sizes,total",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.getSkuList}}),n("el-drawer",{attrs:{visible:t.show,"show-close":!1,size:"50%"},on:{"update:visible":function(e){t.show=e}}},[n("el-row",[n("el-col",{attrs:{span:5}},[t._v("名称")]),n("el-col",{attrs:{span:16}},[t._v(t._s(t.skuInfo.skuName))])],1),n("el-row",[n("el-col",{attrs:{span:5}},[t._v("描述")]),n("el-col",{attrs:{span:16}},[t._v(t._s(t.skuInfo.skuDesc))])],1),n("el-row",[n("el-col",{attrs:{span:5}},[t._v("价格")]),n("el-col",{attrs:{span:16}},[t._v(t._s(t.skuInfo.price)+"元")])],1),n("el-row",[n("el-col",{attrs:{span:5}},[t._v("平台属性")]),n("el-col",{attrs:{span:16}},[t._l(t.skuInfo.skuAttrValueList,(function(e,s){return n("el-tag",{key:e.id,staticStyle:{"margin-right":"10px"},attrs:{type:"success"}},[t._v(t._s(e.attrId)+"-"+t._s(e.valueId))])}))],2)],1),n("el-row",[n("el-col",{attrs:{span:5}},[t._v("商品图片")]),n("el-col",{attrs:{span:16}},[n("el-carousel",{attrs:{height:"150px"}},t._l(t.skuInfo.skuImageList,(function(t){return n("el-carousel-item",{key:t.id},[n("img",{attrs:{src:t.imgUrl}})])})),1)],1)],1)],1)],1)},a=[],r=n("c7eb"),i=n("1da1"),c={name:"Sku",data:function(){return{page:1,limit:10,records:[],total:0,skuInfo:{},show:!1}},mounted:function(){this.getSkuList()},methods:{getSkuList:function(){var t=arguments,e=this;return Object(i["a"])(Object(r["a"])().mark((function n(){var s,a,i,c;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=t.length>0&&void 0!==t[0]?t[0]:1,e.page=s,a=e.page,i=e.limit,n.next=5,e.$API.sku.reqSkuList(a,i);case 5:c=n.sent,200==c.code&&(e.total=c.data.total,e.records=c.data.records);case 7:case"end":return n.stop()}}),n)})))()},handleSizeChange:function(t){this.limit=t,this.getSkuList()},sale:function(t){var e=this;return Object(i["a"])(Object(r["a"])().mark((function n(){var s;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$API.sku.reqSale(t.id);case 2:s=n.sent,200==s.code&&(t.isSale=1,e.$message({type:"success",message:"上架成功"}));case 4:case"end":return n.stop()}}),n)})))()},cancel:function(t){var e=this;return Object(i["a"])(Object(r["a"])().mark((function n(){var s;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$API.sku.reqCancel(t.id);case 2:s=n.sent,200==s.code&&(t.isSale=0,e.$message({type:"success",message:"下架成功"}));case 4:case"end":return n.stop()}}),n)})))()},edit:function(){this.$message("正在开发中")},getSkuInfo:function(t){var e=this;return Object(i["a"])(Object(r["a"])().mark((function n(){var s;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.show=!0,n.next=3,e.$API.sku.reqSkuById(t.id);case 3:s=n.sent,200==s.code&&(e.skuInfo=s.data);case 5:case"end":return n.stop()}}),n)})))()}}},l=c,o=(n("a6a1"),n("c0f8"),n("2877")),u=Object(o["a"])(l,s,a,!1,null,"f3612166",null);e["default"]=u.exports},a6a1:function(t,e,n){"use strict";n("1779")},c0f8:function(t,e,n){"use strict";n("7084")}}]);