var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not true");
    }
  }
};

function testNote() {
  var note = new Note('Hi');
  assert.isTrue(note.text === 'Hi');
};

testNote();
