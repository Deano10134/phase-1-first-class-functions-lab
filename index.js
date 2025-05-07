// Code your solution in this file
const returnFirstTwoDrivers = function (drivers) {(['Antonia', 'Nuru', 'Amari', 'Mo'])
    return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function (drivers) {(['Antonia', 'Nuru', 'Amari', 'Mo'])
    return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (multiplier) => {
    return function(fare) {
        return fare * multiplier;
    }
}
const fareDoubler = (fare) => {
    return fare * 2;
}
const fareTripler = (fare) => {
    return fare * 3;
}
const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers);
}

// Test cases
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Antonia', 'Nuru']
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Amari', 'Mo']
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); // ['Amari', 'Mo']
console.log(createFareMultiplier(2)(5)); // 10
console.log(fareDoubler(5)); // 10
console.log(fareTripler(5)); // 15
// The code defines several functions related to drivers and fare calculations.
// 1. `returnFirstTwoDrivers`: Returns the first two drivers from an array.
// 2. `returnLastTwoDrivers`: Returns the last two drivers from an array.
// 3. `selectingDrivers`: An array containing the two functions above.
// 4. `createFareMultiplier`: Returns a function that multiplies a fare by a given multiplier.
// 5. `fareDoubler`: Doubles a fare.
// 6. `fareTripler`: Triples a fare.
// 7. `selectDifferentDrivers`: Selects drivers based on the provided function.
// The test cases demonstrate the usage of these functions, showing how to manipulate arrays of drivers and calculate fares.
// The code is a demonstration of first-class functions in JavaScript, where functions can be passed as arguments, returned from other functions, and assigned to variables.