---
title: jslearning
date: 2018-11-02 13:45:14
tags:
---
#### 变量的声明
一条语句中声明的多个不可以赋同一个值:
>var x,y,z=1; 
x , y 为 undefined（未给出使用值的变量）， **z**为 1

#### 数组

```
    var Name=new Array();
    Name[0]="lsc";
    Name[1]="qimei";
    Name[2]="jiangyue";
    document.write("Hello World"+"<br>");
    for(var j=0;j<Name.length;j++)
    {
        document.write(Name[j]+"<br>");
    }
```
ps：其中`"<br>"`表示换行的意思！(一定要注意不要和css里的`<br />`写混了)

数组有四种方式：
```
var arr1 = new Array('a', 'b', 'c');    //这是一个预定义的数组，在创建时初始化
var arr2 = ['a', 'b', 'c' ];       //同样是在创建时初始化，但是这种创建更为简洁直观
var arr3 = new Array( );   var arr4 = [ ];     //这两种是创建空的数组
可以理解为new Array()=[]
```
ps：数据类型下面的笔记还没看（晚点记得看）;

#### 对象
ps：对象的创建方式有两种
法一：
```
var person = {
    name: "lsc",
    age: 20,
    sex: "女",
    play: "guitar",
    play: function () {
        return "like paly guitar";
    }
};
```
法二：
```

var person =new Object();
person.name="lsc";
person.age=20;
person.sex="女";
person.play="guitar";
person.play=function(){
    return "like paly guitar";
}
```

#### 函数
```
<body>
<button onclick="getNameAndTel('lsc','110')">点击一下！</button>
<script>
function getNameAndTel(name,tel) {
	alert("name:"+name+"\n"+"tel："+tel);
}
</script>
</body>
```
此时`\n`是起作用了的，但是如果换成`"<br>"`却不起作用？why？


验证3+5的结果
```
<body>
<p id="demo">验证3+5的结果</p>
<script>
	function compute(a,b){
	return a+b;
}
document.getElementById("demo").innerHTML=compute(3,5);
</script>
```
>注意：
`document.getElementById("demo").innerHTML=compute(3,5);`千万不要写成这样   `innerHTML="computer(3,5)"`



#### 向未声明的 JavaScript 变量分配值
如果您把值赋给尚未声明的变量，该变量将被自动作为 window 的一个属性。

这条语句：

>carname="Volvo";

将声明 window 的一个属性 carname。

非严格模式下给未声明变量赋值创建的全局变量，是全局对象的可配置属性，可以删除。
```
var var1 = 1; // 不可配置全局属性
var2 = 2; // 没有使用 var 声明，可配置全局属性

console.log(this.var1); // 1
console.log(window.var1); // 1

delete var1; // false 无法删除
console.log(var1); //1

delete var2; 
console.log(delete var2); // true
console.log(var2); // 已经删除 报错变量未定义
```

#### JavaScript事件

```
<button onclick="this.innerHTML=Date()">现在的时间是？</button>
```

注意是this.innerHTML **=** Date()  **是等号！**

执行前：
<button onclick="this.innerHTML=Date()">现在的时间是？</button>
执行后：
<button >Thu Nov 01 2018 20:25:24 GMT+0800 (中国标准时间)</button>

---
#### 字符串可以是对象
通常， JavaScript 字符串是原始值，可以使用字符创建：`var firstName = "John"`

但我们也可以使用 new 关键字将字符串定义为一个对象： `var firstName = new String("John")`
```
var x = "John";              // x是一个字符串
var y = new String("John");  // y是一个对象
document.getElementById("demo").innerHTML =typeof x + " " + typeof y;
```
ps：不要创建 String 对象。它会拖慢执行速度，并可能产生其他副作用：
" " 表示空格

#### 两个等号与三个等号的区别
===表示"绝对相等，即 **数据类型**与 **值**都必须相等"
`实例：`
```
<script>
var x = "John";              // x 是字符串
var y = new String("John");  // y 是一个对象
document.getElementById("demo").innerHTML = x===y;
</script>
// 结果为 false，因为 x 是字符串，y 是对象
```

