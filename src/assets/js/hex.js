const color = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C','D','E','F'];
const btn = document.getElementById('btn');
const colorName = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hrexColor = '#';
    for(let i = 0; i < 6; i++){
        hrexColor += color[getRandomNumber()];
    }
    document.body.style.backgroundColor = hrexColor;
    colorName.textContent = hrexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * color.length);
}