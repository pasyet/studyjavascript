//create loop
var i ;
for (i = 0; i < 10; i++){
  console.log(i);
}

//create a loop that runs array
var fruits = ["apple", "banana", "orange"];
for (x in fruits){
  console.log(x);
}

//create a loop that runs less
var x = 0;
while (x<10){
  console.log(x);
  x++
}

//Create a loop that runs as long as i is less than 10, but increase i with 2 each time.
var y = 0;
while (y < 10) {
  console.log(y);
  y = y+2;
}

//make the loop stop
for (z = 0; z < 10; z++){
  console.log(z);
  if (z == 5) {
    break;
  }
}

//make the loop jump to the next iteration
for (a = 0; a < 10; a++){
  if (a == 5) {
    continue;
  }
  console.log(a);
}
