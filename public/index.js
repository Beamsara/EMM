function ledOn(){
    firebase.database().ref("LED").set({
    status:"ON"
    })
  }
  function ledOff(){
    firebase.database().ref("LED").set({
    status:"OFF"
    })
  }