fetch("./header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("animation").innerHTML = data;


    });

