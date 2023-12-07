function todosCallback(data) {
  const List = document.querySelector("ul");
  List.innerHTML = "";
  data.forEach((item) => {
    const title = document.querySelector("#title").value;

    const listItem = document.createElement("li");
    listItem.textContent = item.title;
    const delbtn = document.createElement("button");

    const Donebtn = document.createElement("button");
    const btnspan = document.createElement("span");
    delbtn.type = "button";
    Donebtn.type = "button";
    delbtn.textContent = "delete";
    Donebtn.textContent = "Done";
    List.appendChild(listItem);
    btnspan.appendChild(Donebtn);
    btnspan.appendChild(delbtn);
    listItem.appendChild(btnspan);
    document.querySelector("#title").value = "";

    Donebtn.addEventListener("click", function () {
      item.status = true;
      listItem.style.textDecoration = "line-through";
    });
    if (item.status == true) {
      listItem.style.color = "green";
    } else {
      listItem.style.color = "red";
    }
    delbtn.addEventListener("click", function () {
      listItem.style.display = "none";
      deleteData(item.id);
    });
    const RenameBtn = document.createElement("button");
    RenameBtn.type = "button";
    RenameBtn.textContent = "Rename";
    btnspan.appendChild(RenameBtn);

    RenameBtn.addEventListener("click", function () {
      const newTask = prompt("Enter the new task:");
      const newDescription = prompt("Enter a new description");
      if ((newTask === null || newTask === "") && newDescription === null) {
        alert("Enter a valid task.");
      } else {
        listItem.querySelector("span").previousSibling.textContent = newTask;
      }
    });
  });
}

function getdataCallback(resp) {
  resp.json().then(todosCallback);
}

function getData() {
  fetch("http://localhost:3000/todos", {
    method: "GET",
  }).then(getdataCallback);
}
getData();
function callback(resp) {
  resp.json().then(parsedResponse);
}

function parsedResponse(data) {
  console.log(data);
  getData();
}

function deleteData(id) {
  fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE",
  }).then(function (response) {
    if (response.ok) {
      console.log("Todo deleted");
      getData();
    } else {
      console.log("Failed to delete todo");
    }
  });
}

deleteData;

function fetchAndDisplayTodos() {
  let titleInput = document.querySelector("#title");
  let descriptionInput = document.querySelector("#description");

  let title = titleInput.value;
  let description = descriptionInput.value;

  fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  }).then(callback);

  titleInput.value = "";
  descriptionInput.value = "";
}

function updateData(id, newData) {
  fetch(`http://localhost:3000/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Todo updated");
        getData();
        console.log("Failed to update todo");
      }
    })
    .catch((error) => console.error("Error:", error));
}
