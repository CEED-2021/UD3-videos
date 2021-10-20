function assert(name, expression) {
    if(!expression) {
        console.log('************************');
        console.log('ERROR: ' + name);
        console.log('************************');
        process.exit();
    }
    else console.log('-' + name)
}

function sum(a,b, ...rest) {
    if(a==undefined || b==undefined ) return 0;
    if(rest.length) throw "Error"
    return a + b;
}

assert('sum(2,2) should be 4', sum(2,2) === 4)
assert('sum() should be 0', sum() === 0)
assert('sum(0,2) should be 2', sum(0,2) === 2)
assert('sum(1,2,3) should throw an error',(() => {
    try {
        sum(1,2,3);
        return false;
    } catch(e) {
        return true;
    }
})())

console.log('All test passed!!!')