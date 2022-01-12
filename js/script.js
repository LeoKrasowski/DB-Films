/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const btn = document.querySelector('button');
const promoInIt = document.querySelector('.promo__interactive-list');


btn.addEventListener('click', (event) => {
    event.preventDefault();
    const valueH = document.querySelector('.adding__input').value;
    if (valueH.length > 10) {
        movieDB.movies[movieDB.movies.length] = valueH.slice(0,15) + '...';
    } 
    else {
        movieDB.movies[movieDB.movies.length] = valueH;
    };  
   
    // if (movieDB.movies[movieDB.movies.length].length < valueH.length) {
    //     movieDB.movies[movieDB.movies.length] += '...';
    //     } 
    movieDB.movies.sort();
    listGenerate ();
    document.querySelector('.adding__input').value = "";
});

const favoritfilm = document.querySelector('input[type="checkbox"]').value;
    if (favoritfilm) {
        console.log("Добавляем");
    };


movieDB.movies.sort();


 const promoAdv = document.querySelectorAll('.promo__adv img');
 console.log(promoAdv);
 promoAdv.forEach(element => {
    element.remove();
 });

 const promoGenre = document.getElementsByClassName('promo__genre');
 promoGenre[0].innerHTML = 'Драма';
 console.log(promoGenre);

 const promoBg = document.getElementsByClassName('promo__bg');
 promoBg[0].style.backgroundImage = 'url("../img/zap/bg.jpg")';


 function listGenerate () {
    promoInIt.innerHTML = "";
    movieDB.movies.forEach((movie, i) => {
        promoInIt.innerHTML += `
        <li class="promo__interactive-item"> ${i+1} ${movie} 
            <div class="delete"></div>
        </li>`;
     });
 };
 listGenerate ();
 