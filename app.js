window.addEventListener('load', function() {

// create a note-list model, with a // NOTE:
var noteList = new NoteList();

var controller = new NoteController(noteList)
//render teh list view

  var html = controller.view();
  controller.changeText(html);
})
