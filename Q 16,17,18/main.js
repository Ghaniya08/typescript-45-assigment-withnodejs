"use strict";
console.log("Q16");
let guest = ["Radiya", "shahzad", "Abida", "Arooba", "Suhaira", "Taha"];
guest.splice(5, 5, "pinko");
guest.push("suhaira");
guest.unshift("Taha");
let middleIndex = Math.floor(guest.length / 2);
guest.splice(middleIndex, 0, "Saim");
guest.forEach(guests => console.log(`Hey! ${guests} would you like to come today in dinner party`));
console.log("Q18");
console.log("unfortunately i can only invite 2 people for dinner :( ");
while (guest.length > 2) {
    let removeGuests = guest.pop();
    console.log(`sorry ${removeGuests} i cant invite you in dinner :( `);
}
console.log("Q19");
//orignal
let place = ["Japan", "new york", "england", "landon", "canada", "America"];
console.log("orignal order", place);
//sort but orignal is not change
console.log("Alphabetical order", [...place].sort());
console.log("still in orignal order", place);
//reverse but orignal is not change
console.log("Reverse alphabetical order", [...place].reverse());
console.log("still in orignal order", place);
//reverse and orignal is change
console.log("Reverse orignal order", place.reverse());
//reverse it again
console.log("Again Reverse orignal order", place.reverse());
//sort and orignal is change
console.log("Alphabetical order", place.sort());
// reverse again uaaaannnn
console.log("Reverse again orignal order", place.reverse());
