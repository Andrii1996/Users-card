(this["webpackJsonpuser-list"]=this["webpackJsonpuser-list"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n.n(r),c=n(6),u=n.n(c),i=n(7),l=n(2),o=n.n(l),h=n(4),j=n(3),p=n(8),d=n(9),b=n(11),f=n(10);function m(e){return v.apply(this,arguments)}function v(){return(v=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://randomuser.me/api/?results=".concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(18);var O=function(e){var t=e.users,n=e.value;console.log(n);var r=Object(h.a)(t).filter((function(e){return e.name.first.toLowerCase().includes(n.toLowerCase())}));return Object(a.jsx)("ul",{className:"user",children:r.map((function(e){return Object(a.jsxs)("li",{className:"user__card",children:[Object(a.jsx)("img",{src:e.picture.large,alt:"img",className:"user__img"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:"Name :"})," "+e.name.first+" "+e.name.last]}),Object(a.jsxs)("p",{children:["Email : "," "+e.email]}),Object(a.jsxs)("p",{children:["Phone : "," "+e.cell]})]},e.cell)}))})},x=function(e){var t=e.handleClick,n=e.handleChange,r=e.count;return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{name:"count",type:"number",className:"input",value:r,onChange:n}),Object(a.jsx)("button",{type:"button",name:"add",className:"button",onClick:t,children:"Add user"})]})},g=function(e){var t=e.handleChange,n=e.value;return Object(a.jsx)("input",{placeholder:"find user",name:"value",className:"input",onChange:t,vlaue:n})},C=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[],search:"",count:1},e.handleClick=Object(j.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((n=e.state.count)<1)){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,m(n);case 5:a=t.sent,e.setState((function(e){return{users:[].concat(Object(h.a)(e.users),Object(h.a)(a.results)),count:1}}));case 7:case"end":return t.stop()}}),t)}))),e.handleChange=function(t){var n=t.target.value;e.setState(Object(i.a)({},t.target.name,n))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(10);case 2:t=e.sent,this.setState({users:t.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.users,n=e.search,r=e.count;return Object(a.jsxs)("div",{className:"App",children:["Users count:"," "+t.length,Object(a.jsxs)("div",{children:[Object(a.jsx)(x,{handleClick:this.handleClick,handleChange:this.handleChange,count:r}),Object(a.jsx)(g,{value:n,handleChange:this.handleChange})]}),Object(a.jsx)(O,{users:t,value:n})]})}}]),n}(s.a.Component);u.a.render(Object(a.jsx)(C,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ad7ac7ae.chunk.js.map