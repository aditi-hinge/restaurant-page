import { menuContent } from './menu';
import { homeContent, tabButtons } from './home';
import { locationContent } from './location';



function addNavEvents(){
    const container =  document.getElementById("container");
    const homeBtn = document.getElementById("homeBtn");
    const menuBtn = document.getElementById("menuBtn");
    const locationBtn = document.getElementById("locationBtn");

    homeBtn.addEventListener("click", ()=>{
        container.innerHTML = "";
        tabButtons();
        homeContent();
        homeBtn.disabled = false;
    });
    menuBtn.addEventListener("click", ()=>{
        container.innerHTML = "";
        tabButtons();
        menuContent();
        menuBtn.disabled = false;
    });
    locationBtn.addEventListener("click", ()=>{
        container.innerHTML = "";
        tabButtons();
        locationContent();
        locationBtn.disabled = false;
    });
}

function init(){
    tabButtons();
    homeContent();
    addNavEvents();
};

init();
