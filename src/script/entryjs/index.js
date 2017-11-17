import '../../image/earlyBirds.png'
import '../../image/qqGroupQR.jpg'

import '../../image/index/lab.png'
import '../../image/index/info.png'
import '../../image/index/roadmap.png'
import '../../image/index/leader.png'
import '../../image/index/about.png'

import '../../image/lab/creatshare.png'
import '../../image/lab/epi-logo.jpg'

import '../../style/_reset.css'
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
