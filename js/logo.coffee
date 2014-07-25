class Logo
  constructor:(@o={})->
    @vars()
    $('<div />').velocity {p:1},
      duration: @delay
      complete:=> @$logo.show(); @run()

  vars:->
    @delay = @o.delay or 0
    @s = 1*h.time(1)
    @$logo      = $('#js-logo')
    @$logoV     = $('#js-logo-v')
    @$logoV.velocity {
      translateX: 21
      translateY: 21
      }

    @$logoLines = $('#js-logo-lines')
    
    @$text       = $('#js-logo-text')
    @$hand       = $('#js-logo-hand')
    @$handCircle = $('#js-hand-circle')
    @$shadow     = $('#js-logo-shadow')
    @$shadow.css 'transform-origin': '180px'
    @$shadow.velocity {
      scale: .75
      }

    @prepareLines()

    for num, i in [1,2,3]
      @["$circle#{num}"] = $("#js-logo-circle-#{num}")

    for num, i in [1,2,3]
      @["$line#{num}"] = $("#js-line-#{num}")

    for num, i in [1,2,3]
      @["$shadow#{num}"] = $("#js-shadow-#{num}")

  run:->
    lineDur1 = 300
    lineDur2 = 250
    lineDur3 = 200

    entireDur = lineDur1+lineDur2+lineDur3

    @$logoLines.velocity {
      opacity: 1
    },
      duration: entireDur*@s
      easing: 'linear'

    @$line1.velocity {
      strokeDashoffset: 0
      },
        duration: lineDur1*@s
        easing: 'linear'
        progress:($els, proc)=>
          proc > .65 and  @$shadow1.velocity {opacity: .1}

    @$line2.velocity {
      strokeDashoffset: 0
      },
        duration: lineDur2*@s
        easing: 'linear'
        delay: 275*@s
        progress:($els, proc)=>
          if proc > .65
            @$shadow2.velocity {opacity: .1}
            @$shadow.velocity  {opacity: .2}

    @$line3.velocity {
      strokeDashoffset: 0
      },
        duration: lineDur3*@s
        easing: 'linear'
        delay: 2*245*@s
        begin:=> @$shadow3.velocity {opacity: .1}

    circlesDelay = entireDur - 300
    textDuration = 900
    @$text.velocity {
      opacity: 1
      },
        duration: textDuration*@s
        delay: (circlesDelay)*@s

    @$circle1.velocity {
      r: 180
      },
        duration: textDuration*@s
        delay: (circlesDelay)*@s

    handDelay = entireDur
    @$hand.velocity {
      translateX: 280
      translateY: 291
      }, duration: 1
      
      .velocity {
        translateX: 190
        translateY: 241
        opacity: 1
        },
          duration: 500*@s
          delay: (entireDur+100)*@s
          complete:=>
            @$hand.velocity {opacity:0}, duration: 400*@s

            @$handCircle.velocity {
              r: 25
              strokeWidth: 0
              opacity: 100
              },
                duration: 500*@s
                complete:=>
                  setTimeout =>
                    @$logoV.velocity {
                      translateY: 31
                      },
                        loop: 40
                        duration: 1500*@s

                    @$shadow.velocity {
                      opacity: .35
                      scale: 1
                      },
                        loop: 40
                        duration: 1500*@s

                  , 2000*@s

  prepareLines:->
    @$logoLines.children().each (i, line)->
      $line = $(line)
      length = line.getTotalLength()
      $line.css
        'stroke-dasharray': "#{length}px"
        'stroke-dashoffset': "#{-length}px"


window.Logo = Logo