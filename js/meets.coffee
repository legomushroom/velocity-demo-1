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

    @$meets = $('#js-meets')
    @$meets.velocity {
      scale: 50
      # rotateZ: 180
      translateX: -1280
      translateY: -200
      }, duration: 1

    # @$circles = $('#js-meets-circles')

    @$rightButton = $('#js-right-button')
    @$leftButton  = $('#js-left-button')
    @$buttons     = $('#js-right-button, #js-left-button')

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


    @$meets.velocity {
      scale: 1
      translateX: 0
      translateY: 0
      rotateZ: 0
      },
      duration: h.time(800)
      delay: @delay + h.time(100)
      easing: 'ease-in'
      complete: =>
        # @$circles.children().each (i, item)->
        #   $item = $(item)
        #   $item.velocity {
        #     opacity: 1
        #     # translateY: 10
        #   },
        #     delay: h.time i*30
        #     duration: h.time 100
        #     begin:->
        #       $item.show()

        #   .velocity {
        #     opacity: 0
        #     # translateY: 0
        #   },
        #     duration: h.time 100
        #     easing: 'easeOutElastic'
        #     complete:->
        #       $item.hide()

    @$leftShirt.velocity { translateX: 0 },
      # delay: @delay
      duration: bumpDuration
      easing: 'ease-in'
      complete: =>
        @$dogsPattern.velocity {
          translateX: -150
          translateY: -150
          },
            duration: h.time(5000)
            easing: 'linear'

        @$rightButton.show()
        @$leftButton.show()

        translate = 5
        @$sleeves.css 'transform-origin': 'center center'
        @$sleeves.velocity {
          translateX: h.rand(-translate,translate)
          translateY: h.rand(-translate,translate)
          rotateZ: h.rand(-25,25)
          },
            duration: 1
            delay: h.time(0)

        .velocity {
          translateX: 0
          translateY: 0
          rotateZ: 0
          },
            easing: 'easeOutElastic'

        translate = 5
        @$shirts.css 'transform-origin': 'center center'
        @$shirts.velocity {
          # translateX: -translate
          translateY: -translate
          },
            duration: 1

        .velocity {
          translateX: 0
          translateY: 0
          },
            easing: 'easeOutElastic'
        
        translate = 5
        @$buttons.velocity {
          translateY: translate
          },
            duration: 1

        .velocity {
          translateX: 0
          translateY: 0
          },
            easing: 'easeOutElastic'

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
          delay: @delay + h.time(450)
          duration: h.time(150)

        .velocity {
          strokeDashoffset: -25
          # strokeWidth: 0
        },
          duration: h.time(150)
      # duration: h.time(500)

window.Meets = Meets










