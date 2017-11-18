
import '../../image/icon/earlyBirds.png'
import '../../image/icon/hands.png'
import '../../image/icon/more.png'

import '../../image/content_logo.jpg'

import '../../image/index/lab.png'
import '../../image/index/info.png'
import '../../image/index/roadmap.png'
import '../../image/index/leader.png'
import '../../image/index/about.png'
import '../../image/index/qqGroupQR.jpg'

import '../../image/lab/creatshare.png'
import '../../image/lab/epi-logo.jpg'
import '../../image/lab/22.jpg'

import '../../style/_reset.css'
import '../../style/index.css'
import '../../style/indexCard1.css'
import '../../style/indexCard2.css'
import '../../style/indexCard3.css'

import joinUs from '../commonjs/joinUs.js'

import rollingCard from '../commonjs/rollingCard.js'
import nav from '../commonjs/nav.js'

let openJoinQR = joinUs.openJoinQR
let closeJoinQR = joinUs.closeJoinQR

var addAction = nav.addAction

let openJoinQRButton = document.getElementById('openJoinQR');
openJoinQRButton.onclick = openJoinQR;

let closeJoinQRButton = document.getElementById('closeJoinQR');
closeJoinQRButton.onclick = closeJoinQR;

let card2Btn1 = document.getElementById('card2Btn1')
let card2Btn2 = document.getElementById('card2Btn2')
card2Btn1.onclick = () => { rollingCard.rollingCard(1) }
card2Btn2.onclick = () => { rollingCard.rollingCard(2) }

window.onload=function() {
        addAction()
}
