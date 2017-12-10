function openJoinQR () {
  // id="dialog" 的 div 的 disply 设置为 block
  var dialogDiv = document.getElementById("dialog")
  dialogDiv.style.display = "block"
}

function closeJoinQR () {
  // id="dialog" 的 div 的 disply 设置为 none
  var dialogDiv = document.getElementById("dialog")
  dialogDiv.style.display = "none"
}


export default {
  openJoinQR,
  closeJoinQR
}
