(function () {
    let screen = document.querySelector(".textinputid");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".button1C");
    let equal = document.querySelector(".button1E");

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function (e) {
        if (screen.value == '') {
            screen.value = "";

        }
        else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });

    clear.addEventListener('click', function (e) {

        screen.value = "";

    })

    btnr.addEventListener('mouseover', function () {
        document.getElementById('btnr').style.backgroundColor = "red";
    })

    btnr.addEventListener("mouseout", function () {
        document.getElementById('btnr').style.backgroundColor = "yellow"
    })

})();


