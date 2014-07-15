class Main
  constructor:->
    @vars?()
    @run()
    
  run:->
    # new Svg   delay:  h.time 2000
    
    new Caleydoscope delay: 0
    new Meets delay:  h.time(2900)
    new Svg   delay:  h.time(5200)
    new Triangles delay: h.time(9400)
    # new Waves delay: h.time(11200)

setTimeout ->
  new Main
, 500
