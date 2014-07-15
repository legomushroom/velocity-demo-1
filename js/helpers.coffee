class Helpers
  s: 2
  rand:(min,max)->
    Math.floor((Math.random() * ((max + 1) - min)) + min)

  time:(time)->
    time*@s

  elasticOut:(k)->
    a = 0.1
    p = 0.4
    if ( k is 0 ) then return 0
    if ( k is 1 ) then return 1
    if ( !a or a < 1 )  then a = 1; s = p / 4
    else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI )
    (a*Math.pow( 2, - 10 * k)*Math.sin((k-s)*(2*Math.PI)/p)+1)

window.h = new Helpers