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

    else if (selectedOption.value === 'yellow') {
        document.body.style.backgroundColor = "#efca66";
    }

    else if (selectedOption.value === 'grey') {
        document.body.style.backgroundColor = "#909cac";
    }

    else if (selectedOption.value === 'brown') {
        document.body.style.backgroundColor = "#a47053";
    }

    else if (selectedOption.value === 'purple') {
        document.body.style.backgroundColor = "#bb99b7";
    }

    else { alert('ALERT-ALERT!') }

}