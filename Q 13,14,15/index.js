console.log("Q13 of Day 5");
var transports = ["car", "bus", "auto", "bike"];
transports.forEach(function (transport) { return console.log("I would like to own my ".concat(transport)); });
console.log("Q14 of Day 5");
var guestList = ["Shahzad", "Abida", "Radiya", "Arooba", "Suhaira"];
guestList.forEach(function (guests) { return console.log("".concat(guests, " You are invited in dinner party ")); });
console.log("Q15 of Day5");
var cantCome = guestList[4];
console.log(cantCome, "she cant come in dinner");
guestList.splice(4, 4, "Taha");
guestList.forEach(function (addedGuest) { return console.log("Asalamoalikum ".concat(addedGuest, " please come for dinner on saturday night")); });
