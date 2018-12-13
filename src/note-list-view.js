(function(exports) {
  function NoteListView(nl) {
    this.noteList = nl;
  };

  NoteListView.prototype = {
    view: function() {
      return [
        this.noteList.notes.map(function(note) {
        return "<li><a href='#notes/" + note.id + "'>" + note.text.substring(0,20) + "</a></li>"
      }).join("")
    ].join("")
    }
  };

  exports.NoteListView = NoteListView
})(this);
