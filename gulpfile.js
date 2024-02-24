const {watch, src, dest} = require("gulp");
const gulpPostcss = require("gulp-postcss");

const watchConfig = {
  ignoreInitial: false
}

function buildCSS() {
  return (
    src("./style.css")
    .pipe(gulpPostcss())
    .pipe(dest("./dist"))
  )
}

exports.default = function () {
  watch(["./index.html", "./style.css"], watchConfig, buildCSS);
}