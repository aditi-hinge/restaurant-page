import './style.css';

const container = document.getElementById("container");

const locationContent=()=>{
    console.log("location here!");
    const locationBox = document.createElement("div");
    locationBox.setAttribute("id", "locationBox");
    container.appendChild(locationBox);

    // contact number
    const contact = document.createElement("div");
    contact.setAttribute("class", "contact");
    contact.textContent = "555-555-555"
    locationBox.appendChild(contact);

    // address
    const address = document.createElement("div");
    address.setAttribute("class", "contact");
    address.textContent = "1600 Pennsylvania Avenue NW, Washington, DC 20500, United States"
    locationBox.appendChild(address);

    // map
    const map = document.createElement("div");
    map.setAttribute("id", "map");
    locationBox.appendChild(map);

    return container;
}

export { locationContent };