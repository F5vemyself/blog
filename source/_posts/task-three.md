---
title: task-three
date: 
tags: learn package.json/gulp/editorconfig
---
  **使用gulp完成对html/css/js/image的压缩等功能**
目录
1、安装nodejs
2、npm介绍
3、npm淘宝镜像
4、安装gulp
5、新建package.json文件
6、本地安装gulp插件
7、新建gulpfile.js文件
8、运行gulp

#### 1、安装nodejs
#### 2、npm介绍
2.1、说明：npm（node package manager）nodejs的包管理器，用于node插件管理（包括安装、卸载、管理依赖等）;
2.2、使用npm安装插件：命令提示符执行`npm install <name>[-g] [--save-dev]`;
* 2.2.2、**-g**：全局安装。将会安装在C:\Users\Administrator\AppData\Roaming\npm，并且写入系统环境变量；  非全局安装：将会安装在当前定位目录；  全局安装可以通过命令行在任何地方调用它，本地安装将安装在定位目录的node_modules文件夹下，通过require()调用；
* 2.2.3、**--save**：将保存配置信息至package.json（package.json是nodejs项目配置文件）；
* 2.2.4、**-dev**：保存至package.json的devDependencies节点，不指定-dev将保存至dependencies节点；一般保存在dependencies的像这些express/ejs/body-parser等等。

2.3、使用npm卸载插件：npm `uninstall <name> [-g] [--save-dev]`  PS：不要直接删除本地插件包
* 2.3.1、删除全部插件：`npm uninstall gulp-less gulp-uglify gulp-concat ……`太麻烦了（见下一个命令）
* 2.3.2、借助rimraf(用于删除gulp的模块插件 )：`npm install rimraf -g` 
用法(在你项目的根目录运行)：`rimraf node_modules`
* 2.3.4、使用npm更新插件：`npm update <name> [-g] [--save-dev]`
* 2.3.5、当前目录已安装插件：`npm list`

2.4、npm的更新
`npm install npm@latest -g`
其中 install 不用介绍了，就是安装，后面的 npm@latest 就是 \<packageName\>@\<version\> 的格式，我们在下载其他模块时也是这个格式。-g 代表全局安装。
#### 3、npm的镜像使用
npm太慢， 淘宝npm镜像使用方法
`淘宝 npm 地址： http://npm.taobao.org/`
1.临时使用
`npm --registry https://registry.npm.taobao.org install express`
2.持久使用
`npm config set registry https://registry.npm.taobao.org`
* 配置后可通过下面方式来验证是否成功 
`npm config get registry`
* 或 
`npm info express`

3.通过cnpm使用
`npm install -g cnpm --registry=https://registry.npm.taobao.org`
* 使用 
`cnpm install express`

#### 4、gulp的安装
***** npm依赖于node.js *****
1.全局安装 gulp
`$ npm install --global gulp`/`npm install gulp -g  ` 
2.本地安装（在某个项目安装）
先进入对应的根目录
`npm install gulp --save-dev `

#### 5、新建package.json文件

若已经有则不用新建了，只需要完善配置
package.json 文件至少要有两部分内容：


1.“name” 
* 全部小写，没有空格，可以使用下划线或者横线

2.“version” 
* x.x.x 的格式
* 符合“语义化版本规则”



比如：
```{
  "name": "shixinzhang-demo-package",
  "version": "1.0.0"
}
```

其他内容:
* description：描述信息，有助于搜索
* main: 入口文件，一般都是 index.js
* scripts：支持的脚本，默认是一个空的 test

    * scripts: 声明一系列npm脚本指令
    prepublish: 在包发布之前运行，也会在npm install安装到本地时运行
    publish,postpublish: 包被发布之后运行
    preinstall: 包被安装前运行
    install,postinstall: 包被安装后运行
    preuninstall,uninstall: 包被卸载前运行
    postuninstall: 包被卸载后运行
    preversion: bump包版本前运行
    postversion: bump包版本后运行
    pretest,test,posttest: 通过npm test命令运行
    prestop,stop,poststop: 通过npm stop命令运行
    prestart,start,poststart: 通过npm start命令运行
    prerestart,restart,postrestart: 通过npm restart运行

