
async function testa(){

    const sum = await timeoutadd(1,2,300);
    console.log(sum);
    return sum;
}

async function timeoutadd(num1,num2,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num1+num2);
        },time);
    })
    
}

module.exports ={
    testa
}