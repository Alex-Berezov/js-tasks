//=== Сумма элементов массива ===///

const array = [1, 2, 3, 4, 5, 6, 7];

// Вариант 1
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

// Вариант 2
let sum = array.reduce((acc, next) => acc + next, 0);

///////////////////////////////////

//=== Максимальный или минимальный элемент массива ===///
let max = array[0];

// Вариант 1

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

// Вариант 2
for (let i = 1; i < array.length; i++) {
  max = array[i] > max ? array[i] : max;
}

// Вариант 3
for (let i = 1; i < array.length; i++) {
  max = Math.max(array[i], max);
}

// Вариант 4
let max = array.reduce((acc, next) => Math.max(acc, next));

// Вариант 5 (Читерский)
let max = Math.max(...array);

/////////////////////////////////

//=== Сортировка массива ===///

// Вариант 1
const array = [7, 6, 100, 1, 3, 2];

arr.sort((x1, x2) => x1 - x2);

// Вариант 2 // Сортировка по массива объектов по числовому полю
const users = [
  {
    name: "John Doe",
    age: 20
  },
  {
    name: "Alex Moren",
    age: 30
  },
  {
    name: "Jane Doe",
    age: 25
  }
];

users.sort((u1, u2) => u1.age - u2.age);

// Вариант 2 // Сортировка по массива объектов по строковому полю
users.sort((u1, u2) => {
  return u1.name.localeCompare(u2.name);
});

///////////////////////////////////////

//=== Развернуть массив без .reverse() ===///

// Вариант 1
let reversed = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversed.push(array[i]);
}

// Вариант 2
let reversed = array.map((e, i, arr) => arr[arr.length - i - 1]);

// Вариант 2 (Шок контент)
let reversed = [...array].map(array.pop, array);
//Заимствуем метот pop у массива, можно вместо array.pop написать [].pop

///////////////////////////////////////////

//=== Отфильтровать falsy значения ===///
const falsyArray = [7, "correct", 0, false, 9, NaN, ""];

// Вариант 1
const notFalsy = [];

for (let i = 0; i < falsyArray.length; i++) {
  if (!!falsyArray[i]) {
    notFalsy.push(falsyArray[i]);
  }
}

// Вариант 2
const notFalsy = notFalsy.filter((n) => !!n);

// Вариант 2.1
const notFalsy = notFalsy.filter((n) => Boolean(n));

// Вариант 2.2
const notFalsy = notFalsy.filter(Boolean);
// filter первым аргументом принимает елемент массива
// Boolean принимает только один аргумент, т.е. туда попадет элемент массива.

///////////////////////////////////////////

//=== Фильтрация уникальных элементов массива ===///
//Создайте функцию unique(arr), которая вернёт массив уникальных,
//не повторяющихся значений массива arr.

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O"
];

// Вариант 1
const unique = (arr) => {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
};

// Вариант 2(Читерский)
const unique = (arr) => {
  return Array.from(new Set(arr));
};
//Объект Set – это особый вид коллекции: «множество» значений (без ключей),
//где каждое значение может появляться только один раз.

///////////////////////////////////////////

//=== Фильтрация по диапозону на месте ===//
//Напишите функцию filterRangeInPlace(arr, a, b), которая принимает
//массив arr и удаляет из него все значения кроме тех, которые находятся
//между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // удалить, если за пределами интервала
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
};


//////////////////////////////////////////////

const sortArg = (arg) => {
  return arg.split("").sort().join("");
};

const isEqualSymbols = (arg1, arg2) => {
  let sortedArg1 = sortArg(arg1);
  let sortedArg2 = sortArg(arg2);

  console.log(sortedArg1 === sortedArg2);
};

isEqualSymbols("сон", "нос"); // => true
isEqualSymbols("тик", "ток"); // => false
isEqualSymbols("ттк", "ткк"); // => false