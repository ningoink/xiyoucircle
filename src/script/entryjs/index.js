import '../../image/earlyBirds.jpg'
import '../../image/qqGroupQR.jpg'
import '../../style/index.css'
import '../../style/indexPage1.css'

import joinUs from '../commonjs/joinUs.js'
var openJoinQR = joinUs.openJoinQR
var closeJoinQR = joinUs.closeJoinQR

let openJoinQRButton = document.getElementById('openJoinQR')
openJoinQRButton.onclick = openJoinQR

let closeJoinQRButton = document.getElementById('closeJoinQR')
closeJoinQRButton.onclick = closeJoinQR