class Main
  constructor:->
    @vars()
    @run()

  vars:->
    @s = 1
    

  run:->
    new Triangles delay: 0
    new Waves delay: h.time(2300)
    new Caleydoscope delay: h.time(5000)

setTimeout =>
  new Main
, 500
