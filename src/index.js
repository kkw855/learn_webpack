import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Font from 'noto-sans-kr'
import Data from './data.xml'
import printMe from './print.js'

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

  // TODO: XML 파일을 찾을 수 없다는 에러 발생
  console.log(Data)

  return element
}

function button() {
  const element = document.createElement('div')

  const btn = document.createElement('button')
  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe

  element.appendChild(btn)

  return element
}

// load module dynamically
import('lodash').then(__ => {
  console.log(__.join(['Import', 'module', 'at', 'runtime'], ' '))
})

document.head.appendChild(font())
document.body.appendChild(component())
document.body.appendChild(button())