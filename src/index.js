import { menuContent } from './menu';
import { homeContent, tabButtons } from './home';
import { locationContent } from './location';

const addNavEvents = () => {
    const container = document.getElementById("container");
    const tab = document.getElementById("tab");

    tab.addEventListener("click", (event)=>{
        if(event.target.className === 'navBtn') {
            if(event.target.id === 'homeBtn') {
                container.innerHTML = "";
                tabButtons();
                addNavEvents();
                homeContent();
                return;
            }
            if(event.target.id === 'menuBtn') {
                container.innerHTML = "";
                tabButtons();
                addNavEvents();
                menuContent();
                return;
            }
            if(event.target.id === 'locationBtn') {
                container.innerHTML = "";
                tabButtons();
                addNavEvents();
                locationContent();
                return;
            }
        }
    })
};

function init(){
    tabButtons();
    homeContent();
    addNavEvents();
};

init();