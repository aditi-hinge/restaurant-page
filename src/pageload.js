import Cat from './cat.jpeg';

let container = document.getElementById("container");

const pageLoad=()=>{
    //creating heading
    const heading = document.createElement("h2");
    container.appendChild(heading);
    heading.textContent = "Welcome to Freddy FazzBear's Pizzeria!";
    
    //add image
    const myBackground = new Image();
    myBackground.src = Cat;
    container.appendChild(myBackground);

    //writing the heading 
    const review = document.createElement("div");
    review.textContent = "meow meow meow";
    container.appendChild(review);
}

//append it
document.body.appendChild(pageLoad());

export { pageLoad };