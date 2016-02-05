function rot13(str) {
  var newArr = [];
  var cTest = "";
  var cNum = 0;
  // split string into array
  var arr = str.split('');
  // loop through each element in array
  for (var i=0;i < arr.length; i++) {
    cTest = arr[i].toUpperCase();
      cNum = cTest.charCodeAt(0);
      // test if uppercase alphabetical
      if (cNum >= 65 && cNum <=90) {
        // test if A-M or N-Z
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
  // end loop
  }
  str = newArr.join('');
  console.log(str);
  return str;
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");
