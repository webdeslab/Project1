// "use strict";
// // Объект
// // const obj ={
// //     name: 'Vitaly',
// //     surname: 'Nutsa',
// //     age: 27
// // };


// // Массив
// // console.log(obj);

// // let arr = ['pink', 'red', 'blue', 'white', 'black', 'yellow', 'green'];

// // console.log(arr[1]);

// // const answers = [];

// // answers[0] = prompt('Ваше имя?','');
// // answers[1] = prompt('Ваша фамилия?','');
// // answers[2] = prompt('Ваш возраст?','');

// // document.write(answers);


// // Интерполяция
// // const user = 'Vitaly';
// // const surname = 'Nutsa';

// // console.log(`Hello ${user} ${surname}`);

// // let firstNumber = 10,
// //     secondNumber = 10;

// // console.log(firstNumber || secondNumber + 5 == 15);

// // let areYouReady = prompt ('Ты готов идти до конца и получить свой первый оффер?', '');

// // if (areYouReady == 'yes') {
// //         alert('Продолжай в том же духе!');
// // } else if (areYouReady == null, false) {
// //     areYouReady = prompt ('Только ответ Yes or No!');
// // } else {
// //     alert('Тогда продолжай тратить время на занятие которое тебе не по душе...');
// // }


// // if (a + b == c) {
// //     console.log('Попробуй еще разок!');
// // } else if (a + b < c) {
// //     console.log('Красавчик!');
// // } else {
// //     console.log('Ничего не вышло:(');
// // }

// // const a = 45,
// //       b = 50,
// //       c = 100,
// //       d = 200;

// // const numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?', '');

// // const personalMovieDB = {
// //     count: numberOfFilms,
// //     movies: {},
// //     actors: {},
// //     genres: [],
// //     privat: false
// // };


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

// // if (personalMovieDB.count < 10) {
// //     alert("Просмотрено довольно мало фильмов");

// // } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// //     alert("Вы классический зритель");

// // } else if (personalMovieDB.count >= 30) {
// //     alert("Вы киноман");
// // } else {
// //     alert("Произошла ошибка");
// // }

// // function showMyDb () {
    
// // }

// // console.log(personalMovieDB);

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

// // const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

// // const personalMovieDB = {
// //     count: numberOfFilms,
// //     movies: {},
// //     actors: {},
// //     genres: [],
// //     privat: false
// // };

// // let a = prompt("Один из последних просмотренных фильмов?",""),
// //     b = prompt("На сколько оцените его?",""),
// //     c = prompt("Один из последних просмотренных фильмов?",""),
// //     d = prompt("На сколько оцените его?","");

// // personalMovieDB.movies[a] = [b];
// // personalMovieDB.movies[c] = [d];

// // console.log(personalMovieDB);

// // for (let i = 1; i <= 10; i++) {
// //     if (i % 2) continue;

// //     console.log(i);
// // }

// // let i = 0;

// // while (i < 3) {
// //     console.log(`number ${i}!`);
// //     i++;
// //   }

// function calculateVolumeAndArea(length) {
//     if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return 'При вычислении произошла ошибка!';
//     }
//     let volume = 0,
//         area = 0;

//     volume = length * length * length;

//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// console.log(calculateVolumeAndArea(5));

// function getCoupeNumber(seatNumber) {
//     if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     } else if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }
//     for (let i = 4; i <= 36; i = i + 4) {
//         if (seatNumber <= i) {
//             return Math.ceil(i / 4);
//         }
//     }

// }

// getCoupeNumber(33);

// function getTimeFromMinutes(localTime) {
//     if (typeof(localTime) !== 'number' || localTime < 0 || !Number.isInteger(localTime)) {
//         return "Ошибка, проверьте данные";
//     }

//         let time = Math.floor(localTime / 60);
//         let minute = localTime % 60;

//         let hoursStr = '';

//     switch (time) {
//         case 0: 
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//         return `"Это ${time} ${hoursStr} и ${minute} минут"`;
        

// }

// console.log(getTimeFromMinutes(200));

// function findMaxNumber(a,b,c,d) {
//     if (typeof(a) !== 'number') {
//         return 0;
//     }else if (typeof(b) !== 'number') {
//         return 0;
//     }else if (typeof(c) !== 'number') {
//         return 0;
//     }else if (typeof(d) !== 'number') {
//         return 0;
//     }

//     return Math.max(a,b,c,d);
// }

// console.log(findMaxNumber(1,3,5,6));

// function fib(num) {
//     if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) {
//         return '';
//     }

//     let res = '';
//     let first = 0;
//     let second = 1;

//     for(let i = 0; i < num; i++) {
//         if(i + 1 == num) {
//             res += `${first}`;
//         }else {
//             res += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return res;
// }

// console.log(fib(10));

// function learnJs (lang, callback) {
//     console.log(`Я изучаю ${lang}!`);
//     callback();
// }

// function good () {
//     console.log('И это круто!');
// }

// learnJs('JavaScript', good);


// function myBaby (baby, callback) {
//     console.log(`У меня родится ${baby}!`);
//     callback();
// }

// function thisIsGood () {
//     console.log('Я безумно рад и счастлив этому!!');
// }

// myBaby('Дочь', thisIsGood);


// const styles = {
//     width: 1024,
//     height: 768,
//     bgColor: '#fff',
//     options: {
//         border: '#000',
//         boxShadow:'#000',
//         fontSize: 50
//     }
// };

// console.log(Object.keys(styles).length);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (plan) {
//         const {age} = plan;
//             const {languages} = plan.skills;
//                 let str = `Мне ${age} и я владею языками: `;
//         languages.forEach(function(lang) {
//                 str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));



// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//         for (let key in programmingLangs) {
//             str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }

//     return str;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// console.log(showExperience(personalPlanPeter));


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let string = '';
    
//     arr.length === 0 ? string = 'Семья пуста' : string = 'Семья состоит из: ';

//     arr.forEach(member => {
//         string += `${member} `
//     });

//     return string;
// }

// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase());
//     });
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverseString (str) {

//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     }
//     return str.split('').reverse().join('');
// }

// console.log(reverseString(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';

//     arr.length !== 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//     arr.forEach(function(curr) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });

//     return str;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == 0 || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
    const a = prompt ('один из последних просмотренных фильмов?', ''),
          b = prompt ('На сколько оцените его?', '');
                  
            if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            }else {
                console.log('error');
                i--;
            }

        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно много фильмов');
        }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        }else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        }else {
            console.log('Произошла ошибка');
        }
    },
    showMyDb: function (hiden) {
        if (!hiden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDb: function () {
        if (personalMovieDB.privat) {

            personalMovieDB.privat = false;
        }else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();

            if (genre === ' || genre === null') {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            }else {
                personalMovieDB.genres = genre.split(', ');
                personalMovieDB.genres.sort();

            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр: ${i + 1} - это ${item}`);
        });
    }
};

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    volume = data.height * square;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    }else {
        return 'Бюджета недостаточно';
    }
}

console.log(isBudgetEnough(shoppingMallData));

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for(let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        }else if (i < 6) {
            b.push(arr[i]);
        }else if (i < 9) {
            c.push(arr[i]);
        }else {
            rest.push(arr[i]);
        }
    }

    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-': rest.join(', ')}`];
 }

 console.log(sortStudentsByGroups(students));

function createCounter () {
    let counter = 0;
    
    const myFunction = function () {
        counter = counter + 1;
        return counter;
    };

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1,c2,c3);

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (sDish.price.slice(0,-1)) < +average.slice(0,-1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);