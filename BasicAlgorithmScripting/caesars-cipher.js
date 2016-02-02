function rot13(str) { // LBH QVQ VG!
// A = 65, M = 77, Z = 90

var newArr = [];
// split string into array
var arr = str.split('');

console.log(arr);

// loop through each element in array

    // test if uppercase alphabetical

        // test if first or 2nd half of alphabet A-M or N-Z
            // convert string to charCode
            // add or minus 13 to/from charCode
            // convert to string fromCharCode

    // push string to new array
        newArr = newArr.push(testChar);

// end loop


// BELOW IS TEST CODE
 var test = "b";
 console.log(test);
 test = test.toUpperCase();
 console.log(test);
 var t2;
 t2 = test.charCodeAt(0);
 // check if uppercase alphabetical characters
 if (t2>=65 && t2 <=90) {

   if (t2 >= 78) {
     var t3 = t2 - 13;
     console.log(t3);
   }
   else
   {
    console.log(t2);
    var t3 = t2 + 13;
    console.log(t3);
}
  var t4 = String.fromCharCode(t3);
    console.log(t4);
    str = t4;
  }
  else
  {
    str = test;
  }

  console.log('str is - ' + str);
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
