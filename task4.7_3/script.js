function printGreatestAndSmallestNum(arr) {
   console.log(arr);
   let greatestNum = arr[0];
   let smallestNum = arr[0];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > greatestNum) {
         greatestNum = arr[i];
      }

      if (arr[i] < smallestNum) {
         smallestNum = arr[i];
      }
   }

   console.log(`The smallest number is ${smallestNum}, the greatest number is ${greatestNum}`);
}

let arr1 = [41, 7, 14, 2, 95];
let arr2 = [22, 1, 15, 189, 76];

printGreatestAndSmallestNum(arr1);
printGreatestAndSmallestNum(arr2);
