class Main
  constructor:->
    @vars?()
    @run()
    
  run:->
    new Caleydoscope  delay: h.time(1000)
    new Meets         delay: h.time(3900)
    new Svg           delay: h.time(5900)
    new Triangles     delay: h.time(8900)
    new Waves         delay: h.time(11300)
    new Fish          delay: h.time(11500)
    new Logo          delay: h.time(14300)
    new Mushroom      delay: h.time(16300)

  insertAfter:(newNode, referenceNode)->
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)

setTimeout ->
  new Main
, 500

