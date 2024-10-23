document.addEventListener('DOMContentLoaded', (event) => {
    function mostrarQR() {
        const qrContainer = document.getElementById("qrContainer");

        if (qrContainer.style.display === "none") {
            qrContainer.style.display = "block"; // Muestra el código QR
        } else {
            qrContainer.style.display = "none"; // Oculta el código QR si ya está visible
        }
    }

    // Asigna la función al botón de compartir
    document.querySelector('.boton').onclick = mostrarQR;
});
