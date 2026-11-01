import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-DhGV0IBY.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{t as r}from"./getCssVariableStyle-B-f6QJ1n.js";import{n as i,t as a}from"./TextBox-D040vOwf.js";import{n as o,t as s}from"./Button-BIItkySG.js";import{n as c,t as l}from"./Input-Ca41g1eV.js";import{n as u,t as d}from"./Calendar-B_DHfp2W.js";import{t as f}from"./Grid-D6nt1vvz.js";import{t as p}from"./Grid-BTvUmVS-.js";import{n as m,t as h}from"./Dialog-DfrKbEqr.js";import{n as g,t as _}from"./Form-CBa3T0Ti.js";import{n as v,t as y}from"./Select-C7OdshSn.js";import{n as b,t as x}from"./Typography-Ba_zIayk.js";var S,C,w;function T(){return(T=e((()=>{S=`_n23mTable_xsv66_2`,C=`_table_xsv66_30`,w={n23mTable:S,table:C}})))()}var E,D,O;function k(){return(k=e((()=>{E=t(),s(),d(),h(),_(),p(),l(),y(),a(),x(),T(),D=n(),O=({className:e,jsonSchema:t,jsonData:n,cellEdit:a,style:s,...l})=>{let[d,p]=(0,E.useState)(!1),[h,_]=(0,E.useState)(0),[y,x]=(0,E.useState)(null),{onCellEdit:S,onCellDelete:C,onCellReset:T,isCellError:O=!1,isCellPending:k=!1,isCellSuccess:A=!1,cellErrorMsg:j,cellSuccessMsg:M}=a??{},N=!!S,P=t.cols.filter(e=>e.cellName!==`id`),F=e=>{if(!S||Object.values(e).some(({error:e})=>e))return;let t=Object.fromEntries(Object.entries(e).map(([e,{value:t}])=>[e,t]));S(t)},I=()=>{C&&y&&(C(y.id),p(!1),T?.())},L=()=>{p(!1),T?.()},R=e=>{x(e),p(!0),_(e=>e+1)};return(0,D.jsxs)(`div`,{className:[w.n23mTable,`n23mTable`,e].filter(Boolean).join(` `),...l,style:{...r({}),...s},children:[N&&(0,D.jsx)(m,{open:d,onCancel:L,widthMax:`900px`,children:(0,D.jsxs)(f,{layout:`container`,widthMin:`min(800px, calc(100vw - 25px))`,padding:`0px 30px 30px 30px`,margin:`auto`,children:[(0,D.jsx)(b,{appearance:`light`,variant:`subheading`,style:{margin:`0 0 20px 0`},children:`Edit Cell`}),(0,D.jsxs)(g,{onSubmit:F,isError:O,isPending:k,isSuccess:A,errorMsg:j,successMsg:M,children:[(0,D.jsx)(f,{layout:`columns`,col:{smallDesktop:2},gap:{col:`20px`},children:y&&t.cols.map(e=>{let t=e.cellName===`id`,n=y[e.cellName];if(e.cellType===`date`){let t=n||e.initialValue;return(0,D.jsx)(u,{label:e.cellText,name:e.cellName,initialValue:t,placeholder:e.cellText},e.cellName)}if(e.cellType===`select`){let t=e.options.find(e=>e.value===String(n??``))??e.initialValue;return(0,D.jsx)(v,{name:e.cellName,options:e.options,initialValue:t},e.cellName)}return(0,D.jsx)(c,{label:e.cellText,name:e.cellName,type:e.cellType,step:e.cellType===`number`?.01:void 0,defaultValue:String(n??``),disabled:t,placeholder:e.cellText},e.cellName)})}),(0,D.jsxs)(f,{layout:`flex`,widthMax:`100%`,padding:`0`,justifyContent:C?`space-between`:`flex-end`,alignItems:`right`,margin:`20px 0 0 0`,children:[C&&(0,D.jsx)(o,{type:`button`,height:`40px`,width:`auto`,padding:`0 10px`,disabled:k,backgroundColor:`red`,backgroundColorDisabled:`grey`,onClick:I,children:(0,D.jsx)(i,{tag:`span`,desktopSize:16,mobileSize:16,fontWeight:400,color:`white`,children:`Delete`})}),(0,D.jsx)(o,{type:`submit`,height:`40px`,width:`auto`,padding:`0 10px`,disabled:k,backgroundColor:`#4BB543`,backgroundColorDisabled:`grey`,children:(0,D.jsx)(i,{tag:`span`,desktopSize:16,mobileSize:16,fontWeight:400,color:`white`,children:`Save`})})]})]},h)]})}),(0,D.jsxs)(`table`,{className:w.table,children:[(0,D.jsx)(`thead`,{children:(0,D.jsx)(`tr`,{children:P.map(e=>(0,D.jsx)(`th`,{scope:`col`,children:(0,D.jsx)(i,{mobileSize:16,desktopSize:20,color:`black`,textAlign:e.thAlign??`left`,children:e.cellText})},e.cellName))})}),(0,D.jsx)(`tbody`,{children:n.rows.map(e=>(0,D.jsx)(`tr`,{children:P.map(t=>{let n=e[t.cellName];return(0,D.jsx)(`td`,{"data-clickable":N,onClick:N?()=>R(e):void 0,children:(0,D.jsx)(i,{fontWeight:400,mobileSize:16,desktopSize:16,color:`black`,textAlign:t.tdAlign??`left`,children:n===void 0?``:String(n)})},t.cellName)})},e.id))})]})]})},O.displayName=`Table`;try{O.displayName=`Table`,O.__docgenInfo={description:``,displayName:`Table`,filePath:`/Users/mnajwer/Documents/GIT/najwer23morsels/src/stories/Table/Table.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`style`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`CSSProperties`}},jsonSchema:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`jsonSchema`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!0,tags:{},type:{name:`{ cols: TableColumn[]; }`}},jsonData:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`jsonData`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!0,tags:{},type:{name:`{ rows: TableRow[]; }`}},cellEdit:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`cellEdit`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`TableCellEdit`}}},tags:{}}}catch{}})))()}function A(){return(A=e((()=>{k()})))()}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{A(),j=n(),M={onCellEdit:e=>{console.log(`Edited row:`,e)},onCellReset:()=>{console.log(`Reset cell edit query`)},onCellDelete:e=>{console.log(`Deleted row:`,e)},isCellError:!1,isCellPending:!1,isCellSuccess:!1,cellErrorMsg:void 0,cellSuccessMsg:void 0},N={title:`Table/Table`,component:O,parameters:{layout:`centered`,docs:{description:{component:"\nA table with columns defined in `jsonSchema.cols` and rows in `jsonData.rows`.\n\nEditing is optional and configured through a single `cellEdit` object. Pass `cellEdit.onCellEdit` to make cells clickable and open the row editor (the `id` field is read-only); omit `cellEdit` for a read-only table. Pass `cellEdit.onCellDelete` to add a Delete button to the editor. Submission status and feedback messages are controlled through `isCellError`, `isCellPending`, `isCellSuccess`, `cellErrorMsg` and `cellSuccessMsg`.\n"}}},args:{cellEdit:M}},P=[{label:`Open`,value:`Open`},{label:`In progress`,value:`In progress`},{label:`Done`,value:`Done`}],F=[{label:`High`,value:`High`},{label:`Medium`,value:`Medium`},{label:`Low`,value:`Low`}],I=[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`title`,cellText:`Task`,cellType:`text`},{cellName:`owner`,cellText:`Owner`,cellType:`text`},{cellName:`hours`,cellText:`Hours`,cellType:`number`,thAlign:`right`,tdAlign:`right`},{cellName:`dueDate`,cellText:`Due Date`,cellType:`date`,initialValue:`2026-10-30`},{cellName:`status`,cellText:`Status`,cellType:`select`,options:P,initialValue:P[0]},{cellName:`priority`,cellText:`Priority`,cellType:`select`,options:F,initialValue:F[1]}],L=[{id:1,title:`Finalize pricing page copy`,owner:`Maria Kowalska`,hours:6,dueDate:`2026-10-30`,status:`In progress`,priority:`High`},{id:2,title:`Set up analytics events`,owner:`Tomasz Nowak`,hours:12,dueDate:`2026-11-02`,status:`Open`,priority:`Medium`},{id:3,title:`Record onboarding video`,owner:`Anna Wiśniewska`,hours:8,dueDate:`2026-11-05`,status:`Done`,priority:`Low`},{id:4,title:`Fix invoice PDF layout`,owner:`Piotr Zieliński`,hours:4,dueDate:`2026-11-10`,status:`In progress`,priority:`Medium`},{id:5,title:`Write release notes`,owner:`Maria Kowalska`,hours:3,dueDate:`2026-11-12`,status:`Open`,priority:`Low`}],R={args:{jsonSchema:{cols:I},jsonData:{rows:L}}},z={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`title`,cellText:`Task`,cellType:`text`},{cellName:`done`,cellText:`Completed`,cellType:`text`},{cellName:`hours`,cellText:`Hours`,cellType:`number`,thAlign:`right`,tdAlign:`right`},{cellName:`cost`,cellText:`Cost`,cellType:`number`,thAlign:`right`,tdAlign:`right`}]},jsonData:{rows:[{id:1,title:`Design`,done:!0,hours:4,cost:200},{id:2,title:`Development`,done:!1,hours:12,cost:600},{id:3,title:`Testing`,done:!0,hours:3,cost:150}]}}},B={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`name`,cellText:`Name`,cellType:`text`},{cellName:`email`,cellText:`Email`,cellType:`text`},{cellName:`role`,cellText:`Role`,cellType:`text`}]},jsonData:{rows:[{id:1,name:`Anna`,email:`anna@example.com`,role:`Admin`},{id:2,name:`Piotr`,role:`Editor`},{id:3,email:`maria@example.com`,role:`Viewer`}]}}},V={args:{jsonSchema:{cols:I},jsonData:{rows:[]}}},H={args:{jsonSchema:{cols:I},jsonData:{rows:L},style:{"--table-cell-padding":`16px`,"--table-border-color":`#b8c7d9`,"--table-header-color":`#eaf1f8`}}},U={args:{jsonSchema:{cols:I},jsonData:{rows:Array.from({length:30},(e,t)=>({id:t+1,title:`Task ${t+1}`,owner:[`Anna`,`Piotr`,`Maria`,`Tomasz`][t%4],hours:(t+1)%8+1,dueDate:`2026-11-${String(t%28+1).padStart(2,`0`)}`,status:P[t%P.length].value,priority:F[t%F.length].value}))}}},W={decorators:[e=>(0,j.jsx)(`div`,{style:{width:`280px`},children:(0,j.jsx)(e,{})})],args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`title`,cellText:`Task`,cellType:`text`},{cellName:`owner`,cellText:`Owner`,cellType:`text`},{cellName:`hours`,cellText:`Hours`,cellType:`number`},{cellName:`status`,cellText:`Status`,cellType:`select`,options:P,initialValue:P[0]},{cellName:`priority`,cellText:`Priority`,cellType:`select`,options:F,initialValue:F[1]}]},jsonData:{rows:Array.from({length:5},(e,t)=>({id:t+1,title:`Task ${t+1}`,owner:[`Anna`,`Piotr`,`Maria`,`Tomasz`,`Jan`][t],hours:t+2,status:P[t%P.length].value,priority:F[t%F.length].value}))}}},G={args:{jsonSchema:{cols:I},jsonData:{rows:L},cellEdit:void 0},parameters:{docs:{description:{story:"Without `cellEdit` the table is read-only: cells are not clickable and no edit dialog is rendered."}}}},K={args:{jsonSchema:{cols:I},jsonData:{rows:L},cellEdit:{...M,onCellDelete:void 0}},parameters:{docs:{description:{story:"Without `cellEdit.onCellDelete` the edit dialog has no Delete button and Save stays aligned to the right."}}}},q={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`title`,cellText:`Task`,cellType:`text`},{cellName:`owner`,cellText:`Owner`,cellType:`text`}]},jsonData:{rows:[{id:1,title:`Design`,owner:`Anna`},{id:2,title:`Development`,owner:`Piotr`}]}},parameters:{docs:{description:{story:'Only `text` columns. Click a cell: every field renders as `type="text"`, prefilled from the row, and `id` is disabled.'}}}},J={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`hours`,cellText:`Hours`,cellType:`number`,thAlign:`right`,tdAlign:`right`},{cellName:`cost`,cellText:`Cost`,cellType:`number`,thAlign:`right`,tdAlign:`right`}]},jsonData:{rows:[{id:1,hours:4,cost:200.5},{id:2,hours:12,cost:600},{id:3,hours:0,cost:0}]}},parameters:{docs:{description:{story:'Only `number` columns. Click a cell: fields render as `type="number"` (up/down arrows, letters are rejected). The `0` row should show `0`, not an empty input.'}}}},Y=[`Default`,`NumbersAndBooleans`,`MissingCells`,`Empty`,`CustomStyle`,`ManyRows`,`Narrow`,`ReadOnly`,`EditWithoutDelete`,`TextInputs`,`NumberInputs`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: [{
        cellName: 'id',
        cellText: 'ID',
        cellType: 'text'
      }, {
        cellName: 'title',
        cellText: 'Task',
        cellType: 'text'
      }, {
        cellName: 'done',
        cellText: 'Completed',
        cellType: 'text'
      }, {
        cellName: 'hours',
        cellText: 'Hours',
        cellType: 'number',
        thAlign: 'right',
        tdAlign: 'right'
      }, {
        cellName: 'cost',
        cellText: 'Cost',
        cellType: 'number',
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: [{
        cellName: 'id',
        cellText: 'ID',
        cellType: 'text'
      }, {
        cellName: 'name',
        cellText: 'Name',
        cellType: 'text'
      }, {
        cellName: 'email',
        cellText: 'Email',
        cellType: 'text'
      }, {
        cellName: 'role',
        cellText: 'Role',
        cellType: 'text'
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: []
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
        hours: (index + 1) % 8 + 1,
        dueDate: \`2026-11-\${String(index % 28 + 1).padStart(2, '0')}\`,
        status: statusOptions[index % statusOptions.length].value,
        priority: priorityOptions[index % priorityOptions.length].value
      }))
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '280px'
  }}>
        <Story />
      </div>],
  args: {
    jsonSchema: {
      cols: [{
        cellName: 'id',
        cellText: 'ID',
        cellType: 'text'
      }, {
        cellName: 'title',
        cellText: 'Task',
        cellType: 'text'
      }, {
        cellName: 'owner',
        cellText: 'Owner',
        cellType: 'text'
      }, {
        cellName: 'hours',
        cellText: 'Hours',
        cellType: 'number'
      }, {
        cellName: 'status',
        cellText: 'Status',
        cellType: 'select',
        options: statusOptions,
        initialValue: statusOptions[0]
      }, {
        cellName: 'priority',
        cellText: 'Priority',
        cellType: 'select',
        options: priorityOptions,
        initialValue: priorityOptions[1]
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
        status: statusOptions[index % statusOptions.length].value,
        priority: priorityOptions[index % priorityOptions.length].value
      }))
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    },
    cellEdit: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Without \`cellEdit\` the table is read-only: cells are not clickable and no edit dialog is rendered.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    },
    cellEdit: {
      ...defaultCellEdit,
      onCellDelete: undefined
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Without \`cellEdit.onCellDelete\` the edit dialog has no Delete button and Save stays aligned to the right.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: [{
        cellName: 'id',
        cellText: 'ID',
        cellType: 'text'
      }, {
        cellName: 'title',
        cellText: 'Task',
        cellType: 'text'
      }, {
        cellName: 'owner',
        cellText: 'Owner',
        cellType: 'text'
      }]
    },
    jsonData: {
      rows: [{
        id: 1,
        title: 'Design',
        owner: 'Anna'
      }, {
        id: 2,
        title: 'Development',
        owner: 'Piotr'
      }]
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Only \`text\` columns. Click a cell: every field renders as \`type="text"\`, prefilled from the row, and \`id\` is disabled.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: [{
        cellName: 'id',
        cellText: 'ID',
        cellType: 'text'
      }, {
        cellName: 'hours',
        cellText: 'Hours',
        cellType: 'number',
        thAlign: 'right',
        tdAlign: 'right'
      }, {
        cellName: 'cost',
        cellText: 'Cost',
        cellType: 'number',
        thAlign: 'right',
        tdAlign: 'right'
      }]
    },
    jsonData: {
      rows: [{
        id: 1,
        hours: 4,
        cost: 200.5
      }, {
        id: 2,
        hours: 12,
        cost: 600
      }, {
        id: 3,
        hours: 0,
        cost: 0
      }]
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Only \`number\` columns. Click a cell: fields render as \`type="number"\` (up/down arrows, letters are rejected). The \`0\` row should show \`0\`, not an empty input.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}}})))()}X();export{H as CustomStyle,R as Default,K as EditWithoutDelete,V as Empty,U as ManyRows,B as MissingCells,W as Narrow,J as NumberInputs,z as NumbersAndBooleans,G as ReadOnly,q as TextInputs,Y as __namedExportsOrder,N as default};