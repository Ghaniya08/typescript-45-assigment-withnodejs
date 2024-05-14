console.log("Q 40 of Day 14");
function make_album (artistname:string , albumTitle:string , track?:number){
    let album: {artist:string, tittle:string , track?:number} = {
        artist: artistname,
        tittle: albumTitle,
    };
    if (track !== undefined){
        album.track = track;
    }
    return album;
}
let album1 = make_album("ghaniya" , "title1");
let album2 = make_album("radiya", "title3");
let album3 = make_album("arooba", "title2" , 3);
console.log(album1);
console.log(album2);
console.log(album3);

console.log("Q 41 of Day 14");
function magician_name(magician: string[]){
    magician.forEach(name => console.log(name))
}
let magicianName = ["James" , "David" , "Shin Lim" ,"Apollo"];
magician_name(magicianName);

console.log("Q 42 of Day 14");
function magician(magicians : string[]){
    magicians.forEach(name => console.log(name))
}
function make2(magicians: string[]){
    return magicians.map(name => `The great ${name}`)
}
let magician2 = ["James" , "David" , "Shin Lim" ,"Apollo"];
let greatMagician = make2(magician2);
magician(greatMagician)
