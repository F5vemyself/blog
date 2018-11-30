---
title: jslearning-2
date: 
tags: js学习进阶篇
---

【关于label】
```

top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) break top;
      console.log('i=' + i + ', j=' + j);
    }
  }
```

如果不加top标签 break语句只能跳出 **内层** for循环
加了top之后可以跳出 **外层** for循环

【关于undefined】
两种情况下会显示undefined
1.未定义  直接typeof b; 显示undefined
2.定义了，未给值 var b; 显示undefined
javascript中var究竟时什么类型，取决于你赋给var什么值

【关于NaN】
123+"abc"  typeof显示结果为NaN
NaN和NaN是不相等的

【关于隐式类型转换】
var a='12';
var b='5';
alert(a-b); 结果为7||先自动类型转换，再做减法

【闭包】
子函数可以使用父函数的局部变量
```
function aaa(){
    var a=12;
    function bbb(){
        alert(a);
    }
    bbb();
}
aaa();       结果弹出12
```

鼠标移入提醒小应用
```
<style>
        #div1 {
            background-color: rgb(250, 144, 117);
            border: 1px solid #999;
            width: 100px;
            height: 60px;
            display: none;
        }
</style>
</head>
<body>
    <input type="checkbox" onmouseover="a.style.display='block'" onmouseout="a.style.display='none'">
    <div id="div1">
        点击按钮代表选择性别
    </div>
    <script>
        var a=document.getElementById("div1");
    </script>
</body>
</html>
```
提取行间事件

onload：页面加载完成的时候发生
