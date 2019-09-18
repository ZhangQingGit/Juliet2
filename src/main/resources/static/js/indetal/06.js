
(function() {
    var protocol = window.location.protocol;
    var host = window.location.host;
    var baseUrl = protocol + '//' + host;

    window.GLOBAL_DOMAIN = window.GLOBAL_DOMAIN || {
        ctx: 'https://www.lagou.com',
        rctx: 'https://hr.lagou.com',
        crctx: 'https://hr.lagou.com/company',
        pctx: 'https://passport.lagou.com',
        gctx: 'https://gate.lagou.com',
        actx: 'https://account.lagou.com',
        cpctx: 'https://xiaoyuan.lagou.com',
        acctx: 'https://activity.lagou.com',
        paictx: 'https://pai.lagou.com',
        sctx: 'https://suggest.lagou.com',
        zctx: 'https://yanzhi.lagou.com',
        ectx: 'https://easy.lagou.com',
        proctx: 'https://pro.lagou.com',
        lgsctx: protocol + '//www.lgstatic.com',
        FE_frontLogin: baseUrl + '/frontLogin.do',
        FE_frontLogout: baseUrl + '/frontLogout.do',
        FE_frontRegister: baseUrl + '/frontRegister.do'
    };

    window.GLOBAL_CDN_DOMAIN = 'www.lgstatic.com';

    var CONST_VARS = window.CONST_VARS = (function() {
        var varsCache = {};
        var user;
        varsCache.user = user = {
            id: "15142320"
        };
        user.activated = true;

        var _hasOwnProperty = Object.prototype.hasOwnProperty;
        var _toString = Object.prototype.toString;

        return function (key) {
            var ret = {};
            var src = varsCache[key];
            if (_toString.call(src) === '[object Object]') {
                for (var prop in src) {
                    if (_hasOwnProperty.call(src, prop)) {
                        ret[prop] = src[prop];
                    }
                }
            } else {
                ret = src;
            }

            return ret;
        }

    })();
})();