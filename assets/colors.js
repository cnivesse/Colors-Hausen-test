// jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

// slick.js v1.8.1 | Ken Wheeler | kenwheeler.github.io/slick
(function (factory) { "use strict"; if (typeof define === "function" && define.amd) { define(["jquery"], factory) } else if (typeof exports !== "undefined") { module.exports = factory(require("jquery")) } else { factory(jQuery) } })(function ($) { "use strict"; var Slick = window.Slick || {}; Slick = function () { var instanceUid = 0; function Slick(element, settings) { var _ = this, dataSettings; _.defaults = { accessibility: true, adaptiveHeight: false, appendArrows: $(element), appendDots: $(element), arrows: true, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: false, autoplaySpeed: 3e3, centerMode: false, centerPadding: "50px", cssEase: "ease", customPaging: function (slider, i) { return $('<button type="button" />').text(i + 1) }, dots: false, dotsClass: "slick-dots", draggable: true, easing: "linear", edgeFriction: .35, fade: false, focusOnSelect: false, focusOnChange: false, infinite: true, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: false, pauseOnHover: true, pauseOnFocus: true, pauseOnDotsHover: false, respondTo: "window", responsive: null, rows: 1, rtl: false, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: true, swipeToSlide: false, touchMove: true, touchThreshold: 5, useCSS: true, useTransform: true, variableWidth: false, vertical: false, verticalSwiping: false, waitForAnimate: true, zIndex: 1e3 }; _.initials = { animating: false, dragging: false, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: false, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: false, slideOffset: 0, swipeLeft: null, swiping: false, $list: null, touchObject: {}, transformsEnabled: false, unslicked: false }; $.extend(_, _.initials); _.activeBreakpoint = null; _.animType = null; _.animProp = null; _.breakpoints = []; _.breakpointSettings = []; _.cssTransitions = false; _.focussed = false; _.interrupted = false; _.hidden = "hidden"; _.paused = true; _.positionProp = null; _.respondTo = null; _.rowCount = 1; _.shouldClick = true; _.$slider = $(element); _.$slidesCache = null; _.transformType = null; _.transitionType = null; _.visibilityChange = "visibilitychange"; _.windowWidth = 0; _.windowTimer = null; dataSettings = $(element).data("slick") || {}; _.options = $.extend({}, _.defaults, settings, dataSettings); _.currentSlide = _.options.initialSlide; _.originalSettings = _.options; if (typeof document.mozHidden !== "undefined") { _.hidden = "mozHidden"; _.visibilityChange = "mozvisibilitychange" } else if (typeof document.webkitHidden !== "undefined") { _.hidden = "webkitHidden"; _.visibilityChange = "webkitvisibilitychange" } _.autoPlay = $.proxy(_.autoPlay, _); _.autoPlayClear = $.proxy(_.autoPlayClear, _); _.autoPlayIterator = $.proxy(_.autoPlayIterator, _); _.changeSlide = $.proxy(_.changeSlide, _); _.clickHandler = $.proxy(_.clickHandler, _); _.selectHandler = $.proxy(_.selectHandler, _); _.setPosition = $.proxy(_.setPosition, _); _.swipeHandler = $.proxy(_.swipeHandler, _); _.dragHandler = $.proxy(_.dragHandler, _); _.keyHandler = $.proxy(_.keyHandler, _); _.instanceUid = instanceUid++; _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/; _.registerBreakpoints(); _.init(true) } return Slick }(); Slick.prototype.activateADA = function () { var _ = this; _.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }; Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) { var _ = this; if (typeof index === "boolean") { addBefore = index; index = null } else if (index < 0 || index >= _.slideCount) { return false } _.unload(); if (typeof index === "number") { if (index === 0 && _.$slides.length === 0) { $(markup).appendTo(_.$slideTrack) } else if (addBefore) { $(markup).insertBefore(_.$slides.eq(index)) } else { $(markup).insertAfter(_.$slides.eq(index)) } } else { if (addBefore === true) { $(markup).prependTo(_.$slideTrack) } else { $(markup).appendTo(_.$slideTrack) } } _.$slides = _.$slideTrack.children(this.options.slide); _.$slideTrack.children(this.options.slide).detach(); _.$slideTrack.append(_.$slides); _.$slides.each(function (index, element) { $(element).attr("data-slick-index", index) }); _.$slidesCache = _.$slides; _.reinit() }; Slick.prototype.animateHeight = function () { var _ = this; if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) { var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true); _.$list.animate({ height: targetHeight }, _.options.speed) } }; Slick.prototype.animateSlide = function (targetLeft, callback) { var animProps = {}, _ = this; _.animateHeight(); if (_.options.rtl === true && _.options.vertical === false) { targetLeft = -targetLeft } if (_.transformsEnabled === false) { if (_.options.vertical === false) { _.$slideTrack.animate({ left: targetLeft }, _.options.speed, _.options.easing, callback) } else { _.$slideTrack.animate({ top: targetLeft }, _.options.speed, _.options.easing, callback) } } else { if (_.cssTransitions === false) { if (_.options.rtl === true) { _.currentLeft = -_.currentLeft } $({ animStart: _.currentLeft }).animate({ animStart: targetLeft }, { duration: _.options.speed, easing: _.options.easing, step: function (now) { now = Math.ceil(now); if (_.options.vertical === false) { animProps[_.animType] = "translate(" + now + "px, 0px)"; _.$slideTrack.css(animProps) } else { animProps[_.animType] = "translate(0px," + now + "px)"; _.$slideTrack.css(animProps) } }, complete: function () { if (callback) { callback.call() } } }) } else { _.applyTransition(); targetLeft = Math.ceil(targetLeft); if (_.options.vertical === false) { animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)" } else { animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)" } _.$slideTrack.css(animProps); if (callback) { setTimeout(function () { _.disableTransition(); callback.call() }, _.options.speed) } } } }; Slick.prototype.getNavTarget = function () { var _ = this, asNavFor = _.options.asNavFor; if (asNavFor && asNavFor !== null) { asNavFor = $(asNavFor).not(_.$slider) } return asNavFor }; Slick.prototype.asNavFor = function (index) { var _ = this, asNavFor = _.getNavTarget(); if (asNavFor !== null && typeof asNavFor === "object") { asNavFor.each(function () { var target = $(this).slick("getSlick"); if (!target.unslicked) { target.slideHandler(index, true) } }) } }; Slick.prototype.applyTransition = function (slide) { var _ = this, transition = {}; if (_.options.fade === false) { transition[_.transitionType] = _.transformType + " " + _.options.speed + "ms " + _.options.cssEase } else { transition[_.transitionType] = "opacity " + _.options.speed + "ms " + _.options.cssEase } if (_.options.fade === false) { _.$slideTrack.css(transition) } else { _.$slides.eq(slide).css(transition) } }; Slick.prototype.autoPlay = function () { var _ = this; _.autoPlayClear(); if (_.slideCount > _.options.slidesToShow) { _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed) } }; Slick.prototype.autoPlayClear = function () { var _ = this; if (_.autoPlayTimer) { clearInterval(_.autoPlayTimer) } }; Slick.prototype.autoPlayIterator = function () { var _ = this, slideTo = _.currentSlide + _.options.slidesToScroll; if (!_.paused && !_.interrupted && !_.focussed) { if (_.options.infinite === false) { if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) { _.direction = 0 } else if (_.direction === 0) { slideTo = _.currentSlide - _.options.slidesToScroll; if (_.currentSlide - 1 === 0) { _.direction = 1 } } } _.slideHandler(slideTo) } }; Slick.prototype.buildArrows = function () { var _ = this; if (_.options.arrows === true) { _.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow"); _.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow"); if (_.slideCount > _.options.slidesToShow) { _.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"); _.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"); if (_.htmlExpr.test(_.options.prevArrow)) { _.$prevArrow.prependTo(_.options.appendArrows) } if (_.htmlExpr.test(_.options.nextArrow)) { _.$nextArrow.appendTo(_.options.appendArrows) } if (_.options.infinite !== true) { _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true") } } else { _.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }) } } }; Slick.prototype.buildDots = function () { var _ = this, i, dot; if (_.options.dots === true && _.slideCount > _.options.slidesToShow) { _.$slider.addClass("slick-dotted"); dot = $("<ul />").addClass(_.options.dotsClass); for (i = 0; i <= _.getDotCount(); i += 1) { dot.append($("<li />").append(_.options.customPaging.call(this, _, i))) } _.$dots = dot.appendTo(_.options.appendDots); _.$dots.find("li").first().addClass("slick-active") } }; Slick.prototype.buildOut = function () { var _ = this; _.$slides = _.$slider.children(_.options.slide + ":not(.slick-cloned)").addClass("slick-slide"); _.slideCount = _.$slides.length; _.$slides.each(function (index, element) { $(element).attr("data-slick-index", index).data("originalStyling", $(element).attr("style") || "") }); _.$slider.addClass("slick-slider"); _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent(); _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent(); _.$slideTrack.css("opacity", 0); if (_.options.centerMode === true || _.options.swipeToSlide === true) { _.options.slidesToScroll = 1 } $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading"); _.setupInfinite(); _.buildArrows(); _.buildDots(); _.updateDots(); _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0); if (_.options.draggable === true) { _.$list.addClass("draggable") } }; Slick.prototype.buildRows = function () { var _ = this, a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection; newSlides = document.createDocumentFragment(); originalSlides = _.$slider.children(); if (_.options.rows > 0) { slidesPerSection = _.options.slidesPerRow * _.options.rows; numOfSlides = Math.ceil(originalSlides.length / slidesPerSection); for (a = 0; a < numOfSlides; a++) { var slide = document.createElement("div"); for (b = 0; b < _.options.rows; b++) { var row = document.createElement("div"); for (c = 0; c < _.options.slidesPerRow; c++) { var target = a * slidesPerSection + (b * _.options.slidesPerRow + c); if (originalSlides.get(target)) { row.appendChild(originalSlides.get(target)) } } slide.appendChild(row) } newSlides.appendChild(slide) } _.$slider.empty().append(newSlides); _.$slider.children().children().children().css({ width: 100 / _.options.slidesPerRow + "%", display: "inline-block" }) } }; Slick.prototype.checkResponsive = function (initial, forceUpdate) { var _ = this, breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false; var sliderWidth = _.$slider.width(); var windowWidth = window.innerWidth || $(window).width(); if (_.respondTo === "window") { respondToWidth = windowWidth } else if (_.respondTo === "slider") { respondToWidth = sliderWidth } else if (_.respondTo === "min") { respondToWidth = Math.min(windowWidth, sliderWidth) } if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) { targetBreakpoint = null; for (breakpoint in _.breakpoints) { if (_.breakpoints.hasOwnProperty(breakpoint)) { if (_.originalSettings.mobileFirst === false) { if (respondToWidth < _.breakpoints[breakpoint]) { targetBreakpoint = _.breakpoints[breakpoint] } } else { if (respondToWidth > _.breakpoints[breakpoint]) { targetBreakpoint = _.breakpoints[breakpoint] } } } } if (targetBreakpoint !== null) { if (_.activeBreakpoint !== null) { if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) { _.activeBreakpoint = targetBreakpoint; if (_.breakpointSettings[targetBreakpoint] === "unslick") { _.unslick(targetBreakpoint) } else { _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]); if (initial === true) { _.currentSlide = _.options.initialSlide } _.refresh(initial) } triggerBreakpoint = targetBreakpoint } } else { _.activeBreakpoint = targetBreakpoint; if (_.breakpointSettings[targetBreakpoint] === "unslick") { _.unslick(targetBreakpoint) } else { _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]); if (initial === true) { _.currentSlide = _.options.initialSlide } _.refresh(initial) } triggerBreakpoint = targetBreakpoint } } else { if (_.activeBreakpoint !== null) { _.activeBreakpoint = null; _.options = _.originalSettings; if (initial === true) { _.currentSlide = _.options.initialSlide } _.refresh(initial); triggerBreakpoint = targetBreakpoint } } if (!initial && triggerBreakpoint !== false) { _.$slider.trigger("breakpoint", [_, triggerBreakpoint]) } } }; Slick.prototype.changeSlide = function (event, dontAnimate) { var _ = this, $target = $(event.currentTarget), indexOffset, slideOffset, unevenOffset; if ($target.is("a")) { event.preventDefault() } if (!$target.is("li")) { $target = $target.closest("li") } unevenOffset = _.slideCount % _.options.slidesToScroll !== 0; indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll; switch (event.data.message) { case "previous": slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset; if (_.slideCount > _.options.slidesToShow) { _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate) } break; case "next": slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset; if (_.slideCount > _.options.slidesToShow) { _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate) } break; case "index": var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll; _.slideHandler(_.checkNavigable(index), false, dontAnimate); $target.children().trigger("focus"); break; default: return } }; Slick.prototype.checkNavigable = function (index) { var _ = this, navigables, prevNavigable; navigables = _.getNavigableIndexes(); prevNavigable = 0; if (index > navigables[navigables.length - 1]) { index = navigables[navigables.length - 1] } else { for (var n in navigables) { if (index < navigables[n]) { index = prevNavigable; break } prevNavigable = navigables[n] } } return index }; Slick.prototype.cleanUpEvents = function () { var _ = this; if (_.options.dots && _.$dots !== null) { $("li", _.$dots).off("click.slick", _.changeSlide).off("mouseenter.slick", $.proxy(_.interrupt, _, true)).off("mouseleave.slick", $.proxy(_.interrupt, _, false)); if (_.options.accessibility === true) { _.$dots.off("keydown.slick", _.keyHandler) } } _.$slider.off("focus.slick blur.slick"); if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) { _.$prevArrow && _.$prevArrow.off("click.slick", _.changeSlide); _.$nextArrow && _.$nextArrow.off("click.slick", _.changeSlide); if (_.options.accessibility === true) { _.$prevArrow && _.$prevArrow.off("keydown.slick", _.keyHandler); _.$nextArrow && _.$nextArrow.off("keydown.slick", _.keyHandler) } } _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler); _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler); _.$list.off("touchend.slick mouseup.slick", _.swipeHandler); _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler); _.$list.off("click.slick", _.clickHandler); $(document).off(_.visibilityChange, _.visibility); _.cleanUpSlideEvents(); if (_.options.accessibility === true) { _.$list.off("keydown.slick", _.keyHandler) } if (_.options.focusOnSelect === true) { $(_.$slideTrack).children().off("click.slick", _.selectHandler) } $(window).off("orientationchange.slick.slick-" + _.instanceUid, _.orientationChange); $(window).off("resize.slick.slick-" + _.instanceUid, _.resize); $("[draggable!=true]", _.$slideTrack).off("dragstart", _.preventDefault); $(window).off("load.slick.slick-" + _.instanceUid, _.setPosition) }; Slick.prototype.cleanUpSlideEvents = function () { var _ = this; _.$list.off("mouseenter.slick", $.proxy(_.interrupt, _, true)); _.$list.off("mouseleave.slick", $.proxy(_.interrupt, _, false)) }; Slick.prototype.cleanUpRows = function () { var _ = this, originalSlides; if (_.options.rows > 0) { originalSlides = _.$slides.children().children(); originalSlides.removeAttr("style"); _.$slider.empty().append(originalSlides) } }; Slick.prototype.clickHandler = function (event) { var _ = this; if (_.shouldClick === false) { event.stopImmediatePropagation(); event.stopPropagation(); event.preventDefault() } }; Slick.prototype.destroy = function (refresh) { var _ = this; _.autoPlayClear(); _.touchObject = {}; _.cleanUpEvents(); $(".slick-cloned", _.$slider).detach(); if (_.$dots) { _.$dots.remove() } if (_.$prevArrow && _.$prevArrow.length) { _.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""); if (_.htmlExpr.test(_.options.prevArrow)) { _.$prevArrow.remove() } } if (_.$nextArrow && _.$nextArrow.length) { _.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""); if (_.htmlExpr.test(_.options.nextArrow)) { _.$nextArrow.remove() } } if (_.$slides) { _.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () { $(this).attr("style", $(this).data("originalStyling")) }); _.$slideTrack.children(this.options.slide).detach(); _.$slideTrack.detach(); _.$list.detach(); _.$slider.append(_.$slides) } _.cleanUpRows(); _.$slider.removeClass("slick-slider"); _.$slider.removeClass("slick-initialized"); _.$slider.removeClass("slick-dotted"); _.unslicked = true; if (!refresh) { _.$slider.trigger("destroy", [_]) } }; Slick.prototype.disableTransition = function (slide) { var _ = this, transition = {}; transition[_.transitionType] = ""; if (_.options.fade === false) { _.$slideTrack.css(transition) } else { _.$slides.eq(slide).css(transition) } }; Slick.prototype.fadeSlide = function (slideIndex, callback) { var _ = this; if (_.cssTransitions === false) { _.$slides.eq(slideIndex).css({ zIndex: _.options.zIndex }); _.$slides.eq(slideIndex).animate({ opacity: 1 }, _.options.speed, _.options.easing, callback) } else { _.applyTransition(slideIndex); _.$slides.eq(slideIndex).css({ opacity: 1, zIndex: _.options.zIndex }); if (callback) { setTimeout(function () { _.disableTransition(slideIndex); callback.call() }, _.options.speed) } } }; Slick.prototype.fadeSlideOut = function (slideIndex) { var _ = this; if (_.cssTransitions === false) { _.$slides.eq(slideIndex).animate({ opacity: 0, zIndex: _.options.zIndex - 2 }, _.options.speed, _.options.easing) } else { _.applyTransition(slideIndex); _.$slides.eq(slideIndex).css({ opacity: 0, zIndex: _.options.zIndex - 2 }) } }; Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) { var _ = this; if (filter !== null) { _.$slidesCache = _.$slides; _.unload(); _.$slideTrack.children(this.options.slide).detach(); _.$slidesCache.filter(filter).appendTo(_.$slideTrack); _.reinit() } }; Slick.prototype.focusHandler = function () { var _ = this; _.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function (event) { var $sf = $(this); setTimeout(function () { if (_.options.pauseOnFocus) { if ($sf.is(":focus")) { _.focussed = true; _.autoPlay() } } }, 0) }).on("blur.slick", "*", function (event) { var $sf = $(this); if (_.options.pauseOnFocus) { _.focussed = false; _.autoPlay() } }) }; Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () { var _ = this; return _.currentSlide }; Slick.prototype.getDotCount = function () { var _ = this; var breakPoint = 0; var counter = 0; var pagerQty = 0; if (_.options.infinite === true) { if (_.slideCount <= _.options.slidesToShow) { ++pagerQty } else { while (breakPoint < _.slideCount) { ++pagerQty; breakPoint = counter + _.options.slidesToScroll; counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow } } } else if (_.options.centerMode === true) { pagerQty = _.slideCount } else if (!_.options.asNavFor) { pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll) } else { while (breakPoint < _.slideCount) { ++pagerQty; breakPoint = counter + _.options.slidesToScroll; counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow } } return pagerQty - 1 }; Slick.prototype.getLeft = function (slideIndex) { var _ = this, targetLeft, verticalHeight, verticalOffset = 0, targetSlide, coef; _.slideOffset = 0; verticalHeight = _.$slides.first().outerHeight(true); if (_.options.infinite === true) { if (_.slideCount > _.options.slidesToShow) { _.slideOffset = _.slideWidth * _.options.slidesToShow * -1; coef = -1; if (_.options.vertical === true && _.options.centerMode === true) { if (_.options.slidesToShow === 2) { coef = -1.5 } else if (_.options.slidesToShow === 1) { coef = -2 } } verticalOffset = verticalHeight * _.options.slidesToShow * coef } if (_.slideCount % _.options.slidesToScroll !== 0) { if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) { if (slideIndex > _.slideCount) { _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1; verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1 } else { _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1; verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1 } } } } else { if (slideIndex + _.options.slidesToShow > _.slideCount) { _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth; verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight } } if (_.slideCount <= _.options.slidesToShow) { _.slideOffset = 0; verticalOffset = 0 } if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) { _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2 } else if (_.options.centerMode === true && _.options.infinite === true) { _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth } else if (_.options.centerMode === true) { _.slideOffset = 0; _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) } if (_.options.vertical === false) { targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset } else { targetLeft = slideIndex * verticalHeight * -1 + verticalOffset } if (_.options.variableWidth === true) { if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) { targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex) } else { targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow) } if (_.options.rtl === true) { if (targetSlide[0]) { targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1 } else { targetLeft = 0 } } else { targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0 } if (_.options.centerMode === true) { if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) { targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex) } else { targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow + 1) } if (_.options.rtl === true) { if (targetSlide[0]) { targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1 } else { targetLeft = 0 } } else { targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0 } targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2 } } return targetLeft }; Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) { var _ = this; return _.options[option] }; Slick.prototype.getNavigableIndexes = function () { var _ = this, breakPoint = 0, counter = 0, indexes = [], max; if (_.options.infinite === false) { max = _.slideCount } else { breakPoint = _.options.slidesToScroll * -1; counter = _.options.slidesToScroll * -1; max = _.slideCount * 2 } while (breakPoint < max) { indexes.push(breakPoint); breakPoint = counter + _.options.slidesToScroll; counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow } return indexes }; Slick.prototype.getSlick = function () { return this }; Slick.prototype.getSlideCount = function () { var _ = this, slidesTraversed, swipedSlide, swipeTarget, centerOffset; centerOffset = _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0; swipeTarget = _.swipeLeft * -1 + centerOffset; if (_.options.swipeToSlide === true) { _.$slideTrack.find(".slick-slide").each(function (index, slide) { var slideOuterWidth, slideOffset, slideRightBoundary; slideOuterWidth = $(slide).outerWidth(); slideOffset = slide.offsetLeft; if (_.options.centerMode !== true) { slideOffset += slideOuterWidth / 2 } slideRightBoundary = slideOffset + slideOuterWidth; if (swipeTarget < slideRightBoundary) { swipedSlide = slide; return false } }); slidesTraversed = Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1; return slidesTraversed } else { return _.options.slidesToScroll } }; Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) { var _ = this; _.changeSlide({ data: { message: "index", index: parseInt(slide) } }, dontAnimate) }; Slick.prototype.init = function (creation) { var _ = this; if (!$(_.$slider).hasClass("slick-initialized")) { $(_.$slider).addClass("slick-initialized"); _.buildRows(); _.buildOut(); _.setProps(); _.startLoad(); _.loadSlider(); _.initializeEvents(); _.updateArrows(); _.updateDots(); _.checkResponsive(true); _.focusHandler() } if (creation) { _.$slider.trigger("init", [_]) } if (_.options.accessibility === true) { _.initADA() } if (_.options.autoplay) { _.paused = false; _.autoPlay() } }; Slick.prototype.initADA = function () { var _ = this, numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow), tabControlIndexes = _.getNavigableIndexes().filter(function (val) { return val >= 0 && val < _.slideCount }); _.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }); if (_.$dots !== null) { _.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function (i) { var slideControlIndex = tabControlIndexes.indexOf(i); $(this).attr({ role: "tabpanel", id: "slick-slide" + _.instanceUid + i, tabindex: -1 }); if (slideControlIndex !== -1) { var ariaButtonControl = "slick-slide-control" + _.instanceUid + slideControlIndex; if ($("#" + ariaButtonControl).length) { $(this).attr({ "aria-describedby": ariaButtonControl }) } } }); _.$dots.attr("role", "tablist").find("li").each(function (i) { var mappedSlideIndex = tabControlIndexes[i]; $(this).attr({ role: "presentation" }); $(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + _.instanceUid + i, "aria-controls": "slick-slide" + _.instanceUid + mappedSlideIndex, "aria-label": i + 1 + " of " + numDotGroups, "aria-selected": null, tabindex: "0" }) }).eq(_.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end() } for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) { if (_.options.focusOnChange) { _.$slides.eq(i).attr({ tabindex: "0" }) } else { _.$slides.eq(i).removeAttr("tabindex") } } _.activateADA() }; Slick.prototype.initArrowEvents = function () { var _ = this; if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) { _.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, _.changeSlide); _.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, _.changeSlide); if (_.options.accessibility === true) { _.$prevArrow.on("keydown.slick", _.keyHandler); _.$nextArrow.on("keydown.slick", _.keyHandler) } } }; Slick.prototype.initDotEvents = function () { var _ = this; if (_.options.dots === true && _.slideCount > _.options.slidesToShow) { $("li", _.$dots).on("click.slick", { message: "index" }, _.changeSlide); if (_.options.accessibility === true) { _.$dots.on("keydown.slick", _.keyHandler) } } if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) { $("li", _.$dots).on("mouseenter.slick", $.proxy(_.interrupt, _, true)).on("mouseleave.slick", $.proxy(_.interrupt, _, false)) } }; Slick.prototype.initSlideEvents = function () { var _ = this; if (_.options.pauseOnHover) { _.$list.on("mouseenter.slick", $.proxy(_.interrupt, _, true)); _.$list.on("mouseleave.slick", $.proxy(_.interrupt, _, false)) } }; Slick.prototype.initializeEvents = function () { var _ = this; _.initArrowEvents(); _.initDotEvents(); _.initSlideEvents(); _.$list.on("touchstart.slick mousedown.slick", { action: "start" }, _.swipeHandler); _.$list.on("touchmove.slick mousemove.slick", { action: "move" }, _.swipeHandler); _.$list.on("touchend.slick mouseup.slick", { action: "end" }, _.swipeHandler); _.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, _.swipeHandler); _.$list.on("click.slick", _.clickHandler); $(document).on(_.visibilityChange, $.proxy(_.visibility, _)); if (_.options.accessibility === true) { _.$list.on("keydown.slick", _.keyHandler) } if (_.options.focusOnSelect === true) { $(_.$slideTrack).children().on("click.slick", _.selectHandler) } $(window).on("orientationchange.slick.slick-" + _.instanceUid, $.proxy(_.orientationChange, _)); $(window).on("resize.slick.slick-" + _.instanceUid, $.proxy(_.resize, _)); $("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault); $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition); $(_.setPosition) }; Slick.prototype.initUI = function () { var _ = this; if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) { _.$prevArrow.show(); _.$nextArrow.show() } if (_.options.dots === true && _.slideCount > _.options.slidesToShow) { _.$dots.show() } }; Slick.prototype.keyHandler = function (event) { var _ = this; if (!event.target.tagName.match("TEXTAREA|INPUT|SELECT")) { if (event.keyCode === 37 && _.options.accessibility === true) { _.changeSlide({ data: { message: _.options.rtl === true ? "next" : "previous" } }) } else if (event.keyCode === 39 && _.options.accessibility === true) { _.changeSlide({ data: { message: _.options.rtl === true ? "previous" : "next" } }) } } }; Slick.prototype.lazyLoad = function () { var _ = this, loadRange, cloneRange, rangeStart, rangeEnd; function loadImages(imagesScope) { $("img[data-lazy]", imagesScope).each(function () { var image = $(this), imageSource = $(this).attr("data-lazy"), imageSrcSet = $(this).attr("data-srcset"), imageSizes = $(this).attr("data-sizes") || _.$slider.attr("data-sizes"), imageToLoad = document.createElement("img"); imageToLoad.onload = function () { image.animate({ opacity: 0 }, 100, function () { if (imageSrcSet) { image.attr("srcset", imageSrcSet); if (imageSizes) { image.attr("sizes", imageSizes) } } image.attr("src", imageSource).animate({ opacity: 1 }, 200, function () { image.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading") }); _.$slider.trigger("lazyLoaded", [_, image, imageSource]) }) }; imageToLoad.onerror = function () { image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"); _.$slider.trigger("lazyLoadError", [_, image, imageSource]) }; imageToLoad.src = imageSource }) } if (_.options.centerMode === true) { if (_.options.infinite === true) { rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1); rangeEnd = rangeStart + _.options.slidesToShow + 2 } else { rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1)); rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide } } else { rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide; rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow); if (_.options.fade === true) { if (rangeStart > 0) rangeStart--; if (rangeEnd <= _.slideCount) rangeEnd++ } } loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd); if (_.options.lazyLoad === "anticipated") { var prevSlide = rangeStart - 1, nextSlide = rangeEnd, $slides = _.$slider.find(".slick-slide"); for (var i = 0; i < _.options.slidesToScroll; i++) { if (prevSlide < 0) prevSlide = _.slideCount - 1; loadRange = loadRange.add($slides.eq(prevSlide)); loadRange = loadRange.add($slides.eq(nextSlide)); prevSlide--; nextSlide++ } } loadImages(loadRange); if (_.slideCount <= _.options.slidesToShow) { cloneRange = _.$slider.find(".slick-slide"); loadImages(cloneRange) } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) { cloneRange = _.$slider.find(".slick-cloned").slice(0, _.options.slidesToShow); loadImages(cloneRange) } else if (_.currentSlide === 0) { cloneRange = _.$slider.find(".slick-cloned").slice(_.options.slidesToShow * -1); loadImages(cloneRange) } }; Slick.prototype.loadSlider = function () { var _ = this; _.setPosition(); _.$slideTrack.css({ opacity: 1 }); _.$slider.removeClass("slick-loading"); _.initUI(); if (_.options.lazyLoad === "progressive") { _.progressiveLazyLoad() } }; Slick.prototype.next = Slick.prototype.slickNext = function () { var _ = this; _.changeSlide({ data: { message: "next" } }) }; Slick.prototype.orientationChange = function () { var _ = this; _.checkResponsive(); _.setPosition() }; Slick.prototype.pause = Slick.prototype.slickPause = function () { var _ = this; _.autoPlayClear(); _.paused = true }; Slick.prototype.play = Slick.prototype.slickPlay = function () { var _ = this; _.autoPlay(); _.options.autoplay = true; _.paused = false; _.focussed = false; _.interrupted = false }; Slick.prototype.postSlide = function (index) { var _ = this; if (!_.unslicked) { _.$slider.trigger("afterChange", [_, index]); _.animating = false; if (_.slideCount > _.options.slidesToShow) { _.setPosition() } _.swipeLeft = null; if (_.options.autoplay) { _.autoPlay() } if (_.options.accessibility === true) { _.initADA(); if (_.options.focusOnChange) { var $currentSlide = $(_.$slides.get(_.currentSlide)); $currentSlide.attr("tabindex", 0).focus() } } } }; Slick.prototype.prev = Slick.prototype.slickPrev = function () { var _ = this; _.changeSlide({ data: { message: "previous" } }) }; Slick.prototype.preventDefault = function (event) { event.preventDefault() }; Slick.prototype.progressiveLazyLoad = function (tryCount) { tryCount = tryCount || 1; var _ = this, $imgsToLoad = $("img[data-lazy]", _.$slider), image, imageSource, imageSrcSet, imageSizes, imageToLoad; if ($imgsToLoad.length) { image = $imgsToLoad.first(); imageSource = image.attr("data-lazy"); imageSrcSet = image.attr("data-srcset"); imageSizes = image.attr("data-sizes") || _.$slider.attr("data-sizes"); imageToLoad = document.createElement("img"); imageToLoad.onload = function () { if (imageSrcSet) { image.attr("srcset", imageSrcSet); if (imageSizes) { image.attr("sizes", imageSizes) } } image.attr("src", imageSource).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"); if (_.options.adaptiveHeight === true) { _.setPosition() } _.$slider.trigger("lazyLoaded", [_, image, imageSource]); _.progressiveLazyLoad() }; imageToLoad.onerror = function () { if (tryCount < 3) { setTimeout(function () { _.progressiveLazyLoad(tryCount + 1) }, 500) } else { image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"); _.$slider.trigger("lazyLoadError", [_, image, imageSource]); _.progressiveLazyLoad() } }; imageToLoad.src = imageSource } else { _.$slider.trigger("allImagesLoaded", [_]) } }; Slick.prototype.refresh = function (initializing) { var _ = this, currentSlide, lastVisibleIndex; lastVisibleIndex = _.slideCount - _.options.slidesToShow; if (!_.options.infinite && _.currentSlide > lastVisibleIndex) { _.currentSlide = lastVisibleIndex } if (_.slideCount <= _.options.slidesToShow) { _.currentSlide = 0 } currentSlide = _.currentSlide; _.destroy(true); $.extend(_, _.initials, { currentSlide: currentSlide }); _.init(); if (!initializing) { _.changeSlide({ data: { message: "index", index: currentSlide } }, false) } }; Slick.prototype.registerBreakpoints = function () { var _ = this, breakpoint, currentBreakpoint, l, responsiveSettings = _.options.responsive || null; if ($.type(responsiveSettings) === "array" && responsiveSettings.length) { _.respondTo = _.options.respondTo || "window"; for (breakpoint in responsiveSettings) { l = _.breakpoints.length - 1; if (responsiveSettings.hasOwnProperty(breakpoint)) { currentBreakpoint = responsiveSettings[breakpoint].breakpoint; while (l >= 0) { if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) { _.breakpoints.splice(l, 1) } l-- } _.breakpoints.push(currentBreakpoint); _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings } } _.breakpoints.sort(function (a, b) { return _.options.mobileFirst ? a - b : b - a }) } }; Slick.prototype.reinit = function () { var _ = this; _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide"); _.slideCount = _.$slides.length; if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) { _.currentSlide = _.currentSlide - _.options.slidesToScroll } if (_.slideCount <= _.options.slidesToShow) { _.currentSlide = 0 } _.registerBreakpoints(); _.setProps(); _.setupInfinite(); _.buildArrows(); _.updateArrows(); _.initArrowEvents(); _.buildDots(); _.updateDots(); _.initDotEvents(); _.cleanUpSlideEvents(); _.initSlideEvents(); _.checkResponsive(false, true); if (_.options.focusOnSelect === true) { $(_.$slideTrack).children().on("click.slick", _.selectHandler) } _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0); _.setPosition(); _.focusHandler(); _.paused = !_.options.autoplay; _.autoPlay(); _.$slider.trigger("reInit", [_]) }; Slick.prototype.resize = function () { var _ = this; if ($(window).width() !== _.windowWidth) { clearTimeout(_.windowDelay); _.windowDelay = window.setTimeout(function () { _.windowWidth = $(window).width(); _.checkResponsive(); if (!_.unslicked) { _.setPosition() } }, 50) } }; Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) { var _ = this; if (typeof index === "boolean") { removeBefore = index; index = removeBefore === true ? 0 : _.slideCount - 1 } else { index = removeBefore === true ? --index : index } if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) { return false } _.unload(); if (removeAll === true) { _.$slideTrack.children().remove() } else { _.$slideTrack.children(this.options.slide).eq(index).remove() } _.$slides = _.$slideTrack.children(this.options.slide); _.$slideTrack.children(this.options.slide).detach(); _.$slideTrack.append(_.$slides); _.$slidesCache = _.$slides; _.reinit() }; Slick.prototype.setCSS = function (position) { var _ = this, positionProps = {}, x, y; if (_.options.rtl === true) { position = -position } x = _.positionProp == "left" ? Math.ceil(position) + "px" : "0px"; y = _.positionProp == "top" ? Math.ceil(position) + "px" : "0px"; positionProps[_.positionProp] = position; if (_.transformsEnabled === false) { _.$slideTrack.css(positionProps) } else { positionProps = {}; if (_.cssTransitions === false) { positionProps[_.animType] = "translate(" + x + ", " + y + ")"; _.$slideTrack.css(positionProps) } else { positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)"; _.$slideTrack.css(positionProps) } } }; Slick.prototype.setDimensions = function () { var _ = this; if (_.options.vertical === false) { if (_.options.centerMode === true) { _.$list.css({ padding: "0px " + _.options.centerPadding }) } } else { _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow); if (_.options.centerMode === true) { _.$list.css({ padding: _.options.centerPadding + " 0px" }) } } _.listWidth = _.$list.width(); _.listHeight = _.$list.height(); if (_.options.vertical === false && _.options.variableWidth === false) { _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow); _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length)) } else if (_.options.variableWidth === true) { _.$slideTrack.width(5e3 * _.slideCount) } else { _.slideWidth = Math.ceil(_.listWidth); _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children(".slick-slide").length)) } var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width(); if (_.options.variableWidth === false) _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset) }; Slick.prototype.setFade = function () { var _ = this, targetLeft; _.$slides.each(function (index, element) { targetLeft = _.slideWidth * index * -1; if (_.options.rtl === true) { $(element).css({ position: "relative", right: targetLeft, top: 0, zIndex: _.options.zIndex - 2, opacity: 0 }) } else { $(element).css({ position: "relative", left: targetLeft, top: 0, zIndex: _.options.zIndex - 2, opacity: 0 }) } }); _.$slides.eq(_.currentSlide).css({ zIndex: _.options.zIndex - 1, opacity: 1 }) }; Slick.prototype.setHeight = function () { var _ = this; if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) { var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true); _.$list.css("height", targetHeight) } }; Slick.prototype.setOption = Slick.prototype.slickSetOption = function () { var _ = this, l, item, option, value, refresh = false, type; if ($.type(arguments[0]) === "object") { option = arguments[0]; refresh = arguments[1]; type = "multiple" } else if ($.type(arguments[0]) === "string") { option = arguments[0]; value = arguments[1]; refresh = arguments[2]; if (arguments[0] === "responsive" && $.type(arguments[1]) === "array") { type = "responsive" } else if (typeof arguments[1] !== "undefined") { type = "single" } } if (type === "single") { _.options[option] = value } else if (type === "multiple") { $.each(option, function (opt, val) { _.options[opt] = val }) } else if (type === "responsive") { for (item in value) { if ($.type(_.options.responsive) !== "array") { _.options.responsive = [value[item]] } else { l = _.options.responsive.length - 1; while (l >= 0) { if (_.options.responsive[l].breakpoint === value[item].breakpoint) { _.options.responsive.splice(l, 1) } l-- } _.options.responsive.push(value[item]) } } } if (refresh) { _.unload(); _.reinit() } }; Slick.prototype.setPosition = function () { var _ = this; _.setDimensions(); _.setHeight(); if (_.options.fade === false) { _.setCSS(_.getLeft(_.currentSlide)) } else { _.setFade() } _.$slider.trigger("setPosition", [_]) }; Slick.prototype.setProps = function () { var _ = this, bodyStyle = document.body.style; _.positionProp = _.options.vertical === true ? "top" : "left"; if (_.positionProp === "top") { _.$slider.addClass("slick-vertical") } else { _.$slider.removeClass("slick-vertical") } if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) { if (_.options.useCSS === true) { _.cssTransitions = true } } if (_.options.fade) { if (typeof _.options.zIndex === "number") { if (_.options.zIndex < 3) { _.options.zIndex = 3 } } else { _.options.zIndex = _.defaults.zIndex } } if (bodyStyle.OTransform !== undefined) { _.animType = "OTransform"; _.transformType = "-o-transform"; _.transitionType = "OTransition"; if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false } if (bodyStyle.MozTransform !== undefined) { _.animType = "MozTransform"; _.transformType = "-moz-transform"; _.transitionType = "MozTransition"; if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false } if (bodyStyle.webkitTransform !== undefined) { _.animType = "webkitTransform"; _.transformType = "-webkit-transform"; _.transitionType = "webkitTransition"; if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false } if (bodyStyle.msTransform !== undefined) { _.animType = "msTransform"; _.transformType = "-ms-transform"; _.transitionType = "msTransition"; if (bodyStyle.msTransform === undefined) _.animType = false } if (bodyStyle.transform !== undefined && _.animType !== false) { _.animType = "transform"; _.transformType = "transform"; _.transitionType = "transition" } _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false) }; Slick.prototype.setSlideClasses = function (index) { var _ = this, centerOffset, allSlides, indexOffset, remainder; allSlides = _.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"); _.$slides.eq(index).addClass("slick-current"); if (_.options.centerMode === true) { var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0; centerOffset = Math.floor(_.options.slidesToShow / 2); if (_.options.infinite === true) { if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) { _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass("slick-active").attr("aria-hidden", "false") } else { indexOffset = _.options.slidesToShow + index; allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass("slick-active").attr("aria-hidden", "false") } if (index === 0) { allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass("slick-center") } else if (index === _.slideCount - 1) { allSlides.eq(_.options.slidesToShow).addClass("slick-center") } } _.$slides.eq(index).addClass("slick-center") } else { if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) { _.$slides.slice(index, index + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") } else if (allSlides.length <= _.options.slidesToShow) { allSlides.addClass("slick-active").attr("aria-hidden", "false") } else { remainder = _.slideCount % _.options.slidesToShow; indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index; if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) { allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass("slick-active").attr("aria-hidden", "false") } else { allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") } } } if (_.options.lazyLoad === "ondemand" || _.options.lazyLoad === "anticipated") { _.lazyLoad() } }; Slick.prototype.setupInfinite = function () { var _ = this, i, slideIndex, infiniteCount; if (_.options.fade === true) { _.options.centerMode = false } if (_.options.infinite === true && _.options.fade === false) { slideIndex = null; if (_.slideCount > _.options.slidesToShow) { if (_.options.centerMode === true) { infiniteCount = _.options.slidesToShow + 1 } else { infiniteCount = _.options.slidesToShow } for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) { slideIndex = i - 1; $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned") } for (i = 0; i < infiniteCount + _.slideCount; i += 1) { slideIndex = i; $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned") } _.$slideTrack.find(".slick-cloned").find("[id]").each(function () { $(this).attr("id", "") }) } } }; Slick.prototype.interrupt = function (toggle) { var _ = this; if (!toggle) { _.autoPlay() } _.interrupted = toggle }; Slick.prototype.selectHandler = function (event) { var _ = this; var targetElement = $(event.target).is(".slick-slide") ? $(event.target) : $(event.target).parents(".slick-slide"); var index = parseInt(targetElement.attr("data-slick-index")); if (!index) index = 0; if (_.slideCount <= _.options.slidesToShow) { _.slideHandler(index, false, true); return } _.slideHandler(index) }; Slick.prototype.slideHandler = function (index, sync, dontAnimate) { var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null, _ = this, navTarget; sync = sync || false; if (_.animating === true && _.options.waitForAnimate === true) { return } if (_.options.fade === true && _.currentSlide === index) { return } if (sync === false) { _.asNavFor(index) } targetSlide = index; targetLeft = _.getLeft(targetSlide); slideLeft = _.getLeft(_.currentSlide); _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft; if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) { if (_.options.fade === false) { targetSlide = _.currentSlide; if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) { _.animateSlide(slideLeft, function () { _.postSlide(targetSlide) }) } else { _.postSlide(targetSlide) } } return } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) { if (_.options.fade === false) { targetSlide = _.currentSlide; if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) { _.animateSlide(slideLeft, function () { _.postSlide(targetSlide) }) } else { _.postSlide(targetSlide) } } return } if (_.options.autoplay) { clearInterval(_.autoPlayTimer) } if (targetSlide < 0) { if (_.slideCount % _.options.slidesToScroll !== 0) { animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll } else { animSlide = _.slideCount + targetSlide } } else if (targetSlide >= _.slideCount) { if (_.slideCount % _.options.slidesToScroll !== 0) { animSlide = 0 } else { animSlide = targetSlide - _.slideCount } } else { animSlide = targetSlide } _.animating = true; _.$slider.trigger("beforeChange", [_, _.currentSlide, animSlide]); oldSlide = _.currentSlide; _.currentSlide = animSlide; _.setSlideClasses(_.currentSlide); if (_.options.asNavFor) { navTarget = _.getNavTarget(); navTarget = navTarget.slick("getSlick"); if (navTarget.slideCount <= navTarget.options.slidesToShow) { navTarget.setSlideClasses(_.currentSlide) } } _.updateDots(); _.updateArrows(); if (_.options.fade === true) { if (dontAnimate !== true) { _.fadeSlideOut(oldSlide); _.fadeSlide(animSlide, function () { _.postSlide(animSlide) }) } else { _.postSlide(animSlide) } _.animateHeight(); return } if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) { _.animateSlide(targetLeft, function () { _.postSlide(animSlide) }) } else { _.postSlide(animSlide) } }; Slick.prototype.startLoad = function () { var _ = this; if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) { _.$prevArrow.hide(); _.$nextArrow.hide() } if (_.options.dots === true && _.slideCount > _.options.slidesToShow) { _.$dots.hide() } _.$slider.addClass("slick-loading") }; Slick.prototype.swipeDirection = function () { var xDist, yDist, r, swipeAngle, _ = this; xDist = _.touchObject.startX - _.touchObject.curX; yDist = _.touchObject.startY - _.touchObject.curY; r = Math.atan2(yDist, xDist); swipeAngle = Math.round(r * 180 / Math.PI); if (swipeAngle < 0) { swipeAngle = 360 - Math.abs(swipeAngle) } if (swipeAngle <= 45 && swipeAngle >= 0) { return _.options.rtl === false ? "left" : "right" } if (swipeAngle <= 360 && swipeAngle >= 315) { return _.options.rtl === false ? "left" : "right" } if (swipeAngle >= 135 && swipeAngle <= 225) { return _.options.rtl === false ? "right" : "left" } if (_.options.verticalSwiping === true) { if (swipeAngle >= 35 && swipeAngle <= 135) { return "down" } else { return "up" } } return "vertical" }; Slick.prototype.swipeEnd = function (event) { var _ = this, slideCount, direction; _.dragging = false; _.swiping = false; if (_.scrolling) { _.scrolling = false; return false } _.interrupted = false; _.shouldClick = _.touchObject.swipeLength > 10 ? false : true; if (_.touchObject.curX === undefined) { return false } if (_.touchObject.edgeHit === true) { _.$slider.trigger("edge", [_, _.swipeDirection()]) } if (_.touchObject.swipeLength >= _.touchObject.minSwipe) { direction = _.swipeDirection(); switch (direction) { case "left": case "down": slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount(); _.currentDirection = 0; break; case "right": case "up": slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount(); _.currentDirection = 1; break; default: }if (direction != "vertical") { _.slideHandler(slideCount); _.touchObject = {}; _.$slider.trigger("swipe", [_, direction]) } } else { if (_.touchObject.startX !== _.touchObject.curX) { _.slideHandler(_.currentSlide); _.touchObject = {} } } }; Slick.prototype.swipeHandler = function (event) { var _ = this; if (_.options.swipe === false || "ontouchend" in document && _.options.swipe === false) { return } else if (_.options.draggable === false && event.type.indexOf("mouse") !== -1) { return } _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1; _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold; if (_.options.verticalSwiping === true) { _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold } switch (event.data.action) { case "start": _.swipeStart(event); break; case "move": _.swipeMove(event); break; case "end": _.swipeEnd(event); break } }; Slick.prototype.swipeMove = function (event) { var _ = this, edgeWasHit = false, curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength; touches = event.originalEvent !== undefined ? event.originalEvent.touches : null; if (!_.dragging || _.scrolling || touches && touches.length !== 1) { return false } curLeft = _.getLeft(_.currentSlide); _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX; _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY; _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2))); verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2))); if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) { _.scrolling = true; return false } if (_.options.verticalSwiping === true) { _.touchObject.swipeLength = verticalSwipeLength } swipeDirection = _.swipeDirection(); if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) { _.swiping = true; event.preventDefault() } positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1); if (_.options.verticalSwiping === true) { positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1 } swipeLength = _.touchObject.swipeLength; _.touchObject.edgeHit = false; if (_.options.infinite === false) { if (_.currentSlide === 0 && swipeDirection === "right" || _.currentSlide >= _.getDotCount() && swipeDirection === "left") { swipeLength = _.touchObject.swipeLength * _.options.edgeFriction; _.touchObject.edgeHit = true } } if (_.options.vertical === false) { _.swipeLeft = curLeft + swipeLength * positionOffset } else { _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset } if (_.options.verticalSwiping === true) { _.swipeLeft = curLeft + swipeLength * positionOffset } if (_.options.fade === true || _.options.touchMove === false) { return false } if (_.animating === true) { _.swipeLeft = null; return false } _.setCSS(_.swipeLeft) }; Slick.prototype.swipeStart = function (event) { var _ = this, touches; _.interrupted = true; if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) { _.touchObject = {}; return false } if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) { touches = event.originalEvent.touches[0] } _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX; _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY; _.dragging = true }; Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () { var _ = this; if (_.$slidesCache !== null) { _.unload(); _.$slideTrack.children(this.options.slide).detach(); _.$slidesCache.appendTo(_.$slideTrack); _.reinit() } }; Slick.prototype.unload = function () { var _ = this; $(".slick-cloned", _.$slider).remove(); if (_.$dots) { _.$dots.remove() } if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) { _.$prevArrow.remove() } if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) { _.$nextArrow.remove() } _.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "") }; Slick.prototype.unslick = function (fromBreakpoint) { var _ = this; _.$slider.trigger("unslick", [_, fromBreakpoint]); _.destroy() }; Slick.prototype.updateArrows = function () { var _ = this, centerOffset; centerOffset = Math.floor(_.options.slidesToShow / 2); if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) { _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"); _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"); if (_.currentSlide === 0) { _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"); _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false") } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) { _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"); _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false") } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) { _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"); _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false") } } }; Slick.prototype.updateDots = function () { var _ = this; if (_.$dots !== null) { _.$dots.find("li").removeClass("slick-active").end(); _.$dots.find("li").eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass("slick-active") } }; Slick.prototype.visibility = function () { var _ = this; if (_.options.autoplay) { if (document[_.hidden]) { _.interrupted = true } else { _.interrupted = false } } }; $.fn.slick = function () { var _ = this, opt = arguments[0], args = Array.prototype.slice.call(arguments, 1), l = _.length, i, ret; for (i = 0; i < l; i++) { if (typeof opt == "object" || typeof opt == "undefined") _[i].slick = new Slick(_[i], opt); else ret = _[i].slick[opt].apply(_[i].slick, args); if (typeof ret != "undefined") return ret } return _ } });

