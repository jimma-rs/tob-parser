(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{171:function(e,t,a){"use strict";(function(e){var n=a(54),r=a(55),s=a(64),c=a(63),i=a(8),l=a(0),o=(a(199),a(179)),d=a(153),h=a.n(d);window.jQuery=h.a,window.$=h.a,e.jQuery=h.a;var j=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(o.a,{})})}}]),a}(l.Component);t.a=j}).call(this,a(158))},178:function(e,t,a){var n=a(149);e.exports.getLogData=function(e,t){var a=function(e){return e="["+(e=(e=e.trim()).replace(/\n/g,",\n"))+"]",JSON.parse(e)}(e),r=0,s=0,c=[1,2,3,4,5],i={},l={},o=[];for(var d in a.forEach((function(e){c.forEach((function(a){e["tobPlayer"+a].toLowerCase()===t.toLowerCase()&&function(e,t){var a=n.clone(c),o=n.remove(a,(function(t){return t!==e}));r+=t["tobPlayer"+e+"DeathCount"],o.forEach((function(e){t["tobPlayer"+e]&&(i[t["tobPlayer"+e]]?i[t["tobPlayer"+e]]+=t["tobPlayer"+e+"DeathCount"]:i[t["tobPlayer"+e]]=1,l[t["tobPlayer"+e]]?l[t["tobPlayer"+e]]++:l[t["tobPlayer"+e]]=1),s+=t["tobPlayer"+e+"DeathCount"]}))}(a,e)}))})),i)o.push({name:d,total:l[d],deaths:i[d],averageDeaths:(i[d]/l[d]).toFixed(2)});return console.log(a),{totalRaids:a.length,deaths:r,averageDeaths:(r/a.length).toFixed(2),otherPlayerDeaths:s,otherPlayers:o}}},179:function(e,t,a){"use strict";var n=a(79),r=a(54),s=a(55),c=a(100),i=a(64),l=a(63),o=a(8),d=a(0),h=a.n(d),j=a(172),u=a(178),b=a(254),O=a(43),g=a(175),x=a(126),m=a(61),f=a(252),v=a(105),p=a(129),C=a(253),y=a(149),D=a.n(y),w=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).toggleDirection=function(e){var t=s.state.direction[e];s.setState((function(a){return Object(n.a)(Object(n.a)({},a),{},{column:e,direction:Object(n.a)(Object(n.a)({},a.direction),{},Object(p.a)({},e,"ascending"===t?"descending":"ascending"))})}))},s.getSortedRanking=function(e,t,a){var n=D.a.sortBy(e,t);return"descending"===a&&n.reverse(),n},s.state={column:"total",direction:{name:"ascending",total:"descending",deaths:"ascending",averageDeaths:"ascending"}},s}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.column,n=t.direction;return Object(o.jsxs)(C.a,{sortable:!0,celled:!0,fixed:!0,unstackable:!0,children:[Object(o.jsx)(C.a.Header,{children:Object(o.jsxs)(C.a.Row,{children:[Object(o.jsxs)(C.a.HeaderCell,{sorted:"name"===a?n.name:null,onClick:function(){return e.toggleDirection("name")},children:[Object(o.jsx)(O.a,{name:"trophy"}),"Name"]}),Object(o.jsxs)(C.a.HeaderCell,{sorted:"total"===a?n.total:null,onClick:function(){return e.toggleDirection("total")},children:[Object(o.jsx)(O.a,{name:"user"}),"Total Raids"]}),Object(o.jsxs)(C.a.HeaderCell,{sorted:"deaths"===a?n.deaths:null,onClick:function(){return e.toggleDirection("deaths")},children:[Object(o.jsx)(O.a,{name:"star"}),"Deaths"]}),Object(o.jsxs)(C.a.HeaderCell,{sorted:"averageDeaths"===a?n.averageDeaths:null,onClick:function(){return e.toggleDirection("averageDeaths")},children:[Object(o.jsx)(O.a,{name:"bomb"}),"Average Deaths"]})]})}),Object(o.jsx)(C.a.Body,{styles:{"max-height":"85vh"},children:D.a.map(this.getSortedRanking(this.props.tableData,a,n[a]),(function(e){var t=e.name,a=e.total,n=e.deaths,r=e.averageDeaths;return Object(o.jsxs)(C.a.Row,{children:[Object(o.jsx)(C.a.Cell,{children:t}),Object(o.jsx)(C.a.Cell,{children:a}),Object(o.jsx)(C.a.Cell,{children:n}),Object(o.jsx)(C.a.Cell,{children:r})]},t)}))})]})}}]),a}(d.Component),P=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(o.jsxs)(g.a,{columns:2,children:[Object(o.jsxs)(g.a.Row,{children:[Object(o.jsx)(g.a.Column,{width:8,textAlign:"right",children:Object(o.jsx)("b",{children:"Total Raids"})}),Object(o.jsx)(g.a.Column,{width:8,children:this.props.summary.totalRaids})]}),Object(o.jsxs)(g.a.Row,{children:[Object(o.jsx)(g.a.Column,{width:8,textAlign:"right",children:Object(o.jsx)("b",{children:"Total Deaths"})}),Object(o.jsx)(g.a.Column,{width:8,children:this.props.summary.deaths})]}),Object(o.jsxs)(g.a.Row,{children:[Object(o.jsx)(g.a.Column,{width:8,textAlign:"right",children:Object(o.jsx)("b",{children:"Average Deaths"})}),Object(o.jsx)(g.a.Column,{width:8,children:this.props.summary.averageDeaths})]}),Object(o.jsxs)(g.a.Row,{children:[Object(o.jsx)(g.a.Column,{width:8,textAlign:"right",children:Object(o.jsx)("b",{children:"Other Player Deaths"})}),Object(o.jsx)(g.a.Column,{width:8,children:this.props.summary.otherPlayerDeaths})]})]})}}]),a}(d.Component),R=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={selectedFileName:"None",rsn:""},n.uploadFile=n.uploadFile.bind(Object(c.a)(n)),n.setRSN=n.setRSN.bind(Object(c.a)(n)),n.resetState=n.resetState.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"setRSN",value:function(e,t){this.setState({rsn:t.value})}},{key:"resetState",value:function(e){this.setState({selectedFileName:"None",rsn:"",parsedData:void 0,selectedFile:void 0}),this.forceUpdate()}},{key:"uploadFile",value:function(e){this.setState({selectedFileName:e.target.files[0].name,selectedFile:e.target.files[0]});var t=e.target.files[0],a=new FileReader,n=this;a.onload=function(e){n.setState({parsedData:Object(u.getLogData)(e.target.result,n.state.rsn)})},a.readAsText(t)}},{key:"render",value:function(){var e={disabled:!this.state.rsn};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(b.a,{as:"h2",icon:!0,textAlign:"center",children:[Object(o.jsx)(O.a,{name:"cogs",circular:!0}),Object(o.jsx)(b.a.Content,{children:"ToB Parser"})]}),Object(o.jsxs)(g.a,{centered:!0,columns:2,ui:!0,grid:!0,children:[Object(o.jsxs)(x.a,{children:[Object(o.jsx)(m.a,{textAlign:"right",children:Object(o.jsx)(f.a,{placeholder:"Enter RSN...",value:this.state.rsn,onChange:this.setRSN})}),Object(o.jsxs)(m.a,{children:[Object(o.jsx)(j.InputFile,{button:Object(n.a)({},e),input:{id:"input-control-id",accept:".log",onChange:this.uploadFile.bind(this)}}),Object(o.jsxs)(v.a,{animated:"vertical",onClick:this.resetState,children:[Object(o.jsx)(v.a.Content,{hidden:!0,children:"Reset"}),Object(o.jsx)(v.a.Content,{visible:!0,children:Object(o.jsx)(O.a,{name:"redo"})})]})]})]}),this.state.parsedData&&Object(o.jsx)(P,{summary:this.state.parsedData}),this.state.parsedData&&Object(o.jsx)(w,{tableData:this.state.parsedData.otherPlayers})]})]})}}]),a}(h.a.Component);t.a=R},198:function(e,t,a){},199:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(0),s=a.n(r),c=a(73),i=a.n(c),l=(a(198),a(171)),o=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,256)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};a(206);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(l.a,{})}),document.getElementById("root")),o()}},[[207,1,2]]]);
//# sourceMappingURL=main.cc27f42d.chunk.js.map