class Main
  constructor:->
    @vars?()
    @run()
    
  run:->
    new Caleydoscope delay: 0
    new Meets delay:  h.time(2900)
    new Svg   delay:  h.time(4600)
    new Triangles delay: h.time(8600)
    new Waves delay: h.time(11000)
    new Logo delay: h.time(13500)



setTimeout ->
  new Main
, 500
