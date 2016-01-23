function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var checkstr = str.substr(str.length - target.length);
    return (checkstr === target);
}

var myvar = end('Bastian', 'n');
console.log(myvar);
