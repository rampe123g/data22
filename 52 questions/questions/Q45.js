// Q 45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// Solution 
function createCar(manufacturer, modelName) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    // Add additional information from keyword arguments
    additionalInfo.forEach(function (info) {
        for (var key in info) {
            if (info.hasOwnProperty(key)) {
                car[key] = info[key];
            }
        }
    });
    return car;
}
// Call the function with required information and additional name-value pairs
var carInfo = createCar("Toyota", "Camry", {
    color: "Blue",
    year: 2022,
    optionalFeature: "Sunroof",
});
// Print the returned Object
console.log("Car Information:", carInfo);
