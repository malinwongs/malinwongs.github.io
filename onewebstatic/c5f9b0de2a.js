document.addEventListener("DOMContentLoaded",function(){var a,b,c,d;for(a=document.querySelectorAll("div[data-id]"),c=0;c<a.length;c++)b=a[c],function(a){d=a.getAttribute("data-specific-kind"),d&&"CODE"!==d&&"WEBSHOP"!==d&&a.addEventListener("click",function(a){a.stopPropagation()})}(b);for(a=document.querySelectorAll("div[data-link='we-link']"),c=0;c<a.length;c++){b=a[c];var e=b.getAttribute("class"),f=b.firstChild.getAttribute("href");if(e&&e.indexOf("shinybox")>-1)b.setAttribute("href",f);else{var g=b.getAttribute("target");!function(a,b,c){a.addEventListener("click",function(a){a.stopPropagation(),window.open(b,c||"_self")})}(b,f,g)}}for(a=document.querySelectorAll("a[data-stop-propagation='true']"),c=0;c<a.length;c++)b=a[c],function(a){a.addEventListener("click",function(a){a.stopPropagation()})}(b)});