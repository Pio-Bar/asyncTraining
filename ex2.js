function receiveUserOrder(mealName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Order for ${mealName} received!`);
      resolve(mealName);
    }, 800);
  });
}

function chargeCustomersCreditCard(mealName) {
  return new Promise((resolve, reject) => {
    if (mealName === "pasta") {
      return reject(`Error processing payment for ${mealName}`);
    }
    setTimeout(() => {
      console.log("Customer's credit card charged!");
      resolve(mealName);
    }, 300);
  });
}

function prepareOrderedMeal(mealName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${mealName} prepared!`);
      resolve(mealName);
    }, 2000);
  });
}

function deliverOrderedMeal(mealName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${mealName} delivered!`);
      resolve(mealName);
    }, 1000);
  });
}

function receiveOrders(firstOrder, secondOrder) {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("Receiving orders");
    }, 700);
    Promise.all([firstOrder, secondOrder]).then(() => resolve());
  });
}

function ordersProcessed() {
  setTimeout(function () {
    console.log("Orders processed!");
  }, 300);
}

receiveOrders(
  receiveUserOrder("pizza")
    .then((meal) => chargeCustomersCreditCard(meal))
    .then((meal) => prepareOrderedMeal(meal))
    .then((meal) => deliverOrderedMeal(meal))
    .catch((err) => console.error(err)),
  receiveUserOrder("pasta")
    .then((meal) => chargeCustomersCreditCard(meal))
    .then((meal) => prepareOrderedMeal(meal))
    .then((meal) => deliverOrderedMeal(meal))
    .catch((err) => console.error(err))
).then(ordersProcessed);
