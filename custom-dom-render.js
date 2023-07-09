const objDom = {
    type:'div',
    props:{id:"div-1",class:"div-class-1"},
    children:[{type:'h1',children:"Hi This is my first react application"},
    {type:'div',children:[{type:'span',props:{id:"span"},children:"Please read docs carefully to learn react"}]},
    {type:'p',children:"This is easy to learn"}]
}

function genrateDom(objDom1,root){
   const helperDom = (obj)=>{
    const {type,props,children} = obj
    const el = document.createElement(type);
    if(props){
        for(let key in props){
            el[key] = props[key];
        }
    }
    if(typeof children === "string"){
        console.log("He")
        el.innerText = children
    }else {
        const fragment = document.createDocumentFragment();
        for(let childNode of children){
            fragment.appendChild(helperDom(childNode))
        }
        el.appendChild(fragment)
    }
    return el;
   }
   const generateDOM = helperDom(objDom1);
   root.appendChild(generateDOM)
}
const root = document.getElementById("root");
genrateDom(objDom,root);