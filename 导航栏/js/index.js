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

window.onload = function  (argument) {
    addClass( getByClass('header')[0] , 'header_active_1' ) ;

    getByClass('header__nav-item_i_1')[0].onclick=function () {
        document.body.scrollTop = 0;
    };
    getByClass('header__nav-item_i_2')[0].onclick=function () {
        document.body.scrollTop = 1*800-60;
    };
    getByClass('header__nav-item_i_3')[0].onclick=function () {
        document.body.scrollTop = 2*800-60;
    };
  /*  getByClass('header__nav-item_i_4')[0].onclick=function () {
        document.body.scrollTop = 3*800-60;
    };

    getByClass('header__nav-item_i_5')[0].onclick=function () {
        document.body.scrollTop = 4*800-60;
    };*/

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
};

window.onscroll = function () {

    var top  = document.body.scrollTop;
    if( top < 100 ){
        getByClass('header')[0].setAttribute('class','header header_active_1')
        removeClass( getByClass('header')[0] , 'header_status_black' );
    }else{
        addClass( getByClass('header')[0] , 'header_status_black' ) ;
    }

 /*   if( top < 400 ){
        getByClass('outline')[0].style.opacity=0;
    }else{
        getByClass('outline')[0].style.opacity=1;
        getByClass('outline')[0].setAttribute('class','outline outline_active_1');

    }
*/


    if(top>1*800-61){
        getByClass('header')[0].setAttribute('class','header header_status_black header_active_2');
    }

    if(top>2*800-61){
        getByClass('header')[0].setAttribute('class','header header_status_black header_active_3');
    }
 /*   if(top>3*800-61){
        getByClass('header')[0].setAttribute('class','header header_status_black header_active_4');
    }
    if(top>4*800-61){
        getByClass('header')[0].setAttribute('class','header header_status_black header_active_5');
    }*/
};