// enquire.js v2.1.2 | Awesome Media Queries in JavaScript
!function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){d(b)&&(b={match:b}),h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
/*!
handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
var Handlebars=function(){var e=function(){"use strict";function t(e){this.string=e}var e;t.prototype.toString=function(){return""+this.string};e=t;return e}();var t=function(e){"use strict";function o(e){return r[e]||"&"}function u(e,t){for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n)){e[n]=t[n]}}}function c(e){if(e instanceof n){return e.toString()}else if(!e&&e!==0){return""}e=""+e;if(!s.test(e)){return e}return e.replace(i,o)}function h(e){if(!e&&e!==0){return true}else if(l(e)&&e.length===0){return true}else{return false}}var t={};var n=e;var r={"&":"&","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};var i=/[&<>"'`]/g;var s=/[&<>"'`]/;t.extend=u;var a=Object.prototype.toString;t.toString=a;var f=function(e){return typeof e==="function"};if(f(/x/)){f=function(e){return typeof e==="function"&&a.call(e)==="[object Function]"}}var f;t.isFunction=f;var l=Array.isArray||function(e){return e&&typeof e==="object"?a.call(e)==="[object Array]":false};t.isArray=l;t.escapeExpression=c;t.isEmpty=h;return t}(e);var n=function(){"use strict";function n(e,n){var r;if(n&&n.firstLine){r=n.firstLine;e+=" - "+r+":"+n.firstColumn}var i=Error.prototype.constructor.call(this,e);for(var s=0;s<t.length;s++){this[t[s]]=i[t[s]]}if(r){this.lineNumber=r;this.column=n.firstColumn}}var e;var t=["description","fileName","lineNumber","message","name","number","stack"];n.prototype=new Error;e=n;return e}();var r=function(e,t){"use strict";function h(e,t){this.helpers=e||{};this.partials=t||{};p(this)}function p(e){e.registerHelper("helperMissing",function(e){if(arguments.length===2){return undefined}else{throw new i("Missing helper: '"+e+"'")}});e.registerHelper("blockHelperMissing",function(t,n){var r=n.inverse||function(){},i=n.fn;if(f(t)){t=t.call(this)}if(t===true){return i(this)}else if(t===false||t==null){return r(this)}else if(a(t)){if(t.length>0){return e.helpers.each(t,n)}else{return r(this)}}else{return i(t)}});e.registerHelper("each",function(e,t){var n=t.fn,r=t.inverse;var i=0,s="",o;if(f(e)){e=e.call(this)}if(t.data){o=m(t.data)}if(e&&typeof e==="object"){if(a(e)){for(var u=e.length;i<u;i++){if(o){o.index=i;o.first=i===0;o.last=i===e.length-1}s=s+n(e[i],{data:o})}}else{for(var l in e){if(e.hasOwnProperty(l)){if(o){o.key=l;o.index=i;o.first=i===0}s=s+n(e[l],{data:o});i++}}}}if(i===0){s=r(this)}return s});e.registerHelper("if",function(e,t){if(f(e)){e=e.call(this)}if(!t.hash.includeZero&&!e||r.isEmpty(e)){return t.inverse(this)}else{return t.fn(this)}});e.registerHelper("unless",function(t,n){return e.helpers["if"].call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})});e.registerHelper("with",function(e,t){if(f(e)){e=e.call(this)}if(!r.isEmpty(e))return t.fn(e)});e.registerHelper("log",function(t,n){var r=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;e.log(r,t)})}function v(e,t){d.log(e,t)}var n={};var r=e;var i=t;var s="1.3.0";n.VERSION=s;var o=4;n.COMPILER_REVISION=o;var u={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};n.REVISION_CHANGES=u;var a=r.isArray,f=r.isFunction,l=r.toString,c="[object Object]";n.HandlebarsEnvironment=h;h.prototype={constructor:h,logger:d,log:v,registerHelper:function(e,t,n){if(l.call(e)===c){if(n||t){throw new i("Arg not supported with multiple helpers")}r.extend(this.helpers,e)}else{if(n){t.not=n}this.helpers[e]=t}},registerPartial:function(e,t){if(l.call(e)===c){r.extend(this.partials,e)}else{this.partials[e]=t}}};var d={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,t){if(d.level<=e){var n=d.methodMap[e];if(typeof console!=="undefined"&&console[n]){console[n].call(console,t)}}}};n.logger=d;n.log=v;var m=function(e){var t={};r.extend(t,e);return t};n.createFrame=m;return n}(t,n);var i=function(e,t,n){"use strict";function a(e){var t=e&&e[0]||1,n=o;if(t!==n){if(t<n){var r=u[n],i=u[t];throw new s("Template was precompiled with an older version of Handlebars than the current runtime. "+"Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}else{throw new s("Template was precompiled with a newer version of Handlebars than the current runtime. "+"Please update your runtime to a newer version ("+e[1]+").")}}}function f(e,t){if(!t){throw new s("No environment passed to template")}var n=function(e,n,r,i,o,u){var a=t.VM.invokePartial.apply(this,arguments);if(a!=null){return a}if(t.compile){var f={helpers:i,partials:o,data:u};o[n]=t.compile(e,{data:u!==undefined},t);return o[n](r,f)}else{throw new s("The partial "+n+" could not be compiled when running in runtime-only mode")}};var r={escapeExpression:i.escapeExpression,invokePartial:n,programs:[],program:function(e,t,n){var r=this.programs[e];if(n){r=c(e,t,n)}else if(!r){r=this.programs[e]=c(e,t)}return r},merge:function(e,t){var n=e||t;if(e&&t&&e!==t){n={};i.extend(n,t);i.extend(n,e)}return n},programWithDepth:t.VM.programWithDepth,noop:t.VM.noop,compilerInfo:null};return function(n,i){i=i||{};var s=i.partial?i:t,o,u;if(!i.partial){o=i.helpers;u=i.partials}var a=e.call(r,s,n,o,u,i.data);if(!i.partial){t.VM.checkRevision(r.compilerInfo)}return a}}function l(e,t,n){var r=Array.prototype.slice.call(arguments,3);var i=function(e,i){i=i||{};return t.apply(this,[e,i.data||n].concat(r))};i.program=e;i.depth=r.length;return i}function c(e,t,n){var r=function(e,r){r=r||{};return t(e,r.data||n)};r.program=e;r.depth=0;return r}function h(e,t,n,r,i,o){var u={partial:true,helpers:r,partials:i,data:o};if(e===undefined){throw new s("The partial "+t+" could not be found")}else if(e instanceof Function){return e(n,u)}}function p(){return""}var r={};var i=e;var s=t;var o=n.COMPILER_REVISION;var u=n.REVISION_CHANGES;r.checkRevision=a;r.template=f;r.programWithDepth=l;r.program=c;r.invokePartial=h;r.noop=p;return r}(t,n,r);var s=function(e,t,n,r,i){"use strict";var s;var o=e;var u=t;var a=n;var f=r;var l=i;var c=function(){var e=new o.HandlebarsEnvironment;f.extend(e,o);e.SafeString=u;e.Exception=a;e.Utils=f;e.VM=l;e.template=function(t){return l.template(t,e)};return e};var h=c();h.create=c;s=h;return s}(r,e,n,t,i);var o=function(e){"use strict";function r(e){e=e||{};this.firstLine=e.first_line;this.firstColumn=e.first_column;this.lastColumn=e.last_column;this.lastLine=e.last_line}var t;var n=e;var i={ProgramNode:function(e,t,n,s){var o,u;if(arguments.length===3){s=n;n=null}else if(arguments.length===2){s=t;t=null}r.call(this,s);this.type="program";this.statements=e;this.strip={};if(n){u=n[0];if(u){o={first_line:u.firstLine,last_line:u.lastLine,last_column:u.lastColumn,first_column:u.firstColumn};this.inverse=new i.ProgramNode(n,t,o)}else{this.inverse=new i.ProgramNode(n,t)}this.strip.right=t.left}else if(t){this.strip.left=t.right}},MustacheNode:function(e,t,n,s,o){r.call(this,o);this.type="mustache";this.strip=s;if(n!=null&&n.charAt){var u=n.charAt(3)||n.charAt(2);this.escaped=u!=="{"&&u!=="&"}else{this.escaped=!!n}if(e instanceof i.SexprNode){this.sexpr=e}else{this.sexpr=new i.SexprNode(e,t)}this.sexpr.isRoot=true;this.id=this.sexpr.id;this.params=this.sexpr.params;this.hash=this.sexpr.hash;this.eligibleHelper=this.sexpr.eligibleHelper;this.isHelper=this.sexpr.isHelper},SexprNode:function(e,t,n){r.call(this,n);this.type="sexpr";this.hash=t;var i=this.id=e[0];var s=this.params=e.slice(1);var o=this.eligibleHelper=i.isSimple;this.isHelper=o&&(s.length||t)},PartialNode:function(e,t,n,i){r.call(this,i);this.type="partial";this.partialName=e;this.context=t;this.strip=n},BlockNode:function(e,t,i,s,o){r.call(this,o);if(e.sexpr.id.original!==s.path.original){throw new n(e.sexpr.id.original+" doesn't match "+s.path.original,this)}this.type="block";this.mustache=e;this.program=t;this.inverse=i;this.strip={left:e.strip.left,right:s.strip.right};(t||i).strip.left=e.strip.right;(i||t).strip.right=s.strip.left;if(i&&!t){this.isInverse=true}},ContentNode:function(e,t){r.call(this,t);this.type="content";this.string=e},HashNode:function(e,t){r.call(this,t);this.type="hash";this.pairs=e},IdNode:function(e,t){r.call(this,t);this.type="ID";var i="",s=[],o=0;for(var u=0,a=e.length;u<a;u++){var f=e[u].part;i+=(e[u].separator||"")+f;if(f===".."||f==="."||f==="this"){if(s.length>0){throw new n("Invalid path: "+i,this)}else if(f===".."){o++}else{this.isScoped=true}}else{s.push(f)}}this.original=i;this.parts=s;this.string=s.join(".");this.depth=o;this.isSimple=e.length===1&&!this.isScoped&&o===0;this.stringModeValue=this.string},PartialNameNode:function(e,t){r.call(this,t);this.type="PARTIAL_NAME";this.name=e.original},DataNode:function(e,t){r.call(this,t);this.type="DATA";this.id=e},StringNode:function(e,t){r.call(this,t);this.type="STRING";this.original=this.string=this.stringModeValue=e},IntegerNode:function(e,t){r.call(this,t);this.type="INTEGER";this.original=this.integer=e;this.stringModeValue=Number(e)},BooleanNode:function(e,t){r.call(this,t);this.type="BOOLEAN";this.bool=e;this.stringModeValue=e==="true"},CommentNode:function(e,t){r.call(this,t);this.type="comment";this.comment=e}};t=i;return t}(n);var u=function(){"use strict";var e;var t=function(){function t(e,t){return{left:e.charAt(2)==="~",right:t.charAt(0)==="~"||t.charAt(1)==="~"}}function r(){this.yy={}}var e={trace:function(){},yy:{},symbols_:{error:2,root:3,statements:4,EOF:5,program:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,sexpr:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,CLOSE_UNESCAPED:24,OPEN_PARTIAL:25,partialName:26,partial_option0:27,sexpr_repetition0:28,sexpr_option0:29,dataName:30,param:31,STRING:32,INTEGER:33,BOOLEAN:34,OPEN_SEXPR:35,CLOSE_SEXPR:36,hash:37,hash_repetition_plus0:38,hashSegment:39,ID:40,EQUALS:41,DATA:42,pathSegments:43,SEP:44,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},productions_:[0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],performAction:function(n,r,i,s,o,u,a){var f=u.length-1;switch(o){case 1:return new s.ProgramNode(u[f-1],this._$);break;case 2:return new s.ProgramNode([],this._$);break;case 3:this.$=new s.ProgramNode([],u[f-1],u[f],this._$);break;case 4:this.$=new s.ProgramNode(u[f-2],u[f-1],u[f],this._$);break;case 5:this.$=new s.ProgramNode(u[f-1],u[f],[],this._$);break;case 6:this.$=new s.ProgramNode(u[f],this._$);break;case 7:this.$=new s.ProgramNode([],this._$);break;case 8:this.$=new s.ProgramNode([],this._$);break;case 9:this.$=[u[f]];break;case 10:u[f-1].push(u[f]);this.$=u[f-1];break;case 11:this.$=new s.BlockNode(u[f-2],u[f-1].inverse,u[f-1],u[f],this._$);break;case 12:this.$=new s.BlockNode(u[f-2],u[f-1],u[f-1].inverse,u[f],this._$);break;case 13:this.$=u[f];break;case 14:this.$=u[f];break;case 15:this.$=new s.ContentNode(u[f],this._$);break;case 16:this.$=new s.CommentNode(u[f],this._$);break;case 17:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 18:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 19:this.$={path:u[f-1],strip:t(u[f-2],u[f])};break;case 20:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 21:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 22:this.$=new s.PartialNode(u[f-2],u[f-1],t(u[f-3],u[f]),this._$);break;case 23:this.$=t(u[f-1],u[f]);break;case 24:this.$=new s.SexprNode([u[f-2]].concat(u[f-1]),u[f],this._$);break;case 25:this.$=new s.SexprNode([u[f]],null,this._$);break;case 26:this.$=u[f];break;case 27:this.$=new s.StringNode(u[f],this._$);break;case 28:this.$=new s.IntegerNode(u[f],this._$);break;case 29:this.$=new s.BooleanNode(u[f],this._$);break;case 30:this.$=u[f];break;case 31:u[f-1].isHelper=true;this.$=u[f-1];break;case 32:this.$=new s.HashNode(u[f],this._$);break;case 33:this.$=[u[f-2],u[f]];break;case 34:this.$=new s.PartialNameNode(u[f],this._$);break;case 35:this.$=new s.PartialNameNode(new s.StringNode(u[f],this._$),this._$);break;case 36:this.$=new s.PartialNameNode(new s.IntegerNode(u[f],this._$));break;case 37:this.$=new s.DataNode(u[f],this._$);break;case 38:this.$=new s.IdNode(u[f],this._$);break;case 39:u[f-2].push({part:u[f],separator:u[f-1]});this.$=u[f-2];break;case 40:this.$=[{part:u[f]}];break;case 43:this.$=[];break;case 44:u[f-1].push(u[f]);break;case 47:this.$=[u[f]];break;case 48:u[f-1].push(u[f]);break}},table:[{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],defaultActions:{3:[2,2],16:[2,1],50:[2,42]},parseError:function(t,n){throw new Error(t)},parse:function(t){function v(e){r.length=r.length-2*e;i.length=i.length-e;s.length=s.length-e}function m(){var e;e=n.lexer.lex()||1;if(typeof e!=="number"){e=n.symbols_[e]||e}return e}var n=this,r=[0],i=[null],s=[],o=this.table,u="",a=0,f=0,l=0,c=2,h=1;this.lexer.setInput(t);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;this.yy.parser=this;if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc={};var p=this.lexer.yylloc;s.push(p);var d=this.lexer.options&&this.lexer.options.ranges;if(typeof this.yy.parseError==="function")this.parseError=this.yy.parseError;var g,y,b,w,E,S,x={},T,N,C,k;while(true){b=r[r.length-1];if(this.defaultActions[b]){w=this.defaultActions[b]}else{if(g===null||typeof g=="undefined"){g=m()}w=o[b]&&o[b][g]}if(typeof w==="undefined"||!w.length||!w[0]){var L="";if(!l){k=[];for(T in o[b])if(this.terminals_[T]&&T>2){k.push("'"+this.terminals_[T]+"'")}if(this.lexer.showPosition){L="Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+k.join(", ")+", got '"+(this.terminals_[g]||g)+"'"}else{L="Parse error on line "+(a+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'")}this.parseError(L,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:p,expected:k})}}if(w[0]instanceof Array&&w.length>1){throw new Error("Parse Error: multiple actions possible at state: "+b+", token: "+g)}switch(w[0]){case 1:r.push(g);i.push(this.lexer.yytext);s.push(this.lexer.yylloc);r.push(w[1]);g=null;if(!y){f=this.lexer.yyleng;u=this.lexer.yytext;a=this.lexer.yylineno;p=this.lexer.yylloc;if(l>0)l--}else{g=y;y=null}break;case 2:N=this.productions_[w[1]][1];x.$=i[i.length-N];x._$={first_line:s[s.length-(N||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(N||1)].first_column,last_column:s[s.length-1].last_column};if(d){x._$.range=[s[s.length-(N||1)].range[0],s[s.length-1].range[1]]}S=this.performAction.call(x,u,f,a,this.yy,w[1],i,s);if(typeof S!=="undefined"){return S}if(N){r=r.slice(0,-1*N*2);i=i.slice(0,-1*N);s=s.slice(0,-1*N)}r.push(this.productions_[w[1]][0]);i.push(x.$);s.push(x._$);C=o[r[r.length-2]][r[r.length-1]];r.push(C);break;case 3:return true}}return true}};var n=function(){var e={EOF:1,parseError:function(t,n){if(this.yy.parser){this.yy.parser.parseError(t,n)}else{throw new Error(t)}},setInput:function(e){this._input=e;this._more=this._less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};if(this.options.ranges)this.yylloc.range=[0,0];this.offset=0;return this},input:function(){var e=this._input[0];this.yytext+=e;this.yyleng++;this.offset++;this.match+=e;this.matched+=e;var t=e.match(/(?:\r\n?|\n).*/g);if(t){this.yylineno++;this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges)this.yylloc.range[1]++;this._input=this._input.slice(1);return e},unput:function(e){var t=e.length;var n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-t-1);this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);if(n.length-1)this.yylineno-=n.length-1;var i=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t};if(this.options.ranges){this.yylloc.range=[i[0],i[0]+this.yyleng-t]}return this},more:function(){this._more=true;return this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;if(e.length<20){e+=this._input.substr(0,20-e.length)}return(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput();var t=(new Array(e.length+1)).join("-");return e+this.upcomingInput()+"\n"+t+"^"},next:function(){if(this.done){return this.EOF}if(!this._input)this.done=true;var e,t,n,r,i,s;if(!this._more){this.yytext="";this.match=""}var o=this._currentRules();for(var u=0;u<o.length;u++){n=this._input.match(this.rules[o[u]]);if(n&&(!t||n[0].length>t[0].length)){t=n;r=u;if(!this.options.flex)break}}if(t){s=t[0].match(/(?:\r\n?|\n).*/g);if(s)this.yylineno+=s.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length};this.yytext+=t[0];this.match+=t[0];this.matches=t;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false;this._input=this._input.slice(t[0].length);this.matched+=t[0];e=this.performAction.call(this,this.yy,this,o[r],this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input)this.done=false;if(e)return e;else return}if(this._input===""){return this.EOF}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function(){var t=this.next();if(typeof t!=="undefined"){return t}else{return this.lex()}},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)}};e.options={};e.performAction=function(t,n,r,i){function s(e,t){return n.yytext=n.yytext.substr(e,n.yyleng-t)}var o=i;switch(r){case 0:if(n.yytext.slice(-2)==="\\\\"){s(0,1);this.begin("mu")}else if(n.yytext.slice(-1)==="\\"){s(0,1);this.begin("emu")}else{this.begin("mu")}if(n.yytext)return 14;break;case 1:return 14;break;case 2:this.popState();return 14;break;case 3:s(0,4);this.popState();return 15;break;case 4:return 35;break;case 5:return 36;break;case 6:return 25;break;case 7:return 16;break;case 8:return 20;break;case 9:return 19;break;case 10:return 19;break;case 11:return 23;break;case 12:return 22;break;case 13:this.popState();this.begin("com");break;case 14:s(3,5);this.popState();return 15;break;case 15:return 22;break;case 16:return 41;break;case 17:return 40;break;case 18:return 40;break;case 19:return 44;break;case 20:break;case 21:this.popState();return 24;break;case 22:this.popState();return 18;break;case 23:n.yytext=s(1,2).replace(/\\"/g,'"');return 32;break;case 24:n.yytext=s(1,2).replace(/\\'/g,"'");return 32;break;case 25:return 42;break;case 26:return 34;break;case 27:return 34;break;case 28:return 33;break;case 29:return 40;break;case 30:n.yytext=s(1,2);return 40;break;case 31:return"INVALID";break;case 32:return 5;break}};e.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];e.conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[3],inclusive:false},INITIAL:{rules:[0,1,32],inclusive:true}};return e}();e.lexer=n;r.prototype=e;e.Parser=r;return new r}();e=t;return e}();var a=function(e,t){"use strict";function s(e){if(e.constructor===i.ProgramNode){return e}r.yy=i;return r.parse(e)}var n={};var r=e;var i=t;n.parser=r;n.parse=s;return n}(u,o);var f=function(e){"use strict";function r(){}function i(e,t,r){if(e==null||typeof e!=="string"&&e.constructor!==r.AST.ProgramNode){throw new n("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e)}t=t||{};if(!("data"in t)){t.data=true}var i=r.parse(e);var s=(new r.Compiler).compile(i,t);return(new r.JavaScriptCompiler).compile(s,t)}function s(e,t,r){function s(){var n=r.parse(e);var i=(new r.Compiler).compile(n,t);var s=(new r.JavaScriptCompiler).compile(i,t,undefined,true);return r.template(s)}if(e==null||typeof e!=="string"&&e.constructor!==r.AST.ProgramNode){throw new n("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e)}t=t||{};if(!("data"in t)){t.data=true}var i;return function(e,t){if(!i){i=s()}return i.call(this,e,t)}}var t={};var n=e;t.Compiler=r;r.prototype={compiler:r,disassemble:function(){var e=this.opcodes,t,n=[],r,i;for(var s=0,o=e.length;s<o;s++){t=e[s];if(t.opcode==="DECLARE"){n.push("DECLARE "+t.name+"="+t.value)}else{r=[];for(var u=0;u<t.args.length;u++){i=t.args[u];if(typeof i==="string"){i='"'+i.replace("\n","\\n")+'"'}r.push(i)}n.push(t.opcode+" "+r.join(" "))}}return n.join("\n")},equals:function(e){var t=this.opcodes.length;if(e.opcodes.length!==t){return false}for(var n=0;n<t;n++){var r=this.opcodes[n],i=e.opcodes[n];if(r.opcode!==i.opcode||r.args.length!==i.args.length){return false}for(var s=0;s<r.args.length;s++){if(r.args[s]!==i.args[s]){return false}}}t=this.children.length;if(e.children.length!==t){return false}for(n=0;n<t;n++){if(!this.children[n].equals(e.children[n])){return false}}return true},guid:0,compile:function(e,t){this.opcodes=[];this.children=[];this.depths={list:[]};this.options=t;var n=this.options.knownHelpers;this.options.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true};if(n){for(var r in n){this.options.knownHelpers[r]=n[r]}}return this.accept(e)},accept:function(e){var t=e.strip||{},n;if(t.left){this.opcode("strip")}n=this[e.type](e);if(t.right){this.opcode("strip")}return n},program:function(e){var t=e.statements;for(var n=0,r=t.length;n<r;n++){this.accept(t[n])}this.isSimple=r===1;this.depths.list=this.depths.list.sort(function(e,t){return e-t});return this},compileProgram:function(e){var t=(new this.compiler).compile(e,this.options);var n=this.guid++,r;this.usePartial=this.usePartial||t.usePartial;this.children[n]=t;for(var i=0,s=t.depths.list.length;i<s;i++){r=t.depths.list[i];if(r<2){continue}else{this.addDepth(r-1)}}return n},block:function(e){var t=e.mustache,n=e.program,r=e.inverse;if(n){n=this.compileProgram(n)}if(r){r=this.compileProgram(r)}var i=t.sexpr;var s=this.classifySexpr(i);if(s==="helper"){this.helperSexpr(i,n,r)}else if(s==="simple"){this.simpleSexpr(i);this.opcode("pushProgram",n);this.opcode("pushProgram",r);this.opcode("emptyHash");this.opcode("blockValue")}else{this.ambiguousSexpr(i,n,r);this.opcode("pushProgram",n);this.opcode("pushProgram",r);this.opcode("emptyHash");this.opcode("ambiguousBlockValue")}this.opcode("append")},hash:function(e){var t=e.pairs,n,r;this.opcode("pushHash");for(var i=0,s=t.length;i<s;i++){n=t[i];r=n[1];if(this.options.stringParams){if(r.depth){this.addDepth(r.depth)}this.opcode("getContext",r.depth||0);this.opcode("pushStringParam",r.stringModeValue,r.type);if(r.type==="sexpr"){this.sexpr(r)}}else{this.accept(r)}this.opcode("assignToHash",n[0])}this.opcode("popHash")},partial:function(e){var t=e.partialName;this.usePartial=true;if(e.context){this.ID(e.context)}else{this.opcode("push","depth0")}this.opcode("invokePartial",t.name);this.opcode("append")},content:function(e){this.opcode("appendContent",e.string)},mustache:function(e){this.sexpr(e.sexpr);if(e.escaped&&!this.options.noEscape){this.opcode("appendEscaped")}else{this.opcode("append")}},ambiguousSexpr:function(e,t,n){var r=e.id,i=r.parts[0],s=t!=null||n!=null;this.opcode("getContext",r.depth);this.opcode("pushProgram",t);this.opcode("pushProgram",n);this.opcode("invokeAmbiguous",i,s)},simpleSexpr:function(e){var t=e.id;if(t.type==="DATA"){this.DATA(t)}else if(t.parts.length){this.ID(t)}else{this.addDepth(t.depth);this.opcode("getContext",t.depth);this.opcode("pushContext")}this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,r){var i=this.setupFullMustacheParams(e,t,r),s=e.id.parts[0];if(this.options.knownHelpers[s]){this.opcode("invokeKnownHelper",i.length,s)}else if(this.options.knownHelpersOnly){throw new n("You specified knownHelpersOnly, but used the unknown helper "+s,e)}else{this.opcode("invokeHelper",i.length,s,e.isRoot)}},sexpr:function(e){var t=this.classifySexpr(e);if(t==="simple"){this.simpleSexpr(e)}else if(t==="helper"){this.helperSexpr(e)}else{this.ambiguousSexpr(e)}},ID:function(e){this.addDepth(e.depth);this.opcode("getContext",e.depth);var t=e.parts[0];if(!t){this.opcode("pushContext")}else{this.opcode("lookupOnContext",e.parts[0])}for(var n=1,r=e.parts.length;n<r;n++){this.opcode("lookup",e.parts[n])}},DATA:function(e){this.options.data=true;if(e.id.isScoped||e.id.depth){throw new n("Scoped data references are not supported: "+e.original,e)}this.opcode("lookupData");var t=e.id.parts;for(var r=0,i=t.length;r<i;r++){this.opcode("lookup",t[r])}},STRING:function(e){this.opcode("pushString",e.string)},INTEGER:function(e){this.opcode("pushLiteral",e.integer)},BOOLEAN:function(e){this.opcode("pushLiteral",e.bool)},comment:function(){},opcode:function(e){this.opcodes.push({opcode:e,args:[].slice.call(arguments,1)})},declare:function(e,t){this.opcodes.push({opcode:"DECLARE",name:e,value:t})},addDepth:function(e){if(e===0){return}if(!this.depths[e]){this.depths[e]=true;this.depths.list.push(e)}},classifySexpr:function(e){var t=e.isHelper;var n=e.eligibleHelper;var r=this.options;if(n&&!t){var i=e.id.parts[0];if(r.knownHelpers[i]){t=true}else if(r.knownHelpersOnly){n=false}}if(t){return"helper"}else if(n){return"ambiguous"}else{return"simple"}},pushParams:function(e){var t=e.length,n;while(t--){n=e[t];if(this.options.stringParams){if(n.depth){this.addDepth(n.depth)}this.opcode("getContext",n.depth||0);this.opcode("pushStringParam",n.stringModeValue,n.type);if(n.type==="sexpr"){this.sexpr(n)}}else{this[n.type](n)}}},setupFullMustacheParams:function(e,t,n){var r=e.params;this.pushParams(r);this.opcode("pushProgram",t);this.opcode("pushProgram",n);if(e.hash){this.hash(e.hash)}else{this.opcode("emptyHash")}return r}};t.precompile=i;t.compile=s;return t}(n);var l=function(e,t){"use strict";function u(e){this.value=e}function a(){}var n;var r=e.COMPILER_REVISION;var i=e.REVISION_CHANGES;var s=e.log;var o=t;a.prototype={nameLookup:function(e,t){var n,r;if(e.indexOf("depth")===0){n=true}if(/^[0-9]+$/.test(t)){r=e+"["+t+"]"}else if(a.isValidJavaScriptVariableName(t)){r=e+"."+t}else{r=e+"['"+t+"']"}if(n){return"("+e+" && "+r+")"}else{return r}},compilerInfo:function(){var e=r,t=i[e];return"this.compilerInfo = ["+e+",'"+t+"'];\n"},appendToBuffer:function(e){if(this.environment.isSimple){return"return "+e+";"}else{return{appendToBuffer:true,content:e,toString:function(){return"buffer += "+e+";"}}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(e,t,n,r){this.environment=e;this.options=t||{};s("debug",this.environment.disassemble()+"\n\n");this.name=this.environment.name;this.isChild=!!n;this.context=n||{programs:[],environments:[],aliases:{}};this.preamble();this.stackSlot=0;this.stackVars=[];this.registers={list:[]};this.hashes=[];this.compileStack=[];this.inlineStack=[];this.compileChildren(e,t);var i=e.opcodes,u;this.i=0;for(var a=i.length;this.i<a;this.i++){u=i[this.i];if(u.opcode==="DECLARE"){this[u.name]=u.value}else{this[u.opcode].apply(this,u.args)}if(u.opcode!==this.stripNext){this.stripNext=false}}this.pushSource("");if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new o("Compile completed with content left on stack")}return this.createFunctionContext(r)},preamble:function(){var e=[];if(!this.isChild){var t=this.namespace;var n="helpers = this.merge(helpers, "+t+".helpers);";if(this.environment.usePartial){n=n+" partials = this.merge(partials, "+t+".partials);"}if(this.options.data){n=n+" data = data || {};"}e.push(n)}else{e.push("")}if(!this.environment.isSimple){e.push(", buffer = "+this.initializeBuffer())}else{e.push("")}this.lastContext=0;this.source=e},createFunctionContext:function(e){var t=this.stackVars.concat(this.registers.list);if(t.length>0){this.source[1]=this.source[1]+", "+t.join(", ")}if(!this.isChild){for(var n in this.context.aliases){if(this.context.aliases.hasOwnProperty(n)){this.source[1]=this.source[1]+", "+n+"="+this.context.aliases[n]}}}if(this.source[1]){this.source[1]="var "+this.source[1].substring(2)+";"}if(!this.isChild){this.source[1]+="\n"+this.context.programs.join("\n")+"\n"}if(!this.environment.isSimple){this.pushSource("return buffer;")}var r=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];for(var i=0,o=this.environment.depths.list.length;i<o;i++){r.push("depth"+this.environment.depths.list[i])}var u=this.mergeSource();if(!this.isChild){u=this.compilerInfo()+u}if(e){r.push(u);return Function.apply(this,r)}else{var a="function "+(this.name||"")+"("+r.join(",")+") {\n  "+u+"}";s("debug",a+"\n\n");return a}},mergeSource:function(){var e="",t;for(var n=0,r=this.source.length;n<r;n++){var i=this.source[n];if(i.appendToBuffer){if(t){t=t+"\n    + "+i.content}else{t=i.content}}else{if(t){e+="buffer += "+t+";\n  ";t=undefined}e+=i+"\n  "}}return e},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e);this.replaceStack(function(t){e.splice(1,0,t);return"blockHelperMissing.call("+e.join(", ")+")"})},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e);var t=this.topStack();e.splice(1,0,t);this.pushSource("if (!"+this.lastHelper+") { "+t+" = blockHelperMissing.call("+e.join(", ")+"); }")},appendContent:function(e){if(this.pendingContent){e=this.pendingContent+e}if(this.stripNext){e=e.replace(/^\s+/,"")}this.pendingContent=e},strip:function(){if(this.pendingContent){this.pendingContent=this.pendingContent.replace(/\s+$/,"")}this.stripNext="strip"},append:function(){this.flushInline();var e=this.popStack();this.pushSource("if("+e+" || "+e+" === 0) { "+this.appendToBuffer(e)+" }");if(this.environment.isSimple){this.pushSource("else { "+this.appendToBuffer("''")+" }")}},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression";this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(e){if(this.lastContext!==e){this.lastContext=e}},lookupOnContext:function(e){this.push(this.nameLookup("depth"+this.lastContext,e,"context"))},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"';this.replaceStack(function(e){return"typeof "+e+" === functionType ? "+e+".apply(depth0) : "+e})},lookup:function(e){this.replaceStack(function(t){return t+" == null || "+t+" === false ? "+t+" : "+this.nameLookup(t,e,"context")})},lookupData:function(){this.pushStackLiteral("data")},pushStringParam:function(e,t){this.pushStackLiteral("depth"+this.lastContext);this.pushString(t);if(t!=="sexpr"){if(typeof e==="string"){this.pushString(e)}else{this.pushStackLiteral(e)}}},emptyHash:function(){this.pushStackLiteral("{}");if(this.options.stringParams){this.push("{}");this.push("{}")}},pushHash:function(){if(this.hash){this.hashes.push(this.hash)}this.hash={values:[],types:[],contexts:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop();if(this.options.stringParams){this.push("{"+e.contexts.join(",")+"}");this.push("{"+e.types.join(",")+"}")}this.push("{\n    "+e.values.join(",\n    ")+"\n  }")},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},push:function(e){this.inlineStack.push(e);return e},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){if(e!=null){this.pushStackLiteral(this.programExpression(e))}else{this.pushStackLiteral(null)}},invokeHelper:function(e,t,n){this.context.aliases.helperMissing="helpers.helperMissing";this.useRegister("helper");var r=this.lastHelper=this.setupHelper(e,t,true);var i=this.nameLookup("depth"+this.lastContext,t,"context");var s="helper = "+r.name+" || "+i;if(r.paramsInit){s+=","+r.paramsInit}this.push("("+s+",helper "+"? helper.call("+r.callParams+") "+": helperMissing.call("+r.helperMissingParams+"))");if(!n){this.flushInline()}},invokeKnownHelper:function(e,t){var n=this.setupHelper(e,t);this.push(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(e,t){this.context.aliases.functionType='"function"';this.useRegister("helper");this.emptyHash();var n=this.setupHelper(0,e,t);var r=this.lastHelper=this.nameLookup("helpers",e,"helper");var i=this.nameLookup("depth"+this.lastContext,e,"context");var s=this.nextStack();if(n.paramsInit){this.pushSource(n.paramsInit)}this.pushSource("if (helper = "+r+") { "+s+" = helper.call("+n.callParams+"); }");this.pushSource("else { helper = "+i+"; "+s+" = typeof helper === functionType ? helper.call("+n.callParams+") : helper; }")},invokePartial:function(e){var t=[this.nameLookup("partials",e,"partial"),"'"+e+"'",this.popStack(),"helpers","partials"];if(this.options.data){t.push("data")}this.context.aliases.self="this";this.push("self.invokePartial("+t.join(", ")+")")},assignToHash:function(e){var t=this.popStack(),n,r;if(this.options.stringParams){r=this.popStack();n=this.popStack()}var i=this.hash;if(n){i.contexts.push("'"+e+"': "+n)}if(r){i.types.push("'"+e+"': "+r)}i.values.push("'"+e+"': ("+t+")")},compiler:a,compileChildren:function(e,t){var n=e.children,r,i;for(var s=0,o=n.length;s<o;s++){r=n[s];i=new this.compiler;var u=this.matchExistingProgram(r);if(u==null){this.context.programs.push("");u=this.context.programs.length;r.index=u;r.name="program"+u;this.context.programs[u]=i.compile(r,t,this.context);this.context.environments[u]=r}else{r.index=u;r.name="program"+u}}},matchExistingProgram:function(e){for(var t=0,n=this.context.environments.length;t<n;t++){var r=this.context.environments[t];if(r&&r.equals(e)){return t}}},programExpression:function(e){this.context.aliases.self="this";if(e==null){return"self.noop"}var t=this.environment.children[e],n=t.depths.list,r;var i=[t.index,t.name,"data"];for(var s=0,o=n.length;s<o;s++){r=n[s];if(r===1){i.push("depth0")}else{i.push("depth"+(r-1))}}return(n.length===0?"self.program(":"self.programWithDepth(")+i.join(", ")+")"},register:function(e,t){this.useRegister(e);this.pushSource(e+" = "+t+";")},useRegister:function(e){if(!this.registers[e]){this.registers[e]=true;this.registers.list.push(e)}},pushStackLiteral:function(e){return this.push(new u(e))},pushSource:function(e){if(this.pendingContent){this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));this.pendingContent=undefined}if(e){this.source.push(e)}},pushStack:function(e){this.flushInline();var t=this.incrStack();if(e){this.pushSource(t+" = "+e+";")}this.compileStack.push(t);return t},replaceStack:function(e){var t="",n=this.isInline(),r,i,s;if(n){var o=this.popStack(true);if(o instanceof u){r=o.value;s=true}else{i=!this.stackSlot;var a=!i?this.topStackName():this.incrStack();t="("+this.push(a)+" = "+o+"),";r=this.topStack()}}else{r=this.topStack()}var f=e.call(this,r);if(n){if(!s){this.popStack()}if(i){this.stackSlot--}this.push("("+t+f+")")}else{if(!/^stack/.test(r)){r=this.nextStack()}this.pushSource(r+" = ("+t+f+");")}return r},nextStack:function(){return this.pushStack()},incrStack:function(){this.stackSlot++;if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)}return this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;if(e.length){this.inlineStack=[];for(var t=0,n=e.length;t<n;t++){var r=e[t];if(r instanceof u){this.compileStack.push(r)}else{this.pushStack(r)}}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),n=(t?this.inlineStack:this.compileStack).pop();if(!e&&n instanceof u){return n.value}else{if(!t){if(!this.stackSlot){throw new o("Invalid stack pop")}this.stackSlot--}return n}},topStack:function(e){var t=this.isInline()?this.inlineStack:this.compileStack,n=t[t.length-1];if(!e&&n instanceof u){return n.value}else{return n}},quotedString:function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},setupHelper:function(e,t,n){var r=[],i=this.setupParams(e,r,n);var s=this.nameLookup("helpers",t,"helper");return{params:r,paramsInit:i,name:s,callParams:["depth0"].concat(r).join(", "),helperMissingParams:n&&["depth0",this.quotedString(t)].concat(r).join(", ")}},setupOptions:function(e,t){var n=[],r=[],i=[],s,o,u;n.push("hash:"+this.popStack());if(this.options.stringParams){n.push("hashTypes:"+this.popStack());n.push("hashContexts:"+this.popStack())}o=this.popStack();u=this.popStack();if(u||o){if(!u){this.context.aliases.self="this";u="self.noop"}if(!o){this.context.aliases.self="this";o="self.noop"}n.push("inverse:"+o);n.push("fn:"+u)}for(var a=0;a<e;a++){s=this.popStack();t.push(s);if(this.options.stringParams){i.push(this.popStack());r.push(this.popStack())}}if(this.options.stringParams){n.push("contexts:["+r.join(",")+"]");n.push("types:["+i.join(",")+"]")}if(this.options.data){n.push("data:data")}return n},setupParams:function(e,t,n){var r="{"+this.setupOptions(e,t).join(",")+"}";if(n){this.useRegister("options");t.push("options");return"options="+r}else{t.push(r);return""}}};var f=("break else new var"+" case finally return void"+" catch for switch while"+" continue function this with"+" default if throw"+" delete in try"+" do instanceof typeof"+" abstract enum int short"+" boolean export interface static"+" byte extends long super"+" char final native synchronized"+" class float package throws"+" const goto private transient"+" debugger implements protected volatile"+" double import public let yield").split(" ");var l=a.RESERVED_WORDS={};for(var c=0,h=f.length;c<h;c++){l[f[c]]=true}a.isValidJavaScriptVariableName=function(e){if(!a.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)){return true}return false};n=a;return n}(r,n);var c=function(e,t,n,r,i){"use strict";var s;var o=e;var u=t;var a=n.parser;var f=n.parse;var l=r.Compiler;var c=r.compile;var h=r.precompile;var p=i;var d=o.create;var v=function(){var e=d();e.compile=function(t,n){return c(t,n,e)};e.precompile=function(t,n){return h(t,n,e)};e.AST=u;e.Compiler=l;e.JavaScriptCompiler=p;e.Parser=a;e.parse=f;return e};o=v();o.create=v;s=o;return s}(s,o,a,f,l);return c}();
/*
 *
 * This is an updated version of the `ajax-cart.js`
 * from http://shopify.github.io/Timber/#ajax-cart
 *
 * It allows to have multiple forms in one page.
 *
 */


