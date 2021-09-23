/*Программа Солоденникова*/

function f() {

    var selection = document.getElementById("selection");
    var selectedOption = document.getElementById("color").options[document.getElementById("color").selectedIndex];
    selection.textContent = "Вы выбрали: " + selectedOption.text;

    if (selectedOption.value === 'black') {
        document.body.style.backgroundColor = "#000000";
    }

    else if (selectedOption.value === 'red') {
        document.body.style.backgroundColor = "#AA0000";
    }

    else if (selectedOption.value === 'green') {
        document.body.style.backgroundColor = "#008000";
    }

    else if (selectedOption.value === 'blue') {
        document.body.style.backgroundColor = "#0000ff";
    }

    else if (selectedOption.value === 'white') {
        document.body.style.backgroundColor = "#ffffff";
    }

    else { alert('Ты даун') }

}
