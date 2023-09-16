"use strict";(self.webpackChunkscaffold=self.webpackChunkscaffold||[]).push([[2433],{93385:function(r,o,t){var e=t(64836);o.Z=void 0;var a=e(t(45649)),n=t(80184),i=(0,a.default)((0,n.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");o.Z=i},98008:function(r,o,t){var e=t(64836);o.Z=void 0;var a=e(t(45649)),n=t(80184),i=(0,a.default)((0,n.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");o.Z=i},84395:function(r,o,t){t.d(o,{Z:function(){return Z}});var e=t(63366),a=t(87462),n=t(72791),i=t(28182),l=t(94419),s=t(66934),c=t(31402),u=t(14036),p=t(35527),d=t(75878),v=t(21217);function f(r){return(0,v.Z)("MuiAppBar",r)}(0,d.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var g=t(80184),m=["className","color","enableColorOnDark","position"],b=function(r,o){return"".concat(null==r?void 0:r.replace(")",""),", ").concat(o,")")},h=(0,s.ZP)(p.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(r,o){var t=r.ownerState;return[o.root,o["position".concat((0,u.Z)(t.position))],o["color".concat((0,u.Z)(t.color))]]}})((function(r){var o=r.theme,t=r.ownerState,e="light"===o.palette.mode?o.palette.grey[100]:o.palette.grey[900];return(0,a.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},!o.vars&&(0,a.Z)({},"default"===t.color&&{backgroundColor:e,color:o.palette.getContrastText(e)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:o.palette[t.color].main,color:o.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===o.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,a.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===o.palette.mode&&{backgroundImage:"none"})),o.vars&&(0,a.Z)({},"default"===t.color&&{"--AppBar-background":t.enableColorOnDark?o.vars.palette.AppBar.defaultBg:b(o.vars.palette.AppBar.darkBg,o.vars.palette.AppBar.defaultBg),"--AppBar-color":t.enableColorOnDark?o.vars.palette.text.primary:b(o.vars.palette.AppBar.darkColor,o.vars.palette.text.primary)},t.color&&!t.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":t.enableColorOnDark?o.vars.palette[t.color].main:b(o.vars.palette.AppBar.darkBg,o.vars.palette[t.color].main),"--AppBar-color":t.enableColorOnDark?o.vars.palette[t.color].contrastText:b(o.vars.palette.AppBar.darkColor,o.vars.palette[t.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===t.color?"inherit":"var(--AppBar-color)"},"transparent"===t.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),Z=n.forwardRef((function(r,o){var t=(0,c.Z)({props:r,name:"MuiAppBar"}),n=t.className,s=t.color,p=void 0===s?"primary":s,d=t.enableColorOnDark,v=void 0!==d&&d,b=t.position,Z=void 0===b?"fixed":b,k=(0,e.Z)(t,m),x=(0,a.Z)({},t,{color:p,position:Z,enableColorOnDark:v}),A=function(r){var o=r.color,t=r.position,e=r.classes,a={root:["root","color".concat((0,u.Z)(o)),"position".concat((0,u.Z)(t))]};return(0,l.Z)(a,f,e)}(x);return(0,g.jsx)(h,(0,a.Z)({square:!0,component:"header",ownerState:x,elevation:4,className:(0,i.Z)(A.root,n,"fixed"===Z&&"mui-fixed"),ref:o},k))}))},93044:function(r,o,t){t.d(o,{Z:function(){return x}});var e=t(29439),a=t(63366),n=t(87462),i=t(72791),l=t(28182),s=t(94419),c=t(66934),u=t(31402),p=t(76189),d=t(80184),v=(0,p.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),f=t(75878),g=t(21217);function m(r){return(0,g.Z)("MuiAvatar",r)}(0,f.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var b=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],h=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(r,o){var t=r.ownerState;return[o.root,o[t.variant],t.colorDefault&&o.colorDefault]}})((function(r){var o=r.theme,t=r.ownerState;return(0,n.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(o.vars||o).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,n.Z)({color:(o.vars||o).palette.background.default},o.vars?{backgroundColor:o.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===o.palette.mode?o.palette.grey[400]:o.palette.grey[600]}))})),Z=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(r,o){return o.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),k=(0,c.ZP)(v,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(r,o){return o.fallback}})({width:"75%",height:"75%"});var x=i.forwardRef((function(r,o){var t=(0,u.Z)({props:r,name:"MuiAvatar"}),c=t.alt,p=t.children,v=t.className,f=t.component,g=void 0===f?"div":f,x=t.imgProps,A=t.sizes,S=t.src,w=t.srcSet,y=t.variant,B=void 0===y?"circular":y,C=(0,a.Z)(t,b),R=null,M=function(r){var o=r.crossOrigin,t=r.referrerPolicy,a=r.src,n=r.srcSet,l=i.useState(!1),s=(0,e.Z)(l,2),c=s[0],u=s[1];return i.useEffect((function(){if(a||n){u(!1);var r=!0,e=new Image;return e.onload=function(){r&&u("loaded")},e.onerror=function(){r&&u("error")},e.crossOrigin=o,e.referrerPolicy=t,e.src=a,n&&(e.srcset=n),function(){r=!1}}}),[o,t,a,n]),c}((0,n.Z)({},x,{src:S,srcSet:w})),z=S||w,D=z&&"error"!==M,I=(0,n.Z)({},t,{colorDefault:!D,component:g,variant:B}),N=function(r){var o=r.classes,t={root:["root",r.variant,r.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(t,m,o)}(I);return R=D?(0,d.jsx)(Z,(0,n.Z)({alt:c,src:S,srcSet:w,sizes:A,ownerState:I,className:N.img},x)):null!=p?p:z&&c?c[0]:(0,d.jsx)(k,{className:N.fallback}),(0,d.jsx)(h,(0,n.Z)({as:g,ownerState:I,className:(0,l.Z)(N.root,v),ref:o},C,{children:R}))}))},34663:function(r,o,t){t.d(o,{Z:function(){return b}});var e=t(4942),a=t(63366),n=t(87462),i=t(72791),l=t(28182),s=t(94419),c=t(31402),u=t(66934),p=t(75878),d=t(21217);function v(r){return(0,d.Z)("MuiToolbar",r)}(0,p.Z)("MuiToolbar",["root","gutters","regular","dense"]);var f=t(80184),g=["className","component","disableGutters","variant"],m=(0,u.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(r,o){var t=r.ownerState;return[o.root,!t.disableGutters&&o.gutters,o[t.variant]]}})((function(r){var o=r.theme,t=r.ownerState;return(0,n.Z)({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&(0,e.Z)({paddingLeft:o.spacing(2),paddingRight:o.spacing(2)},o.breakpoints.up("sm"),{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}),"dense"===t.variant&&{minHeight:48})}),(function(r){var o=r.theme;return"regular"===r.ownerState.variant&&o.mixins.toolbar})),b=i.forwardRef((function(r,o){var t=(0,c.Z)({props:r,name:"MuiToolbar"}),e=t.className,i=t.component,u=void 0===i?"div":i,p=t.disableGutters,d=void 0!==p&&p,b=t.variant,h=void 0===b?"regular":b,Z=(0,a.Z)(t,g),k=(0,n.Z)({},t,{component:u,disableGutters:d,variant:h}),x=function(r){var o=r.classes,t={root:["root",!r.disableGutters&&"gutters",r.variant]};return(0,s.Z)(t,v,o)}(k);return(0,f.jsx)(m,(0,n.Z)({as:u,className:(0,l.Z)(x.root,e),ref:o,ownerState:k},Z))}))}}]);
//# sourceMappingURL=2433.cc763c0b.chunk.js.map