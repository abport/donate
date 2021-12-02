function copyToClipboard(text) {
  const elem = document.createElement("textarea");
  var theText = document.getElementById(text).textContent;
  elem.value = theText;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
  alert("Copied to Clipboard");
}
