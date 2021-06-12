fetch("./button.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("button1").innerHTML = data;
        document.querySelector("button2").innerHTML = data;
        document.querySelector("button3").innerHTML = data;

    });

