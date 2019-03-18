import gulp from 'gulp'
import plumber from 'gulp-plumber'
import browserSync from 'browser-sync'
import sass from 'gulp-sass'
import tildeImporter from 'node-sass-tilde-importer'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import watch from 'gulp-watch'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import sourcemaps from 'gulp-sourcemaps'
import buffer from 'vinyl-buffer'
import rename from 'gulp-rename'
import minify from 'gulp-minify'
import imagemin from 'gulp-imagemin'
import cachebust from 'gulp-cache-bust'

const reload = browserSync.reload,
  reloadFiles = [
    './script.js',
    './style.css',
    './**/*.php'
  ],
  proxyOptions = {
    proxy: 'localhost:8080',
    notify: false,
    port: 3000
  },
  sassOptions = {
    importer: tildeImporter,
    sourceComments: true,
    outputStyle: 'expanded'
  },
  postcssOptions = [
    autoprefixer({
      browsers: '> 1%, last 2 versions'
    }),
    cssnano({
      core: true,
      zindex: false
    })
  ],
  babelifyOptions = {
    /* permite importar desde afuera (como node_modules) */
    global: true,
    presets: ['@babel/preset-env']
  },
  minifyOptions = {
    ext: {
      src: '-debug.js',
      min: '.js'
    },
    noSource: true
  },
  imageminOptions = {
    progressive: true,
    optimizationLevel: 3, // 0-7 low-high
    interlaced: true,
    svgoPlugins: [{ removeViewBox: false }]
  }

gulp.task('server', () => browserSync.init(reloadFiles, proxyOptions))

gulp.task('styles-dev', () => {
  gulp.src('./assets/styles/main.scss')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(plumber())
    .pipe(sass(sassOptions))
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write('./assets'))
    .pipe(gulp.dest('./'))
    .pipe(reload({ stream: true }))
})

gulp.task('styles-prod', () => {
  gulp.src('./assets/styles/main.scss')
    .pipe(plumber())
    .pipe(sass(sassOptions))
    .pipe(postcss(postcssOptions))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./'))
    .pipe(reload({ stream: true }))
})

gulp.task('scripts-dev', () => {
  browserify('./assets/scripts/index.js')
    .transform(babelify, babelifyOptions)
    .bundle()
    .on('error', function (err) {
      console.error(err)
      this.emit('end')
    })
    .pipe(source('script.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./assets'))
    .pipe(gulp.dest('./'))
    .pipe(reload({ stream: true }))
})

gulp.task('scripts-prod', () => {
  browserify('./assets/scripts/index.js')
    .transform(babelify, babelifyOptions)
    .bundle()
    .on('error', function (err) {
      console.error(err)
      this.emit('end')
    })
    .pipe(source('script.js'))
    .pipe(buffer())
    .pipe(minify(minifyOptions))
    .pipe(gulp.dest('./'))
    .pipe(reload({ stream: true }))
})

gulp.task('images', () => {
  gulp.src('./assets/img/**/**')
    .pipe(imagemin(imageminOptions))
    .pipe(gulp.dest('./img'))
})

gulp.task('cache', () => {
  gulp.src('./app/components/html_+(header|footer).php')
    .pipe(cachebust({ type: 'timestamp' }))
    .pipe(gulp.dest('./app/components'))
})

gulp.task('default', ['server', 'styles-dev', 'scripts-dev'], () => {
  watch('./assets/styles/**/**', () => gulp.start('styles-dev'))
  watch('./assets/scripts/**/**', () => gulp.start('scripts-dev'))
})

gulp.task('build', ['styles-prod', 'scripts-prod', 'images', 'cache'])
