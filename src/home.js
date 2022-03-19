import './style.css';
import FnafBG from './fnaf.jpg';

let container = document.getElementById("container");

//home tab
const homeContent=()=>{
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
}

document.body.appendChild(homeContent());
