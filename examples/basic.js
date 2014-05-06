function anonymous(locals, cb, __) {
    __ = __ || [];
    __.r = __.r || blade.Runtime;
    if (!__.func) __.func = {}, __.blocks = {}, __.chunk = {};
    __.locals = locals || {};
    __.filename = "/www/node/gulp-blade/examples/basic.blade";
    try {
        with (__.locals) {
            __.line = 1, __.col = 1;
            __.push("<html" + ">");
            __.line = 2, __.col = 3;
            __.push("<head" + ">");
            __.line = 3, __.col = 5;
            __.push("<title" + ">" + "Test" + "</title>" + "</head>");
            __.line = 4, __.col = 3;
            __.push("<body" + ">");
            __.line = 5, __.col = 5;
            __.push("<h1" + ">" + "</h1>" + "</body>" + "</html>");
        }
    } catch (e) {
        return cb(__.r.rethrow(e, __));
    }
    if (!__.inc) __.r.done(__);
    cb(null, __.join(""), __);
}