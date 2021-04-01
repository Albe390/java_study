// localStorage("number", 1);
// console.log(localStorage.getItem("number"));
// localStorage.removeItem("number");
// localStorage.clear();

window.addEventListener("DOMContentLoaded", function() {
    let checkbox = document.getElementById('remenberMe'),
        change = document.getElementById("change"),
        form = document.getElementsByTagName("form")[0];

    if (localStorage.setItem("isChecked") === "true") {
        checkbox.checked = true;
    }

    if (localStorage.setItem("bg") === "changed") {
        form.style.backgroundColor = "#ff4645";
    }
    checkbox.addEventListener('click', function() {
        localStorage.setItem("isChecked", true);


    });


    change.addEventListener('click', function() {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = "#ff4645";
    });
    let persone = {
        name: "jhon",
        age: 30,
        tech: ["mobile", 'notebook']

    }
    let seriaLizerPersone = JSON.stringify(persone);

    localStorage.setItem("jhon", seriaLizerPersone);

    console.log(JSON.parse(localStorage.setItem("jhon")));
});