if ((typeof ShopifyAPI) === 'undefined') { ShopifyAPI = {}; }

/*============================================================================
  API Helper Functions
==============================================================================*/
function attributeToString(attribute) {
  if ((typeof attribute) !== 'string') {
    attribute += '';
    if (attribute === 'undefined') {
      attribute = '';
    }
  }
  return jQuery.trim(attribute);
};

/*============================================================================
  API Functions
==============================================================================*/
ShopifyAPI.onCartUpdate = function(cart) {
  // alert('There are now ' + cart.item_count + ' items in the cart.');
};

ShopifyAPI.updateCartNote = function(note, callback) {
  var params = {
    type: 'POST',
    url: '/cart/update.js',
    data: 'note=' + attributeToString(note),
    dataType: 'json',
    success: function(cart) {
      if ((typeof callback) === 'function') {
        callback(cart);
      }
      else {
        ShopifyAPI.onCartUpdate(cart);
      }
    },
    error: function(XMLHttpRequest, textStatus) {
      ShopifyAPI.onError(XMLHttpRequest, textStatus);
    }
  };
  jQuery.ajax(params);
};

ShopifyAPI.onError = function(XMLHttpRequest, textStatus) {
  var data = eval('(' + XMLHttpRequest.responseText + ')');
  if (!!data.message) {
    alert(data.message + '(' + data.status  + '): ' + data.description);
  }
};

