// Define an array of color values, including named colors and hexadecimal values.
const color = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

// Get the button element by its ID.
const btn = document.getElementById('btn');

// Get an element with the class 'color'.
const colorName = document.querySelector('.color');

// Add a click event listener to the button.
btn.addEventListener('click', function () {
    // Generate a random index to select a color from the 'color' array.
    const randomNumber = getRandomNumber();
    
    // Set the background color of the body to the selected color.
    document.body.style.backgroundColor = color[randomNumber];
    
    // Display the selected color name or code.
    colorName.textContent = color[randomNumber];
});

// Function to generate a random index within the 'color' array.
function getRandomNumber() {
    return Math.floor(Math.random() * color.length);
}