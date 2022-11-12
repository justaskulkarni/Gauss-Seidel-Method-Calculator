let x1 = document.getElementById('x1');
let y1 = document.getElementById('y1');
let z1 = document.getElementById('z1');
let c1 = document.getElementById('c1');

let x2 = document.getElementById('x2');
let y2 = document.getElementById('y2');
let z2 = document.getElementById('z2');
let c2 = document.getElementById('c2');

let x3 = document.getElementById('x3');
let y3 = document.getElementById('y3');
let z3 = document.getElementById('z3');
let c3 = document.getElementById('c3');

let calcBtn = document.getElementById('calcBtn');
let resultDisplay1 = document.getElementById('resultDisplay1');
let resultDisplay2 = document.getElementById('resultDisplay2');
let resultDisplay3 = document.getElementById('resultDisplay3');
let resultDisplay4 = document.getElementById('resultDisplay4');

calcBtn.addEventListener('click', calculate);

function calculate(){
    let x1_coeff = x1.value;
    let y1_coeff = y1.value;
    let z1_coeff = z1.value;
    let c1_coeff = c1.value;

    let x2_coeff = x2.value;
    let y2_coeff = y2.value;
    let z2_coeff = z2.value;
    let c2_coeff = c2.value;

    let x3_coeff = x3.value;
    let y3_coeff = y3.value;
    let z3_coeff = z3.value;
    let c3_coeff = c3.value;

    x1_coeff = parseFloat(x1_coeff);
    y1_coeff = parseFloat(y1_coeff);
    z1_coeff = parseFloat(z1_coeff);
    c1_coeff = parseFloat(c1_coeff);

    x2_coeff = parseFloat(x2_coeff);
    y2_coeff = parseFloat(y2_coeff);
    z2_coeff = parseFloat(z2_coeff);
    c2_coeff = parseFloat(c2_coeff);

    x3_coeff = parseFloat(x3_coeff);
    y3_coeff = parseFloat(y3_coeff);
    z3_coeff = parseFloat(z3_coeff);
    c3_coeff = parseFloat(c3_coeff);

    let x_display = 0, y_display = 0, z_display = 0;

    
    x_display = (c1_coeff - z_display * z1_coeff - y_display * y1_coeff) / x1_coeff;
    resultDisplay_x1.innerHTML = x_display;
    y_display = (c2_coeff - z_display * z2_coeff - x_display * x2_coeff) / y2_coeff;
    resultDisplay_y1.innerHTML = y_display;
    z_display = (c3_coeff - x_display * x3_coeff - y_display * y3_coeff) / z3_coeff;
    resultDisplay_z1.innerHTML = z_display; 

    x_display = (c1_coeff - z_display * z1_coeff - y_display * y1_coeff) / x1_coeff;
    resultDisplay_x2.innerHTML = x_display;
    y_display = (c2_coeff - z_display * z2_coeff - x_display * x2_coeff) / y2_coeff;
    resultDisplay_y2.innerHTML = y_display;
    z_display = (c3_coeff - x_display * x3_coeff - y_display * y3_coeff) / z3_coeff;
    resultDisplay_z2.innerHTML = z_display;
     

    x_display = (c1_coeff - z_display * z1_coeff - y_display * y1_coeff) / x1_coeff;
    resultDisplay_x3.innerHTML = x_display;
    y_display = (c2_coeff - z_display * z2_coeff - x_display * x2_coeff) / y2_coeff;
    resultDisplay_y3.innerHTML = y_display;
    z_display = (c3_coeff - x_display * x3_coeff - y_display * y3_coeff) / z3_coeff;
    resultDisplay_z3.innerHTML = z_display;
    
    x_display = (c1_coeff - z_display * z1_coeff - y_display * y1_coeff) / x1_coeff;
    resultDisplay_x4.innerHTML = x_display;
    y_display = (c2_coeff - z_display * z2_coeff - x_display * x2_coeff) / y2_coeff;
    resultDisplay_y4.innerHTML = y_display;
    z_display = (c3_coeff - x_display * x3_coeff - y_display * y3_coeff) / z3_coeff;
    resultDisplay_z4.innerHTML = z_display;

}
