//这是main.js 使我们项目的js入口文件
//1.导入jquery 从node_modlues导入包，并且用$来接收
//es6导入模块 由于es6代码太高级 浏览器解析不了 这一行执行会报错
import $ from 'jquery';
//const $ = require('jquery');


$(function () {
    //选择器
    $('li:odd').css('backgroundColor','green'); //奇数行
    $('li:even').css('backgroundColor',function () {
        return '#' + 'D97634'
    }); //偶数行

});
