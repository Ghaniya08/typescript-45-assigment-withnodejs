console.log("Q31 of day 11");
var user = [];
if (user.length === 0) {
    console.log("we dont find the username!");
}
else {
}
console.log("Q32 of day 11");
var userName = ["ghaniya08", "rasiya03", "taha15", "arooba14"];
var newUsers = ["shahzad07", "abida22", "suhaira28", "ghaniya08"];
newUsers.forEach(function (newUsers) {
    if (userName.some(function (userName) { return userName.toLowerCase() === newUsers.toLowerCase(); })) {
        console.log("".concat(newUsers, " This username is not avilable please enter new username"));
    }
    else {
        console.log("".concat(newUsers, " is available"));
    }
});
console.log("Q33 of day 11");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordinalEnding = void 0;
    if (oneNumber === 1) {
        ordinalEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(oneNumber).concat(ordinalEnding, "  "));
}
