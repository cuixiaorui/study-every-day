const { compactObject } = require("./index");

test("obj 内部所有为 Falsy 的值都会被过滤掉", () => {
  const obj = {
    a: null,
    b: false,
    c: 0,
    d: "",
    e: 1,
    f: true,
    g: "a",
  };

  const result = compactObject(obj);
  expect(result).toEqual({
    e: 1,
    f: true,
    g: "a",
  });
});

test("如果是数组类型的话，那么就把数组内所有为 Falsy 的都过滤掉", () => {
  const arr = ["", 0, false, 1, true, "a"];
  const result = compactObject(arr);
  expect(result).toEqual([1, true, "a"]);
});

test("obj 内部嵌套的 object 类型内的 Falsy 也需要被过滤 ", () => {
  const obj = {
    a: null,
    b: false,
    c: 0,
    d: "",
    e: 1,
    f: true,
    g: "a",
    user: {
      a: null,
      b: false,
      c: 0,
      d: "",
      e: 1,
      f: true,
      g: "a",
    },
  };

  const result = compactObject(obj);
  expect(result).toEqual({
    e: 1,
    f: true,
    g: "a",
    user: {
      e: 1,
      f: true,
      g: "a",
    },
  });
});

test("obj 内部嵌套的 array 类型内的 Falsy 也需要被过滤 ", () => {
  const obj = {
    a: null,
    b: false,
    c: 0,
    d: "",
    e: 1,
    f: true,
    g: "a",
    arr: ["", 0, false, 1, true, "a"],
  };

  const result = compactObject(obj);
  expect(result).toEqual({
    e: 1,
    f: true,
    g: "a",
    arr: [1, true, "a"],
  });
});
