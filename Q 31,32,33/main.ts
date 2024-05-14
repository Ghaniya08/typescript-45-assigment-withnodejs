console.log("Q31 of day 11");
let user = [];
if (user.length === 0){
    console.log("we dont find the username!");
} else {

}
console.log("Q32 of day 11");
let userName = ["ghaniya08", "rasiya03" , "taha15", "arooba14"];
let newUsers = ["shahzad07", "abida22", "suhaira28","ghaniya08"];
newUsers.forEach(newUsers => {
    if (userName.some(userName=>userName.toLowerCase()===newUsers.toLowerCase())){
        console.log(`${newUsers} This username is not avilable please enter new username`);
     } else{
            console.log(`${newUsers} is available`);
        }
});
console.log("Q33 of day 11");
let numbers = [1,2,3,4,5,6,7, 8,9,10];
for(let oneNumber of numbers){
    let ordinalEnding : string;

    if(oneNumber ===1){
        ordinalEnding = "st"
    }else if (oneNumber === 2){
        ordinalEnding = "nd"
    }else if (oneNumber === 3){
        ordinalEnding = "rd"
    }else{ 
        ordinalEnding = "th"
    }
    console.log(`${oneNumber}${ordinalEnding}  `)
}   