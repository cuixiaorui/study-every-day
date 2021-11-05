// 匿名对象
function greet(person: {name: string; age: number}) {
    console.log(person);
}

// 接口命名
interface Person {
    name: string;
    age: number;
}

function greet1(person: Person) {
    console.log(person);
}

// type命名
type Person1 = {
    name: string;
    age: number;
}

function greet2(person:Person) {
    console.log(person)
}

type Shape = string;
interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
}


interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  console.log(`prop has the value '${obj.prop}'.`);
  obj.prop = "hello";
}

interface StringArray {
    [index: number]: string;
}

interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }

interface AddressWithUnit extends BasicAddress {
    unit: string;
}

interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

interface Box<Type> {
    contents: Type;
}

interface StringNumberPair {
    length: 2;
    0: string;
    1: number;

    slice(start?: number, end?: number): Array<string | number>;
}