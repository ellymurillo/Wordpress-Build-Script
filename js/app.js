var builds = ['sass', 'scripts', 'images'];
var separator = '_______________';

// ========================
// Arrow Functions
// ========================

builds.forEach(v => {
	console.log(v);
});
console.log(separator);

// ========================
// Template Strings
// ========================

var name = "Juan", time = "today";
var interpolation = `Hello ${name}, how are you ${time}?`;
console.log(interpolation);
console.log(separator);

// ========================
// Default + Rest + Spread
// ========================

function func(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
console.log('func(3) == 15', func(3) == 15)
console.log(separator);

function rest(x, ...y) {
  // y is an Array
  return x * y.length;
}
console.log('rest(3, "hello", true) == 6', rest(3, "hello", true) == 6)
console.log(separator);

function spread(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument - spread
console.log('spread(...[1,2,3]) == 6', spread(...[1,2,3]) == 6)
console.log(separator);