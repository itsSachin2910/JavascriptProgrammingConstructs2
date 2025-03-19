// Generate 10 Random 3-Digit Numbers and Store in Array
let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 900) + 100); // 100 to 999
}
console.log("Random Numbers: ", numbers);

// Find 2nd largest and 2nd smallest without sorting
let firstMax = -Infinity, secondMax = -Infinity;
let firstMin = Infinity, secondMin = Infinity;

for (let num of numbers) {
    if (num > firstMax) {
        secondMax = firstMax;
        firstMax = num;
    } else if (num > secondMax && num !== firstMax) {
        secondMax = num;
    }

    if (num < firstMin) {
        secondMin = firstMin;
        firstMin = num;
    } else if (num < secondMin && num !== firstMin) {
        secondMin = num;
    }
}
console.log("2nd Largest: ", secondMax);
console.log("2nd Smallest: ", secondMin);
