
// but let typescript do its job. don't specify
// number a s return type if TS already infers it
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function add1(n1: number, n2: number): void {
  console.log('answer: ', n1 + n2);
}

// functions as types
let combineValues: (a: number, b: number) => number;

// function types and callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}