/*///////////////////////////////////////
            contact form script
 ////////////////////////////////////// */

function sendEmail() {

    var Username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('phone').value;
    var maildes = document.getElementById('message').value

    var mailBody = "Name     :" + Username +
        "<br/> Phone    :" + number +
        "<br/> Email    :" + email +
        "<br/> Message  :" + maildes;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ti360109@gmail.com",
        Password: "0BE2DC5CDAB5E28B8A3DB3A0948332A6F5B2",
        From: "ti360109@gmail.com",
        To: '77webtech@gmail.com',
        Subject: "Touhidul360 contact form",
        Body: mailBody
    }).then(
        message => alert(message)
    );
}




/*///////////////////////////////////////
        News lettter form script
 ////////////////////////////////////// */

const scriptURL = 'https://script.google.com/macros/s/AKfycbwsls4EiIUH9w-WNnhgjAaf70JK0JZN1Es0UO23pEKKpBI9RrCR33roLAT-FBkuZr211g/exec'
const form = document.forms['submit-to-google-sheet']
const newslettermsg = document.getElementById('newslettermsg');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            newslettermsg.innerHTML = "Thanks for subscribe!"
            setTimeout(function () {
                newslettermsg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
