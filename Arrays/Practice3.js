// Prime Factorization Program to store all the Prime Factors of a

// number n into an array

let n = 84; 
let primeFactors = [];

for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
        primeFactors.push(i);
        n /= i;
    }
}
console.log("Prime Factors: ", primeFactors);
