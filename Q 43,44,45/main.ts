console.log("Q43 of Day 15");
function magician(magicians : string[]){
    magicians.forEach(name => console.log(name))
}
function make_Great(magicians: string[]){
    return magicians.map(name => `The great ${name}`)
}
let magicianName= ["James" , "David" , "Shin Lim" ,"Apollo"];
let makingCopy = magicianName.slice()
let copymagician =make_Great( makingCopy )
magician(magicianName)
magician(copymagician)

console.log("Q44 of Day 15");
function sandWich(... Items: string[]){
    console.log("\n making a sandwich with the following item: \n")
    Items.forEach(itemName => console.log(itemName));
    console.log("Enjoy your sandwich")
}
sandWich("Bread","Chicken","Vegetables","Cheese","Ketchup","Mayo");
sandWich("Bread","Beef kabab","egg","onion","tomato","ketchup");
sandWich("Bread","shamiKabab","egg","ketchup","mayo","onion");

console.log("Q45 of Day 15");
function car(manuFactur , modal , ...options){
    let cars= {
        manuFactur : manuFactur,
        model : modal   
    };
    options.forEach(option => {
        let [Key ,value] = option.split(":");
        cars[Key.trim()]= value.trim();
    });
    return cars;
}
let myCar = car ("Honda","HR-V Crossover." ,"color:black" , "moonroof : yes");
console.log(myCar);

