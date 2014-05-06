# gulp-blade
[![Build Status](https://travis-ci.org/stevelacy/gulp-blade.png?branch=master)](https://travis-ci.org/stevelacy/gulp-blade)
[![NPM version](https://badge.fury.io/js/gulp-blade.png)](http://badge.fury.io/js/gulp-blade)

> Compile [Blade](https://github.com/bminer/node-blade) templates with Gulp

<table>
<tr> 
<td>Package</td><td>gulp-blade</td>
</tr>
<tr>
<td>Description</td>
<td>Blade plugin for Gulp (gulpjs.com)</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
<tr>
<td>Gulp Version</td>
<td>3.x</td>
</tr>
</table>

# Usage

## Install

```
npm install gulp-blade --save
```
## Example

```javascript

var gulp = require('gulp');
var blade = require('gulp-blade');

gulp.task('compile', function(){
  gulp.src('*.blade')
    .pipe(blade())
    .pipe(gulp.dest('views'))
});

```
**Note**: this will expose the full path to the source file in the compiled templates. To [mask the basedir](https://github.com/bminer/node-blade#api), set `middleware` to `true`.

```javascript
blade({
  middleware: true
})
```

#### You can view more examples in the [example folder.](https://github.com/stevelacy/gulp-blade/tree/master/examples)



## LICENSE

(MIT License)

Copyright (c) 2014 Steve Lacy <me@slacy.me> slacy.me

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
