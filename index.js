var concat = require('gulp-concat');
var merge = require('merge-stream');
var vfs = require('vinyl-fs');

module.exports = function(files, opts) {
  var streams = [];

  for (var i in files) {
    var stream = vfs
      .src(files[i])
      .pipe(concat(i, opts || {}));

    streams.push(stream);
  }

  return merge.apply(null, streams);
}
