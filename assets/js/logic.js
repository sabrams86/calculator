var multiply = function(x,y) {
  return x*y;
}

var division = function(x,y) {
  return x/y;
}

var addition = function(x,y) {
  return x+y;
}

var subtraction = function(x,y) {
  return x-y;
}

var calculate = function(but1,but2,op) {
  switch (op) {
    case "times":
      return multiply(but1,but2);
      break;
    case "divide":
      return division(but1,but2);
      break;
    case "plus":
      return addition(but1,but2);
      break;
    case "minus":
      return subtraction(but1,but2);
      break;
    default:
      return "ERROR";
  }
}
