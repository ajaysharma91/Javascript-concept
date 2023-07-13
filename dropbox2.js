const getByClassnameHierarchy = (root,h)=>{
    let result=[];
    const classes = h.split('>');
    console.log(classes);
    trackerDom(root,classes,0,result)
    return result;
}

const trackerDom = (element,classes,index,result)=>{
    if(classes.length-1 == index && element.classList.contains(classes[index])){
        result.push(element.id)
        return
    }
    for(let child of element.children){
        if(element.classList.contains(classes[index])){
            trackerDom(child,classes,index+1,result)
        }else {
            trackerDom(child,classes,0,result)
        }
    }
}
const root2 = document.getElementById('root2');

console.log('actual: ', getByClassnameHierarchy(root2, 'a>b'));
console.log(`a>b expected:` , `['b-1']`, '\n');