"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[829],{829:function(e,n,t){t.r(n),t.d(n,{Rewievs:function(){return o},default:function(){return f}});var r=t(439),a=t(689),i=t(503),c=t(791),u="rewiew_rewTitle__xeN0Z",s=t(184),o=function(){var e=(0,a.UO)().movieId,n=(0,c.useState)([]),t=(0,r.Z)(n,2),o=t[0],f=t[1];return(0,c.useEffect)((function(){(0,i.Bt)(e).then((function(e){var n=e.data;return f(n.results)}))})),(0,s.jsx)(s.Fragment,{children:0!==o.length?(0,s.jsx)("ul",{children:o.map((function(e){var n=e.author,t=e.content;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h2",{className:u,children:["Autor:",(0,s.jsxs)("span",{className:u,children:[" ",n]})]}),(0,s.jsx)("p",{className:u,children:t})]},n)}))}):(0,s.jsxs)("p",{className:u,children:[(0,s.jsx)("br",{}),"Sorry, we dont have any rewievs for this movie."]})})},f=o},503:function(e,n,t){t.d(n,{Bt:function(){return o},DD:function(){return u},bI:function(){return c},d5:function(){return s},hP:function(){return i}});var r=t(912),a="372e9c91a067b2d0ab40ec17b7b864be";r.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){return r.Z.get("/trending/all/day",{params:{api_key:a}})},c=function(e){return r.Z.get("/search/movie",{params:{api_key:a,query:e}})},u=function(e){return r.Z.get("/movie/".concat(e),{params:{api_key:a}})},s=function(e){return r.Z.get("/movie/".concat(e,"/credits"),{params:{api_key:a}})},o=function(e){return r.Z.get("/movie/".concat(e,"/reviews"),{params:{api_key:a}})}}}]);
//# sourceMappingURL=829.c2733d49.chunk.js.map