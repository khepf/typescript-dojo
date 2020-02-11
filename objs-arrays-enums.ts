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

enum Role { ADMIN, READ_ONLY, AUTHOR}

const person2 = {
  name: "Frank",
  age: 88,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN // enum
}

console.log(person.name)