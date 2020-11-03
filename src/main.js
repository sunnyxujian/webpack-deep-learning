/*
 * @Description: 演示代码
 * @Author: xujian
 * @Date: 2020-10-26 16:11:00
 */
const { show } = require('./utils.js')
const { component } = require('@components/SomeComponent.js')
const lodash = require('lodash')
const jquery = require('jquery')

show(document.querySelector('#app'),'hello webpack!')

import'./style.scss'

console.log(lodash.join(['Hello', 'webpack'], ' '));
console.log(jquery.version);

const img = document.createElement('img')
img.width = 200
import image from './jihui.jpg'
img.src = image

document.body.append(img)

document.querySelector('#container').innerHTML = component()