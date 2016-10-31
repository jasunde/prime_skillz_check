// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;
for (var i = 0; i < 5; i++) {
  checkz++;
}

// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
for (var i = 0; i < 3; i++) {
  checkz -= (-2);
}

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//

/*
 * Firstly, it creates an array named numbers with the values 1 - 7
 * Then, it creates a total variable set to 0
 * It loops through each of the indexes of number and adds each value to total
 * Lastly, it logs total to the console
*/
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);
