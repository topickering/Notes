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
      document.getElementById('app').innerHTML = text;
    },

    addNote: function(text) {
      this.noteList.addNote(text);
    }
  };

  exports.NoteController = NoteController
})(this);

var nl = new NoteList();
var nlc = new NoteController(nl);
nlc.addNote('Is it working');
nlc.addNote('I think it is');
nlc.addNote('Will it cut supercalifragilistic?')
console.log(document.getElementById('app'));
nlc.changeText(nlc.view());
