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

function testViewFunction() {
  var nl = new NoteList();
  nl.addNote('Test');
  var nlv = new NoteListView(nl);
  assert.isTrue(nlv.view() === "<li><a href='#notes/4'>Test</a></li>");
};

function testViewLength() {
  var nl = new NoteList();
  nl.addNote('this is a long string');
  var nlv = new NoteListView(nl);
  assert.isTrue(nlv.view() === "<li><a href='#notes/5'>this is a long strin</a></li>")
};

testNoteListView();
testViewFunction();
testViewLength();
