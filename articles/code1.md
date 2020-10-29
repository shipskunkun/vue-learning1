



#### 1.2

@change  是失去焦点时候触发，@input是输入后即时触发

```
let a = { aa:1, bb:2}
let b = {...a,  bb:3}
b = {aa:1, bb:3} 
why?

// 等同于
let a = { aa:1, bb:2}
let b = Object.assign({}, a, {bb:3})

```

