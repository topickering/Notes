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
    var nl = new NoteList()
    nl.addNote('Test')
   var nlv = new NoteListView(nl);
   assert.isTrue(nlv.noteList.notes[0].text === 'Test');
};

function testViewFunction() {
  var nl = new NoteList()
  nl.addNote('Test')
  var nlv = new NoteListView(nl);
  assert.isTrue(nlv.view() === '<li>Test</li>');
};

testNoteListView();
testViewFunction();
