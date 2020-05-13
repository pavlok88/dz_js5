// 1*. Написать функцию, которая очищает строку от всех не буквенно-цифровых символов
// Пример, "This., -/ is #! a ;: {} to $ % ^ & * book"; преобразуется "This is a book"
const string = "This., -/ is #! a ;: {} to $ % ^ & * book";

function cleanString(str) {
  str = str.match(/\w*/g);
  return str.filter(i => i.length > 0).join(' ');
}
console.log(cleanString(string));

// 2. Напишите функцию zeros(num, len), которая дополняется нулями до указанной длины введенное числовое значение
// Пример, zeros(12,8) ответ 00000012  Пример,  zeros(-3, 5) ответ -00003

function zeros(num, len) {
  let isPositive = true
  if (num < 0) {
    isPositive = false;
    num *= -1;
  }
  return isPositive ? ('0'.repeat(len) + num) : ('-' + '0'.repeat(len) + num);
}
console.log(zeros(-12, 6));

// 3. Напишите функцию которая переводит введенную строку в верблюжий регистр (CamelCase)
// Пример, "hello world" преобразуется "helloWorld"

const str = 'heLLO   GREAT          javascript   ';

function toCamelCase(strIn) {
  strIn = strIn.toLowerCase().split(' ');
  strIn = strIn.filter(i => i.length > 0);
  strIn = strIn.map(i => strIn.indexOf(i) > 0 ? i.replace(i[0], i[0].toUpperCase()) : i).join('');
  return strIn
}
console.log(toCamelCase(str));

// 4*. Получить массив , элементы которого являются числами фибоначчи. Размер массива (количество элементов) задает пользователь.
// Для определения (вычисления) элемента создать функцию-рекурсию

//обычный цикл, не рекурсия
const arr3 = [];

function fibbon(lng) {
  let arr = [1, 1];
  while (arr.length < lng) arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}
console.log(fibbon(10));

//рекурсия (нашел в гугле =))
// const fib = (n, i = 1, r1 = 0, r2 = 0) => (i >= n) ? r1 + r2 : fib(n, i + 1, (r2 || 1), r1 + r2);
// console.log(fib(10))


// 5. Создайте массив и отфильтруйте его, удалив все отрицательные и нулевые элементы
const arr4 = [1, 2, 3, -5, 0, -7, 4, -8];
console.log(arr4.filter(i => i >= 0));

// 6*. Создайте классы Художник (имя, фамилия, контактные данные) и Картина (название, год, техника выполнения, размеры). 
// Реализуйте методы для создания объектов. Реализуйте свойство количество работ (у художника) и обновляйте его при добавлении новой работы. Выведите информацию о художника, его работы и их количество.
// P.S техника выполнения - акрил, масло, акварель, графика, другое
class Painter {
  constructor(name, surname, phone) {
    this.name = name;
    this.surname = surname;
    this.phone = phone;
  }
};
class Picture {
  constructor(name, year, technics, size) {
    this.name = name;
    this.year = year;
    this.technics = technics;
    this.size = size;
  }
};
//надо подучить, плохо разобрался.


// ------------------------ Работа с DOM ------------------------
// 7. Создайте кнопку, которая подсчитывает количество нажатий на нее 
const btn = document.createElement('button');
document.body.prepend(btn); {
  let counter = 1;
  btn.addEventListener('click', function () {
    btn.textContent = counter++
  });
}

// 8. Добавьте порядковый номер текстового абзаца в его начале при нажатии на кнопку
const textBlock = document.querySelector('.text');
const btn2 = document.createElement('button');
btn2.textContent = '<p> num';
textBlock.append(btn2); {
  let counter = 1;
  const txtArr = textBlock.querySelectorAll('p')
  btn2.addEventListener('click', function () {
    txtArr.forEach(i => {
      if (counter <= txtArr.length) {
        i.textContent = counter + ' - ' + i.textContent;
        counter++;
      }
    });
  });
}

// 9. Даны дивы (<div>). По первому нажатию на каждый див он окрасится синим фоном,
//  по второму красится обратно и так далее каждый клик происходит чередование фона. 

const colorBlock = document.querySelectorAll('.comtainer1 .colorBlock');
colorBlock.forEach(i => {
  i.addEventListener('click', () => {
    i.classList.contains("blueColor") ? i.classList.remove('blueColor') : i.classList.add('blueColor')
  })
});

//  Сделайте так, чтобы было две функции: одна красит в синий цвет, другая в зеленый 
//  например, и они сменяли друг друга через removeEventListener

const colorBlock2 = document.querySelectorAll('.comtainer2 .colorBlock');
colorBlock2.forEach(i=>i.addEventListener('click',toBlue));
function toBlue(e) {
    e.target.style.backgroundColor = "blue";
    e.target.removeEventListener('click', toBlue);
    e.target.addEventListener('click', toGreen);
}
function toGreen(e) {
    e.target.style.backgroundColor = "green";
    e.target.removeEventListener('click', toGreen);
    e.target.addEventListener('click', toBlue);
}