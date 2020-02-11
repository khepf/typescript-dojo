// union types

const combine = (input1: number | string, input2: number | string) => {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;   
  } else {
    result = input1.toString() + input2.toString();
  }
}
// Literal Types
const combine2 = (input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') => {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
}