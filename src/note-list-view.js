(function(exports) {
  function NoteListView(nl) {
    this.noteList = nl;
  };

  NoteListView.prototype = {
    view: function() {
      return [
        this.noteList.notes.map(function(note) {
        return "<li>" + note.text + "</li>"
      })
    ].join('')
    }
  };

  exports.NoteListView = NoteListView
})(this);
