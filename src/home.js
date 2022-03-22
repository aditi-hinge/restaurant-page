import './style.css';
// import FnafBG from './fnaf.jpg';


let container = document.getElementById("container");

//home tab
const homeContent=()=>{
    console.log("home here!");
    //add BG image
    // const bGImage = new Image();
    // bGImage.src = FnafBG;
    // container.appendChild(bGImage);
    //home div
    const homeDiv = document.createElement("div");
    homeDiv.setAttribute("id","homeContent");
    container.appendChild(homeDiv);

    //create
    const welcome = document.createElement("div");
    welcome.textContent = "Welcome to Freddy Fazzbear's Pizzaria";

    //set attribute
    welcome.setAttribute("id", "welcome");

    //append
    homeDiv.appendChild(welcome);
    
    return container;
}

// document.body.appendChild(homeContent());

//buttons for tabs
const tabButtons=()=>{
    //create tab div
    let tab = document.createElement("div");
    tab.setAttribute("id","tab");
    container.appendChild(tab);

    //create
    let homeButton = document.createElement("button");
    let menuButton = document.createElement("button");
    let locationButton = document.createElement("button");

    //set IDs
    homeButton.setAttribute("id", "homeBtn");
    menuButton.setAttribute("id", "menuBtn");
    locationButton.setAttribute("id", "locationBtn");

    //set class names
    homeButton.setAttribute("class", "navBtn");
    menuButton.setAttribute("class", "navBtn");
    locationButton.setAttribute("class", "navBtn");

    //name
    homeButton.textContent = "HOME";
    menuButton.textContent = "MENU";
    locationButton.textContent = "LOCATION";

    //append
    tab.appendChild(homeButton);
    tab.appendChild(menuButton);
    tab.appendChild(locationButton);

    //return
    return container
}
// document.body.appendChild(tabButtons());

export { homeContent, tabButtons };
