import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{D as n}from"./iframe-B_7CpkkU.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./TextBox-CyAP7UcG.js";import{n as o,t as s}from"./Button-BE0mzndn.js";import{t as c}from"./Grid-CEMbx5ab.js";import{t as l}from"./Grid-B1sm5aRj.js";var u,d,f,p,m,h,g,_,v,y,b,x,S=e((()=>{u=`_n23mNavigationTabs_jap7i_2`,d=`_navigationLogo_jap7i_3`,f=`_navigationLine_jap7i_8`,p=`_menuPlaceholder_jap7i_14`,m=`_menu_jap7i_14`,h=`_menuContent_jap7i_38`,g=`_menuAnimation_jap7i_55`,_=`_menuOpen_jap7i_63`,v=`_menuItemMobile_jap7i_69`,y=`_navigationTabMenu_jap7i_74`,b=`_menuItemDesktop_jap7i_78`,x={n23mNavigationTabs:u,navigationLogo:d,navigationLine:f,menuPlaceholder:p,menu:m,menuContent:h,menuAnimation:g,menuOpen:_,menuItemMobile:v,navigationTabMenu:y,menuItemDesktop:b}})),C,w,T,E=e((()=>{C=t(n(),1),s(),l(),a(),S(),w=r(),T=({children:e,className:t,style:n,menuTopLeftColumn:r=(0,w.jsx)(w.Fragment,{children:`menuTopLeftColumn`}),menuTopRightColumn:a=(0,w.jsx)(w.Fragment,{children:`menuTopRightColumn`}),menuMobile:s=(0,w.jsx)(w.Fragment,{children:`menuMobile`}),menuBottomTabs:l=(0,w.jsx)(w.Fragment,{children:`menuBottomTabs`}),menuOnlyTop:u=!1,...d})=>{let f=(0,C.useRef)(null),p=(0,C.useRef)(null),m=(0,C.useRef)(!1),h=(0,C.useRef)(null),g=()=>{m.current=!0,h.current=requestAnimationFrame(()=>{h.current=requestAnimationFrame(()=>{f.current?.classList.add(x.menuOpen),p.current?.querySelectorAll(`a`).forEach(e=>{e.classList.add(x.menuAnimation)})})})},_=()=>{m.current=!1,f.current?.classList.remove(x.menuOpen),p.current?.querySelectorAll(`a`).forEach(e=>{e.classList.remove(x.menuAnimation)})},v=()=>{h.current&&cancelAnimationFrame(h.current),m.current?_():g()},y=e=>{e.target.closest(`a`)&&_()};return(0,w.jsx)(`div`,{className:[x.n23mNavigationTabs,`n23mNavigationTabs`,t].filter(Boolean).join(` `),...d,children:(0,w.jsxs)(c,{layout:`container`,widthMax:`1600px`,children:[(0,w.jsx)(c,{layout:`container`,widthMax:`1400px`,padding:`20px`,margin:`auto`,children:(0,w.jsxs)(c,{layout:`columns`,gap:{col:`20px`,row:`20px`},col:{smallDesktop:2,desktop:2,mobile:2,tablet:2},children:[(0,w.jsx)(`div`,{children:r}),(0,w.jsx)(`div`,{className:u?void 0:x.menuItemDesktop,children:a}),!u&&(0,w.jsxs)(`div`,{className:x.menuItemMobile,children:[(0,w.jsx)(`div`,{className:x.menuPlaceholder,children:(0,w.jsx)(o,{height:`40px`,width:`70px`,padding:0,backgroundColor:`orangered`,onClick:v,children:(0,w.jsx)(i,{tag:`span`,desktopSize:20,mobileSize:20,fontWeight:400,color:`white`,children:`Menu`})})}),(0,w.jsx)(`div`,{ref:f,className:x.menu,children:(0,w.jsx)(`div`,{ref:p,className:x.menuContent,onClick:y,children:s})})]})]})}),(0,w.jsx)(`div`,{className:x.navigationLine}),!u&&(0,w.jsx)(c,{layout:`container`,widthMax:`1400px`,padding:`20px`,margin:`auto`,className:x.navigationTabMenu,children:(0,w.jsx)(c,{layout:`flex`,justifyContent:`center`,widthMax:`1400px`,gap:{col:`30px`,row:`20px`},children:l})})]})})},T.displayName=`NavigationTabs`,T.__docgenInfo={description:``,methods:[],displayName:`NavigationTabs`,props:{menuTopLeftColumn:{defaultValue:{value:`<>menuTopLeftColumn</>`,computed:!1},required:!1},menuTopRightColumn:{defaultValue:{value:`<>menuTopRightColumn</>`,computed:!1},required:!1},menuMobile:{defaultValue:{value:`<>menuMobile</>`,computed:!1},required:!1},menuBottomTabs:{defaultValue:{value:`<>menuBottomTabs</>`,computed:!1},required:!1},menuOnlyTop:{defaultValue:{value:`false`,computed:!1},required:!1}}}})),D=e((()=>{E()})),O,k,A,j,M;e((()=>{l(),a(),D(),O=r(),k={title:`Navigation/NavigationTabs`,component:T,parameters:{docs:{description:{component:`
Test Test

\`\`\`tsx
import { NavigationTabs } from 'najwer23morsels/lib/NavigationTabs';
\`\`\`
      `}}},tags:[`autodocs`]},A={args:{menuTopLeftColumn:(0,O.jsx)(i,{desktopSize:20,mobileSize:20,fontWeight:500,tag:`a`,href:`/`,onClick:e=>e.preventDefault(),children:`Gym`}),menuTopRightColumn:(0,O.jsx)(c,{layout:`flex`,justifyContent:`flex-end`,children:(0,O.jsx)(i,{tag:`a`,href:`/login`,desktopSize:20,mobileSize:20,fontWeight:500,onClick:e=>e.preventDefault(),children:`Login`})}),menuMobile:(0,O.jsx)(O.Fragment,{children:[{href:`/home`,label:`Home`},{href:`/login`,label:`Login`}].map(({href:e,label:t})=>(0,O.jsx)(i,{tag:`a`,href:e,desktopSize:30,mobileSize:30,fontWeight:400,onClick:e=>e.preventDefault(),children:t},t))}),menuBottomTabs:(0,O.jsx)(O.Fragment,{children:[{href:`/in/dashboard`,label:`Dashboard`},{href:`/in/push-ups`,label:`Push Ups`},{href:`/in/squats`,label:`Squats`},{href:`/in/sit-ups`,label:`Sit Ups`},{href:`/in/pull-ups`,label:`Pull Ups`}].map(({href:e,label:t})=>(0,O.jsx)(`div`,{children:(0,O.jsx)(i,{tag:`a`,href:e,onClick:e=>{e.preventDefault()},desktopSize:18,mobileSize:18,fontWeight:500,children:t})},t))})},render:e=>(0,O.jsx)(`div`,{style:{width:`100vw`,height:`400px`},children:(0,O.jsx)(T,{...e})})},j={args:{menuTopLeftColumn:(0,O.jsx)(i,{desktopSize:20,mobileSize:20,fontWeight:500,tag:`a`,href:`/`,children:`Gym`}),menuTopRightColumn:(0,O.jsx)(c,{layout:`flex`,justifyContent:`flex-end`,children:(0,O.jsx)(i,{tag:`a`,href:`/login`,desktopSize:20,mobileSize:20,fontWeight:500,children:`Login`})}),menuMobile:(0,O.jsx)(O.Fragment,{children:[{href:`/home`,label:`Home`},{href:`/login`,label:`Login`}].map(({href:e,label:t})=>(0,O.jsx)(i,{tag:`a`,href:e,desktopSize:30,mobileSize:30,fontWeight:400,onClick:e=>e.preventDefault(),children:t},t))}),menuOnlyTop:!0},render:e=>(0,O.jsx)(`div`,{style:{width:`100vw`,height:`400px`},children:(0,O.jsx)(T,{...e})})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    menuTopLeftColumn: <TextBox desktopSize={20} mobileSize={20} fontWeight={500} tag="a" href="/" onClick={e => e.preventDefault()}>
        Gym
      </TextBox>,
    menuTopRightColumn: <Grid layout="flex" justifyContent="flex-end">
        <TextBox tag="a" href="/login" desktopSize={20} mobileSize={20} fontWeight={500} onClick={e => e.preventDefault()}>
          Login
        </TextBox>
      </Grid>,
    menuMobile: <>
        {[{
        href: '/home',
        label: 'Home'
      }, {
        href: '/login',
        label: 'Login'
      }].map(({
        href,
        label
      }) => <TextBox key={label} tag="a" href={href} desktopSize={30} mobileSize={30} fontWeight={400} onClick={e => e.preventDefault()}>
            {label}
          </TextBox>)}
      </>,
    menuBottomTabs: <>
        {[{
        href: '/in/dashboard',
        label: 'Dashboard'
      }, {
        href: '/in/push-ups',
        label: 'Push Ups'
      }, {
        href: '/in/squats',
        label: 'Squats'
      }, {
        href: '/in/sit-ups',
        label: 'Sit Ups'
      }, {
        href: '/in/pull-ups',
        label: 'Pull Ups'
      }].map(({
        href,
        label
      }) => <div key={label}>
            <TextBox tag="a" href={href} onClick={e => {
          e.preventDefault();
        }} desktopSize={18} mobileSize={18} fontWeight={500}>
              {label}
            </TextBox>
          </div>)}
      </>
  },
  render: args => <div style={{
    width: '100vw',
    height: '400px'
  }}>
      <NavigationTabs {...args}></NavigationTabs>
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    menuTopLeftColumn: <TextBox desktopSize={20} mobileSize={20} fontWeight={500} tag="a" href="/">
        Gym
      </TextBox>,
    menuTopRightColumn: <Grid layout="flex" justifyContent="flex-end">
        <TextBox tag="a" href="/login" desktopSize={20} mobileSize={20} fontWeight={500}>
          Login
        </TextBox>
      </Grid>,
    menuMobile: <>
        {[{
        href: '/home',
        label: 'Home'
      }, {
        href: '/login',
        label: 'Login'
      }].map(({
        href,
        label
      }) => <TextBox key={label} tag="a" href={href} desktopSize={30} mobileSize={30} fontWeight={400} onClick={e => e.preventDefault()}>
            {label}
          </TextBox>)}
      </>,
    menuOnlyTop: true
  },
  render: args => <div style={{
    width: '100vw',
    height: '400px'
  }}>
      <NavigationTabs {...args}></NavigationTabs>
    </div>
}`,...j.parameters?.docs?.source}}},M=[`Default`,`NavigationTabsOnlyTop`]}))();export{A as Default,j as NavigationTabsOnlyTop,M as __namedExportsOrder,k as default};