for(let i = 1; i<=101; i++){
  if(i%3 == 0){
    console.log('Ali');
  } else if(i%5 == 0){
    console.log('Simbi')
  } else if(i%5 == 0 && i%3 == 0){
    console.log('AliandSimbi')
  } else{
    console.log(i)
  }
}
