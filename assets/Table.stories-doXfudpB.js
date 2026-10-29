import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-DmCI5PxH.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{t as r}from"./getCssVariableStyle-B-f6QJ1n.js";import{n as i,t as a}from"./TextBox-D040vOwf.js";import{n as o,t as s}from"./Button-CWI5_3FL.js";import{n as c,t as l}from"./Input-De4yhLNW.js";import{t as u}from"./Grid-DJWR_deM.js";import{t as d}from"./Grid-sqWO7R-i.js";import{n as f,t as p}from"./Dialog-Cvomx-Z5.js";import{n as m,t as h}from"./Form-CBa3T0Ti.js";import{n as g,t as _}from"./Typography-BzF8TJPw.js";var v,y,b;function x(){return(x=e((()=>{v=`_n23mTable_xsv66_2`,y=`_table_xsv66_30`,b={n23mTable:v,table:y}})))()}var S,C,w;function T(){return(T=e((()=>{S=t(),s(),p(),h(),d(),l(),a(),_(),x(),C=n(),w=({className:e,jsonSchema:t,jsonData:n,handleCellEdit:a,handelCellDel:s,resetQueryCellEdit:l,isErrorCellEdit:d=!1,isPendingCellEdit:p=!1,isSuccessCellEdit:h=!1,errorMsgCellEdit:_,successMsgCellEdit:v,style:y,...x})=>{let[w,T]=(0,S.useState)(!1),[E,D]=(0,S.useState)(0),[O,k]=(0,S.useState)(null),A=!!a,j=t.cols.filter(e=>e.cellName!==`id`),M=e=>{a&&(Object.values(e).some(({error:e})=>e)||a(Object.fromEntries(Object.entries(e).map(([e,{value:t}])=>[e,t]))))},N=()=>{s&&(s(O),T(!1))},P=()=>{T(!1),l?.()},F=e=>{k(e),T(!0),D(e=>e+1)};return(0,C.jsxs)(`div`,{className:[b.n23mTable,`n23mTable`,e].filter(Boolean).join(` `),...x,style:{...r({}),...y},children:[A&&(0,C.jsx)(f,{open:w,onCancel:P,widthMax:`900px`,children:(0,C.jsxs)(u,{layout:`container`,widthMin:`min(800px, calc(100vw - 25px))`,padding:`0px 30px 30px 30px`,margin:`auto`,children:[(0,C.jsx)(g,{appearance:`light`,variant:`subheading`,style:{margin:`0 0 20px 0`},children:`Edit Cell`}),(0,C.jsxs)(m,{onSubmit:M,isError:d,isPending:p,isSuccess:h,errorMsg:_,successMsg:v,children:[(0,C.jsx)(u,{layout:`columns`,col:{smallDesktop:2},gap:{col:`20px`},children:O&&t.cols.map(e=>{let t=e.cellName===`id`;return(0,C.jsx)(c,{label:e.cellText,name:e.cellName,type:`text`,defaultValue:String(O[e.cellName]??``),disabled:t,placeholder:e.cellText},e.cellName)})}),(0,C.jsxs)(u,{layout:`flex`,widthMax:`100%`,padding:`0`,justifyContent:s?`space-between`:`flex-end`,alignItems:`right`,margin:`20px 0 0 0`,children:[s&&(0,C.jsx)(o,{type:`button`,height:`40px`,width:`80px`,padding:0,disabled:p,backgroundColor:`red`,backgroundColorDisabled:`grey`,onClick:N,children:(0,C.jsx)(i,{tag:`span`,desktopSize:16,mobileSize:16,fontWeight:400,color:`white`,children:`Delete`})}),(0,C.jsx)(o,{type:`submit`,height:`40px`,width:`80px`,padding:0,disabled:p,backgroundColor:`#4BB543`,backgroundColorDisabled:`grey`,children:(0,C.jsx)(i,{tag:`span`,desktopSize:16,mobileSize:16,fontWeight:400,color:`white`,children:`Save`})})]})]},E)]})}),(0,C.jsxs)(`table`,{className:b.table,children:[(0,C.jsx)(`thead`,{children:(0,C.jsx)(`tr`,{children:j.map(e=>(0,C.jsx)(`th`,{scope:`col`,children:(0,C.jsx)(i,{mobileSize:16,desktopSize:20,color:`black`,textAlign:e.thAlign??`left`,children:e.cellText})},e.cellName))})}),(0,C.jsx)(`tbody`,{children:n.rows.map(e=>(0,C.jsx)(`tr`,{children:j.map(t=>{let n=e[t.cellName];return(0,C.jsx)(`td`,{"data-clickable":A,onClick:A?()=>F(e):void 0,children:(0,C.jsx)(i,{fontWeight:400,mobileSize:16,desktopSize:16,color:`black`,textAlign:t.tdAlign??`left`,children:n===void 0?``:String(n)})},t.cellName)})},e.id))})]})]})},w.displayName=`Table`;try{w.displayName=`Table`,w.__docgenInfo={description:``,displayName:`Table`,filePath:`/Users/mnajwer/Documents/GIT/najwer23morsels/src/stories/Table/Table.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`style`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`CSSProperties`}},jsonSchema:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`jsonSchema`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!0,tags:{},type:{name:`{ cols: { cellText: string; cellName: string; thAlign?: "left" | "right" | undefined; tdAlign?: "left" | "right" | undefined; }[]; }`}},jsonData:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`jsonData`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!0,tags:{},type:{name:`{ rows: TableRow[]; }`}},handleCellEdit:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`handleCellEdit`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`((cell: Record<string, string>) => void)`}},resetQueryCellEdit:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`resetQueryCellEdit`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`(() => void)`}},handelCellDel:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`handelCellDel`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`((cell: TableRow | null) => void)`}},isErrorCellEdit:{defaultValue:{value:`false`},declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`isErrorCellEdit`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`boolean`}},isPendingCellEdit:{defaultValue:{value:`false`},declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`isPendingCellEdit`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`boolean`}},isSuccessCellEdit:{defaultValue:{value:`false`},declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`isSuccessCellEdit`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`boolean`}},errorMsgCellEdit:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`errorMsgCellEdit`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`string | null`}},successMsgCellEdit:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`successMsgCellEdit`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`string | null`}}},tags:{}}}catch{}})))()}function E(){return(E=e((()=>{T()})))()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{E(),D=n(),O={title:`Table/Table`,component:w,parameters:{layout:`centered`,docs:{description:{component:"\nAn table with columns defined in `jsonSchema.cols` and rows in `jsonData.rows`.\n\nEditing is optional. Pass `handleCellEdit` to make cells clickable and open the row editor (the `id` field is read-only); omit it for a read-only table. Pass `handelCellDel` to add a Delete button to the editor. Submission status and feedback messages are controlled through props.\n"}}},args:{handleCellEdit:e=>{console.log(`Edited row:`,e)},resetQueryCellEdit:()=>{console.log(`Reset cell edit query`)},handelCellDel:e=>{console.log(`Deleted row:`,e)},isErrorCellEdit:!1,isPendingCellEdit:!1,isSuccessCellEdit:!1,errorMsgCellEdit:void 0,successMsgCellEdit:void 0}},k=[{cellName:`id`,cellText:`ID`},{cellName:`title`,cellText:`Task`},{cellName:`owner`,cellText:`Owner`},{cellName:`hours`,cellText:`Hours`,thAlign:`right`,tdAlign:`right`}],A=[{id:1,title:`Finalize pricing page copy`,owner:`Maria Kowalska`,hours:6},{id:2,title:`Set up analytics events`,owner:`Tomasz Nowak`,hours:12},{id:3,title:`Record onboarding video`,owner:`Anna Wiśniewska`,hours:8},{id:4,title:`Fix invoice PDF layout`,owner:`Piotr Zieliński`,hours:4},{id:5,title:`Write release notes`,owner:`Maria Kowalska`,hours:3}],j={args:{jsonSchema:{cols:k},jsonData:{rows:A}}},M={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`},{cellName:`title`,cellText:`Task`},{cellName:`done`,cellText:`Completed`},{cellName:`hours`,cellText:`Hours`,thAlign:`right`,tdAlign:`right`},{cellName:`cost`,cellText:`Cost`,thAlign:`right`,tdAlign:`right`}]},jsonData:{rows:[{id:1,title:`Design`,done:!0,hours:4,cost:200},{id:2,title:`Development`,done:!1,hours:12,cost:600},{id:3,title:`Testing`,done:!0,hours:3,cost:150}]}}},N={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`},{cellName:`name`,cellText:`Name`},{cellName:`email`,cellText:`Email`},{cellName:`role`,cellText:`Role`}]},jsonData:{rows:[{id:1,name:`Anna`,email:`anna@example.com`,role:`Admin`},{id:2,name:`Piotr`,role:`Editor`},{id:3,email:`maria@example.com`,role:`Viewer`}]}}},P={args:{jsonSchema:{cols:k},jsonData:{rows:[]}}},F={args:{jsonSchema:{cols:k},jsonData:{rows:A},style:{"--table-cell-padding":`16px`,"--table-border-color":`#b8c7d9`,"--table-header-color":`#eaf1f8`}}},I={args:{jsonSchema:{cols:k},jsonData:{rows:Array.from({length:30},(e,t)=>({id:t+1,title:`Task ${t+1}`,owner:[`Anna`,`Piotr`,`Maria`,`Tomasz`][t%4],hours:(t+1)%8+1}))}}},L={decorators:[e=>(0,D.jsx)(`div`,{style:{width:`280px`},children:(0,D.jsx)(e,{})})],args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`},{cellName:`title`,cellText:`Task`},{cellName:`owner`,cellText:`Owner`},{cellName:`hours`,cellText:`Hours`},{cellName:`status`,cellText:`Status`},{cellName:`priority`,cellText:`Priority`}]},jsonData:{rows:Array.from({length:5},(e,t)=>({id:t+1,title:`Task ${t+1}`,owner:[`Anna`,`Piotr`,`Maria`,`Tomasz`,`Jan`][t],hours:t+2,status:[`Open`,`In progress`,`Done`][t%3],priority:[`High`,`Medium`,`Low`][t%3]}))}}},R={args:{jsonSchema:{cols:k},jsonData:{rows:A},handleCellEdit:void 0,resetQueryCellEdit:void 0,handelCellDel:void 0},parameters:{docs:{description:{story:"Without `handleCellEdit` the table is read-only: cells are not clickable and no edit dialog is rendered."}}}},z={args:{jsonSchema:{cols:k},jsonData:{rows:A},handelCellDel:void 0},parameters:{docs:{description:{story:"Without `handelCellDel` the edit dialog has no Delete button and Save stays aligned to the right."}}}},B=[`Default`,`NumbersAndBooleans`,`MissingCells`,`Empty`,`CustomStyle`,`ManyRows`,`Narrow`,`ReadOnly`,`EditWithoutDelete`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: [{
        cellName: 'id',
        cellText: 'ID'
      }, {
        cellName: 'title',
        cellText: 'Task'
      }, {
        cellName: 'done',
        cellText: 'Completed'
      }, {
        cellName: 'hours',
        cellText: 'Hours',
        thAlign: 'right',
        tdAlign: 'right'
      }, {
        cellName: 'cost',
        cellText: 'Cost',
        thAlign: 'right',
        tdAlign: 'right'
      }]
    },
    jsonData: {
      rows: [{
        id: 1,
        title: 'Design',
        done: true,
        hours: 4,
        cost: 200
      }, {
        id: 2,
        title: 'Development',
        done: false,
        hours: 12,
        cost: 600
      }, {
        id: 3,
        title: 'Testing',
        done: true,
        hours: 3,
        cost: 150
      }]
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: [{
        cellName: 'id',
        cellText: 'ID'
      }, {
        cellName: 'name',
        cellText: 'Name'
      }, {
        cellName: 'email',
        cellText: 'Email'
      }, {
        cellName: 'role',
        cellText: 'Role'
      }]
    },
    jsonData: {
      rows: [{
        id: 1,
        name: 'Anna',
        email: 'anna@example.com',
        role: 'Admin'
      }, {
        id: 2,
        name: 'Piotr',
        role: 'Editor'
      }, {
        id: 3,
        email: 'maria@example.com',
        role: 'Viewer'
      }]
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: []
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    },
    style: {
      '--table-cell-padding': '16px',
      '--table-border-color': '#b8c7d9',
      '--table-header-color': '#eaf1f8'
    } as React.CSSProperties
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: Array.from({
        length: 30
      }, (_, index) => ({
        id: index + 1,
        title: \`Task \${index + 1}\`,
        owner: ['Anna', 'Piotr', 'Maria', 'Tomasz'][index % 4],
        hours: (index + 1) % 8 + 1
      }))
    }
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '280px'
  }}>
        <Story />
      </div>],
  args: {
    jsonSchema: {
      cols: [{
        cellName: 'id',
        cellText: 'ID'
      }, {
        cellName: 'title',
        cellText: 'Task'
      }, {
        cellName: 'owner',
        cellText: 'Owner'
      }, {
        cellName: 'hours',
        cellText: 'Hours'
      }, {
        cellName: 'status',
        cellText: 'Status'
      }, {
        cellName: 'priority',
        cellText: 'Priority'
      }]
    },
    jsonData: {
      rows: Array.from({
        length: 5
      }, (_, index) => ({
        id: index + 1,
        title: \`Task \${index + 1}\`,
        owner: ['Anna', 'Piotr', 'Maria', 'Tomasz', 'Jan'][index],
        hours: index + 2,
        status: ['Open', 'In progress', 'Done'][index % 3],
        priority: ['High', 'Medium', 'Low'][index % 3]
      }))
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    },
    handleCellEdit: undefined,
    resetQueryCellEdit: undefined,
    handelCellDel: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Without \`handleCellEdit\` the table is read-only: cells are not clickable and no edit dialog is rendered.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    },
    handelCellDel: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Without \`handelCellDel\` the edit dialog has no Delete button and Save stays aligned to the right.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}}})))()}V();export{F as CustomStyle,j as Default,z as EditWithoutDelete,P as Empty,I as ManyRows,N as MissingCells,L as Narrow,M as NumbersAndBooleans,R as ReadOnly,B as __namedExportsOrder,O as default};