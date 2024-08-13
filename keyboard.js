

window.addEventListener("keydown",(eve)=>{
    console.log(eve.keyCode)
    const audio=document.querySelector(`audio[data-key="${eve.keyCode}"]`)
    if(!audio){
        window.alert("please press only Alphabet keys")
    }else{
        audio.currentTime=0;
        audio.play()
    }
    const cont1=document.querySelector(`div [data-key="${eve.keyCode}"]`)
    try{
        cont1.classList.add('changes')
    }
    catch(err){
        console.log(err)
    }
    
})

window.addEventListener("keyup",(eve)=>{
    const cont1=document.querySelector(`div [data-key="${eve.keyCode}"]`)
    try{
        cont1.classList.remove('changes')
    }
    catch(err){
        console.log(err)
    }
})


function makeCounter() {
    var counter = 10;
    return {
    value: function () {
    return counter;
    },
}
}
    let a = makeCounter();
    console.log(a);