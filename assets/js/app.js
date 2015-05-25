var oneButton = document.getElementsByName('one')[0];
var twoButton = document.getElementsByName('two')[0];
var threeButton = document.getElementsByName('three')[0];
var fourButton = document.getElementsByName('four')[0];
var fiveButton = document.getElementsByName('five')[0];
var sixButton = document.getElementsByName('six')[0];
var sevenButton = document.getElementsByName('seven')[0];
var eightButton = document.getElementsByName('eight')[0];
var nineButton = document.getElementsByName('nine')[0];
var zeroButton = document.getElementsByName('zero')[0];

var numButtons = [zeroButton, oneButton, twoButton, threeButton, fourButton, fiveButton, sixButton, sevenButton, eightButton, nineButton];

var one = document.getElementsByName('one')[0].innerText;
var two = document.getElementsByName('two')[0].innerText;
var three = document.getElementsByName('three')[0].innerText;
var four = document.getElementsByName('four')[0].innerText;
var five = document.getElementsByName('five')[0].innerText;
var six = document.getElementsByName('six')[0].innerText;
var seven = document.getElementsByName('seven')[0].innerText;
var eight = document.getElementsByName('eight')[0].innerText;
var nine = document.getElementsByName('nine')[0].innerText;
var zero = document.getElementsByName('zero')[0].innerText;

var clear = document.getElementsByName('clear')[0];
var equals = document.getElementsByName('equals')[0];
var display = document.getElementsByClassName('display')[0];

var numbers = [zero, one, two, three, four, five, six, seven, eight, nine]

var temp = "";

equals.addEventListener('click', function(){
  display.innerHTML = "HELLO!!!";
});

clear.addEventListener('click', function(){
  display.innerHTML = "";
});

//concatenate numbers until operator is hit
numButtons.addEventListener('click', function(){
  switch (i) {
    case numButtons[0]:
      temp += numbers[0];
      display.innerHTML = temp;
      break;
    case numButtons[0]:
      temp += numbers[0];
      display.innerHTML = temp;
      break;
    case numButtons[0]:
      temp += numbers[0];
      display.innerHTML = temp;
      break;
    case numButtons[0]:
      temp += numbers[0];
      display.innerHTML = temp;
      break;
    case numButtons[0]:
      temp += numbers[0];
      display.innerHTML = temp;
      break;
    case numButtons[0]:
      temp += numbers[0];
      display.innerHTML = temp;
      break;
    case numButtons[0]:
      temp += numbers[0];
      display.innerHTML = temp;
      break;
    case numButtons[0]:
      temp += numbers[0];
      display.innerHTML = temp;
      break;
    case numButtons[0]:
      temp += numbers[0];
      display.innerHTML = temp;
      break;
    case numButtons[0]:
      temp += numbers[0];
      display.innerHTML = temp;
      break;
    default:
      display.innerHTML = "ERROR";
  }
});
