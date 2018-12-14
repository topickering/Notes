(function(exports){
  function NoteController(nl) {
    this.noteList = nl;

    this._setup()
  };

  NoteController.prototype = {

    view: function() {
      var noteView = new NoteListView(this.noteList);
      return noteView.view();
    },

    changeText: function(text) {
      document.getElementById('app').innerHTML = text;
    },

    addNote: function(text) {
      this.noteList.addNote(text);
    },

    _setup: function() {
    var self = this

    window.addEventListener('submit', function() {
      event.preventDefault();
      self.noteList.addNote(event.target[0].value);
      self.changeText(self.view());
    }),

    window.addEventListener('hashchange', function() {
      var noteId = window.location.hash.split('/')[1];
      var note = self.noteList.findById(noteId);
      var noteView = new SingleNoteView(note);
      self.changeText(noteView.view())
    })
    }
  };

  exports.NoteController = NoteController
})(this);
//
// var nl = new NoteList();
// var nlc = new NoteController(nl);
// nlc.addNote('Is it working?');
// nlc.addNote('I think it is');
// nlc.addNote('Will it cut supercalifragilistic?')
// nlc.changeText(nlc.view());
