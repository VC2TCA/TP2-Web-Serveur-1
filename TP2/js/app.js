function login() {
    const username = document.getElementById("inputInput3").value;
    const password = document.getElementById("inputPassword3").value;

    if (username === "admin" && password === "12345") {
        localStorage.setItem(username, password);
        window.location.href = 'equipe.html';
    } else {
        document.getElementById("errorMessage").style.display = 'block';
    }
}

function loadMe() {
    document.getElementById("me").style.display = 'block';
    navigator.geolocation.getCurrentPosition(affichPosition);

    function affichPosition(position) {
        document.getElementById("lat").innerHTML = "Latitude : " + navigator.coords.latitude;
        document.getElementById("lon").innerHTML = "Longitude : " + position.coords.longitude;
    }
}

function addTeammates() {
    let nbEquipier = document.getElementById("nbPers").value;

    let conteneur = document.getElementById("conteneur");

    for (let x = 1; x <= nbEquipier; x++) {
        let image = document.createElement("img");
        let info = document.createElement("div");
        let nom = document.createElement("p");
        let lati = document.createElement("p");
        let longi = document.createElement("p");
        let col = document.createElement("td");
        col.id = "col" + x;
        image.id = x;
        image.src = "images/" + x + ".png";
        image.setAttribute("class", "border border-primary rounded");
        image.setAttribute("width", "182.4");
        image.setAttribute("height", "198.6");
        info.setAttribute("class", "border border-success rounded");

        switch (x) {
            case 1:
                nom.textContent = "Trump";
                lati.textContent = "Latitude = 48.545389";
                longi.textContent = "Longitude = -71.654857";
                break;
            case 2:
                nom.textContent = "Macron";
                lati.textContent = "Latitude = 48.419172";
                longi.textContent = "Longitude = -71.052653";
                break;
            case 3:
                nom.textContent = "Obamna";
                lati.textContent = "Latitude = 45.496180";
                longi.textContent = "Longitude = -73.569278";
                break;
            case 4:
                nom.textContent = "Poutine";
                lati.textContent = "Latitude = 45.425198";
                longi.textContent = "Longitude = -75.699824";
                break;
            case 5:
                nom.textContent = "Sylvain";
                lati.textContent = "Latitude = 48.858547";
                longi.textContent = "Longitude = 2.294481";
                break;
            case 6:
                nom.textContent = "Glen";
                lati.textContent = "Latitude = 48.365120";
                longi.textContent = "Longitude = -69.456032";
                break;
            case 7:
                nom.textContent = "Alexandre";
                lati.textContent = "Latitude = 48.601927";
                longi.textContent = "Longitude = -72.340822";
                break;
            case 8:
                nom.textContent = "Michel";
                lati.textContent = "Latitude = 48.891933";
                longi.textContent = "Longitude = -72.234483";
                break;
            case 9:
                nom.textContent = "Drake";
                lati.textContent = "Latitude = 49.278100";
                longi.textContent = "Longitude = -123.154804";
                break;
            case 10:
                nom.textContent = "Patrice";
                lati.textContent = "Latitude = -18.82086";
                longi.textContent = "Longitude = -15.91623";
                break;
        }
        conteneur.appendChild(col);
        col.appendChild(image);
        info.appendChild(nom);
        info.appendChild(lati);
        info.appendChild(longi);
        col.appendChild(info);
    }
}

function deleteTeam() {
    let conteneur = document.getElementById("conteneur");
    let nbEquipier = document.getElementById("nbPers").value;
    for (x = 1; x <= nbEquipier; x++) {
        conteneur.removeChild(conteneur.lastChild);
    }
}

function meetingPlace() {
    let rand = Math.floor(Math.random() * 10);
    let listNoms = ["Trump", "Macron", "Obama", "Poutine", "Sylvain", "Glen", "Alexandre", "Michel", "Drake", "Patrice"];

    alert("La réunion aura lieu chez " + listNoms[rand]);
}