function togglePopup() {
    var popup = document.getElementById("popupContainer");
    if (popup.style.right === "-400px") {
        popup.style.right = "0";
    } else {
        popup.style.right = "-400px";
    }
}
document.getElementById('nameForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    var userName = document.getElementById('nameInput').value; // Obtém o nome inserido
    if (userName === "") {
        document.getElementById('user-name').innerHTML = '<a href="#" style="text-decoration:none;color:black;"> Seja Bem-Vindo!</a>';
        document.getElementById('form-container').style.display = 'none';
    }
    else {
        document.getElementById('user-name').innerHTML = '<a href="#" style="text-decoration:none;color:black;"> Seja Bem-Vindo, ' + userName + '!</a>'; // Insere o nome na barra de navegação
        document.getElementById('form-container').style.display = 'none'; // Esconde o formulário após o envio
    }
});
/*window.addEventListener("beforeunload" , event=>{
    event.preventDefault();
    event.returnValue = '';
})*/
import './style.css'
const scrollers = document.querySelectorAll('.scroller');

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerInnerContent = Array.from(scrollerInner.children);

        scrollerInnerContent.forEach(item => {
            const dupilcatedItem = item.clodeNode(true)

            dupilcatedItem.setAttribute('aria-hidden', true)

            scrollerInner.appendChild(dupilcatedItem)
        })
    })
}