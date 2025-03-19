// Birth Month Generation using Map

//Create a Map to store month-wise birthdays
let birthMap = new Map();

//Generate random months for 50 people
for (let i = 0; i < 50; i++) {
    let month = Math.floor(Math.random() * 12) + 1; // Random month 1 to 12

    //Add person to respective month in Map
    if (!birthMap.has(month)) {
        birthMap.set(month, []);
    }
    birthMap.get(month).push("Person" + (i + 1));
}

//Output results
for (let [month, people] of birthMap) {
    console.log("Month:", month, "has birthdays of:", people);
}
