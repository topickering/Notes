(function(exports) {
  var idCount = 0

  function Note(text) {
    this.text = text;
    this.id = idCount;
    idCount++;
  };

  exports.Note = Note;
})(this);


//consider adding a function which returns the 20 character substring
