(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{162:function(t,e,n){"use strict";e.__esModule=!0;var o=i(n(1)),r=i(n(369));function i(t){return t&&t.__esModule?t:{default:t}}e.default=o.default.createContext||r.default,t.exports=e.default},369:function(t,e,n){"use strict";e.__esModule=!0;var o=n(1),r=(u(o),u(n(3))),i=u(n(370));u(n(371));function u(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var p=1073741823;e.default=function(t,e){var n,u,f="__create-react-context-"+(0,i.default)()+"__",l=function(t){function n(){var e,o,r,i;s(this,n);for(var u=arguments.length,a=Array(u),p=0;p<u;p++)a[p]=arguments[p];return e=o=c(this,t.call.apply(t,[this].concat(a))),o.emitter=(r=o.props.value,i=[],{on:function(t){i.push(t)},off:function(t){i=i.filter(function(e){return e!==t})},get:function(){return r},set:function(t,e){r=t,i.forEach(function(t){return t(r,e)})}}),c(o,e)}return a(n,t),n.prototype.getChildContext=function(){var t;return(t={})[f]=this.emitter,t},n.prototype.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n=this.props.value,o=t.value,r=void 0;((i=n)===(u=o)?0!==i||1/i==1/u:i!=i&&u!=u)?r=0:(r="function"==typeof e?e(n,o):p,0!=(r|=0)&&this.emitter.set(t.value,r))}var i,u},n.prototype.render=function(){return this.props.children},n}(o.Component);l.childContextTypes=((n={})[f]=r.default.object.isRequired,n);var h=function(e){function n(){var t,o;s(this,n);for(var r=arguments.length,i=Array(r),u=0;u<r;u++)i[u]=arguments[u];return t=o=c(this,e.call.apply(e,[this].concat(i))),o.state={value:o.getValue()},o.onUpdate=function(t,e){0!=((0|o.observedBits)&e)&&o.setState({value:o.getValue()})},c(o,t)}return a(n,e),n.prototype.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?p:e},n.prototype.componentDidMount=function(){this.context[f]&&this.context[f].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?p:t},n.prototype.componentWillUnmount=function(){this.context[f]&&this.context[f].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[f]?this.context[f].get():t},n.prototype.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(o.Component);return h.contextTypes=((u={})[f]=r.default.object,u),{Provider:l,Consumer:h}},t.exports=e.default}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlYXRlLXJlYWN0LWNvbnRleHQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVhdGUtcmVhY3QtY29udGV4dC9saWIvaW1wbGVtZW50YXRpb24uanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJfcmVhY3QyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJfaW1wbGVtZW50YXRpb24yIiwib2JqIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJtb2R1bGUiLCJfcmVhY3QiLCJfcHJvcFR5cGVzMiIsIl9ndWQyIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwic2VsZiIsImNhbGwiLCJSZWZlcmVuY2VFcnJvciIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIk1BWF9TSUdORURfMzFfQklUX0lOVCIsImRlZmF1bHRWYWx1ZSIsImNhbGN1bGF0ZUNoYW5nZWRCaXRzIiwiX1Byb3ZpZGVyJGNoaWxkQ29udGV4IiwiX0NvbnN1bWVyJGNvbnRleHRUeXBlIiwiY29udGV4dFByb3AiLCJQcm92aWRlciIsIl9Db21wb25lbnQiLCJfdGVtcCIsIl90aGlzIiwiaGFuZGxlcnMiLCJ0aGlzIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJhcHBseSIsImNvbmNhdCIsImVtaXR0ZXIiLCJwcm9wcyIsIm9uIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJmaWx0ZXIiLCJoIiwiZ2V0Iiwic2V0IiwibmV3VmFsdWUiLCJjaGFuZ2VkQml0cyIsImZvckVhY2giLCJnZXRDaGlsZENvbnRleHQiLCJfcmVmIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsIm9sZFZhbHVlIiwieCIsInkiLCJyZW5kZXIiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsImNoaWxkQ29udGV4dFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIkNvbnN1bWVyIiwiX0NvbXBvbmVudDIiLCJfdGVtcDIiLCJfdGhpczIiLCJfbGVuMiIsIl9rZXkyIiwic3RhdGUiLCJnZXRWYWx1ZSIsIm9uVXBkYXRlIiwib2JzZXJ2ZWRCaXRzIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnRleHQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImlzQXJyYXkiLCJjb250ZXh0VHlwZXMiXSwibWFwcGluZ3MiOiIyRkFFQUEsRUFBQUMsWUFBQSxFQUVBLElBRUFDLEVBQUFDLEVBRmFDLEVBQVEsSUFNckJDLEVBQUFGLEVBRnNCQyxFQUFRLE1BSTlCLFNBQUFELEVBQUFHLEdBQXNDLE9BQUFBLEtBQUFMLFdBQUFLLEVBQUEsQ0FBdUNDLFFBQUFELEdBRTdFTixFQUFBTyxRQUFBTCxFQUFBSyxRQUFBQyxlQUFBSCxFQUFBRSxRQUNBRSxFQUFBVCxVQUFBLDBDQ2JBQSxFQUFBQyxZQUFBLEVBRUEsSUFBQVMsRUFBYU4sRUFBUSxHQU1yQk8sR0FKQVIsRUFBQU8sR0FJQVAsRUFGaUJDLEVBQVEsS0FNekJRLEVBQUFULEVBRldDLEVBQVEsTUFNbkJELEVBRmVDLEVBQVEsTUFJdkIsU0FBQUQsRUFBQUcsR0FBc0MsT0FBQUEsS0FBQUwsV0FBQUssRUFBQSxDQUF1Q0MsUUFBQUQsR0FFN0UsU0FBQU8sRUFBQUMsRUFBQUMsR0FBaUQsS0FBQUQsYUFBQUMsR0FBMEMsVUFBQUMsVUFBQSxxQ0FFM0YsU0FBQUMsRUFBQUMsRUFBQUMsR0FBaUQsSUFBQUQsRUFBYSxV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Q0ExRCxNQUFBdUQsRUFBQUksWUFDT0osRUFBQUssU0FBQSxTQUFBeEIsRUFBQUMsR0FFUCxLQURBLEVBQUFrQixFQUFBTSxjQUNBeEIsSUFDQWtCLEVBQUFPLFNBQUEsQ0FBMkI5RCxNQUFBdUQsRUFBQUksY0FFcEJ0RSxFQUFBa0UsRUFBQUQsR0FzQ1AsT0F4REE3RCxFQUFBMkQsRUFBQUMsR0FxQkFELEVBQUF4RCxVQUFBNkMsMEJBQUEsU0FBQUMsR0FDQSxJQUFBbUIsRUFBQW5CLEVBQUFtQixhQUVBNUMsS0FBQTRDLHFCQUFBdkQsRUFDQXVELEdBR0FULEVBQUF4RCxVQUFBbUUsa0JBQUEsV0FDQTlDLEtBQUErQyxRQUFBckQsSUFDQU0sS0FBQStDLFFBQUFyRCxHQUFBaUIsR0FBQVgsS0FBQTJDLFVBRUEsSUFBQUMsRUFBQTVDLEtBQUFVLE1BQUFrQyxhQUVBNUMsS0FBQTRDLHFCQUFBdkQsRUFDQXVELEdBR0FULEVBQUF4RCxVQUFBcUUscUJBQUEsV0FDQWhELEtBQUErQyxRQUFBckQsSUFDQU0sS0FBQStDLFFBQUFyRCxHQUFBb0IsSUFBQWQsS0FBQTJDLFdBSUFSLEVBQUF4RCxVQUFBK0QsU0FBQSxXQUNBLE9BQUExQyxLQUFBK0MsUUFBQXJELEdBQ0FNLEtBQUErQyxRQUFBckQsR0FBQXVCLE1BRUEzQixHQUlBNkMsRUFBQXhELFVBQUFrRCxPQUFBLFdBQ0EsT0FwSEFDLEVBb0hBOUIsS0FBQVUsTUFBQW9CLFNBbkhBekIsTUFBQTRDLFFBQUFuQixLQUFBLEdBQUFBLEdBbUhBOUIsS0FBQXlDLE1BQUExRCxPQXBIQSxJQUFBK0MsR0F1SEFLLEVBekRBLENBMERHdEUsRUFBQWtFLFdBS0gsT0FIQUksRUFBQWUsZUFBQXpELEVBQUEsSUFBcURDLEdBQUE1QixFQUFBSixRQUFBdUUsT0FBQXhDLEdBR3JELENBQ0FFLFdBQ0F3QyxhQUtBdkUsRUFBQVQsVUFBQSIsImZpbGUiOiJucG0uY3JlYXRlLXJlYWN0LWNvbnRleHQuY2h1bmtoYXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbnZhciBfaW1wbGVtZW50YXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW1wbGVtZW50YXRpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ29udGV4dCB8fCBfaW1wbGVtZW50YXRpb24yLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfZ3VkID0gcmVxdWlyZSgnZ3VkJyk7XG5cbnZhciBfZ3VkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2d1ZCk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBNQVhfU0lHTkVEXzMxX0JJVF9JTlQgPSAxMDczNzQxODIzO1xuXG4vLyBJbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuZnVuY3Rpb24gb2JqZWN0SXMoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50RW1pdHRlcih2YWx1ZSkge1xuICB2YXIgaGFuZGxlcnMgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBvbjogZnVuY3Rpb24gb24oaGFuZGxlcikge1xuICAgICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9LFxuICAgIG9mZjogZnVuY3Rpb24gb2ZmKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXJzID0gaGFuZGxlcnMuZmlsdGVyKGZ1bmN0aW9uIChoKSB7XG4gICAgICAgIHJldHVybiBoICE9PSBoYW5kbGVyO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld1ZhbHVlLCBjaGFuZ2VkQml0cykge1xuICAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIodmFsdWUsIGNoYW5nZWRCaXRzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuWzBdIDogY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0Q29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIHZhciBfUHJvdmlkZXIkY2hpbGRDb250ZXgsIF9Db25zdW1lciRjb250ZXh0VHlwZTtcblxuICB2YXIgY29udGV4dFByb3AgPSAnX19jcmVhdGUtcmVhY3QtY29udGV4dC0nICsgKDAsIF9ndWQyLmRlZmF1bHQpKCkgKyAnX18nO1xuXG4gIHZhciBQcm92aWRlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFByb3ZpZGVyLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFByb3ZpZGVyKCkge1xuICAgICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb3ZpZGVyKTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmVtaXR0ZXIgPSBjcmVhdGVFdmVudEVtaXR0ZXIoX3RoaXMucHJvcHMudmFsdWUpLCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgICB9XG5cbiAgICBQcm92aWRlci5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgdmFyIF9yZWY7XG5cbiAgICAgIHJldHVybiBfcmVmID0ge30sIF9yZWZbY29udGV4dFByb3BdID0gdGhpcy5lbWl0dGVyLCBfcmVmO1xuICAgIH07XG5cbiAgICBQcm92aWRlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gbmV4dFByb3BzLnZhbHVlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IG5leHRQcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIGNoYW5nZWRCaXRzID0gdm9pZCAwO1xuXG4gICAgICAgIGlmIChvYmplY3RJcyhvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hhbmdlZEJpdHMgPSAwOyAvLyBObyBjaGFuZ2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGFuZ2VkQml0cyA9IHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGN1bGF0ZUNoYW5nZWRCaXRzKG9sZFZhbHVlLCBuZXdWYWx1ZSkgOiBNQVhfU0lHTkVEXzMxX0JJVF9JTlQ7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoKGNoYW5nZWRCaXRzICYgTUFYX1NJR05FRF8zMV9CSVRfSU5UKSA9PT0gY2hhbmdlZEJpdHMsICdjYWxjdWxhdGVDaGFuZ2VkQml0czogRXhwZWN0ZWQgdGhlIHJldHVybiB2YWx1ZSB0byBiZSBhICcgKyAnMzEtYml0IGludGVnZXIuIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2hhbmdlZEJpdHMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoYW5nZWRCaXRzIHw9IDA7XG5cbiAgICAgICAgICBpZiAoY2hhbmdlZEJpdHMgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5zZXQobmV4dFByb3BzLnZhbHVlLCBjaGFuZ2VkQml0cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb3ZpZGVyO1xuICB9KF9yZWFjdC5Db21wb25lbnQpO1xuXG4gIFByb3ZpZGVyLmNoaWxkQ29udGV4dFR5cGVzID0gKF9Qcm92aWRlciRjaGlsZENvbnRleCA9IHt9LCBfUHJvdmlkZXIkY2hpbGRDb250ZXhbY29udGV4dFByb3BdID0gX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCwgX1Byb3ZpZGVyJGNoaWxkQ29udGV4KTtcblxuICB2YXIgQ29uc3VtZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDIpIHtcbiAgICBfaW5oZXJpdHMoQ29uc3VtZXIsIF9Db21wb25lbnQyKTtcblxuICAgIGZ1bmN0aW9uIENvbnN1bWVyKCkge1xuICAgICAgdmFyIF90ZW1wMiwgX3RoaXMyLCBfcmV0MjtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnN1bWVyKTtcblxuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JldDIgPSAoX3RlbXAyID0gKF90aGlzMiA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQyLmNhbGwuYXBwbHkoX0NvbXBvbmVudDIsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMyKSwgX3RoaXMyLnN0YXRlID0ge1xuICAgICAgICB2YWx1ZTogX3RoaXMyLmdldFZhbHVlKClcbiAgICAgIH0sIF90aGlzMi5vblVwZGF0ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgY2hhbmdlZEJpdHMpIHtcbiAgICAgICAgdmFyIG9ic2VydmVkQml0cyA9IF90aGlzMi5vYnNlcnZlZEJpdHMgfCAwO1xuICAgICAgICBpZiAoKG9ic2VydmVkQml0cyAmIGNoYW5nZWRCaXRzKSAhPT0gMCkge1xuICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IHZhbHVlOiBfdGhpczIuZ2V0VmFsdWUoKSB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgX3RlbXAyKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMyLCBfcmV0Mik7XG4gICAgfVxuXG4gICAgQ29uc3VtZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdmFyIG9ic2VydmVkQml0cyA9IG5leHRQcm9wcy5vYnNlcnZlZEJpdHM7XG5cbiAgICAgIHRoaXMub2JzZXJ2ZWRCaXRzID0gb2JzZXJ2ZWRCaXRzID09PSB1bmRlZmluZWQgfHwgb2JzZXJ2ZWRCaXRzID09PSBudWxsID8gTUFYX1NJR05FRF8zMV9CSVRfSU5UIC8vIFN1YnNjcmliZSB0byBhbGwgY2hhbmdlcyBieSBkZWZhdWx0XG4gICAgICA6IG9ic2VydmVkQml0cztcbiAgICB9O1xuXG4gICAgQ29uc3VtZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXSkge1xuICAgICAgICB0aGlzLmNvbnRleHRbY29udGV4dFByb3BdLm9uKHRoaXMub25VcGRhdGUpO1xuICAgICAgfVxuICAgICAgdmFyIG9ic2VydmVkQml0cyA9IHRoaXMucHJvcHMub2JzZXJ2ZWRCaXRzO1xuXG4gICAgICB0aGlzLm9ic2VydmVkQml0cyA9IG9ic2VydmVkQml0cyA9PT0gdW5kZWZpbmVkIHx8IG9ic2VydmVkQml0cyA9PT0gbnVsbCA/IE1BWF9TSUdORURfMzFfQklUX0lOVCAvLyBTdWJzY3JpYmUgdG8gYWxsIGNoYW5nZXMgYnkgZGVmYXVsdFxuICAgICAgOiBvYnNlcnZlZEJpdHM7XG4gICAgfTtcblxuICAgIENvbnN1bWVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0pIHtcbiAgICAgICAgdGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXS5vZmYodGhpcy5vblVwZGF0ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENvbnN1bWVyLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgaWYgKHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0uZ2V0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDb25zdW1lci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG9ubHlDaGlsZCh0aGlzLnByb3BzLmNoaWxkcmVuKSh0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENvbnN1bWVyO1xuICB9KF9yZWFjdC5Db21wb25lbnQpO1xuXG4gIENvbnN1bWVyLmNvbnRleHRUeXBlcyA9IChfQ29uc3VtZXIkY29udGV4dFR5cGUgPSB7fSwgX0NvbnN1bWVyJGNvbnRleHRUeXBlW2NvbnRleHRQcm9wXSA9IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCBfQ29uc3VtZXIkY29udGV4dFR5cGUpO1xuXG5cbiAgcmV0dXJuIHtcbiAgICBQcm92aWRlcjogUHJvdmlkZXIsXG4gICAgQ29uc3VtZXI6IENvbnN1bWVyXG4gIH07XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVJlYWN0Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyJdLCJzb3VyY2VSb290IjoiIn0=