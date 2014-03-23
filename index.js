var $ = require('superagent');

module.exports = function inpm(module, cb) {
    var url = 'http://isaacs.iriscouch.com/registry/';
    $(url + module).end(function(res) {
        if(!cb) throw new Error("Callback is needed!");
        cb(res.ok);
    });
}
