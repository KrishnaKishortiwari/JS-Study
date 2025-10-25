const array = [
  { productId: "1", productName: "First Product", price: 3000 },
  { productId: "2", productName: "Second Product", price: 5000 },
  { productId: "3", productName: "Third Product", price: 9000 },
];

const sum = array.reduce((accumlator, currentvalue) => {
  return accumlator + currentvalue?.price;
},0);

console.log(sum)

// accumlator   currentvalue  return
// 0            3000          3000
// 3000         5000          8000
// 8000         9000          17000

// initial value of acuumlator of 0 if i am not using 0 then accumlator will take first value and currentvalue will be second array