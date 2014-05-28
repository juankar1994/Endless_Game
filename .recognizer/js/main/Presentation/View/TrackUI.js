/**
 * This code has been instrumented using Recognizer
 * https://github.com/equiet/recognizer
 */

var __recognizer430094732 = (function () {
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

var Presentation = __recognizer430094732.logProbe([
        19,
        26,
        19,
        38
    ], __recognizer430094732.logProbe([
        19,
        19,
        19,
        25
    ], window).Presentation) || {};
(function (pContext, $) {
    __recognizer430094732.logEntry([
        21,
        1,
        21,
        9
    ], arguments);
    pContext.getTrackUI = function () {
        __recognizer430094732.logEntry([
            23,
            26,
            23,
            34
        ], arguments);
        return __recognizer430094732.logProbe([
            24,
            15,
            24,
            22
        ], TrackUI);
    };
    TrackUI = function () {
        __recognizer430094732.logEntry([
            27,
            15,
            27,
            23
        ], arguments);
        var car, canvasStage, vehicleLayer, boxLayer, weaponLayer, enemyLayer, labelLayer, bulletLayer, gameOver = false, vehicle, numberOfShots = 2, enemiesCollection = [], player, enemiesPositionX = [
                175,
                275,
                375,
                475,
                575
            ];
        var currentWeapon, currentChromosome, currentEnemies = [];
        (function () {
            var obj = __recognizer430094732.logProbe([
                    33,
                    8,
                    33,
                    21
                ], __recognizer430094732.logProbe([
                    33,
                    8,
                    33,
                    9
                ], $)('#btnPlay')), fn = __recognizer430094732.logProbe([
                    33,
                    22,
                    33,
                    27
                ], obj.click);
            return fn.apply(obj, arguments);
        }.bind(this)(function () {
            __recognizer430094732.logEntry([
                33,
                28,
                33,
                36
            ], arguments);
            player = function () {
                var obj = __recognizer430094732.logProbe([
                        34,
                        21,
                        34,
                        32
                    ], LibraryData), fn = __recognizer430094732.logProbe([
                        34,
                        33,
                        34,
                        45
                    ], obj.createPlayer);
                return fn.apply(obj, arguments);
            }.bind(this)();
            gameOver = false;
            __recognizer430094732.logProbe([
                36,
                12,
                36,
                18
            ], __recognizer430094732.logProbe([
                36,
                12,
                36,
                16
            ], init)());
        }));
        function loadImages(sources, callback) {
            __recognizer430094732.logEntry([
                39,
                17,
                39,
                27
            ], arguments);
            var images = {};
            var loadedImages = 0;
            var numImages = 0;
            for (var src in __recognizer430094732.logProbe([
                    44,
                    27,
                    44,
                    34
                ], sources)) {
                __recognizer430094732.logProbe([
                    45,
                    16,
                    45,
                    25
                ], numImages)++;
            }
            for (var src in __recognizer430094732.logProbe([
                    47,
                    27,
                    47,
                    34
                ], sources)) {
                images[src] = new (__recognizer430094732.logProbe([
                    48,
                    34,
                    48,
                    39
                ], Image))();
                images[src].onload = function () {
                    __recognizer430094732.logEntry([
                        49,
                        37,
                        49,
                        45
                    ], arguments);
                    if (++__recognizer430094732.logProbe([
                            50,
                            25,
                            50,
                            37
                        ], loadedImages) >= __recognizer430094732.logProbe([
                            50,
                            41,
                            50,
                            50
                        ], numImages)) {
                        __recognizer430094732.logProbe([
                            51,
                            24,
                            51,
                            40
                        ], __recognizer430094732.logProbe([
                            51,
                            24,
                            51,
                            32
                        ], callback)(__recognizer430094732.logProbe([
                            51,
                            33,
                            51,
                            39
                        ], images)));
                    }
                };
                images[src].src = __recognizer430094732.logProbe([
                    54,
                    42,
                    54,
                    45
                ], __recognizer430094732.logProbe([
                    54,
                    34,
                    54,
                    41
                ], sources)[src]);
            }
        }
        function drawCanvasStage(images) {
            __recognizer430094732.logEntry([
                59,
                17,
                59,
                32
            ], arguments);
            canvasStage = new (__recognizer430094732.logProbe([
                61,
                38,
                61,
                43
            ], __recognizer430094732.logProbe([
                61,
                30,
                61,
                37
            ], Kinetic).Stage))({
                container: 'gameContainer',
                width: 800,
                height: 550
            });
            vehicleLayer = new (__recognizer430094732.logProbe([
                67,
                39,
                67,
                44
            ], __recognizer430094732.logProbe([
                67,
                31,
                67,
                38
            ], Kinetic).Layer))();
            boxLayer = new (__recognizer430094732.logProbe([
                68,
                35,
                68,
                40
            ], __recognizer430094732.logProbe([
                68,
                27,
                68,
                34
            ], Kinetic).Layer))();
            weaponLayer = new (__recognizer430094732.logProbe([
                69,
                38,
                69,
                43
            ], __recognizer430094732.logProbe([
                69,
                30,
                69,
                37
            ], Kinetic).Layer))();
            enemyLayer = new (__recognizer430094732.logProbe([
                70,
                37,
                70,
                42
            ], __recognizer430094732.logProbe([
                70,
                29,
                70,
                36
            ], Kinetic).Layer))();
            labelLayer = new (__recognizer430094732.logProbe([
                71,
                37,
                71,
                42
            ], __recognizer430094732.logProbe([
                71,
                29,
                71,
                36
            ], Kinetic).Layer))();
            bulletLayer = new (__recognizer430094732.logProbe([
                72,
                38,
                72,
                43
            ], __recognizer430094732.logProbe([
                72,
                30,
                72,
                37
            ], Kinetic).Layer))();
            var pit = new (__recognizer430094732.logProbe([
                    74,
                    34,
                    74,
                    38
                ], __recognizer430094732.logProbe([
                    74,
                    26,
                    74,
                    33
                ], Kinetic).Rect))({
                    x: 90,
                    fillPatternImage: __recognizer430094732.logProbe([
                        76,
                        41,
                        76,
                        44
                    ], __recognizer430094732.logProbe([
                        76,
                        34,
                        76,
                        40
                    ], images).pit),
                    width: 34,
                    height: 1200,
                    offset: {
                        x: 0,
                        y: 650
                    }
                });
            var pit2 = new (__recognizer430094732.logProbe([
                    82,
                    35,
                    82,
                    39
                ], __recognizer430094732.logProbe([
                    82,
                    27,
                    82,
                    34
                ], Kinetic).Rect))({
                    x: 650,
                    fillPatternImage: __recognizer430094732.logProbe([
                        84,
                        41,
                        84,
                        44
                    ], __recognizer430094732.logProbe([
                        84,
                        34,
                        84,
                        40
                    ], images).pit),
                    width: 34,
                    height: 1200,
                    offset: {
                        x: 0,
                        y: 650
                    }
                });
            car = new (__recognizer430094732.logProbe([
                90,
                30,
                90,
                34
            ], __recognizer430094732.logProbe([
                90,
                22,
                90,
                29
            ], Kinetic).Rect))({
                x: 350,
                y: 430,
                fillPatternImage: __recognizer430094732.logProbe([
                    93,
                    41,
                    93,
                    44
                ], __recognizer430094732.logProbe([
                    93,
                    34,
                    93,
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
                var obj = __recognizer430094732.logProbe([
                        100,
                        22,
                        100,
                        33
                    ], LibraryData), fn = __recognizer430094732.logProbe([
                        100,
                        34,
                        100,
                        47
                    ], obj.createVehicle);
                return fn.apply(obj, arguments);
            }.bind(this)(function () {
                var obj = __recognizer430094732.logProbe([
                        100,
                        48,
                        100,
                        51
                    ], car), fn = __recognizer430094732.logProbe([
                        100,
                        52,
                        100,
                        56
                    ], obj.getX);
                return fn.apply(obj, arguments);
            }.bind(this)(), function () {
                var obj = __recognizer430094732.logProbe([
                        100,
                        60,
                        100,
                        63
                    ], car), fn = __recognizer430094732.logProbe([
                        100,
                        64,
                        100,
                        68
                    ], obj.getY);
                return fn.apply(obj, arguments);
            }.bind(this)(), __recognizer430094732.logProbe([
                100,
                72,
                100,
                85
            ], numberOfShots));
            (function () {
                var obj = function () {
                        var obj = __recognizer430094732.logProbe([
                                102,
                                12,
                                102,
                                24
                            ], Presentation), fn = __recognizer430094732.logProbe([
                                102,
                                25,
                                102,
                                41
                            ], obj.getWeaponHandler);
                        return fn.apply(obj, arguments);
                    }.bind(this)(), fn = __recognizer430094732.logProbe([
                        102,
                        44,
                        102,
                        63
                    ], obj.askForInitialWeapon);
                return fn.apply(obj, arguments);
            }.bind(this)());
            var amplitude = 270;
            var speedCar = 210;
            var period = 5000;
            var anim = new (__recognizer430094732.logProbe([
                    109,
                    35,
                    109,
                    44
                ], __recognizer430094732.logProbe([
                    109,
                    27,
                    109,
                    34
                ], Kinetic).Animation))(function (frame) {
                    __recognizer430094732.logEntry([
                        109,
                        45,
                        109,
                        53
                    ], arguments);
                    (function () {
                        var obj = __recognizer430094732.logProbe([
                                110,
                                16,
                                110,
                                19
                            ], pit), fn = __recognizer430094732.logProbe([
                                110,
                                20,
                                110,
                                24
                            ], obj.setY);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer430094732.logProbe([
                        110,
                        25,
                        110,
                        34
                    ], amplitude) * __recognizer430094732.logProbe([
                        110,
                        42,
                        110,
                        46
                    ], __recognizer430094732.logProbe([
                        110,
                        36,
                        110,
                        41
                    ], frame).time) * 2 / __recognizer430094732.logProbe([
                        110,
                        53,
                        110,
                        59
                    ], period)));
                    (function () {
                        var obj = __recognizer430094732.logProbe([
                                111,
                                16,
                                111,
                                20
                            ], pit2), fn = __recognizer430094732.logProbe([
                                111,
                                21,
                                111,
                                25
                            ], obj.setY);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer430094732.logProbe([
                        111,
                        26,
                        111,
                        35
                    ], amplitude) * __recognizer430094732.logProbe([
                        111,
                        43,
                        111,
                        47
                    ], __recognizer430094732.logProbe([
                        111,
                        37,
                        111,
                        42
                    ], frame).time) * 2 / __recognizer430094732.logProbe([
                        111,
                        54,
                        111,
                        60
                    ], period)));
                    if (__recognizer430094732.logProbe([
                            112,
                            25,
                            112,
                            29
                        ], __recognizer430094732.logProbe([
                            112,
                            19,
                            112,
                            24
                        ], frame).time) >= 5000)
                        frame.time = 0;
                }, __recognizer430094732.logProbe([
                    114,
                    15,
                    114,
                    27
                ], vehicleLayer));
            var anim2 = new (__recognizer430094732.logProbe([
                    116,
                    36,
                    116,
                    45
                ], __recognizer430094732.logProbe([
                    116,
                    28,
                    116,
                    35
                ], Kinetic).Animation))(function (frame) {
                    __recognizer430094732.logEntry([
                        116,
                        46,
                        116,
                        54
                    ], arguments);
                    var yCalculation = -__recognizer430094732.logProbe([
                            117,
                            36,
                            117,
                            44
                        ], speedCar) * __recognizer430094732.logProbe([
                            117,
                            53,
                            117,
                            57
                        ], __recognizer430094732.logProbe([
                            117,
                            47,
                            117,
                            52
                        ], frame).time) * 2 / __recognizer430094732.logProbe([
                            117,
                            64,
                            117,
                            70
                        ], period);
                    (function () {
                        var obj = __recognizer430094732.logProbe([
                                118,
                                16,
                                118,
                                23
                            ], vehicle), fn = __recognizer430094732.logProbe([
                                118,
                                24,
                                118,
                                36
                            ], obj.setPositionY);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer430094732.logProbe([
                        118,
                        37,
                        118,
                        49
                    ], yCalculation)));
                    (function () {
                        var obj = __recognizer430094732.logProbe([
                                119,
                                16,
                                119,
                                19
                            ], car), fn = __recognizer430094732.logProbe([
                                119,
                                20,
                                119,
                                24
                            ], obj.setY);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer430094732.logProbe([
                        119,
                        25,
                        119,
                        37
                    ], yCalculation)));
                    if (__recognizer430094732.logProbe([
                            120,
                            25,
                            120,
                            29
                        ], __recognizer430094732.logProbe([
                            120,
                            19,
                            120,
                            24
                        ], frame).time) >= 5000) {
                        frame.time = 0;
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    122,
                                    20,
                                    122,
                                    30
                                ], enemyLayer), fn = __recognizer430094732.logProbe([
                                    122,
                                    31,
                                    122,
                                    45
                                ], obj.removeChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    123,
                                    20,
                                    123,
                                    30
                                ], enemyLayer), fn = __recognizer430094732.logProbe([
                                    123,
                                    31,
                                    123,
                                    35
                                ], obj.draw);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    124,
                                    20,
                                    124,
                                    28
                                ], boxLayer), fn = __recognizer430094732.logProbe([
                                    124,
                                    29,
                                    124,
                                    43
                                ], obj.removeChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    125,
                                    20,
                                    125,
                                    28
                                ], boxLayer), fn = __recognizer430094732.logProbe([
                                    125,
                                    29,
                                    125,
                                    33
                                ], obj.draw);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    126,
                                    20,
                                    126,
                                    31
                                ], bulletLayer), fn = __recognizer430094732.logProbe([
                                    126,
                                    32,
                                    126,
                                    46
                                ], obj.removeChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    127,
                                    20,
                                    127,
                                    31
                                ], bulletLayer), fn = __recognizer430094732.logProbe([
                                    127,
                                    32,
                                    127,
                                    36
                                ], obj.draw);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    128,
                                    20,
                                    128,
                                    27
                                ], vehicle), fn = __recognizer430094732.logProbe([
                                    128,
                                    28,
                                    128,
                                    44
                                ], obj.setNumberOfShots);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer430094732.logProbe([
                            128,
                            45,
                            128,
                            58
                        ], numberOfShots)));
                        __recognizer430094732.logProbe([
                            129,
                            20,
                            131,
                            27
                        ], __recognizer430094732.logProbe([
                            129,
                            20,
                            129,
                            30
                        ], setTimeout)(function () {
                            __recognizer430094732.logEntry([
                                129,
                                31,
                                129,
                                39
                            ], arguments);
                            __recognizer430094732.logProbe([
                                130,
                                24,
                                130,
                                48
                            ], __recognizer430094732.logProbe([
                                130,
                                24,
                                130,
                                40
                            ], getRandomObjects)(__recognizer430094732.logProbe([
                                130,
                                41,
                                130,
                                47
                            ], images)));
                        }, 300));
                    }
                    var boxChildren = function () {
                            var obj = __recognizer430094732.logProbe([
                                    134,
                                    34,
                                    134,
                                    42
                                ], boxLayer), fn = __recognizer430094732.logProbe([
                                    134,
                                    43,
                                    134,
                                    54
                                ], obj.getChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)();
                    for (var k = 0; __recognizer430094732.logProbe([
                            135,
                            31,
                            135,
                            32
                        ], k) < __recognizer430094732.logProbe([
                            135,
                            47,
                            135,
                            53
                        ], __recognizer430094732.logProbe([
                            135,
                            35,
                            135,
                            46
                        ], boxChildren).length); __recognizer430094732.logProbe([
                            135,
                            55,
                            135,
                            56
                        ], k)++) {
                        if (function () {
                                var obj = __recognizer430094732.logProbe([
                                        136,
                                        23,
                                        136,
                                        26
                                    ], car), fn = __recognizer430094732.logProbe([
                                        136,
                                        27,
                                        136,
                                        31
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() == function () {
                                var obj = __recognizer430094732.logProbe([
                                        136,
                                        49,
                                        136,
                                        50
                                    ], __recognizer430094732.logProbe([
                                        136,
                                        37,
                                        136,
                                        48
                                    ], boxChildren)[k]), fn = __recognizer430094732.logProbe([
                                        136,
                                        52,
                                        136,
                                        56
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() && 380 + function () {
                                var obj = __recognizer430094732.logProbe([
                                        137,
                                        32,
                                        137,
                                        35
                                    ], car), fn = __recognizer430094732.logProbe([
                                        137,
                                        36,
                                        137,
                                        40
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)() <= function () {
                                var obj = __recognizer430094732.logProbe([
                                        137,
                                        58,
                                        137,
                                        59
                                    ], __recognizer430094732.logProbe([
                                        137,
                                        46,
                                        137,
                                        57
                                    ], boxChildren)[k]), fn = __recognizer430094732.logProbe([
                                        137,
                                        61,
                                        137,
                                        65
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)()) {
                            (function () {
                                var obj = __recognizer430094732.logProbe([
                                        138,
                                        36,
                                        138,
                                        37
                                    ], __recognizer430094732.logProbe([
                                        138,
                                        24,
                                        138,
                                        35
                                    ], boxChildren)[k]), fn = __recognizer430094732.logProbe([
                                        138,
                                        39,
                                        138,
                                        45
                                    ], obj.remove);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            (function () {
                                var obj = __recognizer430094732.logProbe([
                                        139,
                                        24,
                                        139,
                                        32
                                    ], boxLayer), fn = __recognizer430094732.logProbe([
                                        139,
                                        33,
                                        139,
                                        37
                                    ], obj.draw);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            var boxSound = new (__recognizer430094732.logProbe([
                                    141,
                                    43,
                                    141,
                                    48
                                ], Audio))('audio/success.wav');
                            (function () {
                                var obj = __recognizer430094732.logProbe([
                                        142,
                                        24,
                                        142,
                                        32
                                    ], boxSound), fn = __recognizer430094732.logProbe([
                                        142,
                                        33,
                                        142,
                                        37
                                    ], obj.play);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            (function () {
                                var obj = function () {
                                        var obj = __recognizer430094732.logProbe([
                                                145,
                                                24,
                                                145,
                                                36
                                            ], Presentation), fn = __recognizer430094732.logProbe([
                                                145,
                                                37,
                                                145,
                                                53
                                            ], obj.getWeaponHandler);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)(), fn = __recognizer430094732.logProbe([
                                        145,
                                        56,
                                        145,
                                        75
                                    ], obj.askForInitialWeapon);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            (function () {
                                var obj = function () {
                                        var obj = __recognizer430094732.logProbe([
                                                146,
                                                24,
                                                146,
                                                36
                                            ], Presentation), fn = __recognizer430094732.logProbe([
                                                146,
                                                37,
                                                146,
                                                53
                                            ], obj.getWeaponHandler);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)(), fn = __recognizer430094732.logProbe([
                                        146,
                                        56,
                                        146,
                                        68
                                    ], obj.getNewWeapon);
                                return fn.apply(obj, arguments);
                            }.bind(this)(__recognizer430094732.logProbe([
                                146,
                                69,
                                146,
                                86
                            ], currentChromosome)));
                            (function () {
                                var obj = __recognizer430094732.logProbe([
                                        148,
                                        24,
                                        148,
                                        35
                                    ], weaponLayer), fn = __recognizer430094732.logProbe([
                                        148,
                                        36,
                                        148,
                                        50
                                    ], obj.removeChildren);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            break;
                        }
                    }
                    var enemyChildren = function () {
                            var obj = __recognizer430094732.logProbe([
                                    153,
                                    36,
                                    153,
                                    46
                                ], enemyLayer), fn = __recognizer430094732.logProbe([
                                    153,
                                    47,
                                    153,
                                    58
                                ], obj.getChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)();
                    for (var i = 0; __recognizer430094732.logProbe([
                            155,
                            31,
                            155,
                            32
                        ], i) < __recognizer430094732.logProbe([
                            155,
                            49,
                            155,
                            55
                        ], __recognizer430094732.logProbe([
                            155,
                            35,
                            155,
                            48
                        ], enemyChildren).length); __recognizer430094732.logProbe([
                            155,
                            57,
                            155,
                            58
                        ], i)++) {
                        if (function () {
                                var obj = __recognizer430094732.logProbe([
                                        156,
                                        23,
                                        156,
                                        26
                                    ], car), fn = __recognizer430094732.logProbe([
                                        156,
                                        27,
                                        156,
                                        31
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() + 25 == function () {
                                var obj = __recognizer430094732.logProbe([
                                        156,
                                        56,
                                        156,
                                        57
                                    ], __recognizer430094732.logProbe([
                                        156,
                                        42,
                                        156,
                                        55
                                    ], enemyChildren)[i]), fn = __recognizer430094732.logProbe([
                                        156,
                                        59,
                                        156,
                                        63
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() && 400 + function () {
                                var obj = __recognizer430094732.logProbe([
                                        157,
                                        32,
                                        157,
                                        35
                                    ], car), fn = __recognizer430094732.logProbe([
                                        157,
                                        36,
                                        157,
                                        40
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)() <= function () {
                                var obj = __recognizer430094732.logProbe([
                                        157,
                                        60,
                                        157,
                                        61
                                    ], __recognizer430094732.logProbe([
                                        157,
                                        46,
                                        157,
                                        59
                                    ], enemyChildren)[i]), fn = __recognizer430094732.logProbe([
                                        157,
                                        63,
                                        157,
                                        67
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)()) {
                            if (__recognizer430094732.logProbe([
                                    158,
                                    27,
                                    158,
                                    62
                                ], __recognizer430094732.logProbe([
                                    158,
                                    27,
                                    158,
                                    37
                                ], checkLifes)(__recognizer430094732.logProbe([
                                    158,
                                    38,
                                    158,
                                    43
                                ], anim2), __recognizer430094732.logProbe([
                                    158,
                                    45,
                                    158,
                                    58
                                ], enemyChildren), __recognizer430094732.logProbe([
                                    158,
                                    60,
                                    158,
                                    61
                                ], i)))) {
                                (function () {
                                    var obj = __recognizer430094732.logProbe([
                                            159,
                                            28,
                                            159,
                                            38
                                        ], enemyLayer), fn = __recognizer430094732.logProbe([
                                            159,
                                            39,
                                            159,
                                            43
                                        ], obj.draw);
                                    return fn.apply(obj, arguments);
                                }.bind(this)());
                                break;
                            }
                        }
                    }
                }, __recognizer430094732.logProbe([
                    165,
                    15,
                    165,
                    27
                ], vehicleLayer));
            (function () {
                var obj = __recognizer430094732.logProbe([
                        167,
                        12,
                        167,
                        16
                    ], anim), fn = __recognizer430094732.logProbe([
                        167,
                        17,
                        167,
                        22
                    ], obj.start);
                return fn.apply(obj, arguments);
            }.bind(this)());
            (function () {
                var obj = __recognizer430094732.logProbe([
                        168,
                        12,
                        168,
                        17
                    ], anim2), fn = __recognizer430094732.logProbe([
                        168,
                        18,
                        168,
                        23
                    ], obj.start);
                return fn.apply(obj, arguments);
            }.bind(this)());
            (function () {
                var obj = __recognizer430094732.logProbe([
                        170,
                        12,
                        170,
                        24
                    ], vehicleLayer), fn = __recognizer430094732.logProbe([
                        170,
                        25,
                        170,
                        28
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer430094732.logProbe([
                170,
                29,
                170,
                32
            ], pit)));
            (function () {
                var obj = __recognizer430094732.logProbe([
                        171,
                        12,
                        171,
                        24
                    ], vehicleLayer), fn = __recognizer430094732.logProbe([
                        171,
                        25,
                        171,
                        28
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer430094732.logProbe([
                171,
                29,
                171,
                33
            ], pit2)));
            (function () {
                var obj = __recognizer430094732.logProbe([
                        172,
                        12,
                        172,
                        24
                    ], vehicleLayer), fn = __recognizer430094732.logProbe([
                        172,
                        25,
                        172,
                        28
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer430094732.logProbe([
                172,
                29,
                172,
                32
            ], car)));
            var lifesLabel = new (__recognizer430094732.logProbe([
                    174,
                    41,
                    174,
                    46
                ], __recognizer430094732.logProbe([
                    174,
                    33,
                    174,
                    40
                ], Kinetic).Label))({
                    x: 745,
                    y: 75,
                    opacity: 0.75
                });
            (function () {
                var obj = __recognizer430094732.logProbe([
                        180,
                        12,
                        180,
                        22
                    ], lifesLabel), fn = __recognizer430094732.logProbe([
                        180,
                        23,
                        180,
                        26
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(new (__recognizer430094732.logProbe([
                180,
                39,
                180,
                42
            ], __recognizer430094732.logProbe([
                180,
                31,
                180,
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
                var obj = __recognizer430094732.logProbe([
                        192,
                        12,
                        192,
                        22
                    ], lifesLabel), fn = __recognizer430094732.logProbe([
                        192,
                        23,
                        192,
                        26
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(new (__recognizer430094732.logProbe([
                192,
                39,
                192,
                43
            ], __recognizer430094732.logProbe([
                192,
                31,
                192,
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
                var obj = __recognizer430094732.logProbe([
                        201,
                        12,
                        201,
                        22
                    ], labelLayer), fn = __recognizer430094732.logProbe([
                        201,
                        23,
                        201,
                        26
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer430094732.logProbe([
                201,
                27,
                201,
                37
            ], lifesLabel)));
            (function () {
                var obj = __recognizer430094732.logProbe([
                        203,
                        12,
                        203,
                        23
                    ], canvasStage), fn = __recognizer430094732.logProbe([
                        203,
                        24,
                        203,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer430094732.logProbe([
                203,
                28,
                203,
                40
            ], vehicleLayer)));
            (function () {
                var obj = __recognizer430094732.logProbe([
                        204,
                        12,
                        204,
                        23
                    ], canvasStage), fn = __recognizer430094732.logProbe([
                        204,
                        24,
                        204,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer430094732.logProbe([
                204,
                28,
                204,
                39
            ], weaponLayer)));
            (function () {
                var obj = __recognizer430094732.logProbe([
                        205,
                        12,
                        205,
                        23
                    ], canvasStage), fn = __recognizer430094732.logProbe([
                        205,
                        24,
                        205,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer430094732.logProbe([
                205,
                28,
                205,
                36
            ], boxLayer)));
            (function () {
                var obj = __recognizer430094732.logProbe([
                        206,
                        12,
                        206,
                        23
                    ], canvasStage), fn = __recognizer430094732.logProbe([
                        206,
                        24,
                        206,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer430094732.logProbe([
                206,
                28,
                206,
                38
            ], enemyLayer)));
            (function () {
                var obj = __recognizer430094732.logProbe([
                        207,
                        12,
                        207,
                        23
                    ], canvasStage), fn = __recognizer430094732.logProbe([
                        207,
                        24,
                        207,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer430094732.logProbe([
                207,
                28,
                207,
                38
            ], labelLayer)));
            (function () {
                var obj = __recognizer430094732.logProbe([
                        208,
                        12,
                        208,
                        23
                    ], canvasStage), fn = __recognizer430094732.logProbe([
                        208,
                        24,
                        208,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer430094732.logProbe([
                208,
                28,
                208,
                39
            ], bulletLayer)));
            __recognizer430094732.logProbe([
                210,
                12,
                210,
                36
            ], __recognizer430094732.logProbe([
                210,
                12,
                210,
                28
            ], getRandomObjects)(__recognizer430094732.logProbe([
                210,
                29,
                210,
                35
            ], images)));
            __recognizer430094732.logProbe([
                211,
                12,
                211,
                29
            ], __recognizer430094732.logProbe([
                211,
                12,
                211,
                21
            ], arrowKeys)(__recognizer430094732.logProbe([
                211,
                22,
                211,
                28
            ], images)));
        }
        function getRandomObjects(pImages) {
            __recognizer430094732.logEntry([
                213,
                17,
                213,
                33
            ], arguments);
            var randomEnemies = __recognizer430094732.logProbe([
                    214,
                    32,
                    214,
                    50
                ], __recognizer430094732.logProbe([
                    214,
                    32,
                    214,
                    44
                ], getRandomInt)(1, 3));
            var randomXBox = __recognizer430094732.logProbe([
                    215,
                    29,
                    215,
                    47
                ], __recognizer430094732.logProbe([
                    215,
                    29,
                    215,
                    41
                ], getRandomInt)(0, 4));
            var randomYBox = __recognizer430094732.logProbe([
                    216,
                    29,
                    216,
                    50
                ], __recognizer430094732.logProbe([
                    216,
                    29,
                    216,
                    41
                ], getRandomInt)(50, 200));
            __recognizer430094732.logProbe([
                217,
                12,
                217,
                47
            ], __recognizer430094732.logProbe([
                217,
                12,
                217,
                23
            ], createEnemy)(__recognizer430094732.logProbe([
                217,
                24,
                217,
                37
            ], randomEnemies), __recognizer430094732.logProbe([
                217,
                39,
                217,
                46
            ], pImages)));
            __recognizer430094732.logProbe([
                218,
                12,
                218,
                77
            ], __recognizer430094732.logProbe([
                218,
                12,
                218,
                21
            ], createBox)(__recognizer430094732.logProbe([
                218,
                39,
                218,
                49
            ], __recognizer430094732.logProbe([
                218,
                22,
                218,
                38
            ], enemiesPositionX)[randomXBox]) - 25, __recognizer430094732.logProbe([
                218,
                57,
                218,
                67
            ], randomYBox), __recognizer430094732.logProbe([
                218,
                69,
                218,
                76
            ], pImages)));
        }
        function checkLifes(pAnimation, pLayer, i) {
            __recognizer430094732.logEntry([
                221,
                17,
                221,
                27
            ], arguments);
            if (function () {
                    var obj = __recognizer430094732.logProbe([
                            222,
                            15,
                            222,
                            21
                        ], player), fn = __recognizer430094732.logProbe([
                            222,
                            22,
                            222,
                            30
                        ], obj.getLifes);
                    return fn.apply(obj, arguments);
                }.bind(this)() == 0) {
                (function () {
                    var obj = __recognizer430094732.logProbe([
                            223,
                            16,
                            223,
                            19
                        ], car), fn = __recognizer430094732.logProbe([
                            223,
                            20,
                            223,
                            26
                        ], obj.remove);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                (function () {
                    var obj = __recognizer430094732.logProbe([
                            224,
                            16,
                            224,
                            28
                        ], vehicleLayer), fn = __recognizer430094732.logProbe([
                            224,
                            29,
                            224,
                            33
                        ], obj.draw);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                (function () {
                    var obj = __recognizer430094732.logProbe([
                            225,
                            16,
                            225,
                            26
                        ], pAnimation), fn = __recognizer430094732.logProbe([
                            225,
                            27,
                            225,
                            31
                        ], obj.stop);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                __recognizer430094732.logProbe([
                    226,
                    16,
                    226,
                    29
                ], __recognizer430094732.logProbe([
                    226,
                    16,
                    226,
                    27
                ], setGameOver)());
            } else {
                (function () {
                    var obj = __recognizer430094732.logProbe([
                            228,
                            16,
                            228,
                            22
                        ], player), fn = __recognizer430094732.logProbe([
                            228,
                            23,
                            228,
                            31
                        ], obj.setLifes);
                    return fn.apply(obj, arguments);
                }.bind(this)(function () {
                    var obj = __recognizer430094732.logProbe([
                            228,
                            32,
                            228,
                            38
                        ], player), fn = __recognizer430094732.logProbe([
                            228,
                            39,
                            228,
                            47
                        ], obj.getLifes);
                    return fn.apply(obj, arguments);
                }.bind(this)() - 1));
                (function () {
                    var obj = __recognizer430094732.logProbe([
                            229,
                            23,
                            229,
                            24
                        ], __recognizer430094732.logProbe([
                            229,
                            16,
                            229,
                            22
                        ], pLayer)[i]), fn = __recognizer430094732.logProbe([
                            229,
                            26,
                            229,
                            32
                        ], obj.remove);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                var labelChildren = function () {
                        var obj = __recognizer430094732.logProbe([
                                230,
                                36,
                                230,
                                46
                            ], labelLayer), fn = __recognizer430094732.logProbe([
                                230,
                                47,
                                230,
                                58
                            ], obj.getChildren);
                        return fn.apply(obj, arguments);
                    }.bind(this)();
                for (var i = 0; __recognizer430094732.logProbe([
                        231,
                        31,
                        231,
                        32
                    ], i) < __recognizer430094732.logProbe([
                        231,
                        49,
                        231,
                        55
                    ], __recognizer430094732.logProbe([
                        231,
                        35,
                        231,
                        48
                    ], labelChildren).length); __recognizer430094732.logProbe([
                        231,
                        57,
                        231,
                        58
                    ], i)++) {
                    var labelChildrenDepth = function () {
                            var obj = __recognizer430094732.logProbe([
                                    232,
                                    59,
                                    232,
                                    60
                                ], __recognizer430094732.logProbe([
                                    232,
                                    45,
                                    232,
                                    58
                                ], labelChildren)[i]), fn = __recognizer430094732.logProbe([
                                    232,
                                    62,
                                    232,
                                    73
                                ], obj.getChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)();
                    for (var j = 0; __recognizer430094732.logProbe([
                            233,
                            35,
                            233,
                            36
                        ], j) < __recognizer430094732.logProbe([
                            233,
                            57,
                            233,
                            63
                        ], __recognizer430094732.logProbe([
                            233,
                            38,
                            233,
                            56
                        ], labelChildrenDepth).length); __recognizer430094732.logProbe([
                            233,
                            65,
                            233,
                            66
                        ], j)++) {
                        if (function () {
                                var obj = __recognizer430094732.logProbe([
                                        234,
                                        46,
                                        234,
                                        47
                                    ], __recognizer430094732.logProbe([
                                        234,
                                        27,
                                        234,
                                        45
                                    ], labelChildrenDepth)[j]), fn = __recognizer430094732.logProbe([
                                        234,
                                        49,
                                        234,
                                        53
                                    ], obj.name);
                                return fn.apply(obj, arguments);
                            }.bind(this)() == 'lifes') {
                            (function () {
                                var obj = __recognizer430094732.logProbe([
                                        235,
                                        47,
                                        235,
                                        48
                                    ], __recognizer430094732.logProbe([
                                        235,
                                        28,
                                        235,
                                        46
                                    ], labelChildrenDepth)[j]), fn = __recognizer430094732.logProbe([
                                        235,
                                        50,
                                        235,
                                        57
                                    ], obj.setText);
                                return fn.apply(obj, arguments);
                            }.bind(this)('Lifes:' + function () {
                                var obj = __recognizer430094732.logProbe([
                                        235,
                                        69,
                                        235,
                                        75
                                    ], player), fn = __recognizer430094732.logProbe([
                                        235,
                                        76,
                                        235,
                                        84
                                    ], obj.getLifes);
                                return fn.apply(obj, arguments);
                            }.bind(this)()));
                            (function () {
                                var obj = __recognizer430094732.logProbe([
                                        236,
                                        28,
                                        236,
                                        38
                                    ], labelLayer), fn = __recognizer430094732.logProbe([
                                        236,
                                        39,
                                        236,
                                        43
                                    ], obj.draw);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            break;
                        }
                    }
                }
                var smashSound = new (__recognizer430094732.logProbe([
                        241,
                        37,
                        241,
                        42
                    ], Audio))('audio/smash2.wav');
                (function () {
                    var obj = __recognizer430094732.logProbe([
                            242,
                            16,
                            242,
                            26
                        ], smashSound), fn = __recognizer430094732.logProbe([
                            242,
                            27,
                            242,
                            31
                        ], obj.play);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                return true;
            }
            return false;
        }
        function setGameOver() {
            __recognizer430094732.logEntry([
                248,
                17,
                248,
                28
            ], arguments);
            var gameOverLabel = new (__recognizer430094732.logProbe([
                    249,
                    44,
                    249,
                    49
                ], __recognizer430094732.logProbe([
                    249,
                    36,
                    249,
                    43
                ], Kinetic).Label))({
                    x: function () {
                        var obj = __recognizer430094732.logProbe([
                                250,
                                19,
                                250,
                                30
                            ], canvasStage), fn = __recognizer430094732.logProbe([
                                250,
                                31,
                                250,
                                39
                            ], obj.getWidth);
                        return fn.apply(obj, arguments);
                    }.bind(this)() / 2,
                    y: function () {
                        var obj = __recognizer430094732.logProbe([
                                251,
                                19,
                                251,
                                30
                            ], canvasStage), fn = __recognizer430094732.logProbe([
                                251,
                                31,
                                251,
                                40
                            ], obj.getHeight);
                        return fn.apply(obj, arguments);
                    }.bind(this)() / 2,
                    opacity: 0.75
                });
            (function () {
                var obj = __recognizer430094732.logProbe([
                        255,
                        12,
                        255,
                        25
                    ], gameOverLabel), fn = __recognizer430094732.logProbe([
                        255,
                        26,
                        255,
                        29
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(new (__recognizer430094732.logProbe([
                255,
                42,
                255,
                45
            ], __recognizer430094732.logProbe([
                255,
                34,
                255,
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
                var obj = __recognizer430094732.logProbe([
                        267,
                        12,
                        267,
                        25
                    ], gameOverLabel), fn = __recognizer430094732.logProbe([
                        267,
                        26,
                        267,
                        29
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(new (__recognizer430094732.logProbe([
                267,
                42,
                267,
                46
            ], __recognizer430094732.logProbe([
                267,
                34,
                267,
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
                var obj = __recognizer430094732.logProbe([
                        276,
                        12,
                        276,
                        22
                    ], labelLayer), fn = __recognizer430094732.logProbe([
                        276,
                        23,
                        276,
                        26
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer430094732.logProbe([
                276,
                27,
                276,
                40
            ], gameOverLabel)));
            (function () {
                var obj = __recognizer430094732.logProbe([
                        277,
                        12,
                        277,
                        22
                    ], labelLayer), fn = __recognizer430094732.logProbe([
                        277,
                        23,
                        277,
                        27
                    ], obj.draw);
                return fn.apply(obj, arguments);
            }.bind(this)());
            gameOver = true;
        }
        function createEnemy(pNumberOfEnemies, pImages) {
            __recognizer430094732.logEntry([
                283,
                17,
                283,
                28
            ], arguments);
            enemiesCollection = [];
            currentEnemies = [];
            for (var i = 0; __recognizer430094732.logProbe([
                    286,
                    27,
                    286,
                    28
                ], i) < __recognizer430094732.logProbe([
                    286,
                    31,
                    286,
                    47
                ], pNumberOfEnemies); __recognizer430094732.logProbe([
                    286,
                    49,
                    286,
                    50
                ], i)++) {
                var y = __recognizer430094732.logProbe([
                        287,
                        24,
                        287,
                        45
                    ], __recognizer430094732.logProbe([
                        287,
                        24,
                        287,
                        36
                    ], getRandomInt)(50, 200));
                var x = __recognizer430094732.logProbe([
                        288,
                        24,
                        288,
                        42
                    ], __recognizer430094732.logProbe([
                        288,
                        24,
                        288,
                        36
                    ], getRandomInt)(0, 4));
                (function () {
                    var obj = __recognizer430094732.logProbe([
                            290,
                            16,
                            290,
                            33
                        ], enemiesCollection), fn = __recognizer430094732.logProbe([
                            290,
                            34,
                            290,
                            38
                        ], obj.push);
                    return fn.apply(obj, arguments);
                }.bind(this)(function () {
                    var obj = __recognizer430094732.logProbe([
                            290,
                            39,
                            290,
                            50
                        ], LibraryData), fn = __recognizer430094732.logProbe([
                            290,
                            51,
                            290,
                            62
                        ], obj.createEnemy);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer430094732.logProbe([
                    290,
                    80,
                    290,
                    81
                ], __recognizer430094732.logProbe([
                    290,
                    63,
                    290,
                    79
                ], enemiesPositionX)[x]), __recognizer430094732.logProbe([
                    290,
                    84,
                    290,
                    85
                ], y), 1)));
                x = function () {
                    var obj = __recognizer430094732.logProbe([
                            291,
                            38,
                            291,
                            39
                        ], __recognizer430094732.logProbe([
                            291,
                            20,
                            291,
                            37
                        ], enemiesCollection)[i]), fn = __recognizer430094732.logProbe([
                            291,
                            41,
                            291,
                            53
                        ], obj.getPositionX);
                    return fn.apply(obj, arguments);
                }.bind(this)();
                y = function () {
                    var obj = __recognizer430094732.logProbe([
                            292,
                            38,
                            292,
                            39
                        ], __recognizer430094732.logProbe([
                            292,
                            20,
                            292,
                            37
                        ], enemiesCollection)[i]), fn = __recognizer430094732.logProbe([
                            292,
                            41,
                            292,
                            53
                        ], obj.getPositionY);
                    return fn.apply(obj, arguments);
                }.bind(this)();
                var weapon = new (__recognizer430094732.logProbe([
                        294,
                        41,
                        294,
                        55
                    ], __recognizer430094732.logProbe([
                        294,
                        33,
                        294,
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
                    var obj = __recognizer430094732.logProbe([
                            303,
                            16,
                            303,
                            26
                        ], enemyLayer), fn = __recognizer430094732.logProbe([
                            303,
                            27,
                            303,
                            30
                        ], obj.add);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer430094732.logProbe([
                    303,
                    31,
                    303,
                    37
                ], weapon)));
                (function () {
                    var obj = __recognizer430094732.logProbe([
                            304,
                            16,
                            304,
                            26
                        ], enemyLayer), fn = __recognizer430094732.logProbe([
                            304,
                            27,
                            304,
                            31
                        ], obj.draw);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                (function () {
                    var obj = function () {
                            var obj = __recognizer430094732.logProbe([
                                    306,
                                    16,
                                    306,
                                    28
                                ], Presentation), fn = __recognizer430094732.logProbe([
                                    306,
                                    29,
                                    306,
                                    45
                                ], obj.getWeaponHandler);
                            return fn.apply(obj, arguments);
                        }.bind(this)(), fn = __recognizer430094732.logProbe([
                            306,
                            48,
                            306,
                            60
                        ], obj.getNewEnemie);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                __recognizer430094732.logProbe([
                    308,
                    16,
                    308,
                    61
                ], __recognizer430094732.logProbe([
                    308,
                    16,
                    308,
                    28
                ], createBullet)(__recognizer430094732.logProbe([
                    308,
                    29,
                    308,
                    30
                ], x), __recognizer430094732.logProbe([
                    308,
                    32,
                    308,
                    33
                ], y), __recognizer430094732.logProbe([
                    308,
                    50,
                    308,
                    51
                ], __recognizer430094732.logProbe([
                    308,
                    35,
                    308,
                    49
                ], currentEnemies)[i]), __recognizer430094732.logProbe([
                    308,
                    53,
                    308,
                    60
                ], pImages)));
            }
        }
        function setEnemieWeapon(pWeapon) {
            __recognizer430094732.logEntry([
                312,
                17,
                312,
                32
            ], arguments);
            (function () {
                var obj = __recognizer430094732.logProbe([
                        313,
                        12,
                        313,
                        26
                    ], currentEnemies), fn = __recognizer430094732.logProbe([
                        313,
                        27,
                        313,
                        31
                    ], obj.push);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer430094732.logProbe([
                313,
                32,
                313,
                39
            ], pWeapon)));
        }
        function createWeapon(pWeapon) {
            __recognizer430094732.logEntry([
                316,
                17,
                316,
                29
            ], arguments);
            var period = 2000;
            var tmpX = 25;
            var group = new (__recognizer430094732.logProbe([
                    319,
                    36,
                    319,
                    41
                ], __recognizer430094732.logProbe([
                    319,
                    28,
                    319,
                    35
                ], Kinetic).Group))();
            var posY = 380 + function () {
                    var obj = __recognizer430094732.logProbe([
                            320,
                            29,
                            320,
                            32
                        ], car), fn = __recognizer430094732.logProbe([
                            320,
                            33,
                            320,
                            37
                        ], obj.getY);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            for (var i = 0; __recognizer430094732.logProbe([
                    322,
                    27,
                    322,
                    28
                ], i) < function () {
                    var obj = __recognizer430094732.logProbe([
                            322,
                            31,
                            322,
                            44
                        ], currentWeapon), fn = __recognizer430094732.logProbe([
                            322,
                            45,
                            322,
                            58
                        ], obj.getLaneNumber);
                    return fn.apply(obj, arguments);
                }.bind(this)(); __recognizer430094732.logProbe([
                    322,
                    62,
                    322,
                    63
                ], i)++) {
                (function () {
                    __recognizer430094732.logEntry([
                        323,
                        17,
                        323,
                        25
                    ], arguments);
                    if (__recognizer430094732.logProbe([
                            324,
                            23,
                            324,
                            24
                        ], i) == 2)
                        tmpX -= __recognizer430094732.logProbe([
                            325,
                            32,
                            325,
                            36
                        ], tmpX) + 75;
                    var x = function () {
                            var obj = __recognizer430094732.logProbe([
                                    326,
                                    28,
                                    326,
                                    31
                                ], car), fn = __recognizer430094732.logProbe([
                                    326,
                                    32,
                                    326,
                                    36
                                ], obj.getX);
                            return fn.apply(obj, arguments);
                        }.bind(this)() + __recognizer430094732.logProbe([
                            326,
                            41,
                            326,
                            45
                        ], tmpX);
                    if (__recognizer430094732.logProbe([
                            327,
                            23,
                            327,
                            24
                        ], x) < 675 && __recognizer430094732.logProbe([
                            327,
                            34,
                            327,
                            35
                        ], x) > 75) {
                        var weapon = new (__recognizer430094732.logProbe([
                                328,
                                49,
                                328,
                                63
                            ], __recognizer430094732.logProbe([
                                328,
                                41,
                                328,
                                48
                            ], Kinetic).RegularPolygon))({
                                x: x,
                                y: posY,
                                fill: function () {
                                    var obj = __recognizer430094732.logProbe([
                                            331,
                                            34,
                                            331,
                                            47
                                        ], currentWeapon), fn = __recognizer430094732.logProbe([
                                            331,
                                            48,
                                            331,
                                            56
                                        ], obj.getColor);
                                    return fn.apply(obj, arguments);
                                }.bind(this)(),
                                sides: function () {
                                    var obj = __recognizer430094732.logProbe([
                                            332,
                                            35,
                                            332,
                                            48
                                        ], currentWeapon), fn = __recognizer430094732.logProbe([
                                            332,
                                            49,
                                            332,
                                            63
                                        ], obj.getShapeWeapon);
                                    return fn.apply(obj, arguments);
                                }.bind(this)(),
                                radius: 20,
                                stroke: '#000',
                                strokeWidth: function () {
                                    var obj = __recognizer430094732.logProbe([
                                            335,
                                            41,
                                            335,
                                            54
                                        ], currentWeapon), fn = __recognizer430094732.logProbe([
                                            335,
                                            55,
                                            335,
                                            67
                                        ], obj.getThickness);
                                    return fn.apply(obj, arguments);
                                }.bind(this)()
                            });
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    337,
                                    24,
                                    337,
                                    29
                                ], group), fn = __recognizer430094732.logProbe([
                                    337,
                                    30,
                                    337,
                                    33
                                ], obj.add);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer430094732.logProbe([
                            337,
                            34,
                            337,
                            40
                        ], weapon)));
                    }
                    tmpX += 100;
                }());
            }
            (function () {
                var obj = __recognizer430094732.logProbe([
                        342,
                        12,
                        342,
                        23
                    ], weaponLayer), fn = __recognizer430094732.logProbe([
                        342,
                        24,
                        342,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer430094732.logProbe([
                342,
                28,
                342,
                33
            ], group)));
            (function () {
                var obj = __recognizer430094732.logProbe([
                        343,
                        12,
                        343,
                        23
                    ], weaponLayer), fn = __recognizer430094732.logProbe([
                        343,
                        24,
                        343,
                        28
                    ], obj.draw);
                return fn.apply(obj, arguments);
            }.bind(this)());
            var enemyChildren = function () {
                    var obj = __recognizer430094732.logProbe([
                            346,
                            32,
                            346,
                            42
                        ], enemyLayer), fn = __recognizer430094732.logProbe([
                            346,
                            43,
                            346,
                            54
                        ], obj.getChildren);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            var childrenGroup = function () {
                    var obj = __recognizer430094732.logProbe([
                            347,
                            32,
                            347,
                            43
                        ], weaponLayer), fn = __recognizer430094732.logProbe([
                            347,
                            44,
                            347,
                            55
                        ], obj.getChildren);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            var weaponChildren;
            var anim = new (__recognizer430094732.logProbe([
                    350,
                    35,
                    350,
                    44
                ], __recognizer430094732.logProbe([
                    350,
                    27,
                    350,
                    34
                ], Kinetic).Animation))(function (frame) {
                    __recognizer430094732.logEntry([
                        350,
                        45,
                        350,
                        53
                    ], arguments);
                    if (__recognizer430094732.logProbe([
                            351,
                            19,
                            351,
                            23
                        ], posY) > 0)
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    352,
                                    20,
                                    352,
                                    25
                                ], group), fn = __recognizer430094732.logProbe([
                                    352,
                                    26,
                                    352,
                                    30
                                ], obj.setY);
                            return fn.apply(obj, arguments);
                        }.bind(this)(-__recognizer430094732.logProbe([
                            352,
                            33,
                            352,
                            37
                        ], posY) * __recognizer430094732.logProbe([
                            352,
                            46,
                            352,
                            50
                        ], __recognizer430094732.logProbe([
                            352,
                            40,
                            352,
                            45
                        ], frame).time) * 4 / __recognizer430094732.logProbe([
                            352,
                            57,
                            352,
                            63
                        ], period)));
                    else
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    354,
                                    20,
                                    354,
                                    25
                                ], group), fn = __recognizer430094732.logProbe([
                                    354,
                                    26,
                                    354,
                                    30
                                ], obj.setY);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer430094732.logProbe([
                            354,
                            32,
                            354,
                            36
                        ], posY) * __recognizer430094732.logProbe([
                            354,
                            45,
                            354,
                            49
                        ], __recognizer430094732.logProbe([
                            354,
                            39,
                            354,
                            44
                        ], frame).time) * 4 / __recognizer430094732.logProbe([
                            354,
                            56,
                            354,
                            62
                        ], period)));
                    if (__recognizer430094732.logProbe([
                            355,
                            25,
                            355,
                            29
                        ], __recognizer430094732.logProbe([
                            355,
                            19,
                            355,
                            24
                        ], frame).time) >= 2000) {
                        var children = function () {
                                var obj = __recognizer430094732.logProbe([
                                        356,
                                        35,
                                        356,
                                        46
                                    ], weaponLayer), fn = __recognizer430094732.logProbe([
                                        356,
                                        47,
                                        356,
                                        58
                                    ], obj.getChildren);
                                return fn.apply(obj, arguments);
                            }.bind(this)();
                        if (__recognizer430094732.logProbe([
                                357,
                                32,
                                357,
                                38
                            ], __recognizer430094732.logProbe([
                                357,
                                23,
                                357,
                                31
                            ], children).length) > 0) {
                            (function () {
                                var obj = __recognizer430094732.logProbe([
                                        358,
                                        33,
                                        358,
                                        34
                                    ], __recognizer430094732.logProbe([
                                        358,
                                        24,
                                        358,
                                        32
                                    ], children)[0]), fn = __recognizer430094732.logProbe([
                                        358,
                                        36,
                                        358,
                                        42
                                    ], obj.remove);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            (function () {
                                var obj = __recognizer430094732.logProbe([
                                        359,
                                        24,
                                        359,
                                        35
                                    ], weaponLayer), fn = __recognizer430094732.logProbe([
                                        359,
                                        36,
                                        359,
                                        40
                                    ], obj.draw);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                        }
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    361,
                                    20,
                                    361,
                                    24
                                ], anim), fn = __recognizer430094732.logProbe([
                                    361,
                                    25,
                                    361,
                                    29
                                ], obj.stop);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                    }
                    for (var j = 0; __recognizer430094732.logProbe([
                            364,
                            31,
                            364,
                            32
                        ], j) < __recognizer430094732.logProbe([
                            364,
                            49,
                            364,
                            55
                        ], __recognizer430094732.logProbe([
                            364,
                            35,
                            364,
                            48
                        ], enemyChildren).length); __recognizer430094732.logProbe([
                            364,
                            57,
                            364,
                            58
                        ], j)++) {
                        for (var k = 0; __recognizer430094732.logProbe([
                                365,
                                35,
                                365,
                                36
                            ], k) < __recognizer430094732.logProbe([
                                365,
                                53,
                                365,
                                59
                            ], __recognizer430094732.logProbe([
                                365,
                                39,
                                365,
                                52
                            ], childrenGroup).length); __recognizer430094732.logProbe([
                                365,
                                61,
                                365,
                                62
                            ], k)++) {
                            weaponChildren = function () {
                                var obj = __recognizer430094732.logProbe([
                                        366,
                                        69,
                                        366,
                                        70
                                    ], function () {
                                        var obj = __recognizer430094732.logProbe([
                                                366,
                                                41,
                                                366,
                                                54
                                            ], childrenGroup), fn = __recognizer430094732.logProbe([
                                                366,
                                                55,
                                                366,
                                                66
                                            ], obj.getChildren);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)()[k]), fn = __recognizer430094732.logProbe([
                                        366,
                                        72,
                                        366,
                                        83
                                    ], obj.getChildren);
                                return fn.apply(obj, arguments);
                            }.bind(this)();
                            for (var i = 0; __recognizer430094732.logProbe([
                                    367,
                                    39,
                                    367,
                                    40
                                ], i) < __recognizer430094732.logProbe([
                                    367,
                                    58,
                                    367,
                                    64
                                ], __recognizer430094732.logProbe([
                                    367,
                                    43,
                                    367,
                                    57
                                ], weaponChildren).length); __recognizer430094732.logProbe([
                                    367,
                                    66,
                                    367,
                                    67
                                ], i)++) {
                                if (__recognizer430094732.logProbe([
                                        368,
                                        45,
                                        368,
                                        46
                                    ], __recognizer430094732.logProbe([
                                        368,
                                        31,
                                        368,
                                        44
                                    ], enemyChildren)[j]) == __recognizer430094732.logProbe([
                                        368,
                                        51,
                                        368,
                                        60
                                    ], undefined))
                                    break;
                                var enemyX = function () {
                                        var obj = __recognizer430094732.logProbe([
                                                370,
                                                55,
                                                370,
                                                56
                                            ], __recognizer430094732.logProbe([
                                                370,
                                                41,
                                                370,
                                                54
                                            ], enemyChildren)[j]), fn = __recognizer430094732.logProbe([
                                                370,
                                                58,
                                                370,
                                                62
                                            ], obj.getX);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)();
                                var weaponX = function () {
                                        var obj = __recognizer430094732.logProbe([
                                                371,
                                                57,
                                                371,
                                                58
                                            ], __recognizer430094732.logProbe([
                                                371,
                                                42,
                                                371,
                                                56
                                            ], weaponChildren)[i]), fn = __recognizer430094732.logProbe([
                                                371,
                                                60,
                                                371,
                                                64
                                            ], obj.getX);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)();
                                if (__recognizer430094732.logProbe([
                                        372,
                                        31,
                                        372,
                                        35
                                    ], posY) + function () {
                                        var obj = __recognizer430094732.logProbe([
                                                372,
                                                52,
                                                372,
                                                53
                                            ], __recognizer430094732.logProbe([
                                                372,
                                                38,
                                                372,
                                                51
                                            ], childrenGroup)[k]), fn = __recognizer430094732.logProbe([
                                                372,
                                                55,
                                                372,
                                                59
                                            ], obj.getY);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)() <= function () {
                                        var obj = __recognizer430094732.logProbe([
                                                372,
                                                79,
                                                372,
                                                80
                                            ], __recognizer430094732.logProbe([
                                                372,
                                                65,
                                                372,
                                                78
                                            ], enemyChildren)[j]), fn = __recognizer430094732.logProbe([
                                                372,
                                                82,
                                                372,
                                                86
                                            ], obj.getY);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)() && __recognizer430094732.logProbe([
                                        373,
                                        34,
                                        373,
                                        41
                                    ], weaponX) == __recognizer430094732.logProbe([
                                        373,
                                        45,
                                        373,
                                        51
                                    ], enemyX)) {
                                    (function () {
                                        var obj = __recognizer430094732.logProbe([
                                                374,
                                                46,
                                                374,
                                                47
                                            ], __recognizer430094732.logProbe([
                                                374,
                                                32,
                                                374,
                                                45
                                            ], enemyChildren)[j]), fn = __recognizer430094732.logProbe([
                                                374,
                                                49,
                                                374,
                                                55
                                            ], obj.remove);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    (function () {
                                        var obj = __recognizer430094732.logProbe([
                                                375,
                                                32,
                                                375,
                                                42
                                            ], enemyLayer), fn = __recognizer430094732.logProbe([
                                                375,
                                                43,
                                                375,
                                                47
                                            ], obj.draw);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    (function () {
                                        var obj = __recognizer430094732.logProbe([
                                                376,
                                                47,
                                                376,
                                                48
                                            ], __recognizer430094732.logProbe([
                                                376,
                                                32,
                                                376,
                                                46
                                            ], weaponChildren)[i]), fn = __recognizer430094732.logProbe([
                                                376,
                                                50,
                                                376,
                                                56
                                            ], obj.remove);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    (function () {
                                        var obj = __recognizer430094732.logProbe([
                                                377,
                                                32,
                                                377,
                                                43
                                            ], weaponLayer), fn = __recognizer430094732.logProbe([
                                                377,
                                                44,
                                                377,
                                                48
                                            ], obj.draw);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    if (__recognizer430094732.logProbe([
                                            378,
                                            49,
                                            378,
                                            55
                                        ], __recognizer430094732.logProbe([
                                            378,
                                            35,
                                            378,
                                            48
                                        ], enemyChildren).length) == 0) {
                                        (function () {
                                            var obj = __recognizer430094732.logProbe([
                                                    379,
                                                    36,
                                                    379,
                                                    47
                                                ], weaponLayer), fn = __recognizer430094732.logProbe([
                                                    379,
                                                    48,
                                                    379,
                                                    62
                                                ], obj.removeChildren);
                                            return fn.apply(obj, arguments);
                                        }.bind(this)());
                                        (function () {
                                            var obj = __recognizer430094732.logProbe([
                                                    380,
                                                    36,
                                                    380,
                                                    50
                                                ], weaponChildren), fn = __recognizer430094732.logProbe([
                                                    380,
                                                    51,
                                                    380,
                                                    55
                                                ], obj.draw);
                                            return fn.apply(obj, arguments);
                                        }.bind(this)());
                                    }
                                    var bulletSound = new (__recognizer430094732.logProbe([
                                            382,
                                            54,
                                            382,
                                            59
                                        ], Audio))('audio/smash.wav');
                                    (function () {
                                        var obj = __recognizer430094732.logProbe([
                                                383,
                                                32,
                                                383,
                                                43
                                            ], bulletSound), fn = __recognizer430094732.logProbe([
                                                383,
                                                44,
                                                383,
                                                48
                                            ], obj.play);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    break;
                                }
                            }
                        }
                    }
                }, __recognizer430094732.logProbe([
                    390,
                    15,
                    390,
                    26
                ], weaponLayer));
            (function () {
                var obj = __recognizer430094732.logProbe([
                        392,
                        12,
                        392,
                        16
                    ], anim), fn = __recognizer430094732.logProbe([
                        392,
                        17,
                        392,
                        22
                    ], obj.start);
                return fn.apply(obj, arguments);
            }.bind(this)());
        }
        function createBullet(pPosX, pPosY, pObject, pImages) {
            __recognizer430094732.logEntry([
                395,
                17,
                395,
                29
            ], arguments);
            var period = 3000;
            var bullet = new (__recognizer430094732.logProbe([
                    398,
                    37,
                    398,
                    51
                ], __recognizer430094732.logProbe([
                    398,
                    29,
                    398,
                    36
                ], Kinetic).RegularPolygon))({
                    x: pPosX,
                    y: pPosY,
                    fill: function () {
                        var obj = __recognizer430094732.logProbe([
                                401,
                                22,
                                401,
                                29
                            ], pObject), fn = __recognizer430094732.logProbe([
                                401,
                                30,
                                401,
                                38
                            ], obj.getColor);
                        return fn.apply(obj, arguments);
                    }.bind(this)(),
                    sides: function () {
                        var obj = __recognizer430094732.logProbe([
                                402,
                                23,
                                402,
                                30
                            ], pObject), fn = __recognizer430094732.logProbe([
                                402,
                                31,
                                402,
                                45
                            ], obj.getShapeWeapon);
                        return fn.apply(obj, arguments);
                    }.bind(this)(),
                    radius: 20,
                    stroke: '#000',
                    strokeWidth: function () {
                        var obj = __recognizer430094732.logProbe([
                                405,
                                29,
                                405,
                                36
                            ], pObject), fn = __recognizer430094732.logProbe([
                                405,
                                37,
                                405,
                                49
                            ], obj.getThickness);
                        return fn.apply(obj, arguments);
                    }.bind(this)()
                });
            (function () {
                var obj = __recognizer430094732.logProbe([
                        408,
                        12,
                        408,
                        23
                    ], bulletLayer), fn = __recognizer430094732.logProbe([
                        408,
                        24,
                        408,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer430094732.logProbe([
                408,
                28,
                408,
                34
            ], bullet)));
            (function () {
                var obj = __recognizer430094732.logProbe([
                        409,
                        12,
                        409,
                        23
                    ], bulletLayer), fn = __recognizer430094732.logProbe([
                        409,
                        24,
                        409,
                        28
                    ], obj.draw);
                return fn.apply(obj, arguments);
            }.bind(this)());
            var childrenBullets = function () {
                    var obj = __recognizer430094732.logProbe([
                            411,
                            34,
                            411,
                            45
                        ], bulletLayer), fn = __recognizer430094732.logProbe([
                            411,
                            46,
                            411,
                            57
                        ], obj.getChildren);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            var childrenGroup = function () {
                    var obj = __recognizer430094732.logProbe([
                            412,
                            32,
                            412,
                            43
                        ], weaponLayer), fn = __recognizer430094732.logProbe([
                            412,
                            44,
                            412,
                            55
                        ], obj.getChildren);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            var weaponChildren;
            var anim = new (__recognizer430094732.logProbe([
                    415,
                    35,
                    415,
                    44
                ], __recognizer430094732.logProbe([
                    415,
                    27,
                    415,
                    34
                ], Kinetic).Animation))(function (frame) {
                    __recognizer430094732.logEntry([
                        415,
                        45,
                        415,
                        53
                    ], arguments);
                    if (__recognizer430094732.logProbe([
                            416,
                            19,
                            416,
                            24
                        ], pPosY) < 0)
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    417,
                                    20,
                                    417,
                                    26
                                ], bullet), fn = __recognizer430094732.logProbe([
                                    417,
                                    27,
                                    417,
                                    31
                                ], obj.setY);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer430094732.logProbe([
                            417,
                            32,
                            417,
                            37
                        ], pPosY) - __recognizer430094732.logProbe([
                            417,
                            41,
                            417,
                            46
                        ], pPosY) * __recognizer430094732.logProbe([
                            417,
                            55,
                            417,
                            59
                        ], __recognizer430094732.logProbe([
                            417,
                            49,
                            417,
                            54
                        ], frame).time) * 4 / __recognizer430094732.logProbe([
                            417,
                            66,
                            417,
                            72
                        ], period)));
                    else
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    419,
                                    20,
                                    419,
                                    26
                                ], bullet), fn = __recognizer430094732.logProbe([
                                    419,
                                    27,
                                    419,
                                    31
                                ], obj.setY);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer430094732.logProbe([
                            419,
                            32,
                            419,
                            37
                        ], pPosY) + __recognizer430094732.logProbe([
                            419,
                            41,
                            419,
                            46
                        ], pPosY) * __recognizer430094732.logProbe([
                            419,
                            55,
                            419,
                            59
                        ], __recognizer430094732.logProbe([
                            419,
                            49,
                            419,
                            54
                        ], frame).time) * 4 / __recognizer430094732.logProbe([
                            419,
                            66,
                            419,
                            72
                        ], period)));
                    for (var j = 0; __recognizer430094732.logProbe([
                            429,
                            31,
                            429,
                            32
                        ], j) < __recognizer430094732.logProbe([
                            429,
                            49,
                            429,
                            55
                        ], __recognizer430094732.logProbe([
                            429,
                            35,
                            429,
                            48
                        ], childrenGroup).length); __recognizer430094732.logProbe([
                            429,
                            57,
                            429,
                            58
                        ], j)++) {
                        weaponChildren = function () {
                            var obj = __recognizer430094732.logProbe([
                                    430,
                                    51,
                                    430,
                                    52
                                ], __recognizer430094732.logProbe([
                                    430,
                                    37,
                                    430,
                                    50
                                ], childrenGroup)[j]), fn = __recognizer430094732.logProbe([
                                    430,
                                    54,
                                    430,
                                    65
                                ], obj.getChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)();
                        for (var k = 0; __recognizer430094732.logProbe([
                                431,
                                35,
                                431,
                                36
                            ], k) < __recognizer430094732.logProbe([
                                431,
                                54,
                                431,
                                60
                            ], __recognizer430094732.logProbe([
                                431,
                                39,
                                431,
                                53
                            ], weaponChildren).length); __recognizer430094732.logProbe([
                                431,
                                62,
                                431,
                                63
                            ], k)++) {
                            for (var i = 0; __recognizer430094732.logProbe([
                                    432,
                                    39,
                                    432,
                                    40
                                ], i) < __recognizer430094732.logProbe([
                                    432,
                                    59,
                                    432,
                                    65
                                ], __recognizer430094732.logProbe([
                                    432,
                                    43,
                                    432,
                                    58
                                ], childrenBullets).length); __recognizer430094732.logProbe([
                                    432,
                                    67,
                                    432,
                                    68
                                ], i)++) {
                                if (__recognizer430094732.logProbe([
                                        434,
                                        46,
                                        434,
                                        47
                                    ], __recognizer430094732.logProbe([
                                        434,
                                        31,
                                        434,
                                        45
                                    ], weaponChildren)[k]) == __recognizer430094732.logProbe([
                                        434,
                                        52,
                                        434,
                                        61
                                    ], undefined))
                                    break;
                                if (function () {
                                        var obj = __recognizer430094732.logProbe([
                                                436,
                                                46,
                                                436,
                                                47
                                            ], __recognizer430094732.logProbe([
                                                436,
                                                31,
                                                436,
                                                45
                                            ], weaponChildren)[k]), fn = __recognizer430094732.logProbe([
                                                436,
                                                49,
                                                436,
                                                53
                                            ], obj.getX);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)() == function () {
                                        var obj = __recognizer430094732.logProbe([
                                                436,
                                                75,
                                                436,
                                                76
                                            ], __recognizer430094732.logProbe([
                                                436,
                                                59,
                                                436,
                                                74
                                            ], childrenBullets)[i]), fn = __recognizer430094732.logProbe([
                                                436,
                                                78,
                                                436,
                                                82
                                            ], obj.getX);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)() && function () {
                                        var obj = __recognizer430094732.logProbe([
                                                437,
                                                51,
                                                437,
                                                52
                                            ], __recognizer430094732.logProbe([
                                                437,
                                                35,
                                                437,
                                                50
                                            ], childrenBullets)[i]), fn = __recognizer430094732.logProbe([
                                                437,
                                                54,
                                                437,
                                                58
                                            ], obj.getY);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)() <= function () {
                                        var obj = __recognizer430094732.logProbe([
                                                437,
                                                79,
                                                437,
                                                80
                                            ], __recognizer430094732.logProbe([
                                                437,
                                                64,
                                                437,
                                                78
                                            ], weaponChildren)[k]), fn = __recognizer430094732.logProbe([
                                                437,
                                                82,
                                                437,
                                                86
                                            ], obj.getY);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)()) {
                                    (function () {
                                        var obj = __recognizer430094732.logProbe([
                                                438,
                                                48,
                                                438,
                                                49
                                            ], __recognizer430094732.logProbe([
                                                438,
                                                32,
                                                438,
                                                47
                                            ], childrenBullets)[i]), fn = __recognizer430094732.logProbe([
                                                438,
                                                51,
                                                438,
                                                57
                                            ], obj.remove);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    (function () {
                                        var obj = __recognizer430094732.logProbe([
                                                439,
                                                32,
                                                439,
                                                43
                                            ], bulletLayer), fn = __recognizer430094732.logProbe([
                                                439,
                                                44,
                                                439,
                                                48
                                            ], obj.draw);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    (function () {
                                        var obj = __recognizer430094732.logProbe([
                                                440,
                                                47,
                                                440,
                                                48
                                            ], __recognizer430094732.logProbe([
                                                440,
                                                32,
                                                440,
                                                46
                                            ], weaponChildren)[k]), fn = __recognizer430094732.logProbe([
                                                440,
                                                50,
                                                440,
                                                56
                                            ], obj.remove);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    (function () {
                                        var obj = __recognizer430094732.logProbe([
                                                441,
                                                32,
                                                441,
                                                43
                                            ], weaponLayer), fn = __recognizer430094732.logProbe([
                                                441,
                                                44,
                                                441,
                                                48
                                            ], obj.draw);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                }
                            }
                        }
                    }
                    for (var i = 0; __recognizer430094732.logProbe([
                            447,
                            31,
                            447,
                            32
                        ], i) < __recognizer430094732.logProbe([
                            447,
                            51,
                            447,
                            57
                        ], __recognizer430094732.logProbe([
                            447,
                            35,
                            447,
                            50
                        ], childrenBullets).length); __recognizer430094732.logProbe([
                            447,
                            59,
                            447,
                            60
                        ], i)++) {
                        var yCalculation = 405 + function () {
                                var obj = __recognizer430094732.logProbe([
                                        448,
                                        45,
                                        448,
                                        48
                                    ], car), fn = __recognizer430094732.logProbe([
                                        448,
                                        49,
                                        448,
                                        53
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)() - function () {
                                var obj = __recognizer430094732.logProbe([
                                        448,
                                        74,
                                        448,
                                        75
                                    ], __recognizer430094732.logProbe([
                                        448,
                                        58,
                                        448,
                                        73
                                    ], childrenBullets)[i]), fn = __recognizer430094732.logProbe([
                                        448,
                                        77,
                                        448,
                                        81
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)();
                        if (function () {
                                var obj = __recognizer430094732.logProbe([
                                        450,
                                        39,
                                        450,
                                        40
                                    ], __recognizer430094732.logProbe([
                                        450,
                                        23,
                                        450,
                                        38
                                    ], childrenBullets)[i]), fn = __recognizer430094732.logProbe([
                                        450,
                                        42,
                                        450,
                                        46
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() - 25 == function () {
                                var obj = __recognizer430094732.logProbe([
                                        450,
                                        57,
                                        450,
                                        60
                                    ], car), fn = __recognizer430094732.logProbe([
                                        450,
                                        61,
                                        450,
                                        65
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() && __recognizer430094732.logProbe([
                                451,
                                26,
                                451,
                                38
                            ], yCalculation) <= 10 && __recognizer430094732.logProbe([
                                451,
                                48,
                                451,
                                60
                            ], yCalculation) >= -160) {
                            if (__recognizer430094732.logProbe([
                                    452,
                                    27,
                                    452,
                                    63
                                ], __recognizer430094732.logProbe([
                                    452,
                                    27,
                                    452,
                                    37
                                ], checkLifes)(__recognizer430094732.logProbe([
                                    452,
                                    38,
                                    452,
                                    42
                                ], anim), __recognizer430094732.logProbe([
                                    452,
                                    44,
                                    452,
                                    59
                                ], childrenBullets), __recognizer430094732.logProbe([
                                    452,
                                    61,
                                    452,
                                    62
                                ], i)))) {
                                (function () {
                                    var obj = __recognizer430094732.logProbe([
                                            453,
                                            28,
                                            453,
                                            39
                                        ], bulletLayer), fn = __recognizer430094732.logProbe([
                                            453,
                                            40,
                                            453,
                                            44
                                        ], obj.draw);
                                    return fn.apply(obj, arguments);
                                }.bind(this)());
                                break;
                            }
                        }
                    }
                }, __recognizer430094732.logProbe([
                    458,
                    15,
                    458,
                    26
                ], bulletLayer));
            (function () {
                var obj = __recognizer430094732.logProbe([
                        460,
                        12,
                        460,
                        16
                    ], anim), fn = __recognizer430094732.logProbe([
                        460,
                        17,
                        460,
                        22
                    ], obj.start);
                return fn.apply(obj, arguments);
            }.bind(this)());
        }
        function createBox(pPosX, pPosY, images) {
            __recognizer430094732.logEntry([
                463,
                17,
                463,
                26
            ], arguments);
            var box = new (__recognizer430094732.logProbe([
                    464,
                    34,
                    464,
                    38
                ], __recognizer430094732.logProbe([
                    464,
                    26,
                    464,
                    33
                ], Kinetic).Rect))({
                    x: pPosX,
                    y: pPosY,
                    fillPatternImage: __recognizer430094732.logProbe([
                        467,
                        41,
                        467,
                        44
                    ], __recognizer430094732.logProbe([
                        467,
                        34,
                        467,
                        40
                    ], images).box),
                    width: 64,
                    height: 64
                });
            (function () {
                var obj = __recognizer430094732.logProbe([
                        472,
                        12,
                        472,
                        20
                    ], boxLayer), fn = __recognizer430094732.logProbe([
                        472,
                        21,
                        472,
                        24
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer430094732.logProbe([
                472,
                25,
                472,
                28
            ], box)));
            (function () {
                var obj = __recognizer430094732.logProbe([
                        473,
                        12,
                        473,
                        20
                    ], boxLayer), fn = __recognizer430094732.logProbe([
                        473,
                        21,
                        473,
                        25
                    ], obj.draw);
                return fn.apply(obj, arguments);
            }.bind(this)());
        }
        function arrowKeys(images) {
            __recognizer430094732.logEntry([
                476,
                17,
                476,
                26
            ], arguments);
            (function () {
                var obj = __recognizer430094732.logProbe([
                        477,
                        12,
                        477,
                        23
                    ], __recognizer430094732.logProbe([
                        477,
                        12,
                        477,
                        13
                    ], $)(__recognizer430094732.logProbe([
                        477,
                        14,
                        477,
                        22
                    ], document))), fn = __recognizer430094732.logProbe([
                        477,
                        24,
                        477,
                        31
                    ], obj.keydown);
                return fn.apply(obj, arguments);
            }.bind(this)(function (e) {
                __recognizer430094732.logEntry([
                    477,
                    32,
                    477,
                    40
                ], arguments);
                if (__recognizer430094732.logProbe([
                        478,
                        22,
                        478,
                        29
                    ], __recognizer430094732.logProbe([
                        478,
                        20,
                        478,
                        21
                    ], e).keyCode) == 37) {
                    if (function () {
                            var obj = __recognizer430094732.logProbe([
                                    479,
                                    23,
                                    479,
                                    26
                                ], car), fn = __recognizer430094732.logProbe([
                                    479,
                                    27,
                                    479,
                                    31
                                ], obj.getX);
                            return fn.apply(obj, arguments);
                        }.bind(this)() - 100 >= 150) {
                        var xCalculation = function () {
                                var obj = __recognizer430094732.logProbe([
                                        480,
                                        43,
                                        480,
                                        50
                                    ], vehicle), fn = __recognizer430094732.logProbe([
                                        480,
                                        51,
                                        480,
                                        63
                                    ], obj.getPositionX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() - 100;
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    481,
                                    24,
                                    481,
                                    27
                                ], car), fn = __recognizer430094732.logProbe([
                                    481,
                                    28,
                                    481,
                                    32
                                ], obj.setX);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer430094732.logProbe([
                            481,
                            33,
                            481,
                            45
                        ], xCalculation)));
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    482,
                                    24,
                                    482,
                                    31
                                ], vehicle), fn = __recognizer430094732.logProbe([
                                    482,
                                    32,
                                    482,
                                    44
                                ], obj.setPositionX);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer430094732.logProbe([
                            482,
                            45,
                            482,
                            57
                        ], xCalculation)));
                    }
                    return false;
                } else if (__recognizer430094732.logProbe([
                        485,
                        28,
                        485,
                        35
                    ], __recognizer430094732.logProbe([
                        485,
                        26,
                        485,
                        27
                    ], e).keyCode) == 39) {
                    if (function () {
                            var obj = __recognizer430094732.logProbe([
                                    486,
                                    23,
                                    486,
                                    26
                                ], car), fn = __recognizer430094732.logProbe([
                                    486,
                                    27,
                                    486,
                                    31
                                ], obj.getX);
                            return fn.apply(obj, arguments);
                        }.bind(this)() + 100 <= 550) {
                        var xCalculation = function () {
                                var obj = __recognizer430094732.logProbe([
                                        487,
                                        43,
                                        487,
                                        50
                                    ], vehicle), fn = __recognizer430094732.logProbe([
                                        487,
                                        51,
                                        487,
                                        63
                                    ], obj.getPositionX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() + 100;
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    488,
                                    24,
                                    488,
                                    27
                                ], car), fn = __recognizer430094732.logProbe([
                                    488,
                                    28,
                                    488,
                                    32
                                ], obj.setX);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer430094732.logProbe([
                            488,
                            33,
                            488,
                            45
                        ], xCalculation)));
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    489,
                                    24,
                                    489,
                                    31
                                ], vehicle), fn = __recognizer430094732.logProbe([
                                    489,
                                    32,
                                    489,
                                    44
                                ], obj.setPositionX);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer430094732.logProbe([
                            489,
                            45,
                            489,
                            57
                        ], xCalculation)));
                    }
                    return false;
                } else if (__recognizer430094732.logProbe([
                        492,
                        28,
                        492,
                        35
                    ], __recognizer430094732.logProbe([
                        492,
                        26,
                        492,
                        27
                    ], e).keyCode) == 32) {
                    var y = function () {
                            var obj = __recognizer430094732.logProbe([
                                    493,
                                    28,
                                    493,
                                    35
                                ], vehicle), fn = __recognizer430094732.logProbe([
                                    493,
                                    36,
                                    493,
                                    48
                                ], obj.getPositionY);
                            return fn.apply(obj, arguments);
                        }.bind(this)();
                    if (!__recognizer430094732.logProbe([
                            494,
                            24,
                            494,
                            32
                        ], gameOver) && __recognizer430094732.logProbe([
                            494,
                            36,
                            494,
                            37
                        ], y) + 380 >= 60 && function () {
                            var obj = __recognizer430094732.logProbe([
                                    494,
                                    53,
                                    494,
                                    60
                                ], vehicle), fn = __recognizer430094732.logProbe([
                                    494,
                                    61,
                                    494,
                                    77
                                ], obj.getNumberOfShots);
                            return fn.apply(obj, arguments);
                        }.bind(this)() != 0) {
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    495,
                                    24,
                                    495,
                                    31
                                ], vehicle), fn = __recognizer430094732.logProbe([
                                    495,
                                    32,
                                    495,
                                    48
                                ], obj.setNumberOfShots);
                            return fn.apply(obj, arguments);
                        }.bind(this)(function () {
                            var obj = __recognizer430094732.logProbe([
                                    495,
                                    49,
                                    495,
                                    56
                                ], vehicle), fn = __recognizer430094732.logProbe([
                                    495,
                                    57,
                                    495,
                                    73
                                ], obj.getNumberOfShots);
                            return fn.apply(obj, arguments);
                        }.bind(this)() - 1));
                        var x = function () {
                                var obj = __recognizer430094732.logProbe([
                                        496,
                                        32,
                                        496,
                                        39
                                    ], vehicle), fn = __recognizer430094732.logProbe([
                                        496,
                                        40,
                                        496,
                                        52
                                    ], obj.getPositionX);
                                return fn.apply(obj, arguments);
                            }.bind(this)();
                        __recognizer430094732.logProbe([
                            497,
                            24,
                            497,
                            51
                        ], __recognizer430094732.logProbe([
                            497,
                            24,
                            497,
                            36
                        ], createWeapon)(__recognizer430094732.logProbe([
                            497,
                            37,
                            497,
                            50
                        ], currentWeapon)));
                        var bulletSound = new (__recognizer430094732.logProbe([
                                498,
                                46,
                                498,
                                51
                            ], Audio))('audio/shot.wav');
                        (function () {
                            var obj = __recognizer430094732.logProbe([
                                    499,
                                    24,
                                    499,
                                    35
                                ], bulletSound), fn = __recognizer430094732.logProbe([
                                    499,
                                    36,
                                    499,
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
            __recognizer430094732.logEntry([
                506,
                17,
                506,
                29
            ], arguments);
            return function () {
                var obj = __recognizer430094732.logProbe([
                        507,
                        19,
                        507,
                        23
                    ], Math), fn = __recognizer430094732.logProbe([
                        507,
                        24,
                        507,
                        29
                    ], obj.floor);
                return fn.apply(obj, arguments);
            }.bind(this)(function () {
                var obj = __recognizer430094732.logProbe([
                        507,
                        30,
                        507,
                        34
                    ], Math), fn = __recognizer430094732.logProbe([
                        507,
                        35,
                        507,
                        41
                    ], obj.random);
                return fn.apply(obj, arguments);
            }.bind(this)() * (__recognizer430094732.logProbe([
                507,
                47,
                507,
                50
            ], max) - __recognizer430094732.logProbe([
                507,
                53,
                507,
                56
            ], min) + 1)) + __recognizer430094732.logProbe([
                507,
                65,
                507,
                68
            ], min);
        }
        function setInitialWeapon(pWeapon) {
            __recognizer430094732.logEntry([
                510,
                17,
                510,
                33
            ], arguments);
            currentChromosome = __recognizer430094732.logProbe([
                511,
                32,
                511,
                39
            ], pWeapon);
            (function () {
                var obj = function () {
                        var obj = __recognizer430094732.logProbe([
                                512,
                                12,
                                512,
                                24
                            ], Presentation), fn = __recognizer430094732.logProbe([
                                512,
                                25,
                                512,
                                41
                            ], obj.getWeaponHandler);
                        return fn.apply(obj, arguments);
                    }.bind(this)(), fn = __recognizer430094732.logProbe([
                        512,
                        44,
                        512,
                        69
                    ], obj.convertChromosomeToWeapon);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer430094732.logProbe([
                512,
                70,
                512,
                87
            ], currentChromosome)));
        }
        function setConvertedWeapon(pWeapon) {
            __recognizer430094732.logEntry([
                515,
                17,
                515,
                35
            ], arguments);
            currentWeapon = __recognizer430094732.logProbe([
                516,
                28,
                516,
                35
            ], pWeapon);
        }
        function init() {
            __recognizer430094732.logEntry([
                519,
                17,
                519,
                21
            ], arguments);
            var sources = {
                    pit: 'images/pits.png',
                    car: 'images/car.png',
                    bullet: 'images/bullet.png',
                    box: 'images/box.png'
                };
            __recognizer430094732.logProbe([
                528,
                12,
                530,
                14
            ], __recognizer430094732.logProbe([
                528,
                12,
                528,
                22
            ], loadImages)(__recognizer430094732.logProbe([
                528,
                23,
                528,
                30
            ], sources), function (images) {
                __recognizer430094732.logEntry([
                    528,
                    32,
                    528,
                    40
                ], arguments);
                __recognizer430094732.logProbe([
                    529,
                    16,
                    529,
                    39
                ], __recognizer430094732.logProbe([
                    529,
                    16,
                    529,
                    31
                ], drawCanvasStage)(__recognizer430094732.logProbe([
                    529,
                    32,
                    529,
                    38
                ], images)));
            }));
        }
        return {
            init: init,
            setInitialWeapon: setInitialWeapon,
            setConvertedWeapon: setConvertedWeapon,
            setEnemieWeapon: setEnemieWeapon
        };
    }();
}(__recognizer430094732.logProbe([
    541,
    2,
    541,
    14
], Presentation), __recognizer430094732.logProbe([
    541,
    16,
    541,
    22
], jQuery)));