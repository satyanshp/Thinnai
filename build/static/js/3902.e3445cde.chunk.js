"use strict";(self.webpackChunkscaffold=self.webpackChunkscaffold||[]).push([[3902],{93902:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var o=r(1413),a=r(66934),n=r(4942),i=r(63366),l=r(87462),c=r(72791),s=r(28182),d=r(94419),u=r(12065),h=r(14036),p=r(97278),m=r(31402),f=r(75878),g=r(21217);function v(e){return(0,g.Z)("MuiSwitch",e)}var b=(0,f.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),Z=r(80184),w=["className","color","edge","size","sx"],x=(0,a.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.edge&&t["edge".concat((0,h.Z)(r.edge))],t["size".concat((0,h.Z)(r.size))]]}})((function(e){var t,r=e.ownerState;return(0,l.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===r.edge&&{marginLeft:-8},"end"===r.edge&&{marginRight:-8},"small"===r.size&&(t={width:40,height:24,padding:7},(0,n.Z)(t,"& .".concat(b.thumb),{width:16,height:16}),(0,n.Z)(t,"& .".concat(b.switchBase),(0,n.Z)({padding:4},"&.".concat(b.checked),{transform:"translateX(16px)"})),t))})),S=(0,a.ZP)(p.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var r=e.ownerState;return[t.switchBase,(0,n.Z)({},"& .".concat(b.input),t.input),"default"!==r.color&&t["color".concat((0,h.Z)(r.color))]]}})((function(e){var t,r=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:r.vars?r.vars.palette.Switch.defaultColor:"".concat("light"===r.palette.mode?r.palette.common.white:r.palette.grey[300]),transition:r.transitions.create(["left","transform"],{duration:r.transitions.duration.shortest})},(0,n.Z)(t,"&.".concat(b.checked),{transform:"translateX(20px)"}),(0,n.Z)(t,"&.".concat(b.disabled),{color:r.vars?r.vars.palette.Switch.defaultDisabledColor:"".concat("light"===r.palette.mode?r.palette.grey[100]:r.palette.grey[600])}),(0,n.Z)(t,"&.".concat(b.checked," + .").concat(b.track),{opacity:.5}),(0,n.Z)(t,"&.".concat(b.disabled," + .").concat(b.track),{opacity:r.vars?r.vars.opacity.switchTrackDisabled:"".concat("light"===r.palette.mode?.12:.2)}),(0,n.Z)(t,"& .".concat(b.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,r=e.theme,o=e.ownerState;return(0,l.Z)({"&:hover":{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.action.activeChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,u.Fq)(r.palette.action.active,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(t={},(0,n.Z)(t,"&.".concat(b.checked),(0,n.Z)({color:(r.vars||r).palette[o.color].main,"&:hover":{backgroundColor:r.vars?"rgba(".concat(r.vars.palette[o.color].mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,u.Fq)(r.palette[o.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(b.disabled),{color:r.vars?r.vars.palette.Switch["".concat(o.color,"DisabledColor")]:"".concat("light"===r.palette.mode?(0,u.$n)(r.palette[o.color].main,.62):(0,u._j)(r.palette[o.color].main,.55))})),(0,n.Z)(t,"&.".concat(b.checked," + .").concat(b.track),{backgroundColor:(r.vars||r).palette[o.color].main}),t))})),k=(0,a.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),y=(0,a.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),C=c.forwardRef((function(e,t){var r=(0,m.Z)({props:e,name:"MuiSwitch"}),o=r.className,a=r.color,n=void 0===a?"primary":a,c=r.edge,u=void 0!==c&&c,p=r.size,f=void 0===p?"medium":p,g=r.sx,b=(0,i.Z)(r,w),C=(0,l.Z)({},r,{color:n,edge:u,size:f}),R=function(e){var t=e.classes,r=e.edge,o=e.size,a=e.color,n=e.checked,i=e.disabled,c={root:["root",r&&"edge".concat((0,h.Z)(r)),"size".concat((0,h.Z)(o))],switchBase:["switchBase","color".concat((0,h.Z)(a)),n&&"checked",i&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},s=(0,d.Z)(c,v,t);return(0,l.Z)({},t,s)}(C),M=(0,Z.jsx)(y,{className:R.thumb,ownerState:C});return(0,Z.jsxs)(x,{className:(0,s.Z)(R.root,o),sx:g,ownerState:C,children:[(0,Z.jsx)(S,(0,l.Z)({type:"checkbox",icon:M,checkedIcon:M,ref:t,ownerState:C},b,{classes:(0,l.Z)({},R,{root:R.switchBase})})),(0,Z.jsx)(k,{className:R.track,ownerState:C})]})})),R=r(68870),M=r(20890),P=r(85523),j=r(94721),z=function(){var e=(0,a.ZP)((function(e){return(0,Z.jsx)(C,(0,o.Z)({focusVisibleClassName:".Mui-focusVisible",disableRipple:!0},e))}))((function(e){var t=e.theme;return{width:42,height:26,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(16px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:"dark"===t.palette.mode?"#2ECA45":"#0E0E0E",opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#33cf4d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:"light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[600]},"&.Mui-disabled + .MuiSwitch-track":{opacity:"light"===t.palette.mode?.7:.3}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:22,height:22},"& .MuiSwitch-track":{borderRadius:13,backgroundColor:"light"===t.palette.mode?"#E9E9EA":"#39393D",opacity:1,transition:t.transitions.create(["background-color"],{duration:500})}}}));return(0,Z.jsxs)(R.Z,{children:[(0,Z.jsx)(M.Z,{letterSpacing:"0.015em",fontWeight:600,fontFamily:"Montserrat",mt:"1.563rem",fontSize:"2.25rem",color:"#1A191E",children:"Activity Sharing"}),(0,Z.jsx)(M.Z,{color:"#6D6D6D",fontFamily:"Open Sans",fontSize:"1.375rem",fontWeight:400,mb:"1.25rem",children:"Decide how your profile and activity are shown to others"}),(0,Z.jsxs)(R.Z,{mt:"2.5rem",mb:"2.5rem",children:[(0,Z.jsx)(M.Z,{letterSpacing:"0.015em",fontWeight:500,fontFamily:"Montserrat",mt:"1.563rem",fontSize:"1.25rem",color:"#1A191E",children:"Include my profile & listing in search engines"}),(0,Z.jsx)(M.Z,{color:"#9E9E9E",fontFamily:"Open Sans",fontSize:"1.125rem",fontWeight:400,mb:"0.625rem",children:"Turning this on means search engines, like Google , will display your profile & listing pages in search pages"}),(0,Z.jsx)(P.Z,{sx:{mb:"1.25rem"},control:(0,Z.jsx)(e,{sx:{m:1},defaultChecked:!0}),label:""}),(0,Z.jsx)(j.Z,{})]}),(0,Z.jsx)(M.Z,{letterSpacing:"0.015em",fontWeight:600,fontFamily:"Montserrat",mt:"1.563rem",fontSize:"2.25rem",color:"#1A191E",children:"Data Sharing"}),(0,Z.jsx)(M.Z,{color:"#6D6D6D",fontFamily:"Open Sans",fontSize:"1.375rem",fontWeight:400,mb:"1.25rem",children:"Decide how your data is used for Thinnai research"}),(0,Z.jsxs)(R.Z,{mt:"2.5rem",mb:"2.5rem",children:[(0,Z.jsx)(M.Z,{letterSpacing:"0.015em",fontWeight:500,fontFamily:"Montserrat",mt:"1.563rem",fontSize:"1.25rem",color:"#1A191E",children:"Include my profile & listing in search engines"}),(0,Z.jsx)(M.Z,{color:"#9E9E9E",fontFamily:"Open Sans",fontSize:"1.125rem",fontWeight:400,mb:"0.625rem",children:"Turning this on means search engines, like Google , will display your profile & listing pages in search pages"}),(0,Z.jsx)(P.Z,{sx:{mb:"1.25rem"},control:(0,Z.jsx)(e,{sx:{m:1},defaultChecked:!0}),label:""}),(0,Z.jsx)(j.Z,{})]})]})}},94721:function(e,t,r){var o=r(63366),a=r(87462),n=r(72791),i=r(28182),l=r(94419),c=r(12065),s=r(66934),d=r(31402),u=r(90133),h=r(80184),p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],m=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,r=e.ownerState;return(0,a.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,c.Fq)(t.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.theme,r=e.ownerState;return(0,a.Z)({},r.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(e){var t=e.theme,r=e.ownerState;return(0,a.Z)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat((t.vars||t).palette.divider),transform:"translateX(0%)"}})}),(function(e){var t=e.ownerState;return(0,a.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),f=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var r=e.ownerState;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,r=e.ownerState;return(0,a.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===r.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),g=n.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiDivider"}),n=r.absolute,c=void 0!==n&&n,s=r.children,g=r.className,v=r.component,b=void 0===v?s?"div":"hr":v,Z=r.flexItem,w=void 0!==Z&&Z,x=r.light,S=void 0!==x&&x,k=r.orientation,y=void 0===k?"horizontal":k,C=r.role,R=void 0===C?"hr"!==b?"separator":void 0:C,M=r.textAlign,P=void 0===M?"center":M,j=r.variant,z=void 0===j?"fullWidth":j,F=(0,o.Z)(r,p),A=(0,a.Z)({},r,{absolute:c,component:b,flexItem:w,light:S,orientation:y,role:R,textAlign:P,variant:z}),B=function(e){var t=e.absolute,r=e.children,o=e.classes,a=e.flexItem,n=e.light,i=e.orientation,c=e.textAlign,s={root:["root",t&&"absolute",e.variant,n&&"light","vertical"===i&&"vertical",a&&"flexItem",r&&"withChildren",r&&"vertical"===i&&"withChildrenVertical","right"===c&&"vertical"!==i&&"textAlignRight","left"===c&&"vertical"!==i&&"textAlignLeft"],wrapper:["wrapper","vertical"===i&&"wrapperVertical"]};return(0,l.Z)(s,u.V,o)}(A);return(0,h.jsx)(m,(0,a.Z)({as:b,className:(0,i.Z)(B.root,g),role:R,ref:t,ownerState:A},F,{children:s?(0,h.jsx)(f,{className:B.wrapper,ownerState:A,children:s}):null}))}));t.Z=g},90133:function(e,t,r){r.d(t,{V:function(){return n}});var o=r(75878),a=r(21217);function n(e){return(0,a.Z)("MuiDivider",e)}var i=(0,o.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=i},93840:function(e,t,r){var o=r(72791).createContext(void 0);t.Z=o},76147:function(e,t,r){function o(e){var t=e.props,r=e.states,o=e.muiFormControl;return r.reduce((function(e,r){return e[r]=t[r],o&&"undefined"===typeof t[r]&&(e[r]=o[r]),e}),{})}r.d(t,{Z:function(){return o}})},52930:function(e,t,r){r.d(t,{Z:function(){return n}});var o=r(72791),a=r(93840);function n(){return o.useContext(a.Z)}},85523:function(e,t,r){r.d(t,{Z:function(){return S}});var o=r(4942),a=r(63366),n=r(87462),i=r(72791),l=r(28182),c=r(94419),s=r(52930),d=r(20890),u=r(14036),h=r(66934),p=r(31402),m=r(75878),f=r(21217);function g(e){return(0,f.Z)("MuiFormControlLabel",e)}var v=(0,m.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),b=r(76147),Z=r(80184),w=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],x=(0,h.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[(0,o.Z)({},"& .".concat(v.label),t.label),t.root,t["labelPlacement".concat((0,u.Z)(r.labelPlacement))]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,n.Z)((0,o.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(v.disabled),{cursor:"default"}),"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,o.Z)({},"& .".concat(v.label),(0,o.Z)({},"&.".concat(v.disabled),{color:(t.vars||t).palette.text.disabled})))})),S=i.forwardRef((function(e,t){var r,o=(0,p.Z)({props:e,name:"MuiFormControlLabel"}),h=o.className,m=o.componentsProps,f=void 0===m?{}:m,v=o.control,S=o.disabled,k=o.disableTypography,y=o.label,C=o.labelPlacement,R=void 0===C?"end":C,M=o.slotProps,P=void 0===M?{}:M,j=(0,a.Z)(o,w),z=(0,s.Z)(),F=S;"undefined"===typeof F&&"undefined"!==typeof v.props.disabled&&(F=v.props.disabled),"undefined"===typeof F&&z&&(F=z.disabled);var A={disabled:F};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof v.props[e]&&"undefined"!==typeof o[e]&&(A[e]=o[e])}));var B=(0,b.Z)({props:o,muiFormControl:z,states:["error"]}),D=(0,n.Z)({},o,{disabled:F,labelPlacement:R,error:B.error}),I=function(e){var t=e.classes,r=e.disabled,o=e.labelPlacement,a=e.error,n={root:["root",r&&"disabled","labelPlacement".concat((0,u.Z)(o)),a&&"error"],label:["label",r&&"disabled"]};return(0,c.Z)(n,g,t)}(D),E=null!=(r=P.typography)?r:f.typography,N=y;return null==N||N.type===d.Z||k||(N=(0,Z.jsx)(d.Z,(0,n.Z)({component:"span"},E,{className:(0,l.Z)(I.label,null==E?void 0:E.className),children:N}))),(0,Z.jsxs)(x,(0,n.Z)({className:(0,l.Z)(I.root,h),ownerState:D,ref:t},j,{children:[i.cloneElement(v,A),N]}))}))},97278:function(e,t,r){r.d(t,{Z:function(){return x}});var o=r(29439),a=r(63366),n=r(87462),i=r(72791),l=r(28182),c=r(94419),s=r(14036),d=r(66934),u=r(98278),h=r(52930),p=r(13900),m=r(75878),f=r(21217);function g(e){return(0,f.Z)("PrivateSwitchBase",e)}(0,m.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var v=r(80184),b=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=(0,d.ZP)(p.Z)((function(e){var t=e.ownerState;return(0,n.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),w=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),x=i.forwardRef((function(e,t){var r=e.autoFocus,i=e.checked,d=e.checkedIcon,p=e.className,m=e.defaultChecked,f=e.disabled,x=e.disableFocusRipple,S=void 0!==x&&x,k=e.edge,y=void 0!==k&&k,C=e.icon,R=e.id,M=e.inputProps,P=e.inputRef,j=e.name,z=e.onBlur,F=e.onChange,A=e.onFocus,B=e.readOnly,D=e.required,I=e.tabIndex,E=e.type,N=e.value,L=(0,a.Z)(e,b),W=(0,u.Z)({controlled:i,default:Boolean(m),name:"SwitchBase",state:"checked"}),T=(0,o.Z)(W,2),O=T[0],V=T[1],q=(0,h.Z)(),X=f;q&&"undefined"===typeof X&&(X=q.disabled);var G="checkbox"===E||"radio"===E,H=(0,n.Z)({},e,{checked:O,disabled:X,disableFocusRipple:S,edge:y}),Y=function(e){var t=e.classes,r=e.checked,o=e.disabled,a=e.edge,n={root:["root",r&&"checked",o&&"disabled",a&&"edge".concat((0,s.Z)(a))],input:["input"]};return(0,c.Z)(n,g,t)}(H);return(0,v.jsxs)(Z,(0,n.Z)({component:"span",className:(0,l.Z)(Y.root,p),centerRipple:!0,focusRipple:!S,disabled:X,tabIndex:null,role:void 0,onFocus:function(e){A&&A(e),q&&q.onFocus&&q.onFocus(e)},onBlur:function(e){z&&z(e),q&&q.onBlur&&q.onBlur(e)},ownerState:H,ref:t},L,{children:[(0,v.jsx)(w,(0,n.Z)({autoFocus:r,checked:i,defaultChecked:m,className:Y.input,disabled:X,id:G&&R,name:j,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;V(t),F&&F(e,t)}},readOnly:B,ref:P,required:D,ownerState:H,tabIndex:I,type:E},"checkbox"===E&&void 0===N?{}:{value:N},M)),O?d:C]}))}))},98278:function(e,t,r){var o=r(58959);t.Z=o.Z},58959:function(e,t,r){r.d(t,{Z:function(){return n}});var o=r(29439),a=r(72791);function n(e){var t=e.controlled,r=e.default,n=(e.name,e.state,a.useRef(void 0!==t).current),i=a.useState(r),l=(0,o.Z)(i,2),c=l[0],s=l[1];return[n?t:c,a.useCallback((function(e){n||s(e)}),[])]}}}]);
//# sourceMappingURL=3902.e3445cde.chunk.js.map