(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{363:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o,n){function a(t){var n=new r.default(t);o.call(e,n)}if(e.addEventListener){var i=(c=!1,"object"==typeof n?c=n.capture||!1:"boolean"==typeof n&&(c=n),e.addEventListener(t,a,n||!1),{v:{remove:function(){e.removeEventListener(t,a,c)}}});if("object"==typeof i)return i.v}else if(e.attachEvent)return e.attachEvent("on"+t,a),{remove:function(){e.detachEvent("on"+t,a)}};var c};var n,a=o(364),r=(n=a)&&n.__esModule?n:{default:n};e.exports=t.default},364:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(o(365)),r=n(o(123)),i=!0,c=!1,l=["altKey","bubbles","cancelable","ctrlKey","currentTarget","eventPhase","metaKey","shiftKey","target","timeStamp","view","type"];function u(e){return null==e}var s=[{reg:/^key/,props:["char","charCode","key","keyCode","which"],fix:function(e,t){u(e.which)&&(e.which=u(t.charCode)?t.keyCode:t.charCode),void 0===e.metaKey&&(e.metaKey=e.ctrlKey)}},{reg:/^touch/,props:["touches","changedTouches","targetTouches"]},{reg:/^hashchange$/,props:["newURL","oldURL"]},{reg:/^gesturechange$/i,props:["rotation","scale"]},{reg:/^(mousewheel|DOMMouseScroll)$/,props:[],fix:function(e,t){var o=void 0,n=void 0,a=void 0,r=t.wheelDelta,i=t.axis,c=t.wheelDeltaY,l=t.wheelDeltaX,u=t.detail;r&&(a=r/120),u&&(a=0-(u%3==0?u/3:u)),void 0!==i&&(i===e.HORIZONTAL_AXIS?(n=0,o=0-a):i===e.VERTICAL_AXIS&&(o=0,n=a)),void 0!==c&&(n=c/120),void 0!==l&&(o=-1*l/120),o||n||(n=a),void 0!==o&&(e.deltaX=o),void 0!==n&&(e.deltaY=n),void 0!==a&&(e.delta=a)}},{reg:/^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,props:["buttons","clientX","clientY","button","offsetX","relatedTarget","which","fromElement","toElement","offsetY","pageX","pageY","screenX","screenY"],fix:function(e,t){var o=void 0,n=void 0,a=void 0,r=e.target,i=t.button;return r&&u(e.pageX)&&!u(t.clientX)&&(n=(o=r.ownerDocument||document).documentElement,a=o.body,e.pageX=t.clientX+(n&&n.scrollLeft||a&&a.scrollLeft||0)-(n&&n.clientLeft||a&&a.clientLeft||0),e.pageY=t.clientY+(n&&n.scrollTop||a&&a.scrollTop||0)-(n&&n.clientTop||a&&a.clientTop||0)),e.which||void 0===i||(e.which=1&i?1:2&i?3:4&i?2:0),!e.relatedTarget&&e.fromElement&&(e.relatedTarget=e.fromElement===r?e.toElement:e.fromElement),e}}];function p(){return i}function f(){return c}function d(e){var t=e.type,o="function"==typeof e.stopPropagation||"boolean"==typeof e.cancelBubble;a.default.call(this),this.nativeEvent=e;var n=f;"defaultPrevented"in e?n=e.defaultPrevented?p:f:"getPreventDefault"in e?n=e.getPreventDefault()?p:f:"returnValue"in e&&(n=e.returnValue===c?p:f),this.isDefaultPrevented=n;var r=[],i=void 0,u=void 0,d=l.concat();for(s.forEach(function(e){t.match(e.reg)&&(d=d.concat(e.props),e.fix&&r.push(e.fix))}),i=d.length;i;)this[u=d[--i]]=e[u];for(!this.target&&o&&(this.target=e.srcElement||document),this.target&&3===this.target.nodeType&&(this.target=this.target.parentNode),i=r.length;i;)(0,r[--i])(this,e);this.timeStamp=e.timeStamp||Date.now()}var v=a.default.prototype;(0,r.default)(d.prototype,v,{constructor:d,preventDefault:function(){var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=c,v.preventDefault.call(this)},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=i,v.stopPropagation.call(this)}}),t.default=d,e.exports=t.default},365:function(e,t,o){"use strict";function n(){return!1}function a(){return!0}function r(){this.timeStamp=Date.now(),this.target=void 0,this.currentTarget=void 0}Object.defineProperty(t,"__esModule",{value:!0}),r.prototype={isEventObject:1,constructor:r,isDefaultPrevented:n,isPropagationStopped:n,isImmediatePropagationStopped:n,preventDefault:function(){this.isDefaultPrevented=a},stopPropagation:function(){this.isPropagationStopped=a},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=a,this.stopPropagation()},halt:function(e){e?this.stopImmediatePropagation():this.stopPropagation(),this.preventDefault()}},t.default=r,e.exports=t.default}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FkZC1kb20tZXZlbnQtbGlzdGVuZXIvbGliL0V2ZW50T2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hZGQtZG9tLWV2ZW50LWxpc3RlbmVyL2xpYi9FdmVudEJhc2VPYmplY3QuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJ0YXJnZXQiLCJldmVudFR5cGUiLCJjYWxsYmFjayIsIm9wdGlvbiIsIndyYXBDYWxsYmFjayIsImUiLCJuZSIsIl9FdmVudE9iamVjdDIiLCJjYWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9yZXQiLCJ1c2VDYXB0dXJlIiwiY2FwdHVyZSIsInYiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJkZXRhY2hFdmVudCIsIm9iaiIsIl9FdmVudE9iamVjdCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIm1vZHVsZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfRXZlbnRCYXNlT2JqZWN0MiIsIl9vYmplY3RBc3NpZ24yIiwiVFJVRSIsIkZBTFNFIiwiY29tbW9uUHJvcHMiLCJpc051bGxPclVuZGVmaW5lZCIsInciLCJldmVudE5vcm1hbGl6ZXJzIiwicmVnIiwicHJvcHMiLCJmaXgiLCJldmVudCIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJjaGFyQ29kZSIsImtleUNvZGUiLCJ1bmRlZmluZWQiLCJtZXRhS2V5IiwiY3RybEtleSIsImRlbHRhWCIsImRlbHRhWSIsImRlbHRhIiwid2hlZWxEZWx0YSIsImF4aXMiLCJ3aGVlbERlbHRhWSIsIndoZWVsRGVsdGFYIiwiZGV0YWlsIiwiSE9SSVpPTlRBTF9BWElTIiwiVkVSVElDQUxfQVhJUyIsImV2ZW50RG9jIiwiZG9jIiwiYm9keSIsImJ1dHRvbiIsInBhZ2VYIiwiY2xpZW50WCIsIm93bmVyRG9jdW1lbnQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbExlZnQiLCJjbGllbnRMZWZ0IiwicGFnZVkiLCJjbGllbnRZIiwic2Nyb2xsVG9wIiwiY2xpZW50VG9wIiwicmVsYXRlZFRhcmdldCIsImZyb21FbGVtZW50IiwidG9FbGVtZW50IiwicmV0VHJ1ZSIsInJldEZhbHNlIiwiRG9tRXZlbnRPYmplY3QiLCJ0eXBlIiwiaXNOYXRpdmUiLCJzdG9wUHJvcGFnYXRpb24iLCJjYW5jZWxCdWJibGUiLCJ0aGlzIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsImdldFByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJmaXhGbnMiLCJsIiwicHJvcCIsImNvbmNhdCIsImZvckVhY2giLCJub3JtYWxpemVyIiwibWF0Y2giLCJwdXNoIiwibGVuZ3RoIiwic3JjRWxlbWVudCIsIm5vZGVUeXBlIiwicGFyZW50Tm9kZSIsImZpeEZuIiwidGltZVN0YW1wIiwiRGF0ZSIsIm5vdyIsIkV2ZW50QmFzZU9iamVjdFByb3RvIiwicHJvdG90eXBlIiwiY29uc3RydWN0b3IiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVybkZhbHNlIiwicmV0dXJuVHJ1ZSIsIkV2ZW50QmFzZU9iamVjdCIsImN1cnJlbnRUYXJnZXQiLCJpc0V2ZW50T2JqZWN0IiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImhhbHQiLCJpbW1lZGlhdGUiXSwibWFwcGluZ3MiOiIwRkFFQUEsT0FBQUMsZUFBQUMsRUFBQSxjQUNBQyxPQUFBLElBRUFELEVBQUEsUUFRQSxTQUFBRSxFQUFBQyxFQUFBQyxFQUFBQyxHQUNBLFNBQUFDLEVBQUFDLEdBQ0EsSUFBQUMsRUFB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K0IsOEJBQUFMLEVBR0ExQixLQUFBRixtQkFHQW1DLEtBQUEsU0FBQUMsR0FDQUEsRUFDQWxDLEtBQUFnQywyQkFFQWhDLEtBQUFGLGtCQUVBRSxLQUFBd0IsbUJBSUF6RyxFQUFBLFFBQUE0RyxFQUNBbkYsRUFBQXpCLFVBQUEiLCJmaWxlIjoibnBtLmFkZC1kb20tZXZlbnQtbGlzdGVuZXIuY2h1bmtoYXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGFkZEV2ZW50TGlzdGVuZXI7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9FdmVudE9iamVjdCA9IHJlcXVpcmUoJy4vRXZlbnRPYmplY3QnKTtcblxudmFyIF9FdmVudE9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FdmVudE9iamVjdCk7XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIodGFyZ2V0LCBldmVudFR5cGUsIGNhbGxiYWNrLCBvcHRpb24pIHtcbiAgZnVuY3Rpb24gd3JhcENhbGxiYWNrKGUpIHtcbiAgICB2YXIgbmUgPSBuZXcgX0V2ZW50T2JqZWN0MlsnZGVmYXVsdCddKGUpO1xuICAgIGNhbGxiYWNrLmNhbGwodGFyZ2V0LCBuZSk7XG4gIH1cblxuICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB2YXIgX3JldCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdXNlQ2FwdHVyZSA9IGZhbHNlO1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHVzZUNhcHR1cmUgPSBvcHRpb24uY2FwdHVyZSB8fCBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHVzZUNhcHR1cmUgPSBvcHRpb247XG4gICAgICB9XG5cbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgd3JhcENhbGxiYWNrLCBvcHRpb24gfHwgZmFsc2UpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2OiB7XG4gICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHdyYXBDYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBpZiAodHlwZW9mIF9yZXQgPT09ICdvYmplY3QnKSByZXR1cm4gX3JldC52O1xuICB9IGVsc2UgaWYgKHRhcmdldC5hdHRhY2hFdmVudCkge1xuICAgIHRhcmdldC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2spO1xuICAgIHJldHVybiB7XG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgdGFyZ2V0LmRldGFjaEV2ZW50KCdvbicgKyBldmVudFR5cGUsIHdyYXBDYWxsYmFjayk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKipcbiAqIEBpZ25vcmVcbiAqIGV2ZW50IG9iamVjdCBmb3IgZG9tXG4gKiBAYXV0aG9yIHlpbWluZ2hlQGdtYWlsLmNvbVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9FdmVudEJhc2VPYmplY3QgPSByZXF1aXJlKCcuL0V2ZW50QmFzZU9iamVjdCcpO1xuXG52YXIgX0V2ZW50QmFzZU9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FdmVudEJhc2VPYmplY3QpO1xuXG52YXIgX29iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIF9vYmplY3RBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0QXNzaWduKTtcblxudmFyIFRSVUUgPSB0cnVlO1xudmFyIEZBTFNFID0gZmFsc2U7XG52YXIgY29tbW9uUHJvcHMgPSBbJ2FsdEtleScsICdidWJibGVzJywgJ2NhbmNlbGFibGUnLCAnY3RybEtleScsICdjdXJyZW50VGFyZ2V0JywgJ2V2ZW50UGhhc2UnLCAnbWV0YUtleScsICdzaGlmdEtleScsICd0YXJnZXQnLCAndGltZVN0YW1wJywgJ3ZpZXcnLCAndHlwZSddO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZCh3KSB7XG4gIHJldHVybiB3ID09PSBudWxsIHx8IHcgPT09IHVuZGVmaW5lZDtcbn1cblxudmFyIGV2ZW50Tm9ybWFsaXplcnMgPSBbe1xuICByZWc6IC9ea2V5LyxcbiAgcHJvcHM6IFsnY2hhcicsICdjaGFyQ29kZScsICdrZXknLCAna2V5Q29kZScsICd3aGljaCddLFxuICBmaXg6IGZ1bmN0aW9uIGZpeChldmVudCwgbmF0aXZlRXZlbnQpIHtcbiAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoZXZlbnQud2hpY2gpKSB7XG4gICAgICBldmVudC53aGljaCA9ICFpc051bGxPclVuZGVmaW5lZChuYXRpdmVFdmVudC5jaGFyQ29kZSkgPyBuYXRpdmVFdmVudC5jaGFyQ29kZSA6IG5hdGl2ZUV2ZW50LmtleUNvZGU7XG4gICAgfVxuXG4gICAgLy8gYWRkIG1ldGFLZXkgdG8gbm9uLU1hYyBicm93c2VycyAodXNlIGN0cmwgZm9yIFBDICdzIGFuZCBNZXRhIGZvciBNYWNzKVxuICAgIGlmIChldmVudC5tZXRhS2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGV2ZW50Lm1ldGFLZXkgPSBldmVudC5jdHJsS2V5O1xuICAgIH1cbiAgfVxufSwge1xuICByZWc6IC9edG91Y2gvLFxuICBwcm9wczogWyd0b3VjaGVzJywgJ2NoYW5nZWRUb3VjaGVzJywgJ3RhcmdldFRvdWNoZXMnXVxufSwge1xuICByZWc6IC9eaGFzaGNoYW5nZSQvLFxuICBwcm9wczogWyduZXdVUkwnLCAnb2xkVVJMJ11cbn0sIHtcbiAgcmVnOiAvXmdlc3R1cmVjaGFuZ2UkL2ksXG4gIHByb3BzOiBbJ3JvdGF0aW9uJywgJ3NjYWxlJ11cbn0sIHtcbiAgcmVnOiAvXihtb3VzZXdoZWVsfERPTU1vdXNlU2Nyb2xsKSQvLFxuICBwcm9wczogW10sXG4gIGZpeDogZnVuY3Rpb24gZml4KGV2ZW50LCBuYXRpdmVFdmVudCkge1xuICAgIHZhciBkZWx0YVggPSB1bmRlZmluZWQ7XG4gICAgdmFyIGRlbHRhWSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgZGVsdGEgPSB1bmRlZmluZWQ7XG4gICAgdmFyIHdoZWVsRGVsdGEgPSBuYXRpdmVFdmVudC53aGVlbERlbHRhO1xuICAgIHZhciBheGlzID0gbmF0aXZlRXZlbnQuYXhpcztcbiAgICB2YXIgd2hlZWxEZWx0YVkgPSBuYXRpdmVFdmVudC53aGVlbERlbHRhWTtcbiAgICB2YXIgd2hlZWxEZWx0YVggPSBuYXRpdmVFdmVudC53aGVlbERlbHRhWDtcbiAgICB2YXIgZGV0YWlsID0gbmF0aXZlRXZlbnQuZGV0YWlsO1xuXG4gICAgLy8gaWUvd2Via2l0XG4gICAgaWYgKHdoZWVsRGVsdGEpIHtcbiAgICAgIGRlbHRhID0gd2hlZWxEZWx0YSAvIDEyMDtcbiAgICB9XG5cbiAgICAvLyBnZWNrb1xuICAgIGlmIChkZXRhaWwpIHtcbiAgICAgIC8vIHByZXNzIGNvbnRyb2wgZS5kZXRhaWwgPT0gMSBlbHNlIGUuZGV0YWlsID09IDNcbiAgICAgIGRlbHRhID0gMCAtIChkZXRhaWwgJSAzID09PSAwID8gZGV0YWlsIC8gMyA6IGRldGFpbCk7XG4gICAgfVxuXG4gICAgLy8gR2Vja29cbiAgICBpZiAoYXhpcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoYXhpcyA9PT0gZXZlbnQuSE9SSVpPTlRBTF9BWElTKSB7XG4gICAgICAgIGRlbHRhWSA9IDA7XG4gICAgICAgIGRlbHRhWCA9IDAgLSBkZWx0YTtcbiAgICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gZXZlbnQuVkVSVElDQUxfQVhJUykge1xuICAgICAgICBkZWx0YVggPSAwO1xuICAgICAgICBkZWx0YVkgPSBkZWx0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXZWJraXRcbiAgICBpZiAod2hlZWxEZWx0YVkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVsdGFZID0gd2hlZWxEZWx0YVkgLyAxMjA7XG4gICAgfVxuICAgIGlmICh3aGVlbERlbHRhWCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWx0YVggPSAtMSAqIHdoZWVsRGVsdGFYIC8gMTIwO1xuICAgIH1cblxuICAgIC8vIOm7mOiupCBkZWx0YVkgKGllKVxuICAgIGlmICghZGVsdGFYICYmICFkZWx0YVkpIHtcbiAgICAgIGRlbHRhWSA9IGRlbHRhO1xuICAgIH1cblxuICAgIGlmIChkZWx0YVggIT09IHVuZGVmaW5lZCkge1xuICAgICAgLyoqXG4gICAgICAgKiBkZWx0YVggb2YgbW91c2V3aGVlbCBldmVudFxuICAgICAgICogQHByb3BlcnR5IGRlbHRhWFxuICAgICAgICogQG1lbWJlciBFdmVudC5Eb21FdmVudC5PYmplY3RcbiAgICAgICAqL1xuICAgICAgZXZlbnQuZGVsdGFYID0gZGVsdGFYO1xuICAgIH1cblxuICAgIGlmIChkZWx0YVkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLyoqXG4gICAgICAgKiBkZWx0YVkgb2YgbW91c2V3aGVlbCBldmVudFxuICAgICAgICogQHByb3BlcnR5IGRlbHRhWVxuICAgICAgICogQG1lbWJlciBFdmVudC5Eb21FdmVudC5PYmplY3RcbiAgICAgICAqL1xuICAgICAgZXZlbnQuZGVsdGFZID0gZGVsdGFZO1xuICAgIH1cblxuICAgIGlmIChkZWx0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvKipcbiAgICAgICAqIGRlbHRhIG9mIG1vdXNld2hlZWwgZXZlbnRcbiAgICAgICAqIEBwcm9wZXJ0eSBkZWx0YVxuICAgICAgICogQG1lbWJlciBFdmVudC5Eb21FdmVudC5PYmplY3RcbiAgICAgICAqL1xuICAgICAgZXZlbnQuZGVsdGEgPSBkZWx0YTtcbiAgICB9XG4gIH1cbn0sIHtcbiAgcmVnOiAvXm1vdXNlfGNvbnRleHRtZW51fGNsaWNrfG1zcG9pbnRlcnwoXkRPTU1vdXNlU2Nyb2xsJCkvaSxcbiAgcHJvcHM6IFsnYnV0dG9ucycsICdjbGllbnRYJywgJ2NsaWVudFknLCAnYnV0dG9uJywgJ29mZnNldFgnLCAncmVsYXRlZFRhcmdldCcsICd3aGljaCcsICdmcm9tRWxlbWVudCcsICd0b0VsZW1lbnQnLCAnb2Zmc2V0WScsICdwYWdlWCcsICdwYWdlWScsICdzY3JlZW5YJywgJ3NjcmVlblknXSxcbiAgZml4OiBmdW5jdGlvbiBmaXgoZXZlbnQsIG5hdGl2ZUV2ZW50KSB7XG4gICAgdmFyIGV2ZW50RG9jID0gdW5kZWZpbmVkO1xuICAgIHZhciBkb2MgPSB1bmRlZmluZWQ7XG4gICAgdmFyIGJvZHkgPSB1bmRlZmluZWQ7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICB2YXIgYnV0dG9uID0gbmF0aXZlRXZlbnQuYnV0dG9uO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHBhZ2VYL1kgaWYgbWlzc2luZyBhbmQgY2xpZW50WC9ZIGF2YWlsYWJsZVxuICAgIGlmICh0YXJnZXQgJiYgaXNOdWxsT3JVbmRlZmluZWQoZXZlbnQucGFnZVgpICYmICFpc051bGxPclVuZGVmaW5lZChuYXRpdmVFdmVudC5jbGllbnRYKSkge1xuICAgICAgZXZlbnREb2MgPSB0YXJnZXQub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudDtcbiAgICAgIGRvYyA9IGV2ZW50RG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgIGJvZHkgPSBldmVudERvYy5ib2R5O1xuICAgICAgZXZlbnQucGFnZVggPSBuYXRpdmVFdmVudC5jbGllbnRYICsgKGRvYyAmJiBkb2Muc2Nyb2xsTGVmdCB8fCBib2R5ICYmIGJvZHkuc2Nyb2xsTGVmdCB8fCAwKSAtIChkb2MgJiYgZG9jLmNsaWVudExlZnQgfHwgYm9keSAmJiBib2R5LmNsaWVudExlZnQgfHwgMCk7XG4gICAgICBldmVudC5wYWdlWSA9IG5hdGl2ZUV2ZW50LmNsaWVudFkgKyAoZG9jICYmIGRvYy5zY3JvbGxUb3AgfHwgYm9keSAmJiBib2R5LnNjcm9sbFRvcCB8fCAwKSAtIChkb2MgJiYgZG9jLmNsaWVudFRvcCB8fCBib2R5ICYmIGJvZHkuY2xpZW50VG9wIHx8IDApO1xuICAgIH1cblxuICAgIC8vIHdoaWNoIGZvciBjbGljazogMSA9PT0gbGVmdDsgMiA9PT0gbWlkZGxlOyAzID09PSByaWdodFxuICAgIC8vIGRvIG5vdCB1c2UgYnV0dG9uXG4gICAgaWYgKCFldmVudC53aGljaCAmJiBidXR0b24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGJ1dHRvbiAmIDEpIHtcbiAgICAgICAgZXZlbnQud2hpY2ggPSAxO1xuICAgICAgfSBlbHNlIGlmIChidXR0b24gJiAyKSB7XG4gICAgICAgIGV2ZW50LndoaWNoID0gMztcbiAgICAgIH0gZWxzZSBpZiAoYnV0dG9uICYgNCkge1xuICAgICAgICBldmVudC53aGljaCA9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC53aGljaCA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIHJlbGF0ZWRUYXJnZXQsIGlmIG5lY2Vzc2FyeVxuICAgIGlmICghZXZlbnQucmVsYXRlZFRhcmdldCAmJiBldmVudC5mcm9tRWxlbWVudCkge1xuICAgICAgZXZlbnQucmVsYXRlZFRhcmdldCA9IGV2ZW50LmZyb21FbGVtZW50ID09PSB0YXJnZXQgPyBldmVudC50b0VsZW1lbnQgOiBldmVudC5mcm9tRWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cbn1dO1xuXG5mdW5jdGlvbiByZXRUcnVlKCkge1xuICByZXR1cm4gVFJVRTtcbn1cblxuZnVuY3Rpb24gcmV0RmFsc2UoKSB7XG4gIHJldHVybiBGQUxTRTtcbn1cblxuZnVuY3Rpb24gRG9tRXZlbnRPYmplY3QobmF0aXZlRXZlbnQpIHtcbiAgdmFyIHR5cGUgPSBuYXRpdmVFdmVudC50eXBlO1xuXG4gIHZhciBpc05hdGl2ZSA9IHR5cGVvZiBuYXRpdmVFdmVudC5zdG9wUHJvcGFnYXRpb24gPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG5hdGl2ZUV2ZW50LmNhbmNlbEJ1YmJsZSA9PT0gJ2Jvb2xlYW4nO1xuXG4gIF9FdmVudEJhc2VPYmplY3QyWydkZWZhdWx0J10uY2FsbCh0aGlzKTtcblxuICB0aGlzLm5hdGl2ZUV2ZW50ID0gbmF0aXZlRXZlbnQ7XG5cbiAgLy8gaW4gY2FzZSBkb20gZXZlbnQgaGFzIGJlZW4gbWFyayBhcyBkZWZhdWx0IHByZXZlbnRlZCBieSBsb3dlciBkb20gbm9kZVxuICB2YXIgaXNEZWZhdWx0UHJldmVudGVkID0gcmV0RmFsc2U7XG4gIGlmICgnZGVmYXVsdFByZXZlbnRlZCcgaW4gbmF0aXZlRXZlbnQpIHtcbiAgICBpc0RlZmF1bHRQcmV2ZW50ZWQgPSBuYXRpdmVFdmVudC5kZWZhdWx0UHJldmVudGVkID8gcmV0VHJ1ZSA6IHJldEZhbHNlO1xuICB9IGVsc2UgaWYgKCdnZXRQcmV2ZW50RGVmYXVsdCcgaW4gbmF0aXZlRXZlbnQpIHtcbiAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTExNTFcbiAgICBpc0RlZmF1bHRQcmV2ZW50ZWQgPSBuYXRpdmVFdmVudC5nZXRQcmV2ZW50RGVmYXVsdCgpID8gcmV0VHJ1ZSA6IHJldEZhbHNlO1xuICB9IGVsc2UgaWYgKCdyZXR1cm5WYWx1ZScgaW4gbmF0aXZlRXZlbnQpIHtcbiAgICBpc0RlZmF1bHRQcmV2ZW50ZWQgPSBuYXRpdmVFdmVudC5yZXR1cm5WYWx1ZSA9PT0gRkFMU0UgPyByZXRUcnVlIDogcmV0RmFsc2U7XG4gIH1cblxuICB0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IGlzRGVmYXVsdFByZXZlbnRlZDtcblxuICB2YXIgZml4Rm5zID0gW107XG4gIHZhciBmaXhGbiA9IHVuZGVmaW5lZDtcbiAgdmFyIGwgPSB1bmRlZmluZWQ7XG4gIHZhciBwcm9wID0gdW5kZWZpbmVkO1xuICB2YXIgcHJvcHMgPSBjb21tb25Qcm9wcy5jb25jYXQoKTtcblxuICBldmVudE5vcm1hbGl6ZXJzLmZvckVhY2goZnVuY3Rpb24gKG5vcm1hbGl6ZXIpIHtcbiAgICBpZiAodHlwZS5tYXRjaChub3JtYWxpemVyLnJlZykpIHtcbiAgICAgIHByb3BzID0gcHJvcHMuY29uY2F0KG5vcm1hbGl6ZXIucHJvcHMpO1xuICAgICAgaWYgKG5vcm1hbGl6ZXIuZml4KSB7XG4gICAgICAgIGZpeEZucy5wdXNoKG5vcm1hbGl6ZXIuZml4KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGwgPSBwcm9wcy5sZW5ndGg7XG5cbiAgLy8gY2xvbmUgcHJvcGVydGllcyBvZiB0aGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XG4gIHdoaWxlIChsKSB7XG4gICAgcHJvcCA9IHByb3BzWy0tbF07XG4gICAgdGhpc1twcm9wXSA9IG5hdGl2ZUV2ZW50W3Byb3BdO1xuICB9XG5cbiAgLy8gZml4IHRhcmdldCBwcm9wZXJ0eSwgaWYgbmVjZXNzYXJ5XG4gIGlmICghdGhpcy50YXJnZXQgJiYgaXNOYXRpdmUpIHtcbiAgICB0aGlzLnRhcmdldCA9IG5hdGl2ZUV2ZW50LnNyY0VsZW1lbnQgfHwgZG9jdW1lbnQ7IC8vIHNyY0VsZW1lbnQgbWlnaHQgbm90IGJlIGRlZmluZWQgZWl0aGVyXG4gIH1cblxuICAvLyBjaGVjayBpZiB0YXJnZXQgaXMgYSB0ZXh0IG5vZGUgKHNhZmFyaSlcbiAgaWYgKHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0Lm5vZGVUeXBlID09PSAzKSB7XG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLnRhcmdldC5wYXJlbnROb2RlO1xuICB9XG5cbiAgbCA9IGZpeEZucy5sZW5ndGg7XG5cbiAgd2hpbGUgKGwpIHtcbiAgICBmaXhGbiA9IGZpeEZuc1stLWxdO1xuICAgIGZpeEZuKHRoaXMsIG5hdGl2ZUV2ZW50KTtcbiAgfVxuXG4gIHRoaXMudGltZVN0YW1wID0gbmF0aXZlRXZlbnQudGltZVN0YW1wIHx8IERhdGUubm93KCk7XG59XG5cbnZhciBFdmVudEJhc2VPYmplY3RQcm90byA9IF9FdmVudEJhc2VPYmplY3QyWydkZWZhdWx0J10ucHJvdG90eXBlO1xuXG4oMCwgX29iamVjdEFzc2lnbjJbJ2RlZmF1bHQnXSkoRG9tRXZlbnRPYmplY3QucHJvdG90eXBlLCBFdmVudEJhc2VPYmplY3RQcm90bywge1xuICBjb25zdHJ1Y3RvcjogRG9tRXZlbnRPYmplY3QsXG5cbiAgcHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KCkge1xuICAgIHZhciBlID0gdGhpcy5uYXRpdmVFdmVudDtcblxuICAgIC8vIGlmIHByZXZlbnREZWZhdWx0IGV4aXN0cyBydW4gaXQgb24gdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3RoZXJ3aXNlIHNldCB0aGUgcmV0dXJuVmFsdWUgcHJvcGVydHkgb2YgdGhlIG9yaWdpbmFsIGV2ZW50IHRvIEZBTFNFIChJRSlcbiAgICAgIGUucmV0dXJuVmFsdWUgPSBGQUxTRTtcbiAgICB9XG5cbiAgICBFdmVudEJhc2VPYmplY3RQcm90by5wcmV2ZW50RGVmYXVsdC5jYWxsKHRoaXMpO1xuICB9LFxuXG4gIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKCkge1xuICAgIHZhciBlID0gdGhpcy5uYXRpdmVFdmVudDtcblxuICAgIC8vIGlmIHN0b3BQcm9wYWdhdGlvbiBleGlzdHMgcnVuIGl0IG9uIHRoZSBvcmlnaW5hbCBldmVudFxuICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3RoZXJ3aXNlIHNldCB0aGUgY2FuY2VsQnViYmxlIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbCBldmVudCB0byBUUlVFIChJRSlcbiAgICAgIGUuY2FuY2VsQnViYmxlID0gVFJVRTtcbiAgICB9XG5cbiAgICBFdmVudEJhc2VPYmplY3RQcm90by5zdG9wUHJvcGFnYXRpb24uY2FsbCh0aGlzKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERvbUV2ZW50T2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyoqXG4gKiBAaWdub3JlXG4gKiBiYXNlIGV2ZW50IG9iamVjdCBmb3IgY3VzdG9tIGFuZCBkb20gZXZlbnQuXG4gKiBAYXV0aG9yIHlpbWluZ2hlQGdtYWlsLmNvbVxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50QmFzZU9iamVjdCgpIHtcbiAgdGhpcy50aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuICB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5jdXJyZW50VGFyZ2V0ID0gdW5kZWZpbmVkO1xufVxuXG5FdmVudEJhc2VPYmplY3QucHJvdG90eXBlID0ge1xuICBpc0V2ZW50T2JqZWN0OiAxLFxuXG4gIGNvbnN0cnVjdG9yOiBFdmVudEJhc2VPYmplY3QsXG5cbiAgaXNEZWZhdWx0UHJldmVudGVkOiByZXR1cm5GYWxzZSxcblxuICBpc1Byb3BhZ2F0aW9uU3RvcHBlZDogcmV0dXJuRmFsc2UsXG5cbiAgaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXG4gIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICB0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IHJldHVyblRydWU7XG4gIH0sXG5cbiAgc3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgdGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG4gIH0sXG5cbiAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiBmdW5jdGlvbiBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSB7XG4gICAgdGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG4gICAgLy8gZml4ZWQgMS4yXG4gICAgLy8gY2FsbCBzdG9wUHJvcGFnYXRpb24gaW1wbGljaXRseVxuICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0sXG5cbiAgaGFsdDogZnVuY3Rpb24gaGFsdChpbW1lZGlhdGUpIHtcbiAgICBpZiAoaW1tZWRpYXRlKSB7XG4gICAgICB0aGlzLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRXZlbnRCYXNlT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiXSwic291cmNlUm9vdCI6IiJ9