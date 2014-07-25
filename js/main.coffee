class Main
  constructor:->
    @vars?()
    @run()
    
  run:->
    @prepareFF()
    new Meets         delay: h.time(0)
    # new Caleydoscope  delay: h.time(1000)
    # new Meets         delay: h.time(3900)
    # new Svg           delay: h.time(5600)
    # new Triangles     delay: h.time(8600)
    # new Waves         delay: h.time(11000)
    # new Fish          delay: h.time(11200)
    # new Logo          delay: h.time(14000)

  prepareFF:->
    # @$masks = $('mask')
    # @$masks.each (i, mask)=>
    #   $mask = $(mask)
    #   id = "##{$mask.attr('id')}"
    #   fill = $("[mask='url(#{id})']").attr 'fill'
    #   $mask.find("[fill='white']").attr 'fill', fill
    #   child = $mask.children()[0]
    #   $g = $mask.next()
    #   @insertAfter child, $mask[0]
    #   console.log $g[0]
    #   $g[0]?.appendChild child
    #   # console.log child
    #   # $mask.remove()
    #   # $("[mask]").remove()

  insertAfter:(newNode, referenceNode)->
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)

setTimeout ->
  new Main
, 500

