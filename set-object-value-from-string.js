const helper = (obj,path,value)=>{
    const [current,...rest] = path;
    if(rest.length>0){
        if(!obj[current]){
            const isNumeric = !isNaN(rest[0]) && rest[0] !== null;
            console.log({isNumeric})
            obj[current] = isNumeric?[]:{};
        }
        if(typeof obj[current] == 'object'){
            const isNumeric = !isNaN(rest[0]) && rest[0] !== null;
            obj[current] = helper(isNumeric?[]:{},rest,value)
        }else{
            obj[current] = helper(obj[current],rest,value)
        }
    }
    else{
        obj[current] = value;
    }
    return obj;
}

const setValue = (obj,path,value)=>{
    const pathMate = path.replaceAll('[','.').replaceAll(']','').split('.');
    helper(obj,pathMate,value)
    return obj;
}

console.log(setValue({},'a[0].b.c',5))
console.log(setValue({},[x,0,s,d],3))