function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch (err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

var api_url = 'https://api.thedogapi.com/v1/images/search?'
api_url += "size=small&"
api_url += "mime_types=gif"

ajax_get(api_url, function (data) {
    var html = '<img src="' + data[0]["url"] + '">';
    document.getElementById("image").innerHTML = html;
});

function cavacoToggle() {
    ajax_get(api_url, function (data) {
        var html = '<img src="' + data[0]["url"] + '">';
        document.getElementById("image").innerHTML = html;
    });
}