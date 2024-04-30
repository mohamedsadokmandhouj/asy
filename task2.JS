fetch('https://catfact.ninja/fact')
.then(Response=>Response.json())

.then(json=>console.log(json))
.catch(error=>console.log('samething went wrong',error))

const awaitcall=async ()=>{
    try {
        const data=await fetch('https://cattfact.ninja/fact')
    const response=await data.json()
    console.log(response)
        
    } catch (error) {
        console.log('samething went wrong',error)
        
    }
}
awaitcall()