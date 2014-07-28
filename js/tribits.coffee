class Tribits
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
    @$bits = $('#js-tri-bits1')

  run:->
    @$bits.children().each (i, bit)=>
      $bit = $ bit
      dur = 1400*@s + h.rand(0, 200)*@s
      $bit.css 'transform-origin': 'center center'
      .velocity {
        translateY: -340
        translateX: h.rand 0,-50
        rotateZ: h.rand(-950, 950)
        }, duration: 1
      .velocity {
        translateY: 0
        rotateZ: 0
        translateX: 0
        },
          easing: 'easeOutBounce'
          duration: dur
          delay: h.rand(0, 300)*@s
          begin:-> $bit.show()

      $child = $bit.children()
      $child
      .css 'transform-origin': 'center center'
      .velocity {
        # translateY: -100
        translateX: -280
        }, duration: 1

      .velocity {
        translateY: 0
        translateX: 0
        },
          # delay: 500*@s
          duration: dur + 300*@s
          easing: 'ease-out'
          # easing: 'linear'
          begin:-> $child.show()




window.Tribits = Tribits