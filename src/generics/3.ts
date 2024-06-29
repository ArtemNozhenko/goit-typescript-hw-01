function merge<T extends object, U extends object>(
  objA: T,
  objB: U
) {
  return Object.assign(objA, objB);
}

const objA = { name: "Artem" };
const objB = { age: 36 };

const mergeObj = merge(objA, objB);
console.log(mergeObj);
