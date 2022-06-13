// /* Задание на урок:

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли */


// /* Задание на урок:

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/

// 'use strict';

// const numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// // for (let i = 0; i < 2; i++) {
// //     const a = prompt('Один из последних просмотренных фильмов?', ''),
// //           b = prompt('На сколько оцените его?', '');

// //     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// //         personalMovieDB.movies[a] = b;
// //         console.log('good');
// //     } else {
// //         console.log('error');
// //         i--;
// //     }
// // }

// if (personalMovieDB.count < 10) {
//     alert("Просмотрено довольно мало фильмов");

// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     alert("Вы классический зритель");

// } else if (personalMovieDB.count >= 30) {
//     alert("Вы киноман");
// } else {
//     alert("Произошла ошибка");
// }

// console.log(personalMovieDB);

// // for (let i = 1; 1 < 6; i++) {
// //     if (i == 6) {
// //         break;
// //     }
// //     console.log(i);
// // }

// // let num = 8;
// // while (num) {
// //     console.log(num);
// //     num--;
// // }

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let a = prompt("Один из последних просмотренных фильмов?",""),
//     b = prompt("На сколько оцените его?",""),
//     c = prompt("Один из последних просмотренных фильмов?",""),
//     d = prompt("На сколько оцените его?","");

// personalMovieDB.movies[a] = [b];
// personalMovieDB.movies[c] = [d];

// console.log(personalMovieDB);

// console.log( NaN || 2 || undefined );

// console.log( NaN && 2 && undefined );

// console.log( 1 && 2 && 3 );

// console.log( !1 && 2 || !3 );

// console.log( 25 || null && !3 );

// console.log( NaN || null || !3 || undefined || 5);

// console.log( NaN || null && !3 && undefined || 5);

// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!');
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log('Done!');
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!');
// } else {
//     console.log('До свидания!');
// }

// function firstTask() {

//     for (let i = 4; i <= 10; i++) {
//         console.log(i);
//     }
// }

// firstTask();

// function secondTask() {
//     // Пишем решение вот тут
//     for (let j = 20; j >= 10; j--) {
//         if (j === 13) {
//             break;
//         }
//         console.log(j);
//     }
// }

// secondTask();

// function thirdTask() {
//     // Пишем решение вот тут
//     for (let k = 2; k <= 10; k++) {
//         if (k % 2 === 0) {
//             console.log(k);
//         }
//     }
// }

// thirdTask();

// for (let i = 2; i <= 16; i++) {
//          if (i % 2 === 0) {
//              continue;
//         } else {
//              console.log(i);
//     }
// }

// function fourthTusk() {
//     let i = 2;
//     while (i <= 16) {
//         if(i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// }

// fourthTusk();

// function fifthTask() {
//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     for (let i = 5; i <= 10; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }
    
//     // Не трогаем
//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// fifthTask();

// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for(let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
    
//     // Не трогаем
//     console.log(result);
//     return result;
// }

// firstTask();

// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for(let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - Done`;
//         }
//     }
    
//     // Не трогаем
//     console.log(data);
//     return data;
// }

// secondTask();

// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i];
//     }
    
//     // Не трогаем
//     console.log(result);
//     return result;
// }

// thirdTask();

// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 0; i <= lines; i++) {
//     for(let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for(let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
// console.log(result);

