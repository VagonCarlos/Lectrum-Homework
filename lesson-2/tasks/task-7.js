var arr = [1,2,3,4];
function calcArray(array) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
      if( array[i] % 2 == 0) {
        sum += array[i];
      }
  }
  console.log(sum);
}
calcArray(arr);
