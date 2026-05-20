//Reversing string using recursion
function reverseString(str)
{
  if(str.length <= 1){
    return str;
}
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}
console.log(reverseString("Hello"));
console.log(reverseString("nice"));
console.log(reverseString("recursion"));
console.log(reverseString("a"));
console.log(reverseString(" "));
