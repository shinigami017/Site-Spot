var games_sites = sites_data.games_sites.slice(0),
    fun_sites = sites_data.fun_sites.slice(0),
    cool_sites = sites_data.cool_sites.slice(0),
    useless_sites = sites_data.useless_sites.slice(0),
    useful_sites = sites_data.useful_sites.slice(0),
    range_limit = 10;

const buttons = document.querySelectorAll(".site-btn");
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        event.preventDefault();
        let category = this.dataset.target;
        init(category);
    });
}

function init(category) {
    var url = getWebsite(category);
    launchSite(url);
    //if user has visited all sites
    hasVisitedAll(category);
}

function getWebsite(category) {
    // this technique will generate random indexes from grouping of first tens 
    //var range = (sites.length > range_limit) ? range_limit : sites.length;
    // var index = Math.floor(Math.random() * range);
    var index, url;
    switch (category) {
        case "games":
            index = Math.floor(Math.random() * games_sites.length);
            url = games_sites[index];
            // splicing the sites array to prevent revisiting the same site multiple times
            games_sites.splice(index, 1);
            break;
        case "fun":
            index = Math.floor(Math.random() * fun_sites.length);
            url = fun_sites[index];
            // splicing the sites array to prevent revisiting the same site multiple times
            fun_sites.splice(index, 1);
            break;
        case "cool":
            index = Math.floor(Math.random() * cool_sites.length);
            url = cool_sites[index];
            // splicing the sites array to prevent revisiting the same site multiple times
            cool_sites.splice(index, 1);
            break;
        case "useless":
            index = Math.floor(Math.random() * useless_sites.length);
            url = useless_sites[index];
            // splicing the sites array to prevent revisiting the same site multiple times
            useless_sites.splice(index, 1);
            break;
        case "useful":
            index = Math.floor(Math.random() * useful_sites.length);
            url = useful_sites[index];
            // splicing the sites array to prevent revisiting the same site multiple times
            useful_sites.splice(index, 1);
            break;
    }
    return url;
}

function launchSite(url) {
    window.open(url);
}

function hasVisitedAll(category) {
    switch (category) {
        case "games":
            if (games_sites.length === 0) {
                games_sites = sites_data.games_sites.slice(0);
            }
            break;
        case "fun":
            if (fun_sites.length === 0) {
                fun_sites = sites_data.fun_sites.slice(0);
            }
            break;
        case "cool":
            if (cool_sites.length === 0) {
                cool_sites = sites_data.cool_sites.slice(0);
            }
            break;
        case "useless":
            if (useless_sites.length === 0) {
                useless_sites = sites_data.useless_sites.slice(0);
            }
            break;
        case "useful":
            if (useful_sites.length === 0) {
                useful_sites = sites_data.useful_sites.slice(0);
            }
            break;
    }
}