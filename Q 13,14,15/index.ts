console.log("Q13 of Day 5");

let transports = ["car", "bus", "auto", "bike"];
transports.forEach (transport=>console.log (`I would like to own my ${transport}`));

console.log("Q14 of Day 5");

let guestList = ["Shahzad", "Abida" , "Radiya" ,"Arooba" , "Suhaira"];
guestList.forEach(guests => console.log(`${guests} You are invited in dinner party `));

console.log("Q15 of Day5");

let cantCome = guestList[4];
console.log(cantCome, "she cant come in dinner");
guestList.splice(4, 4,"Taha");
guestList.forEach(addedGuest => console.log(`Asalamoalikum ${addedGuest} please come for dinner on saturday night`)); 

