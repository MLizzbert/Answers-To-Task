function palindromePermutation(inputString) {
    // create a set to track characters we've seen
    const charSet = new Set();
    
    // iterate over each character by spitting into an array
    inputString.split('').forEach(char => {
      
      // remove from set if previously added
      if (charSet.has(char)) {
        charSet.delete(char);
        
      // add to set if not already present in set
      } else {
        charSet.add(char)
      };
    });
  
    // set should have 0 or 1 entry if is a palindrome
    return charSet.size <= 1;
};