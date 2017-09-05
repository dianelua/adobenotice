'use strict';

module.exports = function(settings) {
    if (settings.domain) {
        var containerId = settings.container || "teconsent";
        var notice = document.createElement("script");
        notice.setAttribute("async", "async");
        notice.setAttribute("type", "text/javascript");
        notice.setAttribute("crossorigin", "");
        notice.src = "https://eu-icon-qa-sf.truste-svc.net/notice?domain=" + settings.domain + "&c=" + containerId;
        (document.getElementsByTagName("body")[0] || document.getElementsByTagName("head")[0]).appendChild(notice);
    }
};