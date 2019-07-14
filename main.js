// Task1 Build a function that does currency converter from USD to UAH (1 USD = 8 UAH).

const cost = 8;
function convert(amount) {
convert = amount*cost;
console.log (convert);
}
convert(2)

// Task2 A function which returns reversed string.

function reverse(str) {
  const backword = str.split('').reverse().join('');
  console.log(backword);
  return backword;
}
reverse("abc")

// Task3 A function which prints the stair picture of size n

function printStairs(n) {
let printStairs = "";
for (let i = 0; i< n; i++) {
console.log (printStairs+="#");
}
}
printStairs(3)

// Task4 A function which returns total sum of a range

function sumRange(start, end) {
  let n = 0
  for (i= start; i< end + 1; i++)
  n = n += i;
  console.log(n);
}
sumRange(2, 4)
sumRange(-1, 3)

// Task5 Write a function which returns the smallest of three numbers.

function min(a, b, c) {
const min = Math.min(a,b,c);
console.log ('Найменьшое число -', min);
}
min(10, 5, 11)
min(3, 8, 4)

// Task6 A function which prints the pyramid picture of size n

function printPyramid(n) {
let pyramid = '';
for (let i= 0; i < n; i++) {
  let back = ((n*2)-(i*2))/2;
  let a = ' ';
  pyramid += ' ';
  console.log (a.repeat(back),pyramid +='#');
   }
}
printPyramid(3)

// Task7 A function which transforms first and last letter to uppercase (use built in string’s method).

function firstAndLastToUpper(str) {
  let n =str.length-1
  let firstAndLastToUpper = str[0].toUpperCase() + str.slice(1,n) + str[n].toUpperCase();
console.log (firstAndLastToUpper)
}
firstAndLastToUpper('abc')

// Task8 A function which returns true if string contains ironman or cursor or ostap otherwise returns false. The function must be case-insensitive.

function cursorCheck(str) {
let b = ["ironman","cursor","Ostap"];
  if(str.includes(b[0]) || str.includes(b[1])  || str.includes(b[2])) {
    return console.log(true);
} else {
    return console.log(false);
}
}
cursorCheck("Hello I am ironman")
cursorCheck("Superman is here")