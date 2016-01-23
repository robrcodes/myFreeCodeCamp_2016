function largestOfFour(arr) {
  for (var i = 0; i < arr.length; i++) {
        var inarr = arr[i];
        var x = 0;
        for (var j = 0; j < inarr.length; j++) {
            if ( inarr[j] > x ) {
                x = inarr[j];
            }
        }
        arr[i] = x;

    }
    console.log(arr);
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
