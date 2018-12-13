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

function testNoteListArray() {
  var noteList = new NoteList();
  assert.isTrue(noteList.notes.length === 0);
};

function testNoteListAddNote() {
  var noteList = new NoteList();
  noteList.addNote('Test');
  assert.isTrue(noteList.notes.length === 1);
  assert.isTrue(noteList.notes[0].text === 'Test');
};

testNoteListArray();
testNoteListAddNote();
