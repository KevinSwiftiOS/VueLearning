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
### 视频9重点
v-on用来绑定事件
```
  <input type="button"  :value="title + '1'" v-on:click = "alert">
  //methods中方法的定义
   //定义method方法 用来绑定v-on中的click事件
          methods:{
              alert:function () {
                  alert(12345);
              }
          }
```
可以用缩小 @ 后面加上需要绑定的事件click即可 @click

### 视频10重点
#### 走马灯效果实现
```
<div id = "app">

    <input type="button" value = "跑起来" @click="start">

    <input type="button" value = "停下来" @click="stop">
    <h3>{{msg}}</h3>

</div>
```
method中方法定义
``` 
      //定义method方法 用来绑定v-on中的click事件
    methods:{
        //es6语法，直接使用括号函数
        start(){
            //避免重复执行定时器
            if(this.interval != null)
                return;
            //设定计时器，es6箭头函数的效果是内部的this指向与外部相同。
            //或者用that保存this
            this.interval = setInterval(() => {
                let start = this.msg.substring(0,1);
                let end = this.msg.substring(1);
                //重新拼凑字符串
                this.msg = end + start;
            },400);
        },
        stop(){
            //清除计时器 计时器id设置为null
            clearInterval(this.interval);
            this.interval = null;
        }
    }
```
es6中的箭头函数表示，可以使内部的this作用域指向与外部的相同。如果用function,外部需要定义一个
```
var that = this;
```
将that传入，才能访问data中的数据域。
定义data中的计时器
``` 
data:{
            msg:"欢迎学习Vue", //data返回数据源
            interval:null //定时器
        },
```
interval表示计时器
### 视频14重点
v-model可以实现双向数据绑定，即从model层映射到view层，和从view层映射到model层,v-bind等属性都不能实现。
v-model只能应用于表单元素，input中，例如select,input,text等。
``` 
 <!--双向数据绑定 只能应用在表单元素中 从model绑定到view 从view绑定到model 只有v-model才能实现双向数据绑定-->
    <input type="text" v-model = "msg">
```
在data中的定义
``` 
  data:{
            msg:"爱敲代码" //data返回数据源
        }
```
### 视频15重点
为元素绑定class属性。
class的定义
``` 
.red{
            color: red;
        }
        .thin{
            font-weight: 200;
        }
        .italic{
            font-style: italic;
        }
        .active{
            letter-spacing: 0.5em;
        }
```
传统方法加载
``` 
 <!--传统方法-->
    <h1 class="red thin">这是第一个h1标签</h1>
```
使用:class的方法加载 加载一个数组
``` 
  <!--第一种方式，直接传递一个数组过去-->
    <h1 :class="['red','italic']">这是第二个h1标签</h1>
```
使用三元表达式,flag定义在data中
``` 
<!-- 可以使用三元表达式 当flag为true的时候才进行显示-->
    <h1 :class="['red','italic',flag ?'active' :'']">这是第三个h1标签</h1>
```

