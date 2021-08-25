function timeOut(message, time) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(message);
      resolve();
    }, time)
  );
}

async function receiveUserOrder(mealName) {
  await timeOut(`Order for ${mealName} received!`, 800);
  return mealName;
}

async function chargeCustomersCreditCard(mealName) {
  if (mealName === "pasta") {
    await Promise.reject(`Error processing payment for ${mealName}`);
  }
  await timeOut(`Customer's credit card charged for ${mealName}!`, 300);
  return mealName;
}

async function prepareOrderedMeal(mealName) {
  await timeOut(`${mealName} prepared!`, 2000);
  return mealName;
}

async function deliverOrderedMeal(mealName) {
  await timeOut(`${mealName} delivered!`, 1000);
  return mealName;
}

async function receiveOrders(firstOrder, secondOrder) {
  await timeOut("Receiving orders", 700);
  return Promise.all([firstOrder, secondOrder]);
}

function ordersProcessed(meals) {
  timeOut(`Orders for ${meals} processed!`, 300);
}

async function order(meal) {
  await receiveUserOrder(meal);
  await chargeCustomersCreditCard(meal).catch((e) => {
    console.error(e);
  });
  await prepareOrderedMeal(meal);
  await deliverOrderedMeal(meal);
  return meal;
}

async function placeOrders(order1, order2) {
  const orders = await receiveOrders(order(order1), order(order2));
  ordersProcessed(orders);
}

placeOrders("pizza", "pasta");
