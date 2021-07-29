document.body.onload = function() {
    let addButton = document.getElementById('friend_add');
    addButton.style.backgroundColor = "green";
    addButton.disabled = true;
    addButton.addEventListener("click", function() {
        let inputField = document.getElementById('addAFriend');
        let listOffriends = document.createElement("li");
        listOffriends.innerHTML = inputField.value;
        document.getElementById('addFriend').appendChild(listOffriends);
        inputField.value = "";
        addButton.disabled = true;

    })
    let inputField = document.getElementById('addAFriend');
    inputField.addEventListener("keydown", function() {
        document.getElementById('friend_add').disabled = false;
    })

}