(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),r=a.n(c),o=a(5),i=a(6),s=a(8),m=a(7),u=a(9),p=a(30),b=a(32),d=a(29),E=a(31),h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"HELLO"),l.a.createElement("p",null,"Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."),l.a.createElement("p",null,"Duis a turpis sed lacus dapibus elementum sed eu lectus."))}}]),t}(n.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"STUFF"),l.a.createElement("p",null,"Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:"),l.a.createElement("ol",null,l.a.createElement("li",null,"Nulla pulvinar diam"),l.a.createElement("li",null,"Facilisis bibendum"),l.a.createElement("li",null,"Vestibulum vulputate"),l.a.createElement("li",null,"Eget erat"),l.a.createElement("li",null,"Id porttitor")))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"GOT QUESTIONS?"),l.a.createElement("p",null,"The easiest thing to do is post on our forums."))}}]),t}(n.Component),g=(a(22),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).logoutHandler=function(e){a.props.history.push("/login")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(p.a,{basename:"/react/"},l.a.createElement("div",null,l.a.createElement("h1",null,"Simple SPA"),l.a.createElement("ul",{className:"header"},l.a.createElement("li",null,l.a.createElement(d.a,{exact:!0,activeClassName:"active",to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(d.a,{activeClassName:"active",to:"/stuff"},"Stuff")),l.a.createElement("li",null,l.a.createElement(d.a,{activeClassName:"active",to:"/contact"},"Contact")),l.a.createElement("li",null,l.a.createElement(d.a,{onClick:function(t){return e.logoutHandler(t)},to:"/login"},"Login"))),l.a.createElement("div",{className:"content"},l.a.createElement(E.a,{exact:!0,path:"/",component:h}),l.a.createElement(E.a,{path:"/stuff",component:f}),l.a.createElement(E.a,{path:"/contact",component:v}))))}}]),t}(n.Component)),O=(a(26),a(27),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-9 col-md-7 col-lg-5 mx-auto"},l.a.createElement("div",{className:"card card-signin my-5"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title text-center"},"Sign In ||",l.a.createElement(d.a,{to:"/"}," Home")),l.a.createElement("form",{className:"form-signin"},l.a.createElement("div",{className:"form-label-group"},l.a.createElement("input",{type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",required:!0,autoFocus:!0}),l.a.createElement("label",{htmlFor:"inputEmail"},"Email address")),l.a.createElement("div",{className:"form-label-group"},l.a.createElement("input",{type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),l.a.createElement("label",{htmlFor:"inputPassword"},"Password")),l.a.createElement("div",{className:"custom-control custom-checkbox mb-3"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember password")),l.a.createElement("button",{className:"btn btn-lg btn-primary btn-block text-uppercase",type:"submit"},"Sign in"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("button",{className:"btn btn-lg btn-google btn-block text-uppercase",type:"submit"},l.a.createElement("i",{className:"fab fa-google mr-2"})," Sign in with Google"),l.a.createElement("button",{className:"btn btn-lg btn-facebook btn-block text-uppercase",type:"submit"},l.a.createElement("i",{className:"fab fa-facebook-f mr-2"})," Sign in with Facebook")))))))}}]),t}(n.Component)),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,{basename:"/react/"},l.a.createElement(b.a,null,l.a.createElement(O,{path:"/login",component:O}),l.a.createElement(g,{path:"/",component:g})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.c88e886a.chunk.js.map