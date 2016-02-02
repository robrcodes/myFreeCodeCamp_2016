function sumAll(arr) {
  function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
  }

  function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
  }

  var big = getMaxOfArray(arr);
  var sml = getMinOfArray(arr);
  var newarr = [];

  for (var i = sml; i <= big; i++){
    newarr.push(i);
  }

  var sumtotal = newarr.reduce(function(a,b){
    return a + b;
  });

  console.log('booyah: '+ sumtotal);
  return(sumtotal);
}

sumAll([7, 4]);
