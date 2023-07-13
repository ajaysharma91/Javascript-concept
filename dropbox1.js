
const getByClassName = (root,claasName)=>{
    const search = (node)=>{
        let res = []
        if(node.classList.contains(claasName)){
            res.push(node.id);
        }
        for(let ele of node.children){
           const r= search(ele);
           res = [...res,...r]
        }
        return res;
    }
    return search(root)
}


const root = document.getElementById('root');
console.log('actual:  ', getByClassName(root, 'a'));
console.log('expected:' , `[ 'root', 'a-2', 'a-3' ]`);

