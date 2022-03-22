import './style.css';

const container = document.getElementById("container");

// home tab
const homeContent = () => {
    const homeDiv = document.createElement("div");
    homeDiv.setAttribute("id","homeContent");
    container.appendChild(homeDiv);

    // create
    const welcome = document.createElement("div");
    welcome.textContent = "Welcome to Freddy Fazzbear's Pizzaria";

    // set attribute
    welcome.setAttribute("id", "welcome");

    //append
    homeDiv.appendChild(welcome);
    
    return container;
}

// buttons for tabs
const tabButtons = () => {

    // create tab div
    const tab = document.createElement("div");
    tab.setAttribute("id","tab");
    container.appendChild(tab);

    // create
    const homeButton = document.createElement("button");
    const menuButton = document.createElement("button");
    const locationButton = document.createElement("button");

    // set IDs
    homeButton.setAttribute("id", "homeBtn");
    menuButton.setAttribute("id", "menuBtn");
    locationButton.setAttribute("id", "locationBtn");

    // set class names
    homeButton.setAttribute("class", "navBtn");
    menuButton.setAttribute("class", "navBtn");
    locationButton.setAttribute("class", "navBtn");

    // name
    homeButton.textContent = "HOME";
    menuButton.textContent = "MENU";
    locationButton.textContent = "LOCATION";

    // append
    tab.appendChild(homeButton);
    tab.appendChild(menuButton);
    tab.appendChild(locationButton);

    // return
    return container
}

export { homeContent, tabButtons };