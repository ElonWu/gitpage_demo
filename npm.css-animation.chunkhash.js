(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{181:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},o={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},a=[],r=[];function s(n,t,i){n.addEventListener(t,i,!1)}function m(n,t,i){n.removeEventListener(t,i,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var n=document.createElement("div").style;function t(t,i){for(var e in t)if(t.hasOwnProperty(e)){var o=t[e];for(var a in o)if(a in n){i.push(o[a]);break}}}"AnimationEvent"in window||(delete e.animationstart.animation,delete o.animationend.animation),"TransitionEvent"in window||(delete e.transitionstart.transition,delete o.transitionend.transition),t(e,a),t(o,r)}();var d={startEvents:a,addStartEventListener:function(n,t){0!==a.length?a.forEach(function(i){s(n,i,t)}):window.setTimeout(t,0)},removeStartEventListener:function(n,t){0!==a.length&&a.forEach(function(i){m(n,i,t)})},endEvents:r,addEndEventListener:function(n,t){0!==r.length?r.forEach(function(i){s(n,i,t)}):window.setTimeout(t,0)},removeEndEventListener:function(n,t){0!==r.length&&r.forEach(function(i){m(n,i,t)})}};t.default=d,n.exports=t.default},248:function(n,t,i){"use strict";var e=i(45),o=i.n(e),a={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},r={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},s=[],m=[];function d(n,t,i){n.addEventListener(t,i,!1)}function c(n,t,i){n.removeEventListener(t,i,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var n=document.createElement("div").style;function t(t,i){for(var e in t)if(t.hasOwnProperty(e)){var o=t[e];for(var a in o)if(a in n){i.push(o[a]);break}}}"AnimationEvent"in window||(delete a.animationstart.animation,delete r.animationend.animation),"TransitionEvent"in window||(delete a.transitionstart.transition,delete r.transitionend.transition),t(a,s),t(r,m)}();var u={startEvents:s,addStartEventListener:function(n,t){0!==s.length?s.forEach(function(i){d(n,i,t)}):window.setTimeout(t,0)},removeStartEventListener:function(n,t){0!==s.length&&s.forEach(function(i){c(n,i,t)})},endEvents:m,addEndEventListener:function(n,t){0!==m.length?m.forEach(function(i){d(n,i,t)}):window.setTimeout(t,0)},removeEndEventListener:function(n,t){0!==m.length&&m.forEach(function(i){c(n,i,t)})}},E=i(221),f=i.n(E);i.d(t,"b",function(){return v});var v=0!==u.endEvents.length,T=["Webkit","Moz","O","ms"],l=["-webkit-","-moz-","-o-","ms-",""];function A(n,t){for(var i=window.getComputedStyle(n,null),e="",o=0;o<l.length&&!(e=i.getPropertyValue(l[o]+t));o++);return e}function w(n){if(v){var t=parseFloat(A(n,"transition-delay"))||0,i=parseFloat(A(n,"transition-duration"))||0,e=parseFloat(A(n,"animation-delay"))||0,o=parseFloat(A(n,"animation-duration"))||0,a=Math.max(i+t,o+e);n.rcEndAnimTimeout=setTimeout(function(){n.rcEndAnimTimeout=null,n.rcEndListener&&n.rcEndListener()},1e3*a+200)}}function L(n){n.rcEndAnimTimeout&&(clearTimeout(n.rcEndAnimTimeout),n.rcEndAnimTimeout=null)}var S=function(n,t,i){var e="object"===(void 0===t?"undefined":o()(t)),a=e?t.name:t,r=e?t.active:t+"-active",s=i,m=void 0,d=void 0,c=f()(n);return i&&"[object Object]"===Object.prototype.toString.call(i)&&(s=i.end,m=i.start,d=i.active),n.rcEndListener&&n.rcEndListener(),n.rcEndListener=function(t){t&&t.target!==n||(n.rcAnimTimeout&&(clearTimeout(n.rcAnimTimeout),n.rcAnimTimeout=null),L(n),c.remove(a),c.remove(r),u.removeEndEventListener(n,n.rcEndListener),n.rcEndListener=null,s&&s())},u.addEndEventListener(n,n.rcEndListener),m&&m(),c.add(a),n.rcAnimTimeout=setTimeout(function(){n.rcAnimTimeout=null,c.add(r),d&&setTimeout(d,0),w(n)},30),{stop:function(){n.rcEndListener&&n.rcEndListener()}}};S.style=function(n,t,i){n.rcEndListener&&n.rcEndListener(),n.rcEndListener=function(t){t&&t.target!==n||(n.rcAnimTimeout&&(clearTimeout(n.rcAnimTimeout),n.rcAnimTimeout=null),L(n),u.removeEndEventListener(n,n.rcEndListener),n.rcEndListener=null,i&&i())},u.addEndEventListener(n,n.rcEndListener),n.rcAnimTimeout=setTimeout(function(){for(var i in t)t.hasOwnProperty(i)&&(n.style[i]=t[i]);n.rcAnimTimeout=null,w(n)},0)},S.setTransition=function(n,t,i){var e=t,o=i;void 0===i&&(o=e,e=""),e=e||"",T.forEach(function(t){n.style[t+"Transition"+e]=o})},S.isCssAnimationSupported=v;t.a=S}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWFuaW1hdGlvbi9saWIvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1hbmltYXRpb24vZXMvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1hbmltYXRpb24vZXMvaW5kZXguanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJTVEFSVF9FVkVOVF9OQU1FX01BUCIsInRyYW5zaXRpb25zdGFydCIsInRyYW5zaXRpb24iLCJXZWJraXRUcmFuc2l0aW9uIiwiTW96VHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwibXNUcmFuc2l0aW9uIiwiYW5pbWF0aW9uc3RhcnQiLCJhbmltYXRpb24iLCJXZWJraXRBbmltYXRpb24iLCJNb3pBbmltYXRpb24iLCJPQW5pbWF0aW9uIiwibXNBbmltYXRpb24iLCJFTkRfRVZFTlRfTkFNRV9NQVAiLCJ0cmFuc2l0aW9uZW5kIiwiYW5pbWF0aW9uZW5kIiwic3RhcnRFdmVudHMiLCJlbmRFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwibm9kZSIsImV2ZW50TmFtZSIsImV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwid2luZG93IiwiZG9jdW1lbnQiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJwcm9jZXNzIiwiRVZFTlRfTkFNRV9NQVAiLCJldmVudHMiLCJiYXNlRXZlbnROYW1lIiwiaGFzT3duUHJvcGVydHkiLCJiYXNlRXZlbnRzIiwic3R5bGVOYW1lIiwicHVzaCIsImRldGVjdEV2ZW50cyIsIlRyYW5zaXRpb25FdmVudHMiLCJhZGRTdGFydEV2ZW50TGlzdGVuZXIiLCJsZW5ndGgiLCJmb3JFYWNoIiwic3RhcnRFdmVudCIsInNldFRpbWVvdXQiLCJyZW1vdmVTdGFydEV2ZW50TGlzdGVuZXIiLCJhZGRFbmRFdmVudExpc3RlbmVyIiwiZW5kRXZlbnQiLCJyZW1vdmVFbmRFdmVudExpc3RlbmVyIiwibW9kdWxlIiwiRXZlbnQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZCIsIl9fd2VicGFja19leHBvcnRzX18iLCJpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCIsImNhcGl0YWxQcmVmaXhlcyIsInByZWZpeGVzIiwiZ2V0U3R5bGVQcm9wZXJ0eSIsIm5hbWUiLCJnZXRDb21wdXRlZFN0eWxlIiwicmV0IiwiaSIsImdldFByb3BlcnR5VmFsdWUiLCJmaXhCcm93c2VyQnlUaW1lb3V0IiwidHJhbnNpdGlvbkRlbGF5IiwicGFyc2VGbG9hdCIsInRyYW5zaXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbkRlbGF5IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJ0aW1lIiwiTWF0aCIsIm1heCIsInJjRW5kQW5pbVRpbWVvdXQiLCJyY0VuZExpc3RlbmVyIiwiY2xlYXJCcm93c2VyQnVnVGltZW91dCIsImNsZWFyVGltZW91dCIsImVzX2Nzc0FuaW1hdGlvbiIsInRyYW5zaXRpb25OYW1lIiwiZW5kQ2FsbGJhY2siLCJuYW1lSXNPYmoiLCJ0eXBlb2ZfZGVmYXVsdCIsImNsYXNzTmFtZSIsImFjdGl2ZUNsYXNzTmFtZSIsImFjdGl2ZSIsImVuZCIsInN0YXJ0Iiwibm9kZUNsYXNzZXMiLCJjb21wb25lbnRfY2xhc3Nlc19kZWZhdWx0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiZSIsInRhcmdldCIsInJjQW5pbVRpbWVvdXQiLCJyZW1vdmUiLCJhZGQiLCJzdG9wIiwiY2FsbGJhY2siLCJzIiwic2V0VHJhbnNpdGlvbiIsInAiLCJwcm9wZXJ0eSIsInYiLCJ1bmRlZmluZWQiLCJwcmVmaXgiXSwibWFwcGluZ3MiOiIwRkFFQUEsT0FBQUMsZUFBQUMsRUFBQSxjQUNBQyxPQUFBLElBRUEsSUFBQUMsRUFBQSxDQUNBQyxnQkFBQSxDQUNBQyxXQUFBLGtCQUNBQyxpQkFBQSx3QkFDQUMsY0FBQSxxQkFDQUMsWUFBQSxtQkFDQUMsYUFBQSxxQkFH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QUFBNEUsRUFBQSxhQUFBSCxHQUFBQyxLQUlBMUIsRUFBWXRCLDBCQUlHRCxFQUFBIiwiZmlsZSI6Im5wbS5jc3MtYW5pbWF0aW9uLmNodW5raGFzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBTVEFSVF9FVkVOVF9OQU1FX01BUCA9IHtcbiAgdHJhbnNpdGlvbnN0YXJ0OiB7XG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25zdGFydCcsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25TdGFydCcsXG4gICAgTW96VHJhbnNpdGlvbjogJ21velRyYW5zaXRpb25TdGFydCcsXG4gICAgT1RyYW5zaXRpb246ICdvVHJhbnNpdGlvblN0YXJ0JyxcbiAgICBtc1RyYW5zaXRpb246ICdNU1RyYW5zaXRpb25TdGFydCdcbiAgfSxcblxuICBhbmltYXRpb25zdGFydDoge1xuICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICBXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25TdGFydCcsXG4gICAgTW96QW5pbWF0aW9uOiAnbW96QW5pbWF0aW9uU3RhcnQnLFxuICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uU3RhcnQnLFxuICAgIG1zQW5pbWF0aW9uOiAnTVNBbmltYXRpb25TdGFydCdcbiAgfVxufTtcblxudmFyIEVORF9FVkVOVF9OQU1FX01BUCA9IHtcbiAgdHJhbnNpdGlvbmVuZDoge1xuICAgIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcbiAgICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgTW96VHJhbnNpdGlvbjogJ21velRyYW5zaXRpb25FbmQnLFxuICAgIE9UcmFuc2l0aW9uOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgIG1zVHJhbnNpdGlvbjogJ01TVHJhbnNpdGlvbkVuZCdcbiAgfSxcblxuICBhbmltYXRpb25lbmQ6IHtcbiAgICBhbmltYXRpb246ICdhbmltYXRpb25lbmQnLFxuICAgIFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgTW96QW5pbWF0aW9uOiAnbW96QW5pbWF0aW9uRW5kJyxcbiAgICBPQW5pbWF0aW9uOiAnb0FuaW1hdGlvbkVuZCcsXG4gICAgbXNBbmltYXRpb246ICdNU0FuaW1hdGlvbkVuZCdcbiAgfVxufTtcblxudmFyIHN0YXJ0RXZlbnRzID0gW107XG52YXIgZW5kRXZlbnRzID0gW107XG5cbmZ1bmN0aW9uIGRldGVjdEV2ZW50cygpIHtcbiAgdmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YXIgc3R5bGUgPSB0ZXN0RWwuc3R5bGU7XG5cbiAgaWYgKCEoJ0FuaW1hdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIFNUQVJUX0VWRU5UX05BTUVfTUFQLmFuaW1hdGlvbnN0YXJ0LmFuaW1hdGlvbjtcbiAgICBkZWxldGUgRU5EX0VWRU5UX05BTUVfTUFQLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XG4gIH1cblxuICBpZiAoISgnVHJhbnNpdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIFNUQVJUX0VWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25zdGFydC50cmFuc2l0aW9uO1xuICAgIGRlbGV0ZSBFTkRfRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2VzcyhFVkVOVF9OQU1FX01BUCwgZXZlbnRzKSB7XG4gICAgZm9yICh2YXIgYmFzZUV2ZW50TmFtZSBpbiBFVkVOVF9OQU1FX01BUCkge1xuICAgICAgaWYgKEVWRU5UX05BTUVfTUFQLmhhc093blByb3BlcnR5KGJhc2VFdmVudE5hbWUpKSB7XG4gICAgICAgIHZhciBiYXNlRXZlbnRzID0gRVZFTlRfTkFNRV9NQVBbYmFzZUV2ZW50TmFtZV07XG4gICAgICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiBiYXNlRXZlbnRzKSB7XG4gICAgICAgICAgaWYgKHN0eWxlTmFtZSBpbiBzdHlsZSkge1xuICAgICAgICAgICAgZXZlbnRzLnB1c2goYmFzZUV2ZW50c1tzdHlsZU5hbWVdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3MoU1RBUlRfRVZFTlRfTkFNRV9NQVAsIHN0YXJ0RXZlbnRzKTtcbiAgcHJvY2VzcyhFTkRfRVZFTlRfTkFNRV9NQVAsIGVuZEV2ZW50cyk7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIGRldGVjdEV2ZW50cygpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxudmFyIFRyYW5zaXRpb25FdmVudHMgPSB7XG4gIC8vIFN0YXJ0IGV2ZW50c1xuICBzdGFydEV2ZW50czogc3RhcnRFdmVudHMsXG5cbiAgYWRkU3RhcnRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRTdGFydEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChzdGFydEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGV2ZW50TGlzdGVuZXIsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdGFydEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzdGFydEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIHN0YXJ0RXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9LFxuICByZW1vdmVTdGFydEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZVN0YXJ0RXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKHN0YXJ0RXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdGFydEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzdGFydEV2ZW50KSB7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIHN0YXJ0RXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9LFxuXG5cbiAgLy8gRW5kIGV2ZW50c1xuICBlbmRFdmVudHM6IGVuZEV2ZW50cyxcblxuICBhZGRFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRyYW5zaXRpb25FdmVudHM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJ2YXIgU1RBUlRfRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25zdGFydDoge1xuICAgIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uc3RhcnQnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uU3RhcnQnLFxuICAgIE1velRyYW5zaXRpb246ICdtb3pUcmFuc2l0aW9uU3RhcnQnLFxuICAgIE9UcmFuc2l0aW9uOiAnb1RyYW5zaXRpb25TdGFydCcsXG4gICAgbXNUcmFuc2l0aW9uOiAnTVNUcmFuc2l0aW9uU3RhcnQnXG4gIH0sXG5cbiAgYW5pbWF0aW9uc3RhcnQ6IHtcbiAgICBhbmltYXRpb246ICdhbmltYXRpb25zdGFydCcsXG4gICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uU3RhcnQnLFxuICAgIE1vekFuaW1hdGlvbjogJ21vekFuaW1hdGlvblN0YXJ0JyxcbiAgICBPQW5pbWF0aW9uOiAnb0FuaW1hdGlvblN0YXJ0JyxcbiAgICBtc0FuaW1hdGlvbjogJ01TQW5pbWF0aW9uU3RhcnQnXG4gIH1cbn07XG5cbnZhciBFTkRfRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25lbmQ6IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIE1velRyYW5zaXRpb246ICdtb3pUcmFuc2l0aW9uRW5kJyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICBtc1RyYW5zaXRpb246ICdNU1RyYW5zaXRpb25FbmQnXG4gIH0sXG5cbiAgYW5pbWF0aW9uZW5kOiB7XG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJyxcbiAgICBXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgIE1vekFuaW1hdGlvbjogJ21vekFuaW1hdGlvbkVuZCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQnLFxuICAgIG1zQW5pbWF0aW9uOiAnTVNBbmltYXRpb25FbmQnXG4gIH1cbn07XG5cbnZhciBzdGFydEV2ZW50cyA9IFtdO1xudmFyIGVuZEV2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBkZXRlY3RFdmVudHMoKSB7XG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHN0eWxlID0gdGVzdEVsLnN0eWxlO1xuXG4gIGlmICghKCdBbmltYXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuICAgIGRlbGV0ZSBTVEFSVF9FVkVOVF9OQU1FX01BUC5hbmltYXRpb25zdGFydC5hbmltYXRpb247XG4gICAgZGVsZXRlIEVORF9FVkVOVF9OQU1FX01BUC5hbmltYXRpb25lbmQuYW5pbWF0aW9uO1xuICB9XG5cbiAgaWYgKCEoJ1RyYW5zaXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuICAgIGRlbGV0ZSBTVEFSVF9FVkVOVF9OQU1FX01BUC50cmFuc2l0aW9uc3RhcnQudHJhbnNpdGlvbjtcbiAgICBkZWxldGUgRU5EX0VWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3MoRVZFTlRfTkFNRV9NQVAsIGV2ZW50cykge1xuICAgIGZvciAodmFyIGJhc2VFdmVudE5hbWUgaW4gRVZFTlRfTkFNRV9NQVApIHtcbiAgICAgIGlmIChFVkVOVF9OQU1FX01BUC5oYXNPd25Qcm9wZXJ0eShiYXNlRXZlbnROYW1lKSkge1xuICAgICAgICB2YXIgYmFzZUV2ZW50cyA9IEVWRU5UX05BTUVfTUFQW2Jhc2VFdmVudE5hbWVdO1xuICAgICAgICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gYmFzZUV2ZW50cykge1xuICAgICAgICAgIGlmIChzdHlsZU5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgICAgIGV2ZW50cy5wdXNoKGJhc2VFdmVudHNbc3R5bGVOYW1lXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm9jZXNzKFNUQVJUX0VWRU5UX05BTUVfTUFQLCBzdGFydEV2ZW50cyk7XG4gIHByb2Nlc3MoRU5EX0VWRU5UX05BTUVfTUFQLCBlbmRFdmVudHMpO1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBkZXRlY3RFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbnZhciBUcmFuc2l0aW9uRXZlbnRzID0ge1xuICAvLyBTdGFydCBldmVudHNcbiAgc3RhcnRFdmVudHM6IHN0YXJ0RXZlbnRzLFxuXG4gIGFkZFN0YXJ0RXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkU3RhcnRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoc3RhcnRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhcnRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc3RhcnRFdmVudCkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBzdGFydEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlU3RhcnRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVTdGFydEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChzdGFydEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhcnRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc3RhcnRFdmVudCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBzdGFydEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcblxuXG4gIC8vIEVuZCBldmVudHNcbiAgZW5kRXZlbnRzOiBlbmRFdmVudHMsXG5cbiAgYWRkRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGV2ZW50TGlzdGVuZXIsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9LFxuICByZW1vdmVFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9uRXZlbnRzOyIsImltcG9ydCBfdHlwZW9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnY29tcG9uZW50LWNsYXNzZXMnO1xuXG52YXIgaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgPSBFdmVudC5lbmRFdmVudHMubGVuZ3RoICE9PSAwO1xudmFyIGNhcGl0YWxQcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJyxcbi8vIG1zIGlzIHNwZWNpYWwgLi4uLiAhXG4nbXMnXTtcbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnLW8tJywgJ21zLScsICcnXTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCBuYW1lKSB7XG4gIC8vIG9sZCBmZiBuZWVkIG51bGwsIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvZ2V0Q29tcHV0ZWRTdHlsZVxuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKTtcbiAgdmFyIHJldCA9ICcnO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmV0ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcmVmaXhlc1tpXSArIG5hbWUpO1xuICAgIGlmIChyZXQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBmaXhCcm93c2VyQnlUaW1lb3V0KG5vZGUpIHtcbiAgaWYgKGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkKSB7XG4gICAgdmFyIHRyYW5zaXRpb25EZWxheSA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAndHJhbnNpdGlvbi1kZWxheScpKSB8fCAwO1xuICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ3RyYW5zaXRpb24tZHVyYXRpb24nKSkgfHwgMDtcbiAgICB2YXIgYW5pbWF0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ2FuaW1hdGlvbi1kZWxheScpKSB8fCAwO1xuICAgIHZhciBhbmltYXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAnYW5pbWF0aW9uLWR1cmF0aW9uJykpIHx8IDA7XG4gICAgdmFyIHRpbWUgPSBNYXRoLm1heCh0cmFuc2l0aW9uRHVyYXRpb24gKyB0cmFuc2l0aW9uRGVsYXksIGFuaW1hdGlvbkR1cmF0aW9uICsgYW5pbWF0aW9uRGVsYXkpO1xuICAgIC8vIHNvbWV0aW1lcywgYnJvd3NlciBidWdcbiAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUucmNFbmRBbmltVGltZW91dCA9IG51bGw7XG4gICAgICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH0sIHRpbWUgKiAxMDAwICsgMjAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckJyb3dzZXJCdWdUaW1lb3V0KG5vZGUpIHtcbiAgaWYgKG5vZGUucmNFbmRBbmltVGltZW91dCkge1xuICAgIGNsZWFyVGltZW91dChub2RlLnJjRW5kQW5pbVRpbWVvdXQpO1xuICAgIG5vZGUucmNFbmRBbmltVGltZW91dCA9IG51bGw7XG4gIH1cbn1cblxudmFyIGNzc0FuaW1hdGlvbiA9IGZ1bmN0aW9uIGNzc0FuaW1hdGlvbihub2RlLCB0cmFuc2l0aW9uTmFtZSwgZW5kQ2FsbGJhY2spIHtcbiAgdmFyIG5hbWVJc09iaiA9ICh0eXBlb2YgdHJhbnNpdGlvbk5hbWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRyYW5zaXRpb25OYW1lKSkgPT09ICdvYmplY3QnO1xuICB2YXIgY2xhc3NOYW1lID0gbmFtZUlzT2JqID8gdHJhbnNpdGlvbk5hbWUubmFtZSA6IHRyYW5zaXRpb25OYW1lO1xuICB2YXIgYWN0aXZlQ2xhc3NOYW1lID0gbmFtZUlzT2JqID8gdHJhbnNpdGlvbk5hbWUuYWN0aXZlIDogdHJhbnNpdGlvbk5hbWUgKyAnLWFjdGl2ZSc7XG4gIHZhciBlbmQgPSBlbmRDYWxsYmFjaztcbiAgdmFyIHN0YXJ0ID0gdm9pZCAwO1xuICB2YXIgYWN0aXZlID0gdm9pZCAwO1xuICB2YXIgbm9kZUNsYXNzZXMgPSBjbGFzc2VzKG5vZGUpO1xuXG4gIGlmIChlbmRDYWxsYmFjayAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZW5kQ2FsbGJhY2spID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIGVuZCA9IGVuZENhbGxiYWNrLmVuZDtcbiAgICBzdGFydCA9IGVuZENhbGxiYWNrLnN0YXJ0O1xuICAgIGFjdGl2ZSA9IGVuZENhbGxiYWNrLmFjdGl2ZTtcbiAgfVxuXG4gIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgfVxuXG4gIG5vZGUucmNFbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUgJiYgZS50YXJnZXQgIT09IG5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5yY0FuaW1UaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQobm9kZS5yY0FuaW1UaW1lb3V0KTtcbiAgICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgY2xlYXJCcm93c2VyQnVnVGltZW91dChub2RlKTtcblxuICAgIG5vZGVDbGFzc2VzLnJlbW92ZShjbGFzc05hbWUpO1xuICAgIG5vZGVDbGFzc2VzLnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xuXG4gICAgRXZlbnQucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lciA9IG51bGw7XG5cbiAgICAvLyBVc3VhbGx5IHRoaXMgb3B0aW9uYWwgZW5kIGlzIHVzZWQgZm9yIGluZm9ybWluZyBhbiBvd25lciBvZlxuICAgIC8vIGEgbGVhdmUgYW5pbWF0aW9uIGFuZCB0ZWxsaW5nIGl0IHRvIHJlbW92ZSB0aGUgY2hpbGQuXG4gICAgaWYgKGVuZCkge1xuICAgICAgZW5kKCk7XG4gICAgfVxuICB9O1xuXG4gIEV2ZW50LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcblxuICBpZiAoc3RhcnQpIHtcbiAgICBzdGFydCgpO1xuICB9XG4gIG5vZGVDbGFzc2VzLmFkZChjbGFzc05hbWUpO1xuXG4gIG5vZGUucmNBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgbm9kZUNsYXNzZXMuYWRkKGFjdGl2ZUNsYXNzTmFtZSk7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgc2V0VGltZW91dChhY3RpdmUsIDApO1xuICAgIH1cbiAgICBmaXhCcm93c2VyQnlUaW1lb3V0KG5vZGUpO1xuICAgIC8vIDMwbXMgZm9yIGZpcmVmb3hcbiAgfSwgMzApO1xuXG4gIHJldHVybiB7XG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuY3NzQW5pbWF0aW9uLnN0eWxlID0gZnVuY3Rpb24gKG5vZGUsIHN0eWxlLCBjYWxsYmFjaykge1xuICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gIH1cblxuICBub2RlLnJjRW5kTGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucmNBbmltVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KG5vZGUucmNBbmltVGltZW91dCk7XG4gICAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGNsZWFyQnJvd3NlckJ1Z1RpbWVvdXQobm9kZSk7XG5cbiAgICBFdmVudC5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyID0gbnVsbDtcblxuICAgIC8vIFVzdWFsbHkgdGhpcyBvcHRpb25hbCBjYWxsYmFjayBpcyB1c2VkIGZvciBpbmZvcm1pbmcgYW4gb3duZXIgb2ZcbiAgICAvLyBhIGxlYXZlIGFuaW1hdGlvbiBhbmQgdGVsbGluZyBpdCB0byByZW1vdmUgdGhlIGNoaWxkLlxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH07XG5cbiAgRXZlbnQuYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuXG4gIG5vZGUucmNBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgaW4gc3R5bGUpIHtcbiAgICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShzKSkge1xuICAgICAgICBub2RlLnN0eWxlW3NdID0gc3R5bGVbc107XG4gICAgICB9XG4gICAgfVxuICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgZml4QnJvd3NlckJ5VGltZW91dChub2RlKTtcbiAgfSwgMCk7XG59O1xuXG5jc3NBbmltYXRpb24uc2V0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChub2RlLCBwLCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHkgPSBwO1xuICB2YXIgdiA9IHZhbHVlO1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHYgPSBwcm9wZXJ0eTtcbiAgICBwcm9wZXJ0eSA9ICcnO1xuICB9XG4gIHByb3BlcnR5ID0gcHJvcGVydHkgfHwgJyc7XG4gIGNhcGl0YWxQcmVmaXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICBub2RlLnN0eWxlW3ByZWZpeCArICdUcmFuc2l0aW9uJyArIHByb3BlcnR5XSA9IHY7XG4gIH0pO1xufTtcblxuY3NzQW5pbWF0aW9uLmlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkID0gaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQ7XG5cbmV4cG9ydCB7IGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNzc0FuaW1hdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9