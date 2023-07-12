const retryCall = () =>{
    let count =0;
    return ()=>{
        return new Promise((resolve,reject)=>{
            count = count+1;
            if(count <=5){
                reject("Request Failed")
            }else{
                resolve("Passed")
            }
        })
    }
}

const retry = (fn,retries,finalError)=>{
        return new Promise((res,rej)=>{
            fn().then(res,err=>{
                if(retries == 1){
                    rej(finalError)
                }
                     retry(fn,retries-1,finalError).then(res,rej)
            })
        })
}

retry(retryCall(),2,"I am Failed").then(res=>console.log(res)).catch(err=>console.log(err))