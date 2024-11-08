function copyToClipboard(id) {
  var copyText = document.getElementById(id).textContent;
  navigator.clipboard.writeText(copyText).then(function () {
    var toastEl = document.getElementById('copyToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
  }, function (err) {
    console.error('Could not copy text: ', err);
  });
}