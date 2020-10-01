// async function myFunc() {

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = true;
//   if (!error){
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));


async function getUsers() {
  //awit response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // only proceed once its resolved
  const data = await response.json();

  // only procedd once second promise
  return data;
}

getUsers().then(users => console.log(users));