  var resizeModel = {};
  resizeModel = {
                 direction : {
                              axis : '',
                              name : '',
                              sizing : '',
                              padding : ''                              
                             },
                 elements : {
                             a : '',
                             b : ''
                            },
                 namespace : 'resizer',
                 initiatedBy : null,
                 mouseState : 'idle'
                };

function bindGUI(){

$(this).bind(['mouseup', resizeModel.namespace].join('.'), 
   function (eventObject) 
    {
     resizeModel.mouseState = 'up';
    })
.bind(['mousemove', resizeModel.namespace].join('.'), 
   function (eventObject)
    {
     if (resizeModel.mouseState == 'down')
      {
       var viewportSize = $(window)[resizeModel.direction.sizing]();
           clientAxis = resizeModel.direction.axis,
           paddingCSS = {},
           offSet = resizeModel.direction.offset,
           elementSize = resizeModel.direction.name == 'left' || resizeModel.direction.name == 'up' 
                          ? viewportSize - eventObject[clientAxis] + 2
                          : eventObject[clientAxis] - offSet + 2;

       paddingCSS[resizeModel.direction.padding] = [elementSize,'px'].join('');
       resizeModel.elements.a[resizeModel.direction.sizing](elementSize);
       resizeModel.elements.b.css(paddingCSS);
      }
    })
.delegate(".drag_content",
       ['mousedown', resizeModel.namespace].join('.'),
       function () 
        {
         resizeModel.initiatedBy = $(this);
         
         var resizeParent = resizeModel.initiatedBy.parent();
         
         resizeModel.elements = {
                                 a : resizeParent,
                                 b : resizeModel.initiatedBy.hasClass("right") || resizeModel.initiatedBy.hasClass("down") 
                                      ? resizeParent.next()
                                      : resizeParent.prev()
                                };
         resizeModel.direction = resizeModel.initiatedBy.hasClass("down")
                                  ? {
                                     axis : 'clientY',
                                     name : 'down',
                                     offset : resizeModel.elements.a.offset().top,                                                 
                                     sizing : 'height',
                                     padding : 'top'
                                    }
                                  : resizeModel.initiatedBy.hasClass("left")
                                     ? {
                                        axis : 'clientX',
                                        name : 'left',
                                        offset : resizeModel.elements.a.offset().left,                                                    
                                        sizing : 'width',
                                        padding : 'right'
                                       }
                                     : resizeModel.initiatedBy.hasClass("right")
                                        ? {
                                           axis : 'clientX',
                                           name : 'right',
                                           offset : resizeModel.elements.a.offset().left,                                                       
                                           sizing : 'width',
                                           padding : 'left'
                                          }
                                        : resizeModel.initiatedBy.hasClass("up")
                                           ? {
                                              axis : 'clientY',
                                              name : 'up',
                                              offset : resizeModel.elements.a.offset().top,                                                          
                                              sizing : 'height',
                                              padding : 'bottom'
                                             }
                                           : 0;
    
         resizeModel.mouseState = "down";
        });
          
}