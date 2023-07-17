function curry(...args){
    const storage = args;
    function helper(...args1){
        storage.push(...args1)
        return helper;
    }
    helper.valueOf = function(){
        return storage.reduce((a,b)=>a+b,0);
    }

    helper.value = helper.valueOf;
    this.value = helper.valueOf
    return helper;
}

console.log(curry(1,2,3).value())
console.log(curry(1,3)(2).value())
console.log(curry(1) + 1)