class Meets
  constructor:(@o={})->
    @vars()
    @run()

  vars:->
    @delay = @o.delay or 0

    @$leftHand  = $('#js-left-hand')
    @$leftHand.velocity {translateX: 500}, duration:1
    @$rightHand = $('#js-right-hand')
    @$rightHand.velocity {translateX: 500}, duration:1
    
    @$rightShirt = $('#js-right-shirt')
    @$rightShirt.velocity {translateX: 500}, duration:1

    @$leftShirt = $('#js-left-shirt')
    @$leftShirt.velocity {translateX: -500}, duration:1

    @$sleeves  = $('.js-sleeve')
    @$shirts   = $('.js-shirt')

    @$dogsPattern = $('#js-space-dogs-image')

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
        @$leftHand.show()
        @$rightHand.show()

    @$rightHand.velocity { translateX: 0 },
        # delay: @delay
        duration: bumpDuration
        delay: @delay + @bumpDelay
        easing: 'ease-in'

    @$rightShirt.velocity { translateX: 0 },
        # delay: @delay
        duration: bumpDuration
        delay: @delay + @bumpDelay
        easing: 'ease-in'

    @$circles.children().each (i, item)=>
      $item = $(item)
      x = parseFloat $item.attr 'data-x'
      y = parseFloat $item.attr 'data-y'
      $item.velocity {
        translateX: x
        translateY: y
      },
        duration: 1
        delay: @delay
      
      $item.velocity {
        r: 0
        translateX: x + h.rand(-50,50)
        translateY: y + h.rand(-50,50)
        rotateZ: h.rand(-360,360)
      }, duration: h.time(1000)


    @$leftShirt.velocity { translateX: 0 },
      # delay: @delay
      duration: bumpDuration
      easing: 'ease-in'
      delay: @delay + @bumpDelay
      complete: =>
        @$dogsPattern.velocity {
          translateX: -150
          translateY: -150
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

    # @$circle.velocity {
    #   r: 150
    #   strokeWidth: 0
    #   opacity: 1
    # }, delay: @delay + h.time(350)
    
    @$burst.children().each (i, item)=>
      $item = $(item)
      $item
        .velocity {
          strokeDashoffset: 0
          # strokeWidth: 10
        },
          delay: @delay + h.time(400) + @bumpDelay
          duration: h.time(150)

        .velocity {
          strokeDashoffset: -35
          # strokeWidth: 0
        },
          duration: h.time(150)

window.Meets = Meets










