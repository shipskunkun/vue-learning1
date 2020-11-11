#### Q:为什么使用单文件组件？

因为全局注册组件，要求组件不能重新命名

不能使用css

html部分写在 template中，而且是使用字符串的方式，缺乏语法高亮





#### Q: 子组件为什么不可以修改父组件传递的prop, 如果修改了，vue是如何监控到属性的修改并给出警告的？

vue 中有单向数据流的概念，子组件接受父组件的props属性，但是不能直接修改 props 的值，会发出警告

正确做法有两种，一种是在data中，重新定义一个属性 = props

一种是使用计算属性，对prop值进行转换



#### Q: prop 接受 function是如何操作的？



表现形式上：不是 @input , 而是 :input

使用： ，代表传递给子组件function

子组件接受 function，可以直接在子组件中调用，在父组件中定义的方法。





#### Q:如何理解双向绑定？

首先我们看什么是双向绑定，就是 view更新了，更新model 中的data,  model中data 更新了，view上显示更新

如何做到的，拿 v-model 举例

实际是是，@input="value = $event.target.value"，   v-bind:value="searchText"

vue通过模板编译，返回的是 render 函数，with(this) 这种格式，此时页面上的数据，就和 vue实例中data定义的数据一一对应起来，通过get 收集依赖

在页面上修改view, 实际上就是修改data中的数据，model自然会改变

触发了Object.defineProperty 中 set函数，重新render html，更新视图，以此达到响应式效果



#### Q: key 的作用，移动组件、删除、都会重新创建和销毁组件吗？

举例子？

有key的情况

1. 如果只是移动，不销毁组件， 没有组件销毁和重建
2. 从中间插入新的组件？只有新增的改变

没有key的情况下，有多个相同的组件。

​	不复用，只有要改动，都会重新创建和销毁，而且不管顺序，比如把B2  挪到B1  位置，也认为是 update

​	新增，新增节点后面的都要改变



#### Q:所有的操作都会响应式么？

哪些操作不会引起视图更新？
 1. 没有在模板页面上使用的，getter 阶段没有收集依赖

    在data 中注册了，但是 template中没有用到

 2. 属性没有写在 data 方法中的

    ​	写在return 外面了

 3. 给对象新增属性，之前的属性开始没有在data 中声明

    ​	比如开始 info{}  , 后面添加个属性，info.name

 4. 对数组使用下标添加数据

    ​	list[3] = 123;

```
data() {
    this.name = name;
    return {
      // name: 'world',
      info: {},
      // info: {
      //   number: undefined
      // },
      list: []
    };
  },
```



#### Q: 生命周期常用来干嘛

beforeCreate 初始化数据

created 监测数据，此时可以访问 data

mounted 做异步请求，操作dom、定时器等

beforeDestroy: 移除事件监听器，计时器



#### Q： provide inject 作用 缺点

数据可以不用层层传递，通信成本高

provide 提供数据，inject 拿到数据

如何去掉我们不需要的属性？



#### Q：如何获取跨组件组件实例

this.$ref  获取组件实例 或者 真实dom

this.