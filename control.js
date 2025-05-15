document.addEventListener('DOMContentLoaded', function() {

var nav = document.querySelectorAll('.nav > div');

var navf = ['dashboard.html','resources.html','ideas.html',"notifications.html",'settings.html']
for(i=0;i<nav.length;i++){
nav[i].setAttribute('onclick',"window.location.href = '" + navf[i] + "'");
}
});
