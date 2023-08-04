// Se obtienen los inputs
const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');

// Se obtienen los textos
const textRed = document.getElementById('red-text');
const textGreen = document.getElementById('green-text');
const textBlue = document.getElementById('blue-text');

// Se obtienen los valores actuales de los inputs
let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

// Se remplaza el texto
textRed.textContent = red;
textGreen.innerText = green;
textBlue.innerText = blue;


// Funcion que actualiza el color de fondo
function updateColor(red, green ,blue) {
    const colorRGB = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = colorRGB; // Se actualiza el color de fondo
}


// EventListener para inputRed
inputRed.addEventListener('change', (e) => {
    red = e.target.value; // Se obtiene el nuevo color
    textRed.innerText = red; // Se actualiza el texto
    updateColor(red, green, blue); // Se actualiza el fondo
});

// EventListener para inputGreen
inputGreen.addEventListener('change', (e) => {
    green = e.target.value;
    textGreen.innerText = green;
    updateColor(red, green, blue);
});

// EventListener para inputBlue
inputBlue.addEventListener('change', (e) => {
    blue = e.target.value;
    textBlue.innerText = blue;
    updateColor(red, green, blue);
});
