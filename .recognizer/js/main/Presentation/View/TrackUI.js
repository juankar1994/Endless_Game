/**
 * This code has been instrumented using Recognizer
 * https://github.com/equiet/recognizer
 */

var __recognizer231367463 = (function () {
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

var Presentation = __recognizer231367463.logProbe([
        19,
        26,
        19,
        38
    ], __recognizer231367463.logProbe([
        19,
        19,
        19,
        25
    ], window).Presentation) || {};
(function (pContext, $) {
    __recognizer231367463.logEntry([
        21,
        1,
        21,
        9
    ], arguments);
    pContext.getTrackUI = function () {
        __recognizer231367463.logEntry([
            23,
            26,
            23,
            34
        ], arguments);
        return __recognizer231367463.logProbe([
            24,
            15,
            24,
            22
        ], TrackUI);
    };
    TrackUI = function () {
        __recognizer231367463.logEntry([
            27,
            15,
            27,
            23
        ], arguments);
        var car, canvasStage, vehicleLayer, boxLayer, weaponLayer, enemyLayer, labelLayer, lifeCounter = 2;
        var weaponObj = {
                laneNumber: 3,
                color: 'green',
                stroke: 4,
                shapeWeapon: 4
            };
        __recognizer231367463.logProbe([
            38,
            8,
            38,
            14
        ], __recognizer231367463.logProbe([
            38,
            8,
            38,
            12
        ], init)());
        function loadImages(sources, callback) {
            __recognizer231367463.logEntry([
                40,
                17,
                40,
                27
            ], arguments);
            var images = {};
            var loadedImages = 0;
            var numImages = 0;
            for (var src in __recognizer231367463.logProbe([
                    45,
                    27,
                    45,
                    34
                ], sources)) {
                __recognizer231367463.logProbe([
                    46,
                    16,
                    46,
                    25
                ], numImages)++;
            }
            for (var src in __recognizer231367463.logProbe([
                    48,
                    27,
                    48,
                    34
                ], sources)) {
                images[src] = new (__recognizer231367463.logProbe([
                    49,
                    34,
                    49,
                    39
                ], Image))();
                images[src].onload = function () {
                    __recognizer231367463.logEntry([
                        50,
                        37,
                        50,
                        45
                    ], arguments);
                    if (++__recognizer231367463.logProbe([
                            51,
                            25,
                            51,
                            37
                        ], loadedImages) >= __recognizer231367463.logProbe([
                            51,
                            41,
                            51,
                            50
                        ], numImages)) {
                        __recognizer231367463.logProbe([
                            52,
                            24,
                            52,
                            40
                        ], __recognizer231367463.logProbe([
                            52,
                            24,
                            52,
                            32
                        ], callback)(__recognizer231367463.logProbe([
                            52,
                            33,
                            52,
                            39
                        ], images)));
                    }
                };
                images[src].src = __recognizer231367463.logProbe([
                    55,
                    42,
                    55,
                    45
                ], __recognizer231367463.logProbe([
                    55,
                    34,
                    55,
                    41
                ], sources)[src]);
            }
        }
        function drawCanvasStage(images) {
            __recognizer231367463.logEntry([
                60,
                17,
                60,
                32
            ], arguments);
            canvasStage = new (__recognizer231367463.logProbe([
                62,
                38,
                62,
                43
            ], __recognizer231367463.logProbe([
                62,
                30,
                62,
                37
            ], Kinetic).Stage))({
                container: 'gameContainer',
                width: 800,
                height: 550
            });
            vehicleLayer = new (__recognizer231367463.logProbe([
                68,
                39,
                68,
                44
            ], __recognizer231367463.logProbe([
                68,
                31,
                68,
                38
            ], Kinetic).Layer))();
            boxLayer = new (__recognizer231367463.logProbe([
                69,
                35,
                69,
                40
            ], __recognizer231367463.logProbe([
                69,
                27,
                69,
                34
            ], Kinetic).Layer))();
            weaponLayer = new (__recognizer231367463.logProbe([
                70,
                38,
                70,
                43
            ], __recognizer231367463.logProbe([
                70,
                30,
                70,
                37
            ], Kinetic).Layer))();
            enemyLayer = new (__recognizer231367463.logProbe([
                71,
                37,
                71,
                42
            ], __recognizer231367463.logProbe([
                71,
                29,
                71,
                36
            ], Kinetic).Layer))();
            labelLayer = new (__recognizer231367463.logProbe([
                72,
                37,
                72,
                42
            ], __recognizer231367463.logProbe([
                72,
                29,
                72,
                36
            ], Kinetic).Layer))();
            var pit = new (__recognizer231367463.logProbe([
                    74,
                    34,
                    74,
                    38
                ], __recognizer231367463.logProbe([
                    74,
                    26,
                    74,
                    33
                ], Kinetic).Rect))({
                    x: 90,
                    fillPatternImage: __recognizer231367463.logProbe([
                        76,
                        41,
                        76,
                        44
                    ], __recognizer231367463.logProbe([
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
            var pit2 = new (__recognizer231367463.logProbe([
                    82,
                    35,
                    82,
                    39
                ], __recognizer231367463.logProbe([
                    82,
                    27,
                    82,
                    34
                ], Kinetic).Rect))({
                    x: 650,
                    fillPatternImage: __recognizer231367463.logProbe([
                        84,
                        41,
                        84,
                        44
                    ], __recognizer231367463.logProbe([
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
            car = new (__recognizer231367463.logProbe([
                90,
                30,
                90,
                34
            ], __recognizer231367463.logProbe([
                90,
                22,
                90,
                29
            ], Kinetic).Rect))({
                x: 150,
                y: 430,
                fillPatternImage: __recognizer231367463.logProbe([
                    93,
                    41,
                    93,
                    44
                ], __recognizer231367463.logProbe([
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
            var amplitude = 270;
            var speedCar = 210;
            var period = 5000;
            var anim = new (__recognizer231367463.logProbe([
                    103,
                    35,
                    103,
                    44
                ], __recognizer231367463.logProbe([
                    103,
                    27,
                    103,
                    34
                ], Kinetic).Animation))(function (frame) {
                    __recognizer231367463.logEntry([
                        103,
                        45,
                        103,
                        53
                    ], arguments);
                    (function () {
                        var obj = __recognizer231367463.logProbe([
                                104,
                                16,
                                104,
                                19
                            ], pit), fn = __recognizer231367463.logProbe([
                                104,
                                20,
                                104,
                                24
                            ], obj.setY);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer231367463.logProbe([
                        104,
                        25,
                        104,
                        34
                    ], amplitude) * __recognizer231367463.logProbe([
                        104,
                        42,
                        104,
                        46
                    ], __recognizer231367463.logProbe([
                        104,
                        36,
                        104,
                        41
                    ], frame).time) * 2 / __recognizer231367463.logProbe([
                        104,
                        53,
                        104,
                        59
                    ], period)));
                    (function () {
                        var obj = __recognizer231367463.logProbe([
                                105,
                                16,
                                105,
                                20
                            ], pit2), fn = __recognizer231367463.logProbe([
                                105,
                                21,
                                105,
                                25
                            ], obj.setY);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer231367463.logProbe([
                        105,
                        26,
                        105,
                        35
                    ], amplitude) * __recognizer231367463.logProbe([
                        105,
                        43,
                        105,
                        47
                    ], __recognizer231367463.logProbe([
                        105,
                        37,
                        105,
                        42
                    ], frame).time) * 2 / __recognizer231367463.logProbe([
                        105,
                        54,
                        105,
                        60
                    ], period)));
                    if (__recognizer231367463.logProbe([
                            106,
                            25,
                            106,
                            29
                        ], __recognizer231367463.logProbe([
                            106,
                            19,
                            106,
                            24
                        ], frame).time) >= 5000)
                        frame.time = 0;
                }, __recognizer231367463.logProbe([
                    108,
                    15,
                    108,
                    27
                ], vehicleLayer));
            var anim2 = new (__recognizer231367463.logProbe([
                    110,
                    36,
                    110,
                    45
                ], __recognizer231367463.logProbe([
                    110,
                    28,
                    110,
                    35
                ], Kinetic).Animation))(function (frame) {
                    __recognizer231367463.logEntry([
                        110,
                        46,
                        110,
                        54
                    ], arguments);
                    (function () {
                        var obj = __recognizer231367463.logProbe([
                                111,
                                16,
                                111,
                                19
                            ], car), fn = __recognizer231367463.logProbe([
                                111,
                                20,
                                111,
                                24
                            ], obj.setY);
                        return fn.apply(obj, arguments);
                    }.bind(this)(-__recognizer231367463.logProbe([
                        111,
                        26,
                        111,
                        34
                    ], speedCar) * __recognizer231367463.logProbe([
                        111,
                        43,
                        111,
                        47
                    ], __recognizer231367463.logProbe([
                        111,
                        37,
                        111,
                        42
                    ], frame).time) * 2 / __recognizer231367463.logProbe([
                        111,
                        54,
                        111,
                        60
                    ], period)));
                    if (__recognizer231367463.logProbe([
                            112,
                            25,
                            112,
                            29
                        ], __recognizer231367463.logProbe([
                            112,
                            19,
                            112,
                            24
                        ], frame).time) >= 5000) {
                        frame.time = 0;
                        (function () {
                            var obj = __recognizer231367463.logProbe([
                                    114,
                                    20,
                                    114,
                                    30
                                ], enemyLayer), fn = __recognizer231367463.logProbe([
                                    114,
                                    31,
                                    114,
                                    45
                                ], obj.removeChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                        (function () {
                            var obj = __recognizer231367463.logProbe([
                                    115,
                                    20,
                                    115,
                                    30
                                ], enemyLayer), fn = __recognizer231367463.logProbe([
                                    115,
                                    31,
                                    115,
                                    35
                                ], obj.draw);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                        __recognizer231367463.logProbe([
                            116,
                            20,
                            116,
                            64
                        ], __recognizer231367463.logProbe([
                            116,
                            20,
                            116,
                            30
                        ], setTimeout)(function () {
                            __recognizer231367463.logEntry([
                                116,
                                31,
                                116,
                                39
                            ], arguments);
                            __recognizer231367463.logProbe([
                                116,
                                42,
                                116,
                                56
                            ], __recognizer231367463.logProbe([
                                116,
                                42,
                                116,
                                53
                            ], createEnemy)(5));
                        }, 500));
                    }
                    var boxChildren = function () {
                            var obj = __recognizer231367463.logProbe([
                                    119,
                                    34,
                                    119,
                                    42
                                ], boxLayer), fn = __recognizer231367463.logProbe([
                                    119,
                                    43,
                                    119,
                                    54
                                ], obj.getChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)();
                    (function () {
                        var obj = __recognizer231367463.logProbe([
                                120,
                                16,
                                120,
                                23
                            ], console), fn = __recognizer231367463.logProbe([
                                120,
                                24,
                                120,
                                27
                            ], obj.log);
                        return fn.apply(obj, arguments);
                    }.bind(this)('Caja: ' + __recognizer231367463.logProbe([
                        120,
                        51,
                        120,
                        57
                    ], __recognizer231367463.logProbe([
                        120,
                        39,
                        120,
                        50
                    ], boxChildren).length)));
                    for (var k = 0; __recognizer231367463.logProbe([
                            121,
                            31,
                            121,
                            32
                        ], k) < __recognizer231367463.logProbe([
                            121,
                            47,
                            121,
                            53
                        ], __recognizer231367463.logProbe([
                            121,
                            35,
                            121,
                            46
                        ], boxChildren).length); __recognizer231367463.logProbe([
                            121,
                            55,
                            121,
                            56
                        ], k)++) {
                        if (function () {
                                var obj = __recognizer231367463.logProbe([
                                        122,
                                        23,
                                        122,
                                        26
                                    ], car), fn = __recognizer231367463.logProbe([
                                        122,
                                        27,
                                        122,
                                        31
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() == function () {
                                var obj = __recognizer231367463.logProbe([
                                        122,
                                        49,
                                        122,
                                        50
                                    ], __recognizer231367463.logProbe([
                                        122,
                                        37,
                                        122,
                                        48
                                    ], boxChildren)[i]), fn = __recognizer231367463.logProbe([
                                        122,
                                        52,
                                        122,
                                        56
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() && 400 + function () {
                                var obj = __recognizer231367463.logProbe([
                                        123,
                                        32,
                                        123,
                                        35
                                    ], car), fn = __recognizer231367463.logProbe([
                                        123,
                                        36,
                                        123,
                                        40
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)() <= function () {
                                var obj = __recognizer231367463.logProbe([
                                        123,
                                        58,
                                        123,
                                        59
                                    ], __recognizer231367463.logProbe([
                                        123,
                                        46,
                                        123,
                                        57
                                    ], boxChildren)[i]), fn = __recognizer231367463.logProbe([
                                        123,
                                        61,
                                        123,
                                        65
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)()) {
                            __recognizer231367463.logProbe([
                                124,
                                24,
                                124,
                                36
                            ], __recognizer231367463.logProbe([
                                124,
                                24,
                                124,
                                29
                            ], alert)('BOX'));
                        }
                    }
                    var enemyChildren = function () {
                            var obj = __recognizer231367463.logProbe([
                                    128,
                                    36,
                                    128,
                                    46
                                ], enemyLayer), fn = __recognizer231367463.logProbe([
                                    128,
                                    47,
                                    128,
                                    58
                                ], obj.getChildren);
                            return fn.apply(obj, arguments);
                        }.bind(this)();
                    for (var i = 0; __recognizer231367463.logProbe([
                            130,
                            31,
                            130,
                            32
                        ], i) < __recognizer231367463.logProbe([
                            130,
                            49,
                            130,
                            55
                        ], __recognizer231367463.logProbe([
                            130,
                            35,
                            130,
                            48
                        ], enemyChildren).length); __recognizer231367463.logProbe([
                            130,
                            57,
                            130,
                            58
                        ], i)++) {
                        if (function () {
                                var obj = __recognizer231367463.logProbe([
                                        131,
                                        23,
                                        131,
                                        26
                                    ], car), fn = __recognizer231367463.logProbe([
                                        131,
                                        27,
                                        131,
                                        31
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() + 25 == function () {
                                var obj = __recognizer231367463.logProbe([
                                        131,
                                        56,
                                        131,
                                        57
                                    ], __recognizer231367463.logProbe([
                                        131,
                                        42,
                                        131,
                                        55
                                    ], enemyChildren)[i]), fn = __recognizer231367463.logProbe([
                                        131,
                                        59,
                                        131,
                                        63
                                    ], obj.getX);
                                return fn.apply(obj, arguments);
                            }.bind(this)() && 400 + function () {
                                var obj = __recognizer231367463.logProbe([
                                        132,
                                        32,
                                        132,
                                        35
                                    ], car), fn = __recognizer231367463.logProbe([
                                        132,
                                        36,
                                        132,
                                        40
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)() <= function () {
                                var obj = __recognizer231367463.logProbe([
                                        132,
                                        60,
                                        132,
                                        61
                                    ], __recognizer231367463.logProbe([
                                        132,
                                        46,
                                        132,
                                        59
                                    ], enemyChildren)[i]), fn = __recognizer231367463.logProbe([
                                        132,
                                        63,
                                        132,
                                        67
                                    ], obj.getY);
                                return fn.apply(obj, arguments);
                            }.bind(this)()) {
                            if (__recognizer231367463.logProbe([
                                    133,
                                    27,
                                    133,
                                    38
                                ], lifeCounter) == 0) {
                                (function () {
                                    var obj = __recognizer231367463.logProbe([
                                            134,
                                            28,
                                            134,
                                            31
                                        ], car), fn = __recognizer231367463.logProbe([
                                            134,
                                            32,
                                            134,
                                            38
                                        ], obj.remove);
                                    return fn.apply(obj, arguments);
                                }.bind(this)());
                                (function () {
                                    var obj = __recognizer231367463.logProbe([
                                            135,
                                            28,
                                            135,
                                            40
                                        ], vehicleLayer), fn = __recognizer231367463.logProbe([
                                            135,
                                            41,
                                            135,
                                            45
                                        ], obj.draw);
                                    return fn.apply(obj, arguments);
                                }.bind(this)());
                            } else {
                                (function () {
                                    var obj = __recognizer231367463.logProbe([
                                            137,
                                            42,
                                            137,
                                            43
                                        ], __recognizer231367463.logProbe([
                                            137,
                                            28,
                                            137,
                                            41
                                        ], enemyChildren)[i]), fn = __recognizer231367463.logProbe([
                                            137,
                                            45,
                                            137,
                                            51
                                        ], obj.remove);
                                    return fn.apply(obj, arguments);
                                }.bind(this)());
                                (function () {
                                    var obj = __recognizer231367463.logProbe([
                                            138,
                                            28,
                                            138,
                                            38
                                        ], enemyLayer), fn = __recognizer231367463.logProbe([
                                            138,
                                            39,
                                            138,
                                            43
                                        ], obj.draw);
                                    return fn.apply(obj, arguments);
                                }.bind(this)());
                                var labelChildren = function () {
                                        var obj = __recognizer231367463.logProbe([
                                                139,
                                                48,
                                                139,
                                                58
                                            ], labelLayer), fn = __recognizer231367463.logProbe([
                                                139,
                                                59,
                                                139,
                                                70
                                            ], obj.getChildren);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)();
                                for (var i = 0; __recognizer231367463.logProbe([
                                        140,
                                        43,
                                        140,
                                        44
                                    ], i) < __recognizer231367463.logProbe([
                                        140,
                                        61,
                                        140,
                                        67
                                    ], __recognizer231367463.logProbe([
                                        140,
                                        47,
                                        140,
                                        60
                                    ], labelChildren).length); __recognizer231367463.logProbe([
                                        140,
                                        69,
                                        140,
                                        70
                                    ], i)++) {
                                    var labelChildrenDepth = function () {
                                            var obj = __recognizer231367463.logProbe([
                                                    141,
                                                    71,
                                                    141,
                                                    72
                                                ], __recognizer231367463.logProbe([
                                                    141,
                                                    57,
                                                    141,
                                                    70
                                                ], labelChildren)[i]), fn = __recognizer231367463.logProbe([
                                                    141,
                                                    74,
                                                    141,
                                                    85
                                                ], obj.getChildren);
                                            return fn.apply(obj, arguments);
                                        }.bind(this)();
                                    for (var j = 0; __recognizer231367463.logProbe([
                                            142,
                                            47,
                                            142,
                                            48
                                        ], j) < __recognizer231367463.logProbe([
                                            142,
                                            69,
                                            142,
                                            75
                                        ], __recognizer231367463.logProbe([
                                            142,
                                            50,
                                            142,
                                            68
                                        ], labelChildrenDepth).length); __recognizer231367463.logProbe([
                                            142,
                                            77,
                                            142,
                                            78
                                        ], j)++) {
                                        if (function () {
                                                var obj = __recognizer231367463.logProbe([
                                                        143,
                                                        58,
                                                        143,
                                                        59
                                                    ], __recognizer231367463.logProbe([
                                                        143,
                                                        39,
                                                        143,
                                                        57
                                                    ], labelChildrenDepth)[j]), fn = __recognizer231367463.logProbe([
                                                        143,
                                                        61,
                                                        143,
                                                        65
                                                    ], obj.name);
                                                return fn.apply(obj, arguments);
                                            }.bind(this)() == 'lifes') {
                                            (function () {
                                                var obj = __recognizer231367463.logProbe([
                                                        144,
                                                        59,
                                                        144,
                                                        60
                                                    ], __recognizer231367463.logProbe([
                                                        144,
                                                        40,
                                                        144,
                                                        58
                                                    ], labelChildrenDepth)[j]), fn = __recognizer231367463.logProbe([
                                                        144,
                                                        62,
                                                        144,
                                                        69
                                                    ], obj.setText);
                                                return fn.apply(obj, arguments);
                                            }.bind(this)('Lifes:' + __recognizer231367463.logProbe([
                                                144,
                                                81,
                                                144,
                                                92
                                            ], lifeCounter)));
                                            (function () {
                                                var obj = __recognizer231367463.logProbe([
                                                        145,
                                                        40,
                                                        145,
                                                        50
                                                    ], labelLayer), fn = __recognizer231367463.logProbe([
                                                        145,
                                                        51,
                                                        145,
                                                        55
                                                    ], obj.draw);
                                                return fn.apply(obj, arguments);
                                            }.bind(this)());
                                            break;
                                        }
                                    }
                                }
                                var smashSound = new (__recognizer231367463.logProbe([
                                        150,
                                        49,
                                        150,
                                        54
                                    ], Audio))('audio/smash2.wav');
                                (function () {
                                    var obj = __recognizer231367463.logProbe([
                                            151,
                                            28,
                                            151,
                                            38
                                        ], smashSound), fn = __recognizer231367463.logProbe([
                                            151,
                                            39,
                                            151,
                                            43
                                        ], obj.play);
                                    return fn.apply(obj, arguments);
                                }.bind(this)());
                                __recognizer231367463.logProbe([
                                    152,
                                    28,
                                    152,
                                    39
                                ], lifeCounter)--;
                                break;
                            }
                        }
                    }
                }, __recognizer231367463.logProbe([
                    158,
                    15,
                    158,
                    27
                ], vehicleLayer));
            (function () {
                var obj = __recognizer231367463.logProbe([
                        160,
                        12,
                        160,
                        16
                    ], anim), fn = __recognizer231367463.logProbe([
                        160,
                        17,
                        160,
                        22
                    ], obj.start);
                return fn.apply(obj, arguments);
            }.bind(this)());
            (function () {
                var obj = __recognizer231367463.logProbe([
                        161,
                        12,
                        161,
                        17
                    ], anim2), fn = __recognizer231367463.logProbe([
                        161,
                        18,
                        161,
                        23
                    ], obj.start);
                return fn.apply(obj, arguments);
            }.bind(this)());
            (function () {
                var obj = __recognizer231367463.logProbe([
                        163,
                        12,
                        163,
                        24
                    ], vehicleLayer), fn = __recognizer231367463.logProbe([
                        163,
                        25,
                        163,
                        28
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer231367463.logProbe([
                163,
                29,
                163,
                32
            ], pit)));
            (function () {
                var obj = __recognizer231367463.logProbe([
                        164,
                        12,
                        164,
                        24
                    ], vehicleLayer), fn = __recognizer231367463.logProbe([
                        164,
                        25,
                        164,
                        28
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer231367463.logProbe([
                164,
                29,
                164,
                33
            ], pit2)));
            (function () {
                var obj = __recognizer231367463.logProbe([
                        165,
                        12,
                        165,
                        24
                    ], vehicleLayer), fn = __recognizer231367463.logProbe([
                        165,
                        25,
                        165,
                        28
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer231367463.logProbe([
                165,
                29,
                165,
                32
            ], car)));
            var lifesLabel = new (__recognizer231367463.logProbe([
                    167,
                    41,
                    167,
                    46
                ], __recognizer231367463.logProbe([
                    167,
                    33,
                    167,
                    40
                ], Kinetic).Label))({
                    x: 745,
                    y: 75,
                    opacity: 0.75
                });
            (function () {
                var obj = __recognizer231367463.logProbe([
                        173,
                        12,
                        173,
                        22
                    ], lifesLabel), fn = __recognizer231367463.logProbe([
                        173,
                        23,
                        173,
                        26
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(new (__recognizer231367463.logProbe([
                173,
                39,
                173,
                42
            ], __recognizer231367463.logProbe([
                173,
                31,
                173,
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
                var obj = __recognizer231367463.logProbe([
                        185,
                        12,
                        185,
                        22
                    ], lifesLabel), fn = __recognizer231367463.logProbe([
                        185,
                        23,
                        185,
                        26
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(new (__recognizer231367463.logProbe([
                185,
                39,
                185,
                43
            ], __recognizer231367463.logProbe([
                185,
                31,
                185,
                38
            ], Kinetic).Text))({
                text: 'Lifes: 3',
                fontFamily: 'Calibri',
                fontSize: 24,
                padding: 5,
                fill: 'white',
                name: 'lifes'
            })));
            (function () {
                var obj = __recognizer231367463.logProbe([
                        194,
                        12,
                        194,
                        22
                    ], labelLayer), fn = __recognizer231367463.logProbe([
                        194,
                        23,
                        194,
                        26
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer231367463.logProbe([
                194,
                27,
                194,
                37
            ], lifesLabel)));
            (function () {
                var obj = __recognizer231367463.logProbe([
                        196,
                        12,
                        196,
                        23
                    ], canvasStage), fn = __recognizer231367463.logProbe([
                        196,
                        24,
                        196,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer231367463.logProbe([
                196,
                28,
                196,
                40
            ], vehicleLayer)));
            (function () {
                var obj = __recognizer231367463.logProbe([
                        197,
                        12,
                        197,
                        23
                    ], canvasStage), fn = __recognizer231367463.logProbe([
                        197,
                        24,
                        197,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer231367463.logProbe([
                197,
                28,
                197,
                39
            ], weaponLayer)));
            (function () {
                var obj = __recognizer231367463.logProbe([
                        198,
                        12,
                        198,
                        23
                    ], canvasStage), fn = __recognizer231367463.logProbe([
                        198,
                        24,
                        198,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer231367463.logProbe([
                198,
                28,
                198,
                36
            ], boxLayer)));
            (function () {
                var obj = __recognizer231367463.logProbe([
                        199,
                        12,
                        199,
                        23
                    ], canvasStage), fn = __recognizer231367463.logProbe([
                        199,
                        24,
                        199,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer231367463.logProbe([
                199,
                28,
                199,
                38
            ], enemyLayer)));
            (function () {
                var obj = __recognizer231367463.logProbe([
                        200,
                        12,
                        200,
                        23
                    ], canvasStage), fn = __recognizer231367463.logProbe([
                        200,
                        24,
                        200,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer231367463.logProbe([
                200,
                28,
                200,
                38
            ], labelLayer)));
            __recognizer231367463.logProbe([
                202,
                12,
                202,
                26
            ], __recognizer231367463.logProbe([
                202,
                12,
                202,
                23
            ], createEnemy)(5));
            __recognizer231367463.logProbe([
                203,
                12,
                203,
                37
            ], __recognizer231367463.logProbe([
                203,
                12,
                203,
                21
            ], createBox)(150, 100, __recognizer231367463.logProbe([
                203,
                30,
                203,
                36
            ], images)));
            __recognizer231367463.logProbe([
                205,
                12,
                205,
                29
            ], __recognizer231367463.logProbe([
                205,
                12,
                205,
                21
            ], arrowKeys)(__recognizer231367463.logProbe([
                205,
                22,
                205,
                28
            ], images)));
        }
        function createEnemy(pNumberOfEnemies) {
            __recognizer231367463.logEntry([
                208,
                17,
                208,
                28
            ], arguments);
            var y = 50;
            var x = 175;
            for (var i = 0; __recognizer231367463.logProbe([
                    212,
                    27,
                    212,
                    28
                ], i) < __recognizer231367463.logProbe([
                    212,
                    31,
                    212,
                    47
                ], pNumberOfEnemies); __recognizer231367463.logProbe([
                    212,
                    49,
                    212,
                    50
                ], i)++) {
                var weapon = new (__recognizer231367463.logProbe([
                        213,
                        41,
                        213,
                        55
                    ], __recognizer231367463.logProbe([
                        213,
                        33,
                        213,
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
                x += 100;
                y += 20;
                (function () {
                    var obj = __recognizer231367463.logProbe([
                            224,
                            16,
                            224,
                            26
                        ], enemyLayer), fn = __recognizer231367463.logProbe([
                            224,
                            27,
                            224,
                            30
                        ], obj.add);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer231367463.logProbe([
                    224,
                    31,
                    224,
                    37
                ], weapon)));
                (function () {
                    var obj = __recognizer231367463.logProbe([
                            225,
                            16,
                            225,
                            26
                        ], enemyLayer), fn = __recognizer231367463.logProbe([
                            225,
                            27,
                            225,
                            31
                        ], obj.draw);
                    return fn.apply(obj, arguments);
                }.bind(this)());
            }
        }
        function createWeapon(pWeapon) {
            __recognizer231367463.logEntry([
                229,
                17,
                229,
                29
            ], arguments);
            var period = 2000;
            var tmpX = 25;
            var group = new (__recognizer231367463.logProbe([
                    232,
                    36,
                    232,
                    41
                ], __recognizer231367463.logProbe([
                    232,
                    28,
                    232,
                    35
                ], Kinetic).Group))();
            var posY = 380 + function () {
                    var obj = __recognizer231367463.logProbe([
                            233,
                            29,
                            233,
                            32
                        ], car), fn = __recognizer231367463.logProbe([
                            233,
                            33,
                            233,
                            37
                        ], obj.getY);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            for (var i = 0; __recognizer231367463.logProbe([
                    235,
                    27,
                    235,
                    28
                ], i) < __recognizer231367463.logProbe([
                    235,
                    41,
                    235,
                    51
                ], __recognizer231367463.logProbe([
                    235,
                    31,
                    235,
                    40
                ], weaponObj).laneNumber); __recognizer231367463.logProbe([
                    235,
                    53,
                    235,
                    54
                ], i)++) {
                (function () {
                    __recognizer231367463.logEntry([
                        236,
                        17,
                        236,
                        25
                    ], arguments);
                    if (__recognizer231367463.logProbe([
                            237,
                            23,
                            237,
                            24
                        ], i) == 2)
                        tmpX -= __recognizer231367463.logProbe([
                            238,
                            32,
                            238,
                            36
                        ], tmpX) + 75;
                    var x = function () {
                            var obj = __recognizer231367463.logProbe([
                                    239,
                                    28,
                                    239,
                                    31
                                ], car), fn = __recognizer231367463.logProbe([
                                    239,
                                    32,
                                    239,
                                    36
                                ], obj.getX);
                            return fn.apply(obj, arguments);
                        }.bind(this)() + __recognizer231367463.logProbe([
                            239,
                            41,
                            239,
                            45
                        ], tmpX);
                    if (__recognizer231367463.logProbe([
                            240,
                            23,
                            240,
                            24
                        ], x) < 675 && __recognizer231367463.logProbe([
                            240,
                            34,
                            240,
                            35
                        ], x) > 75) {
                        var weapon = new (__recognizer231367463.logProbe([
                                241,
                                49,
                                241,
                                63
                            ], __recognizer231367463.logProbe([
                                241,
                                41,
                                241,
                                48
                            ], Kinetic).RegularPolygon))({
                                x: x,
                                y: posY,
                                fill: __recognizer231367463.logProbe([
                                    244,
                                    44,
                                    244,
                                    49
                                ], __recognizer231367463.logProbe([
                                    244,
                                    34,
                                    244,
                                    43
                                ], weaponObj).color),
                                sides: __recognizer231367463.logProbe([
                                    245,
                                    45,
                                    245,
                                    56
                                ], __recognizer231367463.logProbe([
                                    245,
                                    35,
                                    245,
                                    44
                                ], weaponObj).shapeWeapon),
                                radius: 20,
                                stroke: '#000',
                                strokeWidth: __recognizer231367463.logProbe([
                                    248,
                                    51,
                                    248,
                                    57
                                ], __recognizer231367463.logProbe([
                                    248,
                                    41,
                                    248,
                                    50
                                ], weaponObj).stroke)
                            });
                        (function () {
                            var obj = __recognizer231367463.logProbe([
                                    250,
                                    24,
                                    250,
                                    29
                                ], group), fn = __recognizer231367463.logProbe([
                                    250,
                                    30,
                                    250,
                                    33
                                ], obj.add);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer231367463.logProbe([
                            250,
                            34,
                            250,
                            40
                        ], weapon)));
                    }
                    tmpX += 100;
                }());
            }
            (function () {
                var obj = __recognizer231367463.logProbe([
                        255,
                        12,
                        255,
                        23
                    ], weaponLayer), fn = __recognizer231367463.logProbe([
                        255,
                        24,
                        255,
                        27
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer231367463.logProbe([
                255,
                28,
                255,
                33
            ], group)));
            (function () {
                var obj = __recognizer231367463.logProbe([
                        256,
                        12,
                        256,
                        23
                    ], weaponLayer), fn = __recognizer231367463.logProbe([
                        256,
                        24,
                        256,
                        28
                    ], obj.draw);
                return fn.apply(obj, arguments);
            }.bind(this)());
            var enemyChildren = function () {
                    var obj = __recognizer231367463.logProbe([
                            259,
                            32,
                            259,
                            42
                        ], enemyLayer), fn = __recognizer231367463.logProbe([
                            259,
                            43,
                            259,
                            54
                        ], obj.getChildren);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            var childrenGroup = function () {
                    var obj = __recognizer231367463.logProbe([
                            260,
                            32,
                            260,
                            43
                        ], weaponLayer), fn = __recognizer231367463.logProbe([
                            260,
                            44,
                            260,
                            55
                        ], obj.getChildren);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            var weaponChildren;
            var anim = new (__recognizer231367463.logProbe([
                    263,
                    35,
                    263,
                    44
                ], __recognizer231367463.logProbe([
                    263,
                    27,
                    263,
                    34
                ], Kinetic).Animation))(function (frame) {
                    __recognizer231367463.logEntry([
                        263,
                        45,
                        263,
                        53
                    ], arguments);
                    if (__recognizer231367463.logProbe([
                            264,
                            19,
                            264,
                            23
                        ], posY) > 0)
                        (function () {
                            var obj = __recognizer231367463.logProbe([
                                    265,
                                    20,
                                    265,
                                    25
                                ], group), fn = __recognizer231367463.logProbe([
                                    265,
                                    26,
                                    265,
                                    30
                                ], obj.setY);
                            return fn.apply(obj, arguments);
                        }.bind(this)(-__recognizer231367463.logProbe([
                            265,
                            33,
                            265,
                            37
                        ], posY) * __recognizer231367463.logProbe([
                            265,
                            46,
                            265,
                            50
                        ], __recognizer231367463.logProbe([
                            265,
                            40,
                            265,
                            45
                        ], frame).time) * 4 / __recognizer231367463.logProbe([
                            265,
                            57,
                            265,
                            63
                        ], period)));
                    else
                        (function () {
                            var obj = __recognizer231367463.logProbe([
                                    267,
                                    20,
                                    267,
                                    25
                                ], group), fn = __recognizer231367463.logProbe([
                                    267,
                                    26,
                                    267,
                                    30
                                ], obj.setY);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer231367463.logProbe([
                            267,
                            32,
                            267,
                            36
                        ], posY) * __recognizer231367463.logProbe([
                            267,
                            45,
                            267,
                            49
                        ], __recognizer231367463.logProbe([
                            267,
                            39,
                            267,
                            44
                        ], frame).time) * 4 / __recognizer231367463.logProbe([
                            267,
                            56,
                            267,
                            62
                        ], period)));
                    if (__recognizer231367463.logProbe([
                            268,
                            25,
                            268,
                            29
                        ], __recognizer231367463.logProbe([
                            268,
                            19,
                            268,
                            24
                        ], frame).time) >= 2000) {
                        var children = function () {
                                var obj = __recognizer231367463.logProbe([
                                        269,
                                        35,
                                        269,
                                        46
                                    ], weaponLayer), fn = __recognizer231367463.logProbe([
                                        269,
                                        47,
                                        269,
                                        58
                                    ], obj.getChildren);
                                return fn.apply(obj, arguments);
                            }.bind(this)();
                        if (__recognizer231367463.logProbe([
                                270,
                                32,
                                270,
                                38
                            ], __recognizer231367463.logProbe([
                                270,
                                23,
                                270,
                                31
                            ], children).length) > 0) {
                            (function () {
                                var obj = __recognizer231367463.logProbe([
                                        271,
                                        33,
                                        271,
                                        34
                                    ], __recognizer231367463.logProbe([
                                        271,
                                        24,
                                        271,
                                        32
                                    ], children)[0]), fn = __recognizer231367463.logProbe([
                                        271,
                                        36,
                                        271,
                                        42
                                    ], obj.remove);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                            (function () {
                                var obj = __recognizer231367463.logProbe([
                                        272,
                                        24,
                                        272,
                                        35
                                    ], weaponLayer), fn = __recognizer231367463.logProbe([
                                        272,
                                        36,
                                        272,
                                        40
                                    ], obj.draw);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                        }
                        (function () {
                            var obj = __recognizer231367463.logProbe([
                                    274,
                                    20,
                                    274,
                                    24
                                ], anim), fn = __recognizer231367463.logProbe([
                                    274,
                                    25,
                                    274,
                                    29
                                ], obj.stop);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                    }
                    for (var j = 0; __recognizer231367463.logProbe([
                            277,
                            31,
                            277,
                            32
                        ], j) < __recognizer231367463.logProbe([
                            277,
                            49,
                            277,
                            55
                        ], __recognizer231367463.logProbe([
                            277,
                            35,
                            277,
                            48
                        ], enemyChildren).length); __recognizer231367463.logProbe([
                            277,
                            57,
                            277,
                            58
                        ], j)++) {
                        for (var k = 0; __recognizer231367463.logProbe([
                                278,
                                35,
                                278,
                                36
                            ], k) < __recognizer231367463.logProbe([
                                278,
                                53,
                                278,
                                59
                            ], __recognizer231367463.logProbe([
                                278,
                                39,
                                278,
                                52
                            ], childrenGroup).length); __recognizer231367463.logProbe([
                                278,
                                61,
                                278,
                                62
                            ], k)++) {
                            weaponChildren = function () {
                                var obj = __recognizer231367463.logProbe([
                                        279,
                                        69,
                                        279,
                                        70
                                    ], function () {
                                        var obj = __recognizer231367463.logProbe([
                                                279,
                                                41,
                                                279,
                                                54
                                            ], childrenGroup), fn = __recognizer231367463.logProbe([
                                                279,
                                                55,
                                                279,
                                                66
                                            ], obj.getChildren);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)()[k]), fn = __recognizer231367463.logProbe([
                                        279,
                                        72,
                                        279,
                                        83
                                    ], obj.getChildren);
                                return fn.apply(obj, arguments);
                            }.bind(this)();
                            for (var i = 0; __recognizer231367463.logProbe([
                                    280,
                                    39,
                                    280,
                                    40
                                ], i) < __recognizer231367463.logProbe([
                                    280,
                                    58,
                                    280,
                                    64
                                ], __recognizer231367463.logProbe([
                                    280,
                                    43,
                                    280,
                                    57
                                ], weaponChildren).length); __recognizer231367463.logProbe([
                                    280,
                                    66,
                                    280,
                                    67
                                ], i)++) {
                                if (__recognizer231367463.logProbe([
                                        281,
                                        45,
                                        281,
                                        46
                                    ], __recognizer231367463.logProbe([
                                        281,
                                        31,
                                        281,
                                        44
                                    ], enemyChildren)[j]) == __recognizer231367463.logProbe([
                                        281,
                                        51,
                                        281,
                                        60
                                    ], undefined))
                                    break;
                                var enemyX = function () {
                                        var obj = __recognizer231367463.logProbe([
                                                283,
                                                55,
                                                283,
                                                56
                                            ], __recognizer231367463.logProbe([
                                                283,
                                                41,
                                                283,
                                                54
                                            ], enemyChildren)[j]), fn = __recognizer231367463.logProbe([
                                                283,
                                                58,
                                                283,
                                                62
                                            ], obj.getX);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)();
                                var weaponX = function () {
                                        var obj = __recognizer231367463.logProbe([
                                                284,
                                                57,
                                                284,
                                                58
                                            ], __recognizer231367463.logProbe([
                                                284,
                                                42,
                                                284,
                                                56
                                            ], weaponChildren)[i]), fn = __recognizer231367463.logProbe([
                                                284,
                                                60,
                                                284,
                                                64
                                            ], obj.getX);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)();
                                if (__recognizer231367463.logProbe([
                                        285,
                                        31,
                                        285,
                                        35
                                    ], posY) + function () {
                                        var obj = __recognizer231367463.logProbe([
                                                285,
                                                52,
                                                285,
                                                53
                                            ], __recognizer231367463.logProbe([
                                                285,
                                                38,
                                                285,
                                                51
                                            ], childrenGroup)[k]), fn = __recognizer231367463.logProbe([
                                                285,
                                                55,
                                                285,
                                                59
                                            ], obj.getY);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)() <= function () {
                                        var obj = __recognizer231367463.logProbe([
                                                285,
                                                79,
                                                285,
                                                80
                                            ], __recognizer231367463.logProbe([
                                                285,
                                                65,
                                                285,
                                                78
                                            ], enemyChildren)[j]), fn = __recognizer231367463.logProbe([
                                                285,
                                                82,
                                                285,
                                                86
                                            ], obj.getY);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)() && __recognizer231367463.logProbe([
                                        286,
                                        34,
                                        286,
                                        41
                                    ], weaponX) == __recognizer231367463.logProbe([
                                        286,
                                        45,
                                        286,
                                        51
                                    ], enemyX)) {
                                    (function () {
                                        var obj = __recognizer231367463.logProbe([
                                                287,
                                                46,
                                                287,
                                                47
                                            ], __recognizer231367463.logProbe([
                                                287,
                                                32,
                                                287,
                                                45
                                            ], enemyChildren)[j]), fn = __recognizer231367463.logProbe([
                                                287,
                                                49,
                                                287,
                                                55
                                            ], obj.remove);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    (function () {
                                        var obj = __recognizer231367463.logProbe([
                                                288,
                                                32,
                                                288,
                                                42
                                            ], enemyLayer), fn = __recognizer231367463.logProbe([
                                                288,
                                                43,
                                                288,
                                                47
                                            ], obj.draw);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    if (__recognizer231367463.logProbe([
                                            289,
                                            49,
                                            289,
                                            55
                                        ], __recognizer231367463.logProbe([
                                            289,
                                            35,
                                            289,
                                            48
                                        ], enemyChildren).length) == 0) {
                                        (function () {
                                            var obj = __recognizer231367463.logProbe([
                                                    290,
                                                    36,
                                                    290,
                                                    47
                                                ], weaponLayer), fn = __recognizer231367463.logProbe([
                                                    290,
                                                    48,
                                                    290,
                                                    62
                                                ], obj.removeChildren);
                                            return fn.apply(obj, arguments);
                                        }.bind(this)());
                                        (function () {
                                            var obj = __recognizer231367463.logProbe([
                                                    291,
                                                    36,
                                                    291,
                                                    50
                                                ], weaponChildren), fn = __recognizer231367463.logProbe([
                                                    291,
                                                    51,
                                                    291,
                                                    55
                                                ], obj.draw);
                                            return fn.apply(obj, arguments);
                                        }.bind(this)());
                                    }
                                    var bulletSound = new (__recognizer231367463.logProbe([
                                            293,
                                            54,
                                            293,
                                            59
                                        ], Audio))('audio/smash.wav');
                                    (function () {
                                        var obj = __recognizer231367463.logProbe([
                                                294,
                                                32,
                                                294,
                                                43
                                            ], bulletSound), fn = __recognizer231367463.logProbe([
                                                294,
                                                44,
                                                294,
                                                48
                                            ], obj.play);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)());
                                    break;
                                }
                            }
                        }
                    }
                }, __recognizer231367463.logProbe([
                    301,
                    15,
                    301,
                    26
                ], weaponLayer));
            (function () {
                var obj = __recognizer231367463.logProbe([
                        303,
                        12,
                        303,
                        16
                    ], anim), fn = __recognizer231367463.logProbe([
                        303,
                        17,
                        303,
                        22
                    ], obj.start);
                return fn.apply(obj, arguments);
            }.bind(this)());
        }
        function createBox(pPosX, pPosY, images) {
            __recognizer231367463.logEntry([
                337,
                17,
                337,
                26
            ], arguments);
            var box = new (__recognizer231367463.logProbe([
                    338,
                    34,
                    338,
                    38
                ], __recognizer231367463.logProbe([
                    338,
                    26,
                    338,
                    33
                ], Kinetic).Rect))({
                    x: pPosX,
                    y: pPosY,
                    fillPatternImage: __recognizer231367463.logProbe([
                        341,
                        41,
                        341,
                        44
                    ], __recognizer231367463.logProbe([
                        341,
                        34,
                        341,
                        40
                    ], images).box),
                    width: 64,
                    height: 64
                });
            (function () {
                var obj = __recognizer231367463.logProbe([
                        346,
                        12,
                        346,
                        20
                    ], boxLayer), fn = __recognizer231367463.logProbe([
                        346,
                        21,
                        346,
                        24
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer231367463.logProbe([
                346,
                25,
                346,
                28
            ], box)));
            (function () {
                var obj = __recognizer231367463.logProbe([
                        347,
                        12,
                        347,
                        20
                    ], boxLayer), fn = __recognizer231367463.logProbe([
                        347,
                        21,
                        347,
                        25
                    ], obj.draw);
                return fn.apply(obj, arguments);
            }.bind(this)());
        }
        function arrowKeys(images) {
            __recognizer231367463.logEntry([
                350,
                17,
                350,
                26
            ], arguments);
            (function () {
                var obj = __recognizer231367463.logProbe([
                        351,
                        12,
                        351,
                        23
                    ], __recognizer231367463.logProbe([
                        351,
                        12,
                        351,
                        13
                    ], $)(__recognizer231367463.logProbe([
                        351,
                        14,
                        351,
                        22
                    ], document))), fn = __recognizer231367463.logProbe([
                        351,
                        24,
                        351,
                        31
                    ], obj.keydown);
                return fn.apply(obj, arguments);
            }.bind(this)(function (e) {
                __recognizer231367463.logEntry([
                    351,
                    32,
                    351,
                    40
                ], arguments);
                if (__recognizer231367463.logProbe([
                        352,
                        22,
                        352,
                        29
                    ], __recognizer231367463.logProbe([
                        352,
                        20,
                        352,
                        21
                    ], e).keyCode) == 37) {
                    if (function () {
                            var obj = __recognizer231367463.logProbe([
                                    353,
                                    23,
                                    353,
                                    26
                                ], car), fn = __recognizer231367463.logProbe([
                                    353,
                                    27,
                                    353,
                                    31
                                ], obj.getX);
                            return fn.apply(obj, arguments);
                        }.bind(this)() - 100 >= 150)
                        (function () {
                            var obj = __recognizer231367463.logProbe([
                                    354,
                                    24,
                                    354,
                                    27
                                ], car), fn = __recognizer231367463.logProbe([
                                    354,
                                    28,
                                    354,
                                    32
                                ], obj.setX);
                            return fn.apply(obj, arguments);
                        }.bind(this)(function () {
                            var obj = __recognizer231367463.logProbe([
                                    354,
                                    33,
                                    354,
                                    36
                                ], car), fn = __recognizer231367463.logProbe([
                                    354,
                                    37,
                                    354,
                                    41
                                ], obj.getX);
                            return fn.apply(obj, arguments);
                        }.bind(this)() - 100));
                    return false;
                } else if (__recognizer231367463.logProbe([
                        356,
                        28,
                        356,
                        35
                    ], __recognizer231367463.logProbe([
                        356,
                        26,
                        356,
                        27
                    ], e).keyCode) == 39) {
                    if (function () {
                            var obj = __recognizer231367463.logProbe([
                                    357,
                                    23,
                                    357,
                                    26
                                ], car), fn = __recognizer231367463.logProbe([
                                    357,
                                    27,
                                    357,
                                    31
                                ], obj.getX);
                            return fn.apply(obj, arguments);
                        }.bind(this)() + 100 <= 550)
                        (function () {
                            var obj = __recognizer231367463.logProbe([
                                    358,
                                    24,
                                    358,
                                    27
                                ], car), fn = __recognizer231367463.logProbe([
                                    358,
                                    28,
                                    358,
                                    32
                                ], obj.setX);
                            return fn.apply(obj, arguments);
                        }.bind(this)(function () {
                            var obj = __recognizer231367463.logProbe([
                                    358,
                                    33,
                                    358,
                                    36
                                ], car), fn = __recognizer231367463.logProbe([
                                    358,
                                    37,
                                    358,
                                    41
                                ], obj.getX);
                            return fn.apply(obj, arguments);
                        }.bind(this)() + 100));
                    return false;
                } else if (__recognizer231367463.logProbe([
                        360,
                        28,
                        360,
                        35
                    ], __recognizer231367463.logProbe([
                        360,
                        26,
                        360,
                        27
                    ], e).keyCode) == 32) {
                    var x = function () {
                            var obj = __recognizer231367463.logProbe([
                                    361,
                                    28,
                                    361,
                                    31
                                ], car), fn = __recognizer231367463.logProbe([
                                    361,
                                    32,
                                    361,
                                    36
                                ], obj.getX);
                            return fn.apply(obj, arguments);
                        }.bind(this)();
                    var y = function () {
                            var obj = __recognizer231367463.logProbe([
                                    362,
                                    28,
                                    362,
                                    31
                                ], car), fn = __recognizer231367463.logProbe([
                                    362,
                                    32,
                                    362,
                                    36
                                ], obj.getY);
                            return fn.apply(obj, arguments);
                        }.bind(this)();
                    __recognizer231367463.logProbe([
                        363,
                        20,
                        363,
                        43
                    ], __recognizer231367463.logProbe([
                        363,
                        20,
                        363,
                        32
                    ], createWeapon)(__recognizer231367463.logProbe([
                        363,
                        33,
                        363,
                        42
                    ], weaponObj)));
                    var bulletSound = new (__recognizer231367463.logProbe([
                            365,
                            42,
                            365,
                            47
                        ], Audio))('audio/shot.wav');
                    (function () {
                        var obj = __recognizer231367463.logProbe([
                                366,
                                20,
                                366,
                                31
                            ], bulletSound), fn = __recognizer231367463.logProbe([
                                366,
                                32,
                                366,
                                36
                            ], obj.play);
                        return fn.apply(obj, arguments);
                    }.bind(this)());
                    return false;
                }
            }));
        }
        function init() {
            __recognizer231367463.logEntry([
                372,
                17,
                372,
                21
            ], arguments);
            var sources = {
                    pit: 'images/pits.png',
                    car: 'images/car.png',
                    bullet: 'images/bullet.png',
                    box: 'images/box.png'
                };
            __recognizer231367463.logProbe([
                381,
                12,
                383,
                14
            ], __recognizer231367463.logProbe([
                381,
                12,
                381,
                22
            ], loadImages)(__recognizer231367463.logProbe([
                381,
                23,
                381,
                30
            ], sources), function (images) {
                __recognizer231367463.logEntry([
                    381,
                    32,
                    381,
                    40
                ], arguments);
                __recognizer231367463.logProbe([
                    382,
                    16,
                    382,
                    39
                ], __recognizer231367463.logProbe([
                    382,
                    16,
                    382,
                    31
                ], drawCanvasStage)(__recognizer231367463.logProbe([
                    382,
                    32,
                    382,
                    38
                ], images)));
            }));
        }
        return { init: init };
    }();
}(__recognizer231367463.logProbe([
    391,
    2,
    391,
    14
], Presentation), __recognizer231367463.logProbe([
    391,
    16,
    391,
    22
], jQuery)));