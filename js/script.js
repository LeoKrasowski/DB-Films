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

 const promoInIt = document.querySelector('.promo__interactive-list');
 promoInIt.innerHTML = "";
 
 movieDB.movies.forEach((movie, i) => {
    promoInIt.innerHTML += `
    <li class="promo__interactive-item"> ${i+1} ${movie} 
        <div class="delete"></div>
    </li>`;
 });
 