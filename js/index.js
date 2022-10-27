// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseInt(product.querySelector('.price span').textContent);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  const subTotalValue = price * quantity;
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = subTotalValue;
  return subTotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  //botão calculate prices
  const calculatePricesBtn = document.getElementById('calculate');
  //colocar o evento de click
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
