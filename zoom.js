document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.menu-img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            const isZoomed = img.classList.contains('zoom');

            // Quitar zoom de todas
            images.forEach(i => i.classList.remove('zoom'));
            document.body.classList.remove('zoom-active');

            // Si no estaba ampliada, ampliarla
            if (!isZoomed) {
                img.classList.add('zoom');
                document.body.classList.add('zoom-active');
            }
        });
    });
});