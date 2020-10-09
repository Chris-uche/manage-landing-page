const {src,dest,watch,series,parallel}  = require('gulp');
const autoprexfixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify')


//File Paths 

const files = {
    scssPath: 'app/scss/**/*.scss',
    jsPath: 'app/js/**/*.js',
}

//Sass Task
function scssTask(){
    return src(files.scssPath)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprexfixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist'));
}

//JS task

function jsTask(){
    return src(files.jsPath)
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(dest('dist'))
}

//CacheBusting
const cbString = new Date().getTime();
function catchBusting(){
    return src(['index.html'])
    .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
    .pipe(dest('.'))
}

//Watch File

function watchTask(){
    watch([files.scssPath,files.jsPath],
        parallel(scssTask, jsTask));
}

//Default Task
exports.default = series(
    parallel(scssTask, jsTask),
    catchBusting,
    watchTask
)