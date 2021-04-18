// 需求
// input
// const obj = {
//     selector: { to: { val: 'val to select' } },
//     target: [1, 2, { a: 'test' }],
//   };
// get(obj, 'selector.to.val', 'target[0]', 'target[2].a');
// output
// ['val to select', 1, 'test']

const obj = {
  selector: { to: { val: "val to select" } },
  user: { name: "xiaohong" },
  target: [1, 2, { a: "test" }],
};

function get(from, ...selectors) {
  const r = selectors.map((s) => {
    return s
      .replace(/\[(\w+)\]/g, ".$1")
      .split(".")
      .reduce((prev, cur) => {
        return prev && prev[cur];
      }, from);
  });
}

get(obj, "selector.to.val", "user.name", "target[0]", "target[2].a");
