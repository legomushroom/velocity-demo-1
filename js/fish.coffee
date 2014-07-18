class Fish
  constructor:(@o={})->
    @vars()
    $('<div />').velocity {
      p: 1
      },
        duration: @delay
        complete:=> @run()

  vars:->
    @delay = @o.delay or 0
    @s = 1*h.time 1

    @$bottomSplash = $('#js-bottom-splash')

    @$fish  = $('#js-fish')
    @$fish.css 'transform-origin': 'center center'
    @$fish.velocity {
      translateX: 35
      translateY: 300
      }, duration: 1

    @$fishW = $('#js-fish-wrapper')

  run:->
    position = @$fishW.attr('transform').split /translate\(|,|\)/
    startX = parseInt position[1], 10
    startY = parseInt position[2], 10


    fadeRadius = 10
    @$bottomSplash.children().each (i,item)=>
      $item = $ item
      $item.velocity {
        translateX: h.rand(-fadeRadius,fadeRadius)
        translateY: h.rand(-fadeRadius,fadeRadius)
        r: h.rand(10, 15)
        },
          duration: 200*@s

      if i > 5 and i < 10
        $item.velocity {
          translateX: h.rand(-10*fadeRadius,10*fadeRadius)
          translateY: h.rand(-10*fadeRadius,10*fadeRadius)
          r: 0
          rotateZ: h.rand(-180,180)
          },
            duration: 400*@s
      else
        $item.velocity {
          translateX: 0
          translateY: 0
          r: 0
          },
            duration: 400*@s


    @$fish.velocity {
      translateX: 30
      translateY: -150
      },
        duration: 1200*@s
        easing: 'ease-in-out'

    # @$fishW.velocity {
    #   opacity: 100
    #   translateX: startX - 20
    #   translateY: startY - 40
    #   },duration: 1

    #   .velocity {
    #     opacity: 100
    #     translateX: startX - 170
    #     translateY: startY - 340
    #     },
    #       duration: 4000*@s
    #       easing: 'linear'



window.Fish = Fish