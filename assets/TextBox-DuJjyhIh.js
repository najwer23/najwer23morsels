var d={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T;function E(){if(T)return o;T=1;var a=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function x(l,e,s){var t=null;if(s!==void 0&&(t=""+s),e.key!==void 0&&(t=""+e.key),"key"in e){s={};for(var r in e)r!=="key"&&(s[r]=e[r])}else s=e;return e=s.ref,{$$typeof:a,type:l,key:t,ref:e!==void 0?e:null,props:s}}return o.Fragment=n,o.jsx=x,o.jsxs=x,o}var p;function k(){return p||(p=1,d.exports=E()),d.exports}var v=k();const w="_najwer23morselsTextBox_1inox_2",q={najwer23morselsTextBox:w},c=({tag:a="div",children:n,className:x,target:l,rel:e,mobileSize:s,desktopSize:t,lineHeight:r,color:m,href:u,colorHover:R,margin:i,fontWeight:j,fontWeightHover:_,...f})=>{const B=a;return v.jsxs(B,{style:{"--fw":j,"--fwh":_,"--ch":R,"--c":m,"--ms":s,"--ds":t,"--lh":r,...i!=null?{"--m":i}:{}},className:[q.najwer23morselsTextBox,"MorselsTextBox",x].filter(Boolean).join(" "),...f,children:[u&&v.jsx("a",{className:"MorselsTextBoxLink",href:u,target:l,rel:e,children:n}),!u&&n]})};c.displayName="TextBox";c.__docgenInfo={description:"",methods:[],displayName:"TextBox",props:{tag:{defaultValue:{value:"'div'",computed:!1},required:!1}}};export{c as T,v as j};
