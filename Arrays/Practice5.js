//0 – 100, find the digits that are repeated twice like 33, 77,
// etc and store them in an array

let repeatedDigits = [];

for (let i = 10; i < 100; i++) {
    if (Math.floor(i / 10) === i % 10) {
        repeatedDigits.push(i);
    }
}
console.log("Repeated Digits: ", repeatedDigits);
