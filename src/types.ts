interface User {
  name: string;
  age: string;
}

const data: User = JSON.parse('{"name" : "dhruvit" , "age" : "20"}');

console.log(data.name);
// console.log(data.salary);
