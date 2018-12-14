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

function testSNVView() {
  var note = new Note('Test');
  var snv = new SingleNoteView(note);
  assert.isTrue(snv.view() == "<a href='#home'>Home</a><br><br><br><div>Test</div>");
};

testSNVView();
