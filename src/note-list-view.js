(function(exports) {
  function NoteListView(nl) {
    this.noteList = nl;
  };

  NoteListView.prototype = {
    view: function() {
      return [
        "<form>",
        "<textarea rows=4 cols=50></textarea>",
        "<p><input type='submit'></input></p>",
        "</form>",
        this.noteList.notes.map(function(note) {
        return "<li><a href='#notes/" + note.id + "'>" + note.text.substring(0,20) + "</a></li>"
        //consider refactoring out substring to a note function
      }).join("")
    ].join("")
    }
  };

  exports.NoteListView = NoteListView
})(this);
