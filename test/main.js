var fs = require('fs');
var path = require('path');
var should = require('should');
var gutil = require('gulp-util');
var blade = require('../');

require('mocha');

describe('gulp-blade', function() {

  it('should compile blade files to js function templates', function(done) {
    var b = blade({
      middleware: true
    });

    var fakeFile = new gutil.File({
      base: "test/",
      cwd: "test/",
      path: path.join(__dirname, 'test.js'),
      contents: fs.readFileSync(__dirname + '/fixtures/file.blade')
    });

    b.once('data', function(newFile){
      should.exist(newFile);
      should.exist(newFile.contents);
      should.exist(newFile.path);
      String(newFile.contents).should.equal(fs.readFileSync(__dirname + '/expected/file.js', 'utf8'));
      done();
    });
    b.write(fakeFile);
  });

});
