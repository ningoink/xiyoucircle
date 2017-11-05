function openJoinQR () {
  // id="dialog" 的 div 的 disply 设置为 block
  var dialogDiv = document.getElementById("dialog")
  dialogDiv.style.display = "block"
  // id="root" 的 div 添加名为 filter 的 class
  var rootDiv = document.getElementById("root")
  rootDiv.setAttribute("class", "filter")
}

function closeJoinQR () {
  // id="dialog" 的 div 的 disply 设置为 none
  var dialogDiv = document.getElementById("dialog")
  dialogDiv.style.display = "none"
  // id="root" 的 div 删除名为 filter 的 class
  var rootDiv = document.getElementById("root")
  rootDiv.removeAttribute("class")
}

function ranBackground () {
    // let arr = ['#70e1f5','#ffd194',' #34495e','#00BCC7','#42b983']
    let arr = ['#FFD9E8', '#B7CFF3', '#BEF9BF', '#F8DFBA', '#BBEDF6', '#FFC3B3']
    let e1 = arr[parseInt(Math.random() * (arr.length - 0) + 0)]
    let e2 = arr[parseInt(Math.random() * (arr.length - 2) + 2)]
    let BackgroundDiv = document.querySelector('#card1')
    BackgroundDiv.style.cssText = `background:-webkit-linear-gradient(360deg,${e1},${e2});`

}


export default {
  openJoinQR,
  closeJoinQR,
  ranBackground
}
