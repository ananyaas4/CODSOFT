function clr(val) {
  document.getElementById("d").value = val;
}

function del() {
  document.getElementById("d").value = document.getElementById("d").value.slice(0, -1);
}

function v(val) {
    document.getElementById("d").value += val;
}

function e() {
    try {
      clr(eval(document.getElementById("d").value));
    } 
    catch (e) {
      alert("Enter the valid input");
    }
}