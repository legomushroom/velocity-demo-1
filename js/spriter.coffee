class Spriter
  constructor:(@o={})->
    @vars()
    @init()

  vars:->
    @duration = if @o.duration? then @o.duration or 400
    @delay    = if @o.delay? then @o.delay or 0
    @sprites = @o.sprites or (console.error 'no sprites were specified')
    @cnt = @sprites.length

  init:->
    $('<div />').velocity
        p: 0
      ,
        duration: @duration
        delay:    @delay
        progress:($els,progress)=>
          for i in [0...@cnt]
            if progress >= i*(1/@cnt)
              if !@["lock#{i}"] 
                @["lock#{i}"] = true
                @sprites[i-1]?.style.display = 'none'
                @sprites[i].style.display = 'block'
                if i is @cnt-1
                  do (i) =>
                    setTimeout ()=>
                      @sprites[i].style.display = 'none'
                    , 1/@cnt

window.Spriter = Spriter

