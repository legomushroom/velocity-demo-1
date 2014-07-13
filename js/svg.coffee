class Svg
  constructor:(@o={})->
    @vars()
    @run()

  vars:->
    @delay = @o.delay or 0

    @$circles = $('#js-svg-circles')

  run:->
    @$circles.children().each (i, item)=>
      $item = $(item)
      data = $item.data()
      x = data.x
      y = data.y

      # $item.css 'transform': "translate(#{x}px,#{y}px)"
      $item.velocity {
        translateX: x
        translateY: y
        },
          duration: 1
          delay: @delay
          begin:=>
            !@isCircles and @$circles.show()
            @isCircles = true

      .velocity {
        r: h.rand(150,300)
        rotateZ: h.rand(20,70)
        translateX: x
        translateY: y
        }

window.Svg = Svg