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

function testNoteText() {
  var note = new Note('Hi');
  assert.isTrue(note.text === 'Hi');
};

function testNoteId() {
  var note = new Note('Hi');
  assert.isTrue(note.id === 0);
};

testNoteId();
testNoteText();
