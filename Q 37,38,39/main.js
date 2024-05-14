"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Q 37 of Day 13,, 100 days of coding");
function make_shirt(size = "large", printingMessage = "I love type") {
    console.log(`Creating a ${size} size shirt with the ${printingMessage} prints on shirt`);
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "GhHANIYA:)");
console.log("Q 38 of Day 13,, 100 days of coding");
function cityName(city, country = "Saudia Arab") {
    console.log(`${city} is in ${country}`);
}
cityName("Mecca");
cityName("Medina");
cityName("Taif");
cityName("Jeddah");
cityName("Yanbu");
console.log("Q 39 of Day 13,, 100 days of coding");
function citycountry(city, country) {
    return `${city} , ${country}`;
}
console.log(citycountry("Karachi", "pakistan"));
console.log(citycountry("Toyoto", "Canada"));
console.log(citycountry("Paris", "London"));
