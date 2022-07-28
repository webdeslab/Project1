"use strict";
// Объект
// const obj ={
//     name: 'Vitaly',
//     surname: 'Nutsa',
//     age: 27
// };


// Массив
// console.log(obj);

// let arr = ['pink', 'red', 'blue', 'white', 'black', 'yellow', 'green'];

// console.log(arr[1]);

// const answers = [];

// answers[0] = prompt('Ваше имя?','');
// answers[1] = prompt('Ваша фамилия?','');
// answers[2] = prompt('Ваш возраст?','');

// document.write(answers);


// Интерполяция
// const user = 'Vitaly';
// const surname = 'Nutsa';

// console.log(`Hello ${user} ${surname}`);

// let firstNumber = 10,
//     secondNumber = 10;

// console.log(firstNumber || secondNumber + 5 == 15);

// let areYouReady = prompt ('Ты готов идти до конца и получить свой первый оффер?', '');

// if (areYouReady == 'yes') {
//         alert('Продолжай в том же духе!');
// } else if (areYouReady == null, false) {
//     areYouReady = prompt ('Только ответ Yes or No!');
// } else {
//     alert('Тогда продолжай тратить время на занятие которое тебе не по душе...');
// }


// if (a + b == c) {
//     console.log('Попробуй еще разок!');
// } else if (a + b < c) {
//     console.log('Красавчик!');
// } else {
//     console.log('Ничего не вышло:(');
// }

// const a = 45,
//       b = 50,
//       c = 100,
//       d = 200;

// const numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('good');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     alert("Просмотрено довольно мало фильмов");

// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     alert("Вы классический зритель");

// } else if (personalMovieDB.count >= 30) {
//     alert("Вы киноман");
// } else {
//     alert("Произошла ошибка");
// }

// function showMyDb () {
    
// }

// console.log(personalMovieDB);

// for (let i = 1; 1 < 6; i++) {
//     if (i == 6) {
//         break;
//     }
//     console.log(i);
// }

// let num = 8;
// while (num) {
//     console.log(num);
//     num--;
// }

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

// for (let i = 1; i <= 10; i++) {
//     if (i % 2) continue;

//     console.log(i);
// }

let i = 0;

while (i < 3) {
    console.log(`number ${i}!`);
    i++;
  }