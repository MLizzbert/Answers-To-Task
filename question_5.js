'use strict';
const window = require("window");

function Edit(type, position, text) {
  this.type = type;
  this.position = position;
  this.text = text;
}

var ADD = 'add';
var DELETE = 'delete';

var textAreaEditsMap = {};

var cursorStart = -1;
var cursorEnd = -1;
var currentEdit = null;
var deleteOffset = 1;

window.addEventListener('load', function() {
  var textareas = document.getElementsByClassName('text-editable');

  for (var i = 0; i < textareas.length; ++i) {
    var textarea = textareas.item(i);
    var id = textarea.getAttribute('id');

    textAreaEditsMap[id] = [];
    textarea.addEventListener('mouseup', handleMouseUp);
    textarea.addEventListener('keydown', handleKeyDown);
    textarea.addEventListener('keypress', handleKeyPress);
  }
});

function handleMouseUp(event) {
  cursorStart = this.selectionStart;
  cursorEnd = this.selectionEnd;
  currentEdit = null;
}
function handleKeyDown(event) {

    cursorStart = this.selectionStart;
    cursorEnd = this.selectionEnd;
  
    if (event.keyCode >= 35 && event.keyCode <= 40) { // detect cursor movement keys
      currentEdit = null;
    }
  
    // deleting text
    if (event.keyCode === 8 || event.keyCode === 46) {
      if (currentEdit != null && currentEdit.type !== 'delete') {
        currentEdit = null;
      }
  
      if (cursorStart !== cursorEnd) { // Deleting highlighted text
        var edit = new Edit(DELETE, cursorStart, this.innerHTML.substring(cursorStart, cursorEnd));
        textAreaEditsMap[this.getAttribute('id')].push(edit);
        currentEdit = null;

    } else if (event.keyCode === 8) { // backspace
      if (currentEdit == null) {
        deleteOffset = 1;
        var edit = new Edit(DELETE, cursorStart, this.innerHTML[cursorStart - 1]);
        textAreaEditsMap[this.getAttribute('id')].push(edit);
        currentEdit = edit;
      } else {
        ++deleteOffset;
        currentEdit.text = this.innerHTML[cursorStart - 1] + currentEdit.text;
      }

    } else if (event.keyCode === 46) { // delete
      if (currentEdit == null) {
        deleteOffset = 1;
        var edit = new Edit(DELETE, cursorStart, this.innerHTML[cursorStart]);
        textAreaEditsMap[this.getAttribute('id')].push(edit);
        currentEdit = edit;

      } else {
        currentEdit.text += this.innerHTML[cursorStart + deleteOffset++];
      }
    }
  }

  console.log(textAreaEditsMap)
}

//function handleKeyPress(event) {
