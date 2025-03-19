// Problem 1 - Die Roll Simulation using Map

//Create an empty Map to store counts for each die face (1-6)
let dieMap = new Map();
for (let i = 1; i <= 6; i++) {
    dieMap.set(i, 0);
}

//Roll the die until one number reaches 10 times
let reached = false;
while (!reached) {
    let roll = Math.floor(Math.random() * 6) + 1; // Generate number between 1 to 6
    dieMap.set(roll, dieMap.get(roll) + 1);

    // Stop if any number reaches 10
    if (dieMap.get(roll) === 10) {
        reached = true;
    }
}

//Find the max and min rolled numbers
let max = -Infinity, min = Infinity;
let maxNum, minNum;

for (let [key, value] of dieMap) {
    if (value > max) {
        max = value;
        maxNum = key;
    }
    if (value < min) {
        min = value;
        minNum = key;
    }
}

//Output Results
console.log("Die Rolls Map:", dieMap);
console.log("Number with max rolls:", maxNum, "with", max, "times");
console.log("Number with min rolls:", minNum, "with", min, "times");
