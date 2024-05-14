console.log("\nQuestion 28 of Day 10\n");
let myAge = 17;
if (myAge < 2) {
    console.log("You are baby");
} else if ( myAge< 4){
    console.log("You are toddler");
}else if(myAge< 13) {
    console.log("You are kid");
}else if( myAge < 20) {
    console.log("You are teenager");
}else if ( myAge < 65) {
    console.log("You are adult")
}else {
    console.log("You are elder");
}
console.log("\nQuestion 28 of Day 10\n");
let favouriteFruit : string [] = ["apple" , "banana" , "mango" , "cheery"];
if (favouriteFruit.includes("banana")) {
    console.log("you really like banana")
}
if (favouriteFruit.includes("cheery")){
    console.log("you really like cheery")
}else{
    console.log("you dont like it :(");
}
if (favouriteFruit.includes("orange")){
    console.log("you really like cheery")
}else{
    console.log("you dont like it :(");
}
console.log("\n Q30 of day 10\n");
let userName = ["admin", "user1", "user2","user3", "user4"];
userName.forEach(userNames =>{
    if (userNames === "admin"){
        console.log("\n Hello admin, would you like to see status report?\n");
    } else{
        console.log(`Hello ${userNames}, thank you for logging again.`);
    }
});