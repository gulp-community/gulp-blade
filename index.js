var map = require('map-stream');
var rext = require('replace-ext');
var blade = require('blade');

module.exports = function(options) {
  if (!options) options = {};

  function modifyContents(file, cb) {
    if (file.isNull()) return cb(null, file);
    if (file.isStream()) return cb(new Error('gulp-blade: Streaming not supported'));

    var localOptions = {
      filename: file.path,  // required for blade includes
      basedir: file.base  // typically where a glob starts
    };

    for (var k in options) {
      localOptions[k] = options[k];
    }

    blade.compile(file.contents.toString(), localOptions, function(err, res) {
      if (err) return cb(err);

      file.contents = new Buffer(res.toString());
      file.path = rext(file.path, '.js');

      cb(null, file);
    });
  }

  return map(modifyContents);
};
