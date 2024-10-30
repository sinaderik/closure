function outer(name){
    // outer function is invoked and finished
    console.log("outer function")
    function inner(){
        // 'keep the state even after the outer function is finished'
        console.log(`Hi my name is ${name}`)
    }
    inner()
}
outer('sina')

