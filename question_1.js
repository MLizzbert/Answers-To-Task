function findUnique(str){
    // The variable containing the unique values
    let uniQ = "";
     
    for(let i = 0; i < str.length; i++){
      // To check if the uniQ contains the character
      if(uniQ.includes(str[i]) === false){
        // If the character is not present in uniQ
        // Concatenating the character with uniQ
        uniQ += str[i]
      }
    }
    return uniQ;
  }
   
  console.log(findUnique("University"));
  console.log(findUnique("You can study any course of your choice at the University"));


