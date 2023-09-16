"use strict";(self.webpackChunkscaffold=self.webpackChunkscaffold||[]).push([[5208],{35527:function(t,n,e){e.d(n,{Z:function(){return m}});var o=e(63366),i=e(87462),a=e(72791),r=e(28182),s=e(94419),u=e(12065),l=e(66934),p=function(t){return((t<1?5.11916*Math.pow(t,2):4.5*Math.log(t+1)+2)/100).toFixed(2)},c=e(31402),d=e(75878),v=e(21217);function f(t){return(0,v.Z)("MuiPaper",t)}(0,d.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var h=e(80184),E=["className","component","elevation","square","variant"],x=(0,l.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(t,n){var e=t.ownerState;return[n.root,n[e.variant],!e.square&&n.rounded,"elevation"===e.variant&&n["elevation".concat(e.elevation)]]}})((function(t){var n,e=t.theme,o=t.ownerState;return(0,i.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!o.square&&{borderRadius:e.shape.borderRadius},"outlined"===o.variant&&{border:"1px solid ".concat((e.vars||e).palette.divider)},"elevation"===o.variant&&(0,i.Z)({boxShadow:(e.vars||e).shadows[o.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,u.Fq)("#fff",p(o.elevation)),", ").concat((0,u.Fq)("#fff",p(o.elevation)),")")},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[o.elevation]}))})),m=a.forwardRef((function(t,n){var e=(0,c.Z)({props:t,name:"MuiPaper"}),a=e.className,u=e.component,l=void 0===u?"div":u,p=e.elevation,d=void 0===p?1:p,v=e.square,m=void 0!==v&&v,b=e.variant,g=void 0===b?"elevation":b,k=(0,o.Z)(e,E),S=(0,i.Z)({},e,{component:l,elevation:d,square:m,variant:g}),C=function(t){var n=t.square,e=t.elevation,o=t.variant,i=t.classes,a={root:["root",o,!n&&"rounded","elevation"===o&&"elevation".concat(e)]};return(0,s.Z)(a,f,i)}(S);return(0,h.jsx)(x,(0,i.Z)({as:l,ownerState:S,className:(0,r.Z)(C.root,a),ref:n},k))}))},4999:function(t,n,e){e.d(n,{C:function(){return i},n:function(){return o}});var o=function(t){return t.scrollTop};function i(t,n){var e,o,i=t.timeout,a=t.easing,r=t.style,s=void 0===r?{}:r;return{duration:null!=(e=s.transitionDuration)?e:"number"===typeof i?i:i[n.mode]||0,easing:null!=(o=s.transitionTimingFunction)?o:"object"===typeof a?a[n.mode]:a,delay:s.transitionDelay}}},18875:function(t,n,e){e.d(n,{ZP:function(){return x}});var o=e(63366),i=e(94578),a=e(72791),r=e(54164),s=!1,u=e(95545),l=e(88852),p="unmounted",c="exited",d="entering",v="entered",f="exiting",h=function(t){function n(n,e){var o;o=t.call(this,n,e)||this;var i,a=e&&!e.isMounting?n.enter:n.appear;return o.appearStatus=null,n.in?a?(i=c,o.appearStatus=d):i=v:i=n.unmountOnExit||n.mountOnEnter?p:c,o.state={status:i},o.nextCallback=null,o}(0,i.Z)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===p?{status:c}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==d&&e!==v&&(n=d):e!==d&&e!==v||(n=f)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,o=this.props.timeout;return t=n=e=o,null!=o&&"number"!==typeof o&&(t=o.exit,n=o.enter,e=void 0!==o.appear?o.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){if(void 0===t&&(t=!1),null!==n)if(this.cancelNextCallback(),n===d){if(this.props.unmountOnExit||this.props.mountOnEnter){var e=this.props.nodeRef?this.props.nodeRef.current:r.findDOMNode(this);e&&(0,l.Q)(e)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:p})},e.performEnter=function(t){var n=this,e=this.props.enter,o=this.context?this.context.isMounting:t,i=this.props.nodeRef?[o]:[r.findDOMNode(this),o],a=i[0],u=i[1],l=this.getTimeouts(),p=o?l.appear:l.enter;!t&&!e||s?this.safeSetState({status:v},(function(){n.props.onEntered(a)})):(this.props.onEnter(a,u),this.safeSetState({status:d},(function(){n.props.onEntering(a,u),n.onTransitionEnd(p,(function(){n.safeSetState({status:v},(function(){n.props.onEntered(a,u)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),o=this.props.nodeRef?void 0:r.findDOMNode(this);n&&!s?(this.props.onExit(o),this.safeSetState({status:f},(function(){t.props.onExiting(o),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:c},(function(){t.props.onExited(o)}))}))}))):this.safeSetState({status:c},(function(){t.props.onExited(o)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(o){e&&(e=!1,n.nextCallback=null,t(o))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:r.findDOMNode(this),o=null==t&&!this.props.addEndListener;if(e&&!o){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],a=i[0],s=i[1];this.props.addEndListener(a,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===p)return null;var n=this.props,e=n.children,i=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,o.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(u.Z.Provider,{value:null},"function"===typeof e?e(t,i):a.cloneElement(a.Children.only(e),i))},n}(a.Component);function E(){}h.contextType=u.Z,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:E,onEntering:E,onEntered:E,onExit:E,onExiting:E,onExited:E},h.UNMOUNTED=p,h.EXITED=c,h.ENTERING=d,h.ENTERED=v,h.EXITING=f;var x=h},88852:function(t,n,e){e.d(n,{Q:function(){return o}});var o=function(t){return t.scrollTop}}}]);
//# sourceMappingURL=5208.4f5076e6.chunk.js.map