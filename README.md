# VueLearning
Vue框架的学习
### 视频6重点
引入vue库
```
 <script src="https://cdn.jsdelivr.net/npm/vue"></script>

```
view层的id定义
```
<div id = "app"></div>
```
在script标签中实现，表示一个vue实例进行绑定
```
//创建一个vue实例
    var vm = new Vue({
        el:"#app", //表示绑定的vue实例 要控制的是哪一个区域
        data:{
            msg:"欢迎学习Vue" //data返回数据源
        }
    });

```   
表示vue实例的绑定，就可以在div中如下使用msg的信息。
``` 
<div id = "app">
    <p>{{msg}}</p>
</div>
```
### 视频7重点
v-cloak可以解决闪烁问题，在style中定义属性为v-cloak时，display设置为none,表示没有值时不显示，可以解决{{}}表达式的闪烁问题
```
<style>
    [v-cloak]{
        display: none;
    } /*当使用v-cloak属性的时候，当没有内容时，使用display:none将其设置为没有*/
</style>

   <!--使用v-cloak 可以避免闪烁问题，当网络太慢时，可以避免{{}}的出现，当有内容时，再进行渲染-->
  <p v-cloak>+++++{{msg}}</p>
```
v-text 和{{}}的差别，v-text没有闪烁问题，会覆盖内部的内容.{{}}只会覆盖表达式内的。其余的不会覆盖。
```
    <!--使用v-cloak 可以避免闪烁问题，当网络太慢时，可以避免{{}}的出现，当有内容时，再进行渲染-->
  <p v-cloak>+++++{{msg}}</p>
    <h4 v-text = "msg">++++</h4>
    <!-- v-text会覆盖里面的内容 但是插值表达式{{}}，只会替代掉自己的那一部分，不会把这个元素内容清空-->
```
v-html内容用来加载html的内容，同样也会覆盖内部的内容。
```
<div v-html = "msg2"></div>
    <!-- v-html可以解析html的内容 ，同样的会替换掉里面的内容-->
</div>
```
### 视频8重点
v-bind用来绑定值，根据属性来找对应的值，在其中可以加一些合法的js表达式，缩写可以用:value来绑定。
```
 <!--绑定值 可以用v-bind属性 表示根据属性值去找-->
    <input type="button"  v-bind:value="title + '1'">
    <input type="button"  :value="title + '1'">
    <!--绑定值 可以用v-bind属性 缩略可以用:value来绑定-->
```