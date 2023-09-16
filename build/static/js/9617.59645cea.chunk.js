"use strict";(self.webpackChunkscaffold=self.webpackChunkscaffold||[]).push([[9617],{79617:function(n,t,e){e.d(t,{ZP:function(){return S}});var o=e(29439),r=e(87462),i=e(63366),a=e(72791),s=e(28182),u=e(94419),c=e(66934),l=e(31402),f=e(83199),d=e(98301),p=e(17602),v=e(42071),h=e(18875),m=e(13967),g=e(4999),y=e(80184),E=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Z(n){return"scale(".concat(n,", ").concat(Math.pow(n,2),")")}var P={entering:{opacity:1,transform:Z(1)},entered:{opacity:1,transform:"none"}},x="undefined"!==typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),b=a.forwardRef((function(n,t){var e=n.addEndListener,o=n.appear,s=void 0===o||o,u=n.children,c=n.easing,l=n.in,f=n.onEnter,d=n.onEntered,p=n.onEntering,b=n.onExit,T=n.onExited,C=n.onExiting,R=n.style,w=n.timeout,z=void 0===w?"auto":w,O=n.TransitionComponent,k=void 0===O?h.ZP:O,H=(0,i.Z)(n,E),M=a.useRef(),j=a.useRef(),A=(0,m.Z)(),D=a.useRef(null),L=(0,v.Z)(D,u.ref,t),N=function(n){return function(t){if(n){var e=D.current;void 0===t?n(e):n(e,t)}}},S=N(p),W=N((function(n,t){(0,g.n)(n);var e,o=(0,g.C)({style:R,timeout:z,easing:c},{mode:"enter"}),r=o.duration,i=o.delay,a=o.easing;"auto"===z?(e=A.transitions.getAutoHeightDuration(n.clientHeight),j.current=e):e=r,n.style.transition=[A.transitions.create("opacity",{duration:e,delay:i}),A.transitions.create("transform",{duration:x?e:.666*e,delay:i,easing:a})].join(","),f&&f(n,t)})),B=N(d),I=N(C),X=N((function(n){var t,e=(0,g.C)({style:R,timeout:z,easing:c},{mode:"exit"}),o=e.duration,r=e.delay,i=e.easing;"auto"===z?(t=A.transitions.getAutoHeightDuration(n.clientHeight),j.current=t):t=o,n.style.transition=[A.transitions.create("opacity",{duration:t,delay:r}),A.transitions.create("transform",{duration:x?t:.666*t,delay:x?r:r||.333*t,easing:i})].join(","),n.style.opacity=0,n.style.transform=Z(.75),b&&b(n)})),Y=N(T);return a.useEffect((function(){return function(){clearTimeout(M.current)}}),[]),(0,y.jsx)(k,(0,r.Z)({appear:s,in:l,nodeRef:D,onEnter:W,onEntered:B,onEntering:S,onExit:X,onExited:Y,onExiting:I,addEndListener:function(n){"auto"===z&&(M.current=setTimeout(n,j.current||0)),e&&e(D.current,n)},timeout:"auto"===z?null:z},H,{children:function(n,t){return a.cloneElement(u,(0,r.Z)({style:(0,r.Z)({opacity:0,transform:Z(.75),visibility:"exited"!==n||l?void 0:"hidden"},P[n],R,u.props.style),ref:L},t))}}))}));b.muiSupportAuto=!0;var T=b,C=e(20028),R=e(35527),w=e(75878),z=e(21217);function O(n){return(0,z.Z)("MuiPopover",n)}(0,w.Z)("MuiPopover",["root","paper"]);var k=["onEntering"],H=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function M(n,t){var e=0;return"number"===typeof t?e=t:"center"===t?e=n.height/2:"bottom"===t&&(e=n.height),e}function j(n,t){var e=0;return"number"===typeof t?e=t:"center"===t?e=n.width/2:"right"===t&&(e=n.width),e}function A(n){return[n.horizontal,n.vertical].map((function(n){return"number"===typeof n?"".concat(n,"px"):n})).join(" ")}function D(n){return"function"===typeof n?n():n}var L=(0,c.ZP)(C.Z,{name:"MuiPopover",slot:"Root",overridesResolver:function(n,t){return t.root}})({}),N=(0,c.ZP)(R.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:function(n,t){return t.paper}})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),S=a.forwardRef((function(n,t){var e=(0,l.Z)({props:n,name:"MuiPopover"}),c=e.action,h=e.anchorEl,m=e.anchorOrigin,g=void 0===m?{vertical:"top",horizontal:"left"}:m,E=e.anchorPosition,Z=e.anchorReference,P=void 0===Z?"anchorEl":Z,x=e.children,b=e.className,C=e.container,R=e.elevation,w=void 0===R?8:R,z=e.marginThreshold,S=void 0===z?16:z,W=e.open,B=e.PaperProps,I=void 0===B?{}:B,X=e.transformOrigin,Y=void 0===X?{vertical:"top",horizontal:"left"}:X,_=e.TransitionComponent,q=void 0===_?T:_,F=e.transitionDuration,G=void 0===F?"auto":F,J=e.TransitionProps,K=(void 0===J?{}:J).onEntering,Q=(0,i.Z)(e.TransitionProps,k),U=(0,i.Z)(e,H),V=a.useRef(),$=(0,v.Z)(V,I.ref),nn=(0,r.Z)({},e,{anchorOrigin:g,anchorReference:P,elevation:w,marginThreshold:S,PaperProps:I,transformOrigin:Y,TransitionComponent:q,transitionDuration:G,TransitionProps:Q}),tn=function(n){var t=n.classes;return(0,u.Z)({root:["root"],paper:["paper"]},O,t)}(nn),en=a.useCallback((function(){if("anchorPosition"===P)return E;var n=D(h),t=(n&&1===n.nodeType?n:(0,d.Z)(V.current).body).getBoundingClientRect();return{top:t.top+M(t,g.vertical),left:t.left+j(t,g.horizontal)}}),[h,g.horizontal,g.vertical,E,P]),on=a.useCallback((function(n){return{vertical:M(n,Y.vertical),horizontal:j(n,Y.horizontal)}}),[Y.horizontal,Y.vertical]),rn=a.useCallback((function(n){var t={width:n.offsetWidth,height:n.offsetHeight},e=on(t);if("none"===P)return{top:null,left:null,transformOrigin:A(e)};var o=en(),r=o.top-e.vertical,i=o.left-e.horizontal,a=r+t.height,s=i+t.width,u=(0,p.Z)(D(h)),c=u.innerHeight-S,l=u.innerWidth-S;if(r<S){var f=r-S;r-=f,e.vertical+=f}else if(a>c){var d=a-c;r-=d,e.vertical+=d}if(i<S){var v=i-S;i-=v,e.horizontal+=v}else if(s>l){var m=s-l;i-=m,e.horizontal+=m}return{top:"".concat(Math.round(r),"px"),left:"".concat(Math.round(i),"px"),transformOrigin:A(e)}}),[h,P,en,on,S]),an=a.useState(W),sn=(0,o.Z)(an,2),un=sn[0],cn=sn[1],ln=a.useCallback((function(){var n=V.current;if(n){var t=rn(n);null!==t.top&&(n.style.top=t.top),null!==t.left&&(n.style.left=t.left),n.style.transformOrigin=t.transformOrigin,cn(!0)}}),[rn]);a.useEffect((function(){W&&ln()})),a.useImperativeHandle(c,(function(){return W?{updatePosition:function(){ln()}}:null}),[W,ln]),a.useEffect((function(){if(W){var n=(0,f.Z)((function(){ln()})),t=(0,p.Z)(h);return t.addEventListener("resize",n),function(){n.clear(),t.removeEventListener("resize",n)}}}),[h,W,ln]);var fn=G;"auto"!==G||q.muiSupportAuto||(fn=void 0);var dn=C||(h?(0,d.Z)(D(h)).body:void 0);return(0,y.jsx)(L,(0,r.Z)({BackdropProps:{invisible:!0},className:(0,s.Z)(tn.root,b),container:dn,open:W,ref:t,ownerState:nn},U,{children:(0,y.jsx)(q,(0,r.Z)({appear:!0,in:W,onEntering:function(n,t){K&&K(n,t),ln()},onExited:function(){cn(!1)},timeout:fn},Q,{children:(0,y.jsx)(N,(0,r.Z)({elevation:w},I,{ref:$,className:(0,s.Z)(tn.paper,I.className)},un?void 0:{style:(0,r.Z)({},I.style,{opacity:0})},{ownerState:nn,children:x}))}))}))}))}}]);
//# sourceMappingURL=9617.59645cea.chunk.js.map