function palindrome(str) {
    var strback = '';
    str = str.toLowerCase().replace(/[_\W]+/g, '');
    strback = str.split('').reverse().join('');
    if (str === strback) {
        return true;
    } else {
        return false;
    }
}

palindrome("eye");
