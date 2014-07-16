class Svg
  constructor:(@o={})->
    @vars()
    @run()

  vars:->
    @delay = @o.delay or 0

    @$div = $('<div />')
    @$circles = $('#js-svg-circles')
    @$sW = $('#js-svg-s-wrapper')
    @$s = $('#js-svg-s')
    @$g = $('#js-svg-g')
    @$v = $('#js-svg-v')
    @$text = $('#js-svg-text')
    @$svgStroke = $('.svg-stroke')
    @$gradient = $('#js-gradient')

    @$meets = $('#js-meets')

    @maxCnt = 3
    @cnt = 0
    @delayStep = 200

  run:->
    @hider().then => @$meets.hide()

    @$div.velocity {
      p: 1
    },
      delay: @delay - h.time 600
      complete:=>
        @showS()
        @showV()
        @runG()

  showS:->
    @$sW.velocity {
      opacity: 1
      },
        duration: h.time 1200
        complete:=> @runS()

  runS:->
    @$s.velocity {
      'translateY': -194
      'translateX': -52
      },
        duration: h.time 1000
        delay: @delayStep
        easing:   'easeOutBounce'
        complete:=>
          if @cnt++ is @maxCnt then @destroy()
          return if @isDestroy
          @$s.velocity {
            'translateY': 0
            'translateX': 0
            },
              duration: 1
          @runS()

  showV:->
    @preV(); @runV()

  runV:->
    @$v.velocity {
      p: 1
      },
        delay:    h.time 2*@delayStep
        progress:($els, proc)=>
          @$v.attr 'd',
            """
            M#{@x1+(@deltaX1*proc)},#{@arr[1]}
             L#{@arr[2]},#{@arr[3]}
             L#{@x2-(@deltaX2*proc)},#{@arr[5]} Z
            """
    
    .velocity {
      p: 0
      opacity: 1
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
      complete:=>
        return if @isDestroy
        @runV()

  preV:->
    @$v.css 'transform-origin': 'center center'
    @arr = []
    points =  @$v.attr('d').split /\,|M|L|\s/
    for point,i in points
      if point and point isnt 'Z'
        @arr.push parseInt point, 10
    @x1 = @arr[0]
    @x2 = @arr[4]
    @deltaX1 = 80
    @deltaX2 = 80

  runG:->
    @$g.css 'transform-origin': 'center center'
    @$g.velocity {
      scaleX: 1.25
      scaleY: 1.25
      # rotateZ: h.rand(-20,20)
      },
        delay:    h.time 3*@delayStep
        duration: h.time 400
        easing: 'easeOutBounce'

    .velocity {
      scaleX:  1
      scaleY:  1
      rotateZ: 0
      opacity: 1
      },
        duration: h.time 400
        complete:=>
          return if @isDestroy
          @runG()
          @$text.velocity {opacity:1}


  hider:->
    dfr = new $.Deferred
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
        },
          begin:=> @$gradient.show()
          complete:-> dfr.resolve()

    dfr.promise()

  destroy:->
    @isDestroy = true

window.Svg = Svg