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

// let i = 0;

// while (i < 3) {
//     console.log(`number ${i}!`);
//     i++;
//   }

function calculateVolumeAndArea(length) {
    if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return 'При вычислении произошла ошибка!';
    }
    let volume = 0,
        area = 0;

    volume = length * length * length;

    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5));

function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }
    for (let i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }

}

getCoupeNumber(33);

function getTimeFromMinutes(localTime) {
    if (typeof(localTime) !== 'number' || localTime < 0 || !Number.isInteger(localTime)) {
        return "Ошибка, проверьте данные";
    }

        let time = Math.floor(localTime / 60);
        let minute = localTime % 60;

        let hoursStr = '';

    switch (time) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

        return `"Это ${time} ${hoursStr} и ${minute} минут"`;
        

}

console.log(getTimeFromMinutes(200));

function findMaxNumber(a,b,c,d) {
    if (typeof(a) !== 'number') {
        return 0;
    }else if (typeof(b) !== 'number') {
        return 0;
    }else if (typeof(c) !== 'number') {
        return 0;
    }else if (typeof(d) !== 'number') {
        return 0;
    }

    return Math.max(a,b,c,d);
}

console.log(findMaxNumber(1,3,5,6));

function fib(num) {
    if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) {
        return '';
    }

    let res = '';
    let first = 0;
    let second = 1;

    for(let i = 0; i < num; i++) {
        if(i + 1 == num) {
            res += `${first}`;
        }else {
            res += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return res;
}

console.log(fib(10));