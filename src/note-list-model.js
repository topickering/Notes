(function(exports){
  function NoteList() {
    this.notes = [];
    this.addNote = function addNote(text) {
      var note = new Note(text);
      this.notes.push(note);
    };
  };

  exports.NoteList = NoteList
})(this);
