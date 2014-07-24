class Main
  constructor:->
    @vars?()
    @run()
    
  run:->
    new Waves         delay: h.time(0)
    new Fish          delay: h.time(500)

    # new Caleydoscope  delay: h.time(1000)
    # new Meets         delay: h.time(3900)
    # new Svg           delay: h.time(5600)
    # new Triangles     delay: h.time(8600)
    # new Waves         delay: h.time(11000)
    # new Fish          delay: h.time(11200)
    # new Logo          delay: h.time(14000)

setTimeout ->
  new Main
, 500

