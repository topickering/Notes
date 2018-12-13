(function(exports) {
  var idCount = 0

  function Note(text) {
    this.text = text;
    this.id = idCount;
    idCount++;
  };

  exports.Note = Note;
})(this);
