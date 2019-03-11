import '../../style/normalize.css'
import '../../style/news.css'


import { controlDropMenuWrapper } from '../commonjs/header'
import { addClass, removeClass } from '../commonjs/util'
const controlDropMenu = controlDropMenuWrapper()

/* 
    移动端控制下拉菜单的显示隐藏
*/

let mask = document.getElementById('mask')
let dropBar = document.getElementById('drop-down')
let menu = document.getElementById('menu')
let news = document.getElementById('news')
let elements = [
    {
        element: mask,
        willActionClass: 'mask-show'
    },
    {
        element: menu,
        willActionClass: 'menu-show'
    },
    {
        element: dropBar,
        willActionClass: 'drop-open'
    },
    {
        element: document.body,
        willActionClass: 'hidden'
    }
]
mask.addEventListener('click', () => controlDropMenu(...elements), false)
dropBar.addEventListener('click', () => controlDropMenu(...elements), false)

/*
    newspaper构造函数
    鼠标在早鸟报区域移动放大
*/

import newsData from '../commonjs/news-config'

function NewsTemplate(data) {
    this.element = `
        <div class='newspaper'>
            <span class='newspaper-time'>${data.time}</span>
            <div class='flex'>
                <img src='../image/earlyBirds.png' alt='newspaper-logo' class='newspaper-logo' />
                <div class='newspaper-detail'>
                    <div>
                        <span>推荐书籍:${data.recommendBooks}</span>
                        <span>推荐博文:${data.recommendArticle}<a href='${data.articleUrl}'>${data.articleUrl}</a></span>
                    </div>
                    <div>
                        <span>互联网早报：<a href='http://t.cn/RSMTUp8'>http://t.cn/RSMTUp8</a></span>
                        <span>西邮前端圈：<a href='http://t.cn/RWGvuEK'>http://t.cn/RWGvuEK</a></span>
                    </div>
                </div>
            </div>
        </div>
    `
}

newsData.forEach((item) => {
    let newspaper = new NewsTemplate(item)
    news.innerHTML += newspaper.element
})

let newsList = document.getElementsByClassName('newspaper')
if (navigator.appVersion.indexOf('Mobile') === -1) {
    for (let index = 0, { length } = newsList; index < length; index++) {
        newsList[index].addEventListener('mouseenter', function () {
            if (Array.prototype.slice.call(this.classList).indexOf('newspaper-over') != -1) {
                return
            }
            addClass(this, 'newspaper-over')
        }, false)
        newsList[index].addEventListener('mouseleave', function () {
            removeClass(this, 'newspaper-over')
        }, false)
    }   
}





