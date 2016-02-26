import Shape from 

var square = new Shape('square', 30, 30);

console.log(square.shoutout());
console.log('Area of Shape: ' + square.area);
console.log('Name of Shape: ' + square.name);
console.log('Color of Shape: ' + square.color);
console.log('Width of Shape: ' + square.width);
console.log('Height of Shape: ' + square.height);

var cube = new Shape3D('cube', 30, 30, 30);
console.log(cube.shoutout());
console.log(cube.superShoutout());