/*============================================================================
  POST to cart/add.js returns the JSON of the cart
    - Allow use of form element instead of just id
    - Allow custom error callback
==============================================================================*/
ShopifyAPI.addItemFromForm = function(form, callback, errorCallback) {
  var params = {
    type: 'POST',
    url: '/cart/add.js',
    data: jQuery(form).serialize(),
    dataType: 'json',
    success: function(line_item) {
      if ((typeof callback) === 'function') {
        callback(line_item, form);
      }
      else {
        ShopifyAPI.onItemAdded(line_item, form);
      }
    },
    error: function(XMLHttpRequest, textStatus) {
      if ((typeof errorCallback) === 'function') {
        errorCallback(XMLHttpRequest, textStatus);
      }
      else {
        ShopifyAPI.onError(XMLHttpRequest, textStatus);
      }
    }
  };
  jQuery.ajax(params);
};

// Get from cart.js returns the cart in JSON
ShopifyAPI.getCart = function(callback) {
  jQuery.getJSON(Colors.routes.cart_url + '.js', function (cart, textStatus) {
    if ((typeof callback) === 'function') {
      callback(cart);
    }
    else {
      ShopifyAPI.onCartUpdate(cart);
    }
  });
};

// POST to cart/change.js returns the cart in JSON
ShopifyAPI.changeItem = function(line, quantity, callback) {
  var params = {
    type: 'POST',
    url: '/cart/change.js',
    data: 'quantity=' + quantity + '&line=' + line,
    dataType: 'json',
    success: function(cart) {
      if ((typeof callback) === 'function') {
        callback(cart);
      }
      else {
        ShopifyAPI.onCartUpdate(cart);
      }
    },
    error: function(XMLHttpRequest, textStatus) {
      ShopifyAPI.onError(XMLHttpRequest, textStatus);
    }
  };
  jQuery.ajax(params);
};