简化三元表达式的表达
``` 
    <!-- 简化的方法 使用对象来代替三元表达式-->
    <h1 :class = "['red','italic',{'active':flag}]">这是第四个h1表达式</h1>
```
可以直接使用对象来进行表示
``` 
   <!--可以直接使用对象-->
    <h1 :class = "{red:true,italic:true,active:flag}">这是第5个h1标签</h1>
```
### 视频16重点
为style绑定元素样式
第一种方法 直接使用:style的方法
``` 
<h1 :style = "{color:'red','font-weight':'200'}">这是第一个h1标签</h1>
```
第二种传入一个对象
``` 
  <h1 :style = 'styleObj'>这是第二个h1标签</h1>
  //定义styleObj对象
   styleObj:{color:'red','font-weight':'200'},
```
第三种传入一个数组
``` 
    <h1 :style = '[styleObj,styleObj1]'>这是第三个h1标签</h1>
```
在data中定义对象
``` 
data:{
            msg:"爱敲代码", //data返回数据源
            styleObj:{color:'red','font-weight':'200'},
            styleObj1:{'font-style':'italic'}
        }
```
### 视频17重点
v-for指令的4种使用方法
普通的循环 和循环对象数组，循环对象，和自定义的累加
``` 
 <!--循环普通数组-->
    <!-- 循环简单数组 -->
    <p v-for="(item,index) in list">索引：{{index}} -- 值：{{item}}</p><hr>
    <!-- 循环对象数组 -->
    <p v-for="user in list2">id:{{user.id}}--name:{{user.name}}</p><hr>
    <!-- 遍历对象 -->
    <p v-for="(val,key) in user">{{key}}:{{val}}</p><hr>
  <!--迭代数字的时候是从1开始的-->
    <p v-for="count in 10">这是第几次{{count}}次</p>

```
data中数据的定义
``` 
 data:{
           list:[1,2,3,4,5], //普通对象
            list2:[
               {"id":1,"name":"ckq"},
               {"id":2,"name":"cpp"},
           ],
            user:{
               "key":1,
                "value":"222"
            }
        }
```
迭代数字时要注意的事项
迭代数字的时候是从1开始的，而不是从0开始的。
### 视频18重点
v-for中的注意事项
在vue2.2.0版本后，需要在v-for中每一个指定key对象。v-for指定key，key属性只能使用number或者string， 指定Key时，会按照key去进行查找，而不是按照顺序去查找，避免乱序的时候找不到对象。
``` 
<p v-for="item in list" :key="item.id">
    <input type="checkbox">
    {{item.id}}--
    {{item.name}}
</p>
```
### 视频19重点
v-if和v-show的区别
``` 
  <!--v-if是每次都会新增删除元素 性能切换比较严重-->
    <h3 v-if = "flag">使用v-if控制元素</h3>
    <!--每次都不会重新进行dom新增删除操作， 只是切换元素的display的样式
    有较高初始渲染消耗，
    -->
    <!--如果有频繁切换 用v-show-->
    <h3 v-show = "flag">使用v-show控制元素</h3>
    <button @click = "flag = !flag" value="切换">切换</button>
```
若click事件只有一条语句，则可以直接在click事件中定义。
v-if每次都会新增删除元素 性能切换比较严重。
v-show每次都不会重新进行dom新增删除操作， 只是切换元素的display的样式
    有较高初始渲染消耗。在每次切换时只会修改display属性为none。或者存在即可。
