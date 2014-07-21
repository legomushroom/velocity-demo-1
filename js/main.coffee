class Main
  constructor:->
    @vars?()
    @run()
    
  run:->
    # new Meets         delay: h.time(0)
    new Caleydoscope  delay: h.time(1000)
    new Meets         delay: h.time(3900)
    new Svg           delay: h.time(7100)
    new Triangles     delay: h.time(10100)
    new Waves         delay: h.time(12500)
    new Fish          delay: h.time(13100)
    new Logo          delay: h.time(15700)

setTimeout ->
  new Main
, 500

