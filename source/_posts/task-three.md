---
title: second
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

####5、新建package.json文件
若已经有则不用新建了，只需要完善配置

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
