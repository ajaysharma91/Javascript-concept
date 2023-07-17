const curry = ()=>{
    let total = 0;
    return (value)=>{
        total += value;
        console.log(total)
    }

}

const sum = curry();
sum(1);
sum(4);
sum(3);
sum(9);
