
(function() {

 myTextArea = _('#editor-area'),
      btn =   _('#editor-control').getElementsByTagName('a'),
      editor = new Editor(myTextArea);
initCTL();
initSD();
startediting();

})();
