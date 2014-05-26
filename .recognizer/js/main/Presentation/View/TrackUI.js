/**
 * This code has been instrumented using Recognizer
 * https://github.com/equiet/recognizer
 */

var __recognizer629660474 = (function () {
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

var Presentation = __recognizer629660474.logProbe([
        19,
        26,
        19,
        38
    ], __recognizer629660474.logProbe([
        19,
        19,
        19,
        25
    ], window).Presentation) || {};
(function (pContext, $) {
    __recognizer629660474.logEntry([
        21,
        1,
        21,
        9
    ], arguments);
    pContext.getTrackUI = function () {
        __recognizer629660474.logEntry([
            23,
            26,
            23,
            34
        ], arguments);
        return __recognizer629660474.logProbe([
            24,
            15,
            24,
            22
        ], TrackUI);
    };
    TrackUI = function () {
        __recognizer629660474.logEntry([
            27,
            15,
            27,
            23
        ], arguments);
        var car, canvasStage, vehicleLayer, boxLayer, weaponLayer, enemyLayer, labelLayer, bulletLayer, lifeCounter = 2, gameOver = false;
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
        __recognizer629660474.logProbe([
            47,
            8,
            47,
            14
        ], __recognizer629660474.logProbe([
            47,
            8,
            47,
            12
        ], init)());
        function loadImages(sources, callback) {
            __recognizer629660474.logEntry([
                49,
                17,
                49,
                27
            ], arguments);
            var images = {};
            var loadedImages = 0;
            var numImages = 0;
            for (var src in __recognizer629660474.logProbe([
                    54,
                    27,
                    54,
                    34
                ], sources)) {
                __recognizer629660474.logProbe([
                    55,
                    16,
                    55,
                    25
                ], numImages)++;
            }
            for (var src in __recognizer629660474.logProbe([
                    57,
                    27,
                    57,
                    34
                ], sources)) {
                images[src] = new (__recognizer629660474.logProbe([
                    58,
                    34,
                    58,
                    39
                ], Image))();
                images[src].onload = function () {
                    __recognizer629660474.logEntry([
                        59,
                        37,
                        59,
                        45
                    ], arguments);
                    if (++__recognizer629660474.logProbe([
                            60,
                            25,
                            60,
                            37
                        ], loadedImages) >= __recognizer629660474.logProbe([
                            60,
                            41,
                            60,
                            50
                        ], numImages)) {
                        __recognizer629660474.logProbe([
                            61,
                            24,
                            61,
                            40
                        ], __recognizer629660474.logProbe([
                            61,
                            24,
                            61,
                            32
                        ], callback)(__recognizer629660474.logProbe([
                            61,
                            33,
                            61,
                            39
                        ], images)));
                    }
                };
                images[src].src = __recognizer629660474.logProbe([
                    64,
                    42,
                    64,
                    45
                ], __recognizer629660474.logProbe([
                    64,
                    34,
                    64,
                    41
                ], sources)[src]);
            }
        }
        function drawCanvasStage(images) {
            __recognizer629660474.logEntry([
                69,
                17,
                69,
                32
            ], arguments);
            canvasStage = new (__recognizer629660474.logProbe([
                71,
                38,
                71,
                43
            ], __recognizer629660474.logProbe([
                71,
                30,
                71,
                37
            ], Kinetic).Stage))({
                container: 'gameContainer',
                width: 800,
                height: 550
            });
            vehicleLayer = new (__recognizer629660474.logProbe([
                77,
                39,
                77,
                44
            ], __recognizer629660474.logProbe([
                77,
                31,
                77,
                38
            ], Kinetic).Layer))();
            boxLayer = new (__recognizer629660474.logProbe([
                78,
                35,
                78,
                40
            ], __recognizer629660474.logProbe([
                78,
                27,
                78,
                34
            ], Kinetic).Layer))();
            weaponLayer = new (__recognizer629660474.logProbe([
                79,
                38,
                79,
                43
            ], __recognizer629660474.logProbe([
                79,
                30,
                79,
                37
            ], Kinetic).Layer))();
            enemyLayer = new (__recognizer629660474.logProbe([
                80,
                37,
                80,
                42
            ], __recognizer629660474.logProbe([
                80,
                29,
                80,
                36
            ], Kinetic).Layer))();
            labelLayer = new (__recognizer629660474.logProbe([
                81,
                37,
                81,
                42
            ], __recognizer629660474.logProbe([
                81,
                29,
                81,
                36
            ], Kinetic).Layer))();
            bulletLayer = new (__recognizer629660474.logProbe([
                82,
                38,
                82,
                43
            ], __recognizer629660474.logProbe([
                82,
                30,
                82,
                37
            ], Kinetic).Layer))();
            var pit = new (__recognizer629660474.logProbe([
                    84,
                    34,
                    84,
                    38
                ], __recognizer629660474.logProbe([
                    84,
                    26,
                    84,
                    33
                ], Kinetic).Rect))({
                    x: 90,
                    fillPatternImage: __recognizer629660474.logProbe([
                        86,
                        41,
                        86,
                        44
                    ], __recognizer629660474.logProbe([
                        86,
                        34,
                        86,
                        40
                    ], images).pit),
                    width: 34,
                    height: 1200,
                    offset: {
                        x: 0,
                        y: 650
                    }
                });
            var pit2 = new (__recognizer629660474.logProbe([
                    92,
                    35,
                    92,
                    39
                ], __recognizer629660474.logProbe([
                    92,
                    27,
                    92,
                    34
                ], Kinetic).Rect))({
                    x: 650,
                    fillPatternImage: __recognizer629660474.logProbe([
                        94,
                        41,
                        94,
                        44
                    ], __recognizer629660474.logProbe([
                        94,
                        34,
                        94,
                        40
                    ], images).pit),
                    width: 34,
                    height: 1200,
                    offset: {
                        x: 0,
                        y: 650
                    }
                });
            car = new (__recognizer629660474.logProbe([
                100,
                30,
                100,
                34
            ], __recognizer629660474.logProbe([
                100,
                22,
                100,
                29
            ], Kinetic).Rect))({
                x: 150,
                y: 430,
                fillPatternImage: __recognizer629660474.logProbe([
                    103,
                    41,
                    103,
                    44
                ], __recognizer629660474.logProbe([
                    103,
                    34,
                    103,
                    40
                ], images).car),
                width: 54,
                height: 112,
                offset: {
                    x: 0,
                    y: -430
                },
                id: 'car'
            });
            var amplitude = 270;
            var speedCar = 210;
            var period = 5000;
            var anim = new (__recognizer629660474.logProbe([
                    114,
                    35,
                    114,
                    44
                ], __recognizer629660474.logProbe([
                    114,
                    27,
                    114,
                    34
                ], Kinetic).Animation))(function (frame) {
                    __recognizer629660474.logEntry([
                        114,
                        45,
                        114,
                        53
                    ], arguments);
                    (function () {
                        var obj = __recognizer629660474.logProbe([
                                115,
                                16,
                                115,
                                19
                            ], pit), fn = __recognizer629660474.logProbe([
                                115,
                                20,
                                115,
                                24
                            ], obj.setY);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer629660474.logProbe([
                        115,
                        25,
                        115,
                        34
                    ], amplitude) * __recognizer629660474.logProbe([
                        115,
                        42,
                        115,
                        46
                    ], __recognizer629660474.logProbe([
                        115,
                        36,
                        115,
                        41
                    ], frame).time) * 2 / __recognizer629660474.logProbe([
                        115,
                        53,
                        115,
                        59
                    ], period)));
                    (function () {
                        var obj = __recognizer629660474.logProbe([
                                116,
                                16,
                                116,
                                20
                            ], pit2), fn = __recognizer629660474.logProbe([
                                116,
                                21,
                                116,
                                25
                            ], obj.setY);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer629660474.logProbe([
                        116,
                        26,
                        116,
                        35
                    ], amplitude) * __recognizer629660474.logProbe([
                        116,
                        43,
                        116,
                        47
                    ], __recognizer629660474.logProbe([
                        116,
                        37,
                        116,
                        42
                    ], frame).time) * 2 / __recognizer629660474.logProbe([
                        116,
                        54,
                        116,
                        60
                    ], period)));
                    if (__recognizer629660474.logProbe([
                            117,
                            25,
                            117,
                            29
                        ], __recognizer629660474.logProbe([
                            117,
                            19,
                            117,
                            24
                        ], frame).time) >= 5000)
                        frame.time = 0;
                }, __recognizer629660474.logProbe([
                    119,
                    15,
                    119,
                    27
                ], vehicleLayer));
            var anim2 = new (__recognizer629660474.logProbe([
                    121,
                    36,
                    121,
                    45
                ], __recognizer629660474.logProbe([
                    121,
                    28,
                    121,
                    35
                ], Kinetic).Animation))(function (frame) {
                    __recognizer629660474.logEntry([
                        121,
                        46,
                        121,
                        54
                    ], arguments);
                    (function () {
                        var obj = __recognizer629660474.logProbe([
                                122,
                                16,
                                122,
                                19
                            ], car), fn = __recognizer629660474.logProbe([
                                122,
                                20,
                                122,
                                24
                            ], obj.setY);
                        return fn.apply(obj, arguments);
                    }.bind(this)(-__recognizer629660474.logProbe([
                        122,
                        26,
                        122,
                        34
                    ], speedCar) * __recognizer629660474.logProbe([
                        122,
                        43,
                        122,
                        47
                    ], __recognizer629660474.logProbe([
                        122,
                        37,
                        122,
                        42
                    ], frame).time) * 2 / __recognizer629660474.logProbe([
                        122,
                        54,
                        122,
                        60
                    ], period)));
                    if (__recognizer629660474.logProbe([
                            123,
                            25,
                            123,
                            29
                        ], __recognizer629660474.logProbe([
                            123,
                            19,
                            123,
                            24
                        ], frame).time) >= 5000) {
                        frame.time = 0;
                        (function () {
                            var obj = __recognizer629660474.logProbe([
                                    125,
                                    20,
                                    125,
                                    30
                                ], enemyLayer), fn = __recognizer629660474.logProbe([
                                    125,
                                    31,
                                    125,
                                    45
                                ], obj.removeChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                        (function () {
                            var obj = __recognizer629660474.logProbe([
                                    126,
                                    20,
                                    126,
                                    30
                                ], enemyLayer), fn = __recognizer629660474.logProbe([
                                    126,
                                    31,
                                    126,
                                    35
                                ], obj.draw);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                        __recognizer629660474.logProbe([
                            127,
                            20,
                            130,
                            27
                        ], __recognizer629660474.logProbe([
                            127,
                            20,
                            127,
                            30
                        ], setTimeout)(function () {
                            __recognizer629660474.logEntry([
                                127,
                                31,
                                127,
                                39
                            ], arguments);
                            __recognizer629660474.logProbe([
                                128,
                                24,
                                128,
                                46
                            ], __recognizer629660474.logProbe([
                                128,
                                24,
                                128,
                                35
                            ], createEnemy)(5, __recognizer629660474.logProbe([
                                128,
                                39,
                                128,
                                45
                            ], images)));
                            __recognizer629660474.logProbe([
                                129,
                                24,
                                129,
                                50
                            ], __recognizer629660474.logProbe([
                                129,
                                24,
                                129,
                                33
                            ], createBox)(350, 200, __recognizer629660474.logProbe([
                                129,
                                43,
                                129,
                                49
                            ], images)));
                        }, 300));
                    }
                    var boxChildren = function () {
                            var obj = __recognizer629660474.logProbe([
                                    133,
                                    34,
                                    133,
                                    42
                                ], boxLayer), fn = __recognizer629660474.logProbe([
                                    133,
                                    43,
                                    133,
                                    54
                                ], obj.getChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)();
                    for (var k = 0; __recognizer629660474.logProbe([
                            134,
                            31,
                            134,
                            32
                        ], k) < __recognizer629660474.logProbe([
                            134,
                            47,
                            134,
                            53
                        ], __recognizer629660474.logProbe([
                            134,
                            35,
                            134,
                            46
                        ], boxChildren).length); __recognizer629660474.logProbe([
                            134,
                            55,
                            134,
                            56
                        ], k)++) {
                        if (function () {
                                var obj = __recognizer629660474.logProbe([
                                        135,
                                        23,
                                        135,
                                        26
                                    ], car), fn = __recognizer629660474.logProbe([
                                        135,
                                        27,
                                        135,
                                        31
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() == function () {
                                var obj = __recognizer629660474.logProbe([
                                        135,
                                        49,
                                        135,
                                        50
                                    ], __recognizer629660474.logProbe([
                                        135,
                                        37,
                                        135,
                                        48
                                    ], boxChildren)[k]), fn = __recognizer629660474.logProbe([
                                        135,
                                        52,
                                        135,
                                        56
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() && 380 + function () {
                                var obj = __recognizer629660474.logProbe([
                                        136,
                                        32,
                                        136,
                                        35
                                    ], car), fn = __recognizer629660474.logProbe([
                                        136,
                                        36,
                                        136,
                                        40
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)() <= function () {
                                var obj = __recognizer629660474.logProbe([
                                        136,
                                        58,
                                        136,
                                        59
                                    ], __recognizer629660474.logProbe([
                                        136,
                                        46,
                                        136,
                                        57
                                    ], boxChildren)[k]), fn = __recognizer629660474.logProbe([
                                        136,
                                        61,
                                        136,
                                        65
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)()) {
                            (function () {
                                var obj = __recognizer629660474.logProbe([
                                        137,
                                        36,
                                        137,
                                        37
                                    ], __recognizer629660474.logProbe([
                                        137,
                                        24,
                                        137,
                                        35
                                    ], boxChildren)[k]), fn = __recognizer629660474.logProbe([
                                        137,
                                        39,
                                        137,
                                        45
                                    ], obj.remove);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            (function () {
                                var obj = __recognizer629660474.logProbe([
                                        138,
                                        24,
                                        138,
                                        32
                                    ], boxLayer), fn = __recognizer629660474.logProbe([
                                        138,
                                        33,
                                        138,
                                        37
                                    ], obj.draw);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            var boxSound = new (__recognizer629660474.logProbe([
                                    139,
                                    43,
                                    139,
                                    48
                                ], Audio))('audio/success.wav');
                            (function () {
                                var obj = __recognizer629660474.logProbe([
                                        140,
                                        24,
                                        140,
                                        32
                                    ], boxSound), fn = __recognizer629660474.logProbe([
                                        140,
                                        33,
                                        140,
                                        37
                                    ], obj.play);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            (function () {
                                var obj = __recognizer629660474.logProbe([
                                        142,
                                        24,
                                        142,
                                        35
                                    ], weaponLayer), fn = __recognizer629660474.logProbe([
                                        142,
                                        36,
                                        142,
                                        50
                                    ], obj.removeChildren);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            weaponObj = __recognizer629660474.logProbe([
                                143,
                                36,
                                143,
                                46
                            ], weaponObj2);
                            break;
                        }
                    }
                    var enemyChildren = function () {
                            var obj = __recognizer629660474.logProbe([
                                    148,
                                    36,
                                    148,
                                    46
                                ], enemyLayer), fn = __recognizer629660474.logProbe([
                                    148,
                                    47,
                                    148,
                                    58
                                ], obj.getChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)();
                    for (var i = 0; __recognizer629660474.logProbe([
                            150,
                            31,
                            150,
                            32
                        ], i) < __recognizer629660474.logProbe([
                            150,
                            49,
                            150,
                            55
                        ], __recognizer629660474.logProbe([
                            150,
                            35,
                            150,
                            48
                        ], enemyChildren).length); __recognizer629660474.logProbe([
                            150,
                            57,
                            150,
                            58
                        ], i)++) {
                        if (function () {
                                var obj = __recognizer629660474.logProbe([
                                        151,
                                        23,
                                        151,
                                        26
                                    ], car), fn = __recognizer629660474.logProbe([
                                        151,
                                        27,
                                        151,
                                        31
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() + 25 == function () {
                                var obj = __recognizer629660474.logProbe([
                                        151,
                                        56,
                                        151,
                                        57
                                    ], __recognizer629660474.logProbe([
                                        151,
                                        42,
                                        151,
                                        55
                                    ], enemyChildren)[i]), fn = __recognizer629660474.logProbe([
                                        151,
                                        59,
                                        151,
                                        63
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() && 400 + function () {
                                var obj = __recognizer629660474.logProbe([
                                        152,
                                        32,
                                        152,
                                        35
                                    ], car), fn = __recognizer629660474.logProbe([
                                        152,
                                        36,
                                        152,
                                        40
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)() <= function () {
                                var obj = __recognizer629660474.logProbe([
                                        152,
                                        60,
                                        152,
                                        61
                                    ], __recognizer629660474.logProbe([
                                        152,
                                        46,
                                        152,
                                        59
                                    ], enemyChildren)[i]), fn = __recognizer629660474.logProbe([
                                        152,
                                        63,
                                        152,
                                        67
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)()) {
                            if (__recognizer629660474.logProbe([
                                    153,
                                    27,
                                    153,
                                    62
                                ], __recognizer629660474.logProbe([
                                    153,
                                    27,
                                    153,
                                    37
                                ], checkLifes)(__recognizer629660474.logProbe([
                                    153,
                                    38,
                                    153,
                                    43
                                ], anim2), __recognizer629660474.logProbe([
                                    153,
                                    45,
                                    153,
                                    58
                                ], enemyChildren), __recognizer629660474.logProbe([
                                    153,
                                    60,
                                    153,
                                    61
                                ], i)))) {
                                (function () {
                                    var obj = __recognizer629660474.logProbe([
                                            154,
                                            28,
                                            154,
                                            38
                                        ], enemyLayer), fn = __recognizer629660474.logProbe([
                                            154,
                                            39,
                                            154,
                                            43
                                        ], obj.draw);
                                    return fn.apply(obj, arguments);
                                }.bind(this)());
                                break;
                            }
                        }
                    }
                }, __recognizer629660474.logProbe([
                    160,
                    15,
                    160,
                    27
                ], vehicleLayer));
            (function () {
                var obj = __recognizer629660474.logProbe([
                        162,
                        12,
                        162,
                        16
                    ], anim), fn = __recognizer629660474.logProbe([
                        162,
                        17,
                        162,
                        22
                    ], obj.start);
                return fn.apply(obj, arguments);
            }.bind(this)());
            (function () {
                var obj = __recognizer629660474.logProbe([
                        163,
                        12,
                        163,
                        17
                    ], anim2), fn = __recognizer629660474.logProbe([
                        163,
                        18,
                        163,
                        23
                    ], obj.start);
                return fn.apply(obj, arguments);
            }.bind(this)());
            (function () {
                var obj = __recognizer629660474.logProbe([
                        165,
                        12,
                        165,
                        24
                    ], vehicleLayer), fn = __recognizer629660474.logProbe([
                        165,
                        25,
                        165,
                        28
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer629660474.logProbe([
                165,
                29,
                165,
                32
            ], pit)));
            (function () {
                var obj = __recognizer629660474.logProbe([
                        166,
                        12,
                        166,
                        24
                    ], vehicleLayer), fn = __recognizer629660474.logProbe([
                        166,
                        25,
                        166,
                        28
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer629660474.logProbe([
                166,
                29,
                166,
                33
            ], pit2)));
            (function () {
                var obj = __recognizer629660474.logProbe([
                        167,
                        12,
                        167,
                        24
                    ], vehicleLayer), fn = __recognizer629660474.logProbe([
                        167,
                        25,
                        167,
                        28
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer629660474.logProbe([
                167,
                29,
                167,
                32
            ], car)));
            var lifesLabel = new (__recognizer629660474.logProbe([
                    169,
                    41,
                    169,
                    46
                ], __recognizer629660474.logProbe([
                    169,
                    33,
                    169,
                    40
                ], Kinetic).Label))({
                    x: 745,
                    y: 75,
                    opacity: 0.75
                });
            (function () {
                var obj = __recognizer629660474.logProbe([
                        175,
                        12,
                        175,
                        22
                    ], lifesLabel), fn = __recognizer629660474.logProbe([
                        175,
                        23,
                        175,
                        26
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(new (__recognizer629660474.logProbe([
                175,
                39,
                175,
                42
            ], __recognizer629660474.logProbe([
                175,
                31,
                175,
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
                var obj = __recognizer629660474.logProbe([
                        187,
                        12,
                        187,
                        22
                    ], lifesLabel), fn = __recognizer629660474.logProbe([
                        187,
                        23,
                        187,
                        26
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(new (__recognizer629660474.logProbe([
                187,
                39,
                187,
                43
            ], __recognizer629660474.logProbe([
                187,
                31,
                187,
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
                var obj = __recognizer629660474.logProbe([
                        196,
                        12,
                        196,
                        22
                    ], labelLayer), fn = __recognizer629660474.logProbe([
                        196,
                        23,
                        196,
                        26
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer629660474.logProbe([
                196,
                27,
                196,
                37
            ], lifesLabel)));
            (function () {
                var obj = __recognizer629660474.logProbe([
                        198,
                        12,
                        198,
                        23
                    ], canvasStage), fn = __recognizer629660474.logProbe([
                        198,
                        24,
                        198,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer629660474.logProbe([
                198,
                28,
                198,
                40
            ], vehicleLayer)));
            (function () {
                var obj = __recognizer629660474.logProbe([
                        199,
                        12,
                        199,
                        23
                    ], canvasStage), fn = __recognizer629660474.logProbe([
                        199,
                        24,
                        199,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer629660474.logProbe([
                199,
                28,
                199,
                39
            ], weaponLayer)));
            (function () {
                var obj = __recognizer629660474.logProbe([
                        200,
                        12,
                        200,
                        23
                    ], canvasStage), fn = __recognizer629660474.logProbe([
                        200,
                        24,
                        200,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer629660474.logProbe([
                200,
                28,
                200,
                36
            ], boxLayer)));
            (function () {
                var obj = __recognizer629660474.logProbe([
                        201,
                        12,
                        201,
                        23
                    ], canvasStage), fn = __recognizer629660474.logProbe([
                        201,
                        24,
                        201,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer629660474.logProbe([
                201,
                28,
                201,
                38
            ], enemyLayer)));
            (function () {
                var obj = __recognizer629660474.logProbe([
                        202,
                        12,
                        202,
                        23
                    ], canvasStage), fn = __recognizer629660474.logProbe([
                        202,
                        24,
                        202,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer629660474.logProbe([
                202,
                28,
                202,
                38
            ], labelLayer)));
            (function () {
                var obj = __recognizer629660474.logProbe([
                        203,
                        12,
                        203,
                        23
                    ], canvasStage), fn = __recognizer629660474.logProbe([
                        203,
                        24,
                        203,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer629660474.logProbe([
                203,
                28,
                203,
                39
            ], bulletLayer)));
            __recognizer629660474.logProbe([
                205,
                12,
                205,
                34
            ], __recognizer629660474.logProbe([
                205,
                12,
                205,
                23
            ], createEnemy)(5, __recognizer629660474.logProbe([
                205,
                27,
                205,
                33
            ], images)));
            __recognizer629660474.logProbe([
                206,
                12,
                206,
                37
            ], __recognizer629660474.logProbe([
                206,
                12,
                206,
                21
            ], createBox)(150, 100, __recognizer629660474.logProbe([
                206,
                30,
                206,
                36
            ], images)));
            __recognizer629660474.logProbe([
                207,
                12,
                207,
                29
            ], __recognizer629660474.logProbe([
                207,
                12,
                207,
                21
            ], arrowKeys)(__recognizer629660474.logProbe([
                207,
                22,
                207,
                28
            ], images)));
        }
        function checkLifes(pAnimation, pLayer, i) {
            __recognizer629660474.logEntry([
                210,
                17,
                210,
                27
            ], arguments);
            (function () {
                var obj = __recognizer629660474.logProbe([
                        211,
                        12,
                        211,
                        19
                    ], console), fn = __recognizer629660474.logProbe([
                        211,
                        20,
                        211,
                        23
                    ], obj.log);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer629660474.logProbe([
                211,
                24,
                211,
                35
            ], lifeCounter)));
            if (__recognizer629660474.logProbe([
                    212,
                    15,
                    212,
                    26
                ], lifeCounter) == 0) {
                (function () {
                    var obj = __recognizer629660474.logProbe([
                            213,
                            16,
                            213,
                            19
                        ], car), fn = __recognizer629660474.logProbe([
                            213,
                            20,
                            213,
                            26
                        ], obj.remove);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                (function () {
                    var obj = __recognizer629660474.logProbe([
                            214,
                            16,
                            214,
                            28
                        ], vehicleLayer), fn = __recognizer629660474.logProbe([
                            214,
                            29,
                            214,
                            33
                        ], obj.draw);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                (function () {
                    var obj = __recognizer629660474.logProbe([
                            215,
                            16,
                            215,
                            26
                        ], pAnimation), fn = __recognizer629660474.logProbe([
                            215,
                            27,
                            215,
                            31
                        ], obj.stop);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                __recognizer629660474.logProbe([
                    216,
                    16,
                    216,
                    29
                ], __recognizer629660474.logProbe([
                    216,
                    16,
                    216,
                    27
                ], setGameOver)());
            } else {
                __recognizer629660474.logProbe([
                    218,
                    16,
                    218,
                    27
                ], lifeCounter)--;
                (function () {
                    var obj = __recognizer629660474.logProbe([
                            219,
                            23,
                            219,
                            24
                        ], __recognizer629660474.logProbe([
                            219,
                            16,
                            219,
                            22
                        ], pLayer)[i]), fn = __recognizer629660474.logProbe([
                            219,
                            26,
                            219,
                            32
                        ], obj.remove);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                var labelChildren = function () {
                        var obj = __recognizer629660474.logProbe([
                                220,
                                36,
                                220,
                                46
                            ], labelLayer), fn = __recognizer629660474.logProbe([
                                220,
                                47,
                                220,
                                58
                            ], obj.getChildren);
                        return fn.apply(obj, arguments);
                    }.bind(this)();
                for (var i = 0; __recognizer629660474.logProbe([
                        221,
                        31,
                        221,
                        32
                    ], i) < __recognizer629660474.logProbe([
                        221,
                        49,
                        221,
                        55
                    ], __recognizer629660474.logProbe([
                        221,
                        35,
                        221,
                        48
                    ], labelChildren).length); __recognizer629660474.logProbe([
                        221,
                        57,
                        221,
                        58
                    ], i)++) {
                    var labelChildrenDepth = function () {
                            var obj = __recognizer629660474.logProbe([
                                    222,
                                    59,
                                    222,
                                    60
                                ], __recognizer629660474.logProbe([
                                    222,
                                    45,
                                    222,
                                    58
                                ], labelChildren)[i]), fn = __recognizer629660474.logProbe([
                                    222,
                                    62,
                                    222,
                                    73
                                ], obj.getChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)();
                    for (var j = 0; __recognizer629660474.logProbe([
                            223,
                            35,
                            223,
                            36
                        ], j) < __recognizer629660474.logProbe([
                            223,
                            57,
                            223,
                            63
                        ], __recognizer629660474.logProbe([
                            223,
                            38,
                            223,
                            56
                        ], labelChildrenDepth).length); __recognizer629660474.logProbe([
                            223,
                            65,
                            223,
                            66
                        ], j)++) {
                        if (function () {
                                var obj = __recognizer629660474.logProbe([
                                        224,
                                        46,
                                        224,
                                        47
                                    ], __recognizer629660474.logProbe([
                                        224,
                                        27,
                                        224,
                                        45
                                    ], labelChildrenDepth)[j]), fn = __recognizer629660474.logProbe([
                                        224,
                                        49,
                                        224,
                                        53
                                    ], obj.name);
                                return fn.apply(obj, arguments);
                            }.bind(this)() == 'lifes') {
                            (function () {
                                var obj = __recognizer629660474.logProbe([
                                        225,
                                        47,
                                        225,
                                        48
                                    ], __recognizer629660474.logProbe([
                                        225,
                                        28,
                                        225,
                                        46
                                    ], labelChildrenDepth)[j]), fn = __recognizer629660474.logProbe([
                                        225,
                                        50,
                                        225,
                                        57
                                    ], obj.setText);
                                return fn.apply(obj, arguments);
                            }.bind(this)('Lifes:' + __recognizer629660474.logProbe([
                                225,
                                69,
                                225,
                                80
                            ], lifeCounter)));
                            (function () {
                                var obj = __recognizer629660474.logProbe([
                                        226,
                                        28,
                                        226,
                                        38
                                    ], labelLayer), fn = __recognizer629660474.logProbe([
                                        226,
                                        39,
                                        226,
                                        43
                                    ], obj.draw);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            break;
                        }
                    }
                }
                var smashSound = new (__recognizer629660474.logProbe([
                        231,
                        37,
                        231,
                        42
                    ], Audio))('audio/smash2.wav');
                (function () {
                    var obj = __recognizer629660474.logProbe([
                            232,
                            16,
                            232,
                            26
                        ], smashSound), fn = __recognizer629660474.logProbe([
                            232,
                            27,
                            232,
                            31
                        ], obj.play);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                return true;
            }
            return false;
        }
        function setGameOver() {
            __recognizer629660474.logEntry([
                238,
                17,
                238,
                28
            ], arguments);
            var gameOverLabel = new (__recognizer629660474.logProbe([
                    239,
                    44,
                    239,
                    49
                ], __recognizer629660474.logProbe([
                    239,
                    36,
                    239,
                    43
                ], Kinetic).Label))({
                    x: function () {
                        var obj = __recognizer629660474.logProbe([
                                240,
                                19,
                                240,
                                30
                            ], canvasStage), fn = __recognizer629660474.logProbe([
                                240,
                                31,
                                240,
                                39
                            ], obj.getWidth);
                        return fn.apply(obj, arguments);
                    }.bind(this)() / 2,
                    y: function () {
                        var obj = __recognizer629660474.logProbe([
                                241,
                                19,
                                241,
                                30
                            ], canvasStage), fn = __recognizer629660474.logProbe([
                                241,
                                31,
                                241,
                                40
                            ], obj.getHeight);
                        return fn.apply(obj, arguments);
                    }.bind(this)() / 2,
                    opacity: 0.75
                });
            (function () {
                var obj = __recognizer629660474.logProbe([
                        245,
                        12,
                        245,
                        25
                    ], gameOverLabel), fn = __recognizer629660474.logProbe([
                        245,
                        26,
                        245,
                        29
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(new (__recognizer629660474.logProbe([
                245,
                42,
                245,
                45
            ], __recognizer629660474.logProbe([
                245,
                34,
                245,
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
                var obj = __recognizer629660474.logProbe([
                        257,
                        12,
                        257,
                        25
                    ], gameOverLabel), fn = __recognizer629660474.logProbe([
                        257,
                        26,
                        257,
                        29
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(new (__recognizer629660474.logProbe([
                257,
                42,
                257,
                46
            ], __recognizer629660474.logProbe([
                257,
                34,
                257,
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
                var obj = __recognizer629660474.logProbe([
                        266,
                        12,
                        266,
                        22
                    ], labelLayer), fn = __recognizer629660474.logProbe([
                        266,
                        23,
                        266,
                        26
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer629660474.logProbe([
                266,
                27,
                266,
                40
            ], gameOverLabel)));
            (function () {
                var obj = __recognizer629660474.logProbe([
                        267,
                        12,
                        267,
                        22
                    ], labelLayer), fn = __recognizer629660474.logProbe([
                        267,
                        23,
                        267,
                        27
                    ], obj.draw);
                return fn.apply(obj, arguments);
            }.bind(this)());
            gameOver = true;
        }
        function createEnemy(pNumberOfEnemies, pImages) {
            __recognizer629660474.logEntry([
                272,
                17,
                272,
                28
            ], arguments);
            var y = 50;
            var x = 175;
            for (var i = 0; __recognizer629660474.logProbe([
                    276,
                    27,
                    276,
                    28
                ], i) < __recognizer629660474.logProbe([
                    276,
                    31,
                    276,
                    47
                ], pNumberOfEnemies); __recognizer629660474.logProbe([
                    276,
                    49,
                    276,
                    50
                ], i)++) {
                var weapon = new (__recognizer629660474.logProbe([
                        277,
                        41,
                        277,
                        55
                    ], __recognizer629660474.logProbe([
                        277,
                        33,
                        277,
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
                __recognizer629660474.logProbe([
                    286,
                    16,
                    286,
                    43
                ], __recognizer629660474.logProbe([
                    286,
                    16,
                    286,
                    28
                ], createBullet)(__recognizer629660474.logProbe([
                    286,
                    29,
                    286,
                    30
                ], x), __recognizer629660474.logProbe([
                    286,
                    32,
                    286,
                    33
                ], y), __recognizer629660474.logProbe([
                    286,
                    35,
                    286,
                    42
                ], pImages)));
                x += 100;
                y += 20;
                (function () {
                    var obj = __recognizer629660474.logProbe([
                            289,
                            16,
                            289,
                            26
                        ], enemyLayer), fn = __recognizer629660474.logProbe([
                            289,
                            27,
                            289,
                            30
                        ], obj.add);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer629660474.logProbe([
                    289,
                    31,
                    289,
                    37
                ], weapon)));
                (function () {
                    var obj = __recognizer629660474.logProbe([
                            290,
                            16,
                            290,
                            26
                        ], enemyLayer), fn = __recognizer629660474.logProbe([
                            290,
                            27,
                            290,
                            31
                        ], obj.draw);
                    return fn.apply(obj, arguments);
                }.bind(this)());
            }
        }
        function createWeapon(pWeapon) {
            __recognizer629660474.logEntry([
                295,
                17,
                295,
                29
            ], arguments);
            var period = 2000;
            var tmpX = 25;
            var group = new (__recognizer629660474.logProbe([
                    298,
                    36,
                    298,
                    41
                ], __recognizer629660474.logProbe([
                    298,
                    28,
                    298,
                    35
                ], Kinetic).Group))();
            var posY = 380 + function () {
                    var obj = __recognizer629660474.logProbe([
                            299,
                            29,
                            299,
                            32
                        ], car), fn = __recognizer629660474.logProbe([
                            299,
                            33,
                            299,
                            37
                        ], obj.getY);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            for (var i = 0; __recognizer629660474.logProbe([
                    301,
                    27,
                    301,
                    28
                ], i) < __recognizer629660474.logProbe([
                    301,
                    41,
                    301,
                    51
                ], __recognizer629660474.logProbe([
                    301,
                    31,
                    301,
                    40
                ], weaponObj).laneNumber); __recognizer629660474.logProbe([
                    301,
                    53,
                    301,
                    54
                ], i)++) {
                (function () {
                    __recognizer629660474.logEntry([
                        302,
                        17,
                        302,
                        25
                    ], arguments);
                    if (__recognizer629660474.logProbe([
                            303,
                            23,
                            303,
                            24
                        ], i) == 2)
                        tmpX -= __recognizer629660474.logProbe([
                            304,
                            32,
                            304,
                            36
                        ], tmpX) + 75;
                    var x = function () {
                            var obj = __recognizer629660474.logProbe([
                                    305,
                                    28,
                                    305,
                                    31
                                ], car), fn = __recognizer629660474.logProbe([
                                    305,
                                    32,
                                    305,
                                    36
                                ], obj.getX);
                            return fn.apply(obj, arguments);
                        }.bind(this)() + __recognizer629660474.logProbe([
                            305,
                            41,
                            305,
                            45
                        ], tmpX);
                    if (__recognizer629660474.logProbe([
                            306,
                            23,
                            306,
                            24
                        ], x) < 675 && __recognizer629660474.logProbe([
                            306,
                            34,
                            306,
                            35
                        ], x) > 75) {
                        var weapon = new (__recognizer629660474.logProbe([
                                307,
                                49,
                                307,
                                63
                            ], __recognizer629660474.logProbe([
                                307,
                                41,
                                307,
                                48
                            ], Kinetic).RegularPolygon))({
                                x: x,
                                y: posY,
                                fill: __recognizer629660474.logProbe([
                                    310,
                                    44,
                                    310,
                                    49
                                ], __recognizer629660474.logProbe([
                                    310,
                                    34,
                                    310,
                                    43
                                ], weaponObj).color),
                                sides: __recognizer629660474.logProbe([
                                    311,
                                    45,
                                    311,
                                    56
                                ], __recognizer629660474.logProbe([
                                    311,
                                    35,
                                    311,
                                    44
                                ], weaponObj).shapeWeapon),
                                radius: 20,
                                stroke: '#000',
                                strokeWidth: __recognizer629660474.logProbe([
                                    314,
                                    51,
                                    314,
                                    57
                                ], __recognizer629660474.logProbe([
                                    314,
                                    41,
                                    314,
                                    50
                                ], weaponObj).stroke)
                            });
                        (function () {
                            var obj = __recognizer629660474.logProbe([
                                    316,
                                    24,
                                    316,
                                    29
                                ], group), fn = __recognizer629660474.logProbe([
                                    316,
                                    30,
                                    316,
                                    33
                                ], obj.add);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer629660474.logProbe([
                            316,
                            34,
                            316,
                            40
                        ], weapon)));
                    }
                    tmpX += 100;
                }());
            }
            (function () {
                var obj = __recognizer629660474.logProbe([
                        321,
                        12,
                        321,
                        23
                    ], weaponLayer), fn = __recognizer629660474.logProbe([
                        321,
                        24,
                        321,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer629660474.logProbe([
                321,
                28,
                321,
                33
            ], group)));
            (function () {
                var obj = __recognizer629660474.logProbe([
                        322,
                        12,
                        322,
                        23
                    ], weaponLayer), fn = __recognizer629660474.logProbe([
                        322,
                        24,
                        322,
                        28
                    ], obj.draw);
                return fn.apply(obj, arguments);
            }.bind(this)());
            var enemyChildren = function () {
                    var obj = __recognizer629660474.logProbe([
                            325,
                            32,
                            325,
                            42
                        ], enemyLayer), fn = __recognizer629660474.logProbe([
                            325,
                            43,
                            325,
                            54
                        ], obj.getChildren);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            var childrenGroup = function () {
                    var obj = __recognizer629660474.logProbe([
                            326,
                            32,
                            326,
                            43
                        ], weaponLayer), fn = __recognizer629660474.logProbe([
                            326,
                            44,
                            326,
                            55
                        ], obj.getChildren);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            var weaponChildren;
            var anim = new (__recognizer629660474.logProbe([
                    329,
                    35,
                    329,
                    44
                ], __recognizer629660474.logProbe([
                    329,
                    27,
                    329,
                    34
                ], Kinetic).Animation))(function (frame) {
                    __recognizer629660474.logEntry([
                        329,
                        45,
                        329,
                        53
                    ], arguments);
                    if (__recognizer629660474.logProbe([
                            330,
                            19,
                            330,
                            23
                        ], posY) > 0)
                        (function () {
                            var obj = __recognizer629660474.logProbe([
                                    331,
                                    20,
                                    331,
                                    25
                                ], group), fn = __recognizer629660474.logProbe([
                                    331,
                                    26,
                                    331,
                                    30
                                ], obj.setY);
                            return fn.apply(obj, arguments);
                        }.bind(this)(-__recognizer629660474.logProbe([
                            331,
                            33,
                            331,
                            37
                        ], posY) * __recognizer629660474.logProbe([
                            331,
                            46,
                            331,
                            50
                        ], __recognizer629660474.logProbe([
                            331,
                            40,
                            331,
                            45
                        ], frame).time) * 4 / __recognizer629660474.logProbe([
                            331,
                            57,
                            331,
                            63
                        ], period)));
                    else
                        (function () {
                            var obj = __recognizer629660474.logProbe([
                                    333,
                                    20,
                                    333,
                                    25
                                ], group), fn = __recognizer629660474.logProbe([
                                    333,
                                    26,
                                    333,
                                    30
                                ], obj.setY);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer629660474.logProbe([
                            333,
                            32,
                            333,
                            36
                        ], posY) * __recognizer629660474.logProbe([
                            333,
                            45,
                            333,
                            49
                        ], __recognizer629660474.logProbe([
                            333,
                            39,
                            333,
                            44
                        ], frame).time) * 4 / __recognizer629660474.logProbe([
                            333,
                            56,
                            333,
                            62
                        ], period)));
                    if (__recognizer629660474.logProbe([
                            334,
                            25,
                            334,
                            29
                        ], __recognizer629660474.logProbe([
                            334,
                            19,
                            334,
                            24
                        ], frame).time) >= 2000) {
                        var children = function () {
                                var obj = __recognizer629660474.logProbe([
                                        335,
                                        35,
                                        335,
                                        46
                                    ], weaponLayer), fn = __recognizer629660474.logProbe([
                                        335,
                                        47,
                                        335,
                                        58
                                    ], obj.getChildren);
                                return fn.apply(obj, arguments);
                            }.bind(this)();
                        if (__recognizer629660474.logProbe([
                                336,
                                32,
                                336,
                                38
                            ], __recognizer629660474.logProbe([
                                336,
                                23,
                                336,
                                31
                            ], children).length) > 0) {
                            (function () {
                                var obj = __recognizer629660474.logProbe([
                                        337,
                                        33,
                                        337,
                                        34
                                    ], __recognizer629660474.logProbe([
                                        337,
                                        24,
                                        337,
                                        32
                                    ], children)[0]), fn = __recognizer629660474.logProbe([
                                        337,
                                        36,
                                        337,
                                        42
                                    ], obj.remove);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            (function () {
                                var obj = __recognizer629660474.logProbe([
                                        338,
                                        24,
                                        338,
                                        35
                                    ], weaponLayer), fn = __recognizer629660474.logProbe([
                                        338,
                                        36,
                                        338,
                                        40
                                    ], obj.draw);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                        }
                        (function () {
                            var obj = __recognizer629660474.logProbe([
                                    340,
                                    20,
                                    340,
                                    24
                                ], anim), fn = __recognizer629660474.logProbe([
                                    340,
                                    25,
                                    340,
                                    29
                                ], obj.stop);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                    }
                    for (var j = 0; __recognizer629660474.logProbe([
                            343,
                            31,
                            343,
                            32
                        ], j) < __recognizer629660474.logProbe([
                            343,
                            49,
                            343,
                            55
                        ], __recognizer629660474.logProbe([
                            343,
                            35,
                            343,
                            48
                        ], enemyChildren).length); __recognizer629660474.logProbe([
                            343,
                            57,
                            343,
                            58
                        ], j)++) {
                        for (var k = 0; __recognizer629660474.logProbe([
                                344,
                                35,
                                344,
                                36
                            ], k) < __recognizer629660474.logProbe([
                                344,
                                53,
                                344,
                                59
                            ], __recognizer629660474.logProbe([
                                344,
                                39,
                                344,
                                52
                            ], childrenGroup).length); __recognizer629660474.logProbe([
                                344,
                                61,
                                344,
                                62
                            ], k)++) {
                            weaponChildren = function () {
                                var obj = __recognizer629660474.logProbe([
                                        345,
                                        69,
                                        345,
                                        70
                                    ], function () {
                                        var obj = __recognizer629660474.logProbe([
                                                345,
                                                41,
                                                345,
                                                54
                                            ], childrenGroup), fn = __recognizer629660474.logProbe([
                                                345,
                                                55,
                                                345,
                                                66
                                            ], obj.getChildren);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)()[k]), fn = __recognizer629660474.logProbe([
                                        345,
                                        72,
                                        345,
                                        83
                                    ], obj.getChildren);
                                return fn.apply(obj, arguments);
                            }.bind(this)();
                            for (var i = 0; __recognizer629660474.logProbe([
                                    346,
                                    39,
                                    346,
                                    40
                                ], i) < __recognizer629660474.logProbe([
                                    346,
                                    58,
                                    346,
                                    64
                                ], __recognizer629660474.logProbe([
                                    346,
                                    43,
                                    346,
                                    57
                                ], weaponChildren).length); __recognizer629660474.logProbe([
                                    346,
                                    66,
                                    346,
                                    67
                                ], i)++) {
                                if (__recognizer629660474.logProbe([
                                        347,
                                        45,
                                        347,
                                        46
                                    ], __recognizer629660474.logProbe([
                                        347,
                                        31,
                                        347,
                                        44
                                    ], enemyChildren)[j]) == __recognizer629660474.logProbe([
                                        347,
                                        51,
                                        347,
                                        60
                                    ], undefined))
                                    break;
                                var enemyX = function () {
                                        var obj = __recognizer629660474.logProbe([
                                                349,
                                                55,
                                                349,
                                                56
                                            ], __recognizer629660474.logProbe([
                                                349,
                                                41,
                                                349,
                                                54
                                            ], enemyChildren)[j]), fn = __recognizer629660474.logProbe([
                                                349,
                                                58,
                                                349,
                                                62
                                            ], obj.getX);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)();
                                var weaponX = function () {
                                        var obj = __recognizer629660474.logProbe([
                                                350,
                                                57,
                                                350,
                                                58
                                            ], __recognizer629660474.logProbe([
                                                350,
                                                42,
                                                350,
                                                56
                                            ], weaponChildren)[i]), fn = __recognizer629660474.logProbe([
                                                350,
                                                60,
                                                350,
                                                64
                                            ], obj.getX);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)();
                                if (__recognizer629660474.logProbe([
                                        351,
                                        31,
                                        351,
                                        35
                                    ], posY) + function () {
                                        var obj = __recognizer629660474.logProbe([
                                                351,
                                                52,
                                                351,
                                                53
                                            ], __recognizer629660474.logProbe([
                                                351,
                                                38,
                                                351,
                                                51
                                            ], childrenGroup)[k]), fn = __recognizer629660474.logProbe([
                                                351,
                                                55,
                                                351,
                                                59
                                            ], obj.getY);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)() <= function () {
                                        var obj = __recognizer629660474.logProbe([
                                                351,
                                                79,
                                                351,
                                                80
                                            ], __recognizer629660474.logProbe([
                                                351,
                                                65,
                                                351,
                                                78
                                            ], enemyChildren)[j]), fn = __recognizer629660474.logProbe([
                                                351,
                                                82,
                                                351,
                                                86
                                            ], obj.getY);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)() && __recognizer629660474.logProbe([
                                        352,
                                        34,
                                        352,
                                        41
                                    ], weaponX) == __recognizer629660474.logProbe([
                                        352,
                                        45,
                                        352,
                                        51
                                    ], enemyX)) {
                                    (function () {
                                        var obj = __recognizer629660474.logProbe([
                                                353,
                                                46,
                                                353,
                                                47
                                            ], __recognizer629660474.logProbe([
                                                353,
                                                32,
                                                353,
                                                45
                                            ], enemyChildren)[j]), fn = __recognizer629660474.logProbe([
                                                353,
                                                49,
                                                353,
                                                55
                                            ], obj.remove);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    (function () {
                                        var obj = __recognizer629660474.logProbe([
                                                354,
                                                32,
                                                354,
                                                42
                                            ], enemyLayer), fn = __recognizer629660474.logProbe([
                                                354,
                                                43,
                                                354,
                                                47
                                            ], obj.draw);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    if (__recognizer629660474.logProbe([
                                            355,
                                            49,
                                            355,
                                            55
                                        ], __recognizer629660474.logProbe([
                                            355,
                                            35,
                                            355,
                                            48
                                        ], enemyChildren).length) == 0) {
                                        (function () {
                                            var obj = __recognizer629660474.logProbe([
                                                    356,
                                                    36,
                                                    356,
                                                    47
                                                ], weaponLayer), fn = __recognizer629660474.logProbe([
                                                    356,
                                                    48,
                                                    356,
                                                    62
                                                ], obj.removeChildren);
                                            return fn.apply(obj, arguments);
                                        }.bind(this)());
                                        (function () {
                                            var obj = __recognizer629660474.logProbe([
                                                    357,
                                                    36,
                                                    357,
                                                    50
                                                ], weaponChildren), fn = __recognizer629660474.logProbe([
                                                    357,
                                                    51,
                                                    357,
                                                    55
                                                ], obj.draw);
                                            return fn.apply(obj, arguments);
                                        }.bind(this)());
                                    }
                                    var bulletSound = new (__recognizer629660474.logProbe([
                                            359,
                                            54,
                                            359,
                                            59
                                        ], Audio))('audio/smash.wav');
                                    (function () {
                                        var obj = __recognizer629660474.logProbe([
                                                360,
                                                32,
                                                360,
                                                43
                                            ], bulletSound), fn = __recognizer629660474.logProbe([
                                                360,
                                                44,
                                                360,
                                                48
                                            ], obj.play);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    break;
                                }
                            }
                        }
                    }
                }, __recognizer629660474.logProbe([
                    367,
                    15,
                    367,
                    26
                ], weaponLayer));
            (function () {
                var obj = __recognizer629660474.logProbe([
                        369,
                        12,
                        369,
                        16
                    ], anim), fn = __recognizer629660474.logProbe([
                        369,
                        17,
                        369,
                        22
                    ], obj.start);
                return fn.apply(obj, arguments);
            }.bind(this)());
        }
        function createBullet(pPosX, pPosY, pImages) {
            __recognizer629660474.logEntry([
                372,
                17,
                372,
                29
            ], arguments);
            var period = 2000;
            var bullet = new (__recognizer629660474.logProbe([
                    375,
                    37,
                    375,
                    41
                ], __recognizer629660474.logProbe([
                    375,
                    29,
                    375,
                    36
                ], Kinetic).Rect))({
                    x: __recognizer629660474.logProbe([
                        376,
                        19,
                        376,
                        24
                    ], pPosX) - 15,
                    y: pPosY,
                    fillPatternImage: __recognizer629660474.logProbe([
                        378,
                        42,
                        378,
                        48
                    ], __recognizer629660474.logProbe([
                        378,
                        34,
                        378,
                        41
                    ], pImages).bullet),
                    width: 32,
                    height: 32
                });
            (function () {
                var obj = __recognizer629660474.logProbe([
                        383,
                        12,
                        383,
                        23
                    ], bulletLayer), fn = __recognizer629660474.logProbe([
                        383,
                        24,
                        383,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer629660474.logProbe([
                383,
                28,
                383,
                34
            ], bullet)));
            (function () {
                var obj = __recognizer629660474.logProbe([
                        384,
                        12,
                        384,
                        23
                    ], bulletLayer), fn = __recognizer629660474.logProbe([
                        384,
                        24,
                        384,
                        28
                    ], obj.draw);
                return fn.apply(obj, arguments);
            }.bind(this)());
            var childrenBullets = function () {
                    var obj = __recognizer629660474.logProbe([
                            386,
                            34,
                            386,
                            45
                        ], bulletLayer), fn = __recognizer629660474.logProbe([
                            386,
                            46,
                            386,
                            57
                        ], obj.getChildren);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            var childrenGroup = function () {
                    var obj = __recognizer629660474.logProbe([
                            387,
                            32,
                            387,
                            43
                        ], weaponLayer), fn = __recognizer629660474.logProbe([
                            387,
                            44,
                            387,
                            55
                        ], obj.getChildren);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            var weaponChildren;
            var anim = new (__recognizer629660474.logProbe([
                    390,
                    35,
                    390,
                    44
                ], __recognizer629660474.logProbe([
                    390,
                    27,
                    390,
                    34
                ], Kinetic).Animation))(function (frame) {
                    __recognizer629660474.logEntry([
                        390,
                        45,
                        390,
                        53
                    ], arguments);
                    if (__recognizer629660474.logProbe([
                            391,
                            19,
                            391,
                            24
                        ], pPosY) < 0)
                        (function () {
                            var obj = __recognizer629660474.logProbe([
                                    392,
                                    20,
                                    392,
                                    26
                                ], bullet), fn = __recognizer629660474.logProbe([
                                    392,
                                    27,
                                    392,
                                    31
                                ], obj.setY);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer629660474.logProbe([
                            392,
                            32,
                            392,
                            37
                        ], pPosY) - __recognizer629660474.logProbe([
                            392,
                            41,
                            392,
                            46
                        ], pPosY) * __recognizer629660474.logProbe([
                            392,
                            55,
                            392,
                            59
                        ], __recognizer629660474.logProbe([
                            392,
                            49,
                            392,
                            54
                        ], frame).time) * 4 / __recognizer629660474.logProbe([
                            392,
                            66,
                            392,
                            72
                        ], period)));
                    else
                        (function () {
                            var obj = __recognizer629660474.logProbe([
                                    394,
                                    20,
                                    394,
                                    26
                                ], bullet), fn = __recognizer629660474.logProbe([
                                    394,
                                    27,
                                    394,
                                    31
                                ], obj.setY);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer629660474.logProbe([
                            394,
                            32,
                            394,
                            37
                        ], pPosY) + __recognizer629660474.logProbe([
                            394,
                            41,
                            394,
                            46
                        ], pPosY) * __recognizer629660474.logProbe([
                            394,
                            55,
                            394,
                            59
                        ], __recognizer629660474.logProbe([
                            394,
                            49,
                            394,
                            54
                        ], frame).time) * 4 / __recognizer629660474.logProbe([
                            394,
                            66,
                            394,
                            72
                        ], period)));
                    if (__recognizer629660474.logProbe([
                            395,
                            25,
                            395,
                            29
                        ], __recognizer629660474.logProbe([
                            395,
                            19,
                            395,
                            24
                        ], frame).time) >= 4000) {
                        if (__recognizer629660474.logProbe([
                                396,
                                39,
                                396,
                                45
                            ], __recognizer629660474.logProbe([
                                396,
                                23,
                                396,
                                38
                            ], childrenBullets).length) > 0) {
                            (function () {
                                var obj = __recognizer629660474.logProbe([
                                        397,
                                        40,
                                        397,
                                        41
                                    ], __recognizer629660474.logProbe([
                                        397,
                                        24,
                                        397,
                                        39
                                    ], childrenBullets)[0]), fn = __recognizer629660474.logProbe([
                                        397,
                                        43,
                                        397,
                                        49
                                    ], obj.remove);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            (function () {
                                var obj = __recognizer629660474.logProbe([
                                        398,
                                        24,
                                        398,
                                        35
                                    ], bulletLayer), fn = __recognizer629660474.logProbe([
                                        398,
                                        36,
                                        398,
                                        40
                                    ], obj.draw);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            (function () {
                                var obj = __recognizer629660474.logProbe([
                                        399,
                                        24,
                                        399,
                                        28
                                    ], anim), fn = __recognizer629660474.logProbe([
                                        399,
                                        29,
                                        399,
                                        33
                                    ], obj.stop);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                        }
                    }
                    for (var i = 0; __recognizer629660474.logProbe([
                            403,
                            31,
                            403,
                            32
                        ], i) < __recognizer629660474.logProbe([
                            403,
                            51,
                            403,
                            57
                        ], __recognizer629660474.logProbe([
                            403,
                            35,
                            403,
                            50
                        ], childrenBullets).length); __recognizer629660474.logProbe([
                            403,
                            59,
                            403,
                            60
                        ], i)++) {
                        if (function () {
                                var obj = __recognizer629660474.logProbe([
                                        404,
                                        39,
                                        404,
                                        40
                                    ], __recognizer629660474.logProbe([
                                        404,
                                        23,
                                        404,
                                        38
                                    ], childrenBullets)[i]), fn = __recognizer629660474.logProbe([
                                        404,
                                        42,
                                        404,
                                        46
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() - 10 == function () {
                                var obj = __recognizer629660474.logProbe([
                                        404,
                                        57,
                                        404,
                                        60
                                    ], car), fn = __recognizer629660474.logProbe([
                                        404,
                                        61,
                                        404,
                                        65
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() && function () {
                                var obj = __recognizer629660474.logProbe([
                                        405,
                                        26,
                                        405,
                                        30
                                    ], Math), fn = __recognizer629660474.logProbe([
                                        405,
                                        31,
                                        405,
                                        34
                                    ], obj.abs);
                                return fn.apply(obj, arguments);
                            }.bind(this)(function () {
                                var obj = __recognizer629660474.logProbe([
                                        405,
                                        51,
                                        405,
                                        52
                                    ], __recognizer629660474.logProbe([
                                        405,
                                        35,
                                        405,
                                        50
                                    ], childrenBullets)[i]), fn = __recognizer629660474.logProbe([
                                        405,
                                        54,
                                        405,
                                        58
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)() - (400 + function () {
                                var obj = __recognizer629660474.logProbe([
                                        405,
                                        70,
                                        405,
                                        73
                                    ], car), fn = __recognizer629660474.logProbe([
                                        405,
                                        74,
                                        405,
                                        78
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)())) <= 10) {
                            if (__recognizer629660474.logProbe([
                                    406,
                                    27,
                                    406,
                                    63
                                ], __recognizer629660474.logProbe([
                                    406,
                                    27,
                                    406,
                                    37
                                ], checkLifes)(__recognizer629660474.logProbe([
                                    406,
                                    38,
                                    406,
                                    42
                                ], anim), __recognizer629660474.logProbe([
                                    406,
                                    44,
                                    406,
                                    59
                                ], childrenBullets), __recognizer629660474.logProbe([
                                    406,
                                    61,
                                    406,
                                    62
                                ], i)))) {
                                (function () {
                                    var obj = __recognizer629660474.logProbe([
                                            407,
                                            28,
                                            407,
                                            39
                                        ], bulletLayer), fn = __recognizer629660474.logProbe([
                                            407,
                                            40,
                                            407,
                                            44
                                        ], obj.draw);
                                    return fn.apply(obj, arguments);
                                }.bind(this)());
                                break;
                            }
                        }
                    }
                }, __recognizer629660474.logProbe([
                    412,
                    15,
                    412,
                    26
                ], bulletLayer));
            (function () {
                var obj = __recognizer629660474.logProbe([
                        414,
                        12,
                        414,
                        16
                    ], anim), fn = __recognizer629660474.logProbe([
                        414,
                        17,
                        414,
                        22
                    ], obj.start);
                return fn.apply(obj, arguments);
            }.bind(this)());
        }
        function createBox(pPosX, pPosY, images) {
            __recognizer629660474.logEntry([
                417,
                17,
                417,
                26
            ], arguments);
            var box = new (__recognizer629660474.logProbe([
                    418,
                    34,
                    418,
                    38
                ], __recognizer629660474.logProbe([
                    418,
                    26,
                    418,
                    33
                ], Kinetic).Rect))({
                    x: pPosX,
                    y: pPosY,
                    fillPatternImage: __recognizer629660474.logProbe([
                        421,
                        41,
                        421,
                        44
                    ], __recognizer629660474.logProbe([
                        421,
                        34,
                        421,
                        40
                    ], images).box),
                    width: 64,
                    height: 64
                });
            (function () {
                var obj = __recognizer629660474.logProbe([
                        426,
                        12,
                        426,
                        20
                    ], boxLayer), fn = __recognizer629660474.logProbe([
                        426,
                        21,
                        426,
                        24
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer629660474.logProbe([
                426,
                25,
                426,
                28
            ], box)));
            (function () {
                var obj = __recognizer629660474.logProbe([
                        427,
                        12,
                        427,
                        20
                    ], boxLayer), fn = __recognizer629660474.logProbe([
                        427,
                        21,
                        427,
                        25
                    ], obj.draw);
                return fn.apply(obj, arguments);
            }.bind(this)());
        }
        function arrowKeys(images) {
            __recognizer629660474.logEntry([
                430,
                17,
                430,
                26
            ], arguments);
            (function () {
                var obj = __recognizer629660474.logProbe([
                        431,
                        12,
                        431,
                        23
                    ], __recognizer629660474.logProbe([
                        431,
                        12,
                        431,
                        13
                    ], $)(__recognizer629660474.logProbe([
                        431,
                        14,
                        431,
                        22
                    ], document))), fn = __recognizer629660474.logProbe([
                        431,
                        24,
                        431,
                        31
                    ], obj.keydown);
                return fn.apply(obj, arguments);
            }.bind(this)(function (e) {
                __recognizer629660474.logEntry([
                    431,
                    32,
                    431,
                    40
                ], arguments);
                if (__recognizer629660474.logProbe([
                        432,
                        22,
                        432,
                        29
                    ], __recognizer629660474.logProbe([
                        432,
                        20,
                        432,
                        21
                    ], e).keyCode) == 37) {
                    if (function () {
                            var obj = __recognizer629660474.logProbe([
                                    433,
                                    23,
                                    433,
                                    26
                                ], car), fn = __recognizer629660474.logProbe([
                                    433,
                                    27,
                                    433,
                                    31
                                ], obj.getX);
                            return fn.apply(obj, arguments);
                        }.bind(this)() - 100 >= 150)
                        (function () {
                            var obj = __recognizer629660474.logProbe([
                                    434,
                                    24,
                                    434,
                                    27
                                ], car), fn = __recognizer629660474.logProbe([
                                    434,
                                    28,
                                    434,
                                    32
                                ], obj.setX);
                            return fn.apply(obj, arguments);
                        }.bind(this)(function () {
                            var obj = __recognizer629660474.logProbe([
                                    434,
                                    33,
                                    434,
                                    36
                                ], car), fn = __recognizer629660474.logProbe([
                                    434,
                                    37,
                                    434,
                                    41
                                ], obj.getX);
                            return fn.apply(obj, arguments);
                        }.bind(this)() - 100));
                    return false;
                } else if (__recognizer629660474.logProbe([
                        436,
                        28,
                        436,
                        35
                    ], __recognizer629660474.logProbe([
                        436,
                        26,
                        436,
                        27
                    ], e).keyCode) == 39) {
                    if (function () {
                            var obj = __recognizer629660474.logProbe([
                                    437,
                                    23,
                                    437,
                                    26
                                ], car), fn = __recognizer629660474.logProbe([
                                    437,
                                    27,
                                    437,
                                    31
                                ], obj.getX);
                            return fn.apply(obj, arguments);
                        }.bind(this)() + 100 <= 550)
                        (function () {
                            var obj = __recognizer629660474.logProbe([
                                    438,
                                    24,
                                    438,
                                    27
                                ], car), fn = __recognizer629660474.logProbe([
                                    438,
                                    28,
                                    438,
                                    32
                                ], obj.setX);
                            return fn.apply(obj, arguments);
                        }.bind(this)(function () {
                            var obj = __recognizer629660474.logProbe([
                                    438,
                                    33,
                                    438,
                                    36
                                ], car), fn = __recognizer629660474.logProbe([
                                    438,
                                    37,
                                    438,
                                    41
                                ], obj.getX);
                            return fn.apply(obj, arguments);
                        }.bind(this)() + 100));
                    return false;
                } else if (__recognizer629660474.logProbe([
                        440,
                        28,
                        440,
                        35
                    ], __recognizer629660474.logProbe([
                        440,
                        26,
                        440,
                        27
                    ], e).keyCode) == 32) {
                    if (!__recognizer629660474.logProbe([
                            441,
                            24,
                            441,
                            32
                        ], gameOver)) {
                        var x = function () {
                                var obj = __recognizer629660474.logProbe([
                                        442,
                                        32,
                                        442,
                                        35
                                    ], car), fn = __recognizer629660474.logProbe([
                                        442,
                                        36,
                                        442,
                                        40
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)();
                        var y = function () {
                                var obj = __recognizer629660474.logProbe([
                                        443,
                                        32,
                                        443,
                                        35
                                    ], car), fn = __recognizer629660474.logProbe([
                                        443,
                                        36,
                                        443,
                                        40
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)();
                        __recognizer629660474.logProbe([
                            444,
                            24,
                            444,
                            47
                        ], __recognizer629660474.logProbe([
                            444,
                            24,
                            444,
                            36
                        ], createWeapon)(__recognizer629660474.logProbe([
                            444,
                            37,
                            444,
                            46
                        ], weaponObj)));
                        var bulletSound = new (__recognizer629660474.logProbe([
                                445,
                                46,
                                445,
                                51
                            ], Audio))('audio/shot.wav');
                        (function () {
                            var obj = __recognizer629660474.logProbe([
                                    446,
                                    24,
                                    446,
                                    35
                                ], bulletSound), fn = __recognizer629660474.logProbe([
                                    446,
                                    36,
                                    446,
                                    40
                                ], obj.play);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                    }
                    return false;
                }
            }));
        }
        function init() {
            __recognizer629660474.logEntry([
                453,
                17,
                453,
                21
            ], arguments);
            var sources = {
                    pit: 'images/pits.png',
                    car: 'images/car.png',
                    bullet: 'images/bullet.png',
                    box: 'images/box.png'
                };
            __recognizer629660474.logProbe([
                462,
                12,
                464,
                14
            ], __recognizer629660474.logProbe([
                462,
                12,
                462,
                22
            ], loadImages)(__recognizer629660474.logProbe([
                462,
                23,
                462,
                30
            ], sources), function (images) {
                __recognizer629660474.logEntry([
                    462,
                    32,
                    462,
                    40
                ], arguments);
                __recognizer629660474.logProbe([
                    463,
                    16,
                    463,
                    39
                ], __recognizer629660474.logProbe([
                    463,
                    16,
                    463,
                    31
                ], drawCanvasStage)(__recognizer629660474.logProbe([
                    463,
                    32,
                    463,
                    38
                ], images)));
            }));
        }
        return { init: init };
    }();
}(__recognizer629660474.logProbe([
    472,
    2,
    472,
    14
], Presentation), __recognizer629660474.logProbe([
    472,
    16,
    472,
    22
], jQuery)));