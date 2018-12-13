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

function testControllerAddNote() {
  var nl = new NoteList;
  var nlc = new NoteController(nl);
  nlc.addNote('test');
  assert.isTrue(nlc.noteList.notes[0].text === 'test');
};

function testControllerView() {
  var nl = new NoteList;
  var nlc = new NoteController(nl);
  nlc.addNote('test');
  assert.isTrue(nlc.view() === '<li>test</li>')
}

testControllerAddNote();
testControllerView();
