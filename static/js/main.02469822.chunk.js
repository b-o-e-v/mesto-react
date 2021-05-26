(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(4),r=a.n(c),i=a(2),o=a(0);function l(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("div",{className:"header__logo"})})}function u(e){var t=e.userAvatar,a=e.userName,n=e.userDescription,s=e.onEditAvatar,c=e.onEditProfile,r=e.onAddPlace;return Object(o.jsxs)("section",{className:"profile",children:[Object(o.jsxs)("div",{className:"profile__info",children:[Object(o.jsxs)("div",{className:"profile__container",children:[Object(o.jsx)("img",{src:t,alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"}),Object(o.jsx)("button",{onClick:s,className:"profile__avatar-btn"})]}),Object(o.jsxs)("div",{className:"profile__about",children:[Object(o.jsx)("h1",{className:"profile__name",children:a}),Object(o.jsx)("p",{className:"profile__description",children:n})]}),Object(o.jsx)("button",{onClick:c,className:"profile__edit",type:"button"})]}),Object(o.jsx)("button",{onClick:r,className:"profile__add",type:"button"})]})}function p(e){var t=e.userID,a=e.ownerID,n=e.card,s=e.onCardClick,c=e.onCardDeletePopupOpen;return Object(o.jsxs)("li",{className:"card",children:[Object(o.jsx)("button",{onClick:c,className:"card__delete ".concat(t===a&&"show-block"),type:"button"}),Object(o.jsx)("img",{onClick:function(){s(n)},className:"card__img",alt:n.name,src:n.link}),Object(o.jsxs)("div",{className:"card__description",children:[Object(o.jsx)("h2",{className:"card__title",children:n.name}),Object(o.jsxs)("div",{className:"card__container",children:[Object(o.jsx)("button",{className:"card__like",type:"button"}),Object(o.jsx)("span",{className:"card__like-count",children:n.likes.length})]})]})]})}function d(e){var t=e.userID,a=e.cards,n=e.onCardClick,s=e.onCardDeletePopupOpen;return Object(o.jsx)("section",{className:"gallery",children:Object(o.jsx)("ul",{className:"cards",children:a.map((function(e){return Object(o.jsx)(p,{userID:t,ownerID:e.owner._id,card:e,onCardClick:n,onCardDeletePopupOpen:s},e._id)}))})})}var j=a(5),h=a(6),_=new(function(){function e(t){var a=t.url,n=t.headers;Object(j.a)(this,e),this._url=a,this._headers=n}return Object(h.a)(e,[{key:"_getStatus",value:function(e){return e.ok?e.json():Promise.reject("Error! : ".concat(e.status))}},{key:"getServerData",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"updatePhoto",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._getStatus)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._getStatus)}},{key:"editUserDesc",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._getStatus)}},{key:"editUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._getStatus)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._getStatus)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._getStatus)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getStatus)}},{key:"putLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._getStatus)}},{key:"removeLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getStatus)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-23",headers:{authorization:"59fccf9e-6799-435b-80d6-745d3115e9a3","Content-Type":"application/json"}});function b(e){var t=e.onEditProfile,a=e.onAddPlace,s=e.onEditAvatar,c=e.onCardClick,r=e.onCardDeletePopupOpen,l=Object(n.useState)(""),p=Object(i.a)(l,2),j=p[0],h=p[1],b=Object(n.useState)(""),m=Object(i.a)(b,2),O=m[0],f=m[1],x=Object(n.useState)(""),N=Object(i.a)(x,2),v=N[0],k=N[1],C=Object(n.useState)(""),g=Object(i.a)(C,2),y=g[0],S=g[1],P=Object(n.useState)([]),D=Object(i.a)(P,2),E=D[0],T=D[1];return Object(n.useEffect)((function(){_.getServerData().then((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];f(a.name),k(a.about),S(a.avatar),h(a._id),T(n)})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsxs)("main",{className:"main",children:[Object(o.jsx)(u,{userAvatar:y,userName:O,userDescription:v,onEditAvatar:s,onEditProfile:t,onAddPlace:a}),Object(o.jsx)(d,{userID:j,cards:E,onCardClick:c,onCardDeletePopupOpen:r})]})}function m(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})}function O(e){var t=e.title,a=e.name,n=e.buttonText,s=e.isOpen,c=e.onClose,r=e.children;return Object(o.jsx)("section",{className:"popup popup_type_".concat(a," ").concat(s&&"popup_opened"),children:Object(o.jsxs)("div",{className:"popup__container",children:[Object(o.jsx)("h2",{className:"popup__title",children:t}),Object(o.jsxs)("form",{action:"#",method:"POST",className:"popup__form",name:a,noValidate:!0,children:[r,Object(o.jsx)("button",{type:"submit",defaultValue:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",className:"popup__save",name:"btn-add-profile",children:n})]}),Object(o.jsx)("button",{type:"button",className:"popup__close",onClick:c})]})})}function f(e){var t=e.isOpen,a=e.onClose;return Object(o.jsxs)(O,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,children:[Object(o.jsxs)("label",{htmlFor:"name-input",className:"popup__label",children:[Object(o.jsx)("input",{type:"text",placeholder:"\u0418\u043c\u044f",className:"popup__input popup__input_string_name",name:"name",required:!0,minLength:"2",maxLength:"40",id:"name-input",defaultValue:""}),Object(o.jsx)("span",{className:"popup__input-error name-input-error"})]}),Object(o.jsxs)("label",{htmlFor:"job-input",className:"popup__label",children:[Object(o.jsx)("input",{type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",className:"popup__input popup__input_string_job",name:"about",required:!0,minLength:"2",maxLength:"200",id:"job-input",defaultValue:""}),Object(o.jsx)("span",{className:"popup__input-error job-input-error"})]})]})}function x(e){var t=e.isOpen,a=e.onClose;return Object(o.jsxs)(O,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",buttonText:"C\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:a,children:[Object(o.jsxs)("label",{htmlFor:"card-name-input",className:"popup__label",children:[Object(o.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_string_card-name",name:"name",required:!0,minLength:"2",maxLength:"30",id:"card-name-input"}),Object(o.jsx)("span",{className:"popup__input-error card-name-input-error"})]}),Object(o.jsxs)("label",{htmlFor:"card-link-input",className:"popup__label",children:[Object(o.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_string_card-link",name:"link",required:!0,id:"card-link-input"}),Object(o.jsx)("span",{className:"popup__input-error card-link-input-error"})]})]})}function N(e){var t=e.isOpen,a=e.onClose;return Object(o.jsx)(O,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"update",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,children:Object(o.jsxs)("label",{htmlFor:"card-link-input-avatar",className:"popup__label",children:[Object(o.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_string_card-link",name:"avatar",required:!0,id:"card-link-input-avatar"}),Object(o.jsx)("span",{className:"popup__input-error card-link-input-avatar-error"})]})})}function v(e){var t=e.card,a=e.isClose;return Object(o.jsx)("section",{className:"popup popup_type_open-photo ".concat(t.link&&"popup_opened"),children:Object(o.jsxs)("div",{className:"popup__container popup__container_type_open-photo",children:[Object(o.jsx)("img",{className:"popup__img",src:"".concat(t.link),alt:t.name}),Object(o.jsx)("h2",{className:"popup__name",children:t.name}),Object(o.jsx)("button",{onClick:a,type:"button",className:"popup__close"})]})})}function k(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),r=Object(i.a)(c,2),u=r[0],p=r[1],d=Object(n.useState)(!1),j=Object(i.a)(d,2),h=j[0],_=j[1],k=Object(n.useState)(!1),C=Object(i.a)(k,2),g=C[0],y=C[1],S=Object(n.useState)({name:"",link:""}),P=Object(i.a)(S,2),D=P[0],E=P[1];function T(){s(!1),p(!1),_(!1),y(!1),E({name:"",link:""})}return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)(l,{}),Object(o.jsx)(b,{onEditProfile:function(){s(!0)},onAddPlace:function(){p(!0)},onEditAvatar:function(){_(!0)},onCardClick:function(e){E(e)},onCardDeletePopupOpen:function(){y(!0)}}),Object(o.jsx)(f,{isOpen:a,onClose:T}),Object(o.jsx)(x,{isOpen:u,onClose:T}),Object(o.jsx)(N,{isOpen:h,onClose:T}),Object(o.jsx)(O,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete",buttonText:"\u0414\u0430",isOpen:g,onClose:T}),Object(o.jsx)(v,{card:D,isClose:T}),Object(o.jsx)(m,{})]})}a(12);r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.02469822.chunk.js.map