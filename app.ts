const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string] // tuple
} = {
  name: "Frank",
  age: 88,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

console.log(person.name)