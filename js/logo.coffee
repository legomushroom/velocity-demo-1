class Logo
  constructor:(@o={})->
    @vars()
    $('<div />').velocity {p:1},
      duration: @delay
      complete:=> @run()

  vars:->
    @delay = @o.delay or 0
    @$logoLines = $('#js-logo-lines')

  run:->
    @prepareLines()

  prepareLines:->
    @$logoLines.children().each (i, line)->
      $line = $(line)
      length = line.getTotalLength()
      $line.css
        'stroke-dasharray': "#{length}px"
        'stroke-dashoffset': "#{-length}px"


window.Logo = Logo