import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Font from 'noto-sans-kr'

function font() {
  const element = document.createElement('link')
  element.rel = 'stylesheet'
  element.href = Font

  return element
}

function component() {
  const element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack', '한글폰트체크'], ' ')

  element.classList.add('hello')

  const myIcon = new Image()
  myIcon.src = Icon

  element.appendChild(myIcon)

  return element
}

// load module dynamically
import('lodash').then(__ => {
  console.log(__.join(['Import', 'module', 'at', 'runtime'], ' '))
})

document.head.appendChild(font())
document.body.appendChild(component())