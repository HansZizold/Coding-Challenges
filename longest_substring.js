// You have to find the length of the longest substring from the string without repeating any character. In other words, find the length of the longest substring with unique characters. 

function longest_substring(str) {
  // write your code here
  let auxstr = '';
  let final_ln = 0, tmp_ln = 0;

  for (let j = 0; j < str.length; j += 1) {
    str = str.substring(1);
    auxstr = '';
    for (let i = 0; i < str.length; i += 1) {
      if (!auxstr.includes(str[i])) {
        auxstr += str[i];
      }
      else {
        tmp_ln = auxstr.length;
        auxstr = '';
        if (tmp_ln > final_ln) {
          final_ln = tmp_ln;
        }
        i -= 1;
      }
    }
  }
  return final_ln;
}
console.log(longest_substring("abbbcabcdefgefg"));
// => 6
