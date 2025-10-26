
const array1 = [
  { productId: "1", productName: "First Product", price: 3000 },
  { productId: "2", productName: "Second Product", price: 300 },
  { productId: "3", productName: "Third Product", price: 9000 },
  { productId: "4", productName: "Third Product", price: 900 },
  { productId: "5", productName: "Third Product", price: 4000 },
  { productId: "6", productName: "Third Product", price: 400 },
];

// It will return only first value with match condition 

const bbb = array1.find((test) => test.price >1000);
console.log(bbb)