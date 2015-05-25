//       Javascript Calculator - Steve Abrams
//----------------------------------------------------------
//this calculator will work using two temp variables to start
//temp will be the current string of numbers being built by the user
//temp2 will be the stored string
//for example:  if the user wants to multiply 122 * 10
//when the user types 122, that value will be stored in temp
//when the user clicks the X (times) button, 122 will be set to temp2 and temp will be reset
//the user will then type in 10, which will be stored in temp
//when the user clicks the equals button, temp and temp2 will be evaluated according to the multiply function
//the result will be stored in temp2 and displayed on the screen and temp will be reset

//get all buttons
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
//create array of number buttons
var numButtons = [zeroButton, oneButton, twoButton, threeButton, fourButton, fiveButton, sixButton, sevenButton, eightButton, nineButton];
//get all number values
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
//create array of all number values
var numbers = [zero, one, two, three, four, five, six, seven, eight, nine];
//get all operators
var plus = document.getElementsByName('plus')[0];
var minus = document.getElementsByName('minus')[0];
var times = document.getElementsByName('times')[0];
var divided_by = document.getElementsByName('divided_by')[0];

var operators = [plus, minus, times, divided_by];
//get remaining buttons
var clear = document.getElementsByName('clear')[0];
var equals = document.getElementsByName('equals')[0];
//get display
var display = document.getElementsByClassName('display')[0];

//temp is the current string of numbers being typed into the calculator
var temp = "";
//temp2 is the saved string of numbers
var temp2 = "";
//oper holds what operation is going to be performed on temp while temp2 is being typed
var oper = "";
//clear button resets display and clears temp string
var clearButton = function(){
  return clearScreen
}

var clearScreen = function(){
    display.innerHTML = "";
    temp = "";
}

clear.addEventListener('click', clearButton());

//this function returns an anonymous function that will add a number to the temp string
//and then display the new temp string on the display
var printNum = function(j) {
  return function (){
    temp += numbers[j];
    display.innerHTML = temp;
  }
}

var operate = function(op){
  return function (){
    oper = op;
    temp2 = temp;
    clearScreen();
  }
}
//this for loop creates a set of click events for each of the number buttons that
//uses printNum to simply print that number onto the display
//it prevents you from having to type ten event listeners

//this was helpful: http://stackoverflow.com/questions/17981437/how-to-add-event-listeners-to-an-array-of-objects
for (var i=0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', printNum(i));
}

for (var i=0; i < operators.length; i++) {
  operators[i].addEventListener('click', operate(operators[i].name));
}

equals.addEventListener('click', function(){
  console.log(temp);
  console.log(temp2);
  console.log(oper);
  var answer = calculate(temp, temp2, oper);
  clearScreen();
  display.innerHTML = answer;
  temp = answer;
  temp2 = "";
  oper = "";
  answer = "";
});
