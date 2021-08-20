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
  setTimeout(() => {
    console.log(`${mealName} delivered!`);
  }, 1000);
}

receiveUserOrder("pizza")
  .then((meal) => chargeCustomersCreditCard(meal))
  .then((meal) => prepareOrderedMeal(meal))
  .then((meal) => deliverOrderedMeal(meal))
  .catch((err) => console.error(err))
