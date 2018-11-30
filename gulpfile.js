var gulp = require('gulp'),
    //htmlclean = require('gulp-htmlclean'),     //html清理插件
    htmlmin = require('gulp-htmlmin'),           //html压缩插件
    //jshint = require('gulp-jshint'),           //检查语法插件
    minifycss = require('gulp-minify-css'),      //css压缩插件
    uglify = require('gulp-uglify'),             //js压缩插件
    imagemin = require('gulp-imagemin');         //图片压缩插件
//压缩css文件
gulp.task('minifycss', function() {
    return gulp.src('./public/**/*.css')     //压缩的文件
        .pipe(minifycss())                   //执行压缩
        .pipe(gulp.dest('./public'));        //输出文件夹
});

//压缩html文件
gulp.task('htmlmin', function() {
    return gulp.src('./public/**/*.html')    //压缩的文件
        .pipe(htmlmin())                     //执行压缩
        .pipe(gulp.dest('./public'));        //输出文件夹
});

//压缩js文件
gulp.task('uglify', function() {
    return gulp.src('./public/**/*.js')       //压缩的文件
        .pipe(uglify())                       //执行压缩
        .pipe(gulp.dest('./public'));         //输出文件夹
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

