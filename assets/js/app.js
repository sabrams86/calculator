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

//temp is the current string of numbers being typed into the calculator
var temp = "";

//clear button resets display and clears temp string
clear.addEventListener('click', function(){
  display.innerHTML = "";
  temp = "";
});

//this function returns an anonymous function that will add a number to the temp string
//and then display the new temp string on the display
var printNum = function(j) {
  return function (){
    temp += numbers[j];
    display.innerHTML = temp;
  }
}

//this for loop creates a set of click events for each of the number buttons that
//uses printNum to simply print that number onto the display
//it prevents you from having to type ten event listeners
for (var i=0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', printNum(i));
}

equals.addEventListener('click', function(){
  display.innerHTML = "WORKING";
});
