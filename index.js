let string = " ";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        e.target.style.backgroundColor = 'cyan';
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'Ac') {
            string = "";
            document.querySelector('input').value = string;

        } else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
});

document.getElementById("display").addEventListener("click", function () {
    document.getElementsByTagName("input")[0].value = "";
});

