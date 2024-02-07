function togglePopup() {
    var popup = document.getElementById("popupContainer");
    if (popup.style.right === "-400px") {
        popup.style.right = "0";
    } else {
        popup.style.right = "-400px";
    }
}
document.getElementById('nameForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var userName = document.getElementById('nameInput').value;
    if (userName === "") {
        document.getElementById('user-name').innerHTML = '<p style="text-decoration:none;color:black;"> Seja Bem-Vindo!</p>';
        document.getElementById('nameForm').style.display = 'none';
    }
    else {
        document.getElementById('user-name').innerHTML = '<p style="text-decoration:none;color:black;"> Seja Bem-Vindo, ' + userName + '!</p>';
        document.getElementById('nameForm').style.display = 'none';
    }
});