(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(2),l=n.n(i),r=(n(12),n(3)),s=n(4),u=n(6),o=n(5),m=(n(13),n(14),function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={display:"",carryNumber:null,previousOperation:"",resetDisplayOnNextClick:!1},e}return Object(s.a)(n,[{key:"numKeyInput",value:function(e){var t=this;this.state.resetDisplayOnNextClick?this.setState({display:"",resetDisplayOnNextClick:!1},(function(){t.setState({display:t.state.display+e})})):this.setState({display:this.state.display+e})}},{key:"operation",value:function(e){this.setState({resetDisplayOnNextClick:!0});var t=this.state.carryNumber,n=parseFloat(this.state.display),a=0,c=this.state.previousOperation;switch(e){case"add":a=t+n,this.setState({previousOperation:"add"});break;case"subtract":a=null===this.state.carryNumber?n:t-n,this.setState({previousOperation:"subtract"});break;case"multiply":a=null===this.state.carryNumber?n:t*n,this.setState({previousOperation:"multiply"});break;case"divide":a=null===this.state.carryNumber?n:t/n,this.setState({previousOperation:"divide"});break;case"clear":return void this.setState({display:"",carryNumber:null});case"equal":return"add"===c?a=t+n:"subtract"===c?a=t-n:"multiply"===c?a=t*n:"divide"===c&&(a=t/n),void this.setState({display:a,carryNumber:null})}this.setState({display:a,carryNumber:a})}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"calWrapper"},c.a.createElement("input",{className:" display btn",readOnly:!0,placeholder:"0",value:this.state.display}),c.a.createElement("div",{className:"btn clearBtn clickAble",onClick:function(){e.operation("clear")}},"C"),c.a.createElement("div",{className:"btn percentBtn"},"%"),c.a.createElement("div",{className:"btn divisonBtn clickAble",onClick:function(){return e.operation("divide")}},"\xf7"),c.a.createElement("div",{className:"btn sevenBtn clickAble",onClick:function(){return e.numKeyInput("7")}},"7"),c.a.createElement("div",{className:"btn eightBtn clickAble",onClick:function(){return e.numKeyInput("8")}},"8"),c.a.createElement("div",{className:"btn nineBtn clickAble",onClick:function(){return e.numKeyInput("9")}},"9"),c.a.createElement("div",{className:"btn multiplyBtn clickAble",onClick:function(){e.operation("multiply")}},"x"),c.a.createElement("div",{className:"btn fourBtn clickAble",onClick:function(){return e.numKeyInput("4")}},"4"),c.a.createElement("div",{className:"btn fiveBtn clickAble",onClick:function(){return e.numKeyInput("5")}},"5"),c.a.createElement("div",{className:"btn sixBtn clickAble",onClick:function(){return e.numKeyInput("6")}},"6"),c.a.createElement("div",{className:"btn subtractBtn clickAble",onClick:function(){e.operation("subtract")}},"\u2212"),c.a.createElement("div",{className:"btn oneBtn clickAble",onClick:function(){return e.numKeyInput("1")}},"1"),c.a.createElement("div",{className:"btn twoBtn clickAble",onClick:function(){return e.numKeyInput("2")}},"2"),c.a.createElement("div",{className:"btn threeBtn clickAble",onClick:function(){return e.numKeyInput("3")}},"3"),c.a.createElement("div",{className:"btn additionBtn clickAble",onClick:function(){e.operation("add")}},"+"),c.a.createElement("div",{className:"btn zeroBtn clickAble",onClick:function(){return e.numKeyInput("0")}},"0"),c.a.createElement("div",{className:"btn dotBtn clickAble",onClick:function(){return e.numKeyInput(".")}},"."),c.a.createElement("div",{className:"btn equalBtn clickAble",onClick:function(){e.operation("equal")}},"=")))}}]),n}(c.a.Component));n(15);var p=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"topSection"},c.a.createElement("h1",null,"React Calculator"),c.a.createElement("img",{src:"/react-calculator/cal.png",alt:"little calculator iamge"})),c.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.033b39e8.chunk.js.map