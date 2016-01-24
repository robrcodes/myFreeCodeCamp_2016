function chunk(arr, size) {
  var narr = [],
        newarr = [],
        j = 1;
    for (var i = 0; i< arr.length; i++) {
        newarr.push(arr[i]);
        if ( j == size || i == arr.length-1 ) {
            narr.push(newarr);
            j = 0;
            newarr = [];
        }
        j++;
    }
    arr = narr;
    console.log(arr);
  return arr;
}

chunk(['a', 'b', 'c', 'd'], 2);
