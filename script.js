function lastCall(callback){
  document.getElementById("countdown").innerHTML = "10";
  setTimeout(callback,1000)
}
function ninthCall(callback){
  document.getElementById("countdown").innerHTML = "09";
  setTimeout(callback,1000)
}
function eightCall(callback){
  document.getElementById("countdown").innerHTML = "08";
  setTimeout(callback,1000);
}
function sevenCall(callback){
  document.getElementById("countdown").innerHTML = "07";
  setTimeout(callback,1000);
}
function sixCall(callback){
  document.getElementById("countdown").innerHTML = "06";
  setTimeout(callback,1000);
}
function fiveCall(callback){
  document.getElementById("countdown").innerHTML = "05";
  setTimeout(callback,1000);
}
function fourCall(callback){
  document.getElementById("countdown").innerHTML = "04";
  setTimeout(callback,1000);
}
function thirdCall(callback){
  document.getElementById("countdown").innerHTML = "03";
  setTimeout(callback,1000);
}
function secondCall(callback){
  document.getElementById("countdown").innerHTML = "02";
  setTimeout(callback,1000);
}
function firstCall(callback){
  document.getElementById("countdown").innerHTML = "01";
  setTimeout(callback,1000);
}
function word(callback){
  document.getElementById("countdown").innerHTML = "HAPPY INDEPENDENCE DAY";
  setTimeout(callback,1000);
}

lastCall(()=>{
  ninthCall(()=>{
      eightCall(()=>{
          sevenCall(()=>{
              sixCall(()=>{
                  fiveCall(()=>{
                      fourCall(()=>{
                          thirdCall(()=>{
                              secondCall(()=>{
                                  firstCall(()=>{
                                      word(()=>{

                                      })
                                  })
                              })
                          })
                      })
                  })
              })
          })
      }) 
  })
})

