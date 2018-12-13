(function(exports){
  function NoteController(nl) {
    this.noteList = nl;
  };

  NoteController.prototype = {
    view: function() {
      var noteView = new NoteListView(this.noteList);
      return noteView.view();
    },

    changeText: function(text) {
      var element = document.getElementById('app');
      element.innerHTML = text;
    },

    addNote: function(text) {
      this.noteList.addNote(text);
    }
  };

  exports.NoteController = NoteController
})(this);
