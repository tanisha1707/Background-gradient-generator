let btn1 = document.querySelector(".color-1");
let btn2 = document.querySelector(".color-2");

const getHexValue = () => {
    let hexavalues = "0123456789abcdef";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors += hexavalues[Math.floor(Math.random() * 16)];
    }
    return colors;
};


const handleButton1 = () => {
    let rgb1 = getHexValue();
    console.log(rgb1);
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, #444)`;

    // Update the code display section
    document.querySelector(".code-container").textContent = 
        `background-image: linear-gradient(to right, ${rgb1}, #444);`;
};


const handleButton2 = () => {
    let rgb2 = getHexValue();
    console.log(rgb2);
    document.body.style.backgroundImage = `linear-gradient(to right, #000, ${rgb2})`;

    // Update the code display section
    document.querySelector(".code-container").textContent = 
        `background-image: linear-gradient(to right, #000, ${rgb2});`;
};


btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);