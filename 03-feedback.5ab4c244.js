!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var r,o,u,a,f,c,l=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(i);function j(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,f=setTimeout(w,t),s?j(e):a}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function w(){var e=p();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-c);return d?v(n,u-(e-l)):n}(e))}function O(e){return f=void 0,g&&r?j(e):(r=o=void 0,a)}function T(){var e=p(),n=h(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return S(c);if(d)return f=setTimeout(w,t),j(c)}return void 0===f&&(f=setTimeout(w,t)),a}return t=b(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(b(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},T.flush=function(){return void 0===f?a:O(p())},T}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=u.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const j=document.querySelector(".feedback-form"),S=document.querySelector('input[name="email"]'),h=document.querySelector('textarea[name="message"]'),w={},O="feedback-form-state",T=localStorage.getItem(O),x=JSON.parse(T);!function(){if(!T)return;S.value=x.email||"",h.value=x.message||""}(),j.addEventListener("input",e(t)((function(e){const t=e.target.value;w[e.target.name]=t,localStorage.setItem(O,JSON.stringify(w))}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),localStorage.clear(),j.reset(),console.log(x)}))}();
//# sourceMappingURL=03-feedback.5ab4c244.js.map
