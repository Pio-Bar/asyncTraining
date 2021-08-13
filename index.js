/// Asynchronous functions exercise
//  Those functions should be executed in the specific order:
//  1. Receive user order
//  2. Charge credit card
//  3. Prepare meal
//  4. Deliver the order

function receiveUserOrder() {
  setTimeout(function () {
    console.log('Order received!');
  }, 800);
}

function chargeCustomersCreditCard() {
  setTimeout(function() {
    console.log('Customer\'s credit card charged!');
  }, 300);
}

function prepareOrderedMeal() {
  setTimeout(function() {
    console.log('Meal prepared!');
  }, 2000);
}

function deliverOrderedMeal() {
  setTimeout(function() {
    console.log('Order delivered!');
  }, 1000);
}


receiveUserOrder();
chargeCustomersCreditCard();
prepareOrderedMeal();
deliverOrderedMeal();

// Try to execute this code using `node index.js`
// as you see all console logs were printed to the console in the incorrect order

// Exercises:
// 1. Refactor those functions. Each of them should take a callback as an argument and call them
//    inside setTimeout to execute each function in the correct order.
//
//    More info: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing#async_callbacks 

// 2. The result of the 1st task is something that in the JS world we call "callback hell".
//    Try to clean up the code using `new Promise` as the return value for all those functions
//    and then execute them in the correct order. Consider the case when each function takes 
//    a 'pizza' or 'pasta' as an argument, and returns it as a resolved value.
//
//   function functionName(mealName) {
//      return new Promise(function(resolve) {
//        setTimeout(...);
//     });
//   }        
//

// 3. Oh no! There is a problem with the Payment service provider - each transaction for pasta
//    cannot go through. Prepare for such a scenario, and try to secure the whole process.
//    Use "reject()" and then try to secure the rest of the operations in the chain.
//   (Note that there should be only one call chain for each of the meals, pizza or pasta).

// 4. What about taking these orders simultaneously? Try to implement receiveOrders
//    and ordersProcessed functions. Implement those functions using Promises.
// function receiveOrders(firstOrder, secondOrder) {
//   setTimeout(function (){
//     console.log('Receiving orders');
//   }, 700);
//   firstOrder();
//   secondOrder();
// }
//
// function ordersProcessed() {
//   setTimeout(function (){
//     console.log('Orders processed!');
//   }, 300);
// }
// Note those function should be called like this:
//   receiveOrders(fun().then.fun().then()...).then(orderProcessed),
// what happens then?

// 5. Refactor this code, change all anonymous functions to arrow ones,
//    Try to use Promise.resolve(dishName).then(receiveUserOrder).

// 6. Change code from Promise.then() to async/await, what is the difference,
//    could all then() calls change to awaits?. Migrate to Promise.reject()
//    for chargeCustomersCreditCart.
//    What is the difference between that and throwing an error?

// Exercises 1, 2-5, and 6 should be done in separate files.
