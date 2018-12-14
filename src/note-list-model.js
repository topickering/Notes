(function(exports){
  function NoteList() {
    this.notes = [];
    };

    NoteList.prototype = {
      addNote: function(text) {
        if (text !== "") {
          var note = new Note(text);
        this.notes.push(note);
      }
    },

    findById: function(id) {
      return this.notes.find(function(note) {
        return note.id == id;
      })
    }
  };

  exports.NoteList = NoteList
})(this);
