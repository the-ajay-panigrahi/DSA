// Question 1 : Sum of all Natural Numbers from 1 to n.

// function sumOfNaturalNumbers(num) {
//   return (num * (num + 1)) / 2;
// }

function sumOfNaturalNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfNaturalNumbers(100));
