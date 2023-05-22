var index = 0;
//FUNCTIONS
function switchColor() {
  var colors = ["red", "blue", "orange", "pink", "yellow", "green", "purple"];

  document.getElementsByTagName("body")[0].style.background = colors[index++];

  if (index > colors.length - 1) {
    return (index = 0);
  }
}
