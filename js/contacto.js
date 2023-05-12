function enviarFormulario() {
            var correo = document.getElementById("correo")
            var firstName = document.getElementById("firstName")    
            
            
            if (correo.value == "" || firstName.value == "" ) {
				alert("Por favor, complete todos los campos obligatorios.");
				return;
			}
            alert("Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo lo antes posible.");
            window.location.href = "../index.html";
}


