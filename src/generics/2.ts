// У вас є тип AllType.Існує функція compare, яка приймає два об'єкти.
//  Ці об'єкти містять поля AllType. Ваше завдання – використовувати Pick
//   та generics для вказівки, що поля цих параметрів належать AllType.
//   Функція compare повинна повертати AllType.

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<
  T extends Pick<AllType, "name" | "color">,
  U extends Pick<AllType, "position" | "weight">
>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const top = {
  name: "Vasya",
  color: "red",
  position: 20,
  weight: 10,
};

const bottom = {
  position: 10,
  weight: 20,
  name: "Petr",
  color: "blue",
};

const result = compare(top, bottom);
console.log(result);