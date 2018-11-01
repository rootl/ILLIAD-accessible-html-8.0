
(function() {
var f = document.getElementById('searchbox_002734845617811589582:ce-duog2ose');
if (!f) {
f = document.getElementById('searchbox_demo');
}
if (f && f.q) {
var q = f.q;
var n = navigator;
var l = location;
var su = function () {
var u = document.createElement('input');
var v = document.location.toString();
var existingSiteurl = /(?:[?&]siteurl=)([^&#]*)/.exec(v);
if (existingSiteurl) {
v = decodeURI(existingSiteurl[1]);
}
var delimIndex = v.indexOf('://');
if (delimIndex >= 0) {
v = v.substring(delimIndex + '://'.length, v.length);
}
u.name = 'siteurl';
u.value = v;
u.type = 'hidden';
f.appendChild(u);
};
if (n.appName == 'Microsoft Internet Explorer') {
var s = f.parentNode.childNodes;
for (var i = 0; i < s.length; i++) {
        if (s[i].nodeName == 'SCRIPT' &&
            s[i].attributes['src'] &&
            s[i].attributes['src'].nodeValue == unescape('http:\x2F\x2Fwww.google.com\x2Fcoop\x2Fcse\x2Fbrand?form=searchbox_002734845617811589582%3Ace-duog2ose')) {
          su();
          break;
        }
      }
    } else {
      su();
    }

    
    if (n.platform == 'Win32') {
      q.style.cssText = 'border: 1px solid #7e9db9; padding: 2px;';
    }

    
    if (window.history.navigationMode) {
      window.history.navigationMode = 'compatible';
    }

    var b = function() {
      if (q.value == '') {
        q.style.background = '#FFFFFF url(https://illiad.geneseo.edu/images/google_custom_search_watermark.gif) left no-repeat';
      }
    };

    var f = function() {
      q.style.background = '#ffffff';
    };

    q.onfocus = f;
    q.onblur = b;

    
    if (!/[&?]q=[^&]/.test(l.search)) {
      b();
    }
  }
})();
