'use strict'

const nameText = document.querySelectorAll('.destinations__name'),
   popular = document.querySelectorAll('.destinations__image'),
   button = document.querySelector('.search'),
   image = document.querySelectorAll('.destinations__image'),
   items = document.querySelectorAll('.destinations__item');

 
//nameText[0].textContent = 'Kyiv';

button.addEventListener('click', (event) => {
   event.preventDefault();
   console.log('Done!');
});

image[1].addEventListener('click', (event) => {
   event.preventDefault();
   image[1].innerHTML = '<img src="https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg" alt="Arizona">';

});

const select = document.createElement('div');

select.classList.add('destinations');

console.log(items);
console.log(items.length);

const result = Array.from(items);

result.forEach(item => {
   console.log(item);
});

//document.querySelector('.destinations__items').appendChild(document.querySelector('.destinations__items').cloneNode(true));

