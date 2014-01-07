var map = require('map-stream');
var gutil = require('gulp-util');
var blade = require('blade');

module.exports = function(options) {
  if(!options) options = {};

  function modifyContents(file, cb) {
    if (file.isNull()) return cb(null, file); // pass along
    if (file.isStream()) return cb(new Error("gulp-blade: Streaming not supported")); // pass error if streaming is not supported

    blade.compile(file.contents.toString(), options, function(err, res){
      if(err) return cb(err);
      file.contents = new Buffer(res.toString());
      file.path = gutil.replaceExtension(file.path, '.js');
    });
    cb(null, file);
  }

  return map(modifyContents);
};