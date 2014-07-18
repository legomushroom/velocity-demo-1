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

    @$fish  = $('#js-fish')
    @$fish.css 'transform-origin': 'center center'
    @$fish.velocity {
      translateX: 35
      translateY: 240
      }, duration: 1

    @$fishW = $('#js-fish-wrapper')

  run:->
    position = @$fishW.attr('transform').split /translate\(|,|\)/
    startX = parseInt position[1], 10
    startY = parseInt position[2], 10


    @$fish.velocity {
      translateX: 30
      translateY: -95
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