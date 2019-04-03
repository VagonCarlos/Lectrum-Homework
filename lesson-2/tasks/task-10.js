var arr = [6,5,4,3,2,1];
for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            var bols = arr[i];
            arr[i] = arr [j];
            arr[j] = bols;
        } 
    }
}