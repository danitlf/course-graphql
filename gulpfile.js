const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts',['static'] ,() => {
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js
        .pipe(gulp.dest('dist'));
});

gulp.task('static', ['clean'] , () => {
    return gulp.src(['src/**/*.json'])
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('build', ['scripts']);


gulp.task('watch', ['build'], () => {
    return gulp.watch(['src/**/*.ts','src/**/*.json'], ['build'])
});

gulp.task('default', ['watch']);
