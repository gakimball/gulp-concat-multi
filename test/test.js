var concat = require('..');
var equal = require('assert-dir-equal');
var rimraf = require('rimraf');
var vfs = require('vinyl-fs');

describe('gulp-multi-concat', function() {
  before(function() {
    process.chdir('test/fixtures');
  });

  after(function(done) {
    rimraf('_build', done)
  });

  it('performs multiple sets of file concatenations', function(done) {
    concat({
      'test1.html': [
        'src/test1-1.html',
        'src/test1-2.html'
      ],
      'test2.html': [
        'src/test2-1.html',
        'src/test2-2.html'
      ]
    })
      .pipe(vfs.dest('_build'))
      .on('finish', function() {
        equal('expected', '_build');
        done();
      });
  });
});
