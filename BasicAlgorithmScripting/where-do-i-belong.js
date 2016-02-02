function where(arr, num) {

  arr.sort(function(a, b) {
  return a - b; });

  var stop = arr.length;
  for(var i = 0; i < stop; i++){
      var testnum = Number(arr[i]);
     if(num <= testnum){
          arr.splice(i,0,num);
          num = i;
          console.log(num);
          return num;
      }
  }
}

where([10, 20, 30, 40, 50], 40);
