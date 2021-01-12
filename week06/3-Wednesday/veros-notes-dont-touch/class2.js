var req = new XMLHttpRequest();

req.open("GET", "url");
req.send();
var headers = req.getAllResponseHeaders().toLowerCase();
alert(headers);
