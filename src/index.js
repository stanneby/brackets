
module.exports = function check(str, bracketsConfig) {
  let starts = [];
  let ends = [];
  bracketsConfig.forEach( (element) => {
    starts.push(element[0]);
    ends.push(element[1]);
  })
  
  const len = str.length;
  let buf = [];
  for(let i = 0; i < len; i++){
    const char = str.charAt(i);
    let startIndex = starts.indexOf(char);
    if( startIndex < 0 ){
      startIndex = buf.pop();
      if( ends[startIndex] != char ){
        return false;
      } 
    } else {
      if(char == ends[startIndex]){
        if(starts[buf[buf.length-1]] == char){
          buf.pop();
          continue;
        } else {
          buf.push(startIndex);
          continue;
        }
      }
      buf.push(startIndex);
    }
  }
  if(buf.length != 0){
    return false;
  }
  return true;
}