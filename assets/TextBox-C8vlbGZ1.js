var d={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T;function E(){if(T)return o;T=1;var a=Symbol.for("react.transitional.element"),x=Symbol.for("react.fragment");function n(l,e,t){var s=null;if(t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),"key"in e){t={};for(var r in e)r!=="key"&&(t[r]=e[r])}else t=e;return e=t.ref,{$$typeof:a,type:l,key:s,ref:e!==void 0?e:null,props:t}}return o.Fragment=x,o.jsx=n,o.jsxs=n,o}var p;function k(){return p||(p=1,d.exports=E()),d.exports}var v=k();const w="_najwer23morselsTextBox_eags9_2",q={najwer23morselsTextBox:w},c=({tag:a="div",children:x,className:n,target:l,rel:e,mobileSize:t,desktopSize:s,lineHeight:r,color:m,href:u,colorHover:R,margin:i,fontWeight:j,fontWeightHover:_,...f})=>{const B=a;return v.jsxs(B,{style:{"--textbox-fw":j,"--textbox-fwh":_,"--textbox-ch":R,"--textbox-c":m,"--textbox-ms":t,"--textbox-ds":s,"--textbox-lh":r,...i!=null?{"--textbox-m":i}:{}},className:[q.najwer23morselsTextBox,"MorselsTextBox",n].filter(Boolean).join(" "),...f,children:[u&&v.jsx("a",{className:"MorselsTextBoxLink",href:u,target:l,rel:e,children:x}),!u&&x]})};c.displayName="TextBox";c.__docgenInfo={description:"",methods:[],displayName:"TextBox",props:{tag:{defaultValue:{value:"'div'",computed:!1},required:!1}}};export{c as T,v as j};