/*============================================================================
  Ajax Shopify Add To Cart
==============================================================================*/
var ajaxCart = (function(module, $) {

  'use strict';

  // Public functions
  var init, loadCart;

  // Private general variables
  var settings, isUpdating, $body;

  // Private plugin variables
  var $formContainer, $addToCart, $cartCountSelector, $cartCostSelector, $cartContainer, $drawerContainer;

  // Private functions
  var updateCountPrice, formOverride, itemAddedCallback, itemErrorCallback, cartUpdateCallback, buildCart, cartCallback, adjustCart, adjustCartCallback, createQtySelectors, qtySelectors, validateQty;

  /*============================================================================
    Initialise the plugin and define global options
  ==============================================================================*/
  init = function (options) {

    // Default settings
    settings = {
      formSelector       : 'form.shopify-product-form',
      cartContainer      : '#CartContainer',
      addToCartSelector  : '[type="submit"]',
      cartCountSelector  : null,
      cartCostSelector   : null,
      moneyFormat        : '${{amount}}',
      enableQtySelectors : true
    };

    // Override defaults with arguments
    $.extend(settings, options);

    // Select DOM elements
    $cartContainer     = $(settings.cartContainer);
    $formContainer     = $(settings.formSelector);
    $addToCart         = $formContainer.find(settings.addToCartSelector);
    $cartCountSelector = $(settings.cartCountSelector);
    $cartCostSelector  = $(settings.cartCostSelector);

    // General Selectors
    $body = $('body');

    // Track cart activity status
    isUpdating = false;

    // Setup ajax quantity selectors on the any template if enableQtySelectors is true
    if (settings.enableQtySelectors) {
      qtySelectors();
    }

    // Take over the add to cart form submit action
    formOverride();

    // Run this function in case we're using the quantity selector outside of the cart
    adjustCart();
  };

  loadCart = function () {
    $body.addClass('drawer--is-loading');
    ShopifyAPI.getCart(cartUpdateCallback);
  };

  updateCountPrice = function (cart) {
    if ($cartCountSelector) {
      $cartCountSelector.html(cart.item_count).removeClass('hidden-count');

      if (cart.item_count === 0) {
        $cartCountSelector.addClass('hidden-count');
      }
    }
    if ($cartCostSelector) {
      $cartCostSelector.html(Colors.Currency.formatMoney(cart.total_price, settings.moneyFormat));
    }
  };

  formOverride = function () {
    $(document).on('submit', settings.formSelector, function(evt) {
      evt.preventDefault();

      // Add class to be styled if desired
      $addToCart.removeClass('has-added').addClass('is-adding');

      // Remove any previous quantity errors
      $('.qty-error').remove();

      ShopifyAPI.addItemFromForm(evt.target, itemAddedCallback, itemErrorCallback);
    });
  };

  itemAddedCallback = function (product) {
    $addToCart.removeClass('is-adding').addClass('has-added');

    ShopifyAPI.getCart(cartUpdateCallback);
  };

  itemErrorCallback = function (XMLHttpRequest, textStatus) {
    var data = eval('(' + XMLHttpRequest.responseText + ')');
    $addToCart.removeClass('is-adding has-added');

    if (!!data.message) {
      if (data.status == 422) {
        $('.type_buy_buttons .buttons').after('<div class="errors qty-error">'+ data.description +'</div>')
      }
    }
  };

  cartUpdateCallback = function (cart) {
    // Update quantity and price
    updateCountPrice(cart);
    buildCart(cart);
  };

  buildCart = function (cart) {

    // Save scroll position
    window.cartScrollTop = $('.items', $cartContainer).length > 0 ? $('.items', $cartContainer).scrollTop() : 0;

    // Start with a fresh cart div
    $cartContainer.empty();

    // Show empty cart
    if (cart.item_count === 0) {
      $cartContainer
        .append('<h3 class="empty">' + Colors.strings.cart_empty + '</h3>');
      cartCallback(cart);
      return;
    }

    // Handlebars.js cart layout
    var items = [],
        item = {},
        data = {},
        source = $("#CartTemplate").html(),
        template = Handlebars.compile(source);

    // Add each item to our handlebars.js data
    $.each(cart.items, function(index, cartItem) {

      /* Hack to get product image thumbnail
       *   - If image is not null
       *     - Remove file extension, add _small, and re-add extension
       *     - Create server relative link
       *   - A hard-coded url of no-image
      */

      if (cartItem.image != null){
        var prodImg = cartItem.image.replace(/(\.[^.]*)$/, "_102x102$1").replace('http:', ''),
            prodImg2x = cartItem.image.replace(/(\.[^.]*)$/, "_102x102@2x$1").replace('http:', ''),
            prodImg3x = cartItem.image.replace(/(\.[^.]*)$/, "_102x102@3x$1").replace('http:', '');
      } else {
        var prodImg = "//cdn.shopify.com/s/assets/admin/no-image-medium-cc9732cb976dd349a0df1d39816fbcc7.gif",
            prodImg2x = prodImg,
            prodImg3x = prodImg;
      }

      if (cartItem.line_level_discount_allocations.length !== 0) {
        for (var discount in cartItem.line_level_discount_allocations) {
          var amount = cartItem.line_level_discount_allocations[discount].amount;
          cartItem.line_level_discount_allocations[discount].formattedAmount = Colors.Currency.formatMoney(amount, settings.moneyFormat);
        }
      }

      if (cart.cart_level_discount_applications.length !== 0) {
        for (var cartDiscount in cart.cart_level_discount_applications) {
          var cartAmount = cart.cart_level_discount_applications[cartDiscount].total_allocated_amount;
          cart.cart_level_discount_applications[cartDiscount].formattedAmount = Colors.Currency.formatMoney(cartAmount, settings.moneyFormat);
        }
      }

      var unitPrice = cartItem.unit_price ? (
        Colors.Currency.formatMoney(
          cartItem.unit_price,
          settings.moneyFormat
        ) + ' / ' + (
          cartItem.unit_price_measurement.reference_value === 1 ?
            cartItem.unit_price_measurement.reference_unit :
            cartItem.unit_price_measurement.reference_value
              + cartItem.unit_price_measurement.reference_unit
        )
      ) : false;

      // Create item's data object and add to 'items' array
      item = {
        id: cartItem.variant_id,
        line: index + 1, // Shopify uses a 1+ index in the API
        url: cartItem.url,
        img: prodImg,
        img_2x: prodImg2x,
        img_3x: prodImg3x,
        name: cartItem.product_title,
        variation: cartItem.variant_title,
        sellingPlanName: cartItem.selling_plan_allocation ? cartItem.selling_plan_allocation.selling_plan.name : null,
        properties: cartItem.properties,
        itemAdd: cartItem.quantity + 1,
        itemMinus: cartItem.quantity - 1,
        itemQty: cartItem.quantity,
        price: Colors.Currency.formatMoney(cartItem.original_line_price, settings.moneyFormat),
        unitPrice: unitPrice,
        discountedPrice: Colors.Currency.formatMoney(cartItem.final_line_price, settings.moneyFormat),
        discounts: cartItem.line_level_discount_allocations,
        discountsApplied: cartItem.line_level_discount_allocations.length === 0 ? false : true,
        vendor: cartItem.vendor
      };

      items.push(item);
    });

    // Gather all cart data and add to DOM
    data = {
      items: items,
      note: cart.note,
      totalPrice: Colors.Currency.formatMoney(cart.total_price, settings.moneyFormat),
      cartDiscounts: cart.cart_level_discount_applications,
      cartDiscountsApplied: cart.cart_level_discount_applications.length === 0 ? false : true
    }

    $cartContainer.append(template(data));

    cartCallback(cart);
  };

  cartCallback = function(cart) {
    $body.removeClass('drawer--is-loading');
    $body.trigger('ajaxCart.afterCartLoad', cart);
  };

  adjustCart = function () {
    // Delegate all events because elements reload with the cart

    // Add or remove from the quantity
    $body.on('click', '.ajaxcart__qty-adjust', function() {
      var $el = $(this),
          line = $el.data('line'),
          $qtySelector = $el.siblings('.ajaxcart__qty-num'),
          qty = parseInt($qtySelector.val().replace(/\D/g, ''));

      var qty = validateQty(qty);

      // Add or subtract from the current quantity
      if ($el.hasClass('ajaxcart__qty--plus')) {
        qty += 1;
      } else {
        qty -= 1;
        if (qty <= 0) qty = 0;
      }

      // If it has a data-line, update the cart.
      // Otherwise, just update the input's number
      if (line) {
        updateQuantity(line, qty);
      } else {
        $qtySelector.val(qty);
      }
    });

    // Update quantity based on input on change
    $body.on('change', '.ajaxcart__qty-num', function() {
      var $el = $(this),
          line = $el.data('line'),
          qty = parseInt($el.val().replace(/\D/g, ''));

      var qty = validateQty(qty);

      // If it has a data-line, update the cart
      if (line) {
        updateQuantity(line, qty);
      }
    });

    // Remove line item
    $body.on('click', '.ajaxcart__remove[data-line]', function(e) {
      var line = $(this).data('line');
      updateQuantity(line, 0);
      e.preventDefault();
    });

    // Prevent cart from being submitted while quantities are changing
    $body.on('submit', 'form.ajaxcart', function(evt) {
      if (isUpdating) {
        evt.preventDefault();
      }
    });

    // Highlight the text when focused
    $body.on('focus', '.ajaxcart__qty-adjust', function() {
      var $el = $(this);
      setTimeout(function() {
        $el.select();
      }, 50);
    });

    function updateQuantity(line, qty) {
      isUpdating = true;

      // Add activity classes when changing cart quantities
      var $row = $('.item[data-line="' + line + '"]').addClass('loading');

      if (qty === 0) {
        $row.addClass('removing');
      }

      ShopifyAPI.changeItem(line, qty, adjustCartCallback);
    }

    // Save note anytime it's changed
    $body.on('change', 'textarea[name="note"]', function() {
      var newNote = $(this).val();

      // Update the cart note in case they don't click update/checkout
      ShopifyAPI.updateCartNote(newNote, function(cart) {});
    });
  };

  adjustCartCallback = function (cart) {
    isUpdating = false;

    // Update quantity and price
    updateCountPrice(cart);

    // Reprint cart on short timeout so you don't see the content being removed
    setTimeout(function() {
      ShopifyAPI.getCart(buildCart);
    }, 150)
  };

  createQtySelectors = function() {
    // If there is a normal quantity number field in the ajax cart, replace it with our version
    if ($('input[type="number"]', $cartContainer).length) {
      $('input[type="number"]', $cartContainer).each(function() {
        var $el = $(this),
            currentQty = $el.val();

        var itemAdd = currentQty + 1,
            itemMinus = currentQty - 1,
            itemQty = currentQty;

        var source   = $("#AjaxQty").html(),
            template = Handlebars.compile(source),
            data = {
              id: $el.data('id'),
              itemQty: itemQty,
              itemAdd: itemAdd,
              itemMinus: itemMinus
            };

        // Append new quantity selector then remove original
        $el.after(template(data)).remove();
      });
    }
  };

  qtySelectors = function() {
    // Change number inputs to JS ones, similar to ajax cart but without API integration.
    // Make sure to add the existing name and id to the new input element
    var numInputs = $('input[type="number"].quantity');

    if (numInputs.length) {
      numInputs.each(function() {
        var $el = $(this),
            currentQty = $el.val(),
            inputName = $el.attr('name'),
            inputId = $el.attr('id');

        var itemAdd = currentQty + 1,
            itemMinus = currentQty - 1,
            itemQty = currentQty;

        var source   = $("#JsQty").html(),
            template = Handlebars.compile(source),
            data = {
              id: $el.data('id'),
              itemQty: itemQty,
              itemAdd: itemAdd,
              itemMinus: itemMinus,
              inputName: inputName,
              inputId: inputId,
              disabled: $el.prop('disabled')
            };

        if($el.attr('data-max') !== typeof undefined) {
          data['max'] = $el.attr('data-max');
        }

        // Append new quantity selector then remove original
        $el.after(template(data)).remove();
      });

      // Setup listeners to add/subtract from the input
      $('.js-qty__adjust').on('click', function() {
        var $el = $(this),
            id = $el.data('id'),
            $qtySelector = $el.siblings('.js-qty__num'),
            qty = parseInt($qtySelector.val().replace(/\D/g, ''));

        if($qtySelector.prop('disabled')) return;

        var qty = validateQty(qty);

        // Add or subtract from the current quantity
        if ($el.hasClass('js-qty__adjust--plus')) {
          qty += 1;
        } else {
          qty -= 1;
          if (qty <= 1) qty = 1;
        }

        // Update the input's number
        $qtySelector.val(qty);

        // Trigger change
        $qtySelector.trigger('change');
      });
    }
  };

  window.qtySelectors = qtySelectors;

  validateQty = function (qty) {
    if((parseFloat(qty) == parseInt(qty)) && !isNaN(qty)) {
      // We have a valid number!
    } else {
      // Not a number. Default to 1.
      qty = 1;
    }
    return qty;
  };

  module = {
    init: init,
    load: loadCart
  };

  return module;

}(ajaxCart || {}, jQuery));

