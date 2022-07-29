{       //collapsible timeline
    var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", collapseAnim());
}

function collapseAnim() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  }
}


{       // fun fact for music/instruments
    // notes that appear and move up, then when clicked, will stop all notes that appear
    // display a screen for the fun fact, then button to close, 

}