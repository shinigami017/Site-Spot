var sites = sites_data.slice(0),
    range_limit = 10;
const button = document.querySelector(".site-btn");

// const buttons = document.querySelectorAll(".site-btn");
// for (i = 0; i < button.length; i++) {
//     buttons[i].addEventListener("click", function(event) {
//         event.preventDefault();
//         let category = this.dataset.target;
//         init();
//     });
// }

button.addEventListener("click", function(event) {
    event.preventDefault();
    init();
});

function init() {
    var url = getWebsite();
    launchSite(url);
    //if user has visited all sites
    if (sites.length === 0) {
        sites = sites_data.slice(0);
    }
}

function getWebsite() {
    var range = (sites.length > range_limit) ? range_limit : sites.length;
    // this technique will generate random indexes from grouping of first tens 
    // var index = Math.floor(Math.random() * range);
    var index = Math.floor(Math.random() * sites.length);
    var url = sites[index];
    // splicing the sites array to prevent revisiting the same site multiple times
    sites.splice(index, 1);
    return url;
}

function launchSite(url) {
    window.open(url);
}