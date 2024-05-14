console.log("Q 37 of Day 13,, 100 days of coding");
function make_shirt (size:string ="large" , printingMessage:string = "I love type"){
    console.log(`Creating a ${size} size shirt with the ${printingMessage} prints on shirt`);
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "GhHANIYA:)");
console.log("Q 38 of Day 13,, 100 days of coding");
function cityName (city : string , country:string = "Saudia Arab"){
    console.log(`${city} is in ${country}`);
}
cityName("Mecca");
cityName("Medina");
cityName("Taif");
cityName("Jeddah");
cityName("Yanbu");

console.log("Q 39 of Day 13,, 100 days of coding");
function citycountry (city: string , country:string ):string {
    return `${city} , ${country}`;
}
console.log(citycountry("Karachi" , "pakistan"));
console.log(citycountry("Toyoto" , "Canada"));
console.log(citycountry("Paris" , "London"));
