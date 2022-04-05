email = document.querySelector('#email').value
imeInPriimek = document.querySelector('#name').value
phone = document.querySelector('#phone').value
date = document.querySelector('#date').value
sporocilo = document.querySelector('#sporocilo').value

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "klemen.brecko@gmail.com",
        Password: "prqkbcscubxvjwcb",
        To: "klemen.brecko@gmail.com",
        From: email,
        Subject: "Povpraševanje iz spletne strani",
        Body: `${imeInPriimek} je poslal sporocilo: ${sporocilo}, telefonska številka je ${phone} in datum sporocila je ${date}`
    }).then((message) => alert("Sporočilo posredovano!!!"))
}