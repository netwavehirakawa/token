// Sassのコンパイルタスクのサンプルファイルです。
  
// gulpプラグインの読み込み
const gulp = require('gulp');



var connect = require('gulp-connect');
 
gulp.task('default', function() {
  // place code for your default task here
});
 
gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
});
 
gulp.task('default', ['connect', 'watch']);




// browser Sync
var browserSync = require('browser-sync');
 
// Static server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});
 
gulp.task('default', ['browser-sync']);
 
// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});
 
// Watch scss AND html files, doing different things with each.
gulp.task('default', ['browser-sync'], function () {
    gulp.watch("./*.html", ['bs-reload']);
});






// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass');
  
// style.scssの監視タスクを作成する
gulp.task('default', function () {
  // ★ style.scssファイルを監視
  gulp.watch('css/style.scss', function () {
    // style.scssの更新があった場合の処理
  
    // style.scssファイルを取得
    gulp.src('css/style.scss')
      // Sassのコンパイルを実行
      .pipe(sass({
        outputStyle: 'expanded'
      })
      // Sassのコンパイルエラーを表示
      // (これがないと自動的に止まってしまう)
      .on('error', sass.logError))
      // cssフォルダー以下に保存
      .pipe(gulp.dest('css'));
  });
});
