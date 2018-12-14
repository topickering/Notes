var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not true");
    }
    else {
      console.log('Assertion passed:' + assertionToCheck + ' is true');
    }
  }
};

function testNoteListView() {
    var nl = new NoteList();
    nl.addNote('Test');
   var nlv = new NoteListView(nl);
   assert.isTrue(nlv.noteList.notes[0].text === 'Test');
};

function testViewLength() {
  var nl = new NoteList();
  nl.addNote('this is a long string');
  var nlv = new NoteListView(nl);
  assert.isTrue(nlv.view() === "<form><textarea rows=4 cols=50></textarea><p><input type='submit'></input></p></form><li><a href='#notes/4'>this is a long strin</a></li>")
};

testNoteListView();
testViewLength();
