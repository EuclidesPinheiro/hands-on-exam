const fibo = function(num){
    let a = 0
    let b = 1
    let c;
    console.log(a);
    console.log(b); 
    c = a +b
    while (c<=num) {       
        console.log(c);   
        a = b;
        b = c;
        c = a + b;
    }
}

console.log(fibo(15))
