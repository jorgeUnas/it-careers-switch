let a = new Date();
console.log(a);
console.log(a.toDateString());
console.log(a.getDate());
console.log(a.getDay());
console.log(a.getFullYear());
console.log(a.getUTCFullYear());

let b = a.getDay();
let c = a.getDate();
let d = a.getMonth();

console.log(typeof b);
console.log(typeof c);
console.log(typeof d);