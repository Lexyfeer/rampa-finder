(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/rampa_logo.ab3fe23b.svg"},48:function(e,t,a){e.exports=a(66)},53:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),o=a(20),i=a(17),s=a(11),m=a(12),u=a(15),p=a(13),h=a(16),d=(a(53),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={startups:[],founders:[],updates:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("http://45.232.252.23/laboratoria/public/_/items/startups",{method:"GET",headers:{Authorization:"Bearer laboratoriaToken2019","Content-type":"application/json; "}}).then(function(e){return e.json()}).then(function(t){e.setState({startups:t.data})}),fetch("http://45.232.252.23/laboratoria/public/_/items/founders",{method:"GET",headers:{Authorization:"Bearer laboratoriaToken2019","Content-type":"application/json; "}}).then(function(e){return e.json()}).then(function(e){return console.log({founders:e})}),fetch("http://45.232.252.23/laboratoria/public/_/items/portfolio_updates",{method:"GET",headers:{Authorization:"Bearer laboratoriaToken2019","Content-type":"application/json; "}}).then(function(e){return e.json()}).then(function(e){return console.log({updates:e})})}},{key:"render",value:function(){var e=this.state.startups;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"contentStartups"},e.map(function(e,t){if("Seguimiento"==e.startup_status)return r.a.createElement("div",{className:"card",key:t},r.a.createElement("img",{className:"imgProjects card-img-top",src:e.logo,alt:e.name,title:e.name}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.name),r.a.createElement("p",{className:"card-text"},e.one_liner),r.a.createElement("p",{className:"card-text"},e.website),r.a.createElement("p",{className:"card-text"},e.startup_status),r.a.createElement("a",{href:e.linkProject,rel:"noopener noreferrer",target:"_blank"},"Ir al proyecto"),r.a.createElement("a",{href:e.linkReadme,rel:"noopener noreferrer",target:"_blank"},"Ver m\xe1s detalles del proyecto"),r.a.createElement("a",{href:"#",className:"btn btn-primary"},"Go somewhere")))})))}}]),t}(n.Component)),b=a(41),E=a.n(b),f=a(70),j=a(71),v=a(72),g=a(47),O=a(69),k=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement("p",null,"Componente de inicio")))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(f.a,{variant:"dark",expand:"md",fixed:"top"},r.a.createElement(f.a.Brand,null,r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{className:"App-logo-image",src:E.a,alt:"logo"}))),r.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(j.a,{className:"ml-auto"},r.a.createElement(j.a.Item,null,r.a.createElement(o.c,{className:"navMenuLink",exact:!0,to:"/"},r.a.createElement("h6",null,"Inicio"))),r.a.createElement(j.a.Item,null,r.a.createElement(o.c,{className:"navMenuLink",exact:!0,to:"/Startups"},r.a.createElement("h6",null,"StartUps"))))),r.a.createElement(v.a,{inline:!0},r.a.createElement(g.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(O.a,{variant:"outline-info"},"Search"))),r.a.createElement(i.a,{exact:!0,path:"/",component:k}),r.a.createElement(i.a,{path:"/Startups",component:d}))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(d,null))}}]),t}(n.Component);l.a.render(r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(N,null))),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.760842f7.chunk.js.map