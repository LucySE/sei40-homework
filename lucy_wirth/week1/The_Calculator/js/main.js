// # The Calculator
//
// ## Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
function squareNumber (num){
  let squaredNumber = num * num;
console.log(`The result of squaring the number ${num} is ${squaredNumber}`);
}
squareNumber(3);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber (num){
  let halvedNumer = num / 2;
  console.log(`Half of ${num} is ${halvedNumer}.`);
}
halfNumber(5);
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf (num1, num2){
  let percentage = num1 / num2 *100;
  console.log(`${num1} is ${percentage}% of ${num2}`);
}
percentOf(2,4);
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

function areaOfCircle (radius){
  let area = Math.PI * (radius * radius);
  console.log(`The area for a circle with radius ${radius} is ${area}`);
}
areaOfCircle(2);
// Bonus: Round the result so there are only two digits after the decimal.
