const http = new EasyHTTP;

// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

data = {
  name: 'John Doe',
  username: 'johndoe', 
  email: 'jdoe@gmail.com'
};

// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/3', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/posts/3')
  .then(data => console.log(data))
  .catch(err => console.log(err));