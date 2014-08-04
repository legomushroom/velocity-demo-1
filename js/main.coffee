class Main
  constructor:->
    @vars?()
    @run()
    
  run:->
    new Caleydoscope    delay: h.time(0)
    # new Meets           delay: h.time(2900)
    
    # new Svg             delay: h.time(4900)
    # new Triangles       delay: h.time(7900)
    # new Tribits         delay: h.time(8950)
    # new Waves           delay: h.time(10300)
    # new Fish            delay: h.time(11500)
    # new Logo            delay: h.time(13300)
    # new Mushroom        delay: h.time(15300)

    # new Caleydoscope  delay: h.time(1000)
    # new Meets         delay: h.time(3900)
    # new Svg           delay: h.time(5900)
    # new Triangles     delay: h.time(8900)
    # new Tribits       delay: h.time(9950)
    # new Waves         delay: h.time(11300)
    # new Fish          delay: h.time(12500)
    # new Logo          delay: h.time(14300)
    # new Mushroom      delay: h.time(16300)


$(window).load ->
  setTimeout ->
    new Main
  , 500

