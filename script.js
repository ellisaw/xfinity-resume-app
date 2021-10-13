window.onload = function() {
  var frame = document.getElementById("page1");
  var frameHeight = frame.contentWindow.document.body.scrollHeight + 'px';
  console.log(frameHeight);
  setFrameHeight();

  function setFrameHeight() {
    console.log("hello");
    document.getElementById("page1-holder").style.height = "160px";
  }
}
