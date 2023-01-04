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