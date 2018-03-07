function getId() {
  var testname = "blank";
  if (document.getElementById("name").value == null) {
    testname = document.getElementById("name").value;
  }
  window.alert(testname);
}