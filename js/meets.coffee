class Meets
  constructor:(@o={})->
    @vars()
    @run()

  vars:->
    @delay = @o.delay or 0
    @s = 1*h.time 1

    @$leftHand  = $('#js-left-hand')
    @$leftHand.velocity {translateX: 500}, duration:1
    @$rightHand = $('#js-right-hand')
    @$rightHand.velocity {translateX: 500}, duration:1
    
    @$rightShirt = $('#js-right-shirt')
    @rightShirtX1 = parseInt(@$rightShirt.attr('x'), 10)
    @rightShirtX2 = parseInt(@$rightShirt.attr('x2'), 10)

    @$shirtWalls = $('.js-shirt-wall')
    # @$rightShirt.attr 'x', -500
    @$firework = $ '#js-firework'

    @$leftShirt = $('#js-left-shirt')
    @leftShirtX1 = parseInt @$leftShirt.attr('x'), 10
    @leftShirtX2 = parseInt @$leftShirt.attr('x2'), 10

    @shirtOffsetX = 0
    # if h.isIOS()
    #   @$rightShirt[0].setAttribute 'y', 10
    #   @$leftShirt[0].setAttribute 'y', 10
    #   @shirtOffsetX = -20
    #   @rightShirtX2 -= 600

    @$meets    = $('#js-meets')
    @$blow     = $('#js-meets-blow')

    @$sleeves  = $('.js-sleeve')
    @$shirts   = $('.js-shirt')

    @$dogsPattern = $('#space-dogs-pattern')

    @$circles = $('#js-meets-circles')

    @$rightButton = $('#js-right-button')
    @$leftButton  = $('#js-left-button')
    @$buttons     = $('#js-right-button, #js-left-button')

    @$rightFist = $('#js-right-fist')
    @$leftFist  = $('#js-left-fist')
    @$circle    = $('#js-circle')
    @$burst     = $('#js-meets-burst')
    @$entireColeydoscope = $('#js-entire-caleydoscope')


    @$rightFistWrapper = $('#js-right-fist-wrapper')
    @$leftFistWrapper  = $('#js-left-fist-wrapper')
    @bumpDelay = h.time(600)

  run:->
    bumpDuration = h.time(400)

    @$leftHand.velocity { translateX: 0 },
      # delay: @delay
      duration: bumpDuration
      easing: 'ease-in'
      delay: @delay + @bumpDelay
      begin:=>
        @$leftHand.css('opacity': 1); @$rightHand.css('opacity': 1)

    @$rightHand.velocity { translateX: 0 },
        # delay: @delay
        duration: bumpDuration
        delay: @delay + @bumpDelay
        easing: 'ease-in'

    
    @isShirtWalls = false
    deltaX2 = @rightShirtX2 - @rightShirtX1
    @rightShirt = @$rightShirt[0]
    @$rightShirt.velocity { p: 0 },
        # delay: @delay
        duration: bumpDuration
        delay: @delay + @bumpDelay
        easing: 'ease-in'
        progress:($els, proc)=>
          @rightShirt.setAttribute 'x', @rightShirtX1 + deltaX2*proc
          !@isShirtWalls and @$shirtWalls.show()
          @isShirtWalls = true

    @$circles.children().each (i, item)=>
      $item = $(item)
      x = parseFloat $item.attr 'data-x'
      y = parseFloat $item.attr 'data-y'
      # $item.css 'transform-origin': "#{h.rand(0,50)}px #{h.rand(0,50)}px"
      $item.velocity {
        translateX: x
        translateY: y
        # rotateZ: h.rand(-200,200)
      },
        duration: 1
        delay: @delay
        # begin:=> if i is 0 then @$meets.show()
      
      $item.velocity {
        r: 0
        translateX: x + h.rand(-50,50)
        translateY: y + h.rand(-50,50)
        rotateZ: h.rand(-360,360)
      }, duration: h.time(1000)

    deltaX = @leftShirtX1 - @leftShirtX2
    @leftShirt = @$leftShirt[0]
    @$leftShirt.velocity { p: 0 },
      duration: bumpDuration
      easing: 'ease-in'
      delay: @delay + @bumpDelay
      progress:($els, proc)=>
        @leftShirt.setAttribute 'x', @leftShirtX1 - deltaX*proc + @shirtOffsetX
      complete: =>
        @$dogsPattern.velocity {
          x: -150
          y: -150
          },
            duration: h.time(5000)
            easing: 'linear'

        @$rightButton.show()
        @$leftButton.show()

    fistX = 40
    fistAngle = -10
    fistDuration = h.time(700)
    fistDuration2 = h.time(700)
    fistDelay = fistDuration/2
    @$rightFist.css 'transform-origin': 'center center'
    @$rightFist
      .velocity {rotateZ: fistAngle}, {duration:1}
      .velocity {rotateZ: 0}, {
        duration: fistDuration,
        delay: @delay + fistDelay + @bumpDelay,
        easing: 'easeOutElastic'
      }

    @$leftFist.css 'transform-origin': 'center center'
    @$leftFist
      .velocity {rotateZ: fistAngle}, {duration:1}
      .velocity {rotateZ: 0}, {
        duration: fistDuration,
        delay: @delay + fistDelay + @bumpDelay,
        easing: 'easeOutElastic'
      }

    @$rightFistWrapper
      .velocity {translateX: fistX}, {
        duration:1,
        delay: @delay + fistDelay + @bumpDelay
        }

        .velocity {translateX: 0}, {
          duration: fistDuration2,
          easing: 'easeOutElastic'
        }

    @$leftFistWrapper
      .velocity {translateX: -fistX}, {
        duration:1,
        delay: @delay + fistDelay + @bumpDelay
        }

        .velocity {translateX: 0}, {
          duration: fistDuration2,
          easing: 'easeOutElastic'
          begin:=> @$entireColeydoscope.hide()
        }

    @$burst.children().each (i, item)=>
      $item = $(item)
      $item
        .velocity {
          strokeDashoffset: 0
          # strokeWidth: 4
        },
          delay: @delay + h.time(500) + @bumpDelay
          duration: h.time(150)

        .velocity {
          strokeDashoffset: -36
          # strokeWidth: 0
        },
          duration: h.time(150)

    @$smoke = $('#js-smoke')
    new Spriter
      sprites:  @$smoke.children()
      duration: 400*@s
      delay:    @delay + 400*@s + @bumpDelay
      # easing: 'ease-out'

    @$burst.css 'transform-origin': '640px 450px '
    @$burst.velocity {
      rotateZ: 20
      },
        delay: @delay + h.time(400) + @bumpDelay
        duration: 600*@s

    @$blow.css 'transform-origin': '640px 450px '
    @$blow.velocity {
      rotateZ: 30
      },
        delay: @delay + h.time(500) + @bumpDelay
        duration: 600*@s


    $childs = @$firework.children()
    ffLen = $childs.length
    $childs.css 'transform-origin': '50% 50%'
    $childs.velocity {
      scale: .75
      }, duration: 1
    $childs.each (i, child)=>
      $line = $ child
      len = $line[0].getTotalLength()
      currLen = if i is ffLen-1 then len else -len
      $line.velocity {
        strokeDashoffset: currLen
        strokeDasharray:  len
        }, duration: 1
      $line.velocity {
        strokeDashoffset: 0
        # opacity: .5
        strokeWidth: 4
        },
          duration: 150*@s
          delay: @delay + h.time(400) + @bumpDelay + h.rand(0,300)*@s
          begin:=> i is 0 and @$firework.show()
      $line.velocity {
        strokeDashoffset: if i is ffLen-1 then -len else len
        # opacity: 0
        strokeWidth: 0
        },
          duration: 150*@s

    @$blow.children().each (i, item)=>
      $item = $(item)
      data = $item.data()
      x2 = data.x
      y2 = data.y
      $item
        .velocity {
          r: 0
          translateX: x2
          translateY: y2
        },
          delay: @delay + h.time(500) + @bumpDelay
          duration: 600*@s
          begin:=>
            if i is 0
              @$blow.show()



window.Meets = Meets










