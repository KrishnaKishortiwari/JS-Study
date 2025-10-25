const array = [10000, 2000, 3000, 4000, 5000];

// It will take value as string and it will nor return new array and it is comare first value like this

// ['1','2','3','4', '5']

// array.sort();
// output [ 10000, 2000, 3000, 4000, 5000 ]
array.sort((a, b) => a - b);
// output [ 2000, 3000, 4000, 5000, 10000 ]
console.log(array);

// 10000, 2000
// a-b -----> 8000
// a-b -----> posetive (grater than 0) ----> b,a
// 2000, 10000

// a-b -----> negative  ----> a,b

const array1 = [
  { productId: "1", productName: "First Product", price: 3000 },
  { productId: "2", productName: "Second Product", price: 300 },
  { productId: "3", productName: "Third Product", price: 9000 },
  { productId: "4", productName: "Third Product", price: 900 },
  { productId: "5", productName: "Third Product", price: 4000 },
  { productId: "6", productName: "Third Product", price: 400 },
];

const lowTohigh = array1.slice(0).sort((firstValue, secondValue) => firstValue.price - secondValue.price);
const highToLow = array1.slice(0).sort((firstValue, secondValue) => secondValue.price - firstValue.price);
console.log(lowTohigh)
console.log(highToLow)
console.log(array1)
