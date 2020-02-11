# typescript-notes 3.7.5 (tsc -v)

- When you access the value of an input in javascript, it is ALWAYS a string.
- Add a + in front of a variable to convert it to a number (+input.value)
- The core primitive types in TypeScript are all lowercase
- Don't add typescript types to primitive variables, unless variable is unassigned

tsc app.ts
## Using Types
### Core Types
number
string
boolean
object
Array string[], number[], boolean[]
Tuple - Fixed Length, Fixed Type Array
Enum - enum { NEW, OLD } assign numbers to human readable label
Any - *

### Union Types - Could hold any number of different types
```
const combine = (input1: number | string, input2: number | string) => {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;   
  } else {
    result = input1.toString() + input2.toString();
  }
}
```
### Literal Types
```
const combine = (input1: number | string, input2: number | string) => {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;   
  } else {
    result = input1.toString() + input2.toString();
  }
}
```