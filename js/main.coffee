class Main
  constructor:->
    @vars?()
    @run()
    
  run:->
    new Caleydoscope delay: 0
    new Meets delay: h.time(3400)
    # new Triangles delay: 0
    # new Waves delay: h.time(2300)

setTimeout ->
  new Main
, 500
