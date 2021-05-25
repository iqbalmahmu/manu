let x = Math.floor(Math.random() * 12);

console.log(x);

let age = 25;

if (true) {
  console.log("yeah you have a new age of " + age);
} else if (false) {
  console.log("u you have not reachd the " + age);
} else {
  console.log("sorry dude u  have to  wait");
}

// get todayd name .
let day;
switch (new Date().getDay()) {
  case 1:
    day = "Friday";
    break;
  case 2:
    day = "Satarday";
    break;
  case 3:
    day = "Sunday";
    break;
  case 4:
    day = "Monday";
    break;
  case 5:
    day = "Tuesday";
    break;
  case 6:
    day = "Wednesday";
    break;
  case 7:
    day = "Thursday";
  default:
    "Looking forward to weeekend";
}

console.log("(today is " + day);

const myNumber = [45, 54, 34, 23, 1, 563, 32];
// let hold = myNumber.sort();
const reverse = myNumber.reverse();

let text;

myNumber.forEach(myFunction);

function myFunction(num) {
  text = text + " " + num;
}

console.log(text);

let car = { name: "bmw", model: 2014, color: "black" };

let obj = Object.values(car);

console.log(obj);

console.log(obj[2]);

var str = JSON.stringify(car);

console.log(str);

var i;
var max = "";

var y = findMax(56, 7, 43);
function findMax() {
  var i;
  var max = "";
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(y);
