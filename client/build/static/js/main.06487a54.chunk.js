(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,r){e.exports={Card:"Card_Card__2v91Y",Title:"Card_Title__3b1Ma",Image:"Card_Image__MaJp6",Diets:"Card_Diets__29wL6",Diet:"Card_Diet__1NZZZ"}},23:function(e,t,r){e.exports={indexBar:"Pagination_indexBar__1mDif",cardsTable:"Pagination_cardsTable__1s5PZ",buttonIndex:"Pagination_buttonIndex__1j2Ld"}},24:function(e,t,r){e.exports={Landing:"Landing_Landing__3WE0r",Header:"Landing_Header__BYBmY",goHome:"Landing_goHome__3Thip"}},25:function(e,t,r){e.exports={Body:"SearchRecipe_Body__1Cpec",Inputs:"SearchRecipe_Inputs__3mDW2",chekForm:"SearchRecipe_chekForm__1UpKC",mapa:"SearchRecipe_mapa__1m114"}},37:function(e,t,r){e.exports={Home:"Home_Home__Hrybx"}},40:function(e,t,r){e.exports={summary:"Description_summary__3evy4"}},42:function(e,t,r){e.exports={FootBar:"FootBar_FootBar__1ObRe"}},5:function(e,t,r){e.exports={Body:"FormAdRecipe_Body__xQJmI",Inputs:"FormAdRecipe_Inputs__2TRnO",chekForm:"FormAdRecipe_chekForm__3IZ9c",mapa:"FormAdRecipe_mapa__2s5aA"}},50:function(e,t,r){},51:function(e,t,r){},71:function(e,t,r){},75:function(e,t,r){},76:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r.n(c),n=r(13),s=r(22),i=r.n(s),o=r(14),l=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,77)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;r(e),c(e),a(e),n(e),s(e)}))},u=(r(50),r(3)),j=(r(51),r(12)),d=r.n(j),h=r(16),b=r(17),p=r.n(b),m=function(e){return{type:"GET_RECIPES_WEB",payload:e}},x=function(e){for(var t=[],r={},c=[],a=0;a<e.length;a++){console.log("Respuesta de la base de datos",e[a]),r.healthScore=e[a].healthScore,r.id=e[a].id,r.image=e[a].image,r.spoonacularScore=e[a].spoonacularScore,r.steps=e[a].steps,r.summary=e[a].summary,r.title=e[a].title,c=e[a].diets;for(var n=0;n<c.length;n++)r[c[n].category]=!0;t.push(r),r={}}return{type:"GET_RECIPES_DB",payload:t}},O=r(37),y=r.n(O),f=r(4),g=r(11),v=r(20),_=r(38),F=r(39),N={recipesWeb:[],recipesDb:[],allRecipes:[],dietFilters:{vegetarian:!1,vegan:!1,glutenFree:!1,dairyFree:!1,veryHealthy:!1},recipeDiets:[],emptyRecipe:[{title:"There is no result for your search",summary:"There is no result for your search"},{title:"There is no result for your search",summary:"There is no result for your search"},{title:"There is no result for your search",summary:"There is no result for your search"},{title:"There is no result for your search",summary:"There is no result for your search"},{title:"There is no result for your search",summary:"There is no result for your search"},{title:"There is no result for your search",summary:"There is no result for your search"},{title:"There is no result for your search",summary:"There is no result for your search"},{title:"There is no result for your search",summary:"There is no result for your search"},{title:"There is no result for your search",summary:"There is no result for your search"},{title:"There is no result for your search",summary:"There is no result for your search"},{title:"There is no result for your search",summary:"There is no result for your search"},{title:"There is no result for your search",summary:"There is no result for your search"}],currentPage:0,itemsPerPages:9};var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_RECIPES_WEB":return Object(f.a)(Object(f.a)({},e),{},{recipesWeb:t.payload,allRecipes:t.payload});case"GET_RECIPES_DB":return Object(f.a)(Object(f.a)({},e),{},{recipesDb:t.payload,allRecipes:e.recipesWeb.concat(e.recipesDb)});case"CHANGE_DIET_FILTER":return Object(f.a)(Object(f.a)({},e),{},{dietFilters:t.payload});case"CHANGE_PAGE":return Object(f.a)(Object(f.a)({},e),{},{currentPage:t.payload});case"APPLY_FILTER":return Object(f.a)(Object(f.a)({},e),{},{allRecipes:e.allRecipes.filter((function(t){return t.vegetarian===e.dietFilters.vegetarian}))});default:return e}},S=Object(v.combineReducers)({reducer:T}),C=Object(v.createStore)(S,Object(F.composeWithDevTools)(Object(v.applyMiddleware)(_.a))),I=(r(71),r(0)),R=function(){var e=C.getState().reducer.dietFilters,t=Object(c.useState)({vegetarian:!1,vegan:!1,glutenFree:!1,dairyFree:!1,veryHealthy:!1}),r=Object(g.a)(t,2),a=r[0],s=r[1],i=Object(n.b)(),o=function(e){var t=Object(f.a)({},a);t[e.target.id]=e.target.checked,s(t),i({type:"CHANGE_DIET_FILTER",payload:t})};return Object(I.jsxs)("div",{className:"FilterBar",children:[Object(I.jsx)("div",{className:"LetsCook",children:"Lets Cook!"}),Object(I.jsxs)("form",{className:"checkForm",children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{id:"vegetarian",children:"Vegetarian"}),Object(I.jsx)("input",{id:"vegetarian",onChange:function(e){return o(e)},type:"checkbox",checked:e.vegetarian})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{id:"vegan",children:"Vegan"}),Object(I.jsx)("input",{id:"vegan",onChange:function(e){return o(e)},type:"checkbox",checked:e.vegan})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{id:"glutenFree",children:"Gluten Free"}),Object(I.jsx)("input",{id:"glutenFree",onChange:function(e){return o(e)},type:"checkbox",checked:e.glutenFree})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{id:"dairyFree",children:"Dairy Free"}),Object(I.jsx)("input",{id:"dairyFree",onChange:function(e){return o(e)},type:"checkbox",checked:e.dairyFree})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{id:"veryHealthy",children:"Very Healthy"}),Object(I.jsx)("input",{id:"veryHealthy",onChange:function(e){return o(e)},type:"checkbox",checked:e.veryHealthy})]})]})]})},E=r(23),k=r.n(E),D=r(15),H=r.n(D),B=r(40),P=r.n(B),L=function(e){var t=e.props;return t=t.replace(/<[^>]*>?/g,""),Object(I.jsx)("div",{className:P.a.summary,children:Object(I.jsx)("p",{children:t})})},w=function(e){var t=e.props,r=t.title,a=t.image,n=t.summary,s=t.id,i=e.props,o=i.vegetarian,l=i.vegan,u=i.glutenFree,j=i.dairyFree,d=i.veryHealthy,h=Object(c.useState)(!1),b=Object(g.a)(h,2),p=b[0],m=b[1];return Object(I.jsxs)("div",{className:H.a.Card,id:s,children:[Object(I.jsxs)("h3",{className:H.a.Title,children:["Recipe: ",r]}),Object(I.jsx)("img",{className:H.a.Image,src:a,alt:""}),Object(I.jsxs)("div",{className:H.a.Diets,children:[Object(I.jsx)("div",{className:H.a.Diet,children:o&&"Vegetarian"}),Object(I.jsx)("div",{className:H.a.Diet,children:l&&"Vegan"}),Object(I.jsx)("div",{className:H.a.Diet,children:u&&"Gluten Free"}),Object(I.jsx)("div",{className:H.a.Diet,children:j&&"Dairy Free"}),Object(I.jsx)("div",{className:H.a.Diet,children:d&&"Very Healthy"})]}),Object(I.jsxs)("p",{children:["id:",s]}),Object(I.jsx)("button",{type:"button",onClick:function(){return m(!p)},children:p?"close Description":"show Description"}),Object(I.jsx)("div",{children:p&&Object(I.jsx)(L,{props:n})})]})};var A=function(){var e=C.getState(),t=e.reducer,r=t.itemsPerPages,a=t.dietFilters,n=e.reducer.allRecipes;console.log(n.length);var s=Object(c.useState)(0),i=Object(g.a)(s,2),o=i[0],l=i[1],u=[],j=[];a.dairyFree&&(n=n.filter((function(e){return e.dairyFree}))),a.glutenFree&&(n=n.filter((function(e){return e.glutenFree}))),a.vegan&&(n=n.filter((function(e){return e.vegan}))),a.vegetarian&&(n=n.filter((function(e){return e.vegetarian}))),a.veryHealthy&&(n=n.filter((function(e){return e.veryHealthy})));var d=Math.ceil(n.length/r);if(n.length>0)for(var h=0,b=9,p=0;p<d;p++)j.push(p+1),u.push(n.slice(h,b)),h+=9,b+=9;else u=e.reducer.emptyRecipe;var m=Object(c.useState)(!0),x=Object(g.a)(m,2),O=x[0],y=x[1];return Object(I.jsxs)("div",{children:[Object(I.jsx)("button",{type:"button",onClick:function(){y(!O),l(0)},children:"Apply Filters"}),Object(I.jsx)("div",{className:k.a.indexBar,children:j.map((function(e){return Object(I.jsx)("button",{className:k.a.buttonIndex,type:"button",onClick:function(){l(e-1)},children:e},e)}))}),Object(I.jsx)("div",{className:k.a.cardsTable,children:u[o].map((function(e){return Object(I.jsx)(w,{props:e},e.id)}))})]})},G=function(){var e=Object(n.b)();return function(){var t=Object(h.a)(d.a.mark((function t(){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("http://localhost:3001/recipe/all");case 3:r=(r=t.sent).data,e(x(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("ERROR DEL USE EFFECT",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()(),Object(I.jsxs)("div",{className:y.a.Home,children:[Object(I.jsx)("header",{children:Object(I.jsx)(R,{})}),Object(I.jsx)("div",{children:Object(I.jsx)(A,{})})]})},V=r(24),W=r.n(V),M="https://api.spoonacular.com/recipes/complexSearch",Z="6559f189ce464b11a06f9cc77af34437",J="true";function Y(){var e=Object(c.useState)(!0),t=Object(g.a)(e,2),r=t[0],a=t[1],s=Object(n.b)();return Object(c.useEffect)((function(){(function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("".concat(M,"?apiKey=").concat(Z,"&number=").concat(100,"&addRecipeInformation=").concat(J)),e.next=4,p.a.get("".concat(M,"?apiKey=").concat(Z,"&number=").concat(100,"&addRecipeInformation=").concat(J));case 4:t=(t=e.sent).data.results,s(m(t)),a(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("ERRPR DEL USE EFFECT",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[s]),Object(I.jsxs)("div",{className:W.a.Landing,children:[Object(I.jsx)("h1",{className:W.a.Header,children:" Ready to cook? "}),Object(I.jsx)(o.b,{to:"/home",children:Object(I.jsxs)("button",{className:W.a.goHome,disabled:r,children:[" ",r?"Loading...":"Enter Site"," "]})})]})}r(75);var K=function(){return Object(I.jsx)("nav",{className:"NavBar",children:Object(I.jsxs)("ul",{children:[Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:"/",children:"<--------------------------------Landing"})}),Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:"/Home",children:"Home"})}),Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:"/Form",children:"Form"})}),Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:"/Search",children:"Search"})})]})})},U=r(5),Q=r.n(U),q=function(){var e=Object(n.b)(),t=Object(c.useState)({vegetarian:!1,vegan:!1,glutenFree:!1,dairyFree:!1,veryHealthy:!1,title:"",summary:"",spoonacularScore:0,image:"",healthScore:0,steps:[],diets:[]}),r=Object(g.a)(t,2),a=r[0],s=r[1],i=function(e){var t=Object(f.a)({},a);t[e.target.id]=e.target.value,s(t)},o=function(e){var t=Object(f.a)({},a);t[e.target.id]=e.target.checked,s(t)},l=function(t){return t.preventDefault(),a.title?a.summary?(alert("Recipe was sucessfully created"),void e((r=a,Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("http://localhost:3001/recipe/add",{title:r.title,summary:r.summary,spoonacularScore:r.spoonacularScore,image:r.image,healthScore:r.healthScore,steps:r.steps,vegetarian:r.vegetarian,vegan:r.vegan,glutenFree:r.glutenFree,dairyFree:r.dairyFree,veryHealthy:r.veryHealthy});case 2:case"end":return e.stop()}}),e)})))))):alert("Please enter a resume of your recipe"):alert("Please enter a title for your recipe");var r};return Object(I.jsx)("div",{className:Q.a.mapa,children:Object(I.jsxs)("div",{className:Q.a.Body,onSubmit:function(e){return l(e)},children:[Object(I.jsx)("h1",{children:"Add New Recipe"}),Object(I.jsxs)("form",{children:[Object(I.jsx)("h3",{children:"Description"}),Object(I.jsx)("input",{className:Q.a.Inputs,id:"title",onChange:function(e){return i(e)},type:"text",placeholder:"title"}),Object(I.jsx)("input",{className:Q.a.Inputs,id:"summary",onChange:function(e){return i(e)},type:"text",placeholder:"summary"})]}),Object(I.jsx)("h3",{children:"Steps"}),Object(I.jsx)("form",{children:Object(I.jsx)("input",{className:Q.a.Inputs,id:"steps",type:"text",placeholder:"step"})}),Object(I.jsx)("h3",{children:"Score"}),Object(I.jsxs)("form",{children:[Object(I.jsx)("input",{className:Q.a.Inputs,id:"spoonacularScore",onChange:function(e){return i(e)},type:"number",placeholder:"Score"}),Object(I.jsx)("input",{className:Q.a.Inputs,id:"healthScore",onChange:function(e){return i(e)},type:"number",placeholder:"Health Score"})]}),Object(I.jsx)("h3",{children:"Imagen"}),Object(I.jsx)("form",{children:Object(I.jsx)("input",{className:Q.a.Inputs,id:"image",onChange:function(e){return i(e)},type:"url",placeholder:"image"})}),Object(I.jsx)("h3",{children:"Diet"}),Object(I.jsxs)("form",{className:Q.a.chekForm,children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{children:"Vegetarian"}),Object(I.jsx)("input",{className:Q.a.Inputs,id:"vegetarian",onChange:function(e){return o(e)},type:"checkbox"})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{children:"Vegan"}),Object(I.jsx)("input",{className:Q.a.Inputs,id:"vegan",onChange:function(e){return o(e)},type:"checkbox"})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{children:"Gluten Free"}),Object(I.jsx)("input",{className:Q.a.Inputs,id:"glutenFree",onChange:function(e){return o(e)},type:"checkbox"})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{children:"Dairy Free"}),Object(I.jsx)("input",{className:Q.a.Inputs,id:"dairyFree",onChange:function(e){return o(e)},type:"checkbox"})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{children:"Very Healthy"}),Object(I.jsx)("input",{className:Q.a.Inputs,id:"veryHealthy",onChange:function(e){return o(e)},type:"checkbox"})]})]}),Object(I.jsx)("form",{children:Object(I.jsx)("button",{children:"Submit"})})]})})},z=r(42),X=r.n(z),$=function(){return Object(I.jsx)("footer",{className:X.a.FootBar,children:Object(I.jsx)("p",{children:"este es el pie de pagina"})})},ee=r(25),te=r.n(ee),re=function(){return Object(I.jsxs)("div",{className:te.a.mapa,children:[Object(I.jsx)("form",{className:te.a.Body,children:Object(I.jsx)("input",{className:te.a.Inputs,type:"number",placeholder:"Id"})}),Object(I.jsx)("button",{children:"Submit"})]})};var ce=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsxs)(u.c,{children:[Object(I.jsx)(u.a,{exact:!0,path:"/",component:Y}),Object(I.jsxs)(u.a,{path:"/",children:[Object(I.jsx)(K,{}),Object(I.jsx)(u.a,{exact:!0,path:"/Home",children:Object(I.jsx)(G,{})}),Object(I.jsx)(u.a,{exact:!0,path:"/Search",children:Object(I.jsx)(re,{})}),Object(I.jsx)(u.a,{exact:!0,path:"/Form",children:Object(I.jsx)(q,{})}),Object(I.jsx)($,{})]})]})})};i.a.render(Object(I.jsx)(n.a,{store:C,children:Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(o.a,{children:Object(I.jsx)(ce,{})})})}),document.getElementById("root")),l()}},[[76,1,2]]]);
//# sourceMappingURL=main.06487a54.chunk.js.map