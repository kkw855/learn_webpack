import _ from 'lodash'
import './style.css'
import Icon from './icon.png'

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.classList.add('hello')

  const myIcon = new Image()
  myIcon.src = Icon

  element.appendChild(myIcon)

  return element;
}

import('lodash').then(__ => {
  console.log(__.join(['Import', 'module', 'at', 'runtime'], ' '))
})

document.body.appendChild(component());