* keywords：关键字，有助于在人们使用 npm search 搜索时发现你的项目
* author：作者信息
* license：默认是 MIT
* bugs：当前项目的一些错误信息，如果有的话

**npm** 还可以直接运行 `package.json` 中 `scripts` 指定的脚本：
```
{
  "name": "demo",
  "scripts": {
    "lint": "jshint **.js",
    "test": "mocha test/"
  }
}
```
**npm run 是 npm run-script 的缩写。**

命令行输入` npm run lint` 或者` npm run-script lint` 就会执行 `jshint **.js `。


>`npm run `会创建一个Shell，执行指定的命令，并临时将node_modules/.bin加入PATH 变量，这意味着本地模块可以直接运行。


`package.json `中的 `scripts` 执行的脚本是本地项目内 `node_modules` -> `.bin `内的脚本。
```
    "scripts": {
        "build": "weex-builder src dist",
        "build_plugin": "webpack --config ./tools/webpack.config.plugin.js --color",
        "dev": "weex-builder src dist -w",
        "serve": "serve -p 8080"
    }
```


#### 6、本地安装gulp插件
后续的配置文件里只要写了的都得安装
```
npm install gulp-htmlmin --save-dev      //压缩html文件
npm install gulp-minify-css --save-dev   //压缩css文件
npm install gulp-uglify --save-dev       //压缩js文件
npm install gulp-imagemin --save-dev     //压缩图片
```

#### 7、gulpfile.js文件的配置
gulpfile.js文件在项目的根目录下
```
var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),           //html压缩插件
    minifycss = require('gulp-minify-css'),      //css压缩插件
    uglify = require('gulp-uglify'),             //js压缩插件
    imagemin = require('gulp-imagemin');         //图片压缩插件
//压缩css文件
gulp.task('minifycss', function() {
    return gulp.src('./public/**/*.css')    //压缩的文件的路径
        .pipe(minifycss())                  //执行css压缩函数 
        .pipe(gulp.dest('./public'));       //输出文件夹的位置  
});

//压缩html文件
gulp.task('htmlmin', function() {
    return gulp.src('./public/**/*.html')    
        .pipe(htmlmin())                     
        .pipe(gulp.dest('./public'));        
});

//压缩js文件
gulp.task('uglify', function() {
    return gulp.src('./public/**/*.js')       
        .pipe(uglify())                       
        .pipe(gulp.dest('./public'));         
});

//压缩图片
gulp.task('imagemin', function() {
    return gulp.src('./public/**/*.{png,jpg,gif}')      //压缩的文件
        .pipe(imagemin({
            optimizationLevel: 5,                       //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true,                          //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true,                           //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true                             //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))                   
        .pipe(gulp.dest('./public'));                   //输出文件夹
});
```
#### 8、gulp命令的执行
如果gulp是全局安装
直接在项目根目录下输出命令如 `gulp minifycss`
                          
如果gulp是非全局安装
1.在package.json里面配置scripts参数
```
"scripts": {
    "imagemin": "gulp imagemin",
    "htmlmin": "gulp htmlmin",
    "minifycss": "gulp minifycss",
    "uglify": "gulp uglify"
  },
```
2.在项目根目录下输出`npm run minifycss`命令

参考链接：
* [npm 与 package.json 快速入门教程 - 张拭心的博客 shixinzhang - CSDN博客](https://blog.csdn.net/u011240877/article/details/76582670#packagejson-的内容)
* [一点 | gulp详细入门教程](http://www.ydcss.com/archives/18)
* [npm模块管理器 -- JavaScript 标准参考教程（alpha）](http://javascript.ruanyifeng.com/nodejs/npm.html#toc6)
