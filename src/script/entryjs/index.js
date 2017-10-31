import '../../image/earlyBirds.png'
import '../../image/qqGroupQR.jpg'
import '../../image/temp.png'
import '../../image/laboratory/creatshare.png'
import '../../image/laboratory/epi-logo.png'

import '../../style/index.css'
import '../../style/indexCard1.css'
import '../../style/indexCard2.css'
import '../../style/indexCard3.css'

import joinUs from '../commonjs/joinUs.js'

var openJoinQR = joinUs.openJoinQR
var closeJoinQR = joinUs.closeJoinQR

let openJoinQRButton = document.getElementById('openJoinQR')
openJoinQRButton.onclick = openJoinQR

let closeJoinQRButton = document.getElementById('closeJoinQR')
closeJoinQRButton.onclick = closeJoinQR