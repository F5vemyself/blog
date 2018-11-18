---
title: jslearning
date: 
tags: js学习入门篇
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
```
var a=5;     
var b='5';
alert(a==b);  结果为true   原因：==隐式转换(我们并没有告诉计算机要转换)，先转换类型，再比较
alert(a===b); 结果为false  原因：不转换类型，直接比较
```

#### 数据类型转换
>手动转换

* 数字转换为字符串
toString(100+23);/String(100+23);

* 日期转换为字符串
String(new Date());

* 字符串转换为number
Number(222)  222
Number("hello");  NaN

* 布尔型转换为数字
Number(false);

---

>自动类型转换

* 自动转换为字符串
当你尝试输出一个对象或一个变量时 JavaScript 会自动调用变量的 toString() 方法：

```
document.getElementById("demo").innerHTML = myVar;

myVar = {name:"Fjohn"}  // toString 转换为 "[object Object]"
myVar = [1,2,3,4]       // toString 转换为 "1,2,3,4"
myVar = new Date()      // toString 转换为 "Fri Jul 18 2014 09:08:55 GMT+0200"
```
Infinity表示正无穷大

---
#### 几种简单的交互
* confirm消息对话框
* alert 弹出警告框
* window.open打开窗口
* window/自命名.close() 关闭窗口

【confirm消息对话框】
```
function testConfirm()
{
    var tom=confirm("少年，你渴望力量吗？");
    if(tom==true)
    {
        document.write("那你很棒棒哦！");
    }    
    else
    document.write("那你好颓哦！");
}
```
【window.open打开窗口】
----------格式：window.open("url","打开方式","参数字符串")
----------打开方式----------
       _blank：在 **新窗口** 显示目标网页
       _self：在 **当前窗口** 显示目标网页
       _top：框架网页中在 **上部窗口** 中显示目标网页

-----------参数表-----------
参数      |值    |说明
:-------:|:----:|:---:
top      |Number|窗口顶部离开屏幕顶部的像素数
left     |Number|窗口左端离开屏幕左端的像素数
width    |Number|窗口的宽度
height   |Number|窗口的高度
menubar  |yes,no|窗口有没有菜单
toolbar  |yes,no|窗口有没有工具条
scollbars|yes,no|窗口有没有滚动条
status   |yes,no|窗口有没有状态栏

例如:打开http://www.imooc.com网站，大小为300px * 200px，无菜单，无工具栏，无状态栏，有滚动条窗口：
```
<script type="text/javascript"> 
window.open('http://www.imooc.com','_blank','width=300,height=200,menubar=no,toolbar=no, status=no,scrollbars=yes')
</script>
```


【拓展------编程练习】
制作新按钮，“新窗口打开网站” ，点击打开新窗口。

任务
1、新窗口打开时弹出确认框，是否打开
提示: 使用 if 判断确认框是否点击了确定，如点击弹出输入对话框，否则没有任何操作。
2、通过输入对话框，确定打开的网址，默认为 http：//www.imooc.com/
3、打开的窗口要求，宽400像素，高500像素，无菜单栏、无工具栏。

```
function ConfirmAndOpen()
{   
    var ifDo=confirm("请确认你是否要打开新窗口");
    if(ifDo)
    {
        window.open("https://www.imooc.com/","_blank",
        "width=400,heigth=500,menubar=no,toolbar=no,scollbars=no")
    }
    else
    {
        document.write("取消打开新窗口！");
    }  
}
```

---
### DOM操作
* 通过ID获取元素
* 改变HTML的样式
* 显示和隐藏效果
* 控制类名
#### 通过ID获取元素
```
<body>
<p id="con">JavaScript</p>
<script type="text/javascript">
  var mychar=document.getElementById("con");
  document.write("结果:"+mychar); //输出获取的P标签。 
</script>
</body>
输出结果：[object HTMLParagraphElement]
```

>document.write("结果:"+mychar.innerHTML);//输出获取的P标签里的内容！

#### 改变HTML的样式
注意：script标签一定要在body里面，否则无效||并且p标签一定要在script标签的前面
```
<body>
     <p id="demo">Hello world</p> 
     <script >
            var elementObj=document.getElementById("demo");
            elementObj.style.color="red";
            elementObj.style.backgroundColor="blue";
            elementObj.style.fontSize="50px";
        </script>
</body>
```

#### 显示和隐藏效果
1.隐藏：`mychar.style.display="none";`
2.显示: `mychar.style.display="block";`

#### 控制类名
语法：`object.className = classname`
1.添加"类名为one: `p1.className = "one";`
2.修改为"类名为two: `p2.className = "two";`
p1,p2表示对象
border:1px solid #eee; //其中solid表示边界时实线

#### 综合应用

>编程挑战
小伙伴们，请编写"改变颜色"、"改变宽高"、"隐藏内容"、"显示内容"、"取消设置"的函数，点击相应按钮执行相应操作，点击"取消设置"按钮后，提示是否取消设置，如是执行操作，否则不做操作。

【任务】
```
一、定义"改变颜色"的函数
提示:
obj.style.color
obj.style.backgroundColor
```
```
二、定义"改变宽高"的函数
提示:
obj.style.width
obj.style.height 
```
```
三、定义"隐藏内容"的函数
提示:
obj.style.display="none";
```
```
四、定义"显示内容"的函数
提示:
obj.style.display="block";
```
```
五、定义"取消设置"的函数
提示: 
使用confirm()确定框，来确认是否取消设置。
如是将以上所有的设置恢复原始值,否则不做操作。
var mychoose=confirm("");
txt.removeAttribute("style");
```
```
六、当点击相应按钮，执行相应操作，为按钮添加相应事件
```
【代码】
```
<style>
            #txt {
                background-color:beige;
                height: 200px;
                width: 600px;
                border: #333 solid 1px;
                padding:5px;  /*让文字不紧贴着边框 */
            }
            p{
                line-height:18px;
                text-indent:2em;   /*首行缩进*/
            }
        </style>
    </head>

    <body>  
            <h2 id="con">JavaScript课程</H2>
            <div id="txt"> 
                
                <h5>JavaScript为网页添加动态效果并实现与用户交互的功能。</h5>
                <p>1. JavaScript入门篇，让不懂JS的你，快速了解JS。</p>
                <p>2. JavaScript进阶篇，让你掌握JS的基础语法、函数、数组、事件、内置对象、BOM浏览器、DOM操作。</p>
                <p>3. 学完以上两门基础课后，在深入学习JavaScript的变量作用域、事件、对象、运动、cookie、正则表达式、ajax等课程。</p>
            </div>
            <form action="">
                <button type="button" onclick="changeColor()">改变颜色</button>
                <button type="button" onclick="widthAndHeight()">改变宽高</button>
                <button type="button" onclick="displayNone()">隐藏内容</button>
                <button type="button" onclick="displayBlock()">显示内容</button>
                <button type="button" onclick="cancelConfirm()">取消设置</button>
            </form>
        <script >
            var txt=document.getElementById("txt");
            function changeColor()
            {
                txt.style.backgroundColor="rgb(31, 173, 192)";
            }
            function widthAndHeight()
            {
                txt.style.width="500px";
                txt.style.height="190px";
            }
            function displayNone()
            {
                txt.style.display="none";
            }
            function displayBlock()
            {
                txt.style.display="block";
            } 
            function  cancelConfirm()
            {
                var mychoose=confirm("请确认是否取消设置？");
                if(mychoose==true)
                {
                    txt.removeAttribute("style");
                }
            }
        </script>
    </body>
</html>
```