var e=function(e,n){var t=document.createElement("div"),c=document.createElement("h2");c.innerHTML=e,t.setAttribute("class",n),t.setAttribute("data-qa","notification"),document.body.append(t),t.append(c)},n=new Promise(function(e,n){document.addEventListener("click",function(){e()}),setTimeout(function(){n(Error())},3e3)}),t=new Promise(function(e){document.addEventListener("click",function(){e()}),document.addEventListener("contextmenu",function(n){n.preventDefault(),e()})}),c=new Promise(function(e){var n=!1,t=!1;document.addEventListener("click",function(){n=!0,t&&e()}),document.addEventListener("contextmenu",function(c){c.preventDefault(),t=!0,n&&t&&e()})});n.then(function(){e("First promise was resolved","success")}).catch(function(){e("First promise was rejected","error")}),t.then(function(){e("Second promise was resolved","success")}),c.then(function(){e("Third promise was resolved","success")});
//# sourceMappingURL=index.2750bbdf.js.map
