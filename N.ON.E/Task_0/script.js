import 'bootstrap@4.6.0'
import $ from 'jquery'

$('button')
  .html('Choose color') // Try edit it...
  .on('click', () => document.getElementById("out").value = document.getElementById("buts").value * document.getElementById("buts").value )

// function createColorPalette(value) {
//     var v = 255/value;
//     for( var rStep = 0, r = 0; rStep < v; rStep++) {    
//         for( var gStep = 0, g = 0; gStep < v; gStep++ ) {       
//             for( var bStep = 0, b = 0; bStep < v; bStep++ ) {                                                  
//                 createDiv(r,g,b);
//                 b += value;
//             }
//             g += value;
//         }
//         r += value;
//     }
//     createBr();
// }
console.log('App started')
// createColorPalette(5)

const body = document.getElementById('body');
const green = document.getElementsByClassName('green');
const red = document.getElementsByClassName('red');

document.addEventListener('click', (e) => {
  console.log(e.target == green);
  switch (e.target) {
    case green:
      body.style.backgroundColor = 'green';
      break;
  }
  console.log(e.target);
})
