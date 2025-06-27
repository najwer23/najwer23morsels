var m={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k;function B(){if(k)return n;k=1;var x=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function a(f,o,r){var s=null;if(r!==void 0&&(s=""+r),o.key!==void 0&&(s=""+o.key),"key"in o){r={};for(var d in o)d!=="key"&&(r[d]=o[d])}else r=o;return o=r.ref,{$$typeof:x,type:f,key:s,ref:o!==void 0?o:null,props:r}}return n.Fragment=i,n.jsx=a,n.jsxs=a,n}var y;function z(){return y||(y=1,m.exports=B()),m.exports}var e=z();const F="_morselsTextBox_1f7yj_2",R={morselsTextBox:F},t=({tag:x="div",children:i,className:a,target:f,rel:o,mobileSize:r,desktopSize:s,lineHeight:d,color:v,href:g,colorHover:j,margin:h,fontWeight:w,fontWeightHover:T,...b})=>{const S=x;return e.jsxs(S,{style:{"--fw":w,"--fwh":T,"--ch":j,"--c":v,"--ms":r,"--ds":s,"--lh":d,...h!=null?{"--m":h}:{}},className:[R.morselsTextBox,"MorselsTextBox",a].filter(Boolean).join(" "),...b,children:[g&&e.jsx("a",{className:"MorselsTextBoxLink",href:g,target:f,rel:o,children:i}),!g&&i]})};t.displayName="TextBox";t.__docgenInfo={description:"",methods:[],displayName:"TextBox",props:{tag:{defaultValue:{value:"'div'",computed:!1},required:!1}}};const _={title:"TextBox/TextBox",component:t,parameters:{layout:"centered"},tags:["autodocs"]},u={decorators:[()=>e.jsx("div",{children:e.jsx(t,{color:"grey",mobileSize:20,desktopSize:20,children:"It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to."})})]},l={decorators:[()=>e.jsx("div",{children:e.jsx(t,{color:"green",colorHover:"orange",mobileSize:20,desktopSize:20,href:"/ksdjdkdj",children:"It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to."})})]},c={decorators:[()=>e.jsx("div",{children:e.jsx(t,{color:"red",colorHover:"orange",mobileSize:20,desktopSize:40,href:"/ksdjdkdj",children:"It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to."})})]},p={decorators:[()=>e.jsx("div",{children:e.jsx(t,{color:"red",colorHover:"orange",mobileSize:40,desktopSize:20,href:"/ksdjdkdj",children:"It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to."})})]};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  decorators: [() => <div>
        <TextBox color="grey" mobileSize={20} desktopSize={20}>
          It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your
          feet, there's no knowing where you might be swept off to.
        </TextBox>
      </div>]
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [() => <div>
        <TextBox color="green" colorHover="orange" mobileSize={20} desktopSize={20} href="/ksdjdkdj">
          It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your
          feet, there's no knowing where you might be swept off to.
        </TextBox>
      </div>]
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: [() => <div>
        <TextBox color="red" colorHover="orange" mobileSize={20} desktopSize={40} href="/ksdjdkdj">
          It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your
          feet, there's no knowing where you might be swept off to.
        </TextBox>
      </div>]
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: [() => <div>
        <TextBox color={'red'} colorHover={'orange'} mobileSize={40} desktopSize={20} href="/ksdjdkdj">
          It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your
          feet, there's no knowing where you might be swept off to.
        </TextBox>
      </div>]
}`,...p.parameters?.docs?.source}}};const E=["Default","Link","FluidMobile20Desktop40","FluidMobile40Desktop20"];export{u as Default,c as FluidMobile20Desktop40,p as FluidMobile40Desktop20,l as Link,E as __namedExportsOrder,_ as default};