window.is_ie = /MSIE|Trident/i.test(navigator.userAgent);
window.is_iphone = /iPhone|iPod/i.test(navigator.userAgent);
window.is_ios = /iPad|iPhone|iPod/.test(navigator.userAgent);
window.is_touch_device = 'ontouchstart' in document.documentElement;
Colors.Helpers = (function() {
  var touchDevice = false;

  function setTouch() {
    touchDevice = true;
  }

  function isTouch() {
    return window.is_touch_device;
  }

  return {
    setTouch: setTouch,
    isTouch: isTouch
  };
})();
Colors.LibraryLoader = (function() {
  var types = {
    link: 'link',
    script: 'script'
  };

  var status = {
    requested: 'requested',
    loaded: 'loaded'
  };

  var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';

  var libraries = {
    youtubeSdk: {
      tagId: 'youtube-sdk',
      src: 'https://www.youtube.com/iframe_api',
      type: types.script
    },
    plyrShopifyStyles: {
      tagId: 'plyr-shopify-styles',
      src: cloudCdn + 'shopify-plyr/v1.0/shopify-plyr.css',
      type: types.link
    },
    modelViewerUiStyles: {
      tagId: 'shopify-model-viewer-ui-styles',
      src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
      type: types.link
    }
  };

  function load(libraryName, callback) {
    var library = libraries[libraryName];

    if (!library) return;
    if (library.status === status.requested) return;

    callback = callback || function() {};
    if (library.status === status.loaded) {
      callback();
      return;
    }

    library.status = status.requested;

    var tag;

    switch (library.type) {
      case types.script:
        tag = createScriptTag(library, callback);
        break;
      case types.link:
        tag = createLinkTag(library, callback);
        break;
    }

    tag.id = library.tagId;
    library.element = tag;

    var firstScriptTag = document.getElementsByTagName(library.type)[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  function createScriptTag(library, callback) {
    var tag = document.createElement('script');
    tag.src = library.src;
    tag.addEventListener('load', function() {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  function createLinkTag(library, callback) {
    var tag = document.createElement('link');
    tag.href = library.src;
    tag.rel = 'stylesheet';
    tag.type = 'text/css';
    tag.addEventListener('load', function() {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  return {
    load: load
  };
})();
Colors.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  $(document)
    .on('shopify:section:load', this._onSectionLoad.bind(this))
    .on('shopify:section:unload', this._onSectionUnload.bind(this))
    .on('shopify:section:select', this._onSelect.bind(this))
    .on('shopify:section:deselect', this._onDeselect.bind(this))
    .on('shopify:block:select', this._onBlockSelect.bind(this))
    .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

Colors.Sections.prototype = Object.assign({}, Colors.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (typeof constructor === 'undefined') {
      return;
    }

    var instance = Object.assign(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    this.instances = this.instances.filter(function(instance) {
      var isEventInstance = instance.id === evt.detail.sectionId;

      if (isEventInstance) {
        if (typeof instance.onUnload === 'function') {
          instance.onUnload(evt);
        }
      }

      return !isEventInstance;
    });
  },

  _onSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onSelect === 'function'
    ) {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onDeselect === 'function'
    ) {
      instance.onDeselect(evt);
    }
  },

  _onBlockSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onBlockSelect === 'function'
    ) {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onBlockDeselect === 'function'
    ) {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    $('[data-section-type=' + type + ']').each(function(index, container) {
      this._createInstance(container, constructor);
    }.bind(this));
  }
});

Colors.Filters = (function() {

  function Filters(container) {
    this.$container = $(container);
    this.$body = $('body');
    this.init();
  }

  Filters.prototype = Object.assign({}, Filters.prototype, {
    init: function() {
      this.initSort();
      this.initDetails();
    },

    initSort: function() {
      Shopify.queryParams = {};
      if (location.search.length) {
        for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
          aKeyValue = aCouples[i].split('=');
          if (aKeyValue.length > 1) {
            Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
          }
        }
      }
      $('#sortBy', this.$container)
        .on('change', function() {
          Shopify.queryParams.sort_by = $(this).val();
          location.search = $.param(Shopify.queryParams);
        }
      );
    },

    initDetails: function(){
      var self = this;
      $('.hide-on-desktop details', this.$container).on('toggle', function(e){
        console.log($(this).attr('open'));
        self.$body.toggleClass('filtering', $(this).attr('open'));
      });
    }
  });

  return Filters;
})();
Colors.Variants = (function() {

  /**
   * Variant constructor
   *
   * @param {object} options - Settings from `product.js`
   */
  function Variants(options) {
    this.$container = options.$container;
    this.product = options.product;
    this.singleOptionSelector = options.singleOptionSelector;
    this.originalSelectorId = options.originalSelectorId;
    this.enableHistoryState = options.enableHistoryState;
    this.currentVariant = this._getVariantFromOptions();

    $(this.singleOptionSelector, this.$container).on('change', this._onSelectChange.bind(this));
  }

  Variants.prototype = Object.assign({}, Variants.prototype, {

    /**
     * Get the currently selected options from add-to-cart form. Works with all
     * form input elements.
     *
     * @return {array} options - Values of currently selected variants
     */
    _getCurrentOptions: function() {
      var currentOptions = $.map($(this.singleOptionSelector, this.$container), function(element, i) {
        var $element = $(element);
        var type = $element.attr('type');
        var currentOption = {};

        if (type === 'radio' || type === 'checkbox') {
          if ($element[0].checked) {
            currentOption.value = $element.val();
            currentOption.index = $element.data('index');

            return currentOption;
          } else {
            return false;
          }
        } else {
          currentOption.value = $element.val();
          currentOption.index = $element.data('index');

          return currentOption;
        }
      });

      // remove any unchecked input values if using radio buttons or checkboxes
      currentOptions = currentOptions.filter(Boolean);

      return currentOptions;
    },

    /**
     * Find variant based on selected values.
     *
     * @param  {array} selectedValues - Values of variant inputs
     * @return {object || undefined} found - Variant object from product.variants
     */
    _getVariantFromOptions: function() {
      var selectedValues = this._getCurrentOptions();
      var variants = this.product.variants;

      var found = variants.find(function(variant) {
        return selectedValues.every(function(values) {
          return variant[values.index] === values.value;
        });
      });

      return found;
    },

    /**
     * Event handler for when a variant input changes.
     */
    _onSelectChange: function() {
      var variant = this._getVariantFromOptions();

      this.$container.trigger({
        type: 'variantChange',
        variant: variant
      });

      if (!variant) {
        return;
      }

      this._updateMasterSelect(variant);
      this._updateImages(variant);
      this._updatePrice(variant);
      this._updateSKU(variant);
      this.currentVariant = variant;

      if (this.enableHistoryState) {
        this._updateHistoryState(variant);
      }
    },

    /**
     * Trigger event when variant image changes
     *
     * @param  {object} variant - Currently selected variant
     * @return {event}  variantImageChange
     */
    _updateImages: function(variant) {
      var variantImage = variant.featured_image || {};
      var currentVariantImage = this.currentVariant.featured_image || {};

      if (!variant.featured_image || variantImage.src === currentVariantImage.src) {
        return;
      }

      this.$container.trigger({
        type: 'variantImageChange',
        variant: variant
      });
    },

    /**
     * Trigger event when variant price changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantPriceChange
     */
    _updatePrice: function(variant) {
      if (variant.price === this.currentVariant.price && variant.compare_at_price === this.currentVariant.compare_at_price) {
        return;
      }

      this.$container.trigger({
        type: 'variantPriceChange',
        variant: variant
      });
    },

    /**
     * Trigger event when variant sku changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantSKUChange
     */
    _updateSKU: function(variant) {
      if (variant.sku === this.currentVariant.sku) {
        return;
      }

      this.$container.trigger({
        type: 'variantSKUChange',
        variant: variant
      });
    },

    /**
     * Update history state for product deeplinking
     *
     * @param  {variant} variant - Currently selected variant
     * @return {k}         [description]
     */
    _updateHistoryState: function(variant) {
      if (!history.replaceState || !variant) {
        return;
      }

      var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
      window.history.replaceState({path: newurl}, '', newurl);
    },

    /**
     * Update hidden master select of variant change
     *
     * @param  {variant} variant - Currently selected variant
     */
    _updateMasterSelect: function(variant) {
      $(this.originalSelectorId, this.$container).val(variant.id);
    }
  });

  return Variants;
})();
/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 * Alternatives
 * - Accounting.js - http://openexchangerates.github.io/accounting.js/
 *
 */

Colors.Currency = (function() {
  var moneyFormat = '${{amount}}';

  function formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = (format || moneyFormat);

    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = defaultTo(precision, 2);
      thousands = defaultTo(thousands, ',');
      decimal = defaultTo(decimal, '.');

      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      var parts = number.split('.');
      var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      var centsAmount = parts[1] ? (decimal + parts[1]) : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  return {
    formatMoney: formatMoney
  }
})();
Colors.Disclosure = (function() {
  var selectors = {
    disclosureList: '[data-disclosure-list]',
    disclosureToggle: '[data-disclosure-toggle]',
    disclosureInput: '[data-disclosure-input]',
    disclosureOptions: '[data-disclosure-option]'
  };

  var classes = {
    listVisible: 'disclosure-list--visible'
  };

  function Disclosure($disclosure) {
    this.$container = $disclosure;
    this.cache = {};
    this._cacheSelectors();
    this._connectOptions();
    this._connectToggle();
    this._onFocusOut();
  }

  Disclosure.prototype = Object.assign({}, Disclosure.prototype, {
    _cacheSelectors: function() {
      this.cache = {
        $disclosureList: this.$container.find(selectors.disclosureList),
        $disclosureToggle: this.$container.find(selectors.disclosureToggle),
        $disclosureInput: this.$container.find(selectors.disclosureInput),
        $disclosureOptions: this.$container.find(selectors.disclosureOptions)
      };
    },

    _connectToggle: function() {
      this.cache.$disclosureToggle.on(
        'click',
        function(evt) {
          var ariaExpanded =
            $(evt.currentTarget).attr('aria-expanded') === 'true';
          $(evt.currentTarget).attr('aria-expanded', !ariaExpanded);

          this.cache.$disclosureList.toggleClass(classes.listVisible);
        }.bind(this)
      );
    },

    _connectOptions: function() {
      this.cache.$disclosureOptions.on(
        'click',
        function(evt) {
          this._submitForm($(evt.currentTarget).data('value'));
        }.bind(this)
      );
    },

    _onFocusOut: function() {
      this.cache.$disclosureToggle.on(
        'focusout',
        function(evt) {
          var disclosureLostFocus =
            this.$container.has(evt.relatedTarget).length === 0;

          if (disclosureLostFocus) {
            this._hideList();
          }
        }.bind(this)
      );

      this.cache.$disclosureList.on(
        'focusout',
        function(evt) {
          var childInFocus =
            $(evt.currentTarget).has(evt.relatedTarget).length > 0;
          var isVisible = this.cache.$disclosureList.hasClass(
            classes.listVisible
          );

          if (isVisible && !childInFocus) {
            this._hideList();
          }
        }.bind(this)
      );

      this.$container.on(
        'keyup',
        function(evt) {
          if (evt.which !== slate.utils.keyboardKeys.ESCAPE) return;
          this._hideList();
          this.cache.$disclosureToggle.focus();
        }.bind(this)
      );

      $('body').on(
        'click',
        function(evt) {
          var isOption = this.$container.has(evt.target).length > 0;
          var isVisible = this.cache.$disclosureList.hasClass(
            classes.listVisible
          );

          if (isVisible && !isOption) {
            this._hideList();
          }
        }.bind(this)
      );
    },

    _submitForm: function(value) {
      this.cache.$disclosureInput.val(value);
      this.$container.parents('form').submit();
    },

    _hideList: function() {
      this.cache.$disclosureList.removeClass(classes.listVisible);
      this.cache.$disclosureToggle.attr('aria-expanded', false);
    },

    unload: function() {
      this.cache.$disclosureOptions.off();
      this.cache.$disclosureToggle.off();
      this.cache.$disclosureList.off();
      this.$container.off();
    }
  });

  return Disclosure;
})();
Colors.Shapes = (function() {

  function Shapes() {
    if(window.is_lt_ie9) return;
    this.render();
    $(document).on('shopify:section:load', this.render.bind(this));
  }

  Shapes.prototype = Object.assign({}, Shapes.prototype, {
    
    render: function() {
      var self = this;
      $('.shape:not(.shaped)').each(function(index){
        var $this = $(this);
        if($this.hasClass('square')){
          $this
            .addClass('shaped')
            .find('br')
            .replaceWith(' ');
        }else if($this.hasClass('circle')){
          self.circlify($this, index);
        }else if ($this.hasClass('hexagon')){
          self.hexagonify($this, index);
        }
      });
    },

    circlify: function($element, index) {
      var $this = $element,
          $wrapper = $("<div class='shape-wrapper'>"),
          width = $this.width(),
          height = $this.height(),
          is_small = $this.hasClass('small'),
          default_min_side = is_small ? 30 : 60,
          min_side = $this.data('min-side') || default_min_side;
          padding = is_small ? 15 : 30,
          side = Math.max(Math.max(width, height) + padding, min_side);

      $wrapper
        .css('width', side);

      $this
        .css('border-radius', '50%')
        .css('vertical-align', 'middle')
        .css('width', side)
        .css('height', side)
        .html($('<span>')
          .html($this.html())
        )
        .addClass('shaped')
        .wrap($wrapper);
      },

      hexagonify: function($element, index) {
        // from http://csshexagon.com/

        if(window.is_lt_ie9){
          return;
        }

        if(!window.sheet){
          var style = document.createElement("style");
          style.setAttribute("type", "text/css");
          if (style.styleSheet) { // for IE
            style.styleSheet.cssText = "";
          } else { // others
            style.appendChild(document.createTextNode(""));
          }
          var h = document.getElementsByTagName('head')[0];
          h.appendChild(style);
          window.sheet = style.sheet;
        }

        var $this = $element,
            $wrapper = $("<div class='shape-wrapper'>"),
            is_small = $this.hasClass('small'),
            hexagonClass = "hexagon-" + index,
            root2 = 1.41421356237,
            root3 = 1.73205080757,
            scaleFactor = 0.577350269189626,
            width = $this.width(),
            height = $this.height();

        if(width > height){
          width = width + (is_small ? 15 : 30);
          height = width/root3;
        } else {
          width = height * root3;
        }

        var borderWidth = 3,
            borderColor = '#333',
            capWidth = width/root2,
            border = 'solid ' + borderWidth + 'px ' + borderColor,
            capBorder = 'solid ' + (borderWidth * root2) + 'px ' + borderColor,
            top = -width/root2/2,
            bottom = top,
            left = (width - capWidth)/2;

        if($this.hasClass('border')){
          left = left - borderWidth/2;
        }

        $this
          .addClass(hexagonClass)
          .html($('<span>')
            .html($this.html())
          );

        this.addCSSRule(
          window.sheet,
          '.' + hexagonClass,
          'width: ' + width + 'px;' +
          'height: ' + height + 'px;' +
          'margin-top: ' + height/2 + 'px;' +
          'margin-bottom: ' + height/2 + 'px;' +
          'border-left: ' + border + ';' +
          'border-right: ' + border + ';'
        );

        this.addCSSRule(
          window.sheet,
          '.' + hexagonClass + ':before',
          'width: ' + capWidth + 'px;' +
          'height: ' + capWidth + 'px;' +
          '-webkit-transform: scaleY(' + scaleFactor + ') rotate(-45deg);' +
          '-ms-transform: scaleY(' + scaleFactor + ') rotate(-45deg);' +
          'transform: scaleY(' + scaleFactor + ') rotate(-45deg);' + 
          'left: ' + left + 'px;' +
          'top: ' + top + 'px;' +
          'border-top: ' + capBorder + ';' +
          'border-right: ' + capBorder + ';'
        );

        this.addCSSRule(
          window.sheet, 
          '.' + hexagonClass + ':after', 
          'width: ' + capWidth + 'px;' +
          'height: ' + capWidth + 'px;' +
          '-webkit-transform: scaleY(' + scaleFactor + ') rotate(-45deg);' +
          '-ms-transform: scaleY(' + scaleFactor + ') rotate(-45deg);' +
          'transform: scaleY(' + scaleFactor + ') rotate(-45deg);' + 
          'left: ' + left + 'px;' +
          'bottom: ' + bottom + 'px;' +
          'border-bottom: ' + capBorder + ';' +
          'border-left: ' + capBorder + ';'
        );

        $this.wrap($wrapper);
        $this.addClass('shaped');
      },

      addCSSRule: function(sheet, selector, rules) {
        if("insertRule" in sheet) {
          sheet.insertRule(selector + "{" + rules + "}", 0);
        }
        else if("addRule" in sheet) {
          sheet.addRule(selector, rules);
        }
      }

  });

  return Shapes;
})();
Colors.Header = (function() {

  function Header(container) {
    var $header = this.$header = $(container),
        $window = $(window),
        $sideNav = $('.side-nav'),
        $bar = $('.bar', $header).clone().addClass('fixed').appendTo($header),
        $headerLanguageDisclosure = $('[data-disclosure-language]', $header),
        $headerCountryDisclosure = $('[data-disclosure-country]', $header),
        $sideNavLanguageDisclosure = $('[data-disclosure-language]', $sideNav),
        $sideNavCountryDisclosure = $('[data-disclosure-country]', $sideNav),
        is_home_page = $('body').hasClass('template-index'),
        are_featured_products_on_top = $('.main .layout .shopify-section').first().hasClass('section-featured-products'),
        to_solid_edge = are_featured_products_on_top ? $('.featured-products').offset().top + $('.featured-products').outerHeight() - $header.outerHeight() : false,
        not_interactive = !$header.hasClass('sticky') || $('body').hasClass('template-customers-login') || $('body').hasClass('template-customers-account') || $('body').hasClass('template-customers-addresses') || $('body').hasClass('template-customers-register') || $('body').hasClass('template-customers-login') || $('body').hasClass('template-404') || $('body').hasClass('template-cart') || $('body').hasClass('template-article'),
        interactive = !not_interactive,
        self = this;

    if ($headerLanguageDisclosure.length) {
      new Colors.Disclosure($headerLanguageDisclosure);
    }

    if ($headerCountryDisclosure.length) {
      new Colors.Disclosure($headerCountryDisclosure);
    }

    if ($sideNavLanguageDisclosure.length) {
      new Colors.Disclosure($sideNavLanguageDisclosure);
    }

    if ($sideNavCountryDisclosure.length) {
      new Colors.Disclosure($sideNavCountryDisclosure);
    }

    if(interactive){
      $window
        .on('scroll.header touchmove.header', function(e){
          var scroll_top = $window.scrollTop(),
              offset = $('.announcement-bar').outerHeight() || 0;
          $header.toggleClass('scrolled', scroll_top > offset);
          if(is_home_page && are_featured_products_on_top){
            $header.toggleClass('scrolling', scroll_top > offset + 30);
            $header.toggleClass('solid', scroll_top > to_solid_edge);
          } else {
            $header.toggleClass('solid', scroll_top > offset + 50);
          }
        })
        .trigger('scroll.header');
    }

    $(document)
      .on('opening', function(){
        self.fix();
      })
      .on('closing', function(){
        setTimeout(function(){
          self.free();
        }, 600);
      });
  }

  Header.prototype = Object.assign({}, Header.prototype, {
    
    fix: function() {
      var $bar = $('.header.scrolled .bar.fixed');
      if ($bar.length){
        $bar
          .css('top', $bar.offset().top - this.$header.offset().top)
          .css('position', 'absolute');
      }
    },

    free: function() {
      var $bar = $('.header.scrolled .bar.fixed');
      if ($bar.length){
        $bar
          .css('top', 0)
          .css('position', 'fixed');
      }
    },

    onSelect: function(event) {
      if($('.side-nav').length == 0) {
        $('body.browsing .main').first().click();
      }
    },

    onBlockSelect: function(event) {
      var $target = $(event.target),
          $a = $('a', $target).first(),
          $header = $target.parents('.header'),
          $tab = $('.tab', $target);
      $a.addClass('hovered');
      $header.addClass('showing-megamenu');
      $tab.addClass('expanded');
    },

    onBlockDeselect: function(event) {
      var $target = $(event.target),
          $a = $('a', $target).first(),
          $header = $target.parents('.header'),
          $tab = $('.tab', $target);
      $a.removeClass('hovered');
      $header.removeClass('showing-megamenu');
      $tab.removeClass('expanded');
    }
  });

  return Header;
})();

Colors.Popup = (function() {

  function Popup(container) {
    var $container = $(container),
        $modal = this.$modal = $('.modal', $container),
        $body = this.$body = $('body'),
        delay = $container.data('delay') || 5,
        frequency = $container.data('frequency') || 30,
        test = $container.data('test') || false,
        self = this,
        cookie_key = 'colors-popup',
        opened = false;

    if($body.attr('id') === 'challenge') return;

    if (location.search.indexOf('customer_posted=true') === 1 && location.hash === '#PopupForm'){
      $modal.removeClass('animated');
      this.open();
    } else {
      if(!Shopify.designMode){
        if(!this.getCookie(cookie_key) || test) {
          setTimeout(function(){
            self.open();
          }, delay * 1000);
          this.setCookie(cookie_key, true, frequency);
        }
      }
    }
  }

  Popup.prototype = Object.assign({}, Popup.prototype, {
    open: function(){
      var self = this;
      if (this.opened) return;
      if(!Shopify.designMode && this.$body.hasClass('modeling')) return;
      if(this.$modal.length === 0) return;
      this.opened = true;
      this.$body.addClass('modeling');
      this.$modal
        .on('click.close', '.close,.background', function(e){
          self.close();
        })
        .removeClass('hidden');

    },
    close: function(){
      this.opened = false;
      this.$body.removeClass('modeling');
      this.$modal
        .off('click.close')
        .addClass('hidden');
    },
    setCookie: function(key, value, expiry) {
      var expires = new Date();
      expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
      document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
    },
    getCookie: function(key) {
      var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
      return keyValue ? keyValue[2] : false;
    },
    eraseCookie: function(key) {
      var keyValue = getCookie(key);
      setCookie(key, keyValue, '-1');
    },
    onSelect: function(event) {
      this.open();
    },
    onDeselect: function(event) {
      this.close();
    },
    onUnload: function(event) {
      this.close();
    }
  });

  return Popup;
})();

Colors.Search = (function() {

  function Search(container) {
    this.$container = $(container);
    this.init();
  }

  Search.prototype = Object.assign({}, Search.prototype, {
    init: function() {
      this.initFilters();
    },

    initFilters: function() {
      var $filters = $('.sorting-and-filtering', this.$container);
      $filters.length && new Colors.Filters($filters);
    },
  });

  return Search;
})();
Colors.Footer = (function() {

  function Footer(container) {
    this.$container = $(container);
    this.cache = {};
    this.cacheSelectors();

    if (this.cache.$languageDisclosure.length) {
      this.languageDisclosure = new Colors.Disclosure(
        this.cache.$languageDisclosure
      );
    }

    if (this.cache.$countryDisclosure.length) {
      this.countryDisclosure = new Colors.Disclosure(
        this.cache.$countryDisclosure
      );
    }

    this.emailLinker();
  }

  Footer.prototype = Object.assign({}, Footer.prototype, {
    cacheSelectors: function() {
      this.cache = {
        $languageDisclosure: this.$container.find('[data-disclosure-language]'),
        $countryDisclosure: this.$container.find('[data-disclosure-country]'),
        $rte: this.$container.find('.contact p')
      };
    },

    emailLinker: function() {
      var regEx = /(\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)(?![^<]*>|[^<>]*<\/)/g;
      if(this.cache.$rte.length){
        this.cache.$rte.each(function(){
          var $text = $(this);
          $text.html($text.html().replace(regEx, "<a href=\"mailto:$1\">$1</a>"));
        });
      }
    },

    onUnload: function() {
      if (this.cache.$languageDisclosure.length) {
        this.languageDisclosure.unload();
      }

      if (this.cache.$countryDisclosure.length) {
        this.countryDisclosure.unload();
      }
    }
  });

  return Footer;
})();
Colors.Hero = (function() {

  function Hero(container) {
    var $container = $(container),
        $video = $('video', $container);

    $video
      .on('suspend', function(e){
        const video = $(this)[0];
        $('body').one('click touchstart', function () {
          if (!video.playing) {
            video.play();
          }
        });
      });
  }

  return Hero;
})();

// Youtube API callback
function onYouTubeIframeAPIReady() {
  Colors.ProductVideo.loadVideos(Colors.ProductVideo.hosts.youtube);
}

Colors.ProductVideo = (function() {
  var videos = {};

  var hosts = {
    html5: 'html5',
    youtube: 'youtube'
  };

  var selectors = {
    productMediaWrapper: '[data-product-single-media-wrapper]'
  };

  var attributes = {
    enableVideoLooping: 'enable-video-looping',
    videoId: 'video-id'
  };

  function init(videoContainer, sectionId) {
    if (!videoContainer.length) {
      return;
    }

    var videoElement = videoContainer.find('iframe, video')[0];
    var mediaId = videoContainer.data('mediaId');

    if (!videoElement) {
      return;
    }

    videos[mediaId] = {
      mediaId: mediaId,
      sectionId: sectionId,
      host: hostFromVideoElement(videoElement),
      container: videoContainer,
      element: videoElement,
      ready: function() {
        createPlayer(this);
      }
    };

    var video = videos[mediaId];

    switch (video.host) {
      case hosts.html5:
        window.Shopify.loadFeatures([
          {
            name: 'video-ui',
            version: '1.0',
            onLoad: setupPlyrVideos
          }
        ]);
        Colors.LibraryLoader.load('plyrShopifyStyles');
        break;
      case hosts.youtube:
        Colors.LibraryLoader.load('youtubeSdk');
        break;
    }
  }

  function setupPlyrVideos(errors) {
    if (errors) {
      fallbackToNativeVideo();
      return;
    }

    loadVideos(hosts.html5);
  }

  function createPlayer(video) {
    if (video.player) {
      return;
    }

    var productMediaWrapper = video.container.closest(
      selectors.productMediaWrapper
    );
    var enableLooping = productMediaWrapper.data(attributes.enableVideoLooping);

    switch (video.host) {
      case hosts.html5:
        video.player = new Shopify.Plyr(video.element, {
          loop: { active: enableLooping }
        });
        break;
      case hosts.youtube:
        var videoId = productMediaWrapper.data(attributes.videoId);

        video.player = new YT.Player(video.element, {
          videoId: videoId,
          events: {
            onStateChange: function(event) {
              if (event.data === 0 && enableLooping) event.target.seekTo(0);
            }
          }
        });
        break;
    }

    productMediaWrapper.on('mediaHidden xrLaunch', function() {
      if (!video.player) return;

      if (video.host === hosts.html5) {
        video.player.pause();
      }

      if (video.host === hosts.youtube && video.player.pauseVideo) {
        video.player.pauseVideo();
      }
    });

    productMediaWrapper.on('mediaVisible', function() {
      if (Colors.Helpers.isTouch()) return;
      if (!video.player) return;

      if (video.host === hosts.html5) {
        video.player.play();
      }
      if (video.host === hosts.youtube && video.player.playVideo) {
        video.player.playVideo();
      }
    });
  }

  function hostFromVideoElement(video) {
    if (video.tagName === 'VIDEO') {
      return hosts.html5;
    }
    if (video.tagName === 'IFRAME') {
      if (
        /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
          video.src
        )
      ) {
        return hosts.youtube;
      }
    }
    return null;
  }

  function loadVideos(host) {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];
        if (video.host === host) {
          video.ready();
        }
      }
    }
  }

  function fallbackToNativeVideo() {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];

        if (video.nativeVideo) continue;

        if (video.host === hosts.html5) {
          video.element.setAttribute('controls', 'controls');
          video.nativeVideo = true;
        }
      }
    }
  }

  function removeSectionVideos(sectionId) {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];
        if (video.sectionId === sectionId) {
          if (video.player) video.player.destroy();
          delete videos[key];
        }
      }
    }
  }

  return {
    init: init,
    hosts: hosts,
    loadVideos: loadVideos,
    removeSectionVideos: removeSectionVideos
  };
})();
Colors.ProductModel = (function() {
  var modelJsonSections = {};
  var models = {};
  var xrButtons = {};

  var selectors = {
    mediaGroup: '[data-product-single-media-group]',
    xrButton: '[data-shopify-xr]'
  };

  function init(modelViewerContainers, sectionId) {
    modelJsonSections[sectionId] = {
      loaded: false
    };

    modelViewerContainers.each(function(index) {
      var $modelViewerContainer = $(this);
      var mediaId = $modelViewerContainer.data('media-id');
      var $modelViewerElement = $(
        $modelViewerContainer.find('model-viewer')[0]
      );
      var modelId = $modelViewerElement.data('model-id');

      if (index === 0) {
        var $xrButton = $modelViewerContainer
          .closest(selectors.mediaGroup)
          .find(selectors.xrButton);
        xrButtons[sectionId] = {
          $element: $xrButton,
          defaultId: modelId
        };
      }

      models[mediaId] = {
        modelId: modelId,
        sectionId: sectionId,
        $container: $modelViewerContainer,
        $element: $modelViewerElement
      };
    });

    window.Shopify.loadFeatures([
      {
        name: 'shopify-xr',
        version: '1.0',
        onLoad: setupShopifyXr
      },
      {
        name: 'model-viewer-ui',
        version: '1.0',
        onLoad: setupModelViewerUi
      }
    ]);

    Colors.LibraryLoader.load('modelViewerUiStyles');
  }

  function setupShopifyXr(errors) {
    if (errors) {
      return;
    }
    if (!window.ShopifyXR) {
      document.addEventListener('shopify_xr_initialized', function() {
        setupShopifyXr();
      });
      return;
    }

    for (var sectionId in modelJsonSections) {
      if (modelJsonSections.hasOwnProperty(sectionId)) {
        var modelSection = modelJsonSections[sectionId];

        if (modelSection.loaded) continue;
        var $modelJson = $('#ModelJson-' + sectionId);

        window.ShopifyXR.addModels(JSON.parse($modelJson.html()));
        modelSection.loaded = true;
      }
    }
    window.ShopifyXR.setupXRElements();
  }

  function setupModelViewerUi(errors) {
    if (errors) {
      return;
    }
    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];
        if (!model.modelViewerUi) {
          model.modelViewerUi = new Shopify.ModelViewerUI(model.$element);
        }
        setupModelViewerListeners(model);
      }
    }
  }

  function setupModelViewerListeners(model) {
    var xrButton = xrButtons[model.sectionId];
    model.$container.on('mediaVisible', function() {
      xrButton.$element.attr('data-shopify-model3d-id', model.modelId);
      if($('button.view-in-space[data-shopify-model3d-id]').length){
        $('button.view-in-space[data-shopify-model3d-id]').attr('data-shopify-model3d-id', model.modelId);
      }
      if (Colors.Helpers.isTouch()) return;
      model.modelViewerUi.play();
    });
    model.$container
      .on('mediaHidden', function() {
        xrButton.$element.attr('data-shopify-model3d-id', xrButton.defaultId);
        if($('button.view-in-space[data-shopify-model3d-id]').length){
          $('button.view-in-space[data-shopify-model3d-id]').attr('data-shopify-model3d-id', xrButton.defaultId);
        }
        model.modelViewerUi.pause();
      })
      .on('xrLaunch', function() {
        model.modelViewerUi.pause();
      });
  }

  function removeSectionModels(sectionId) {
    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];
        if (model.sectionId === sectionId) {
          delete models[key];
        }
      }
    }
    delete modelJsonSections[sectionId];
  }

  return {
    init: init,
    removeSectionModels: removeSectionModels
  };
})();
Colors.Product = (function() {

  function Product(container) {
    this.$container = $(container);

    this.initStoreAvailability();
    this.initVariants();
    this.initImageZoom();
    this.initMediaGallery();
    this.initProductVideo();
    this.initProductModel();
    this.initShopifyXrLaunch();
    this.initQuantitySelector();
    this.initAccordion();
    this.initSticky();
  }

  Product.prototype = Object.assign({}, Product.prototype, {
    initStoreAvailability: function() {
      var $storeAvailabilityContainer = $(
        '[data-store-availability-container]',
        this.$container
      );
      if ($storeAvailabilityContainer.length < 1) return;
      this.storeAvailability = new Colors.StoreAvailability(
        $storeAvailabilityContainer[0]
      );
    },
    initVariants: function() {
      var sectionId = this.$container.attr('data-section-id');

      this.selectors = {
        originalSelectorId: '#productSelect-' + sectionId,
        addToCart: '#addToCart-' + sectionId,
        productPrice: '#productPrice-' + sectionId,
        comparePrice: '#comparePrice-' + sectionId,
        unitPrice: '#unitPrice-' + sectionId,
        productStock: '#productStock-' + sectionId,
        productQuantity: '#productQuantity-' + sectionId,
        singleOptionSelector: '.single-option-selector-' + sectionId
      };

      this.settings = {
        sectionId: sectionId,
        enableHistoryState: this.$container.data('enable-history-state') || true,
        namespace: '.product-' + sectionId
      };

      // Stop parsing if we don't have the product json script tag
      if (!$('#ProductJson-' + sectionId).html()) {
        return;
      }

      this.productSingleObject = JSON.parse($('#ProductJson-' + sectionId).html());

      var options = {
        $container: this.$container,
        enableHistoryState: this.settings.enableHistoryState,
        product: this.productSingleObject,
        singleOptionSelector: this.selectors.singleOptionSelector,
        originalSelectorId: this.selectors.originalSelectorId
      };

      if ($(options.originalSelectorId).length) {
        this.variants = new Colors.Variants(options);
        this.$container.on('variantChange' + this.settings.namespace, this.updateAddToCartButton.bind(this));
        this.$container.on('variantPriceChange' + this.settings.namespace, this.updatePrices.bind(this));
        this.$container.on('variantImageChange' + this.settings.namespace, this.updateMedia.bind(this));
      }

      // Update label value
      $('fieldset label:not(.disabled)', this.$container).on('click', function(e){
        $value = $('span.value', $(this).parent().prev());
        var value = $(this).attr('value');
        if($value.length && value.length) {
          $value.html(value);
        }
      });

      if (this.storeAvailability) {
        this.storeAvailability.updateContent(
          this.variants ? this.variants.currentVariant : this.productSingleObject.variants[0]
        );
      }
    },

    updateAddToCartButton: function(event) {
      var variant = event.variant;

      var cache = {
        $quantity: $(this.selectors.productQuantity),
        $stock: $(this.selectors.productStock)
      };

      if (variant) {
        // Select a valid variant if available
        if (variant.available) {
          // We have a valid product variant, so enable the submit button
          this.enableAddToCart();
        } else {
          // Variant is sold out, disable the submit button
          this.disableAddToCart();
        }

        // Update quantity selector
        if (cache.$quantity.length) {
          variant.inventory_quantity = window.product.inventory[variant.id];
          variant.inventory_policy = window.product.policy[variant.id];
          if (variant.inventory_management == 'shopify' && variant.inventory_quantity > 0 && variant.inventory_policy != "continue") {
            cache.$quantity
              .attr('max', variant.inventory_quantity)
              .trigger('change');
          } else {
            cache.$quantity
              .removeAttr('max');
          }
        }

        // Update stock
        if (variant.inventory_management == 'shopify') {
          cache.$stock.removeClass('hide').find('span.units').html(variant.inventory_quantity);
        } else {
          cache.$stock.addClass('hide');
        }

        // Update store availability
        if (this.storeAvailability) {
          this.storeAvailability.updateContent(
            variant
          );
        }

      } else {
        this.disableAddToCart();
        if (this.storeAvailability) {
          this.storeAvailability.hide();
        }
      }
    },

    updatePrices: function(event) {
      var variant = event.variant;

      if (variant) {
        $(this.selectors.productPrice).html($('<span>').html(Colors.Currency.formatMoney(variant.price, Colors.strings.money_format)));

        // Also update and show the product's compare price if necessary
        if (variant.compare_at_price > variant.price) {
          $(this.selectors.comparePrice).html($('<span>').html(Colors.Currency.formatMoney(variant.compare_at_price, Colors.strings.money_format))).show();
          $(this.selectors.productPrice).addClass('on-sale');
        } else {
          $(this.selectors.comparePrice).hide();
          $(this.selectors.productPrice).removeClass('on-sale');
        }

        // And the unit price
        if (variant.unit_price_measurement) {
          unitPrice = Colors.Currency.formatMoney(variant.unit_price, Colors.strings.money_format);
          unitPrice += ' / ';
          unitPrice += this._getBaseUnit(variant);
          $(this.selectors.unitPrice).html($('<span>').addClass('unit-price').html(unitPrice)).show();
        } else {
          $(this.selectors.unitPrice).empty().hide();
        }

      } else {
        $(this.selectors.comparePrice).hide();
        $(this.selectors.unitPrice).empty().hide();
      }
    },

    _getBaseUnit: function(variant) {
      return variant.unit_price_measurement.reference_value === 1
        ? variant.unit_price_measurement.reference_unit
        : variant.unit_price_measurement.reference_value +
            variant.unit_price_measurement.reference_unit;
    },

    updateMedia: function(event) {
      var variant = event.variant,
          $gallery = $('.gallery', this.$container)
          has_gallery = $gallery.is(':visible');

      if (variant) {
        if (variant.featured_image) {
          var id = variant.featured_media.id,
              $newMedia = $('#' + id);

          if($newMedia.length){
            if(has_gallery) {
              $newMedia.siblings().addClass('hide').trigger('mediaHidden');
              $newMedia.removeClass('hide').trigger('mediaVisible');              
            } else {
              $newMedia.prependTo($newMedia.parent());
            }
            var destination = $newMedia.offset().top - $('.header').outerHeight(),
                current = $('body,html').scrollTop();
            if(Math.abs(destination-current) > 50) {
              $('body,html').animate({ scrollTop: destination}, { duration: 300 });
            }
          }
        }
      }
    },

    enableAddToCart: function(){
      var $addToCart = $(this.selectors.addToCart),
          $quantity = $(this.selectors.productQuantity);
      if($addToCart.prop('disabled') === true){
        $addToCart
          .prop('disabled', false)
          .find('span')
          .html(Colors.strings.add_to_cart);
      }
      if ($quantity.length) {
        $quantity.prop('disabled', false);
      }
    },

    disableAddToCart: function(copy){
      var $addToCart = $(this.selectors.addToCart),
          $quantity = $(this.selectors.productQuantity);
      if($addToCart.prop('disabled') === false){
        $addToCart
          .prop('disabled', true)
          .find('span')
          .html(Colors.strings.unavailable);
      }
      if ($quantity.length) {
        $quantity.prop('disabled', true);
      }
    },

    initMediaGallery: function() {
      var self = this;
      $(document)
        .on('touchstart click', '[data-action=show-product-media][data-id]', function(e){
          if(e.type == "click") e.preventDefault();
          if(is_touch_device && e.type == "click") return;
          if(!is_touch_device && e.type == "touchstart") return;

          var $newMedia = $('#' + $(this).data('id'));
          $newMedia.siblings().addClass('hide').trigger('mediaHidden');
          $newMedia.removeClass('hide').trigger('mediaVisible');
        });
    },

    initImageZoom: function() {
      try {
        $('[data-mfp-src]', this.$container).magnificPopup({
          type: 'image',
          mainClass: 'mfp-fade',
          closeOnBgClick: true,
          closeBtnInside: false,
          closeOnContentClick: true,
          tClose: Colors.strings.zoom_close,
          removalDelay: 500,
          closeMarkup: '<button title="%title%" class="mfp-close"><i class="fc fc-close"></i></button>',
          gallery: {
            enabled:true,
            navigateByImgClick: false,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><span class="mfp-chevron mfp-chevron-%dir%"></span></button>',
            tPrev: Colors.strings.zoom_previous,
            tNext: Colors.strings.zoom_next
          },
          callbacks: {
            beforeOpen: function() {
              $('body').css('overflow', 'hidden');
            },
            beforeClose: function() {
              $('body').css('overflow', 'auto');
            }
          }
        });
      } catch (e) {
        console.log(e);
      }
    },

    initProductVideo: function() {
      var sectionId = this.settings.sectionId;
      $('[data-product-media-type-video]', this.$container).each(function() {
        Colors.ProductVideo.init($(this), sectionId);
      });
    },

    initProductModel: function() {
      var $modelViewerElements = $(
        '[data-product-media-type-model]',
        this.$container
      );
      if ($modelViewerElements.length < 1) return;
      Colors.ProductModel.init($modelViewerElements, this.settings.sectionId);
    },

    initShopifyXrLaunch: function() {
      var self = this;
      $(document).on('shopify_xr_launch', function() {
        var $currentMedia = $(
          self.selectors.productMediaWrapper +
            ':not(.' +
            self.classes.hidden +
            ')',
          self.$container
        );
        $currentMedia.trigger('xrLaunch');
      });
    },

    initQuantitySelector: function() {
      qtySelectors();
      $(document).on('change', '.js-qty input', function(){
        var max = parseInt($(this).attr('max')),
            val = parseInt($(this).val()) || 1;

        if(isNaN(max)){
          $(this).val(Math.max(val, 1));
        } else {
          $(this).val(Math.max(Math.min(val, max), 1));
          if(val > max){
            $(this).stop().fadeTo(0, 0.25).fadeTo(300, 1, 'swing');
          }
        }
      });
    },

    initAccordion: function() {
      var self = this;
      this.$container.on('click', '.accordion details summary', function(e){
        $('.accordion details[open]', self.$container).not($(this).parent()).removeAttr('open');
      });
    },

    initSticky: function() {
      var self = this,
          $header = $('#shopify-section-header .header'),
          has_sticky = this.$container.hasClass('sticky');

      if((has_sticky && $header.hasClass('sticky')) || Shopify.designMode){
        $(window)
          .on('scroll.sticky-product-content', function(){
            var top = 10;
            if($header.hasClass('sticky')) {
              top += $('.bar', $header).outerHeight();
            }
            $('.item > .left, .item > .right', self.$container).css('top', top);
          }).trigger('scroll.sticky-product-content');
      }
    },

    onUnload: function() {
      this.$container.off(this.settings.namespace);
      $(window).off('scroll.sticky-product-content');
      Colors.ProductVideo.removeSectionVideos(this.settings.sectionId);
      Colors.ProductModel.removeSectionModels(this.settings.sectionId);
    }
  });

  return Product;
})();
Colors.StoreAvailability = (function() {

  function StoreAvailability(container) {
    this.container = container;
    this.productTitle = container.dataset.productTitle;
  }

  StoreAvailability.prototype = Object.assign({}, StoreAvailability.prototype, {
    updateContent: function(variant) {
      var rootUrl = this.container.dataset.rootUrl;
      if (!rootUrl.endsWith("/")) {
        rootUrl = rootUrl + "/";
      }

      var self = this,
         variantSectionUrl =
          rootUrl +
          'variants/' +
          variant.id +
          '/?section_id=store-availability';

      this.container.innerHTML = '';
      fetch(variantSectionUrl)
        .then(function(response) {
          return response.text();
        })
        .then(function(storeAvailabilityHTML) {
          $('.side-pick').remove();
          self.container.innerHTML = storeAvailabilityHTML;
          self.container.innerHTML = self.container.firstElementChild.innerHTML;
          if($('.side-pick').length > 0) {
            $('[data-store-availability-modal-product-title]').text(self.productTitle);
            $('.side-pick').insertAfter('.header');
            if(variant.available){
              self.show();
            } else {
              self.hide();
            }
          }
          if($(self.container).data('has-only-default-variant')){
            $('.side-pick .side-pick-header h3').remove();
          }
        });
    },

    show: function() {
      $('.store-availability').show();
    },

    hide: function() {
      $('.store-availability').hide();
    }
  });

  return StoreAvailability;
})();
Colors.RelatedProducts = (function() {

  function RelatedProducts(container) {
    var self = this;

    self.$container = $(container);
    self.$product_related_products = $('.product-related-products[data-product-id]', this.$container);

    if (self.$product_related_products.length) {
      var productId = this.$product_related_products.data('product-id'),
          limit = this.$product_related_products.data('limit') || 4,
          baseUrl = this.$product_related_products.data('base-url'),
          url = baseUrl + "?section_id=product-recommendations&limit="+limit+"&product_id="+productId;

      $.ajax({
        type: 'GET',
        dataType: 'html',
        url: url,
        success: function(data) {
          var $data = $(data),
              $new_product_related_products = $data.find('.product-related-products .collection-products')
              $dom_product_related_products = $('.product-related-products .collection-products', self.$container);
          $dom_product_related_products.replaceWith($new_product_related_products);
        }
      });
    } else {
      self.$container.remove();
    }
  }

  return RelatedProducts;
})();

