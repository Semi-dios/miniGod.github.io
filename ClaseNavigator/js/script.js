window.onload = function() {
    let cookieEnabled = navigator.cookieEnabled;
    if (cookieEnabled) {
        console.log("Cookie activos");

    } else {
        console.log("Cookie no activos");
    }
}