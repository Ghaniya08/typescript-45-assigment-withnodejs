console.log("Q43 of Day 15");
function magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_Great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
var magicianName = ["James", "David", "Shin Lim", "Apollo"];
var makingCopy = magicianName.slice();
var copymagician = make_Great(makingCopy);
magician(magicianName);
magician(copymagician);
console.log("Q44 of Day 15");
function sandWich() {
    var Items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Items[_i] = arguments[_i];
    }
    console.log("\n making a sandwich with the following item: \n");
    Items.forEach(function (itemName) { return console.log(itemName); });
    console.log("Enjoy your sandwich");
}
sandWich("Bread", "Chicken", "Vegetables", "Cheese", "Ketchup", "Mayo");
sandWich("Bread", "Beef kabab", "egg", "onion", "tomato", "ketchup");
sandWich("Bread", "shamiKabab", "egg", "ketchup", "mayo", "onion");
console.log("Q45 of Day 15");
function car(manuFactur, modal) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var cars = {
        manuFactur: manuFactur,
        model: modal
    };
    options.forEach(function (option) {
        var _a = option.split(":"), Key = _a[0], value = _a[1];
        cars[Key.trim()] = value.trim();
    });
    return cars;
}
var myCar = car("Honda", "HR-V Crossover.", "color:black", "moonroof : yes");
console.log(myCar);
