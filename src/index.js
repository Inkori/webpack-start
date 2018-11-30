import _ from 'lodash';
import './style.scss';
import {Game, charId, id} from '../game.js';
// import Icon from 'img/icon.jpeg'

function component() {
  const element = document.createElement('div');
  // var myIcon = new Image();
  //    myIcon.src = Icon;
  
  //    element.appendChild(myIcon);
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join([''], ' ');

  return element;
}

document.body.appendChild(component());
