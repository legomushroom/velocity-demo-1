class Svg
  constructor:(@o={})->
    @vars()
    @run()

  vars:->
    @delay = @o.delay or 0

    @$div = $('<div />')
    @$circles = $('#js-svg-circles')
    @$s = $('#js-svg-s')
    @$g = $('#js-svg-g')
    @$v = $('#js-svg-v')

  run:->
    @hider()

    @changeS()
    @runG()
    @preV(); @runV()

  runV:->
    @$v.velocity {
      p: 1
      },
        delay: h.time 500
        progress:($els, proc)=>
          @$v.attr 'd',
            """
            M#{@x1+(@deltaX1*proc)},#{@arr[1]}
             L#{@arr[2]},#{@arr[3]}
             L#{@x2-(@deltaX2*proc)},#{@arr[5]} Z
            """
    
    .velocity {
      p: 0
    },
      duration: h.time 700
      progress:($els, proc)=>
        proc = h.elasticOut proc
        @$v.attr 'd',
          """
          M#{(@x1+@deltaX1)-(@deltaX1*proc)},#{@arr[1]}
           L#{@arr[2]},#{@arr[3]}
           L#{(@x2-@deltaX2)+(@deltaX2*proc)},#{@arr[5]} Z
          """
      complete:=> @runV()

  preV:->
    @$v.css 'transform-origin': 'center center'
    @arr = []
    points =  @$v.attr('d').split /\,|M|L|\s/
    for point,i in points
      if point and point isnt 'Z'
        @arr.push parseInt point, 10
    @x1 = @arr[0]
    @x2 = @arr[4]
    @deltaX1 = 44
    @deltaX2 = 44


  changeS:->
    @$s.velocity {
      'translateY': -194
      'translateX': -52
      },
        duration: h.time 1000
        delay:    h.time 400
        easing:   'easeOutBounce'
        complete:=>
          @$s.velocity {
            'translateY': 0
            'translateX': 0
            },
              duration: 1
          @changeS()

  runG:->
    @$g.css 'transform-origin': 'center center'
    @$g.velocity {
      scaleX: 1.25
      scaleY: 1.25
      # rotateZ: h.rand(-20,20)
      },
        delay:    h.time 600
        duration: h.time 400
        easing: 'easeOutBounce'

    .velocity {
      scaleX:  1
      scaleY:  1
      rotateZ: 0
      },
        duration: h.time 400
        complete:=> @runG()


  hider:->
    @$circles.children().each (i, item)=>
      $item = $(item)
      data = $item.data()
      x = data.x
      y = data.y

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