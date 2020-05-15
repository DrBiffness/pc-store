'use strict' ;

function getMethods(type) {
    const methodType = `${type.charAt(0).toUpperCase()}${type.slice(1)}`;
    const prefixes = [ 'get', 'store', 'update', 'delete'];
    const methods = prefixes.map(pre => `${pre}${methodType}`);
    const obj = {};
    for (const method of methods) {
        obj[method] = this[method]();
    }
    return obj;
}

console.log(getMethods('processors'));
