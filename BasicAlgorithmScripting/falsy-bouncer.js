function bouncer(arr) {
  arr = arr.filter(function(value){
    if (value) {
      return value;
    }
  });

  console.log(arr);
  return arr;
}

bouncer([7, "ate", "", false, 9]);
