(function(exports) {
  function SingleNoteView(note) {
    this.note = note
  };

  SingleNoteView.prototype = {
    view: function() {
      return [
        "<a href='#home'>Home</a>",
        "<br>", "<br>", "<br>",
      '<div>' + this.note.text + '</div>'
    ].join("")
    }
  };

  exports.SingleNoteView = SingleNoteView
})(this);
