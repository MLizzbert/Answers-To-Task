function stringCompression (str) {
    if (str.length ==0) {
      console.log('Please enter valid string.');
      return;
    }
    var output = '';
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      count++;
      if (str[i] != str[i+1]) {
        output += str[i] + count;
        count = 0;
      }
    }
    console.log(output);
  }
  
  stringCompression(''); //Please enter valid string.
  stringCompression('aaaa'); //a4
  stringCompression('aaaabbc'); //a4b2c1
  stringCompression('aaaabbcaabb'); //a4b2c1a2b2