### 视频27重点
过滤器的使用，过滤器的作用实在页面渲染前再进行一次操作，但是对**原始数据**是没有影响的。
定义全局过滤器
``` 
 //传入的参数 arg
    Vue.filter('msgFormat',function (msg,arg) {
        //进行处理 写正则来处理 第一个参数是字符串或者是正则
       return msg.replace(/单纯/g,arg);
    });
```
第一个定义的是过滤器的名字，第二个定义过滤器的执行函数，首先是传进来要过滤的值，和传进来的参数。进行操作后返回。
``` 
 <p>{{msg | msgFormat('疯狂') }}</p>
```
过滤器的使用，在|后面加入过滤器的名字，和要传入的参数，也可以不传参.
可以紧跟多个过滤器的使用
``` 
    <p>{{msg | msgFormat() | test }}</p>
```
私有过滤器的定义，全局过滤器采用Vue.filter()来定义，私有过滤器是定义在new Vue内部的，定义一个对象，filters，和data，methods等相同。
``` 
  filters:{
            //定义私有过滤器 过滤器有2个条件 过滤器名称和处理函数
            dateFormat:function (msg,pattern) {
                return "22334455";
            }
        }
```
过滤器使用的时候，采用的是就近原则，若组件内部有过滤器，则采用这个过滤器，然后再传递到外部，使用全局过滤器。
### 视频32重点
自定义指令
指定全局指令，使用directive,第一个参数是指令名称，不加v-,但是在调用的时候加上v-,
第二个参数是钩子函数，表示在什么时候执行什么操作，例如bind,表示指令和元素绑定的时候，inserted,表示插入的时候，updated，表示元素跟新的时候，可能会执行多次。
``` 
 //参数2是对象，对象身上有指令相关的钩子函数,这些函数可以在特定的阶段执行，执行相关操作。
    Vue.directive('focus', {
        bind: function (el) { //当元素与指令绑定的时候触发 el表示绑定到哪个元素 还未插入到dom中。
            //第一个参数永远是el,表示被绑定的元素,原生的js对象。
            el.focus();

        },
        inserted: function (self) { //当元素插入到dom中的时候，触发。
            //第一个参数永远是el,表示被绑定的元素,原生的js对象。
            self.focus();
        },
        updated: function () { //当node 更新的时候，触发，可能会触发多次

        }
    });
```
要使页面input元素获得焦点，只能在insert的时候，因为bind还未插入元素，只有在insert插入的时候才会生效。在对应的元素上使用v-focus即可。
``` 
  <label>
          搜索关键字
 <input type="text" class="form-control" v-model = "keywords" v-focus>
           </label>
```
### 视频35重点
指令中传入binding,表示指令中传入的值等一些其他表达式。
``` 
 //定义私有指令
        directives: {
            // 设置字体加粗
            'fontweight': {
                bind: function (el, binding) {
                    el.style.fontWeight = binding.value
                }
            },
```
可以使用function来简写，表示直接绑定到bind和update函数中。
``` 
 'fontsize':function (el,binding) {
                el.style.fontSize = parseInt(binding.value) + 'px';
            }
        }
```
在元素中传参
``` 
  <p v-fontweight="'800'" v-fontsize="'60'">{{msg | msgFormat() | test }}</p>
```
传入的fontweight是800 size是60
**指令的定义都是小写，调用时候可以用大写**
### 视频36重点
生命周期钩子：vue实例在创建过程中的各种事件。
1.创建期间的生命周期函数
2.运行期间的生命周期函数
3.销毁期间的生命周期函数
beforeCreate:表示实例完全被创建之前和调用。data和method中的数据都没有被初始化。
created:第二个生命周期函数，data和method的数据都已经被初始化。如果调用method方法或数据，要在create中使用。
beforeMount:放到页面(挂载到页面之前)
mouted:挂载到页面中去。mouted 表示已经完全被创建完。
### 视频55重点
跳过了动画部分，定义组件的使用。
1.使用全局组件的方式。
``` 
 //使用vue.extend创建全局组件
    var com1 = Vue.extend({
        template:'<h3>这是使用vue.extend创建的组件</h3>',//通过template属性，规定了组件所需要展示的html结构

    })
    //使用组件，组件名称使用驼峰 引用时 my-com1 否则就一般使用mycom1
    //1.2 使用vue.component 组件名称 创建出来的组件模板对象 会展示com1模板里的内容
    Vue.component('mycom1',com1);
```
使用vue.extend来定义组件，随后template是要展示的html格式内容。然后使用vue.component来注册组件，将com1注册进去，若使用了myCom1驼峰命名法，则在html
中采用如下方法引用<my-com1></my-com1>，若采用的是mycom1,则用<mycom1></mycom1>这种即可。在html当中的引用需注意。
### 视频56重点
组件的自定义使用，使用vue.component，随后定义字典中的相关值，通过key-value使用
``` 
 //直接通过对象创建
    Vue.component('mycom2',{
        template: '<h3>这是直接使用</h3>'
    });
    Vue.component('mycom3',{
        template:'#tmpl'
    })
```
或者将template对应的id写到外部去，template对应一个id即可。
``` 
<!--v层-->
<div id = "app">
    <!--使用组件 直接以html标签形式引入-->
    <mycom1></mycom1>
    <mycom2></mycom2>
    <mycom3></mycom3>
    <login></login>
</div>
<template id = "tmpl">
    <div>
        <h1>ccccc</h1>
    </div>
</template>
```
在外部的定义。这样可以有自动提示的功能。
在vue一个实例内部定义私有组件
``` 
  //创建一个vue实例
    var vm = new Vue({
        el:"#app", //表示绑定的vue实例 要控制的是哪一个区域
        data:{
            flag:true
        },
        methods:{
            toggle(){
                this.flag = !this.flag;
            }
        },
        //定义实例内部私有组件
        components:{
            login:{
                template:'<h1>这是私有的Login</h1>'
            }
        }
    });
```
是使用复数，就表示是内部私有的，不能喝外部共享，使用也通过
``` 
<login></login>
```
即可。
### 视频59重点
组件中data的使用
data必须是一个function,而且在function内部必须返回一个对象。这是与Vue实例中data不一样的地方。
``` 
    Vue.component('mycom2',{
        template: '<h3>这是直接使用 {{msg}}</h3>',
        //组件中的data必须是一个方法，function,不像vue实例中是一个对象，而且在组件的data方法中，必须返回一个对象
        //组件中的data与实例中的data使用方式完全一样
        data:function () {
       return {
           "msg":"ckq"
       };
        }
    });

```
使用的方法相同，依然是通过{{}}来调用。
### 视频60重点
自定义组件中data必须是自己返回一个function,若是返回一个全局对象的话，则会变成全局对象的一个引用。改变一个会改变全局的3个。则会报错。
``` 
  var dataObj = {cnt:0};
    Vue.component('counter',{
        template:"#tmp",
        data:function () {
            return dataObj;
        },
        methods:{
            increment(){
                this.cnt++;
            }
        }
    });
```
这样会报错。所以必须data自己返回一个object;
``` 
 Vue.component('counter',{
        template:"#tmp",
        data:function () {
            return {cnt:0};
        },
        methods:{
            increment(){
                this.cnt++;
            }
        }
    });

```
### 视频61重点
vue组件的切换
通过标识符flag进行组件切换
``` 
    <a href="" @click.prevent="flag=true">登录</a>
    <a href="" @click.prevent="flag=false">注册</a>
    <login v-if="flag"></login>
    <register v-else="flag"></register>
    <hr>
```
定义组件
``` 
 Vue.component('login',{
        template:'<h3>登录组件</h3>'
    })
    Vue.component('register',{
        template:'<h3>注册组件</h3>'
    })
```
或者使用vue提供的component组件，在组件中定义id,来实现加载对应的组件，切换时只要变换id的值即可。
``` 
    <h2>使用component元素切换组件</h2>
    <!--component也是vue提供的-->
    <a href="" @click.prevent="componentId='login'">登录</a>
    <a href="" @click.prevent="componentId='register'">注册</a>
    <!-- component是一个占位符，:is属性，可以用来指定要展示的组件名称 -->
    <component :is="componentId"></component>
    <component :is="'login'"></component>
```
data中flag与id的定义
``` 
 data:{
            flag:true,
            componentId:'login'
        },
```
### 视频66重点
父组件向子组件传递数据
``` 
    <!--父组件可以在引用子组件的时候，通过属性绑定的形式v-bind把需要传递给子组件的数据 以属性绑定传递到内部 供使用-->
  <com1 v-bind:parentmsg="msg"></com1>
```
在子组件中定义parentmsg 随后父组件把msg传递给子组件。
``` 
    //结论，经过演示发现，子组件中，默认无法访问父组件中data的数据和方法
        //父组件向子组件传值
        components:{
            com1:{
                data(){}, //data中是子组件私有的 通过ajax等的都可以放在data身上。data中可读可写，props中是只读的

                template:'<h1>这是子组件 {{parentmsg}}</h1>',
                props:['parentmsg'],//属性定义。从父组件传递到子组件 从父组件传递过来
            //都是通过父组件传递给子组件
            }
        }
```
在子组件中通过props定义从父组件传递过来的值，props中通过数组形式进行添加。经过实验，**子组件只能修改自己的data中的属性的值,而不能修改从父组件传递过来的props中的值。**
### 视频67重点
子组件调用父组件传过来的方法，父组件把方法传递给子组件
父组件中定义方法
``` 
  //创建一个vue实例
    var vm = new Vue({
        el:"#app", //表示绑定的vue实例 要控制的是哪一个区域
        data:{
            msg:"欢迎学习Vue" //data返回数据源
        },
        methods:{
            show(data){
console.log("调用了父组件身上的show方法" + data);
            }
        },
        components:{
            com2:com2
        }
    });
```
在组件中定义子组件com2
``` 
 var com2 = {
        template:'#tmpl',
        }
```
随后在组件中传递方法
``` 
<!--v层-->
<div id = "app">
    <p>{{msg}}</p>
    <com2 @func123="show"></com2>
</div>
```
通过@func123 将父组件中的show方法传递给子组件
子组件中调用func123方法
``` 
<template id = "tmpl">
    <div>
        <!--父组件向子组件传递方法，采用事件绑定机制
        自定义一个事件属性之后，子组件通过某些方式，来调用这个传递进去
        的方法
        -->
        <h1>这是子组件</h1>
        <input type="button" value="子组件中的按钮，点击，触发父组件传递过来的func" @click = "myclick">
    </div>
</template>
```
在myclick中，通过emit事件触发从父组件传过来的事件
``` 
 var com2 = {
        template:'#tmpl',
        data(){
          return{
              msg:{name:"ckq","age":18}
          }
        },
        methods: {
        myclick(){
          //  alert(22);
            //当点击子组件按钮时，如何拿到父组件传递过来的方法 并且调用。
            this.$emit('func123',this.msg); //emit代表触发。调用 第二个参数是传参
        }
        }

    }
```
如果想传递参数的话，则通过在emit后加其他参数传递过去即可。
### 视频70重点 
通过ref获取html元素
通过ref绑定h3元素
```
 <h3 ref = "myh3">今天天气很好!!!</h3>
```
随后在vue实例中便会有ref属性。可以通过this.$refs.myh3获取。组件方式也可以同样获取。
``` 
 //创建一个vue实例
    var vm = new Vue({
        el:"#app", //表示绑定的vue实例 要控制的是哪一个区域
        data:{
            msg:"欢迎学习Vue" //data返回数据源
        },
        methods:{
            getElement(){
                //获取dom元素
                console.log(this.$refs.myh3.innerText);
                console.log(this.$refs.myLogin.msg);
            }
        },
        components:{
            login
        }
    });
```
通过login组件也可以获取其对应的data和methods中的方法。
```
var login = {
        template:'<h1>登录组件</h1>',
        data(){
            return {
                msg:"son mosg",
            }

        },
        methods:{
            show(){
                console.log("调用了子组件方法");
            }
        }
    }
```
### 视频73重点
vue-router的使用
首先引入vue-router的文件
``` 
 <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
```
定义vue-router的对象
``` 
 //2.创建一个路由对象
    //当导入包之后，在window全局对象中就有window构造函数
    //在new过程中，传递配置对象
    var routerObj = new VueRouter({
        routes:[
            {
             path:'/register',
                component:register
            },
            {path:'/login',
             component:login //必须放组件模板对象，不能是组件引用名称。
            }   //是个对象，哪个路由地址，属性2是component 匹配到的对应组件   //是一个数组
        ] //这个配置对象中的route表示路由匹配规则
    });
```
定义一个routerObj对象，其对应的path对应一个单独的组件。所以我们要定义login和register组件。
``` 
  //创建组件
    var login = {
        template:'<h1>登录组件</h1>'
    };
    var register = {
        template: '<h1>注册组件</h1>'
    }
```
在vue实例中使用我们定义的路由对象
``` 
 //创建一个vue实例
    var vm = new Vue({
        el:"#app", //表示绑定的vue实例 要控制的是哪一个区域
        data:{
            msg:"欢迎学习Vue" //data返回数据源
        },
        router:routerObj //将路由规则对象注册到vm实例上，检测url变化，展示对应组件
    });

```
和其他data，method等相同，有一个router对象。
随后将router-view添加到组件中，可以表示一个占位符，表示根据对应的路由加载对应的组件
```
 <!--当做占位符的，路由规则，当匹配到的时候，就展示对应的组件-->
    <router-view></router-view>
```
可以添加一个a对象，来切换不同的路由，不同的路由切换导致了加载不同的组件。
``` 
    <a href="#/login">登录</a>
    <a href="#/register">注册</a>
    <p>{{msg}}</p>
    <!--当做占位符的，路由规则，当匹配到的时候，就展示对应的组件-->
    <router-view></router-view>
```
这样路由方法便实现生效了。
### 视频75重点
当加载根路径的时候，默认加载到login组件的使用。
``` 
  //在new过程中，传递配置对象
    var routerObj = new VueRouter({
        routes:[
            {path:'/',redirect:'/login'}, //重定向
            {
             path:'/register',
                component:register
            },
            {path:'/login',
             component:login //必须放组件模板对象，不能是组件引用名称。
            }   //是个对象，哪个路由地址，属性2是component 匹配到的对应组件   //是一个数组
        ], //这个配
```
可以使用重定向，redirect,当加载'/'的时候，加载到login对应的组件。
可以使用router-link代替a标签来表示跳转
```
   <router-link to = "/login" tag = "span">登</router-link>
    <router-link to = "/register">注册</router-link>
```
tag表示用span来代替a.
### 视频76重点
当点击登录时，默认登录时候的那个路由高亮。所以，可以使用vue-router提供的router-link-active,修改其样式即可。或者使用自定义class.
```
 .router-link-active{
            color: red;
            font-weight: 800;
            font-style: italic;
            font-size: 80px;
            text-decoration: underline;
            background-color: green;
        }
```
在new VueRouter的时候修改router-link-active样式的名称。
``` 
    var routerObj = new VueRouter({
        routes:[
            {path:'/',redirect:'/login'}, //重定向
            {
             path:'/register',
                component:register
            },
            {path:'/login',
             component:login //必须放组件模板对象，不能是组件引用名称。
            }   //是个对象，哪个路由地址，属性2是component 匹配到的对应组件   //是一个数组
        ], //这个配置对象中的route表示路由匹配规则
     linkActiveClass:'myactive'
    });
```
linkActiveClass改成我们自己的即可。
``` 
   .myactive{
            color: red;
            font-weight: 800;
            font-style: italic;
            font-size: 80px;
            text-decoration: underline;
            background-color: green;
        }
```
这样也可以实现在切换的时候高亮显示。
### 视频78重点
在url路径中传参
``` 
<!--v层-->
<div id = "app">
    <!--路由中查询字符串，不需要改变路由规则-->
    <router-link to = "/login?id=10&name='张三'" tag = "span">登</router-link>
    <router-link to = "/register">注册</router-link>
    <p>{{msg}}</p>
    <!--当做占位符的，路由规则，当匹配到的时候，就展示对应的组件-->
    <router-view></router-view>
</div>
```
可以用login?id=10&name=张三 这种来进行传递
随后通过$route属性获取对应的id和name的值。
``` 
    //创建组件
    var login = {
        template:'<h1>登录组件---{{$route.query.id}}</h1>',
        data(){
            return {
                msg:'123'
            }
        },
        created(){
            //组件的生命周期函数 获取参数
          console.log(this.$route.query.name);
        }

    };
```
通过this.$route.query.name获取name和id.学习
### 视频79重点
通过param参数获取对应的id
``` 
 //在new过程中，传递配置对象
    var routerObj = new VueRouter({
        routes:[
            {path:'/',redirect:'/login'}, //重定向
            {
                path:'/register',
                component:register
            },
            {path:'/login/:id',
                component:login //必须放组件模板对象，不能是组件引用名称。
            }   //是个对象，哪个路由地址，属性2是component 匹配到的对应组件   //是一个数组
        ], //这个配置对象中的route表示路由匹配规则
        linkActiveClass:'myactive'
    });
```
在path中的定义是/login/:id这种方式来定义路由
随后在进行跳转的url为。
``` 
<router-link to = "/login/12" tag = "span">登</router-link>
    <router-link to = "/register">注册</router-link>
```
可以通过this.$route.params.id获取
### 视频80重点
定义子视图，可以通过children属性定义。
``` 
  var router = new VueRouter({
      routes:[
          {path:'/account',component:account,
          children:[
              //不带杠表示 以account去匹配剩下的
              //方便用户理解url地址
              {path:'login',component: login},
              {path:'register',component: register}
          ]
          }
      ]
  });

```
表示login是account的子组件，访问的时候通过/account/login进行访问。
在子路由中视图的定义
``` 
<template id = "tmpl">
    <div>
        <h1>这是account 组件</h1>
        <router-link to = "/account/login">登录</router-link>
       <router-link to = "/account/register">注册</router-link>
    <router-view></router-view>
    </div>
</template>
```
通过router-link to = "/account/login"跳转
因此父组件中有一个router-view
在定义子组件的template时，也要定义router-view
``` 
<template id = "tmpl">
    <div>
        <h1>这是account 组件</h1>
        <router-link to = "/account/login">登录</router-link>
       <router-link to = "/account/register">注册</router-link>
    <router-view></router-view>
    </div>
</template>
```
### 视频82重点
路由命名视图，在3个router-view中加载不同的组件。
``` 
<!--v层-->
<div id = "app">
<router-view></router-view>
    <div class="container">
    <router-view name = "left"></router-view>
    <router-view name = "main"></router-view>
    </div>
</div>
```
router-view 不设置name，默认显示根组件，随后以下的两个router-view，根据name加载对应的组件。
```
var header = {
    template:'<h1 class="header">Header头部区域</h1>'
};
var leftBox = {
    template: "<h1 class='left'>left侧边栏区域</h1>"
};
var mainBox = {
    template:'<h1 class="main">main主体区域</h1>'
}
```
组件定义
router路由的定义，设置不同的name
```
    var router = new VueRouter({
        routes:[
            //定义多个组件
            {path:"/",components: {
                    "default": header,
                    "left": leftBox,
                    "main": mainBox
                }
            },

        ]
    });
```
随后在vue实例中加载对应的路由
``` 
var vue = new Vue({
    el:"#app", //表示绑定的vue实例 要控制的是哪一个区域
    data:{
        msg:"欢迎学习Vue" //data返回数据源
    },
    router //将路由规则对象注册到vm实例上，检测url变化，展示对应组件
});

```