Colors.Collection = (function() {

  function Collection(container) {
    this.$container = $(container);
    this.init();
  }

  Collection.prototype = Object.assign({}, Collection.prototype, {
    init: function() {
      this.initNavigation();
      this.initInteractions();
      this.initFilters();
    },

    initNavigation: function() {
      this.initProductCategories();
      this.initProductPagination();
    },

    initProductCategories: function() {
      var $categories = $('.categories', this.$container),
          $body = $('body'),
          section_id = this.$container.attr('data-section-id'),
          collection_id = $('[data-collection-id]', this.$container).data('collection-id'),
          cache = 'section-' + section_id + '-' + collection_id + '-categories',
          active_section_id_cache = cache + 'active-section-id',
          total = $('li.all sup', $categories).html();

      if($categories.length == 1){
        if ($body.data(cache)) {
          $cached_categories = $body.data(cache).clone(true, true);
          $categories.replaceWith($cached_categories);
          if ($body.data(active_section_id_cache)) {
            $('.active', $cached_categories).removeClass('active');
            $('#' + $body.data(active_section_id_cache), $cached_categories).addClass('active');
          }
          $('.active', $cached_categories).trigger('click');
        } else {
          var loadNextTag = function(){
            var $tags = $('a:not(.loaded)', $categories);

            if ($tags.length > 0){
              var $tag = $tags.first(),
                  url = $tag.attr('href');

              if(window.location.search.length > 0){
                var params = new URLSearchParams(window.location.search);
                params.delete('page');
                if(params.toString().length > 0) {
                  url = url + '?' + params.toString();
                }
              }

              $.ajax({
                type: 'GET',
                dataType: 'html',
                url: url,
                success: function(data) {
                  var $data = $(data),
                      $collection_products = $data.find('.collection-products'),
                      title = $data.filter('title').text()
                      count = 0;

                  if($collection_products.length){
                    count = $collection_products.data('count');
                    $('sup', $tag).text(count);
                  }

                  if(count == 0){
                    $tag.parent('li').remove();
                  } else if(count == total && !$tag.parent('li').hasClass('all')){
                    $tag.parent('li').remove();
                  } else {
                    if(window.is_touch_device || window.is_lt_ie9){
                      $collection_products.removeClass('with-interactions');
                    }

                    $tag
                      .addClass('loaded')
                      .data('collection-products', $collection_products)
                      .on('touchstart click', function(e){
                        if(!e.ctrlKey && !e.metaKey){
                          if(e.type == "click") e.preventDefault();
                          if(is_touch_device && e.type == "click") return;
                          if(!is_touch_device && e.type == "touchstart") return;

                          var $tag = $(this),
                              $container = $(this).parents('.collection'),
                              $categories = $('.categories', $container),
                              $dom_collection_products = $('.collection-products', $container);

                          $dom_collection_products.html($tag.data('collection-products').html())
                          $('a', $categories).removeClass('active');
                          $tag.addClass('active');
                          Colors.initShapes();
                          Colors.focus($dom_collection_products);

                          if (!$('body').hasClass('template-index')) {
                            if (e.originalEvent) {
                              document.title = title;

                              window.history.pushState({url: url}, title, url);
                            }
                          }
                          $body.data(active_section_id_cache, $tag.attr('id'));
                        }
                      });
                  }

                  loadNextTag();
                }
              });
            } else {
              $body.data(cache, $categories.clone(true, true));
            }
          };
          loadNextTag();
        }
      }
    },

    initProductPagination: function() {
      if(!$('body').hasClass('template-collection')) {
        var collection_url = $('[data-collection-url]', this.$container).data('collection-url'),
            self = this;

        $('.pagination a', this.$container).each(function(){
          var url = $(this).attr('href');
          if(url.indexOf('/?page=') === 0){
            $(this).attr('href', collection_url + url);
          }
        });

        this.$container.on('click.pagination', '.pagination a', function(e){
          var url = $(this).attr('href');
          if(!e.ctrlKey && !e.metaKey){
            $.ajax({
              type: 'GET',
              dataType: 'html',
              url: url,
              success: function(data) {
                var $data = $(data),
                    $collection_products = $data.find('.collection-products'),
                    $dom_collection_products = $('.collection-products', self.$container),
                    title = $data.filter('title').text()
                    count = 0,
                    offset = 0,
                    duration = 0;

                $dom_collection_products.replaceWith($collection_products);
                Colors.initShapes();

                if(window.is_touch_device || window.is_lt_ie9){
                  $collection_products.removeClass('with-interactions');
                }

                $dom_collection_products.fadeTo(0,0).fadeTo(300, 1);
                if ($('body').hasClass('template-index')) {
                  offset = self.$container.offset().top - $('.header').outerHeight();
                  duration = 600;
                }
                $('body,html').animate({ scrollTop: offset}, { duration: duration });
                if (e.originalEvent) {
                  // document.title = title;
                  // window.history.pushState({url: url}, title, url);
                }
              }
            });
            e.preventDefault();
          }
        });
      }
    },

    initInteractions: function() {
      var $collection = $('.collection-products', this.$container),
          self = this;

      if($collection.length == 1){
        if(window.is_touch_device || window.is_lt_ie9 ){
          $collection.removeClass('with-interactions');
        }
        if($('.template-product:not(.dummie)').length == 0 && !window.is_lt_ie9){
            enquire.register("screen and (min-width:620px)", {
              match : function() {
                self.initProductPreviews();
              },      
              unmatch : function() {
                self.stopProductPreviews();
                self.closeProductPreviews();
              }
            });
        }
      }
    },

    initProductPreviews: function(){
      var self = this;
      this.$container
        .on('click.productPreview', '.collection-product[href]:not(.dummie)', function(e){
          var $this = $(this),
              $collection = $this.parents('.collection-products');

          if(!e.ctrlKey && !e.metaKey && $collection.hasClass('with-previews')){
            var $current = $this,
                $insertAfterProduct = false;

            if($this.hasClass('opened')){
              e.preventDefault();
              return;
            } 

            $this.addClass('opened');

            // find next product before 
            // a clear: left product.
            do{
              var $next = $current.next();
              if($next.length){
                if($current.offset().left > $next.offset().left){
                  $insertAfterProduct = $current;
                } else {
                  $current = $next;
                }
              } else {
                $insertAfterProduct = $current;
              }
            } while(!$insertAfterProduct);

            // Load preview
            $.ajax({
              type: 'GET',
              dataType: 'html',
              url: $this.attr('href'),
              success: function(data) {
                var $preview = $(data).find('.content.product'),
                    $page = $('body,html');

                // close previous previews
                $('.collection-product.opened', self.$container).not($this).removeClass('opened');
                $('.preview', self.$container).remove();

                // insert element
                $preview
                  .addClass('preview')
                  .removeClass('content')
                  .insertAfter($insertAfterProduct)
                  .data('thumbnail', $this);

                // init product page
                new Colors.Product($preview);

                // re-init ajax cart
                Colors.initAjaxCart();

                // init external libraries
                // payment button:
                Shopify.PaymentButton && Shopify.PaymentButton.init();
                // shopify product preview:
                if('SPR' in window) {
                  SPR.registerCallbacks();
                  SPR.initRatingHandler();
                  SPR.initDomEls();
                  SPR.loadProducts();
                  SPR.loadBadges();
                }
                // add here your third-party app call if needed

                // remember previous scroll position
                window.previousScrollTop = $(window).scrollTop();

                // animate in
                $page
                  .one('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function(){
                    $page.stop();
                  })
                  .delay(250)
                  .animate({
                    scrollTop: Math.round($preview.offset().top - ($('.header').hasClass('sticky') ? $('.header .bar.fixed').outerHeight() : 0))
                  }, {
                    duration: 1000,
                    delay: 2000,
                    easing: "easeOutQuad",
                    done: function(){
                      $page.off('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove');
                    }
                  });
              }
            });
            e.preventDefault();
          }
        })
        .on('click.closePreview', '[data-action=close-preview]', function(e){
          var $preview = $(this).parents('.preview'),
              removeProduct = function(){
                $preview.slideUp({
                  duration: 600,
                  easing: "easeInOutQuad",
                  complete: function(){
                    var $this = $(this),
                        $thumbnail = $this.data('thumbnail');
                    $this.remove();
                    $thumbnail.removeClass('opened');
                  }
                });
              };

          if(window.previousScrollTop && $('.preview').length == 1){
            $('body,html').animate({
              scrollTop: window.previousScrollTop
            }, {
              duration: 600,
              easing: "easeInOutQuad",
              complete: function(){
                removeProduct();
              }
            });
          } else{
            removeProduct();
          }
          window.previousScrollTop = false;
          e.preventDefault();
        });
    },

    closeProductPreviews: function(){
      $('.product.preview', this.$container).remove();
    },

    stopProductPreviews: function(){
      this.$container.off('click.productPreview');
    },

    initFilters: function() {
      var $filters = $('.sorting-and-filtering', this.$container);
      $filters.length && new Colors.Filters($filters);
    },
    
    onUnload: function(event) {
      this.$container
        .off('click.closePreview')
        .off('click.productPreview')
        .off('click.pagination');

      $('.categories a', this.$container).each(function(){
        $(this)
          .off('click');
      });
    }
  });

  return Collection;
})();
Colors.Collections = (function() {

  function Collections(container) {
    var $container = $(container),
        $items = $('.collections-items', $container);
    if($items.length){
      if(window.is_touch_device){
        $items.removeClass('interactive');
      }
    }
  }

  return Collections;
})();

Colors.FeaturedProducts = (function() {
  var PRODUCT_HEIGHT = 600,
      PRODUCT_MARGIN = 30;

  function FeaturedProducts(container) {
    var $container = this.$container = $(container),
        $products = this.$products = $('.featured-product', $container),
        $window = $(window), $body = $('body'), $doc = $(document),
        self = this;

    if($products.length <= 1) return;
    if(!$container.hasClass('with-transition')) return;

    var onScroll = function(e){
      var header_height = $('.header .bar').outerHeight(true),
          scroll_top = $window.scrollTop() + header_height,
          container_offset_top = $container.offset().top,
          container_height = $container.outerHeight();
          container_scroll_top = scroll_top - container_offset_top,
          viewport_offset = - ($window.height() - header_height) / 2,
          last_product_height = PRODUCT_HEIGHT + PRODUCT_MARGIN,
          $product = self.getActiveProduct(container_scroll_top, viewport_offset);

      if(scroll_top >= container_offset_top && scroll_top <= container_offset_top + container_height - last_product_height + PRODUCT_MARGIN) {
        $container.addClass('active');
        $products.removeClass('active');
        $product.addClass('active');
        $('.info', $product).css('top', header_height);
      } else {
        $container.removeClass('active');
        $products.removeClass('active');
        $('.info', $products).css('top', 0);
      }
    };

    $window
      .on('scroll.featured-products', onScroll)
      .trigger('scroll.featured-products');

    $doc
      .on('opening', function(){
        var $product = $container.find('.active.featured-product'),
            $info = $product.find('.info');
        if($product.length) {
          $info.css('top', $info.offset().top - $product.offset().top);
          $product.addClass('absolute');
        }
      })
      .on('closing', function(){
        setTimeout(function(){
          var $product = $container.find('.active.featured-product'),
              $info = $product.find('.info');
          if($product.length) {
            $product.removeClass('absolute');
            $info.css('top', $('.header .bar').outerHeight(true));
          }
        }, 600);
      });

    enquire.register("screen and (max-width:620px), screen and (max-height:400px), screen and (min-height:900px)", {
      match : function() {
        $window.off('scroll.featured-products');
        $container.removeClass('active');
        $products.removeClass('active absolute');
      },
      unmatch : function() {
        $window
          .on('scroll.featured-products', onScroll)
          .trigger('scroll.featured-products');
      }
    });
  }

  FeaturedProducts.prototype = Object.assign({}, FeaturedProducts.prototype, {
    getActiveProduct: function(container_scroll_top, viewport_offset){
      var height = viewport_offset;
      for(var i=0; i<this.$products.length; i++) {
        height += PRODUCT_HEIGHT + PRODUCT_MARGIN;
        if (container_scroll_top <= height) {
          return this.$products.eq(i);
        }
      }
      return $('.doesnt-exist');
    },

    onUnload: function(event) {
      $(window)
        .off('scroll.featured-products');
      $(document)
        .off('opening')
        .off('closing');
    }
  });

  return FeaturedProducts;
})();

Colors.FeaturedVideo = (function() {
  var ytLoading = false,
      ytLoaded = false,
      calls = [];

  function FeaturedVideo(container) {
    var $window = $(window),
        $container = $(container),
        $cover = $('.cover', $container),
        $iframe = $('iframe', $container),
        type = $iframe.attr('data-type');

    $cover.on('click', function(e){
      e.preventDefault();
      $iframe.css('opacity', 1);
      $cover.hide();
    });

    if(type == 'vimeo') {
      var player = new Vimeo.Player($iframe[0]);
      $cover.on('click', function(e){
        e.preventDefault();
        try {
          if(player !== undefined) {
            player.play();
          }
        } catch (e) {
          console.log(e);
        }
      });
    } else if (type == 'youtube') {

      var initPlayer = function() {
        var player = new YT.Player($iframe[0]);
        $cover.on('click', function(e){
          e.preventDefault();
          player.playVideo();
        });
      };

      if(!ytLoading && !ytLoaded) {
        ytLoading = true;
        window.onYouTubeIframeAPIReady = function() {
          ytLoaded = true;
          calls.forEach(function(call){
            call();
          });
        };
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        $container.append(tag);
      }

      if(ytLoaded) {
        initPlayer();
      } else {
        calls.push(initPlayer);
      }
    }

  }

  return FeaturedVideo;
})();

Colors.Map = (function() {

  var config = {
    zoom: 15
  };
  var apiStatus = null;
  var mapsToLoad = [];

  function Map(container) {
    this.$container = $(container);
    var key = this.$container.data('api-key'),
        mapId = this.$container.data('map-style-id');

    if (typeof key !== 'string' || key === '') {
      return;
    }

    if (typeof mapId !== 'string' || mapId === '') {
      config.mapId = false;
    } else {
      config.mapId = mapId;
    }

    if (apiStatus === 'loaded') {
      var self = this;

      // Check if the script has previously been loaded with this key
      var $script = $('script[src*="' + key + '&"]');
      if ($script.length === 0) {
        $.getScript(
          'https://maps.googleapis.com/maps/api/js?key=' + key
        ).then(function() {
          apiStatus = 'loaded';
          self.createMap();
        });
      } else {
        this.createMap();
      }
    } else {
      mapsToLoad.push(this);

      if (apiStatus !== 'loading') {
        apiStatus = 'loading';
        if (typeof window.google === 'undefined') {
          $.getScript(
            'https://maps.googleapis.com/maps/api/js?key=' + key
          ).then(function() {
            apiStatus = 'loaded';
            initAllMaps();
          })
        }
      }
    }
  }

  function initAllMaps() {
    // API has loaded, load all Map instances in queue
    $.each(mapsToLoad, function(index, instance) {
      instance.createMap();
    });
  }

  function geolocate($map) {
    var deferred = $.Deferred();
    var geocoder = new google.maps.Geocoder();
    var address = $map.data('address-setting');

    geocoder.geocode({ address: address }, function(results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
        deferred.reject(status);
      }

      deferred.resolve(results);
    });

    return deferred;
  }

  Map.prototype = Object.assign({}, Map.prototype, {
    createMap: function() {
      var $map = this.$container.find('.map-container');

      return geolocate($map)
        .then(
          function(results) {
            var mapOptions = {
              zoom: config.zoom,
              center: results[0].geometry.location,
              draggable: true,
              clickableIcons: false,
              scrollwheel: false,
              disableDoubleClickZoom: true,
              disableDefaultUI: true,
              zoomControl: true,
              mapId: config.mapId
            };

            var map = (this.map = new google.maps.Map($map[0], mapOptions));
            var center = (this.center = map.getCenter());

            //eslint-disable-next-line no-unused-vars
            var marker = new google.maps.Marker({
              map: map,
              position: center
            });

            google.maps.event.addDomListener(window, 'resize', function() {
              google.maps.event.trigger(map, 'resize');
              map.setCenter(center);
            });
          }.bind(this)
        )
        .fail(function() {
          var errorMessage;

          switch (status) {
            case 'ZERO_RESULTS':
              errorMessage = Colors.strings.addressNoResults;
              break;
            case 'OVER_QUERY_LIMIT':
              errorMessage = Colors.strings.addressQueryLimit;
              break;
            default:
              errorMessage = Colors.strings.addressError;
              break;
          }

          // Only show error in the theme editor
          if (true) {
            $map
              .addClass('error')
              .find('.warning')
              .html(errorMessage);
          }
        });
    },

    onUnload: function() {
      if (typeof window.google !== 'undefined') {
        google.maps.event.clearListeners(this.map, 'resize');
      }
    }
  });

  return Map;
})();

Colors.Faq = (function() {

  function Faq(container) {
    var $container = this.$container = $(container);
    $container.on('click', '.accordion details summary', function(e){
      $('.accordion details[open]', $container).not($(this).parent()).removeAttr('open');
    });
  }

  return Faq;
})();

Colors.Slideshow = (function() {

  function Slideshow(container) {
    var $container = $(container),
        $slideshow = this.$slideshow = $('.inner', $container),
        $slides = $('.slide', $slideshow);

    if($slides.length){
      $slideshow
        .on('init', function(event, slick){
          var $ui = $('.slick-dots, .slick-prev, .slick-next', $slideshow);
          if($(slick.$slides.get(0)).find('.slide').hasClass('is-light')) {
            $ui.addClass('is-light');
          } else {
            $ui.removeClass('is-light');
          }
        })
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
          var $ui = $('.slick-dots, .slick-prev, .slick-next', $slideshow);
          if($(slick.$slides.find('.slide').get(nextSlide)).hasClass('is-light')) {
            $ui.addClass('is-light');
          } else {
            $ui.removeClass('is-light');
          }
        })
        .slick({
          arrows: $slideshow.data('arrows'),
          dots: $slideshow.data('dots'),
          autoplay: $slideshow.data('autoplay'),
          autoplaySpeed: $slideshow.data('speed') * 1000,
          fade: $slideshow.data('use-fade'),
          speed: $slideshow.data('use-fade') ? 600 : 1200,
          focusOnChange: false,
          accessibility: true
        });
    }
  };

  Slideshow.prototype = Object.assign({}, Slideshow.prototype, {

    onDeselect: function(event) {
      if(this.$slideshow.hasClass('slick-initialized')){
        if (this.$slideshow.data('autoplay')) {
          this.$slideshow.slick('slickPlay');
        }
      }
    },
    onBlockSelect: function(event) {
      if(this.$slideshow.hasClass('slick-initialized')){
        $target = $(event.target);
        this.$slideshow.slick('slickPause');
        this.$slideshow.slick('slickGoTo', $target.data('index'), true);
      }
    },
    onBlockDeselect: function(event) {
      this.onDeselect(event);
    },
    onUnload: function(event) {
      this.$slideshow
        .off('init')
        .off('beforeChange');
    }
  });

  return Slideshow;
})();
Colors.CategoriesList = (function() {
  function CategoriesList(container) {
    var $container = this.$container = $(container),
        interval = [],
        self = this,
        previous = false;

    $('.category a', $container)
      .on('mouseenter', function(e){
        var $this = $(this),
            $image = $('.image', $this),
            i = $this.parent().index(),
            offset = $this.offset(),
            x = e.pageX - offset.left - $this.outerWidth() / 2,
            y = e.pageY - offset.top - $this.outerHeight() / 2,
            ox = x,
            oy = y;

        if($image.length == 0) return;

        clearInterval(interval[previous]);
        previous = i;

        $image.data('x', x);
        $image.data('y', y);

        interval[i] = setInterval(function(){
          var dx = $image.data('x'),
              dy = $image.data('y'),
              x = ox + (dx-ox)/40,
              y = oy + (dy-oy)/40;

          ox = x;
          oy = y;

          $image.css('transform', 'translate(' + x + 'px, ' + y + 'px)');

        }, 1);
      })
      .on('mousemove', function(e){
        var $this = $(this),
            $image = $('.image', $this),
            offset = $this.offset(),
            x = e.pageX - offset.left - $this.outerWidth() / 2,
            y = e.pageY - offset.top - $this.outerHeight() / 2;

        if($image.length == 0) return;

        $image.data('x', x);
        $image.data('y', y);
      });
  }

  CategoriesList.prototype = Object.assign({}, CategoriesList.prototype, {
    animate: function($image, dx, dy, x, y){
      setInterval(function(){
        var nx = x + (dx - x)/10,
            ny = y + (dy - y)/10;
        $image
          .data('x', nx)
          .data('y', ny)
          .css('transform', 'translate(' + nx + 'px, ' + ny + 'px)');
      },100);
    }
  });

  return CategoriesList;
})();

