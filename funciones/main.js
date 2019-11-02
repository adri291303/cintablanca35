




// const ciclo = (x=1 , y=10 , z=1) => {
    // for(let i = x; i <= y; i = i+z){
        // console.log(i)
    // }
// }


// parametros como primer parametro el inicio, como segundo el final y como tercero de cuanto en cuanto



//  ciclo(5, 50, 1);


   const tablas= (a , b) => {
    for (let i=a; i<= b; i++ ){
        for(let j = 1; j <= 10; j++){
            console.log(i+"x"+ j + "=" + i * j)
        }
      }
   }

tablas (4, 7)

const nuevaSuma = (a=0, b=0 ) => {
return a + b;
}

nuevaSuma(3, 2)

const nuevaResta = (a, b) => {
return a + b;
}

nuevaResta(9, 1)

const multiplicacion = (a , b) => {
return( a * b);
}
console.log(multiplicacion(nuevaSuma(), nuevaResta(9,1)))

