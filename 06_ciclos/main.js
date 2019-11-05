// for(let i = 0; i<= 100;i = i + 1 ){
//  console.log(i);
// }

//  for(let i = 10; i<= 1000;i = i + 5){
//      console.log(i);
//  }

// for(let i = 500; i>= 0;i = i - 2){
//     console.log(i);
// }

// for(let i = -765; i<= 15;i = i + 3){
//     console.log(i);
// }

//EJERCICIO4

for(let i = 1; i<= 100;i = i + 1){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i+"fizzbuzz");
    }else if (i % 5 === 0){
            console.log(i+"buzz");
    }else if ( i % 3 === 0 ){
        console.log(i + "fizz");
    }else{
        console.log(i);
    }
}

