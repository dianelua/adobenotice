'use strict';

module.exports = function(settings) {
    if (settings.domain) {
        var containerId = settings.container || "teconsent";
        var gtm = settings.gtm ? "&gtm=1" : "";
        var banner = settings.banner ? "&js=bb&noticeType=bb" : "";
        var text = settings.text ? "&text=true" : "";
        
        var notice = document.createElement("script");
        notice.setAttribute("async", "async");
        notice.setAttribute("type", "text/javascript");
        notice.setAttribute("crossorigin", "");
        notice.src = "https://consent.truste.com/notice?domain=" + settings.domain + "&c=" + containerId + gtm + banner + text;
        (document.getElementsByTagName("body")[0] || document.getElementsByTagName("head")[0]).appendChild(notice);
    }
};