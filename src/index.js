import _ from 'lodash'
import './style.css'

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.classList.add('hello')

  return element;
}

import('lodash').then(__ => {
  console.log(__.join(['Import', 'module', 'at', 'runtime'], ' '))
})

document.body.appendChild(component());