window.themeInfo = {name: "Colors"};

$(document).ready(function() {
  Colors.initIE();
  Colors.initiOS();
  Colors.initEasings();
  Colors.initSections();
  Colors.initLoginPage();
  Colors.initAddressesPage();
  Colors.initListeners();
  Colors.initNewsletter();
  Colors.initShapes();
  Colors.initQuantitySelectors();
  Colors.initAjaxCart();
});

Colors.initIE = function(){
  window.is_lt_ie9 = $("html").hasClass("lt-ie9");
  if (navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){
    $("html").addClass("ie");
  }
};

Colors.initiOS = function(){
  if(window.is_ios && !window.MSStream){
    // fix for safari ios 9 viewport problem
    // https://forums.developer.apple.com/thread/13510
    document.querySelector('meta[name=viewport]').setAttribute(
      'content',
      'initial-scale=1.0001, minimum-scale=1.0001, maximum-scale=1.0001, user-scalable=no'
    );
  }
}

Colors.initEasings = function(){
  var baseEasings = {};

  $.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
    baseEasings[ name ] = function( p ) {
      return Math.pow( p, i + 2 );
    };
  });

  $.extend( baseEasings, {
    Sine: function( p ) {
      return 1 - Math.cos( p * Math.PI / 2 );
    },
    Circ: function( p ) {
      return 1 - Math.sqrt( 1 - p * p );
    },
    Elastic: function( p ) {
      return p === 0 || p === 1 ? p :
        -Math.pow( 2, 8 * (p - 1) ) * Math.sin( ( (p - 1) * 80 - 7.5 ) * Math.PI / 15 );
    },
    Back: function( p ) {
      return p * p * ( 3 * p - 2 );
    },
    Bounce: function( p ) {
      var pow2,
        bounce = 4;

      while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
      return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
    }
  });

  $.each( baseEasings, function( name, easeIn ) {
    $.easing[ "easeIn" + name ] = easeIn;
    $.easing[ "easeOut" + name ] = function( p ) {
      return 1 - easeIn( 1 - p );
    };
    $.easing[ "easeInOut" + name ] = function( p ) {
      return p < 0.5 ?
        easeIn( p * 2 ) / 2 :
        1 - easeIn( p * -2 + 2 ) / 2;
    };
  });
};

Colors.initSections = function(){
  var sections = new Colors.Sections();

  sections.register('header', Colors.Header);
  sections.register('popup', Colors.Popup);
  sections.register('search', Colors.Search);
  sections.register('hero', Colors.Hero);
  sections.register('map', Colors.Map);
  sections.register('slideshow', Colors.Slideshow);
  sections.register('collection', Colors.Collection);
  sections.register('collections', Colors.Collections);
  sections.register('product', Colors.Product);
  sections.register('related-products', Colors.RelatedProducts);
  sections.register('featured-products', Colors.FeaturedProducts);
  sections.register('featured-video', Colors.FeaturedVideo);
  sections.register('faq', Colors.Faq);
  sections.register('categories-list', Colors.CategoriesList);
  sections.register('footer', Colors.Footer);
};

Colors.initLoginPage = function(){

  $(document)
    .on('click', '[data-action=toggle-recover-password]', function(){
      $('#recover_password').toggle();
      $('#login, #register, #guest').toggle();

      if($('#recover_password').is(':visible')){
        $('#recover_password input#recover-email').focus();
      } else {
        $('#login input#customer_email').focus();
      }
    });

  // direct access to recover page: account/login#recover
  if (window.location.hash == '#recover'){ 
    $('#login .round, #register .round, #guest .round').removeClass('round');
    $('[data-action=toggle-recover-password]').first().click();
  }
};

Colors.initAddressesPage = function(){
  var $body = $('body');

  if ($body.hasClass('template-customers-addresses') && window.customer_addresses){
    if (Shopify && Shopify.CountryProvinceSelector) {
      // Initialize observers on address selectors
      new Shopify.CountryProvinceSelector('address_country_new', 'address_province_new', {
        hideElement: 'address_province_container_new'
      });
      // Setup province selector on each customer address
      for(var i in window.customer_addresses){
        var id = window.customer_addresses[i];
        new Shopify.CountryProvinceSelector('address_country_' + id, 'address_province_' + id, {
          hideElement: 'address_province_container_' + id
        });
      }
    }

    // Contents of customer_area.js (global asset)
    Shopify.CustomerAddress = {
      toggleForm: function(id) {
        var $form = $('#edit_address_' + id),
            $button = $('#view_address_' + id);
        
        $form.toggle();
        $button.toggle();

        if ($form.is(':visible')){
          $('input:not([type=hidden])', $form).first().focus()
          $('body,html').animate({ scrollTop: $form.offset().top}, { duration: 600 });
        }

        return false;
      },
      toggleNewForm: function() {
        var $form = $('#add_address'),
            $menu = $('.menu.last');

        $form.toggle();
        $menu.toggle();

        if ($form.is(':visible')){
          $('input:not([type=hidden])', $form).first().focus()
          $('body,html').animate({ scrollTop: $form.offset().top}, { duration: 600 });
        }
        return false;
      },
      destroy: function(id, confirm_msg) {
        if (confirm(confirm_msg || Colors.string.customer_delete_question)) {
          Shopify.postLink('/account/addresses/'+id, {'parameters': {'_method': 'delete'}});
        }
      }
    }
  }
};

Colors.focus = function(selector) {
  var $div = $(selector),
      focusClass = 'js-focus-hidden',
      scrollTop = $('body,html').scrollTop();

  if($div.length){
    $div
      .attr('tabIndex', '-1')
      .addClass(focusClass)
      .focus();
    $('body,html')
      .scrollTop(scrollTop);
    $div.one('blur', function(e){
      $div
        .removeClass(focusClass)
        .removeAttr('tabIndex');
    });
  }
};

Colors.initListeners = function(){

  var $document = $(document),
      $body = $('body');

  $body.addClass('no-outlines');

  $document
    .on('click', '.skip-link', function(e){
      e.preventDefault();
      Colors.focus('.main .layout');
    })
    .on('touchstart click', '[data-action=toggle-browse]', function(e){
      if(e.type == "click") e.preventDefault();
      if(is_touch_device && e.type == "click") return;
      if(!is_touch_device && e.type == "touchstart") return;

      $document.trigger($body.hasClass('browsing') ? 'closing' : 'opening');
      $body.toggleClass('browsing');
    })
    .on('touchstart click', '[data-action=toggle-cart]', function(e){
      if(!e.ctrlKey && !e.metaKey && ajaxCart){
        if(e.type == "click") e.preventDefault();
        if(is_touch_device && e.type == "click") return;
        if(!is_touch_device && e.type == "touchstart") return;

        if($body.hasClass('picking')) {
          $('[data-action=toggle-pick]').first().click();
        } else if(!$body.hasClass('shopping')){
          ajaxCart.load();
        } else {
          $document.trigger('closing');
          $body.removeClass('shopping');
        }
      }
    })
    .on('keydown', '[data-action=toggle-cart]', function(e) {
      if(e.which == 13){
        e.preventDefault();
        $('[data-action=toggle-cart]').first().click();
      }
    })
    .on('touchstart click', '[data-action=toggle-pick]', function(e){
      if(e.type == "click") e.preventDefault();
      if(is_touch_device && e.type == "click") return;
      if(!is_touch_device && e.type == "touchstart") return;

      if($body.hasClass('shopping')) {
          $('[data-action=toggle-shopping]').first().click();
      } else if(!$body.hasClass('picking')){
        $document.trigger('opening');
        $body.addClass('picking')
        setTimeout(function(){
          Colors.focus('.side-pick');
        }, 500);
      } else {
        $document.trigger('closing');
        $body.removeClass('picking');
      }
    })
    .on('keydown', '[data-action=toggle-pick]', function(e) {
      if(e.which == 13){
        e.preventDefault();
        $('[data-action=toggle-pick]').first().click();
      }
    })
    .on('touchstart click', '[data-action=toggle-search]', function(e){
      if(!e.ctrlKey && !e.metaKey){
        if(e.type == "click") e.preventDefault();
        if(is_touch_device && e.type == "click") return;
        if(!is_touch_device && e.type == "touchstart") return;

        $body.toggleClass('searching');
        if($body.hasClass('searching')){
          $('.search-overlay input.text').val('').focus();
          $('a, button, input, textarea, div[role=button]', '.search-overlay').removeAttr('tabindex');
        } else {
          $('.search-overlay input.text').blur();
          $('.predictive-search-results').empty();
          $('a, button, input, textarea, div[role=button]', '.search-overlay').attr('tabindex', '-1');
        }
      }
    })
    .on('keydown', '[data-action=toggle-search]', function(e) {
      if(e.which == 13){
        e.preventDefault();
        $('[data-action=toggle-search]').first().click();
      }
    })
    .on('keyup', '.search-overlay input.text', function(e){
      var query = $(this).val(),
          searchBaseUrl = $(this).parents('form').attr('action'),
          $results = $('.predictive-search-results');

      // if option disabled
      if ($results.length === 0) {
        return;
      }

      // or not available because theme language
      if (shopifyFeatures = JSON.parse($('#shopify-features').html())) {
        if (!shopifyFeatures.predictiveSearch){
          return;
        }
      }

      // reset
      if (window.searchRequest) {
        window.searchRequest.abort();
      }

      if(query.length > 0) {
        window.searchRequest = $.getJSON(searchBaseUrl + "/suggest.json", {
          q: query,
          resources: {
            "type": "product,page,article",
            "limit": 4,
            "options": {
              "unavailable_products": "last"
            }
          }
        }).done(function(response) {
          var data = {},
              pos = 0,
              source = $("#CollectionSuggestionsTemplate").html(),
              template = Handlebars.compile(source),
              productSuggestions = response.resources.results.products,
              pagesSuggestions = response.resources.results.pages,
              articlesSuggestions = response.resources.results.articles;

          if (productSuggestions.length > 0) {
            data.products = [];
            $.each(productSuggestions, function(index, product) {
              product.on_sale = product.compare_at_price_min > product.price;
              product.price_varies = product.price_min != product.price_max;
              product.price = Colors.Currency.formatMoney(product.price, Colors.strings.money_format);
              product.compare_at_price = Colors.Currency.formatMoney(product.compare_at_price_min, Colors.strings.money_format);
              product.price_min = Colors.Currency.formatMoney(product.price_min, Colors.strings.money_format);
              product.price_max = Colors.Currency.formatMoney(product.price_max, Colors.strings.money_format);
              product.from_price = Colors.strings.from_price.slice(0).replace(/\{\{ lowest_price \}\}$/, product.price_min);
              if(product.image) {
                product.img = product.image.replace(/(\.[^.]*)$/, "_450x450$1").replace('http:', '');
                product.img_2x = product.image.replace(/(\.[^.]*)$/, "_450x450@2x$1").replace('http:', '');
                product.img_3x = product.image.replace(/(\.[^.]*)$/, "_450x450@3x$1").replace('http:', '');
                product.img_width = product.featured_image.width;
                product.img_height = product.featured_image.height;
                product.aspect_ratio = Math.round(1/product.featured_image.aspect_ratio * 100);
              } else {
                product.img = "https://cdn.shopify.com/s/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_590x.gif"
                product.img_2x = product.img;
                product.img_3x = product.img;
                product.img_width = 590;
                product.img_height = 590;
                product.aspect_ratio = 100;
              }
              product.pos = pos;
              pos++;
              data.products.push(product);
            });
          }

          if (productSuggestions.length < 4){
            if (pagesSuggestions.length > 0) {
              data.pages = [];
              $.each(pagesSuggestions, function(index, page) {
                page.pos = pos;
                pos++;
                data.pages.push(page);
              });
            }
          }

          if (productSuggestions.length + pagesSuggestions.length < 4) {
            if (articlesSuggestions.length > 0) {
              data.articles = [];
              $.each(articlesSuggestions, function(index, article) {
                if(article.image) {
                  article.img = article.image.replace(/(\.[^.]*)$/, "_450x450$1").replace('http:', '');
                  article.img_2x = article.image.replace(/(\.[^.]*)$/, "_450x450@2x$1").replace('http:', '');
                  article.img_3x = article.image.replace(/(\.[^.]*)$/, "_450x450@3x$1").replace('http:', '');
                  article.img_width = article.featured_image.width;
                  article.img_height = article.featured_image.height;
                  article.aspect_ratio = Math.round(1/article.featured_image.aspect_ratio * 100);
                  article.hasImage = true;
                } else {
                  article.hasImage = false;
                }
                article.pos = pos;
                pos++;
                data.articles.push(article);
              });
            }
          }

          $results.empty();
          if (productSuggestions.length > 0 ||
              pagesSuggestions.length > 0 ||
              articlesSuggestions.length > 0) {
            $results.append(template(data));
          }
        });
      } else {
        $results.empty();
      }
    })
    .on('keydown', '.search-overlay input.text', function(e){
      if(e.which === 13){
        if (window.searchRequest) {
          window.searchRequest.abort();
        }
      }
    })
    .on('blur', '.search-overlay .close', function(e){
      Colors.focus('.search-overlay .text');
    })
    .on('keydown', 'body', function(e){
      if($body.hasClass('searching') && e.which === 27){
        $('[data-action=toggle-search]').first().click();
      }
      if($body.hasClass('browsing') && e.which === 27){
        $('[data-action=toggle-browse]').first().click();
      }
      if($body.hasClass('shopping') && e.which === 27){
        $('[data-action=toggle-cart]').first().click();
      }
      if($body.hasClass('picking') && e.which === 27){
        $('[data-action=toggle-pick]').first().click();
      }
      if(e.which == 9){
        $('body')
          .removeClass('no-outlines')
          .one('mousedown', function(){
            $(this).addClass('no-outlines');
            // restore slideshows regular settings
            $('.slideshow').each(function(){
              if($(this).data('autoplay')){
                $(this).slick('slickPlay');
              }
              $(this).slick('slickSetOption', 'focusOnChange', false, true);
            })
          });

        // set slideshow accesibility settings
        // $('.slideshow')
        //   .slick('slickPause')
        //   .slick('slickSetOption', 'focusOnChange', true);
      }
      if(e.which == 13){
        var $activeElement = $(document.activeElement);
        switch($activeElement.attr('data-action')){
          case 'show-product':
            window.location = $activeElement.attr('href');
            e.preventDefault();
        }
      }
    })
    .on('keyup', 'body', function(e){
      if(e.which == 9){
        var $activeElement = $(document.activeElement);
        if(!$body.hasClass('browsing') && $activeElement.parents('.side-nav').length > 0){
          $('[data-action=toggle-browse]').first().click();
        }
        if ($body.hasClass('browsing') && $activeElement.parents('.side-nav').length == 0){
          $('[data-action=toggle-browse]').first().click();
        }
        if ($body.hasClass('shopping') && $activeElement.parents('.side-cart').length == 0){
          $('[data-action=toggle-cart]').first().click();
        }
        if ($body.hasClass('picking') && $activeElement.parents('.side-pick').length == 0){
          $('[data-action=toggle-cart]').first().click();
        }
        if ($body.hasClass('searching') && $activeElement.parents('.search-overlay').length == 0){
          $('[data-action=toggle-search]').first().click();
        }
      }
    })
    .on('ajaxCart.afterCartLoad', function(evt, cart) {
      var $adminBar = $('#admin_bar_iframe'),
          $items = $('.side-cart .items'),
          $more = $('.side-cart .more'),
          $additionalCheckoutButtons = $('.additional-checkout-buttons'),
          moreHeight = $more.outerHeight(),
          adminBarHeight = $adminBar.height();

      $items.css('bottom', moreHeight);

      if ($additionalCheckoutButtons.length > 0) {
        window.sideCartInterval = setInterval(function(){
          moreHeight = $more.outerHeight();
          $items.css('bottom', moreHeight);
        }, 2000);
      }

      if($adminBar.length > 0){
        if($adminBar.css('width') != "40px"){
          $more.css('bottom', adminBarHeight);
          $items.css('bottom', moreHeight + adminBarHeight);
        }
      }
      $items.scrollTop(window.cartScrollTop);
      $document.trigger('opening');
      $body.addClass('shopping');
      setTimeout(function(){
        Colors.focus('.side-cart');
      }, 500);
    })
    .on('closing', function(e){
      clearInterval(window.sideCartInterval);
      if($body.hasClass('shopping')){
        if($(document.activeElement).parents('.side-cart').length == 1) {
          Colors.focus('.main .layout');
        }
      } else if($body.hasClass('picking')){
        if($(document.activeElement).parents('.side-pick').length == 1) {
          Colors.focus('.store-availability [data-action=toggle-pick]');
        }
      }
    })
    .on('click', 'body.browsing .main', function(e){
      $document.trigger('closing');
      $body.removeClass('browsing');
      e.preventDefault();
    })
    .on('click', 'body.shopping .main', function(e){
      $document.trigger('closing');
      $body.removeClass('shopping');
      e.preventDefault();
    })
    .on('click', 'body.picking .main', function(e){
      $document.trigger('closing');
      $body.removeClass('picking');
      e.preventDefault();
    })
    .on('change', '[data-action=update-cart]', function(){
      $('input.update-cart').click();
    })
    .on('click', '.side-nav a:not([data-action])', function(e){
      if(!e.ctrlKey && !e.metaKey){
        $document.trigger('closing');
        $body.removeClass('browsing');
      }
    })
    .on('focus', 'form .error', function(e){
      $(this).one('keydown', function(e){
        $(this).removeClass('error');
      });
    })
    .on('touchstart click', '.side-nav [data-action=link-to-child-list][data-handle]', function(e){
      var $this = $(this),
          handle = $this.attr('data-handle'),
          $nav = $this.parents('.nav'),
          $list = $('.' + handle, $nav);

      e.preventDefault();
      if(is_touch_device && e.type == "click") return;
      if(!is_touch_device && e.type == "touchstart") return;

      if($list.length > 0){
        if($this.attr('aria-expanded') == "true") {
          $this.attr('aria-expanded', 'false');
        } else {
          $this.attr('aria-expanded', 'true');
        }
        $list.slideToggle(400, "easeOutQuad");
      }
    })
    .on('click', '.header [data-action=link-to-child-list][data-handle]', function(e){
      if(is_touch_device){
        e.preventDefault();
      }
    })
    .on((is_touch_device ? 'touchstart' : 'mouseenter'), '.header [data-action=link-to-child-list][data-handle]', function(e){
      var $this = $(this),
          handle = $this.attr('data-handle'),
          $nav = $this.parents('.nav'),
          $li = $this.parents('li'),
          $ul = $('ul.' + handle, $nav),
          $header = $nav.parents('.header'),
          is_megamenu = $li.hasClass('megamenu');

      e.preventDefault();

      if(is_touch_device && e.type == "click") return;

      var contract = function(){
        $ul.removeClass('expanded');
        is_megamenu && $header.removeClass('showing-megamenu');
        $this.attr('aria-expanded', 'false');
        $(window).off('resize.submenu  scroll.submenu');
      };

      if($ul.length > 0){
        if(!$ul.hasClass('expanded')) {
          $('.header .expanded').parent('li').trigger('mouseleave');
          $ul.addClass('expanded');
          is_megamenu && $header.addClass('showing-megamenu');
          if($this.offset().left > $(window).outerWidth()/2) {
            $ul.addClass('right');
          }
          $this.attr('aria-expanded', 'true');
          $li.one('mouseleave', function(e){
            e.preventDefault();
            contract();
          });
          $(window).on('resize.submenu scroll.submenu', function(){
            contract();
          });
        } else if (e.type == "touchstart") {
          contract();
        }
      }
    })
    .on('click', '[data-action=add-new-address]', function(e){
      Shopify.CustomerAddress.toggleNewForm();
      e.preventDefault();
    })
    .on('click', '[data-action=hide-new-address]', function(e){
      Shopify.CustomerAddress.toggleNewForm();
      e.preventDefault();
    })
    .on('click', '[data-action=edit-address][data-address-id]', function(e){
      var address_id = $(this).data('address-id');
      Shopify.CustomerAddress.toggleForm(address_id);
      e.preventDefault();
    })
    .on('click', '[data-action=hide-edit-address][data-address-id]', function(e){
      var address_id = $(this).data('address-id');
      Shopify.CustomerAddress.toggleForm(address_id);
      e.preventDefault();
    })
    .on('change', '.template-cart .quantity input', function(e){
      var $this = $(this),
          $form = $('form.cart');

      clearTimeout(window.cartUpdateTimeout);
      window.cartUpdateTimeout = setTimeout(function(){
        var line = $this.parents('[data-line]').attr('data-line'),
            quantity = $this.val();

        $.ajax({
          type: 'POST',
          url: '/cart/change.js',
          data: 'quantity=' + quantity + '&line=' + line,
          dataType: 'json',
          success: function(data) {
            $.get('/cart', function(data){
              var $newForm = $(data).find('form.cart');
              if($('.items .item', $newForm).length > 0 && !window.is_ie){
                $form.replaceWith($newForm);
                Colors.initShapes();
                Colors.initQuantitySelectors();
              } else {
                window.location = '/cart';
              }
            });
          }
        });
        $this
          .prop('disabled', true)
          .fadeTo(0, 0.25);
      }, 1000);
    })
    .on('click', '[data-action=show-landing]', function(e){
      e.preventDefault();
      $('.landing').fadeIn();
      $('.login').hide();
    })
    .on('click', '[data-action=show-login]', function(e){
      e.preventDefault();
      $('.landing').hide();
      $('.login').fadeIn();
      if(!window.is_touch_device){
        $('.login input.password').focus();
      }
    })
    .on('keydown', '.header .main-nav ul li a.plus', function(e) {
      if(e.which == 13){
        e.preventDefault();
        var $this = $(this),
            $li = $this.parent();

        if($this.attr('aria-expanded') == "false") {
          $this.trigger('mouseenter');
          $('a').on('focus', function(){
            if(!$.contains($li[0], $(this)[0])){
              $this.trigger('mouseleave');
              $('a').off('focus');
            }
          })
        } else {
          $this.trigger('mouseleave');
          $('a').off('focus');
        }
      }
    })
    .on('click', '[data-action=open-modal][data-modal-id]', function(e){
      var id = $(this).data('modal-id'),
          $modal = $('#' + id);
      if($modal.length) {
        e.preventDefault();
        $modal
          .appendTo(document.body)
          .on('click.close', '.close,.background', function(e){
            $modal
              .off('click.close')
              .addClass('hidden');
            $body.removeClass('modeling');
          })
          .removeClass('hidden');
        $body.addClass('modeling');
      }
    })
    .on('click.vendor', '.vendor span', function(e){
      e.preventDefault();
      e.stopPropagation();
      var url = Shopify.routes.root + 'collections/vendors?q=' + $(this).html();
      if(!e.ctrlKey && !e.metaKey) {
        location.href = url;
      } else {
        window.open(url);
      }
    });

  if(window.showPasswordLogin){
    $('[data-action=show-login]').first().trigger('click');
  }

  $('a[href="#"]').on('click', function(e) {
    e.preventDefault();
  });

};

Colors.initNewsletter = function() {
  if (location.search.indexOf('customer_posted=true') === 1 && location.hash !== '#PopupForm'){
    setTimeout(function(){
      var offsetTop = 0;
      if($('.newsletter-section').length){
        offsetTop = $('.newsletter-section').offset().top;
      } else {
        offsetTop = $('.footer').offset().top;
      }

      $('body,html').animate({ scrollTop: offsetTop}, { duration: 0 });
    }, 1000);
  }
};

Colors.initShapes = function() {
  new Colors.Shapes();
  $('body').addClass('shaped');
};

Colors.initQuantitySelectors = function() {
  qtySelectors();
}

Colors.initAjaxCart = function() {
  if($('.side-cart').length > 0) {
    ajaxCart.init({
      cartContainer: '.side-cart-container',
      cartCountSelector: '.cart-count',
      addToCartSelector: '[data-action=add-to-cart]',
      moneyFormat: Colors.strings.money_format
    });
  }
};