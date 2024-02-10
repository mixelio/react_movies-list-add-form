(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(6),c=i.n(a),n=(i(14),i(9)),s=i(2),l=i(1),o=(i(15),i(16),i(17),i(0)),r=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(o.jsxs)("div",{className:"content",children:[t.description,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(r,{movie:e},e.imdbId)}))})},m=i(7),j=i.n(m);var b=function(e){var t=e.name,i=e.value,a=e.label,c=void 0===a?t:a,n=e.placeholder,r=void 0===n?"Enter ".concat(c):n,d=e.required,m=void 0!==d&&d,b=e.onChange,u=void 0===b?function(){}:b,h=Object(l.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),O=Object(s.a)(h,1)[0],g=Object(l.useState)(!1),p=Object(s.a)(g,2),v=p[0],f=p[1],x=v&&m&&!i;return Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:O,children:c}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{type:"text",id:O,"data-cy":"movie-".concat(t),className:j()("input",{"is-danger":x}),placeholder:r,value:i,onChange:function(e){return u(e.target.value)},onBlur:function(){return f(!0)}})}),x&&Object(o.jsx)("p",{className:"help is-danger",children:"".concat(c," is required")})]})},u=function(e){var t=e.onAdd,i=Object(l.useState)(0),a=Object(s.a)(i,2),c=a[0],n=a[1],r=Object(l.useState)(""),d=Object(s.a)(r,2),m=d[0],j=d[1],u=Object(l.useState)(!1),h=Object(s.a)(u,2),O=h[0],g=h[1],p=Object(l.useState)(""),v=Object(s.a)(p,2),f=v[0],x=v[1],M=Object(l.useState)(!1),N=Object(s.a)(M,2),w=N[0],S=N[1],U=Object(l.useState)(""),y=Object(s.a)(U,2),I=y[0],T=y[1],B=Object(l.useState)(!1),_=Object(s.a)(B,2),k=_[0],z=_[1],A=Object(l.useState)(""),D=Object(s.a)(A,2),C=D[0],V=D[1],Y=Object(l.useState)(!1),F=Object(s.a)(Y,2),X=F[0],q=F[1],L=Object(l.useState)(""),Z=Object(s.a)(L,2),E=Z[0],R=Z[1],J=Object(l.useState)(!1),G=Object(s.a)(J,2),Q=G[0],W=G[1],H=Object(l.useState)(!0),K=Object(s.a)(H,2),P=K[0],$=K[1];return Object(o.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),g(!m),S(!f),z(!I),q(!C),W(!E),O||w||k||X||Q||(t({title:m,description:f,imgUrl:C,imdbUrl:I,imdbId:E}),n(c+1),j(""),x(""),T(""),V(""),R(""),$(!0))},children:[Object(o.jsx)("h2",{className:"title",children:"Add a movie"}),Object(o.jsx)(b,{name:"title",label:"Title",value:m,onChange:function(e){j(e),$(!(m&&f&&I&&C&&E))},required:!0}),Object(o.jsx)(b,{name:"description",label:"Description",value:f,onChange:function(e){x(e),$(!(m&&f&&I&&C&&E))}}),Object(o.jsx)(b,{name:"imgUrl",label:"Image URL",value:C,onChange:function(e){V(e),$(!(m&&f&&I&&C&&E))},required:!0}),Object(o.jsx)(b,{name:"imdbUrl",label:"Imdb URL",value:I,onChange:function(e){T(e),$(!(m&&f&&I&&C&&E))},required:!0}),Object(o.jsx)(b,{name:"imdbId",label:"Imdb ID",value:E,onChange:function(e){R(e),$(!(m&&f&&I&&C&&E))},required:!0}),Object(o.jsx)("div",{className:"field is-grouped",children:Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:P,children:"Add"})})})]},c)},h=i(8),O=function(){var e=Object(l.useState)(h),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(d,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(u,{onAdd:function(e){a((function(){return[e].concat(Object(n.a)(i))}))}})})]})};c.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.08e84da8.chunk.js.map