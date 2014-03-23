var $ = require("./index");
var assert = require('assert');

$('xkcd-imgs', function(res){
    assert.equal(true, res, "Must be true");
});

$('foooof', function(res){
    assert.equal(false, res, "Must be true");
});
