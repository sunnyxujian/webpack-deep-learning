/*
 * @Description: feature name
 * @Author: xujian
 * @Date: 2020-10-27 15:28:21
 */


function feature (){
  const cpn = document.getElementById('cpn')
  cpn.onclick = function () {
    let num = this.textContent.charAt(this.textContent.length - 1) / 1
    const num2 = num + 1
    const text = this.innerText.replace(num,num2)
    console.log(num,num2,text);
    this.innerText = text
  }
}

setTimeout(feature, 0);

exports.feature = feature