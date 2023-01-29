const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Software Developer.", "Web Developer.", "Web Designer.", "Frontend Developer."];

let textArrayIndex = 0;
let charIndex = 0;

const erase = function() {
    if(charIndex > 0) {
        cursor.classList.remove("blink");
        typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 80); 
    }else {
        cursor.classList.add("blink");
        textArrayIndex++;
        if(textArrayIndex > textArray.length - 1) {
            textArrayIndex = 0;
        }
        setTimeout(type, 1000);
    }
}


const type = function () {
    if(charIndex <= textArray[textArrayIndex].length - 1) {
        cursor.classList.remove("blink");
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 120);
    }else {
        cursor.classList.add("blink");
        setTimeout(erase, 1000);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    type(); 
});