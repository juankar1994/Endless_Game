/**
 * This code has been instrumented using Recognizer
 * https://github.com/equiet/recognizer
 */

var __recognizer703686218 = (function () {
    'use strict';

    var global = this;

    function Tracer() {
        this._calls = [];
        this._args = [];
        this.global = global;

        this._probeValues = {};
    }
    Tracer.prototype = {
        logEntry: function (location, args) {
            this._calls.push({
                index: this._calls.length,
                position: location,
                // args: Array.prototype.slice.call(args),
                argsCount: args.length,
                time: Date.now()
            });
            this._args.push(_.cloneDeep(args));
        },

        getCalls: function (since) {
            var calls = this._calls.filter(function(call) {
                return (since) ? call.time > since : true;
            });
            return stringify(calls);
        },

        getCallCount: function () {
            return this._calls.length;
        },

        logProbe: function (location, result) {
            this._probeValues[location.toString()] = _.cloneDeep(result);
            return result;
        },

        updateProbeValues: function () {
            var self = this;

            var probeIds = Object.keys(this._probeValues);
            var output = probeIds.map(function(probeId) {
               return {
                   id: probeId,
                   type: self.getType(self._probeValues[probeId])
               };
            });

            return stringify(output);
        },

        getType: function (value) {
            var type = typeof value;

            if (type === 'number' && isNaN(value)) {
                type = 'NaN';
            }
            if (type === null) {
                type = 'null';
            }

            return type;
        },

        test: function () {
            console.log('[recognizer tracer] test function run successfully');
        },

        connect: function () {
            return this;
        }
    };


    /**
     * JSON stringify with circular references
     * Copyright (c) Isaac Z. Schlueter ("Author")
     * The BSD License
     */
    function getSerialize(a,b){var c=[],d=[];return b=b||function(a,b){return"[Circular "+getPath(b,c,d)+"]"},function(e,f){var g=f;return"object"==typeof f&&f&&(-1!==c.indexOf(f)?g=b(e,f):(c.push(f),d.push(e))),a&&(g=a(e,g)),g}}
    function getPath(a,b,c){var d=b.indexOf(a),e=[c[d]];for(d--;d>=0;d--)b[d][e[0]]===a&&(a=b[d],e.unshift(c[d]));return"~"+e.join(".")}
    function stringify(a,b,c,d){return JSON.stringify(a,getSerialize(b,d),c)}stringify.getSerialize=getSerialize;


    /**
     * @license
     * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
     * Build: `lodash modern -o ./dist/lodash.js`
     */
    ;(function(){function n(n,t,e){e=(e||0)-1;for(var r=n?n.length:0;++e<r;)if(n[e]===t)return e;return-1}function t(t,e){var r=typeof e;if(t=t.l,"boolean"==r||null==e)return t[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?e:m+e;return t=(t=t[r])&&t[u],"object"==r?t&&-1<n(t,e)?0:-1:t?0:-1}function e(n){var t=this.l,e=typeof n;if("boolean"==e||null==n)t[n]=true;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?n:m+n,t=t[e]||(t[e]={});"object"==e?(t[r]||(t[r]=[])).push(n):t[r]=true
    }}function r(n){return n.charCodeAt(0)}function u(n,t){for(var e=n.m,r=t.m,u=-1,o=e.length;++u<o;){var i=e[u],a=r[u];if(i!==a){if(i>a||typeof i=="undefined")return 1;if(i<a||typeof a=="undefined")return-1}}return n.n-t.n}function o(n){var t=-1,r=n.length,u=n[0],o=n[r/2|0],i=n[r-1];if(u&&typeof u=="object"&&o&&typeof o=="object"&&i&&typeof i=="object")return false;for(u=f(),u["false"]=u["null"]=u["true"]=u.undefined=false,o=f(),o.k=n,o.l=u,o.push=e;++t<r;)o.push(n[t]);return o}function i(n){return"\\"+U[n]
    }function a(){return h.pop()||[]}function f(){return g.pop()||{k:null,l:null,m:null,"false":false,n:0,"null":false,number:null,object:null,push:null,string:null,"true":false,undefined:false,o:null}}function l(n){n.length=0,h.length<_&&h.push(n)}function c(n){var t=n.l;t&&c(t),n.k=n.l=n.m=n.object=n.number=n.string=n.o=null,g.length<_&&g.push(n)}function p(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Array(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function s(e){function h(n,t,e){if(!n||!V[typeof n])return n;
        t=t&&typeof e=="undefined"?t:tt(t,e,3);for(var r=-1,u=V[typeof n]&&Fe(n),o=u?u.length:0;++r<o&&(e=u[r],false!==t(n[e],e,n)););return n}function g(n,t,e){var r;if(!n||!V[typeof n])return n;t=t&&typeof e=="undefined"?t:tt(t,e,3);for(r in n)if(false===t(n[r],r,n))break;return n}function _(n,t,e){var r,u=n,o=u;if(!u)return o;for(var i=arguments,a=0,f=typeof e=="number"?2:i.length;++a<f;)if((u=i[a])&&V[typeof u])for(var l=-1,c=V[typeof u]&&Fe(u),p=c?c.length:0;++l<p;)r=c[l],"undefined"==typeof o[r]&&(o[r]=u[r]);
        return o}function U(n,t,e){var r,u=n,o=u;if(!u)return o;var i=arguments,a=0,f=typeof e=="number"?2:i.length;if(3<f&&"function"==typeof i[f-2])var l=tt(i[--f-1],i[f--],2);else 2<f&&"function"==typeof i[f-1]&&(l=i[--f]);for(;++a<f;)if((u=i[a])&&V[typeof u])for(var c=-1,p=V[typeof u]&&Fe(u),s=p?p.length:0;++c<s;)r=p[c],o[r]=l?l(o[r],u[r]):u[r];return o}function H(n){var t,e=[];if(!n||!V[typeof n])return e;for(t in n)me.call(n,t)&&e.push(t);return e}function J(n){return n&&typeof n=="object"&&!Te(n)&&me.call(n,"__wrapped__")?n:new Q(n)
    }function Q(n,t){this.__chain__=!!t,this.__wrapped__=n}function X(n){function t(){if(r){var n=p(r);be.apply(n,arguments)}if(this instanceof t){var o=nt(e.prototype),n=e.apply(o,n||arguments);return wt(n)?n:o}return e.apply(u,n||arguments)}var e=n[0],r=n[2],u=n[4];return $e(t,n),t}function Z(n,t,e,r,u){if(e){var o=e(n);if(typeof o!="undefined")return o}if(!wt(n))return n;var i=ce.call(n);if(!K[i])return n;var f=Ae[i];switch(i){case T:case F:return new f(+n);case W:case P:return new f(n);case z:return o=f(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o
    }if(i=Te(n),t){var c=!r;r||(r=a()),u||(u=a());for(var s=r.length;s--;)if(r[s]==n)return u[s];o=i?f(n.length):{}}else o=i?p(n):U({},n);return i&&(me.call(n,"index")&&(o.index=n.index),me.call(n,"input")&&(o.input=n.input)),t?(r.push(n),u.push(o),(i?St:h)(n,function(n,i){o[i]=Z(n,t,e,r,u)}),c&&(l(r),l(u)),o):o}function nt(n){return wt(n)?ke(n):{}}function tt(n,t,e){if(typeof n!="function")return Ut;if(typeof t=="undefined"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r=="undefined"&&(De.funcNames&&(r=!n.name),r=r||!De.funcDecomp,!r)){var u=ge.call(n);
        De.funcNames||(r=!O.test(u)),r||(r=E.test(u),$e(n,r))}if(false===r||true!==r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)}}return Mt(n,t)}function et(n){function t(){var n=f?i:this;if(u){var h=p(u);be.apply(h,arguments)}return(o||c)&&(h||(h=p(arguments)),o&&be.apply(h,o),c&&h.length<a)?(r|=16,et([e,s?r:-4&r,h,null,i,a])):(h||(h=arguments),l&&(e=n[v]),this instanceof t?(n=nt(e.prototype),h=e.apply(n,h),wt(h)?h:n):e.apply(n,h))
    }var e=n[0],r=n[1],u=n[2],o=n[3],i=n[4],a=n[5],f=1&r,l=2&r,c=4&r,s=8&r,v=e;return $e(t,n),t}function rt(e,r){var u=-1,i=st(),a=e?e.length:0,f=a>=b&&i===n,l=[];if(f){var p=o(r);p?(i=t,r=p):f=false}for(;++u<a;)p=e[u],0>i(r,p)&&l.push(p);return f&&c(r),l}function ut(n,t,e,r){r=(r||0)-1;for(var u=n?n.length:0,o=[];++r<u;){var i=n[r];if(i&&typeof i=="object"&&typeof i.length=="number"&&(Te(i)||yt(i))){t||(i=ut(i,t,e));var a=-1,f=i.length,l=o.length;for(o.length+=f;++a<f;)o[l++]=i[a]}else e||o.push(i)}return o
    }function ot(n,t,e,r,u,o){if(e){var i=e(n,t);if(typeof i!="undefined")return!!i}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&V[typeof n]||t&&V[typeof t]))return false;if(null==n||null==t)return n===t;var f=ce.call(n),c=ce.call(t);if(f==D&&(f=q),c==D&&(c=q),f!=c)return false;switch(f){case T:case F:return+n==+t;case W:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case z:case P:return n==oe(t)}if(c=f==$,!c){var p=me.call(n,"__wrapped__"),s=me.call(t,"__wrapped__");if(p||s)return ot(p?n.__wrapped__:n,s?t.__wrapped__:t,e,r,u,o);
        if(f!=q)return false;if(f=n.constructor,p=t.constructor,f!=p&&!(dt(f)&&f instanceof f&&dt(p)&&p instanceof p)&&"constructor"in n&&"constructor"in t)return false}for(f=!u,u||(u=a()),o||(o=a()),p=u.length;p--;)if(u[p]==n)return o[p]==t;var v=0,i=true;if(u.push(n),o.push(t),c){if(p=n.length,v=t.length,(i=v==p)||r)for(;v--;)if(c=p,s=t[v],r)for(;c--&&!(i=ot(n[c],s,e,r,u,o)););else if(!(i=ot(n[v],s,e,r,u,o)))break}else g(t,function(t,a,f){return me.call(f,a)?(v++,i=me.call(n,a)&&ot(n[a],t,e,r,u,o)):void 0}),i&&!r&&g(n,function(n,t,e){return me.call(e,t)?i=-1<--v:void 0
    });return u.pop(),o.pop(),f&&(l(u),l(o)),i}function it(n,t,e,r,u){(Te(t)?St:h)(t,function(t,o){var i,a,f=t,l=n[o];if(t&&((a=Te(t))||Pe(t))){for(f=r.length;f--;)if(i=r[f]==t){l=u[f];break}if(!i){var c;e&&(f=e(l,t),c=typeof f!="undefined")&&(l=f),c||(l=a?Te(l)?l:[]:Pe(l)?l:{}),r.push(t),u.push(l),c||it(l,t,e,r,u)}}else e&&(f=e(l,t),typeof f=="undefined"&&(f=t)),typeof f!="undefined"&&(l=f);n[o]=l})}function at(n,t){return n+he(Re()*(t-n+1))}function ft(e,r,u){var i=-1,f=st(),p=e?e.length:0,s=[],v=!r&&p>=b&&f===n,h=u||v?a():s;
        for(v&&(h=o(h),f=t);++i<p;){var g=e[i],y=u?u(g,i,e):g;(r?!i||h[h.length-1]!==y:0>f(h,y))&&((u||v)&&h.push(y),s.push(g))}return v?(l(h.k),c(h)):u&&l(h),s}function lt(n){return function(t,e,r){var u={};e=J.createCallback(e,r,3),r=-1;var o=t?t.length:0;if(typeof o=="number")for(;++r<o;){var i=t[r];n(u,i,e(i,r,t),t)}else h(t,function(t,r,o){n(u,t,e(t,r,o),o)});return u}}function ct(n,t,e,r,u,o){var i=1&t,a=4&t,f=16&t,l=32&t;if(!(2&t||dt(n)))throw new ie;f&&!e.length&&(t&=-17,f=e=false),l&&!r.length&&(t&=-33,l=r=false);
        var c=n&&n.__bindData__;return c&&true!==c?(c=p(c),c[2]&&(c[2]=p(c[2])),c[3]&&(c[3]=p(c[3])),!i||1&c[1]||(c[4]=u),!i&&1&c[1]&&(t|=8),!a||4&c[1]||(c[5]=o),f&&be.apply(c[2]||(c[2]=[]),e),l&&we.apply(c[3]||(c[3]=[]),r),c[1]|=t,ct.apply(null,c)):(1==t||17===t?X:et)([n,t,e,r,u,o])}function pt(n){return Be[n]}function st(){var t=(t=J.indexOf)===Wt?n:t;return t}function vt(n){return typeof n=="function"&&pe.test(n)}function ht(n){var t,e;return n&&ce.call(n)==q&&(t=n.constructor,!dt(t)||t instanceof t)?(g(n,function(n,t){e=t
    }),typeof e=="undefined"||me.call(n,e)):false}function gt(n){return We[n]}function yt(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==D||false}function mt(n,t,e){var r=Fe(n),u=r.length;for(t=tt(t,e,3);u--&&(e=r[u],false!==t(n[e],e,n)););return n}function bt(n){var t=[];return g(n,function(n,e){dt(n)&&t.push(e)}),t.sort()}function _t(n){for(var t=-1,e=Fe(n),r=e.length,u={};++t<r;){var o=e[t];u[n[o]]=o}return u}function dt(n){return typeof n=="function"}function wt(n){return!(!n||!V[typeof n])
    }function jt(n){return typeof n=="number"||n&&typeof n=="object"&&ce.call(n)==W||false}function kt(n){return typeof n=="string"||n&&typeof n=="object"&&ce.call(n)==P||false}function xt(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;)u[t]=n[e[t]];return u}function Ct(n,t,e){var r=-1,u=st(),o=n?n.length:0,i=false;return e=(0>e?Ie(0,o+e):e)||0,Te(n)?i=-1<u(n,t,e):typeof o=="number"?i=-1<(kt(n)?n.indexOf(t,e):u(n,t,e)):h(n,function(n){return++r<e?void 0:!(i=n===t)}),i}function Ot(n,t,e){var r=true;t=J.createCallback(t,e,3),e=-1;
        var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&(r=!!t(n[e],e,n)););else h(n,function(n,e,u){return r=!!t(n,e,u)});return r}function Nt(n,t,e){var r=[];t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}else h(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function It(n,t,e){t=J.createCallback(t,e,3),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return h(n,function(n,e,r){return t(n,e,r)?(u=n,false):void 0}),u}for(;++e<r;){var o=n[e];
        if(t(o,e,n))return o}}function St(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof u=="number")for(;++r<u&&false!==t(n[r],r,n););else h(n,t);return n}function Et(n,t,e){var r=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof r=="number")for(;r--&&false!==t(n[r],r,n););else{var u=Fe(n),r=u.length;h(n,function(n,e,o){return e=u?u[--r]:--r,t(o[e],e,o)})}return n}function Rt(n,t,e){var r=-1,u=n?n.length:0;if(t=J.createCallback(t,e,3),typeof u=="number")for(var o=Xt(u);++r<u;)o[r]=t(n[r],r,n);
    else o=[],h(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function At(n,t,e){var u=-1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a>o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e>u&&(u=e,o=n)});return o}function Dt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=J.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else h(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)
    });return e}function $t(n,t,e,r){var u=3>arguments.length;return t=J.createCallback(t,r,4),Et(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)}),e}function Tt(n){var t=-1,e=n?n.length:0,r=Xt(typeof e=="number"?e:0);return St(n,function(n){var e=at(0,++t);r[t]=r[e],r[e]=n}),r}function Ft(n,t,e){var r;t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else h(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function Bt(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=-1;
        for(t=J.createCallback(t,e,3);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[0]:v;return p(n,0,Se(Ie(0,r),u))}function Wt(t,e,r){if(typeof r=="number"){var u=t?t.length:0;r=0>r?Ie(0,u+r):r||0}else if(r)return r=zt(t,e),t[r]===e?r:-1;return n(t,e,r)}function qt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=J.createCallback(t,e,3);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Ie(0,t);return p(n,r)}function zt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?J.createCallback(e,r,1):Ut,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;
        return u}function Pt(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(e=J.createCallback(e,r,3)),ft(n,t,e)}function Kt(){for(var n=1<arguments.length?arguments:arguments[0],t=-1,e=n?At(Ve(n,"length")):0,r=Xt(0>e?0:e);++t<e;)r[t]=Ve(n,t);return r}function Lt(n,t){var e=-1,r=n?n.length:0,u={};for(t||!r||Te(n[0])||(t=[]);++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function Mt(n,t){return 2<arguments.length?ct(n,17,p(arguments,2),null,t):ct(n,1,null,null,t)
    }function Vt(n,t,e){function r(){c&&ve(c),i=c=p=v,(g||h!==t)&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null))}function u(){var e=t-(Ue()-f);0<e?c=_e(u,e):(i&&ve(i),e=p,i=c=p=v,e&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null)))}var o,i,a,f,l,c,p,s=0,h=false,g=true;if(!dt(n))throw new ie;if(t=Ie(0,t)||0,true===e)var y=true,g=false;else wt(e)&&(y=e.leading,h="maxWait"in e&&(Ie(t,e.maxWait)||0),g="trailing"in e?e.trailing:g);return function(){if(o=arguments,f=Ue(),l=this,p=g&&(c||!y),false===h)var e=y&&!c;else{i||y||(s=f);var v=h-(f-s),m=0>=v;
        m?(i&&(i=ve(i)),s=f,a=n.apply(l,o)):i||(i=_e(r,v))}return m&&c?c=ve(c):c||t===h||(c=_e(u,t)),e&&(m=true,a=n.apply(l,o)),!m||c||i||(o=l=null),a}}function Ut(n){return n}function Gt(n,t,e){var r=true,u=t&&bt(t);t&&(e||u.length)||(null==e&&(e=t),o=Q,t=n,n=J,u=bt(t)),false===e?r=false:wt(e)&&"chain"in e&&(r=e.chain);var o=n,i=dt(o);St(u,function(e){var u=n[e]=t[e];i&&(o.prototype[e]=function(){var t=this.__chain__,e=this.__wrapped__,i=[e];if(be.apply(i,arguments),i=u.apply(n,i),r||t){if(e===i&&wt(i))return this;
        i=new o(i),i.__chain__=t}return i})})}function Ht(){}function Jt(n){return function(t){return t[n]}}function Qt(){return this.__wrapped__}e=e?Y.defaults(G.Object(),e,Y.pick(G,A)):G;var Xt=e.Array,Yt=e.Boolean,Zt=e.Date,ne=e.Function,te=e.Math,ee=e.Number,re=e.Object,ue=e.RegExp,oe=e.String,ie=e.TypeError,ae=[],fe=re.prototype,le=e._,ce=fe.toString,pe=ue("^"+oe(ce).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),se=te.ceil,ve=e.clearTimeout,he=te.floor,ge=ne.prototype.toString,ye=vt(ye=re.getPrototypeOf)&&ye,me=fe.hasOwnProperty,be=ae.push,_e=e.setTimeout,de=ae.splice,we=ae.unshift,je=function(){try{var n={},t=vt(t=re.defineProperty)&&t,e=t(n,n,n)&&t
    }catch(r){}return e}(),ke=vt(ke=re.create)&&ke,xe=vt(xe=Xt.isArray)&&xe,Ce=e.isFinite,Oe=e.isNaN,Ne=vt(Ne=re.keys)&&Ne,Ie=te.max,Se=te.min,Ee=e.parseInt,Re=te.random,Ae={};Ae[$]=Xt,Ae[T]=Yt,Ae[F]=Zt,Ae[B]=ne,Ae[q]=re,Ae[W]=ee,Ae[z]=ue,Ae[P]=oe,Q.prototype=J.prototype;var De=J.support={};De.funcDecomp=!vt(e.a)&&E.test(s),De.funcNames=typeof ne.name=="string",J.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,variable:"",imports:{_:J}},ke||(nt=function(){function n(){}return function(t){if(wt(t)){n.prototype=t;
        var r=new n;n.prototype=null}return r||e.Object()}}());var $e=je?function(n,t){M.value=t,je(n,"__bindData__",M)}:Ht,Te=xe||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==$||false},Fe=Ne?function(n){return wt(n)?Ne(n):[]}:H,Be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},We=_t(Be),qe=ue("("+Fe(We).join("|")+")","g"),ze=ue("["+Fe(Be).join("")+"]","g"),Pe=ye?function(n){if(!n||ce.call(n)!=q)return false;var t=n.valueOf,e=vt(t)&&(e=ye(t))&&ye(e);return e?n==e||ye(n)==e:ht(n)
    }:ht,Ke=lt(function(n,t,e){me.call(n,e)?n[e]++:n[e]=1}),Le=lt(function(n,t,e){(me.call(n,e)?n[e]:n[e]=[]).push(t)}),Me=lt(function(n,t,e){n[e]=t}),Ve=Rt,Ue=vt(Ue=Zt.now)&&Ue||function(){return(new Zt).getTime()},Ge=8==Ee(d+"08")?Ee:function(n,t){return Ee(kt(n)?n.replace(I,""):n,t||0)};return J.after=function(n,t){if(!dt(t))throw new ie;return function(){return 1>--n?t.apply(this,arguments):void 0}},J.assign=U,J.at=function(n){for(var t=arguments,e=-1,r=ut(t,true,false,1),t=t[2]&&t[2][t[1]]===n?1:r.length,u=Xt(t);++e<t;)u[e]=n[r[e]];
        return u},J.bind=Mt,J.bindAll=function(n){for(var t=1<arguments.length?ut(arguments,true,false,1):bt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=ct(n[u],1,null,null,n)}return n},J.bindKey=function(n,t){return 2<arguments.length?ct(t,19,p(arguments,2),null,n):ct(t,3,null,null,n)},J.chain=function(n){return n=new Q(n),n.__chain__=true,n},J.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},J.compose=function(){for(var n=arguments,t=n.length;t--;)if(!dt(n[t]))throw new ie;
        return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},J.constant=function(n){return function(){return n}},J.countBy=Ke,J.create=function(n,t){var e=nt(n);return t?U(e,t):e},J.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return tt(n,t,e);if("object"!=r)return Jt(n);var u=Fe(n),o=u[0],i=n[o];return 1!=u.length||i!==i||wt(i)?function(t){for(var e=u.length,r=false;e--&&(r=ot(t[u[e]],n[u[e]],null,true)););return r}:function(n){return n=n[o],i===n&&(0!==i||1/i==1/n)
    }},J.curry=function(n,t){return t=typeof t=="number"?t:+t||n.length,ct(n,4,null,null,null,t)},J.debounce=Vt,J.defaults=_,J.defer=function(n){if(!dt(n))throw new ie;var t=p(arguments,1);return _e(function(){n.apply(v,t)},1)},J.delay=function(n,t){if(!dt(n))throw new ie;var e=p(arguments,2);return _e(function(){n.apply(v,e)},t)},J.difference=function(n){return rt(n,ut(arguments,true,true,1))},J.filter=Nt,J.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(n=Rt(n,e,r)),ut(n,t)
    },J.forEach=St,J.forEachRight=Et,J.forIn=g,J.forInRight=function(n,t,e){var r=[];g(n,function(n,t){r.push(t,n)});var u=r.length;for(t=tt(t,e,3);u--&&false!==t(r[u--],r[u],n););return n},J.forOwn=h,J.forOwnRight=mt,J.functions=bt,J.groupBy=Le,J.indexBy=Me,J.initial=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return p(n,0,Se(Ie(0,u-r),u))},J.intersection=function(){for(var e=[],r=-1,u=arguments.length,i=a(),f=st(),p=f===n,s=a();++r<u;){var v=arguments[r];
        (Te(v)||yt(v))&&(e.push(v),i.push(p&&v.length>=b&&o(r?e[r]:s)))}var p=e[0],h=-1,g=p?p.length:0,y=[];n:for(;++h<g;){var m=i[0],v=p[h];if(0>(m?t(m,v):f(s,v))){for(r=u,(m||s).push(v);--r;)if(m=i[r],0>(m?t(m,v):f(e[r],v)))continue n;y.push(v)}}for(;u--;)(m=i[u])&&c(m);return l(i),l(s),y},J.invert=_t,J.invoke=function(n,t){var e=p(arguments,2),r=-1,u=typeof t=="function",o=n?n.length:0,i=Xt(typeof o=="number"?o:0);return St(n,function(n){i[++r]=(u?t:n[t]).apply(n,e)}),i},J.keys=Fe,J.map=Rt,J.mapValues=function(n,t,e){var r={};
        return t=J.createCallback(t,e,3),h(n,function(n,e,u){r[e]=t(n,e,u)}),r},J.max=At,J.memoize=function(n,t){function e(){var r=e.cache,u=t?t.apply(this,arguments):m+arguments[0];return me.call(r,u)?r[u]:r[u]=n.apply(this,arguments)}if(!dt(n))throw new ie;return e.cache={},e},J.merge=function(n){var t=arguments,e=2;if(!wt(n))return n;if("number"!=typeof t[2]&&(e=t.length),3<e&&"function"==typeof t[e-2])var r=tt(t[--e-1],t[e--],2);else 2<e&&"function"==typeof t[e-1]&&(r=t[--e]);for(var t=p(arguments,1,e),u=-1,o=a(),i=a();++u<e;)it(n,t[u],r,o,i);
        return l(o),l(i),n},J.min=function(n,t,e){var u=1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a<o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e<u&&(u=e,o=n)});return o},J.omit=function(n,t,e){var r={};if(typeof t!="function"){var u=[];g(n,function(n,t){u.push(t)});for(var u=rt(u,ut(arguments,true,false,1)),o=-1,i=u.length;++o<i;){var a=u[o];r[a]=n[a]}}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)||(r[e]=n)
    });return r},J.once=function(n){var t,e;if(!dt(n))throw new ie;return function(){return t?e:(t=true,e=n.apply(this,arguments),n=null,e)}},J.pairs=function(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;){var o=e[t];u[t]=[o,n[o]]}return u},J.partial=function(n){return ct(n,16,p(arguments,1))},J.partialRight=function(n){return ct(n,32,null,p(arguments,1))},J.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,o=ut(arguments,true,false,1),i=wt(n)?o.length:0;++u<i;){var a=o[u];a in n&&(r[a]=n[a])
    }else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},J.pluck=Ve,J.property=Jt,J.pull=function(n){for(var t=arguments,e=0,r=t.length,u=n?n.length:0;++e<r;)for(var o=-1,i=t[e];++o<u;)n[o]===i&&(de.call(n,o--,1),u--);return n},J.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=Ie(0,se((t-n)/(e||1)));for(var u=Xt(t);++r<t;)u[r]=n,n+=e;return u},J.reject=function(n,t,e){return t=J.createCallback(t,e,3),Nt(n,function(n,e,r){return!t(n,e,r)
    })},J.remove=function(n,t,e){var r=-1,u=n?n.length:0,o=[];for(t=J.createCallback(t,e,3);++r<u;)e=n[r],t(e,r,n)&&(o.push(e),de.call(n,r--,1),u--);return o},J.rest=qt,J.shuffle=Tt,J.sortBy=function(n,t,e){var r=-1,o=Te(t),i=n?n.length:0,p=Xt(typeof i=="number"?i:0);for(o||(t=J.createCallback(t,e,3)),St(n,function(n,e,u){var i=p[++r]=f();o?i.m=Rt(t,function(t){return n[t]}):(i.m=a())[0]=t(n,e,u),i.n=r,i.o=n}),i=p.length,p.sort(u);i--;)n=p[i],p[i]=n.o,o||l(n.m),c(n);return p},J.tap=function(n,t){return t(n),n
    },J.throttle=function(n,t,e){var r=true,u=true;if(!dt(n))throw new ie;return false===e?r=false:wt(e)&&(r="leading"in e?e.leading:r,u="trailing"in e?e.trailing:u),L.leading=r,L.maxWait=t,L.trailing=u,Vt(n,t,L)},J.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Xt(n);for(t=tt(t,e,1);++r<n;)u[r]=t(r);return u},J.toArray=function(n){return n&&typeof n.length=="number"?p(n):xt(n)},J.transform=function(n,t,e,r){var u=Te(n);if(null==e)if(u)e=[];else{var o=n&&n.constructor;e=nt(o&&o.prototype)}return t&&(t=J.createCallback(t,r,4),(u?St:h)(n,function(n,r,u){return t(e,n,r,u)
    })),e},J.union=function(){return ft(ut(arguments,true,true))},J.uniq=Pt,J.values=xt,J.where=Nt,J.without=function(n){return rt(n,p(arguments,1))},J.wrap=function(n,t){return ct(t,16,[n])},J.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var e=arguments[n];if(Te(e)||yt(e))var r=r?ft(rt(r,e).concat(rt(e,r))):e}return r||[]},J.zip=Kt,J.zipObject=Lt,J.collect=Rt,J.drop=qt,J.each=St,J.eachRight=Et,J.extend=U,J.methods=bt,J.object=Lt,J.select=Nt,J.tail=qt,J.unique=Pt,J.unzip=Kt,Gt(J),J.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=false),Z(n,t,typeof e=="function"&&tt(e,r,1))
    },J.cloneDeep=function(n,t,e){return Z(n,true,typeof t=="function"&&tt(t,e,1))},J.contains=Ct,J.escape=function(n){return null==n?"":oe(n).replace(ze,pt)},J.every=Ot,J.find=It,J.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=J.createCallback(t,e,3);++r<u;)if(t(n[r],r,n))return r;return-1},J.findKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),h(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.findLast=function(n,t,e){var r;return t=J.createCallback(t,e,3),Et(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0
    }),r},J.findLastIndex=function(n,t,e){var r=n?n.length:0;for(t=J.createCallback(t,e,3);r--;)if(t(n[r],r,n))return r;return-1},J.findLastKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),mt(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.has=function(n,t){return n?me.call(n,t):false},J.identity=Ut,J.indexOf=Wt,J.isArguments=yt,J.isArray=Te,J.isBoolean=function(n){return true===n||false===n||n&&typeof n=="object"&&ce.call(n)==T||false},J.isDate=function(n){return n&&typeof n=="object"&&ce.call(n)==F||false
    },J.isElement=function(n){return n&&1===n.nodeType||false},J.isEmpty=function(n){var t=true;if(!n)return t;var e=ce.call(n),r=n.length;return e==$||e==P||e==D||e==q&&typeof r=="number"&&dt(n.splice)?!r:(h(n,function(){return t=false}),t)},J.isEqual=function(n,t,e,r){return ot(n,t,typeof e=="function"&&tt(e,r,2))},J.isFinite=function(n){return Ce(n)&&!Oe(parseFloat(n))},J.isFunction=dt,J.isNaN=function(n){return jt(n)&&n!=+n},J.isNull=function(n){return null===n},J.isNumber=jt,J.isObject=wt,J.isPlainObject=Pe,J.isRegExp=function(n){return n&&typeof n=="object"&&ce.call(n)==z||false
    },J.isString=kt,J.isUndefined=function(n){return typeof n=="undefined"},J.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Ie(0,r+e):Se(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},J.mixin=Gt,J.noConflict=function(){return e._=le,this},J.noop=Ht,J.now=Ue,J.parseInt=Ge,J.random=function(n,t,e){var r=null==n,u=null==t;return null==e&&(typeof n=="boolean"&&u?(e=n,n=1):u||typeof t!="boolean"||(e=t,u=true)),r&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,e||n%1||t%1?(e=Re(),Se(n+e*(t-n+parseFloat("1e-"+((e+"").length-1))),t)):at(n,t)
    },J.reduce=Dt,J.reduceRight=$t,J.result=function(n,t){if(n){var e=n[t];return dt(e)?n[t]():e}},J.runInContext=s,J.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:Fe(n).length},J.some=Ft,J.sortedIndex=zt,J.template=function(n,t,e){var r=J.templateSettings;n=oe(n||""),e=_({},e,r);var u,o=_({},e.imports,r.imports),r=Fe(o),o=xt(o),a=0,f=e.interpolate||S,l="__p+='",f=ue((e.escape||S).source+"|"+f.source+"|"+(f===N?x:S).source+"|"+(e.evaluate||S).source+"|$","g");n.replace(f,function(t,e,r,o,f,c){return r||(r=o),l+=n.slice(a,c).replace(R,i),e&&(l+="'+__e("+e+")+'"),f&&(u=true,l+="';"+f+";\n__p+='"),r&&(l+="'+((__t=("+r+"))==null?'':__t)+'"),a=c+t.length,t
    }),l+="';",f=e=e.variable,f||(e="obj",l="with("+e+"){"+l+"}"),l=(u?l.replace(w,""):l).replace(j,"$1").replace(k,"$1;"),l="function("+e+"){"+(f?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";try{var c=ne(r,"return "+l).apply(v,o)}catch(p){throw p.source=l,p}return t?c(t):(c.source=l,c)},J.unescape=function(n){return null==n?"":oe(n).replace(qe,gt)},J.uniqueId=function(n){var t=++y;return oe(null==n?"":n)+t
    },J.all=Ot,J.any=Ft,J.detect=It,J.findWhere=It,J.foldl=Dt,J.foldr=$t,J.include=Ct,J.inject=Dt,Gt(function(){var n={};return h(J,function(t,e){J.prototype[e]||(n[e]=t)}),n}(),false),J.first=Bt,J.last=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[u-1]:v;return p(n,Ie(0,u-r))},J.sample=function(n,t,e){return n&&typeof n.length!="number"&&(n=xt(n)),null==t||e?n?n[at(0,n.length-1)]:v:(n=Tt(n),n.length=Se(Ie(0,t),n.length),n)
    },J.take=Bt,J.head=Bt,h(J,function(n,t){var e="sample"!==t;J.prototype[t]||(J.prototype[t]=function(t,r){var u=this.__chain__,o=n(this.__wrapped__,t,r);return u||null!=t&&(!r||e&&typeof t=="function")?new Q(o,u):o})}),J.VERSION="2.4.1",J.prototype.chain=function(){return this.__chain__=true,this},J.prototype.toString=function(){return oe(this.__wrapped__)},J.prototype.value=Qt,J.prototype.valueOf=Qt,St(["join","pop","shift"],function(n){var t=ae[n];J.prototype[n]=function(){var n=this.__chain__,e=t.apply(this.__wrapped__,arguments);
        return n?new Q(e,n):e}}),St(["push","reverse","sort","unshift"],function(n){var t=ae[n];J.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),St(["concat","slice","splice"],function(n){var t=ae[n];J.prototype[n]=function(){return new Q(t.apply(this.__wrapped__,arguments),this.__chain__)}}),J}var v,h=[],g=[],y=0,m=+new Date+"",b=75,_=40,d=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p\+='';/g,j=/\b(__p\+=)''\+/g,k=/(__e\(.*?\)|\b__t\))\+'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,I=RegExp("^["+d+"]*0+(?=.$)"),S=/($^)/,E=/\bthis\b/,R=/['\n\r\t\u2028\u2029\\]/g,A="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),D="[object Arguments]",$="[object Array]",T="[object Boolean]",F="[object Date]",B="[object Function]",W="[object Number]",q="[object Object]",z="[object RegExp]",P="[object String]",K={};
        K[B]=false,K[D]=K[$]=K[T]=K[F]=K[W]=K[q]=K[z]=K[P]=true;var L={leading:false,maxWait:0,trailing:false},M={configurable:false,enumerable:false,value:null,writable:false},V={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false},U={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},G=V[typeof window]&&window||this,H=V[typeof exports]&&exports&&!exports.nodeType&&exports,J=V[typeof module]&&module&&!module.nodeType&&module,Q=J&&J.exports===H&&H,X=V[typeof global]&&global;!X||X.global!==X&&X.window!==X||(G=X);
        var Y=s();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(G._=Y, define(function(){return Y})):H&&J?Q?(J.exports=Y)._=Y:H._=Y:G._=Y}).call(this);


    return new Tracer();

}());


