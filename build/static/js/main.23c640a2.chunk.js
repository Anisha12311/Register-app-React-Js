(this["webpackJsonpregister-app"]=this["webpackJsonpregister-app"]||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t.n(s),c=t(6),i=t.n(c),r=(t(11),t(12),t(2)),l=t.p+"static/media/logo.3bbba874.jpg";var o=function(e){var a={};return e.name.trim()?/^[A-Za-z]+/.test(e.name.trim())||(a.name="Enter a valid name"):a.name="Name required",e.phone?(e.phone.length<10||e.phone.length>10)&&(a.phone="Digit must be 10 number "):a.phone="Phone No. is required",e.email?/\S+@\S+\.\S+/.test(e.email)||(a.email="Email address is invalid"):a.email="Email required",e.password?/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(e.password)||(a.password="Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:"):a.password="Password is required",a},j=t(3),m=t(5),d=function(e,a){var t=Object(s.useState)({name:"",phone:"",email:"",password:""}),n=Object(r.a)(t,2),c=n[0],i=n[1],l=Object(s.useState)({}),o=Object(r.a)(l,2),d=o[0],b=o[1],p=Object(s.useState)(!1),h=Object(r.a)(p,2),u=h[0],O=h[1];return Object(s.useEffect)((function(){0===Object.keys(d).length&&u&&e()}),[d]),{handleChange:function(e){var a=e.target,t=a.name,s=a.value;i(Object(m.a)(Object(m.a)({},c),{},Object(j.a)({},t,s)))},handleSubmit:function(e){e.preventDefault(),b(a(c)),O(!0)},values:c,errors:d}},b=t(0),p=function(e){var a=e.submitForm,t=d(a,o),s=t.handleChange,n=t.handleSubmit,c=t.values,i=t.errors;return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("div",{className:"contain",children:Object(b.jsx)("img",{src:l,alt:"",width:"800px",height:"680px"})}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{className:"title",children:"Register"})}),Object(b.jsxs)("form",{onSubmit:n,className:"form-wrapper",noValidate:!0,children:[Object(b.jsxs)("div",{className:"name",children:[Object(b.jsx)("label",{className:"label",children:"Name"}),Object(b.jsx)("input",{className:"input",type:"name",name:"name",autoComplete:"off",value:c.name,onChange:s}),i.name&&Object(b.jsx)("p",{children:i.name})]}),Object(b.jsxs)("div",{className:"phone",children:[Object(b.jsx)("label",{className:"label",children:"Phone No."}),Object(b.jsx)("input",{className:"input",type:"phone",name:"phone",autoComplete:"off",value:c.phone,onChange:s}),i.phone&&Object(b.jsx)("p",{children:i.phone})]}),Object(b.jsxs)("div",{className:"email",children:[Object(b.jsx)("label",{className:"label",children:"Email"}),Object(b.jsx)("input",{className:"input",type:"email",name:"email",autoComplete:"off",value:c.email,onChange:s}),i.email&&Object(b.jsx)("p",{children:i.email})]}),Object(b.jsxs)("div",{className:"password",children:[Object(b.jsx)("label",{className:"label",children:"Password"}),Object(b.jsx)("input",{className:"input",type:"password",name:"password",autoComplete:"off",value:c.password,onChange:s}),i.password&&Object(b.jsx)("p",{children:i.password})]}),Object(b.jsxs)("span",{className:"form-input-login",children:["Already have an account? Login ",Object(b.jsx)("a",{href:"#",children:"here"})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"submit",children:"Register "})})]})]})})]})},h=function(){var e=Object(s.useState)(!1),a=Object(r.a)(e,2),t=(a[0],a[1]);return Object(b.jsx)("div",{children:Object(b.jsx)(p,{submitForm:function(){t(!0)}})})},u=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(h,{})})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.23c640a2.chunk.js.map