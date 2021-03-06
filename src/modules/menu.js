import PizzaImageOG from '../images/pizza.jpg';
import BurgerImageOG from '../images/burger.jpg';
import CupcakeImageOG from '../images/cupcake.jpg';
import '../style.css';

const container = document.getElementById("container");

const menuContent = () => {

    // make menu container
    const pizzaContainer = document.createElement("div");
    pizzaContainer.setAttribute("class", "menuBox");
    
    // pizza div
    const pizzaDiv = document.createElement("div");
    pizzaDiv.setAttribute("class", "foodDiv");

    // pizza image
    const pizzaImage = new Image();
    pizzaImage.src = PizzaImageOG;
    pizzaImage.setAttribute("class", "foodImage");
    
    // image div
    const pizzaImageDiv = document.createElement("div");
    pizzaImageDiv.setAttribute("class", "imageDiv");

    // pizza info
    const pizzaInfo = document.createElement("div");
    pizzaInfo.setAttribute("class", "foodInfo");
    pizzaInfo.textContent = "Freddy's Fun Time Pizza $20";

    // append pizzaDiv to menubox
    container.appendChild(pizzaContainer);
    pizzaContainer.appendChild(pizzaDiv);
    pizzaDiv.appendChild(pizzaImageDiv);
    pizzaImageDiv.appendChild(pizzaImage);
    pizzaDiv.appendChild(pizzaInfo);

    // menu container for burger
    const burgerContainer = document.createElement("div");
    burgerContainer.setAttribute("class", "menuBox");

    // burger div
    const burgerDiv = document.createElement("div");
    burgerDiv.setAttribute("class", "foodDiv");

    // add burger image
    const burgerImage = new Image();
    burgerImage.src = BurgerImageOG;
    burgerImage.setAttribute("class", "foodImage");

    // image div
    const burgerImageDiv = document.createElement("div");
    burgerImageDiv.setAttribute("class", "imageDiv");

    // burger info
    const burgerInfo = document.createElement("div");
    burgerInfo.setAttribute("class", "foodInfo");
    burgerInfo.textContent = "Bonnie's Double Patty Burger $18.99";

    // append burgerDiv to menubox
    container.appendChild(burgerContainer);
    burgerContainer.appendChild(burgerDiv);
    burgerDiv.appendChild(burgerImageDiv);
    burgerImageDiv.appendChild(burgerImage);
    burgerDiv.appendChild(burgerInfo);
    
    // make menu container for burger
    const cupcakeContainer = document.createElement("div");
    cupcakeContainer.setAttribute("class", "menuBox");

    // cupcake div
    const cupcakeDiv = document.createElement("div");
    cupcakeDiv.setAttribute("class", "foodDiv");

    // add cupcake image
    const cupcakeImage = new Image();
    cupcakeImage.src = CupcakeImageOG;
    cupcakeImage.setAttribute("class", "foodImage");

    // image div
    const cupcakeImageDiv = document.createElement("div");
    cupcakeImageDiv.setAttribute("class", "imageDiv");

    // burger info
    const cupcakeInfo = document.createElement("div");
    cupcakeInfo.setAttribute("class", "foodInfo");
    cupcakeInfo.textContent = "Chica's Pink Party Cupcake $5";

    // append pizzaDiv to menubox
    container.appendChild(cupcakeContainer);
    cupcakeContainer.appendChild(cupcakeDiv);
    cupcakeDiv.appendChild(cupcakeImageDiv);
    cupcakeImageDiv.appendChild(cupcakeImage);
    cupcakeDiv.appendChild(cupcakeInfo);

    return container;
}

export { menuContent };