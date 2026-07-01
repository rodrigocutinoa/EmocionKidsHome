document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita la recarga automática de la página

    // Captura de datos ingresados en el formulario
    const name = document.getElementById('name').value;
    const institution = document.getElementById('institution').value;
    const responseDiv = document.getElementById('formResponse');

    // Validación interna / Simulación de envío exitoso
    if(name && institution) {
        responseDiv.classList.remove('hidden');
        responseDiv.className = "form-message success";
        responseDiv.innerHTML = `¡Gracias por tu interés, ${name}! Hemos registrado tu solicitud para el establecimiento "${institution}". Un asesor pedagógico se comunicará contigo en menos de 24 horas hábiles.`;
        
        // Limpiar formulario
        document.getElementById('contactForm').reset();
    }
});