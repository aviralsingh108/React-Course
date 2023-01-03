const cart = ['a','b','c','d'];

createOrder(cart).then(function(received){
    console.log(received);
})
.catch(function(err){
    console.log(err.message);
})
.then(function(){
    return proceedToPayment()
})
.then(function(info){
    console.log(info);
})

function proceedToPayment(){
    return new Promise(function(resolve,reject){
        resolve('payment successful')
    })
}

function createOrder(cart){
    return new Promise(function(resolve,reject){
        const boo = false;
        if(!boo){
            reject(new Error('wrong orders'))
        }
        else
        resolve('order is right')
    })
}


