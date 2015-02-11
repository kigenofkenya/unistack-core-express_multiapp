 function $(id){
        var finder_el = 'string' == typeof id
          ? document.getElementById(id)
          : id;

        finder_el.on = function(event, fn){
          if ('content loaded' == event) event = 'DOMContentLoaded';
          finder_el.addEventListener(event, fn, false);
        };

        finder_el.all = function(selector){
          return $(finder_el.querySelectorAll(selector));
        };

        finder_el.each = function(fn){
          for (var i = 0, len = finder_el.length; i < len; ++i) {
            fn($(finder_el[i]), i);
          }
        };

        finder_el.getClasses = function(){
          return this.getAttribute('class').split(/\s+/);
        };

        finder_el.addClass = function(name){
          var classes = this.getAttribute('class');
          finder_el.setAttribute('class', classes
            ? classes + ' ' + name
            : name);
        };

        finder_el.removeClass = function(name){
          var classes = this.getClasses().filter(function(curr){
            return curr != name;
          });
          this.setAttribute('class', classes);
        };

        return finder_el;
      }

      function search() {
        var str = $('search').value
          , links = $('files').all('a');

        links.each(function(link){
          var text = link.textContent;

          if ('..' == text) return;
          if (str.length && ~text.indexOf(str)) {
            link.addClass('highlight');
          } else {
            link.removeClass('highlight');
          }
        });
      }