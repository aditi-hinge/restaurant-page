import './style.css';
import FnafBG from './fnaf.jpg';


let container = document.getElementById("container");

//home tab
const homeContent=()=>{
    //add BG image
    const bGImage = new Image();
    bGImage.src = FnafBG;
    container.appendChild(FnafBG);
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
    return welcome;
}

document.body.appendChild(homeContent());

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

    //name
    homeButton.textContent = "HOME";
    menuButton.textContent = "MENU";
    locationButton.textContent = "LOCATION";

    //append
    tab.appendChild(homeButton);
    tab.appendChild(menuButton);
    tab.appendChild(locationButton);

    //return
    return{
        homeButton, menuButton,locationButton
    };
}
document.body.appendChild(tabButtons());

export { homeContent, tabButtons };
