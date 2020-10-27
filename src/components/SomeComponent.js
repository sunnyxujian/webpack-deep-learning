/*
 * @Description: feature name
 * @Author: xujian
 * @Date: 2020-10-27 14:51:31
 */

const  feature  = require('./logic.js')

exports.component = function (){
  return `<h2 id="cpn" style="border:1px solid;">我是一个组件0</h2>
          <pre>${JSON.stringify(module)}</pre>
          <pre>${JSON.stringify(feature)}</pre>`
}

