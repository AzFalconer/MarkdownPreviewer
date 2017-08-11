$(document).ready(function() {
  //Variables
  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    langPrefix: "language-",
    highlight: function(code, lang) {
      if (lang === "js") {
        return highlighter.javascript(code);
      }
      return code;
    }
  });
  //Listen
  $("#userText").on('input change keyup',function() {updateView();});
  //Execute
  $("#userText").html("# Hello\n---\n"); updateView();
  //Functions
  function updateView() {
    var input = $("#userText").val();
    $("#markedText").html(marked(input));
  }
});
