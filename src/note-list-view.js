(function(exports) {
  function NoteListView() {
    this.noteList = new NoteList();
  };

  NoteListView.prototype = {
    list: function() {
      return [
        this.noteList.notes.map(function(note) {
        return "<li>" + note.text + "</li>"
      })
    ].join('')
    }
  };

  exports.NoteListView = NoteListView
})(this);
