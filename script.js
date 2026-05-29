function createFlower(){

    const flower = document.createElement("div");

    flower.classList.add("flower");

    flower.innerHTML = "🌸";

    flower.style.left = Math.random() * window.innerWidth + "px";

    flower.style.animationDuration = (3 + Math.random() * 5) + "s";

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 8000);
}

setInterval(createFlower, 500);
const text = "Luxury & Beautiful Flowers in Turkestan 🌸";

let index = 0;

function typeText(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 80);
    }
}

typeText();