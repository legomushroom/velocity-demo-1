class Main
  constructor:->
    @vars?()
    @run()
    
  run:->
    new Svg           delay: h.time(0)
    
    # new Caleydoscope  delay: h.time(1000)
    # new Meets         delay: h.time(3900)
    # new Svg           delay: h.time(5600)
    # new Triangles     delay: h.time(8600)
    # new Waves         delay: h.time(11000)
    # new Fish          delay: h.time(11200)
    # new Logo          delay: h.time(14000)

  insertAfter:(newNode, referenceNode)->
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)

setTimeout ->
  new Main
, 500

