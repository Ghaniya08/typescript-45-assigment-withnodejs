console.log("Q 40 of Day 14");
function make_album(artistname, albumTitle, track) {
    var album = {
        artist: artistname,
        tittle: albumTitle,
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
var album1 = make_album("ghaniya", "title1");
var album2 = make_album("radiya", "title3");
var album3 = make_album("arooba", "title2", 3);
console.log(album1);
console.log(album2);
console.log(album3);
console.log("Q 41 of Day 14");
function magician_name(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
var magicianName = ["James", "David", "Shin Lim", "Apollo"];
magician_name(magicianName);
console.log("Q 42 of Day 14");
function magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make2(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
var magician2 = ["James", "David", "Shin Lim", "Apollo"];
var greatMagician = make2(magician2);
magician(greatMagician);
