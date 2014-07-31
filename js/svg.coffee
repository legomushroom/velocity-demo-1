class Svg
  constructor:(@o={})->
    @vars()
    @run()

  vars:->
    @delay = @o.delay or 0
    @s = 1*h.time 1

    @$div = $('<div />')
    @$circles = $('#js-svg-circles')
    @$sW = $('#js-svg-s-wrapper')
    @$s = $('#js-svg-s')
    @$g = $('#js-svg-g')
    @$v = $('#js-svg-v')
    @$text = $('#js-svg-text')
    @$svgStroke = $('.svg-stroke')
    @$gradient = $('#js-gradient')
    @$svg = $('#js-svg')
    @$blow = $('#js-svg-blow')

    @$meets = $('#js-meets')

    @$sPattern = $('#rose-pattern')

    @maxCnt = 1
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
          @confetti()

  confetti:->
    # @$meets.hide()
    isFF = h.isFF()
    @$blow.children().each (i, item)=>
      $item = $(item)
      if isFF and i > 7
        $item.hide()
        return
      x = h.rand(-500, 500)
      y = h.rand(-500, 500)
      blowX = if x < 0 then x-1000 else x+1000
      coef = (1-(2000 - Math.abs blowX)/1000)
      $item.velocity {
        translateX: x
        translateY: y
        rotateZ: h.rand(-360,360)
        rotateX: h.rand(-360,360)
        rotateY: h.rand(-360,360)
        },
          duration: 1
          easing: 'linear'

      .velocity {
        translateY: y+300
        translateX: if x < 0 then x-100 else x+100
        rotateZ: h.rand(-1200,1200)
        rotateX: h.rand(-1200,1200)
        rotateY: h.rand(-1200,1200)
        },
          duration: 3000*@s
          delay:    400*@s
          easing:   'linear'
          begin:=>  if i is 0 then @$blow.show()

       .velocity {
        translateY: y+1000
        translateX: blowX
        rotateZ: h.rand(-1200,1200)
        rotateX: h.rand(-1200,1200)
        rotateY: h.rand(-1200,1200)
        scale: 1+coef
        },
          duration: 600*@s
          delay:    coef*200*@s
          easing:   'linear'

  showS:->
    @$sW.velocity {
      opacity: 1
      },
        duration: h.time 1200
        complete:=> @runS()

  runS:(isSecond)->
    if !isSecond
      @$s.velocity {
        'translateY': 194
        'translateX': 52
      }, duration: 1

    @$s.velocity {
      'translateY': if isSecond then -194 else 0
      'translateX': if isSecond then -52  else 0
      },
        duration: h.time 1000
        delay:    @delayStep
        easing:   'easeOutBounce'
        complete:=>
          if @cnt++ is @maxCnt then @destroy()
          return if @isDestroy
          # @$s.velocity {
          #   'translateY': 0
          #   'translateX': 0
          #   }, duration: 1
          @runS(true)

    @$sPattern.velocity {
      'y': if isSecond then 3*194 else 2*194
      # 'x': if isSecond then 2*52  else 52
      },
        duration: h.time 1000
        delay:    @delayStep
        easing:   'easeOutBounce'

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
            @$svg.show()

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