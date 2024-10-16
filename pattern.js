// 1.
    // 1
    // 1 2
    // 1 2 3 
    // 1 2 3 4
    // 1 2 3 4 5

// for(let i=1; i<=5; i++){
//    let data="";
//     for(let j=1; j<=i; j++){
//         data += j + " ";
//     }
//     console.log(data);
// }
    // 2.
    // 1
    // 0 1
    // 0 1 0
    // 1 0 1 0
    // 1 0 1 0 1

    for (let i = 1; i <= 5; i++) {
        let data = '';
        for (let j = 1; j <= i; j++) {
            data += ((i + j) % 2 === 0 ? '1 ' : '0 ');
        }
        console.log(data);
    }
    

// 3.
    // 5
    // 5 4
    // 5 4 3
    // 5 4 3 2
    // 5 4 3 2 1


// for (let i=5; i>=1; i--){
//     let data="";
//      for(let j=5; j>=i; j--){
//         data += j + " ";
//      }
//      console.log(data);
// }

// 4.
//    5
//    4 4
//    3 3 3
//    2 2 2 2
//    1 1 1 1 1

// for (let i=5; i>=1; i--){
//     let data="";
//      for(let j=5; j>=i; j--){
//         data += i + " ";
//      }
//      console.log(data);
// }

// 5.
        // 1
        // 2 3
        // 4 5 6
        // 7 8 9 10
        // 11 12 13 14 15
// let num=1;

// for(let i=1; i<=5; i++){
//     let data="";
//     for(let j=1; j<=i; j++){
//         data += num + " ";
//         num++;
//     }
//     console.log(data);
// }

// 6.
        // 5
        // 4 5
        // 3 4 5
        // 2 3 4 5
        // 1 2 3 4 5
    // for (let i = 5; i >= 1; i--) {
    //         let data = " ";
    //         for (let j = i; j <= 5; j++) {
    //             data += j + " ";
    //         }
    //         console.log(data);
    //     }
        