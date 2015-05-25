var multiply = function(x,y) {
  return Number(x)*Number(y);
}

var division = function(x,y) {
  return Number(x)/Number(y);
}

var addition = function(x,y) {
  return Number(x)+Number(y);
}

var subtraction = function(x,y) {
  return Number(x)-Number(y);
}

var calculate = function(but1,but2,op) {
  switch (op) {
    case "times":
      return multiply(but1,but2);
      break;
    case "divided_by":
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
