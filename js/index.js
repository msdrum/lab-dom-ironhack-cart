// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').textContent);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  const subTotalValue = price * quantity;
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = subTotalValue;
  return subTotalValue;
  //funcao pra calcular o subtotal de um único produto, pq o queryselector pega apenas o primeiro elemento html respectivo daquele seletor
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 AND 3

  const products = document.querySelectorAll('.product');
  const total = document.querySelector('#total-value span'); //iteration 3
  let totalValue = 0; //iteration 3
  products.forEach((element) => {
    updateSubtotal(element);
    totalValue += updateSubtotal(element);
  });

  console.log(totalValue);
  total.innerHTML = totalValue;
}

// ITERATION 4 (Not Solved)

function removeProduct(event) {
  const target = event.currentTarget;
  const parentProduct = document.querySelector('.action');

  console.log('The target in remove is:', target);
  //... your code goes here
  parentProduct.removeChild(target);
}

// ITERATION 5 (Noot Solved)

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  //botão calculate prices
  const calculatePricesBtn = document.getElementById('calculate');
  //colocar o evento de click
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  //querying the document for all Remove buttons
  const removeItem = document.querySelectorAll('.btn-remove');
  //adding event listener click
  removeItem.forEach((element) => {
    element.addEventListener('click', removeProduct);
  });
});
