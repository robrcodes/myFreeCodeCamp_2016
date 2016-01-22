function factorialize(num) {
  // set default
    var total = 1;
    for(i=1;i<num+1;i++){
        total *= i;
}
    return total;
}

var myvar = factorialize(5);
console.log('result = ' + myvar);
