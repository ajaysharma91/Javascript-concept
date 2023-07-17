const getSolution = (id)=>{
    const root = document.getElementById(id);
    const inputes = root.querySelectorAll("input");
    let obj={};
    inputes.forEach(element => {
        const {name,value} = element;
        let temp = obj;
        const names = name.split(".");
        names.forEach((e,index) => {
            if(!(e in temp)){
                temp[e] = {};
            }
            if(index === (names.length-1)){
                temp[e] = value; 
            }
            temp = temp[e]
        });
       
    });
    return obj;
}
 console.log(getSolution("parent"))