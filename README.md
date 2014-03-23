> inpm in npm?

Checks if the given module name is present in npm registry.

__Example:__

```javascript

var $ = require('inpm');

$('foooof', function(found){
    if (found) {
        console.log("Found in npm registry");
    } else {
        console.log("Not found in npm registry");
    }
});

```