class Main
  constructor:->
    @vars?()
    @run()
    
  run:->
    new Logo delay: 0
    # new Caleydoscope delay: 0
    # new Meets delay:  h.time(2900)
    # new Svg   delay:  h.time(4600)
    # new Triangles delay: h.time(8600)
    # new Waves delay: h.time(11000)



setTimeout ->
  new Main
, 500
