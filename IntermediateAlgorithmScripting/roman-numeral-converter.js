function convert(num) {
    // Simple converter, all assertions less than 50
    var rom = [];
    var numchars = ['0','1', '2', '3', '4', '5','6','7','8','9'];
    var romchars = [['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
                       ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
                       ['','I', 'II', 'III', 'IV', 'V','VI','VII','VIII','IX']];
    // determine number of digits in num
    var arr = num.toString().split('');
    var numdigits = arr.length;
    var end = 2 - numdigits;
    // loop from right to left digits, ie units to tens
    for (var i = 2 ; i > end; i--) {
        rom.splice(0,0,romchars[i][numchars.indexOf(arr[numdigits-1])]);
        numdigits = numdigits - 1;
    }
    // .join final array back into a str
    num = rom.join('');
    console.log(num);
    return num;
}

convert(36);
