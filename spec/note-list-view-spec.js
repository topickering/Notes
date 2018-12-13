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
   var nlv = new NoteListView();
   nlv.noteList.addNote('Test')
   assert.isTrue(nlv.noteList.notes[0].text === 'Test');
};

function testListFunction() {
  var nlv = new NoteListView();
  nlv.noteList.addNote('Test');
  assert.isTrue(nlv.list() === '<li>Test</li>');
};

testNoteListView();
testListFunction();
