var url_string = location.toString();
var url = new URL(url_string);
var img_format = url.searchParams.get("format");
location.href = url_string.replace(/\?format=.*/, "."+img_format+":orig");
