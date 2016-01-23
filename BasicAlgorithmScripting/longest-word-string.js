function findLongestWord(str) {
  var words = str.split(' ');
    str = words[0];
    for (var i = 1; i < words.length; i++) {
            if (words[i].length > str.length) {
                str = words[i];
            }
        }
  return str.length;
}

var myvar = findLongestWord('The quick brown fox jumped over the lazy dog');
console.log(myvar);
