function repeat(str, num) {
   if (num < 0) {
        str = '';
    } else {
        str = str.repeat(num);
    }
    console.log(str);
  return str;
}

repeat('abc', 3);
