function printPrimeNumbers(num) {
   for (let i = 2; i <= num; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
         if (i % j === 0) {
            isPrime = false;
            break;
         }
      }
      if (isPrime) {
         console.log(i);
      }
   }
}

printPrimeNumbers(10);
printPrimeNumbers(21);
