//Callback Hell!

function receiveUserOrder(callback) {
  setTimeout(function () {
    console.log("Order received!");
    callback();
  }, 800);
}

function chargeCustomersCreditCard(callback) {
  setTimeout(function () {
    console.log("Customer's credit card charged!");
    callback();
  }, 300);
}

function prepareOrderedMeal(callback) {
  setTimeout(function () {
    console.log("Meal prepared!");
    callback();
  }, 2000);
}

function deliverOrderedMeal() {
  setTimeout(function () {
    console.log("Order delivered!");
  }, 1000);
}

receiveUserOrder(() => {
  chargeCustomersCreditCard(() => {
    prepareOrderedMeal(() => {
      deliverOrderedMeal();
    });
  });
});