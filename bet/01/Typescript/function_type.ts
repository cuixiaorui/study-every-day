type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function dosoming(fn: DescribableFunction) {
  console.log(fn.description);
}

function greeter(fn: (a: string) => void) {
  fn("hello, World");
}

type GreetFunction = (a: string) => void;

type SomeConstructor = {
  new (s: string): number;
};
function fn(ctor: SomeConstructor) {
  new ctor();
  return new ctor("hello");
}

function firstElement<Type>(array: Type[]): Type | undefined {
  return array[0];
}

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

// 返回两个值中较长的一个
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length > b.length) {
    return a;
  } else {
    return b;
  }
}
const longerArray = longest([1, 2], [1, 2, 3]);

function combine<Type>(arr1: Type[], arr2: Type[]) {
  return arr1.concat(arr2);
}
// 正常这里会报错
const arr = combine([1, 2, 3], ["string"]);
// 一定要用可以
const arr1 = combine<string | number>([1, 2, 3], ["string"]);

function f(n?: number) {
  console.log(n);
}

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);

function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
