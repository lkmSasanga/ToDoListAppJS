var i = 0;
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    console.log(inputValue);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
        //remove below
    //   document.getElementById("myItem").appendChild(li);

    var ul = document.getElementById("myItem");

    var button1 = document.createElement("button");
    button1.id = "item-button";
    button1.innerHTML = "Done";

    var button2 = document.createElement("button");
    button2.id = "item-button";
    button2.className = "close-button";
    button2.innerHTML = "X";
    li.appendChild( button2);
    li.appendChild( button1);

    li.setAttribute("id","item-name");
    ul.appendChild(li);
    }
    document.getElementById("myInput").value = "";

function taskDone() {
    var doneTask = document.getElementById("item-name");
    document.write(doneTask.strike());
}
button1.onclick(taskDone());

}

function clearAll() {
    window.location.reload();
}
