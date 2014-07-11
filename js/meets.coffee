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
    @$rightFist = $('#js-right-fist')
    @$leftFist  = $('#js-left-fist')

    @$rightFistWrapper = $('#js-right-fist-wrapper')
    @$leftFistWrapper  = $('#js-left-fist-wrapper')


  run:->
    bumpDuration = h.time(400)

    @$leftHand.velocity {
        translateX: 0
      },
        # delay: @delay
        duration: bumpDuration
        easing: 'ease-in'
        begin:=>
          @$leftHand.show()
          @$rightHand.show()

    @$rightHand.velocity {
        translateX: 0
      },
        # delay: @delay
        duration: bumpDuration
        easing: 'ease-in'


    fistX = 20
    fistAngle = -20
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

window.Meets = Meets










