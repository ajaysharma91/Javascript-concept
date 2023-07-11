


const inViewPort = (ele)=>{
    const elemDim = ele.getBoundingClientRect();
    const viewHight = window.innerHeight || document.documentElement.clientHeight
    const viewWidth = window.innerWidth || document.documentElement.clientWidth
    return elemDim.top >= 0 && elemDim.left >= 0 && elemDim.right <= viewWidth && elemDim.bottom <= viewHight;
}

const detect = ()=>{
    const result=[];
    const blocks = document.querySelectorAll(".card")
    blocks.forEach(element => {
            if(inViewPort(element)){
                console.log("HHH",element)
                result.push(element.textContent)
            }
    });
    console.log(result)
}

const debounce = (func, delay)=>{
    let inDebounce;
    return function(){
        const context = this;
        const args = arguments;
        console.log(context,arguments)
        clearTimeout(inDebounce);
       inDebounce =  setTimeout(function(){
            func.apply(context,args)
        },delay)
    }
}

window.addEventListener("scroll",debounce(detect,1000),false)