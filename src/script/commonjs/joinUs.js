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


export default {
  openJoinQR,
  closeJoinQR
}
