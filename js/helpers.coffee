class Helpers
  s: 1
  rand:(min,max)->
    Math.floor((Math.random() * ((max + 1) - min)) + min)

  time:(time)->
    time*@s

window.h = new Helpers