function compareNumbers(num1, num2) {
   if (num1 > num2) {
      console.log(`${num1} is greater than ${num2}`);
   } else if (num2 > num1) {
      console.log(`${num2} is greater than ${num1}`);
   } else {
      console.log(`${num1} and ${num2} are equal`);
   }
}

compareNumbers(25, 4);
compareNumbers(2, 36);
compareNumbers(5, 5);
