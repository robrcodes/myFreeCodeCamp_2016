function destroyer(arr) {
  // Remove all the values
  var initArray = arguments[0];
  // copy for testing in for loop
  var compareArray = arguments;

  arr = initArray.filter(function(value){
    var test = false;
    for(var i = 1; i < compareArray.length; i++){
      if (value == compareArray[i]){
        test = true;
      }
    }
    if (!test){return value}
  });
  console.log(arr);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, "");
