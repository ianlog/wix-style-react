export const createOptions = length =>
  Array(length)
    .fill(0)
    .map((_, id) => ({ id, value: `Option ${id + 1}` }));
