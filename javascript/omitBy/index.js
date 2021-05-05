// 需求
// 给定一个对象，然后实现 omit 逻辑
// fn 是留下来的处理函数逻辑
// input
// omitBy({ a: 1, b: "2", c: 3 }, (x) => typeof x === "number");
// output
// { b: '2' }

function omitBy(obj, fn) {
  return Object.keys(obj)
    .filter((key) => !fn(obj[key], key))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
}

module.exports = {
  omitBy,
};
