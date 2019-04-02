var arr = [1,2,3,4];
function calcArray(array) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += array[i];
  }
}
calcArray(arr);
