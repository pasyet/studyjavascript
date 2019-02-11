var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// the lenght of strings
var sln = txt.length;
console.log(sln);

// find position of the character h
var sln1= txt.indexOf("H");
console.log(sln1);

var x = "We are the so-called \"Vikings\" from the north.";
console.log(x);
// the slice method to return the word "the so-called"
var sln2 = x.slice(7,20);
console.log(sln2);

var y = "It\'s alright.";
console.log(y);
// the correct string method to replace the world "alright" with the word "okey"
var sln3 = y.replace("alright", "okey");
console.log(sln3);
// upper case
var sln4 = y.toUpperCase();
console.log(sln4);

// lower case
var sln5 = y.toLowerCase();
console.log(sln5);

var z = "The character \\ is called backslash.";
console.log(z);

// the concat() method join 2 word became 1 sentence
var result = y.concat(z);
console.log(result);


 // var prg = "Pellentesque habitant morbi tristique senectus et netus et malesuada
// fames ac turpis egestas.\n Vestibulum tortor quam, feugiat vitae, ultricies eget,
// tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.\n"
//
// console.log(prg);

 // typeof a will return string
var a = "Nabila";
console.log(a);

// typeof b will return object
var b = new String ("Nabila");
console.log(b);
