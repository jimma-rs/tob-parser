(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(2),i=n.n(a),s=n(12),r=n.n(s),o=(n(23),n(13)),u=n(14),h=n(17),l=n(16),p=(n(24),n(15)),d=n.n(p),j=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={response:{}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/api/v1/say-something").then((function(t){var n=t.data;e.setState({response:n})}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Hello this is a new feature!"}),Object(c.jsx)("h1",{children:this.state.response.body})]})}}]),n}(a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),b()}},[[42,1,2]]]);
//# sourceMappingURL=main.31717359.chunk.js.map