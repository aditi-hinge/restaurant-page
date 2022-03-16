const pageLoad=()=>{
    //creating heading
    const heading = document.createElement("h2");

    //writing the heading 
    heading.textContent = "Welcome to Freddy FazzBear's Pizzeria!";
    return heading;
}

//append it
document.body.appendChild(pageLoad());

export { pageLoad };