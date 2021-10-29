function validateForm() {
    let name = document.forms["web-form"]["name"].value;
    let question = document.forms["web-form"]["msg"].value;
    let contact = document.forms["web-form"]["contact"].value;
    alert("¡Gracias " + name + "!, tu mensaje: '" + question + "' - Fue recibido con éxito, intentaremos responderte lo antes posible a: " + contact);
}

function validateForm2() {
    let precio = 0;
    let name = document.forms["web-form2"]["articles"].value;
    if (name == "tarjetas") {
        precio += 5;
    } else if (name == "facturas") {
        precio += 4;
    } else {
        precio += 6;
    }
    let amount = document.forms["web-form2"]["amount"].value;

    alert("El precio de " + amount + " " + name + " es de: " + precio * amount);
}