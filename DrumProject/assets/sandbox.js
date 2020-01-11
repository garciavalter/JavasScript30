function validParentheses(parens){
    let result = parens;
    const regex = /\(\)/gm;
    function checkRegex(result) {
      if (regex.test(result)){
        console.log('not found');
      } else {
        console.log('found');
      }
    }
    checkRegex();
}