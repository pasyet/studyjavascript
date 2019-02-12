var fruits = [["Banana","Pisang"],
              ["Manzana","Apple"],
              ["Agua","Water"],
              ["Mango","Mangga"]];
var dataid = [12,13,09,30,40,15]
var datanama = ["adi","abi","aci"];


// find number 30
console.log(dataid[3]);

// the length of friuts is 4
console.log(fruits.length);
console.log(dataid.length);

// the sort () method sorts arrays
console.log(dataid.sort());

// find index 0 and find word "Pisang"
console.log(fruits[0][1]);

// change the first item of datanama
datanama[2]="joko";
console.log(datanama);

// remove the last item of the fruits2 array
var fruits2 = ["Banana", "Orange", "Apple"];
fruits2.pop();
console.log(fruits2);

// add "Kiwi" to the fruites2 array
fruits2.push("Kiwi");
console.log(fruits2);

// slice() method remove "apple3" and "kiwi4" from fruits3
var fruits3 = ["Banana1", "Orange2", "Apple3","Kiwi4"];
fruits3.splice(2,3);
console.log(fruits3);

// concat() method to concatenate girls and boys
var girls = ["Cecilie", "Lone"];
var boys = ["Emil", "Tobias", "Linus"];
var children = girls.concat(boys);
console.log(children);
