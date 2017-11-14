/**
 * Created by Gakki on 2017/10/31.
 */
/**
 * Created by Gakki on 2017/11/6.
 */

/*获取class的函数*/
var getByClass = function (className) {
    return document.getElementsByClassName(className);
};


/*添加class的函数*/
var addClass = function (element , _className) {

    var className = element.className.split(' ');
    var classNameMap = {};

    for(var i=0;i<className.length;i++){
        classNameMap[ className[i]] = 1;
    }
    classNameMap[_className] = 1;

    className = [];
    for(i in classNameMap){
        className.push(i);
    }
    element.className = className.join(' ');

};


/*删除class的函数*/
var removeClass = function (element ,  _className) {

    var className = element.className.split(' ');
    var classNameMap = {};
    for(var i=0;i<className.length;i++){
        classNameMap[ className[i]] = 1;
    }
    delete classNameMap[_className];
    className = [];
    for(i in classNameMap){
        className.push(i);
    }
    element.className = className.join(' ');
};

function  addAction(argument) {
    addClass( getByClass('header')[0] , 'header_active_1' ) ;

    getByClass('header__nav')[0].onmouseout = function  () {
        getByClass('header__nav-item-tip')[0].style.left = '';
    };
    getByClass('header__nav-item_i_1')[0].onmouseover=function () {
        getByClass('header__nav-item-tip')[0].style.left = (0*120+20)+'px';
    };
    getByClass('header__nav-item_i_2')[0].onmouseover=function () {
        getByClass('header__nav-item-tip')[0].style.left = (1*120+20)+'px';
    };
    getByClass('header__nav-item_i_3')[0].onmouseover=function () {
        getByClass('header__nav-item-tip')[0].style.left = (2*120+20)+'px';
    };
    getByClass('header__nav-item_i_4')[0].onmouseover=function () {
        getByClass('header__nav-item-tip')[0].style.left = (3*120+20)+'px';
    };
    getByClass('header__nav-item_i_5')[0].onmouseover=function () {
        getByClass('header__nav-item-tip')[0].style.left = (4*120+20)+'px';
    }
}
export default {
    getByClass,
    addClass,
    removeClass,
    addAction
}

