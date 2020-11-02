
var vec = ['55','33', '2', '95','65','44','66','1','2'];


for (let index = 0; index < vec.length; index++) {
  console.log('Valor '+vec[index]) ;

}


for (let index = 0; index < vec.length; index++) {
    if( vec[index] == '2' ) {
      console.log('dos')
    
      vec.splice(index,2,1,1);
    }
  
}
console.log('Despues de borrar')


for (let index = 0; index < vec.length; index++) {
  console.log('Valor '+vec[index]) ;

}
















