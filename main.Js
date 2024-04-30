const delay=(ms)=>{
    return new Promise((resolve, reject) => {
        setTimeout(  resolve
            
        ,ms);
    })
}
const iterateWithAsyncAwait = async (array) => {
    for (let i = 0; i < array.length; i++) {
      await delay(1000)
      console.log(array[i])
    }
  }
  
  const array = [1, 2, 3, 4, 5]
  iterateWithAsyncAwait(array)

  