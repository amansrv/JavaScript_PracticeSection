// one more **Math.random()** keyword!

// here, number will print form 0 to 0.999999999.... [will print all random number excluding 1]
var n = Math.random();
console.log(n);

// the number will print in the form of integer.
var num = Math.random() * 100;
num = Math.floor(num)   // ---> Due to this keyword number will print in int form.
console.log(num);
