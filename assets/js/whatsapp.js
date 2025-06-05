function sendToWhatsApp(event) {
    event.preventDefault();
    
   // Get form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
   // Create formatted message
    const mensaje = `Hola, deseo más información:
    
    *Nombre:* ${name}
    *Teléfono:* ${phone}
    *Mensaje:* ${message}`;

    // Encode message for URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // WhatsApp number (replace with real number)
    const numeroWhatsApp = '51958816944';
    
    // Create WhatsApp URL
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
   // Open in a new tab
    window.open(urlWhatsApp, '_blank');
    
    //Limpiar el contenido
    document.getElementById('contactForm').reset();
    
    return false;
}
