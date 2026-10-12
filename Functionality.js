function addStudent() {
  let name = document.getElementById("name").value;

  if (name == "") {
    alert("Please enter a name");
    return;
  }

  let list = document.getElementById("studentList");

  let student = document.createElement("li");
  student.innerText = name;

  list.appendChild(student);

  document.getElementById("name").value = "";
}
