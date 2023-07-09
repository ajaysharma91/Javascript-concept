
const getComputedColor = (colorCode)=>{
    const ele = document.createElement("div");
    ele.style.color = colorCode;
    document.body.appendChild(ele);
    const computedColor = window.getComputedStyle(ele);
    const {color} = computedColor;
    document.body.removeChild(ele);
    return color;
}


function findNodesWithGivenColor(root,color){
    const compColor = getComputedColor(color);
    const Elements = [];
    function search(color,node){
       const copColor =  getComputedColor(color);
       if(copColor === compColor) Elements.push(node)
    }
    for(let node of root) {
        const color = node.style.color;
        search(color,node)
    }
    search(root)
    return Elements;
}
const root = document.getElementById("container").children;
const findColor = "red";

findNodesWithGivenColor(root,findColor)
console.log(findNodesWithGivenColor(root,findColor))
document.body.append(findNodesWithGivenColor(root,findColor))
