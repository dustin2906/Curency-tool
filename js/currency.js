

function euroConverter(){
  document.converter.dollar.value = document.converter.euro.value * 1.14969
  document.converter.pound.value = document.converter.euro.value * 0.88202
  document.converter.aud.value = document.converter.euro.value * 1.6271689
  document.converter.vnd.value = document.converter.euro.value *  26,724.06826

  }
  function dollarConverter(){
  document.converter.euro.value = document.converter.dollar.value * 0.869796
  document.converter.pound.value = document.converter.dollar.value * 0.767175
  document.converter.aud.value = document.converter.dollar.value * 1.415305
  document.converter.vnd.value = document.converter.dollar.value * 23,244.48767

  }
  function poundConverter(){
  document.converter.dollar.value = document.converter.pound.value * 1.3034836
  document.converter.euro.value = document.converter.pound.value * 1.1337648
  document.converter.aud.value = document.converter.pound.value * 1.8448268
  document.converter.vnd.value = document.converter.pound.value * 30,298.80754
  }
  function ausConverter(){
  document.converter.dollar.value = document.converter.aud.value * 0.706561
  document.converter.pound.value = document.converter.aud.value * 0.542056
  document.converter.euro.value = document.converter.aud.value * 0.614564
  document.converter.vnd.value = document.converter.aud.value * 16,423.65969
  }
  function vndConverter(){
    document.converter.dollar.value = document.converter.vnd.value * 0.00004 
    document.converter.pound.value = document.converter.vnd.value * 0.00003
    document.converter.euro.value = document.converter.vnd.value * 0.00004
    document.converter.aud.value = document.converter.vnd.value * 0.00006
    }