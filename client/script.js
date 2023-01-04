import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document/querySelector('#chat_container');

let loadInterval;
//initial reply ... loading screen
function loader(element) {
  element.textContent = '';

  loadInterval = setInterval(() => {
    element.textContent += '.';
//after 3 dots we want to set it back to an empty string 
    if (element.textContent === '....') {
      element.textContent = '';
    }
  }, 300)
}

//function for bot to respond typing one word at a time. if index is less than text length (we're still typing) then we want to set it HTML charAt
//when we reach end of interval we want to clear it
function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if(index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20)
}