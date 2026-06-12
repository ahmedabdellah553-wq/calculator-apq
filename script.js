function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

let lastAnswer = 0;

function calculate() {
    let display = document.getElementById("display");

    try {
        lastAnswer = eval(display.value);
        display.value = lastAnswer;
    } catch {
        display.value = "Error";
    }
}

function useAns() {
    document.getElementById("display").value += lastAnswer;
}
function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function toggleSign() {
  let display = document.getElementById("display");
  if (display.value.startsWith('-')) {
    display.value = display.value.slice(1);
  } else {
    display.value = '-' + display.value;
  }
}

function calculate() {
  let display = document.getElementById("display");
  try {
    let expression = display.value
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/√\(/g, 'Math.sqrt(')
      .replace(/π/g, 'Math.PI')
      .replace(/²/g, '**2')
      .replace(/\^/g, '**');
    
    lastAnswer = eval(expression);
    display.value = lastAnswer;
  } catch {
    display.value = "Error";
  }
}
function toggleSD() {
  let display = document.getElementById("display");
  let value = display.value;
  
  if (value === "" || value === "Error") return;
  
  try {
    let num = parseFloat(value);
    
    // لو الرقم فيه كسر عشري، حوله لصحيح
    if (num % 1 !== 0) {
      display.value = Math.round(num); // أو parseInt(num) لو عايز تقطع الكسر
    } 
    // لو الرقم صحيح، حوله لعشري
    else {
      display.value = num.toFixed(1); // هيضيف .0
    }
  } catch {
    display.value = "Error";
  }
}
