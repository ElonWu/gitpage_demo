(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{119:function(t,e,n){"use strict";e.__esModule=!0;var o=n(0),r=(u(o),u(n(6))),i=u(n(120));u(n(121));function u(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var p=1073741823;e.default=function(t,e){var n,u,f="__create-react-context-"+(0,i.default)()+"__",l=function(t){function n(){var e,o,r,i;s(this,n);for(var u=arguments.length,a=Array(u),p=0;p<u;p++)a[p]=arguments[p];return e=o=c(this,t.call.apply(t,[this].concat(a))),o.emitter=(r=o.props.value,i=[],{on:function(t){i.push(t)},off:function(t){i=i.filter(function(e){return e!==t})},get:function(){return r},set:function(t,e){r=t,i.forEach(function(t){return t(r,e)})}}),c(o,e)}return a(n,t),n.prototype.getChildContext=function(){var t;return(t={})[f]=this.emitter,t},n.prototype.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n=this.props.value,o=t.value,r=void 0;((i=n)===(u=o)?0!==i||1/i==1/u:i!=i&&u!=u)?r=0:(r="function"==typeof e?e(n,o):p,0!=(r|=0)&&this.emitter.set(t.value,r))}var i,u},n.prototype.render=function(){return this.props.children},n}(o.Component);l.childContextTypes=((n={})[f]=r.default.object.isRequired,n);var h=function(e){function n(){var t,o;s(this,n);for(var r=arguments.length,i=Array(r),u=0;u<r;u++)i[u]=arguments[u];return t=o=c(this,e.call.apply(e,[this].concat(i))),o.state={value:o.getValue()},o.onUpdate=function(t,e){0!=((0|o.observedBits)&e)&&o.setState({value:o.getValue()})},c(o,t)}return a(n,e),n.prototype.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?p:e},n.prototype.componentDidMount=function(){this.context[f]&&this.context[f].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?p:t},n.prototype.componentWillUnmount=function(){this.context[f]&&this.context[f].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[f]?this.context[f].get():t},n.prototype.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(o.Component);return h.contextTypes=((u={})[f]=r.default.object,u),{Provider:l,Consumer:h}},t.exports=e.default},68:function(t,e,n){"use strict";e.__esModule=!0;var o=i(n(0)),r=i(n(119));function i(t){return t&&t.__esModule?t:{default:t}}e.default=o.default.createContext||r.default,t.exports=e.default}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlYXRlLXJlYWN0LWNvbnRleHQvbGliL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVhdGUtcmVhY3QtY29udGV4dC9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJfcmVhY3QiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX3Byb3BUeXBlczIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2d1ZDIiLCJvYmoiLCJkZWZhdWx0IiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwic2VsZiIsImNhbGwiLCJSZWZlcmVuY2VFcnJvciIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIk1BWF9TSUdORURfMzFfQklUX0lOVCIsImRlZmF1bHRWYWx1ZSIsImNhbGN1bGF0ZUNoYW5nZWRCaXRzIiwiX1Byb3ZpZGVyJGNoaWxkQ29udGV4IiwiX0NvbnN1bWVyJGNvbnRleHRUeXBlIiwiY29udGV4dFByb3AiLCJQcm92aWRlciIsIl9Db21wb25lbnQiLCJfdGVtcCIsIl90aGlzIiwiaGFuZGxlcnMiLCJ0aGlzIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJhcHBseSIsImNvbmNhdCIsImVtaXR0ZXIiLCJwcm9wcyIsIm9uIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJmaWx0ZXIiLCJoIiwiZ2V0Iiwic2V0IiwibmV3VmFsdWUiLCJjaGFuZ2VkQml0cyIsImZvckVhY2giLCJnZXRDaGlsZENvbnRleHQiLCJfcmVmIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsIm9sZFZhbHVlIiwieCIsInkiLCJyZW5kZXIiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsImNoaWxkQ29udGV4dFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIkNvbnN1bWVyIiwiX0NvbXBvbmVudDIiLCJfdGVtcDIiLCJfdGhpczIiLCJfbGVuMiIsIl9rZXkyIiwic3RhdGUiLCJnZXRWYWx1ZSIsIm9uVXBkYXRlIiwib2JzZXJ2ZWRCaXRzIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnRleHQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImlzQXJyYXkiLCJjb250ZXh0VHlwZXMiLCJtb2R1bGUiLCJfcmVhY3QyIiwiX2ltcGxlbWVudGF0aW9uMiIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiIyRkFFQUEsRUFBQUMsWUFBQSxFQUVBLElBQUFDLEVBQWFDLEVBQVEsR0FNckJDLEdBSkFDLEVBQUFILEdBSUFHLEVBRmlCRixFQUFRLEtBTXpCRyxFQUFBRCxFQUZXRixFQUFRLE1BTW5CRSxFQUZlRixFQUFRLE1BSXZCLFNBQUFFLEVBQUFFLEdBQXNDLE9BQUFBLEtBQUFOLFdBQUFNLEVBQUEsQ0FBdUNDLFFBQUFELEdBRTdFLFNBQUFFLEVBQUFDLEVBQUFDLEdBQWlELEtBQUFELGFBQUFDLEdBQTBDLFVBQUFDLFVBQUEscUNBRTNGLFNBQUFDLEVBQUFDLEVBQUFDLEdBQWlELElBQUFELEVBQWEsVUFBQUUsZUFBQSw2REFBeUYsT0FBQUQsR0FBQSxpQkFBQUEsR0FBQSxtQkFBQUEsRUFBQUQsRUFBQUMsRUFFdkosU0FBQUUsRUFBQUMsRUFBQUMsR0FBMEMsc0JBQUFBLEdBQUEsT0FBQUEsRUFBK0QsVUFBQVAsVUFBQSxrRUFBQU8sR0FBdUdELEVBQUFFLFVBQUFDLE9BQUFDLE9BQUFILEtBQUFDLFVBQUEsQ0FBeUVHLFlBQUEsQ0FBZUMsTUFBQU4sRUFBQU8sWUFBQSxFQUFBQyxVQUFBLEVBQUFDLGNBQUEsS0FBNkVSLElBQUFFLE9BQUFPLGVBQUFQLE9BQUFPLGVBQUFWLEVBQUFDLEdBQUFELEVBQUFXLFVBQUFWLEdBRXJYLElBQUFXLEVBQUEsV0FzS0E5QixFQUFBUSxRQS9IQSxTQUFBdUIsRUFBQUMsR0FDQSxJQUFBQyxFQUFBQyxFQUVBQyxFQUFBLDZCQUFBN0IsRUFBQUUsV0FBQSxLQUVBNEIsRUFBQSxTQUFBQyxHQUdBLFNBQUFELElBQ0EsSUFBQUUsRUFBQUMsRUFwQ0FmLEVBQ0FnQixFQXFDQS9CLEVBQUFnQyxLQUFBTCxHQUVBLFFBQUFNLEVBQUFDLFVBQUFDLE9BQUFDLEVBQUFDLE1BQUFKLEdBQUFLLEVBQUEsRUFBcUVBLEVBQUFMLEVBQWFLLElBQ2xGRixFQUFBRSxHQUFBSixVQUFBSSxHQUdBLE9BQUFULEVBQUFDLEVBQUExQixFQUFBNEIsS0FBQUosRUFBQXRCLEtBQUFpQyxNQUFBWCxFQUFBLENBQUFJLE1BQUFRLE9BQUFKLEtBQUFOLEVBQUFXLFNBNUNBMUIsRUE0Q0FlLEVBQUFZLE1BQUEzQixNQTNDQWdCLEVBQUEsR0FDQSxDQUNBWSxHQUFBLFNBQUFDLEdBQ0FiLEVBQUFjLEtBQUFELElBRUFFLElBQUEsU0FBQUYsR0FDQWIsSUFBQWdCLE9BQUEsU0FBQUMsR0FDQSxPQUFBQSxJQUFBSixLQUdBSyxJQUFBLFdBQ0EsT0FBQWxDLEdBRUFtQyxJQUFBLFNBQUFDLEVBQUFDLEdBQ0FyQyxFQUFBb0MsRUFDQXBCLEVBQUFzQixRQUFBLFNBQUFULEdBQ0EsT0FBQUEsRUFBQTdCLEVBQUFxQyxRQTJCQWhELEVBQUEwQixFQUFBRCxHQW9DQSxPQS9DQXJCLEVBQUFtQixFQUFBQyxHQWNBRCxFQUFBaEIsVUFBQTJDLGdCQUFBLFdBQ0EsSUFBQUMsRUFFQSxPQUFBQSxFQUFBLElBQXNCN0IsR0FBQU0sS0FBQVMsUUFBQWMsR0FHdEI1QixFQUFBaEIsVUFBQTZDLDBCQUFBLFNBQUFDLEdBQ0EsR0FBQXpCLEtBQUFVLE1BQUEzQixRQUFBMEMsRUFBQTFDLE1BQUEsQ0FDQSxJQUFBMkMsRUFBQTFCLEtBQUFVLE1BQUEzQixNQUNBb0MsRUFBQU0sRUFBQTFDLE1BQ0FxQyxPQUFBLElBakVBTyxFQW1FQUQsTUFuRUFFLEVBbUVBVCxHQWpFQSxJQUFBUSxHQUFBLEVBQUFBLEdBQUEsRUFBQUMsRUFFQUQsTUFBQUMsTUFnRUFSLEVBQUEsR0FFQUEsRUFBQSxtQkFBQTdCLElBQUFtQyxFQUFBUCxHQUFBOUIsRUFPQSxJQUZBK0IsR0FBQSxJQUdBcEIsS0FBQVMsUUFBQVMsSUFBQU8sRUFBQTFDLE1BQUFxQyxJQTlFQSxJQUFBTyxFQUFBQyxHQW9GQWpDLEVBQUFoQixVQUFBa0QsT0FBQSxXQUNBLE9BQUE3QixLQUFBVSxNQUFBb0IsVUFHQW5DLEVBaERBLENBaURHbEMsRUFBQXNFLFdBRUhwQyxFQUFBcUMsb0JBQUF4QyxFQUFBLElBQTBERSxHQUFBL0IsRUFBQUksUUFBQWtFLE9BQUFDLFdBQUExQyxHQUUxRCxJQUFBMkMsRUFBQSxTQUFBQyxHQUdBLFNBQUFELElBQ0EsSUFBQUUsRUFBQUMsRUFFQXRFLEVBQUFnQyxLQUFBbUMsR0FFQSxRQUFBSSxFQUFBckMsVUFBQUMsT0FBQUMsRUFBQUMsTUFBQWtDLEdBQUFDLEVBQUEsRUFBd0VBLEVBQUFELEVBQWVDLElBQ3ZGcEMsRUFBQW9DLEdBQUF0QyxVQUFBc0MsR0FHQSxPQUFBSCxFQUFBQyxFQUFBbEUsRUFBQTRCLEtBQUFvQyxFQUFBOUQsS0FBQWlDLE1BQUE2QixFQUFBLENBQUFwQyxNQUFBUSxPQUFBSixLQUFBa0MsRUFBQUcsTUFBQSxDQUNBMUQsTUFBQXVELEVBQUFJLFlBQ09KLEVBQUFLLFNBQUEsU0FBQXhCLEVBQUFDLEdBRVAsS0FEQSxFQUFBa0IsRUFBQU0sY0FDQXhCLElBQ0FrQixFQUFBTyxTQUFBLENBQTJCOUQsTUFBQXVELEVBQUFJLGNBRXBCdEUsRUFBQWtFLEVBQUFELEdBc0NQLE9BeERBN0QsRUFBQTJELEVBQUFDLEdBcUJBRCxFQUFBeEQsVUFBQTZDLDBCQUFBLFNBQUFDLEdBQ0EsSUFBQW1CLEVBQUFuQixFQUFBbUIsYUFFQTVDLEtBQUE0QyxxQkFBQXZELEVBQ0F1RCxHQUdBVCxFQUFBeEQsVUFBQW1FLGtCQUFBLFdBQ0E5QyxLQUFBK0MsUUFBQXJELElBQ0FNLEtBQUErQyxRQUFBckQsR0FBQWlCLEdBQUFYLEtBQUEyQyxVQUVBLElBQUFDLEVBQUE1QyxLQUFBVSxNQUFBa0MsYUFFQTVDLEtBQUE0QyxxQkFBQXZELEVBQ0F1RCxHQUdBVCxFQUFBeEQsVUFBQXFFLHFCQUFBLFdBQ0FoRCxLQUFBK0MsUUFBQXJELElBQ0FNLEtBQUErQyxRQUFBckQsR0FBQW9CLElBQUFkLEtBQUEyQyxXQUlBUixFQUFBeEQsVUFBQStELFNBQUEsV0FDQSxPQUFBMUMsS0FBQStDLFFBQUFyRCxHQUNBTSxLQUFBK0MsUUFBQXJELEdBQUF1QixNQUVBM0IsR0FJQTZDLEVBQUF4RCxVQUFBa0QsT0FBQSxXQUNBLE9BcEhBQyxFQW9IQTlCLEtBQUFVLE1BQUFvQixTQW5IQXpCLE1BQUE0QyxRQUFBbkIsS0FBQSxHQUFBQSxHQW1IQTlCLEtBQUF5QyxNQUFBMUQsT0FwSEEsSUFBQStDLEdBdUhBSyxFQXpEQSxDQTBERzFFLEVBQUFzRSxXQUtILE9BSEFJLEVBQUFlLGVBQUF6RCxFQUFBLElBQXFEQyxHQUFBL0IsRUFBQUksUUFBQWtFLE9BQUF4QyxHQUdyRCxDQUNBRSxXQUNBd0MsYUFLQWdCLEVBQUE1RixVQUFBLHlDQ2pNQUEsRUFBQUMsWUFBQSxFQUVBLElBRUE0RixFQUFBeEYsRUFGYUYsRUFBUSxJQU1yQjJGLEVBQUF6RixFQUZzQkYsRUFBUSxNQUk5QixTQUFBRSxFQUFBRSxHQUFzQyxPQUFBQSxLQUFBTixXQUFBTSxFQUFBLENBQXVDQyxRQUFBRCxHQUU3RVAsRUFBQVEsUUFBQXFGLEVBQUFyRixRQUFBdUYsZUFBQUQsRUFBQXRGLFFBQ0FvRixFQUFBNUYsVUFBQSIsImZpbGUiOiJucG0uY3JlYXRlLXJlYWN0LWNvbnRleHQuY2h1bmtoYXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2d1ZCA9IHJlcXVpcmUoJ2d1ZCcpO1xuXG52YXIgX2d1ZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ndWQpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTUFYX1NJR05FRF8zMV9CSVRfSU5UID0gMTA3Mzc0MTgyMztcblxuLy8gSW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbmZ1bmN0aW9uIG9iamVjdElzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudEVtaXR0ZXIodmFsdWUpIHtcbiAgdmFyIGhhbmRsZXJzID0gW107XG4gIHJldHVybiB7XG4gICAgb246IGZ1bmN0aW9uIG9uKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfSxcbiAgICBvZmY6IGZ1bmN0aW9uIG9mZihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVycyA9IGhhbmRsZXJzLmZpbHRlcihmdW5jdGlvbiAoaCkge1xuICAgICAgICByZXR1cm4gaCAhPT0gaGFuZGxlcjtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdWYWx1ZSwgY2hhbmdlZEJpdHMpIHtcbiAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4gICAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyKHZhbHVlLCBjaGFuZ2VkQml0cyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlblswXSA6IGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWFjdENvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICB2YXIgX1Byb3ZpZGVyJGNoaWxkQ29udGV4LCBfQ29uc3VtZXIkY29udGV4dFR5cGU7XG5cbiAgdmFyIGNvbnRleHRQcm9wID0gJ19fY3JlYXRlLXJlYWN0LWNvbnRleHQtJyArICgwLCBfZ3VkMi5kZWZhdWx0KSgpICsgJ19fJztcblxuICB2YXIgUHJvdmlkZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBQcm92aWRlcigpIHtcbiAgICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm92aWRlcik7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5lbWl0dGVyID0gY3JlYXRlRXZlbnRFbWl0dGVyKF90aGlzLnByb3BzLnZhbHVlKSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gICAgfVxuXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW2NvbnRleHRQcm9wXSA9IHRoaXMuZW1pdHRlciwgX3JlZjtcbiAgICB9O1xuXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT09IG5leHRQcm9wcy52YWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSBuZXh0UHJvcHMudmFsdWU7XG4gICAgICAgIHZhciBjaGFuZ2VkQml0cyA9IHZvaWQgMDtcblxuICAgICAgICBpZiAob2JqZWN0SXMob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoYW5nZWRCaXRzID0gMDsgLy8gTm8gY2hhbmdlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hhbmdlZEJpdHMgPSB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09ICdmdW5jdGlvbicgPyBjYWxjdWxhdGVDaGFuZ2VkQml0cyhvbGRWYWx1ZSwgbmV3VmFsdWUpIDogTUFYX1NJR05FRF8zMV9CSVRfSU5UO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKChjaGFuZ2VkQml0cyAmIE1BWF9TSUdORURfMzFfQklUX0lOVCkgPT09IGNoYW5nZWRCaXRzLCAnY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IEV4cGVjdGVkIHRoZSByZXR1cm4gdmFsdWUgdG8gYmUgYSAnICsgJzMxLWJpdCBpbnRlZ2VyLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNoYW5nZWRCaXRzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGFuZ2VkQml0cyB8PSAwO1xuXG4gICAgICAgICAgaWYgKGNoYW5nZWRCaXRzICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIuc2V0KG5leHRQcm9wcy52YWx1ZSwgY2hhbmdlZEJpdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBQcm92aWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfTtcblxuICAgIHJldHVybiBQcm92aWRlcjtcbiAgfShfcmVhY3QuQ29tcG9uZW50KTtcblxuICBQcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IChfUHJvdmlkZXIkY2hpbGRDb250ZXggPSB7fSwgX1Byb3ZpZGVyJGNoaWxkQ29udGV4W2NvbnRleHRQcm9wXSA9IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsIF9Qcm92aWRlciRjaGlsZENvbnRleCk7XG5cbiAgdmFyIENvbnN1bWVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gICAgX2luaGVyaXRzKENvbnN1bWVyLCBfQ29tcG9uZW50Mik7XG5cbiAgICBmdW5jdGlvbiBDb25zdW1lcigpIHtcbiAgICAgIHZhciBfdGVtcDIsIF90aGlzMiwgX3JldDI7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25zdW1lcik7XG5cbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZXQyID0gKF90ZW1wMiA9IChfdGhpczIgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50Mi5jYWxsLmFwcGx5KF9Db21wb25lbnQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzMiksIF90aGlzMi5zdGF0ZSA9IHtcbiAgICAgICAgdmFsdWU6IF90aGlzMi5nZXRWYWx1ZSgpXG4gICAgICB9LCBfdGhpczIub25VcGRhdGUgPSBmdW5jdGlvbiAobmV3VmFsdWUsIGNoYW5nZWRCaXRzKSB7XG4gICAgICAgIHZhciBvYnNlcnZlZEJpdHMgPSBfdGhpczIub2JzZXJ2ZWRCaXRzIHwgMDtcbiAgICAgICAgaWYgKChvYnNlcnZlZEJpdHMgJiBjaGFuZ2VkQml0cykgIT09IDApIHtcbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyB2YWx1ZTogX3RoaXMyLmdldFZhbHVlKCkgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIF90ZW1wMiksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzMiwgX3JldDIpO1xuICAgIH1cblxuICAgIENvbnN1bWVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBvYnNlcnZlZEJpdHMgPSBuZXh0UHJvcHMub2JzZXJ2ZWRCaXRzO1xuXG4gICAgICB0aGlzLm9ic2VydmVkQml0cyA9IG9ic2VydmVkQml0cyA9PT0gdW5kZWZpbmVkIHx8IG9ic2VydmVkQml0cyA9PT0gbnVsbCA/IE1BWF9TSUdORURfMzFfQklUX0lOVCAvLyBTdWJzY3JpYmUgdG8gYWxsIGNoYW5nZXMgYnkgZGVmYXVsdFxuICAgICAgOiBvYnNlcnZlZEJpdHM7XG4gICAgfTtcblxuICAgIENvbnN1bWVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0pIHtcbiAgICAgICAgdGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXS5vbih0aGlzLm9uVXBkYXRlKTtcbiAgICAgIH1cbiAgICAgIHZhciBvYnNlcnZlZEJpdHMgPSB0aGlzLnByb3BzLm9ic2VydmVkQml0cztcblxuICAgICAgdGhpcy5vYnNlcnZlZEJpdHMgPSBvYnNlcnZlZEJpdHMgPT09IHVuZGVmaW5lZCB8fCBvYnNlcnZlZEJpdHMgPT09IG51bGwgPyBNQVhfU0lHTkVEXzMxX0JJVF9JTlQgLy8gU3Vic2NyaWJlIHRvIGFsbCBjaGFuZ2VzIGJ5IGRlZmF1bHRcbiAgICAgIDogb2JzZXJ2ZWRCaXRzO1xuICAgIH07XG5cbiAgICBDb25zdW1lci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRbY29udGV4dFByb3BdKSB7XG4gICAgICAgIHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0ub2ZmKHRoaXMub25VcGRhdGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDb25zdW1lci5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRbY29udGV4dFByb3BdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRbY29udGV4dFByb3BdLmdldCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29uc3VtZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBvbmx5Q2hpbGQodGhpcy5wcm9wcy5jaGlsZHJlbikodGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBDb25zdW1lcjtcbiAgfShfcmVhY3QuQ29tcG9uZW50KTtcblxuICBDb25zdW1lci5jb250ZXh0VHlwZXMgPSAoX0NvbnN1bWVyJGNvbnRleHRUeXBlID0ge30sIF9Db25zdW1lciRjb250ZXh0VHlwZVtjb250ZXh0UHJvcF0gPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgX0NvbnN1bWVyJGNvbnRleHRUeXBlKTtcblxuXG4gIHJldHVybiB7XG4gICAgUHJvdmlkZXI6IFByb3ZpZGVyLFxuICAgIENvbnN1bWVyOiBDb25zdW1lclxuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVSZWFjdENvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9pbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxudmFyIF9pbXBsZW1lbnRhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbXBsZW1lbnRhdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDb250ZXh0IHx8IF9pbXBsZW1lbnRhdGlvbjIuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyJdLCJzb3VyY2VSb290IjoiIn0=