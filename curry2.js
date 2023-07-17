const sum = a=>b=>b?sum(a+b):a;

const total = sum(10)(29)(10)(5)();
console.log(total)