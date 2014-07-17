class Logo
  constructor:(@o={})->
    @vars()
    $('<div />').velocity {p:1},
      duration: @delay
      complete:=> @run()

  vars:->
    @delay = @o.delay or 0
    @s = 1*h.time(1)
    @$logoLines = $('#js-logo-lines')
    @prepareLines()

    for num, i in [1,2,3]
      @["$line#{num}"] = $("#js-line-#{num}")

    for num, i in [1,2,3]
      @["$shadow#{num}"] = $("#js-shadow-#{num}")

  run:->
    lineDur1 = 300
    lineDur2 = 300
    lineDur3 = 300

    @$logoLines.velocity {
      opacity: 1
    },
      duration: (lineDur1+lineDur2+lineDur3)*@s
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
        delay: 260*@s
        progress:($els, proc)=>
          proc > .65 and  @$shadow2.velocity {opacity: .1}

    @$line3.velocity {
      strokeDashoffset: 0
      },
        duration: lineDur3*@s
        easing: 'linear'
        delay: 2*250*@s
        begin:=> @$shadow3.velocity {opacity: .1}

  prepareLines:->
    @$logoLines.children().each (i, line)->
      $line = $(line)
      length = line.getTotalLength()
      $line.css
        'stroke-dasharray': "#{length}px"
        'stroke-dashoffset': "#{-length}px"


window.Logo = Logo