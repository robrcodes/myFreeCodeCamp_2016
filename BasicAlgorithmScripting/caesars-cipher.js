function rot13(str) { // LBH QVQ VG!
// A = 65, M = 77, Z = 90

var newArr = [];
var cTest = "";
var cNum = 0;
// split string into array
var arr = str.split('');

console.log(arr);

// loop through each element in array
for (var i=0;i < arr.length; i++) {
  cTest = arr[i].toUpperCase();
  console.log(cTest);
    // test if uppercase alphabetical
    cNum = cTest.charCodeAt(0);
    if (cNum >= 65 && cNum <=90) {
      // test if first or 2nd half of alphabet A-M or N-Z
      if (cNum >=78) {
        cNum -= 13;
      } else {
        cNum += 13;
      }
      str = String.fromCharCode(cNum);
    } else {
      str = cTest;
    }
    newArr.push(str);
    console.log(newArr);


            // convert string to charCode
            // add or minus 13 to/from charCode
            // convert to string fromCharCode

    // push string to new array
        //newArr = newArr.push(testChar);

// end loop
}
str = newArr.join('');


  console.log('str is - ' + str);
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
