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

    @$rightFist = $('#js-right-fist')
    @$leftFist  = $('#js-left-fist')
    @$circle    = $('#js-circle')
    @$burst     = $('#js-meets-burst')

    @$rightFistWrapper = $('#js-right-fist-wrapper')
    @$leftFistWrapper  = $('#js-left-fist-wrapper')

  run:->
    bumpDuration = h.time(400)

    @$leftHand.velocity { translateX: 0 },
      # delay: @delay
      duration: bumpDuration
      easing: 'ease-in'
      begin:=>
        @$leftHand.show()
        @$rightHand.show()

    @$rightHand.velocity { translateX: 0 },
        # delay: @delay
        duration: bumpDuration
        easing: 'ease-in'

    @$rightShirt.velocity { translateX: 0 },
        # delay: @delay
        duration: bumpDuration
        easing: 'ease-in'

    fistX = 20
    fistAngle = -10
    fistDuration = h.time(700)
    fistDuration2 = h.time(700)
    fistDelay = fistDuration/2
    @$rightFist.css 'transform-origin': 'center center'
    @$rightFist
      .velocity {rotateZ: fistAngle}, {duration:1}
      .velocity {rotateZ: 0}, {
        duration: fistDuration,
        delay: fistDelay,
        easing: 'easeOutElastic'
      }

    @$leftFist.css 'transform-origin': 'center center'
    @$leftFist
      .velocity {rotateZ: fistAngle}, {duration:1}
      .velocity {rotateZ: 0}, {
        duration: fistDuration,
        delay: fistDelay,
        easing: 'easeOutElastic'
      }

    @$rightFistWrapper
      .velocity {translateX: fistX}, {duration:1}
      .velocity {translateX: 0}, {
        duration: fistDuration2,
        delay: fistDelay,
        easing: 'easeOutElastic'
      }

    @$leftFistWrapper
      .velocity {translateX: fistX}, {duration:1}
      .velocity {translateX: 0}, {
        duration: fistDuration2,
        delay: fistDelay,
        easing: 'easeOutElastic'
      }


    @$circle.velocity {
      r: 150
      strokeWidth: 0
      opacity: 1
    }, delay: @delay + h.time(350)

    @$burst.children().each (i, item)=>
      $item = $(item)
      $item
        .velocity {
          strokeDashoffset: 0
          # strokeWidth: 10
        },
          delay: @delay + h.time(350)
          duration: h.time(150)

        .velocity {
          strokeDashoffset: -25
          # strokeWidth: 0
        },
          duration: h.time(150)
      # duration: h.time(500)

window.Meets = Meets










