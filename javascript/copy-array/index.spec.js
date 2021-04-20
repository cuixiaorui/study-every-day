const {
  cloneArrayBySpreadOperator,
  cloneArrayByArrayFrom,
  cloneArrayByArraySlice,
  cloneArrayByArrayMap,
  cloneArrayByArrayFilter,
  cloneArrayByObjectAssign
} = require("./index.js");

it("spread operator", () => {
  const arr = [1, 2, 3];
  const newArr = cloneArrayBySpreadOperator(arr);
  newArr[0] = 0;

  expect(arr).not.toEqual(newArr);
  expect(newArr).toEqual([0, 2, 3]);
  expect(arr).toEqual([1, 2, 3]);
});

it("Array.from", () => {
  const arr = [1, 2, 3];
  const newArr = cloneArrayByArrayFrom(arr);
  newArr[0] = 0;

  expect(arr).not.toEqual(newArr);
  expect(newArr).toEqual([0, 2, 3]);
  expect(arr).toEqual([1, 2, 3]);
});

it("Array.prototype.slice", () => {
  const arr = [1, 2, 3];
  const newArr = cloneArrayByArraySlice(arr);
  newArr[0] = 0;

  expect(arr).not.toEqual(newArr);
  expect(newArr).toEqual([0, 2, 3]);
  expect(arr).toEqual([1, 2, 3]);
});

it("Array.prototype.map", () => {
  const arr = [1, 2, 3];
  const newArr = cloneArrayByArrayMap(arr);
  newArr[0] = 0;

  expect(arr).not.toEqual(newArr);
  expect(newArr).toEqual([0, 2, 3]);
  expect(arr).toEqual([1, 2, 3]);
});

it("Array.prototype.filter", () => {
  const arr = [1, 2, 3];
  const newArr = cloneArrayByArrayFilter(arr);
  newArr[0] = 0;

  expect(arr).not.toEqual(newArr);
  expect(newArr).toEqual([0, 2, 3]);
  expect(arr).toEqual([1, 2, 3]);
});

it("Object.assign", () => {
  const arr = [1, 2, 3];
  const newArr = cloneArrayByObjectAssign(arr);
  newArr[0] = 0;

  expect(arr).not.toEqual(newArr);
  expect(newArr).toEqual([0, 2, 3]);
  expect(arr).toEqual([1, 2, 3]);
});
