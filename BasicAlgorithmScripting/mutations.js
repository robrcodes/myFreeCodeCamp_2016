function mutation(arr) {
var arr1 = arr[0].toLowerCase().split('');
var arr2 = arr[1].toLowerCase().split('');
arr = true;
for (var i = 0; i < arr2.length; i++){
    if(arr1.indexOf(arr2[i]) == -1){
        arr = false;
     }
}
console.log(arr);
return arr;
}

mutation(['hello', 'hellooeey']);
