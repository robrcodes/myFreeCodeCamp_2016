function titleCase(str) {
  var words = str.toLowerCase().split(' ');
    var word = '';
    for (var i = 0; i < words.length; i++){
        word = words[i];
        word = word.charAt(0).toUpperCase() + word.slice(1);
        words[i] = word;
    }
    str = words.join(' ');
    console.log(str);
  return str;
}

titleCase("I'm a little tea pot");
