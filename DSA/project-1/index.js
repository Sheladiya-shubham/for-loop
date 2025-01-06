let BubbleData = [54,54,32,66,78,89];

function bubbleDescending(arr) {

    for(let i=0; i<arr.length; i++){
        for(let j=0; j <arr.length-1; j++){
            if (arr[j] < arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;

   }
  
  console.log("Bubble sort descending",bubbleDescending(BubbleData)); 
  

// expected out put:-
// [89, 78, 66, 54, 54, 32]

  let mergeData= [10,99,89,67,76,54,24,105]

  function mergeAsd(left , right) {
    
    let result = [];
    let i=0,j=0;
    
    while (i<left.length && j<right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i),right.slice(j));
  }

  function mergesort(arr) {
    if (arr.length <=1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2 );
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    left = mergesort(left);
    right = mergesort(right);

    return mergeAsd(left,right)
  }

  console.log("mergeAsd sort =>",mergesort(mergeData));


// expected out put:-
// [10, 24, 54, 67, 76, 89, 99, 105]


  let metrix = [
    [2,4,8],
    [5,12,90],
    [10,20,30]
  ];

  function squramatrix(metrix) {
    let result = [];
    for(let i=0; i<metrix.length; i++){
        let row = [];
        for(let j=0; j<metrix[i].length; j++){
            row.push(metrix[i][j] * metrix[i][j]);
        }
        result.push(row);
    }
    return result;
  }

let squaremat = squramatrix(metrix);

  console.log(metrix);
  console.log(squaremat);

//   expected output:-
// original 2d Array
// [2, 4, 8]
// [5, 12, 90]
// [10, 20, 30]

// square 2d Array

// [4, 16, 64]
// [25,144, 8100]
// [100, 400, 900]

