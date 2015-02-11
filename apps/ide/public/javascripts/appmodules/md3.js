
  //helpers
  String.prototype.capitalize = function(lower) {
    return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(a) {
      return a.toUpperCase();
    });
  };

  function _(el){
    return document.querySelector(el);
  }

    var c,d,e,o,u,w,x,y ,sc,ec,e2;
      var pressed = 0;
      var myTextArea,btn,editor;
//##########
//handlers







      var controls = {
        'bold': function() {
          editor.wrap('**', '**');
        },
        'italic': function() {
          editor.wrap('_', '_');
        },
        'code': function() {
          editor.wrap('`', '`');
        },
        'code-block': function() {
          editor.indent(' ');
        },
        'quote': function() {
          editor.indent('> ');
        },
        'ul-list': function() {
          var sel = editor.selection(),
              added = "";
          if (sel.value.length > 0) {
            editor.indent('', function() {
              editor.replace(/^[^\n\r]/gm, function(str) {
                added += '- ';
                return str.replace(/^/, '- ');
              });
              editor.select(sel.start, sel.end + added.length);
            });
          } else {
            var placeholder = '- List Item';
            editor.indent(placeholder, function() {
              editor.select(sel.start + 2, sel.start + placeholder.length);
            });
          }
        },
        'ol-list': function() {
          var sel = editor.selection(),
              ol = 0,
              added = "";
          if (sel.value.length > 0) {
            editor.indent('', function() {
              editor.replace(/^[^\n\r]/gm, function(str) {
                ol++;
                added += ol + '. ';
                return str.replace(/^/, ol + '. ');
              });
              editor.select(sel.start, sel.end + added.length);
            });
          } else {
            var placeholder = '1. List Item';
            editor.indent(placeholder, function() {
              editor.select(sel.start + 3, sel.start + placeholder.length);
            });
          }
        },
        'link': function() {
          var sel = editor.selection(),
              title = null,
              url = null,
              placeholder = 'Title of link';
          fakePrompt('Link title:', 'Title of link', false, function(r) {
            title = r;
            fakePrompt('URL:', 'http://', true, function(r) {
              url = r;
              editor.insert('\n[' + title + '](' + r + ')\n');
            });
          });
        },
        'image': function() {
          fakePrompt('Image URL:', 'http://', true, function(r) {
            var altText = r.substring(r.lastIndexOf('/') + 1, r.lastIndexOf('.')).replace(/[\-\_\+]+/g, " ").capitalize();
            altText = altText.indexOf('/') < 0 ? decodeURIComponent(altText) : 'Image';
            editor.insert('\n![' + altText + '](' + r + ')\n');
          });
        },
        'h1': function() {
          heading('#');
        },
        'h2': function() {
          heading('##');
        },
        'h3': function() {
          heading('###');
        },
        'h4': function() {
          heading('####');
        },
        'h5': function() {
          heading('#####');
        },
        'h6': function() {
          heading('######');
        },
        'hr': function() {
          editor.insert('\n\n---\n\n');
        },
        'undo': function() {
          editor.undo();
        },
        'redo': function() {
          editor.redo();
        }
      };

  function heading(key) {
    if (editor.selection().value.length > 0) {
      editor.wrap(key + ' ', "");
    } else {
      var placeholder = key + ' Heading ' + key.length + '\n\n';
      editor.insert(placeholder, function() {
        var s = editor.selection().start;
        editor.select(s - placeholder.length + key.length + 1, s - 2);
      });
    }
  }

 function click(elem) {
    var hash = elem.hash.replace('#', "");
    if (controls[hash]) {
      elem.onclick = function() {
        controls[hash]();
        return false;
      };  //func
    }  // if
  }  // click func

  var render = function() {
    o.innerHTML = c.makeHtml(y.value);
    o.classList.toggle('show');
    sc.classList.toggle('hide');
    ec.classList.toggle('hide');
    this.classList.toggle('active');
  };
  // post edit callback
function postCB1(retdata){console.log(retdata);}

  // post edit function
var postedit=function(){
  var nameparam=  x.value;
  var contentq= y.value
  formurl="/ide/edit/"+nameparam;
  formobj="content="+contentq;
   AjaxHandler.post(formurl,formobj,postCB1);
}
  // localStorage
var autosave_local=function(){
  if (localStorage !== null) {
    y.value = localStorage.getItem('markdown_text_saved');
    var t = setInterval(function() {
      localStorage.setItem('markdown_text_saved', y.value);
      console.info('save text');
    }, 10000);
  } 
}
//############## events

var initCTL=function(){
  for (var i = 0, len = btn.length; i < len; ++i) {
    click(btn[i]);
    btn[i].href = '#';
  }
}

var initSD=  function (){
  ///keydown
  editor.area.onkeydown = function(e) {
    if (pressed < 5) {
      pressed++;
    } else {
      editor.updateHistory();
      pressed = 0;
    }
    if (e.keyCode == 9) {
      editor.indent('    ');
      return false;
    }
  };
  //init showd
      c = new Showdown.converter(),
      e = _('#eye'),
      u = _('#upload'),
      x = _('#editor-title'),
      y = _('#editor-area'),
      o = _('.result'),
      w = _('.close_window'),
      d = _('.drag'),
      sc = _('#server-control'),
      ec =  _('#editor-control'),
      e2 = _('#eye2');
}
var startediting= function(){
  e.addEventListener('click',render);
  e2.addEventListener('click',render);
  u.addEventListener('click',postedit);
};
var stopediting= function(){
  e.removeEventListener('click',render);
  e2.removeEventListener('click',render);
  u.removeEventListener('click',postedit);
};
