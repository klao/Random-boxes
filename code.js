const bigButton = document.querySelector('#circle');
let counter = 0;


bigButton.addEventListener('click', e => {
  counter++;

  if (!document.querySelector('.counter')) {
    const counter = document.createElement('h2');
    counter.setAttribute('class', 'counter');
    document.querySelector('#circle').after(counter);
  }
  document.querySelector('.counter').innerHTML = `Times clicked: ${counter}`;

  const myX = Math.floor((Math.random() * 1400) +2);
  const myY = Math.floor((Math.random() * 800)-2);
  console.log(myX, myY);
  const box = document.createElement('div');
  box.setAttribute('class', 'box');
  document.querySelector('main').appendChild(box);
  box.setAttribute('style', `left: ${myX}px; top: ${myY}px`);

  const boxes = document.querySelectorAll('.box');
  console.log(boxes);
});
