const liste = [1, 2, 3, 4];

const gerade = liste.filter(x => x % 2 === 0);

console.log({ gerade });

const toSome = liste.map(x => ({ id: x }));

console.log({ toSome });

const sum = liste.reduce(
  (state, x) => {
    return {
      sum: state.sum + x,
      count: state.count + 1,
    };
  },
  {
    sum: 0,
    count: 0,
  }
);

console.log({ sum });

liste.forEach(x => {
  console.log({ x });
});
