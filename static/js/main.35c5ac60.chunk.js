(this["webpackJsonpbmi-calculator"]=this["webpackJsonpbmi-calculator"]||[]).push([[0],{12:function(e,t,i){},13:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),s=i(3),r=i.n(s),h=(i(12),i(4)),l=i(5),c=i(7),g=i(6),o=(i(13),i.p+"static/media/bmi-chart.0bb4cc15.png"),u=i(0),d=function(e){Object(c.a)(i,e);var t=Object(g.a)(i);function i(){var e;return Object(h.a)(this,i),(e=t.call(this)).state={height:"",weight:"",total:"",type:""},e}return Object(l.a)(i,[{key:"handleHeight",value:function(e){var t=e.target.value;this.setState({height:t})}},{key:"handleWeight",value:function(e){var t=e.target.value;this.setState({weight:t})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.weight/(this.state.height*this.state.height),i=t.toPrecision(4);this.setState({total:i});var n=document.querySelector("body"),a=document.querySelector("#height-enter"),s=document.querySelector("#weight-enter");i<=18.5?(this.setState({type:"Underweight"}),n.style.backgroundImage="linear-gradient(blue, lightblue)"):i>18.5&&i<=24.9?(this.setState({type:"Healthy Weight"}),n.style.backgroundImage="linear-gradient(green, yellow)"):i>=25&&i<=29.9?(this.setState({type:"Overweight"}),n.style.backgroundImage="linear-gradient(orange, yellow)"):i>=30?(this.setState({type:"Obese"}),n.style.backgroundImage="linear-gradient(red, orange)"):(this.setState({type:""}),n.style.backgroundImage="linear-gradient(beige, white)"),""===this.state.height?(a.style.display="block",n.style.backgroundImage="linear-gradient(beige, white)"):a.style.display="none",""===this.state.weight?(s.style.display="block",n.style.backgroundImage="linear-gradient(beige, white)"):s.style.display="none",(isNaN(t)||""===this.state.height||""===this.state.weight)&&(t="",this.setState({total:t}),this.setState({type:""}))}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"calculator",children:[Object(u.jsx)("h1",{children:"BMI Calculator"}),Object(u.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(u.jsx)("label",{htmlFor:"height",children:"Height (metres):"}),Object(u.jsx)("input",{type:"number",name:"height",step:"any",onChange:function(t){return e.handleHeight(t)}}),Object(u.jsx)("p",{id:"height-enter",children:"Enter your Height"}),Object(u.jsx)("label",{htmlFor:"weight",children:"Weight (kilograms):"}),Object(u.jsx)("input",{type:"number",name:"weight",step:"any",onChange:function(t){return e.handleWeight(t)}}),Object(u.jsx)("p",{id:"weight-enter",children:"Enter your Weight"}),Object(u.jsx)("input",{id:"submit-button",type:"submit",value:"Calculate"})]}),Object(u.jsxs)("div",{id:"result",children:[Object(u.jsxs)("p",{children:["BMI: ",Object(u.jsx)("span",{children:this.state.total})]}),Object(u.jsxs)("p",{children:["Category: ",Object(u.jsx)("span",{children:this.state.type})]})]})]}),Object(u.jsx)("div",{id:"img-div",children:Object(u.jsx)("img",{src:o,alt:"bmi-chart"})})]})}}]),i}(a.a.Component),b=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,16)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.35c5ac60.chunk.js.map