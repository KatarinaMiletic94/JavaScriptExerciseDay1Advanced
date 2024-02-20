let n1 = 7;
let n2 = 14;
let n3 = '21';
let n4 = '36';
let n5 = 42;

let sum = n1 + n2 + Number(n3) + Number(n4) + n5;
console.log(sum);

let n6 = '1';
let n7 = 15;
let n8 = 8;
let n9 = '1';

let result = n6 * Number(n7) * n8 * Number(n9);
document.write(result);

let people = ['Greg', 'Mary', 'Devon', 'James'];
people.shift();
people.unshift('Matt');
people.push('Kati');
console.log(people);

let people1 = people.slice(2, 4);
console.log(people1);

console.log(people.indexOf('Mary'));
console.log(people.indexOf('Foo'));

people = ['Greg', 'Mary', 'Devon', 'James'];
console.log(people);

people.splice(2, 1, 'Elizabeth', 'Anna');
console.log(people);

let numbers = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 25, 7],
  [21, 4, 6, 17],
  [3, 5, 26, 3],
];
console.log(numbers[1][1]);
console.log(numbers[4][2]);
console.log(numbers[5][3]);
console.log(numbers[2][3]);
console.log(numbers[2][1]);
