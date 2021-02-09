"use strict";

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Призошла ошибка');
//     }
// }
// detectPersonalLevel();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренных фильмов?", ""),
//             b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != "" && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('Done');
//         } else {
//             console.log('Error');
//             i--;
//         }
//     }
// }
// rememberMyFilms();

// /* let i = 0;

// while (i < 2) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt('На сколько оцените его?', '');
//     i++;
//     if (a != null && b != null && a != '' && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error');
//         i--;
//     }
// } */

// /* do {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt('На сколько оцените его?', '');
//     i++;
//     if (a != null && b != null && a != '' && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error');
//         i--;
//     }
// }

// while (i < 2 ); */

// function writeYourGenres () {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);            
//     }
// }
// writeYourGenres();

//let numberOfFilms;

const personalMovieDB = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Призошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                  b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            //     let favGenre = prompt(`Ваш любимый жанр под номером ${i}`, "");
            //     if (favGenre != null && favGenre != "") {
            //         personalMovieDB.genres[i-1] = favGenre;
            //         console.log('done');
            //     } else {
            //         console.log('Error');
            //         i--;
            //     }
            // }
            let favGenre = prompt(`Введите ваши любимые жанры через запятую`, "").toLocaleLowerCase();
            if (favGenre != null && favGenre != "") {
                personalMovieDB.genres = favGenre.split(', ');
                personalMovieDB.genres.sort();
            } else {
                console.log('Error');
                i--;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i+1}- это ${item}`);
        });
    }
};


personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();