/**
 * Instrumented code
 */

var Presentation = __recognizer703686218.logProbe([
        19,
        26,
        19,
        38
    ], __recognizer703686218.logProbe([
        19,
        19,
        19,
        25
    ], window).Presentation) || {};
(function (pContext, $) {
    __recognizer703686218.logEntry([
        21,
        1,
        21,
        9
    ], arguments);
    pContext.getTrackUI = function () {
        __recognizer703686218.logEntry([
            23,
            26,
            23,
            34
        ], arguments);
        return __recognizer703686218.logProbe([
            24,
            15,
            24,
            22
        ], TrackUI);
    };
    TrackUI = function () {
        __recognizer703686218.logEntry([
            27,
            15,
            27,
            23
        ], arguments);
        var car, canvasStage, vehicleLayer, boxLayer, weaponLayer, enemyLayer, labelLayer, bulletLayer, lifeCounter = 2, gameOver = false, vehicle, numberOfShots = 2, enemiesCollection = [], enemiesPositionX = [
                175,
                275,
                375,
                475,
                575
            ];
        var weaponObj = {
                laneNumber: 3,
                color: 'green',
                stroke: 4,
                shapeWeapon: 4
            };
        var weaponObj2 = {
                laneNumber: 1,
                color: 'red',
                stroke: 4,
                shapeWeapon: 3
            };
        (function () {
            var obj = __recognizer703686218.logProbe([
                    47,
                    8,
                    47,
                    21
                ], __recognizer703686218.logProbe([
                    47,
                    8,
                    47,
                    9
                ], $)('#btnPlay')), fn = __recognizer703686218.logProbe([
                    47,
                    22,
                    47,
                    27
                ], obj.click);
            return fn.apply(obj, arguments);
        }.bind(this)(function () {
            __recognizer703686218.logEntry([
                47,
                28,
                47,
                36
            ], arguments);
            lifeCounter = 2;
            gameOver = false;
            __recognizer703686218.logProbe([
                50,
                12,
                50,
                18
            ], __recognizer703686218.logProbe([
                50,
                12,
                50,
                16
            ], init)());
        }));
        function loadImages(sources, callback) {
            __recognizer703686218.logEntry([
                53,
                17,
                53,
                27
            ], arguments);
            var images = {};
            var loadedImages = 0;
            var numImages = 0;
            for (var src in __recognizer703686218.logProbe([
                    58,
                    27,
                    58,
                    34
                ], sources)) {
                __recognizer703686218.logProbe([
                    59,
                    16,
                    59,
                    25
                ], numImages)++;
            }
            for (var src in __recognizer703686218.logProbe([
                    61,
                    27,
                    61,
                    34
                ], sources)) {
                images[src] = new (__recognizer703686218.logProbe([
                    62,
                    34,
                    62,
                    39
                ], Image))();
                images[src].onload = function () {
                    __recognizer703686218.logEntry([
                        63,
                        37,
                        63,
                        45
                    ], arguments);
                    if (++__recognizer703686218.logProbe([
                            64,
                            25,
                            64,
                            37
                        ], loadedImages) >= __recognizer703686218.logProbe([
                            64,
                            41,
                            64,
                            50
                        ], numImages)) {
                        __recognizer703686218.logProbe([
                            65,
                            24,
                            65,
                            40
                        ], __recognizer703686218.logProbe([
                            65,
                            24,
                            65,
                            32
                        ], callback)(__recognizer703686218.logProbe([
                            65,
                            33,
                            65,
                            39
                        ], images)));
                    }
                };
                images[src].src = __recognizer703686218.logProbe([
                    68,
                    42,
                    68,
                    45
                ], __recognizer703686218.logProbe([
                    68,
                    34,
                    68,
                    41
                ], sources)[src]);
            }
        }
        function drawCanvasStage(images) {
            __recognizer703686218.logEntry([
                73,
                17,
                73,
                32
            ], arguments);
            canvasStage = new (__recognizer703686218.logProbe([
                75,
                38,
                75,
                43
            ], __recognizer703686218.logProbe([
                75,
                30,
                75,
                37
            ], Kinetic).Stage))({
                container: 'gameContainer',
                width: 800,
                height: 550
            });
            vehicleLayer = new (__recognizer703686218.logProbe([
                81,
                39,
                81,
                44
            ], __recognizer703686218.logProbe([
                81,
                31,
                81,
                38
            ], Kinetic).Layer))();
            boxLayer = new (__recognizer703686218.logProbe([
                82,
                35,
                82,
                40
            ], __recognizer703686218.logProbe([
                82,
                27,
                82,
                34
            ], Kinetic).Layer))();
            weaponLayer = new (__recognizer703686218.logProbe([
                83,
                38,
                83,
                43
            ], __recognizer703686218.logProbe([
                83,
                30,
                83,
                37
            ], Kinetic).Layer))();
            enemyLayer = new (__recognizer703686218.logProbe([
                84,
                37,
                84,
                42
            ], __recognizer703686218.logProbe([
                84,
                29,
                84,
                36
            ], Kinetic).Layer))();
            labelLayer = new (__recognizer703686218.logProbe([
                85,
                37,
                85,
                42
            ], __recognizer703686218.logProbe([
                85,
                29,
                85,
                36
            ], Kinetic).Layer))();
            bulletLayer = new (__recognizer703686218.logProbe([
                86,
                38,
                86,
                43
            ], __recognizer703686218.logProbe([
                86,
                30,
                86,
                37
            ], Kinetic).Layer))();
            var pit = new (__recognizer703686218.logProbe([
                    88,
                    34,
                    88,
                    38
                ], __recognizer703686218.logProbe([
                    88,
                    26,
                    88,
                    33
                ], Kinetic).Rect))({
                    x: 90,
                    fillPatternImage: __recognizer703686218.logProbe([
                        90,
                        41,
                        90,
                        44
                    ], __recognizer703686218.logProbe([
                        90,
                        34,
                        90,
                        40
                    ], images).pit),
                    width: 34,
                    height: 1200,
                    offset: {
                        x: 0,
                        y: 650
                    }
                });
            var pit2 = new (__recognizer703686218.logProbe([
                    96,
                    35,
                    96,
                    39
                ], __recognizer703686218.logProbe([
                    96,
                    27,
                    96,
                    34
                ], Kinetic).Rect))({
                    x: 650,
                    fillPatternImage: __recognizer703686218.logProbe([
                        98,
                        41,
                        98,
                        44
                    ], __recognizer703686218.logProbe([
                        98,
                        34,
                        98,
                        40
                    ], images).pit),
                    width: 34,
                    height: 1200,
                    offset: {
                        x: 0,
                        y: 650
                    }
                });
            car = new (__recognizer703686218.logProbe([
                104,
                30,
                104,
                34
            ], __recognizer703686218.logProbe([
                104,
                22,
                104,
                29
            ], Kinetic).Rect))({
                x: 350,
                y: 430,
                fillPatternImage: __recognizer703686218.logProbe([
                    107,
                    41,
                    107,
                    44
                ], __recognizer703686218.logProbe([
                    107,
                    34,
                    107,
                    40
                ], images).car),
                width: 54,
                height: 112,
                offset: {
                    x: 0,
                    y: -430
                }
            });
            vehicle = function () {
                var obj = __recognizer703686218.logProbe([
                        114,
                        22,
                        114,
                        33
                    ], LibraryData), fn = __recognizer703686218.logProbe([
                        114,
                        34,
                        114,
                        47
                    ], obj.createVehicle);
                return fn.apply(obj, arguments);
            }.bind(this)(function () {
                var obj = __recognizer703686218.logProbe([
                        114,
                        48,
                        114,
                        51
                    ], car), fn = __recognizer703686218.logProbe([
                        114,
                        52,
                        114,
                        56
                    ], obj.getX);
                return fn.apply(obj, arguments);
            }.bind(this)(), function () {
                var obj = __recognizer703686218.logProbe([
                        114,
                        60,
                        114,
                        63
                    ], car), fn = __recognizer703686218.logProbe([
                        114,
                        64,
                        114,
                        68
                    ], obj.getY);
                return fn.apply(obj, arguments);
            }.bind(this)(), __recognizer703686218.logProbe([
                114,
                72,
                114,
                85
            ], numberOfShots));
            var amplitude = 270;
            var speedCar = 210;
            var period = 5000;
            var anim = new (__recognizer703686218.logProbe([
                    120,
                    35,
                    120,
                    44
                ], __recognizer703686218.logProbe([
                    120,
                    27,
                    120,
                    34
                ], Kinetic).Animation))(function (frame) {
                    __recognizer703686218.logEntry([
                        120,
                        45,
                        120,
                        53
                    ], arguments);
                    (function () {
                        var obj = __recognizer703686218.logProbe([
                                121,
                                16,
                                121,
                                19
                            ], pit), fn = __recognizer703686218.logProbe([
                                121,
                                20,
                                121,
                                24
                            ], obj.setY);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer703686218.logProbe([
                        121,
                        25,
                        121,
                        34
                    ], amplitude) * __recognizer703686218.logProbe([
                        121,
                        42,
                        121,
                        46
                    ], __recognizer703686218.logProbe([
                        121,
                        36,
                        121,
                        41
                    ], frame).time) * 2 / __recognizer703686218.logProbe([
                        121,
                        53,
                        121,
                        59
                    ], period)));
                    (function () {
                        var obj = __recognizer703686218.logProbe([
                                122,
                                16,
                                122,
                                20
                            ], pit2), fn = __recognizer703686218.logProbe([
                                122,
                                21,
                                122,
                                25
                            ], obj.setY);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer703686218.logProbe([
                        122,
                        26,
                        122,
                        35
                    ], amplitude) * __recognizer703686218.logProbe([
                        122,
                        43,
                        122,
                        47
                    ], __recognizer703686218.logProbe([
                        122,
                        37,
                        122,
                        42
                    ], frame).time) * 2 / __recognizer703686218.logProbe([
                        122,
                        54,
                        122,
                        60
                    ], period)));
                    if (__recognizer703686218.logProbe([
                            123,
                            25,
                            123,
                            29
                        ], __recognizer703686218.logProbe([
                            123,
                            19,
                            123,
                            24
                        ], frame).time) >= 5000)
                        frame.time = 0;
                }, __recognizer703686218.logProbe([
                    125,
                    15,
                    125,
                    27
                ], vehicleLayer));
            var anim2 = new (__recognizer703686218.logProbe([
                    127,
                    36,
                    127,
                    45
                ], __recognizer703686218.logProbe([
                    127,
                    28,
                    127,
                    35
                ], Kinetic).Animation))(function (frame) {
                    __recognizer703686218.logEntry([
                        127,
                        46,
                        127,
                        54
                    ], arguments);
                    var yCalculation = -__recognizer703686218.logProbe([
                            128,
                            36,
                            128,
                            44
                        ], speedCar) * __recognizer703686218.logProbe([
                            128,
                            53,
                            128,
                            57
                        ], __recognizer703686218.logProbe([
                            128,
                            47,
                            128,
                            52
                        ], frame).time) * 2 / __recognizer703686218.logProbe([
                            128,
                            64,
                            128,
                            70
                        ], period);
                    (function () {
                        var obj = __recognizer703686218.logProbe([
                                129,
                                16,
                                129,
                                23
                            ], vehicle), fn = __recognizer703686218.logProbe([
                                129,
                                24,
                                129,
                                36
                            ], obj.setPositionY);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer703686218.logProbe([
                        129,
                        37,
                        129,
                        49
                    ], yCalculation)));
                    (function () {
                        var obj = __recognizer703686218.logProbe([
                                130,
                                16,
                                130,
                                19
                            ], car), fn = __recognizer703686218.logProbe([
                                130,
                                20,
                                130,
                                24
                            ], obj.setY);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer703686218.logProbe([
                        130,
                        25,
                        130,
                        37
                    ], yCalculation)));
                    if (__recognizer703686218.logProbe([
                            131,
                            25,
                            131,
                            29
                        ], __recognizer703686218.logProbe([
                            131,
                            19,
                            131,
                            24
                        ], frame).time) >= 5000) {
                        frame.time = 0;
                        (function () {
                            var obj = __recognizer703686218.logProbe([
                                    133,
                                    20,
                                    133,
                                    30
                                ], enemyLayer), fn = __recognizer703686218.logProbe([
                                    133,
                                    31,
                                    133,
                                    45
                                ], obj.removeChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                        (function () {
                            var obj = __recognizer703686218.logProbe([
                                    134,
                                    20,
                                    134,
                                    30
                                ], enemyLayer), fn = __recognizer703686218.logProbe([
                                    134,
                                    31,
                                    134,
                                    35
                                ], obj.draw);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                        __recognizer703686218.logProbe([
                            135,
                            20,
                            138,
                            27
                        ], __recognizer703686218.logProbe([
                            135,
                            20,
                            135,
                            30
                        ], setTimeout)(function () {
                            __recognizer703686218.logEntry([
                                135,
                                31,
                                135,
                                39
                            ], arguments);
                            __recognizer703686218.logProbe([
                                136,
                                24,
                                136,
                                46
                            ], __recognizer703686218.logProbe([
                                136,
                                24,
                                136,
                                35
                            ], createEnemy)(5, __recognizer703686218.logProbe([
                                136,
                                39,
                                136,
                                45
                            ], images)));
                            __recognizer703686218.logProbe([
                                137,
                                24,
                                137,
                                50
                            ], __recognizer703686218.logProbe([
                                137,
                                24,
                                137,
                                33
                            ], createBox)(350, 200, __recognizer703686218.logProbe([
                                137,
                                43,
                                137,
                                49
                            ], images)));
                        }, 500));
                    }
                    var boxChildren = function () {
                            var obj = __recognizer703686218.logProbe([
                                    141,
                                    34,
                                    141,
                                    42
                                ], boxLayer), fn = __recognizer703686218.logProbe([
                                    141,
                                    43,
                                    141,
                                    54
                                ], obj.getChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)();
                    for (var k = 0; __recognizer703686218.logProbe([
                            142,
                            31,
                            142,
                            32
                        ], k) < __recognizer703686218.logProbe([
                            142,
                            47,
                            142,
                            53
                        ], __recognizer703686218.logProbe([
                            142,
                            35,
                            142,
                            46
                        ], boxChildren).length); __recognizer703686218.logProbe([
                            142,
                            55,
                            142,
                            56
                        ], k)++) {
                        if (function () {
                                var obj = __recognizer703686218.logProbe([
                                        143,
                                        23,
                                        143,
                                        26
                                    ], car), fn = __recognizer703686218.logProbe([
                                        143,
                                        27,
                                        143,
                                        31
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() == function () {
                                var obj = __recognizer703686218.logProbe([
                                        143,
                                        49,
                                        143,
                                        50
                                    ], __recognizer703686218.logProbe([
                                        143,
                                        37,
                                        143,
                                        48
                                    ], boxChildren)[k]), fn = __recognizer703686218.logProbe([
                                        143,
                                        52,
                                        143,
                                        56
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() && 380 + function () {
                                var obj = __recognizer703686218.logProbe([
                                        144,
                                        32,
                                        144,
                                        35
                                    ], car), fn = __recognizer703686218.logProbe([
                                        144,
                                        36,
                                        144,
                                        40
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)() <= function () {
                                var obj = __recognizer703686218.logProbe([
                                        144,
                                        58,
                                        144,
                                        59
                                    ], __recognizer703686218.logProbe([
                                        144,
                                        46,
                                        144,
                                        57
                                    ], boxChildren)[k]), fn = __recognizer703686218.logProbe([
                                        144,
                                        61,
                                        144,
                                        65
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)()) {
                            (function () {
                                var obj = __recognizer703686218.logProbe([
                                        145,
                                        36,
                                        145,
                                        37
                                    ], __recognizer703686218.logProbe([
                                        145,
                                        24,
                                        145,
                                        35
                                    ], boxChildren)[k]), fn = __recognizer703686218.logProbe([
                                        145,
                                        39,
                                        145,
                                        45
                                    ], obj.remove);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            (function () {
                                var obj = __recognizer703686218.logProbe([
                                        146,
                                        24,
                                        146,
                                        32
                                    ], boxLayer), fn = __recognizer703686218.logProbe([
                                        146,
                                        33,
                                        146,
                                        37
                                    ], obj.draw);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            var boxSound = new (__recognizer703686218.logProbe([
                                    147,
                                    43,
                                    147,
                                    48
                                ], Audio))('audio/success.wav');
                            (function () {
                                var obj = __recognizer703686218.logProbe([
                                        148,
                                        24,
                                        148,
                                        32
                                    ], boxSound), fn = __recognizer703686218.logProbe([
                                        148,
                                        33,
                                        148,
                                        37
                                    ], obj.play);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            (function () {
                                var obj = __recognizer703686218.logProbe([
                                        150,
                                        24,
                                        150,
                                        35
                                    ], weaponLayer), fn = __recognizer703686218.logProbe([
                                        150,
                                        36,
                                        150,
                                        50
                                    ], obj.removeChildren);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            weaponObj = __recognizer703686218.logProbe([
                                151,
                                36,
                                151,
                                46
                            ], weaponObj2);
                            break;
                        }
                    }
                    var enemyChildren = function () {
                            var obj = __recognizer703686218.logProbe([
                                    156,
                                    36,
                                    156,
                                    46
                                ], enemyLayer), fn = __recognizer703686218.logProbe([
                                    156,
                                    47,
                                    156,
                                    58
                                ], obj.getChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)();
                    for (var i = 0; __recognizer703686218.logProbe([
                            158,
                            31,
                            158,
                            32
                        ], i) < __recognizer703686218.logProbe([
                            158,
                            49,
                            158,
                            55
                        ], __recognizer703686218.logProbe([
                            158,
                            35,
                            158,
                            48
                        ], enemyChildren).length); __recognizer703686218.logProbe([
                            158,
                            57,
                            158,
                            58
                        ], i)++) {
                        if (function () {
                                var obj = __recognizer703686218.logProbe([
                                        159,
                                        23,
                                        159,
                                        26
                                    ], car), fn = __recognizer703686218.logProbe([
                                        159,
                                        27,
                                        159,
                                        31
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() + 25 == function () {
                                var obj = __recognizer703686218.logProbe([
                                        159,
                                        56,
                                        159,
                                        57
                                    ], __recognizer703686218.logProbe([
                                        159,
                                        42,
                                        159,
                                        55
                                    ], enemyChildren)[i]), fn = __recognizer703686218.logProbe([
                                        159,
                                        59,
                                        159,
                                        63
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() && 400 + function () {
                                var obj = __recognizer703686218.logProbe([
                                        160,
                                        32,
                                        160,
                                        35
                                    ], car), fn = __recognizer703686218.logProbe([
                                        160,
                                        36,
                                        160,
                                        40
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)() <= function () {
                                var obj = __recognizer703686218.logProbe([
                                        160,
                                        60,
                                        160,
                                        61
                                    ], __recognizer703686218.logProbe([
                                        160,
                                        46,
                                        160,
                                        59
                                    ], enemyChildren)[i]), fn = __recognizer703686218.logProbe([
                                        160,
                                        63,
                                        160,
                                        67
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)()) {
                            if (__recognizer703686218.logProbe([
                                    161,
                                    27,
                                    161,
                                    62
                                ], __recognizer703686218.logProbe([
                                    161,
                                    27,
                                    161,
                                    37
                                ], checkLifes)(__recognizer703686218.logProbe([
                                    161,
                                    38,
                                    161,
                                    43
                                ], anim2), __recognizer703686218.logProbe([
                                    161,
                                    45,
                                    161,
                                    58
                                ], enemyChildren), __recognizer703686218.logProbe([
                                    161,
                                    60,
                                    161,
                                    61
                                ], i)))) {
                                (function () {
                                    var obj = __recognizer703686218.logProbe([
                                            162,
                                            28,
                                            162,
                                            38
                                        ], enemyLayer), fn = __recognizer703686218.logProbe([
                                            162,
                                            39,
                                            162,
                                            43
                                        ], obj.draw);
                                    return fn.apply(obj, arguments);
                                }.bind(this)());
                                break;
                            }
                        }
                    }
                }, __recognizer703686218.logProbe([
                    168,
                    15,
                    168,
                    27
                ], vehicleLayer));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        170,
                        12,
                        170,
                        16
                    ], anim), fn = __recognizer703686218.logProbe([
                        170,
                        17,
                        170,
                        22
                    ], obj.start);
                return fn.apply(obj, arguments);
            }.bind(this)());
            (function () {
                var obj = __recognizer703686218.logProbe([
                        171,
                        12,
                        171,
                        17
                    ], anim2), fn = __recognizer703686218.logProbe([
                        171,
                        18,
                        171,
                        23
                    ], obj.start);
                return fn.apply(obj, arguments);
            }.bind(this)());
            (function () {
                var obj = __recognizer703686218.logProbe([
                        173,
                        12,
                        173,
                        24
                    ], vehicleLayer), fn = __recognizer703686218.logProbe([
                        173,
                        25,
                        173,
                        28
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer703686218.logProbe([
                173,
                29,
                173,
                32
            ], pit)));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        174,
                        12,
                        174,
                        24
                    ], vehicleLayer), fn = __recognizer703686218.logProbe([
                        174,
                        25,
                        174,
                        28
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer703686218.logProbe([
                174,
                29,
                174,
                33
            ], pit2)));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        175,
                        12,
                        175,
                        24
                    ], vehicleLayer), fn = __recognizer703686218.logProbe([
                        175,
                        25,
                        175,
                        28
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer703686218.logProbe([
                175,
                29,
                175,
                32
            ], car)));
            var lifesLabel = new (__recognizer703686218.logProbe([
                    177,
                    41,
                    177,
                    46
                ], __recognizer703686218.logProbe([
                    177,
                    33,
                    177,
                    40
                ], Kinetic).Label))({
                    x: 745,
                    y: 75,
                    opacity: 0.75
                });
            (function () {
                var obj = __recognizer703686218.logProbe([
                        183,
                        12,
                        183,
                        22
                    ], lifesLabel), fn = __recognizer703686218.logProbe([
                        183,
                        23,
                        183,
                        26
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(new (__recognizer703686218.logProbe([
                183,
                39,
                183,
                42
            ], __recognizer703686218.logProbe([
                183,
                31,
                183,
                38
            ], Kinetic).Tag))({
                fill: 'black',
                pointerDirection: 'down',
                pointerWidth: 10,
                pointerHeight: 10,
                lineJoin: 'round',
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: {
                    x: 10,
                    y: 20
                },
                shadowOpacity: 0.5
            })));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        195,
                        12,
                        195,
                        22
                    ], lifesLabel), fn = __recognizer703686218.logProbe([
                        195,
                        23,
                        195,
                        26
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(new (__recognizer703686218.logProbe([
                195,
                39,
                195,
                43
            ], __recognizer703686218.logProbe([
                195,
                31,
                195,
                38
            ], Kinetic).Text))({
                text: 'Lifes: 2',
                fontFamily: 'Calibri',
                fontSize: 24,
                padding: 5,
                fill: 'white',
                name: 'lifes'
            })));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        204,
                        12,
                        204,
                        22
                    ], labelLayer), fn = __recognizer703686218.logProbe([
                        204,
                        23,
                        204,
                        26
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer703686218.logProbe([
                204,
                27,
                204,
                37
            ], lifesLabel)));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        206,
                        12,
                        206,
                        23
                    ], canvasStage), fn = __recognizer703686218.logProbe([
                        206,
                        24,
                        206,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer703686218.logProbe([
                206,
                28,
                206,
                40
            ], vehicleLayer)));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        207,
                        12,
                        207,
                        23
                    ], canvasStage), fn = __recognizer703686218.logProbe([
                        207,
                        24,
                        207,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer703686218.logProbe([
                207,
                28,
                207,
                39
            ], weaponLayer)));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        208,
                        12,
                        208,
                        23
                    ], canvasStage), fn = __recognizer703686218.logProbe([
                        208,
                        24,
                        208,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer703686218.logProbe([
                208,
                28,
                208,
                36
            ], boxLayer)));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        209,
                        12,
                        209,
                        23
                    ], canvasStage), fn = __recognizer703686218.logProbe([
                        209,
                        24,
                        209,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer703686218.logProbe([
                209,
                28,
                209,
                38
            ], enemyLayer)));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        210,
                        12,
                        210,
                        23
                    ], canvasStage), fn = __recognizer703686218.logProbe([
                        210,
                        24,
                        210,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer703686218.logProbe([
                210,
                28,
                210,
                38
            ], labelLayer)));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        211,
                        12,
                        211,
                        23
                    ], canvasStage), fn = __recognizer703686218.logProbe([
                        211,
                        24,
                        211,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer703686218.logProbe([
                211,
                28,
                211,
                39
            ], bulletLayer)));
            __recognizer703686218.logProbe([
                213,
                12,
                213,
                34
            ], __recognizer703686218.logProbe([
                213,
                12,
                213,
                23
            ], createEnemy)(5, __recognizer703686218.logProbe([
                213,
                27,
                213,
                33
            ], images)));
            __recognizer703686218.logProbe([
                214,
                12,
                214,
                37
            ], __recognizer703686218.logProbe([
                214,
                12,
                214,
                21
            ], createBox)(150, 100, __recognizer703686218.logProbe([
                214,
                30,
                214,
                36
            ], images)));
            __recognizer703686218.logProbe([
                215,
                12,
                215,
                29
            ], __recognizer703686218.logProbe([
                215,
                12,
                215,
                21
            ], arrowKeys)(__recognizer703686218.logProbe([
                215,
                22,
                215,
                28
            ], images)));
        }
        function checkLifes(pAnimation, pLayer, i) {
            __recognizer703686218.logEntry([
                218,
                17,
                218,
                27
            ], arguments);
            (function () {
                var obj = __recognizer703686218.logProbe([
                        219,
                        12,
                        219,
                        19
                    ], console), fn = __recognizer703686218.logProbe([
                        219,
                        20,
                        219,
                        23
                    ], obj.log);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer703686218.logProbe([
                219,
                24,
                219,
                35
            ], lifeCounter)));
            if (__recognizer703686218.logProbe([
                    220,
                    15,
                    220,
                    26
                ], lifeCounter) == 0) {
                (function () {
                    var obj = __recognizer703686218.logProbe([
                            221,
                            16,
                            221,
                            19
                        ], car), fn = __recognizer703686218.logProbe([
                            221,
                            20,
                            221,
                            26
                        ], obj.remove);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                (function () {
                    var obj = __recognizer703686218.logProbe([
                            222,
                            16,
                            222,
                            28
                        ], vehicleLayer), fn = __recognizer703686218.logProbe([
                            222,
                            29,
                            222,
                            33
                        ], obj.draw);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                (function () {
                    var obj = __recognizer703686218.logProbe([
                            223,
                            16,
                            223,
                            26
                        ], pAnimation), fn = __recognizer703686218.logProbe([
                            223,
                            27,
                            223,
                            31
                        ], obj.stop);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                __recognizer703686218.logProbe([
                    224,
                    16,
                    224,
                    29
                ], __recognizer703686218.logProbe([
                    224,
                    16,
                    224,
                    27
                ], setGameOver)());
            } else {
                __recognizer703686218.logProbe([
                    226,
                    16,
                    226,
                    27
                ], lifeCounter)--;
                (function () {
                    var obj = __recognizer703686218.logProbe([
                            227,
                            23,
                            227,
                            24
                        ], __recognizer703686218.logProbe([
                            227,
                            16,
                            227,
                            22
                        ], pLayer)[i]), fn = __recognizer703686218.logProbe([
                            227,
                            26,
                            227,
                            32
                        ], obj.remove);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                var labelChildren = function () {
                        var obj = __recognizer703686218.logProbe([
                                228,
                                36,
                                228,
                                46
                            ], labelLayer), fn = __recognizer703686218.logProbe([
                                228,
                                47,
                                228,
                                58
                            ], obj.getChildren);
                        return fn.apply(obj, arguments);
                    }.bind(this)();
                for (var i = 0; __recognizer703686218.logProbe([
                        229,
                        31,
                        229,
                        32
                    ], i) < __recognizer703686218.logProbe([
                        229,
                        49,
                        229,
                        55
                    ], __recognizer703686218.logProbe([
                        229,
                        35,
                        229,
                        48
                    ], labelChildren).length); __recognizer703686218.logProbe([
                        229,
                        57,
                        229,
                        58
                    ], i)++) {
                    var labelChildrenDepth = function () {
                            var obj = __recognizer703686218.logProbe([
                                    230,
                                    59,
                                    230,
                                    60
                                ], __recognizer703686218.logProbe([
                                    230,
                                    45,
                                    230,
                                    58
                                ], labelChildren)[i]), fn = __recognizer703686218.logProbe([
                                    230,
                                    62,
                                    230,
                                    73
                                ], obj.getChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)();
                    for (var j = 0; __recognizer703686218.logProbe([
                            231,
                            35,
                            231,
                            36
                        ], j) < __recognizer703686218.logProbe([
                            231,
                            57,
                            231,
                            63
                        ], __recognizer703686218.logProbe([
                            231,
                            38,
                            231,
                            56
                        ], labelChildrenDepth).length); __recognizer703686218.logProbe([
                            231,
                            65,
                            231,
                            66
                        ], j)++) {
                        if (function () {
                                var obj = __recognizer703686218.logProbe([
                                        232,
                                        46,
                                        232,
                                        47
                                    ], __recognizer703686218.logProbe([
                                        232,
                                        27,
                                        232,
                                        45
                                    ], labelChildrenDepth)[j]), fn = __recognizer703686218.logProbe([
                                        232,
                                        49,
                                        232,
                                        53
                                    ], obj.name);
                                return fn.apply(obj, arguments);
                            }.bind(this)() == 'lifes') {
                            (function () {
                                var obj = __recognizer703686218.logProbe([
                                        233,
                                        47,
                                        233,
                                        48
                                    ], __recognizer703686218.logProbe([
                                        233,
                                        28,
                                        233,
                                        46
                                    ], labelChildrenDepth)[j]), fn = __recognizer703686218.logProbe([
                                        233,
                                        50,
                                        233,
                                        57
                                    ], obj.setText);
                                return fn.apply(obj, arguments);
                            }.bind(this)('Lifes:' + __recognizer703686218.logProbe([
                                233,
                                69,
                                233,
                                80
                            ], lifeCounter)));
                            (function () {
                                var obj = __recognizer703686218.logProbe([
                                        234,
                                        28,
                                        234,
                                        38
                                    ], labelLayer), fn = __recognizer703686218.logProbe([
                                        234,
                                        39,
                                        234,
                                        43
                                    ], obj.draw);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            break;
                        }
                    }
                }
                var smashSound = new (__recognizer703686218.logProbe([
                        239,
                        37,
                        239,
                        42
                    ], Audio))('audio/smash2.wav');
                (function () {
                    var obj = __recognizer703686218.logProbe([
                            240,
                            16,
                            240,
                            26
                        ], smashSound), fn = __recognizer703686218.logProbe([
                            240,
                            27,
                            240,
                            31
                        ], obj.play);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                return true;
            }
            return false;
        }
        function setGameOver() {
            __recognizer703686218.logEntry([
                246,
                17,
                246,
                28
            ], arguments);
            var gameOverLabel = new (__recognizer703686218.logProbe([
                    247,
                    44,
                    247,
                    49
                ], __recognizer703686218.logProbe([
                    247,
                    36,
                    247,
                    43
                ], Kinetic).Label))({
                    x: function () {
                        var obj = __recognizer703686218.logProbe([
                                248,
                                19,
                                248,
                                30
                            ], canvasStage), fn = __recognizer703686218.logProbe([
                                248,
                                31,
                                248,
                                39
                            ], obj.getWidth);
                        return fn.apply(obj, arguments);
                    }.bind(this)() / 2,
                    y: function () {
                        var obj = __recognizer703686218.logProbe([
                                249,
                                19,
                                249,
                                30
                            ], canvasStage), fn = __recognizer703686218.logProbe([
                                249,
                                31,
                                249,
                                40
                            ], obj.getHeight);
                        return fn.apply(obj, arguments);
                    }.bind(this)() / 2,
                    opacity: 0.75
                });
            (function () {
                var obj = __recognizer703686218.logProbe([
                        253,
                        12,
                        253,
                        25
                    ], gameOverLabel), fn = __recognizer703686218.logProbe([
                        253,
                        26,
                        253,
                        29
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(new (__recognizer703686218.logProbe([
                253,
                42,
                253,
                45
            ], __recognizer703686218.logProbe([
                253,
                34,
                253,
                41
            ], Kinetic).Tag))({
                fill: 'black',
                pointerDirection: 'down',
                pointerWidth: 10,
                pointerHeight: 10,
                lineJoin: 'round',
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: {
                    x: 10,
                    y: 20
                },
                shadowOpacity: 0.5
            })));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        265,
                        12,
                        265,
                        25
                    ], gameOverLabel), fn = __recognizer703686218.logProbe([
                        265,
                        26,
                        265,
                        29
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(new (__recognizer703686218.logProbe([
                265,
                42,
                265,
                46
            ], __recognizer703686218.logProbe([
                265,
                34,
                265,
                41
            ], Kinetic).Text))({
                text: 'Game Over',
                fontFamily: 'Calibri',
                fontSize: 60,
                padding: 5,
                fill: 'white',
                name: 'lifes'
            })));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        274,
                        12,
                        274,
                        22
                    ], labelLayer), fn = __recognizer703686218.logProbe([
                        274,
                        23,
                        274,
                        26
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer703686218.logProbe([
                274,
                27,
                274,
                40
            ], gameOverLabel)));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        275,
                        12,
                        275,
                        22
                    ], labelLayer), fn = __recognizer703686218.logProbe([
                        275,
                        23,
                        275,
                        27
                    ], obj.draw);
                return fn.apply(obj, arguments);
            }.bind(this)());
            gameOver = true;
        }
        function createEnemy(pNumberOfEnemies, pImages) {
            __recognizer703686218.logEntry([
                281,
                17,
                281,
                28
            ], arguments);
            enemiesCollection = [];
            for (var i = 0; __recognizer703686218.logProbe([
                    283,
                    27,
                    283,
                    28
                ], i) < __recognizer703686218.logProbe([
                    283,
                    31,
                    283,
                    47
                ], pNumberOfEnemies); __recognizer703686218.logProbe([
                    283,
                    49,
                    283,
                    50
                ], i)++) {
                var y = __recognizer703686218.logProbe([
                        284,
                        24,
                        284,
                        45
                    ], __recognizer703686218.logProbe([
                        284,
                        24,
                        284,
                        36
                    ], getRandomInt)(50, 300));
                var x = __recognizer703686218.logProbe([
                        285,
                        24,
                        285,
                        42
                    ], __recognizer703686218.logProbe([
                        285,
                        24,
                        285,
                        36
                    ], getRandomInt)(0, 4));
                (function () {
                    var obj = __recognizer703686218.logProbe([
                            287,
                            16,
                            287,
                            33
                        ], enemiesCollection), fn = __recognizer703686218.logProbe([
                            287,
                            34,
                            287,
                            38
                        ], obj.push);
                    return fn.apply(obj, arguments);
                }.bind(this)(function () {
                    var obj = __recognizer703686218.logProbe([
                            287,
                            39,
                            287,
                            50
                        ], LibraryData), fn = __recognizer703686218.logProbe([
                            287,
                            51,
                            287,
                            62
                        ], obj.createEnemy);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer703686218.logProbe([
                    287,
                    80,
                    287,
                    81
                ], __recognizer703686218.logProbe([
                    287,
                    63,
                    287,
                    79
                ], enemiesPositionX)[x]), __recognizer703686218.logProbe([
                    287,
                    84,
                    287,
                    85
                ], y), 1)));
                x = function () {
                    var obj = __recognizer703686218.logProbe([
                            288,
                            38,
                            288,
                            39
                        ], __recognizer703686218.logProbe([
                            288,
                            20,
                            288,
                            37
                        ], enemiesCollection)[i]), fn = __recognizer703686218.logProbe([
                            288,
                            41,
                            288,
                            53
                        ], obj.getPositionX);
                    return fn.apply(obj, arguments);
                }.bind(this)();
                y = function () {
                    var obj = __recognizer703686218.logProbe([
                            289,
                            38,
                            289,
                            39
                        ], __recognizer703686218.logProbe([
                            289,
                            20,
                            289,
                            37
                        ], enemiesCollection)[i]), fn = __recognizer703686218.logProbe([
                            289,
                            41,
                            289,
                            53
                        ], obj.getPositionY);
                    return fn.apply(obj, arguments);
                }.bind(this)();
                var weapon = new (__recognizer703686218.logProbe([
                        291,
                        41,
                        291,
                        55
                    ], __recognizer703686218.logProbe([
                        291,
                        33,
                        291,
                        40
                    ], Kinetic).RegularPolygon))({
                        x: x,
                        y: y,
                        fill: 'purple',
                        sides: 4,
                        radius: 20,
                        stroke: '#000',
                        strokeWidth: 10
                    });
                (function () {
                    var obj = __recognizer703686218.logProbe([
                            300,
                            16,
                            300,
                            26
                        ], enemyLayer), fn = __recognizer703686218.logProbe([
                            300,
                            27,
                            300,
                            30
                        ], obj.add);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer703686218.logProbe([
                    300,
                    31,
                    300,
                    37
                ], weapon)));
                (function () {
                    var obj = __recognizer703686218.logProbe([
                            301,
                            16,
                            301,
                            26
                        ], enemyLayer), fn = __recognizer703686218.logProbe([
                            301,
                            27,
                            301,
                            31
                        ], obj.draw);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                __recognizer703686218.logProbe([
                    303,
                    16,
                    303,
                    43
                ], __recognizer703686218.logProbe([
                    303,
                    16,
                    303,
                    28
                ], createBullet)(__recognizer703686218.logProbe([
                    303,
                    29,
                    303,
                    30
                ], x), __recognizer703686218.logProbe([
                    303,
                    32,
                    303,
                    33
                ], y), __recognizer703686218.logProbe([
                    303,
                    35,
                    303,
                    42
                ], pImages)));
            }
        }
        function createWeapon(pWeapon) {
            __recognizer703686218.logEntry([
                307,
                17,
                307,
                29
            ], arguments);
            var period = 2000;
            var tmpX = 25;
            var group = new (__recognizer703686218.logProbe([
                    310,
                    36,
                    310,
                    41
                ], __recognizer703686218.logProbe([
                    310,
                    28,
                    310,
                    35
                ], Kinetic).Group))();
            var posY = 380 + function () {
                    var obj = __recognizer703686218.logProbe([
                            311,
                            29,
                            311,
                            32
                        ], car), fn = __recognizer703686218.logProbe([
                            311,
                            33,
                            311,
                            37
                        ], obj.getY);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            for (var i = 0; __recognizer703686218.logProbe([
                    313,
                    27,
                    313,
                    28
                ], i) < __recognizer703686218.logProbe([
                    313,
                    41,
                    313,
                    51
                ], __recognizer703686218.logProbe([
                    313,
                    31,
                    313,
                    40
                ], weaponObj).laneNumber); __recognizer703686218.logProbe([
                    313,
                    53,
                    313,
                    54
                ], i)++) {
                (function () {
                    __recognizer703686218.logEntry([
                        314,
                        17,
                        314,
                        25
                    ], arguments);
                    if (__recognizer703686218.logProbe([
                            315,
                            23,
                            315,
                            24
                        ], i) == 2)
                        tmpX -= __recognizer703686218.logProbe([
                            316,
                            32,
                            316,
                            36
                        ], tmpX) + 75;
                    var x = function () {
                            var obj = __recognizer703686218.logProbe([
                                    317,
                                    28,
                                    317,
                                    31
                                ], car), fn = __recognizer703686218.logProbe([
                                    317,
                                    32,
                                    317,
                                    36
                                ], obj.getX);
                            return fn.apply(obj, arguments);
                        }.bind(this)() + __recognizer703686218.logProbe([
                            317,
                            41,
                            317,
                            45
                        ], tmpX);
                    if (__recognizer703686218.logProbe([
                            318,
                            23,
                            318,
                            24
                        ], x) < 675 && __recognizer703686218.logProbe([
                            318,
                            34,
                            318,
                            35
                        ], x) > 75) {
                        var weapon = new (__recognizer703686218.logProbe([
                                319,
                                49,
                                319,
                                63
                            ], __recognizer703686218.logProbe([
                                319,
                                41,
                                319,
                                48
                            ], Kinetic).RegularPolygon))({
                                x: x,
                                y: posY,
                                fill: __recognizer703686218.logProbe([
                                    322,
                                    44,
                                    322,
                                    49
                                ], __recognizer703686218.logProbe([
                                    322,
                                    34,
                                    322,
                                    43
                                ], weaponObj).color),
                                sides: __recognizer703686218.logProbe([
                                    323,
                                    45,
                                    323,
                                    56
                                ], __recognizer703686218.logProbe([
                                    323,
                                    35,
                                    323,
                                    44
                                ], weaponObj).shapeWeapon),
                                radius: 20,
                                stroke: '#000',
                                strokeWidth: __recognizer703686218.logProbe([
                                    326,
                                    51,
                                    326,
                                    57
                                ], __recognizer703686218.logProbe([
                                    326,
                                    41,
                                    326,
                                    50
                                ], weaponObj).stroke)
                            });
                        (function () {
                            var obj = __recognizer703686218.logProbe([
                                    328,
                                    24,
                                    328,
                                    29
                                ], group), fn = __recognizer703686218.logProbe([
                                    328,
                                    30,
                                    328,
                                    33
                                ], obj.add);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer703686218.logProbe([
                            328,
                            34,
                            328,
                            40
                        ], weapon)));
                    }
                    tmpX += 100;
                }());
            }
            (function () {
                var obj = __recognizer703686218.logProbe([
                        333,
                        12,
                        333,
                        23
                    ], weaponLayer), fn = __recognizer703686218.logProbe([
                        333,
                        24,
                        333,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer703686218.logProbe([
                333,
                28,
                333,
                33
            ], group)));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        334,
                        12,
                        334,
                        23
                    ], weaponLayer), fn = __recognizer703686218.logProbe([
                        334,
                        24,
                        334,
                        28
                    ], obj.draw);
                return fn.apply(obj, arguments);
            }.bind(this)());
            var enemyChildren = function () {
                    var obj = __recognizer703686218.logProbe([
                            337,
                            32,
                            337,
                            42
                        ], enemyLayer), fn = __recognizer703686218.logProbe([
                            337,
                            43,
                            337,
                            54
                        ], obj.getChildren);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            var childrenGroup = function () {
                    var obj = __recognizer703686218.logProbe([
                            338,
                            32,
                            338,
                            43
                        ], weaponLayer), fn = __recognizer703686218.logProbe([
                            338,
                            44,
                            338,
                            55
                        ], obj.getChildren);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            var weaponChildren;
            var anim = new (__recognizer703686218.logProbe([
                    341,
                    35,
                    341,
                    44
                ], __recognizer703686218.logProbe([
                    341,
                    27,
                    341,
                    34
                ], Kinetic).Animation))(function (frame) {
                    __recognizer703686218.logEntry([
                        341,
                        45,
                        341,
                        53
                    ], arguments);
                    if (__recognizer703686218.logProbe([
                            342,
                            19,
                            342,
                            23
                        ], posY) > 0)
                        (function () {
                            var obj = __recognizer703686218.logProbe([
                                    343,
                                    20,
                                    343,
                                    25
                                ], group), fn = __recognizer703686218.logProbe([
                                    343,
                                    26,
                                    343,
                                    30
                                ], obj.setY);
                            return fn.apply(obj, arguments);
                        }.bind(this)(-__recognizer703686218.logProbe([
                            343,
                            33,
                            343,
                            37
                        ], posY) * __recognizer703686218.logProbe([
                            343,
                            46,
                            343,
                            50
                        ], __recognizer703686218.logProbe([
                            343,
                            40,
                            343,
                            45
                        ], frame).time) * 4 / __recognizer703686218.logProbe([
                            343,
                            57,
                            343,
                            63
                        ], period)));
                    else
                        (function () {
                            var obj = __recognizer703686218.logProbe([
                                    345,
                                    20,
                                    345,
                                    25
                                ], group), fn = __recognizer703686218.logProbe([
                                    345,
                                    26,
                                    345,
                                    30
                                ], obj.setY);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer703686218.logProbe([
                            345,
                            32,
                            345,
                            36
                        ], posY) * __recognizer703686218.logProbe([
                            345,
                            45,
                            345,
                            49
                        ], __recognizer703686218.logProbe([
                            345,
                            39,
                            345,
                            44
                        ], frame).time) * 4 / __recognizer703686218.logProbe([
                            345,
                            56,
                            345,
                            62
                        ], period)));
                    if (__recognizer703686218.logProbe([
                            346,
                            25,
                            346,
                            29
                        ], __recognizer703686218.logProbe([
                            346,
                            19,
                            346,
                            24
                        ], frame).time) >= 2000) {
                        var children = function () {
                                var obj = __recognizer703686218.logProbe([
                                        347,
                                        35,
                                        347,
                                        46
                                    ], weaponLayer), fn = __recognizer703686218.logProbe([
                                        347,
                                        47,
                                        347,
                                        58
                                    ], obj.getChildren);
                                return fn.apply(obj, arguments);
                            }.bind(this)();
                        if (__recognizer703686218.logProbe([
                                348,
                                32,
                                348,
                                38
                            ], __recognizer703686218.logProbe([
                                348,
                                23,
                                348,
                                31
                            ], children).length) > 0) {
                            (function () {
                                var obj = __recognizer703686218.logProbe([
                                        349,
                                        33,
                                        349,
                                        34
                                    ], __recognizer703686218.logProbe([
                                        349,
                                        24,
                                        349,
                                        32
                                    ], children)[0]), fn = __recognizer703686218.logProbe([
                                        349,
                                        36,
                                        349,
                                        42
                                    ], obj.remove);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            (function () {
                                var obj = __recognizer703686218.logProbe([
                                        350,
                                        24,
                                        350,
                                        35
                                    ], weaponLayer), fn = __recognizer703686218.logProbe([
                                        350,
                                        36,
                                        350,
                                        40
                                    ], obj.draw);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                        }
                        (function () {
                            var obj = __recognizer703686218.logProbe([
                                    352,
                                    20,
                                    352,
                                    24
                                ], anim), fn = __recognizer703686218.logProbe([
                                    352,
                                    25,
                                    352,
                                    29
                                ], obj.stop);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                    }
                    for (var j = 0; __recognizer703686218.logProbe([
                            355,
                            31,
                            355,
                            32
                        ], j) < __recognizer703686218.logProbe([
                            355,
                            49,
                            355,
                            55
                        ], __recognizer703686218.logProbe([
                            355,
                            35,
                            355,
                            48
                        ], enemyChildren).length); __recognizer703686218.logProbe([
                            355,
                            57,
                            355,
                            58
                        ], j)++) {
                        for (var k = 0; __recognizer703686218.logProbe([
                                356,
                                35,
                                356,
                                36
                            ], k) < __recognizer703686218.logProbe([
                                356,
                                53,
                                356,
                                59
                            ], __recognizer703686218.logProbe([
                                356,
                                39,
                                356,
                                52
                            ], childrenGroup).length); __recognizer703686218.logProbe([
                                356,
                                61,
                                356,
                                62
                            ], k)++) {
                            weaponChildren = function () {
                                var obj = __recognizer703686218.logProbe([
                                        357,
                                        69,
                                        357,
                                        70
                                    ], function () {
                                        var obj = __recognizer703686218.logProbe([
                                                357,
                                                41,
                                                357,
                                                54
                                            ], childrenGroup), fn = __recognizer703686218.logProbe([
                                                357,
                                                55,
                                                357,
                                                66
                                            ], obj.getChildren);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)()[k]), fn = __recognizer703686218.logProbe([
                                        357,
                                        72,
                                        357,
                                        83
                                    ], obj.getChildren);
                                return fn.apply(obj, arguments);
                            }.bind(this)();
                            for (var i = 0; __recognizer703686218.logProbe([
                                    358,
                                    39,
                                    358,
                                    40
                                ], i) < __recognizer703686218.logProbe([
                                    358,
                                    58,
                                    358,
                                    64
                                ], __recognizer703686218.logProbe([
                                    358,
                                    43,
                                    358,
                                    57
                                ], weaponChildren).length); __recognizer703686218.logProbe([
                                    358,
                                    66,
                                    358,
                                    67
                                ], i)++) {
                                if (__recognizer703686218.logProbe([
                                        359,
                                        45,
                                        359,
                                        46
                                    ], __recognizer703686218.logProbe([
                                        359,
                                        31,
                                        359,
                                        44
                                    ], enemyChildren)[j]) == __recognizer703686218.logProbe([
                                        359,
                                        51,
                                        359,
                                        60
                                    ], undefined))
                                    break;
                                var enemyX = function () {
                                        var obj = __recognizer703686218.logProbe([
                                                361,
                                                55,
                                                361,
                                                56
                                            ], __recognizer703686218.logProbe([
                                                361,
                                                41,
                                                361,
                                                54
                                            ], enemyChildren)[j]), fn = __recognizer703686218.logProbe([
                                                361,
                                                58,
                                                361,
                                                62
                                            ], obj.getX);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)();
                                var weaponX = function () {
                                        var obj = __recognizer703686218.logProbe([
                                                362,
                                                57,
                                                362,
                                                58
                                            ], __recognizer703686218.logProbe([
                                                362,
                                                42,
                                                362,
                                                56
                                            ], weaponChildren)[i]), fn = __recognizer703686218.logProbe([
                                                362,
                                                60,
                                                362,
                                                64
                                            ], obj.getX);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)();
                                if (__recognizer703686218.logProbe([
                                        363,
                                        31,
                                        363,
                                        35
                                    ], posY) + function () {
                                        var obj = __recognizer703686218.logProbe([
                                                363,
                                                52,
                                                363,
                                                53
                                            ], __recognizer703686218.logProbe([
                                                363,
                                                38,
                                                363,
                                                51
                                            ], childrenGroup)[k]), fn = __recognizer703686218.logProbe([
                                                363,
                                                55,
                                                363,
                                                59
                                            ], obj.getY);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)() <= function () {
                                        var obj = __recognizer703686218.logProbe([
                                                363,
                                                79,
                                                363,
                                                80
                                            ], __recognizer703686218.logProbe([
                                                363,
                                                65,
                                                363,
                                                78
                                            ], enemyChildren)[j]), fn = __recognizer703686218.logProbe([
                                                363,
                                                82,
                                                363,
                                                86
                                            ], obj.getY);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)() && __recognizer703686218.logProbe([
                                        364,
                                        34,
                                        364,
                                        41
                                    ], weaponX) == __recognizer703686218.logProbe([
                                        364,
                                        45,
                                        364,
                                        51
                                    ], enemyX)) {
                                    (function () {
                                        var obj = __recognizer703686218.logProbe([
                                                365,
                                                46,
                                                365,
                                                47
                                            ], __recognizer703686218.logProbe([
                                                365,
                                                32,
                                                365,
                                                45
                                            ], enemyChildren)[j]), fn = __recognizer703686218.logProbe([
                                                365,
                                                49,
                                                365,
                                                55
                                            ], obj.remove);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    (function () {
                                        var obj = __recognizer703686218.logProbe([
                                                366,
                                                32,
                                                366,
                                                42
                                            ], enemyLayer), fn = __recognizer703686218.logProbe([
                                                366,
                                                43,
                                                366,
                                                47
                                            ], obj.draw);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    (function () {
                                        var obj = __recognizer703686218.logProbe([
                                                367,
                                                47,
                                                367,
                                                48
                                            ], __recognizer703686218.logProbe([
                                                367,
                                                32,
                                                367,
                                                46
                                            ], weaponChildren)[i]), fn = __recognizer703686218.logProbe([
                                                367,
                                                50,
                                                367,
                                                56
                                            ], obj.remove);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    (function () {
                                        var obj = __recognizer703686218.logProbe([
                                                368,
                                                32,
                                                368,
                                                43
                                            ], weaponLayer), fn = __recognizer703686218.logProbe([
                                                368,
                                                44,
                                                368,
                                                48
                                            ], obj.draw);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    if (__recognizer703686218.logProbe([
                                            369,
                                            49,
                                            369,
                                            55
                                        ], __recognizer703686218.logProbe([
                                            369,
                                            35,
                                            369,
                                            48
                                        ], enemyChildren).length) == 0) {
                                        (function () {
                                            var obj = __recognizer703686218.logProbe([
                                                    370,
                                                    36,
                                                    370,
                                                    47
                                                ], weaponLayer), fn = __recognizer703686218.logProbe([
                                                    370,
                                                    48,
                                                    370,
                                                    62
                                                ], obj.removeChildren);
                                            return fn.apply(obj, arguments);
                                        }.bind(this)());
                                        (function () {
                                            var obj = __recognizer703686218.logProbe([
                                                    371,
                                                    36,
                                                    371,
                                                    50
                                                ], weaponChildren), fn = __recognizer703686218.logProbe([
                                                    371,
                                                    51,
                                                    371,
                                                    55
                                                ], obj.draw);
                                            return fn.apply(obj, arguments);
                                        }.bind(this)());
                                    }
                                    var bulletSound = new (__recognizer703686218.logProbe([
                                            373,
                                            54,
                                            373,
                                            59
                                        ], Audio))('audio/smash.wav');
                                    (function () {
                                        var obj = __recognizer703686218.logProbe([
                                                374,
                                                32,
                                                374,
                                                43
                                            ], bulletSound), fn = __recognizer703686218.logProbe([
                                                374,
                                                44,
                                                374,
                                                48
                                            ], obj.play);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    break;
                                }
                            }
                        }
                    }
                }, __recognizer703686218.logProbe([
                    381,
                    15,
                    381,
                    26
                ], weaponLayer));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        383,
                        12,
                        383,
                        16
                    ], anim), fn = __recognizer703686218.logProbe([
                        383,
                        17,
                        383,
                        22
                    ], obj.start);
                return fn.apply(obj, arguments);
            }.bind(this)());
        }
        function createBullet(pPosX, pPosY, pImages) {
            __recognizer703686218.logEntry([
                386,
                17,
                386,
                29
            ], arguments);
            var period = 2000;
            var bullet = new (__recognizer703686218.logProbe([
                    389,
                    37,
                    389,
                    41
                ], __recognizer703686218.logProbe([
                    389,
                    29,
                    389,
                    36
                ], Kinetic).Rect))({
                    x: __recognizer703686218.logProbe([
                        390,
                        19,
                        390,
                        24
                    ], pPosX) - 15,
                    y: pPosY,
                    fillPatternImage: __recognizer703686218.logProbe([
                        392,
                        42,
                        392,
                        48
                    ], __recognizer703686218.logProbe([
                        392,
                        34,
                        392,
                        41
                    ], pImages).bullet),
                    width: 32,
                    height: 32
                });
            (function () {
                var obj = __recognizer703686218.logProbe([
                        397,
                        12,
                        397,
                        23
                    ], bulletLayer), fn = __recognizer703686218.logProbe([
                        397,
                        24,
                        397,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer703686218.logProbe([
                397,
                28,
                397,
                34
            ], bullet)));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        398,
                        12,
                        398,
                        23
                    ], bulletLayer), fn = __recognizer703686218.logProbe([
                        398,
                        24,
                        398,
                        28
                    ], obj.draw);
                return fn.apply(obj, arguments);
            }.bind(this)());
            var childrenBullets = function () {
                    var obj = __recognizer703686218.logProbe([
                            400,
                            34,
                            400,
                            45
                        ], bulletLayer), fn = __recognizer703686218.logProbe([
                            400,
                            46,
                            400,
                            57
                        ], obj.getChildren);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            var childrenGroup = function () {
                    var obj = __recognizer703686218.logProbe([
                            401,
                            32,
                            401,
                            43
                        ], weaponLayer), fn = __recognizer703686218.logProbe([
                            401,
                            44,
                            401,
                            55
                        ], obj.getChildren);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            var weaponChildren;
            var anim = new (__recognizer703686218.logProbe([
                    404,
                    35,
                    404,
                    44
                ], __recognizer703686218.logProbe([
                    404,
                    27,
                    404,
                    34
                ], Kinetic).Animation))(function (frame) {
                    __recognizer703686218.logEntry([
                        404,
                        45,
                        404,
                        53
                    ], arguments);
                    if (__recognizer703686218.logProbe([
                            405,
                            19,
                            405,
                            24
                        ], pPosY) < 0)
                        (function () {
                            var obj = __recognizer703686218.logProbe([
                                    406,
                                    20,
                                    406,
                                    26
                                ], bullet), fn = __recognizer703686218.logProbe([
                                    406,
                                    27,
                                    406,
                                    31
                                ], obj.setY);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer703686218.logProbe([
                            406,
                            32,
                            406,
                            37
                        ], pPosY) - __recognizer703686218.logProbe([
                            406,
                            41,
                            406,
                            46
                        ], pPosY) * __recognizer703686218.logProbe([
                            406,
                            55,
                            406,
                            59
                        ], __recognizer703686218.logProbe([
                            406,
                            49,
                            406,
                            54
                        ], frame).time) * 4 / __recognizer703686218.logProbe([
                            406,
                            66,
                            406,
                            72
                        ], period)));
                    else
                        (function () {
                            var obj = __recognizer703686218.logProbe([
                                    408,
                                    20,
                                    408,
                                    26
                                ], bullet), fn = __recognizer703686218.logProbe([
                                    408,
                                    27,
                                    408,
                                    31
                                ], obj.setY);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer703686218.logProbe([
                            408,
                            32,
                            408,
                            37
                        ], pPosY) + __recognizer703686218.logProbe([
                            408,
                            41,
                            408,
                            46
                        ], pPosY) * __recognizer703686218.logProbe([
                            408,
                            55,
                            408,
                            59
                        ], __recognizer703686218.logProbe([
                            408,
                            49,
                            408,
                            54
                        ], frame).time) * 4 / __recognizer703686218.logProbe([
                            408,
                            66,
                            408,
                            72
                        ], period)));
                    if (__recognizer703686218.logProbe([
                            409,
                            25,
                            409,
                            29
                        ], __recognizer703686218.logProbe([
                            409,
                            19,
                            409,
                            24
                        ], frame).time) >= 4000) {
                        if (__recognizer703686218.logProbe([
                                410,
                                39,
                                410,
                                45
                            ], __recognizer703686218.logProbe([
                                410,
                                23,
                                410,
                                38
                            ], childrenBullets).length) > 0) {
                            (function () {
                                var obj = __recognizer703686218.logProbe([
                                        411,
                                        40,
                                        411,
                                        41
                                    ], __recognizer703686218.logProbe([
                                        411,
                                        24,
                                        411,
                                        39
                                    ], childrenBullets)[0]), fn = __recognizer703686218.logProbe([
                                        411,
                                        43,
                                        411,
                                        49
                                    ], obj.remove);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            (function () {
                                var obj = __recognizer703686218.logProbe([
                                        412,
                                        24,
                                        412,
                                        35
                                    ], bulletLayer), fn = __recognizer703686218.logProbe([
                                        412,
                                        36,
                                        412,
                                        40
                                    ], obj.draw);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            (function () {
                                var obj = __recognizer703686218.logProbe([
                                        413,
                                        24,
                                        413,
                                        28
                                    ], anim), fn = __recognizer703686218.logProbe([
                                        413,
                                        29,
                                        413,
                                        33
                                    ], obj.stop);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                        }
                    }
                    for (var i = 0; __recognizer703686218.logProbe([
                            417,
                            31,
                            417,
                            32
                        ], i) < __recognizer703686218.logProbe([
                            417,
                            51,
                            417,
                            57
                        ], __recognizer703686218.logProbe([
                            417,
                            35,
                            417,
                            50
                        ], childrenBullets).length); __recognizer703686218.logProbe([
                            417,
                            59,
                            417,
                            60
                        ], i)++) {
                        if (function () {
                                var obj = __recognizer703686218.logProbe([
                                        418,
                                        39,
                                        418,
                                        40
                                    ], __recognizer703686218.logProbe([
                                        418,
                                        23,
                                        418,
                                        38
                                    ], childrenBullets)[i]), fn = __recognizer703686218.logProbe([
                                        418,
                                        42,
                                        418,
                                        46
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() - 10 == function () {
                                var obj = __recognizer703686218.logProbe([
                                        418,
                                        57,
                                        418,
                                        60
                                    ], car), fn = __recognizer703686218.logProbe([
                                        418,
                                        61,
                                        418,
                                        65
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() && function () {
                                var obj = __recognizer703686218.logProbe([
                                        419,
                                        26,
                                        419,
                                        30
                                    ], Math), fn = __recognizer703686218.logProbe([
                                        419,
                                        31,
                                        419,
                                        34
                                    ], obj.abs);
                                return fn.apply(obj, arguments);
                            }.bind(this)(function () {
                                var obj = __recognizer703686218.logProbe([
                                        419,
                                        51,
                                        419,
                                        52
                                    ], __recognizer703686218.logProbe([
                                        419,
                                        35,
                                        419,
                                        50
                                    ], childrenBullets)[i]), fn = __recognizer703686218.logProbe([
                                        419,
                                        54,
                                        419,
                                        58
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)() - (400 + function () {
                                var obj = __recognizer703686218.logProbe([
                                        419,
                                        70,
                                        419,
                                        73
                                    ], car), fn = __recognizer703686218.logProbe([
                                        419,
                                        74,
                                        419,
                                        78
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)())) <= 10) {
                            if (__recognizer703686218.logProbe([
                                    420,
                                    27,
                                    420,
                                    63
                                ], __recognizer703686218.logProbe([
                                    420,
                                    27,
                                    420,
                                    37
                                ], checkLifes)(__recognizer703686218.logProbe([
                                    420,
                                    38,
                                    420,
                                    42
                                ], anim), __recognizer703686218.logProbe([
                                    420,
                                    44,
                                    420,
                                    59
                                ], childrenBullets), __recognizer703686218.logProbe([
                                    420,
                                    61,
                                    420,
                                    62
                                ], i)))) {
                                (function () {
                                    var obj = __recognizer703686218.logProbe([
                                            421,
                                            28,
                                            421,
                                            39
                                        ], bulletLayer), fn = __recognizer703686218.logProbe([
                                            421,
                                            40,
                                            421,
                                            44
                                        ], obj.draw);
                                    return fn.apply(obj, arguments);
                                }.bind(this)());
                                break;
                            }
                        }
                    }
                }, __recognizer703686218.logProbe([
                    426,
                    15,
                    426,
                    26
                ], bulletLayer));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        428,
                        12,
                        428,
                        16
                    ], anim), fn = __recognizer703686218.logProbe([
                        428,
                        17,
                        428,
                        22
                    ], obj.start);
                return fn.apply(obj, arguments);
            }.bind(this)());
        }
        function createBox(pPosX, pPosY, images) {
            __recognizer703686218.logEntry([
                431,
                17,
                431,
                26
            ], arguments);
            var box = new (__recognizer703686218.logProbe([
                    432,
                    34,
                    432,
                    38
                ], __recognizer703686218.logProbe([
                    432,
                    26,
                    432,
                    33
                ], Kinetic).Rect))({
                    x: pPosX,
                    y: pPosY,
                    fillPatternImage: __recognizer703686218.logProbe([
                        435,
                        41,
                        435,
                        44
                    ], __recognizer703686218.logProbe([
                        435,
                        34,
                        435,
                        40
                    ], images).box),
                    width: 64,
                    height: 64
                });
            (function () {
                var obj = __recognizer703686218.logProbe([
                        440,
                        12,
                        440,
                        20
                    ], boxLayer), fn = __recognizer703686218.logProbe([
                        440,
                        21,
                        440,
                        24
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer703686218.logProbe([
                440,
                25,
                440,
                28
            ], box)));
            (function () {
                var obj = __recognizer703686218.logProbe([
                        441,
                        12,
                        441,
                        20
                    ], boxLayer), fn = __recognizer703686218.logProbe([
                        441,
                        21,
                        441,
                        25
                    ], obj.draw);
                return fn.apply(obj, arguments);
            }.bind(this)());
        }
        function arrowKeys(images) {
            __recognizer703686218.logEntry([
                444,
                17,
                444,
                26
            ], arguments);
            (function () {
                var obj = __recognizer703686218.logProbe([
                        445,
                        12,
                        445,
                        23
                    ], __recognizer703686218.logProbe([
                        445,
                        12,
                        445,
                        13
                    ], $)(__recognizer703686218.logProbe([
                        445,
                        14,
                        445,
                        22
                    ], document))), fn = __recognizer703686218.logProbe([
                        445,
                        24,
                        445,
                        31
                    ], obj.keydown);
                return fn.apply(obj, arguments);
            }.bind(this)(function (e) {
                __recognizer703686218.logEntry([
                    445,
                    32,
                    445,
                    40
                ], arguments);
                if (__recognizer703686218.logProbe([
                        446,
                        22,
                        446,
                        29
                    ], __recognizer703686218.logProbe([
                        446,
                        20,
                        446,
                        21
                    ], e).keyCode) == 37) {
                    if (function () {
                            var obj = __recognizer703686218.logProbe([
                                    447,
                                    23,
                                    447,
                                    26
                                ], car), fn = __recognizer703686218.logProbe([
                                    447,
                                    27,
                                    447,
                                    31
                                ], obj.getX);
                            return fn.apply(obj, arguments);
                        }.bind(this)() - 100 >= 150) {
                        var xCalculation = function () {
                                var obj = __recognizer703686218.logProbe([
                                        448,
                                        43,
                                        448,
                                        50
                                    ], vehicle), fn = __recognizer703686218.logProbe([
                                        448,
                                        51,
                                        448,
                                        63
                                    ], obj.getPositionX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() - 100;
                        (function () {
                            var obj = __recognizer703686218.logProbe([
                                    449,
                                    24,
                                    449,
                                    27
                                ], car), fn = __recognizer703686218.logProbe([
                                    449,
                                    28,
                                    449,
                                    32
                                ], obj.setX);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer703686218.logProbe([
                            449,
                            33,
                            449,
                            45
                        ], xCalculation)));
                        (function () {
                            var obj = __recognizer703686218.logProbe([
                                    450,
                                    24,
                                    450,
                                    31
                                ], vehicle), fn = __recognizer703686218.logProbe([
                                    450,
                                    32,
                                    450,
                                    44
                                ], obj.setPositionX);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer703686218.logProbe([
                            450,
                            45,
                            450,
                            57
                        ], xCalculation)));
                    }
                    return false;
                } else if (__recognizer703686218.logProbe([
                        453,
                        28,
                        453,
                        35
                    ], __recognizer703686218.logProbe([
                        453,
                        26,
                        453,
                        27
                    ], e).keyCode) == 39) {
                    if (function () {
                            var obj = __recognizer703686218.logProbe([
                                    454,
                                    23,
                                    454,
                                    26
                                ], car), fn = __recognizer703686218.logProbe([
                                    454,
                                    27,
                                    454,
                                    31
                                ], obj.getX);
                            return fn.apply(obj, arguments);
                        }.bind(this)() + 100 <= 550) {
                        var xCalculation = function () {
                                var obj = __recognizer703686218.logProbe([
                                        455,
                                        43,
                                        455,
                                        50
                                    ], vehicle), fn = __recognizer703686218.logProbe([
                                        455,
                                        51,
                                        455,
                                        63
                                    ], obj.getPositionX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() + 100;
                        (function () {
                            var obj = __recognizer703686218.logProbe([
                                    456,
                                    24,
                                    456,
                                    27
                                ], car), fn = __recognizer703686218.logProbe([
                                    456,
                                    28,
                                    456,
                                    32
                                ], obj.setX);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer703686218.logProbe([
                            456,
                            33,
                            456,
                            45
                        ], xCalculation)));
                        (function () {
                            var obj = __recognizer703686218.logProbe([
                                    457,
                                    24,
                                    457,
                                    31
                                ], vehicle), fn = __recognizer703686218.logProbe([
                                    457,
                                    32,
                                    457,
                                    44
                                ], obj.setPositionX);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer703686218.logProbe([
                            457,
                            45,
                            457,
                            57
                        ], xCalculation)));
                    }
                    return false;
                } else if (__recognizer703686218.logProbe([
                        460,
                        28,
                        460,
                        35
                    ], __recognizer703686218.logProbe([
                        460,
                        26,
                        460,
                        27
                    ], e).keyCode) == 32) {
                    var y = function () {
                            var obj = __recognizer703686218.logProbe([
                                    461,
                                    28,
                                    461,
                                    35
                                ], vehicle), fn = __recognizer703686218.logProbe([
                                    461,
                                    36,
                                    461,
                                    48
                                ], obj.getPositionY);
                            return fn.apply(obj, arguments);
                        }.bind(this)();
                    if (!__recognizer703686218.logProbe([
                            463,
                            24,
                            463,
                            32
                        ], gameOver) && __recognizer703686218.logProbe([
                            463,
                            36,
                            463,
                            37
                        ], y) + 380 >= 90) {
                        var x = function () {
                                var obj = __recognizer703686218.logProbe([
                                        464,
                                        32,
                                        464,
                                        39
                                    ], vehicle), fn = __recognizer703686218.logProbe([
                                        464,
                                        40,
                                        464,
                                        52
                                    ], obj.getPositionX);
                                return fn.apply(obj, arguments);
                            }.bind(this)();
                        __recognizer703686218.logProbe([
                            465,
                            24,
                            465,
                            47
                        ], __recognizer703686218.logProbe([
                            465,
                            24,
                            465,
                            36
                        ], createWeapon)(__recognizer703686218.logProbe([
                            465,
                            37,
                            465,
                            46
                        ], weaponObj)));
                        var bulletSound = new (__recognizer703686218.logProbe([
                                466,
                                46,
                                466,
                                51
                            ], Audio))('audio/shot.wav');
                        (function () {
                            var obj = __recognizer703686218.logProbe([
                                    467,
                                    24,
                                    467,
                                    35
                                ], bulletSound), fn = __recognizer703686218.logProbe([
                                    467,
                                    36,
                                    467,
                                    40
                                ], obj.play);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                    }
                    return false;
                }
            }));
        }
        function getRandomInt(min, max) {
            __recognizer703686218.logEntry([
                474,
                17,
                474,
                29
            ], arguments);
            return function () {
                var obj = __recognizer703686218.logProbe([
                        475,
                        19,
                        475,
                        23
                    ], Math), fn = __recognizer703686218.logProbe([
                        475,
                        24,
                        475,
                        29
                    ], obj.floor);
                return fn.apply(obj, arguments);
            }.bind(this)(function () {
                var obj = __recognizer703686218.logProbe([
                        475,
                        30,
                        475,
                        34
                    ], Math), fn = __recognizer703686218.logProbe([
                        475,
                        35,
                        475,
                        41
                    ], obj.random);
                return fn.apply(obj, arguments);
            }.bind(this)() * (__recognizer703686218.logProbe([
                475,
                47,
                475,
                50
            ], max) - __recognizer703686218.logProbe([
                475,
                53,
                475,
                56
            ], min) + 1)) + __recognizer703686218.logProbe([
                475,
                65,
                475,
                68
            ], min);
        }
        function init() {
            __recognizer703686218.logEntry([
                478,
                17,
                478,
                21
            ], arguments);
            var sources = {
                    pit: 'images/pits.png',
                    car: 'images/car.png',
                    bullet: 'images/bullet.png',
                    box: 'images/box.png'
                };
            __recognizer703686218.logProbe([
                487,
                12,
                489,
                14
            ], __recognizer703686218.logProbe([
                487,
                12,
                487,
                22
            ], loadImages)(__recognizer703686218.logProbe([
                487,
                23,
                487,
                30
            ], sources), function (images) {
                __recognizer703686218.logEntry([
                    487,
                    32,
                    487,
                    40
                ], arguments);
                __recognizer703686218.logProbe([
                    488,
                    16,
                    488,
                    39
                ], __recognizer703686218.logProbe([
                    488,
                    16,
                    488,
                    31
                ], drawCanvasStage)(__recognizer703686218.logProbe([
                    488,
                    32,
                    488,
                    38
                ], images)));
            }));
        }
        return { init: init };
    }();
}(__recognizer703686218.logProbe([
    497,
    2,
    497,
    14
], Presentation), __recognizer703686218.logProbe([
    497,
    16,
    497,
    22
], jQuery)));