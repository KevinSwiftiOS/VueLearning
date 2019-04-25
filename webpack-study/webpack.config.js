//指定入口和出口文件 这个配置文件就是js文件，通过node中的模块操作向外暴露了配置对象
const path = require("path");
module.exports = {
    //指定入口和出口文件 入口main.js 出口dist/bundle.js
    entry:path.join(__dirname,'./src/main.js'),   //表示使用webpack打包哪个文件
    output: {
        path:path.join(__dirname,'./dist'), //文件夹名称
        filename:'bundle.js' //指定输出文件名称
    }//输出文件相关的配置
};
