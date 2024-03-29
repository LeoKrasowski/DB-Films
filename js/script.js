

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Logan",
            "Justice league",
            "La-La Land",
            "Obsession",
            "Scott Pilgrim vs..."
        ]
    };

    const btn = document.querySelector('button');
    const promoInIt = document.querySelector('.promo__interactive-list');

    btn.addEventListener('click', (event) => {
        event.preventDefault();
        const valueH = document.querySelector('.adding__input').value;
        if (valueH) {
            if (valueH.length > 10) {
                movieDB.movies[movieDB.movies.length] = valueH.slice(0, 15) + '...';
            }
            else {
                movieDB.movies[movieDB.movies.length] = valueH;
            };
        };
        

        movieDB.movies.sort();
        listGenerate();
        document.querySelector('.adding__input').value = "";
    });

    const favoritfilm = document.querySelector('input[type="checkbox"]').value;
    if (favoritfilm) {
        console.log("Adding");
    };

    

    const promoAdv = document.querySelectorAll('.promo__adv img');
    console.log(promoAdv);
    promoAdv.forEach(element => {
        element.remove();
    });

    const promoGenre = document.getElementsByClassName('promo__genre');
    promoGenre[0].innerHTML = 'Drama';
    console.log(promoGenre);

    const promoBg = document.getElementsByClassName('promo__bg');
    promoBg[0].style.backgroundImage = 'url("../img/zap/bg.jpg")';

    function listGenerate() {
        promoInIt.innerHTML = "";
        movieDB.movies.sort();
        movieDB.movies.forEach((movie, i) => {
            promoInIt.innerHTML += `
            <li class="promo__interactive-item"> ${i + 1} ${movie} 
                <div class="delete"></div>
            </li>`;
        });
        const delbtn = document.querySelectorAll('.delete');

        delbtn.forEach((d, i)  => {
            d.addEventListener('click', () => {
                d.parentNode.remove();
                movieDB.movies.splice(i, 1);
                listGenerate();
            });

        });
    };
    listGenerate();
});




