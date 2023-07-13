

const cssGenerator = (root,target)=>{
    const res = [];

    while(root != target){
        const nth = Array.from(target.parentNode.children).indexOf(target)+1;
        const selector = `${target.tagName.toLowerCase()}:nth-child(${nth})`
        res.unshift(selector);
        target = target.parentNode;
    }
    res.unshift(`${target.tagName.toLowerCase()}[id="${target.id}"]`)
    return res.join(' > ');
}

const root = document.getElementById("root");
const target = document.getElementById("target");
console.log(cssGenerator(root,target))
