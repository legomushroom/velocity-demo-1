class Main
  constructor:->
    @vars?()
    @run()
    
  run:->
    new Meets delay: 0
    # new Triangles delay: 0
    # new Waves delay: h.time(2300)
    # new Caleydoscope delay: h.time(5000)

setTimeout =>
  new Main
, 500
