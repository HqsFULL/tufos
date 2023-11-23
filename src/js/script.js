document.addEventListener('DOMContentLoaded', function () {
    const coverContainer = document.getElementById('coverContainer');
    const covers = document.querySelectorAll('.cover');
    const groupSize = 1;
    let currentIndex = 0;

    function showCoverGroup() {
        const start = currentIndex * groupSize;
        const end = start + groupSize;

        for (let i = 0; i < covers.length; i++) {
            covers[i].style.display = (i >= start && i < end) ? 'block' : 'none';
        }
    }

    function nextGroup() {
        currentIndex = (currentIndex + 1) % Math.ceil(covers.length / groupSize);
        showCoverGroup();
    }

    function prevGroup() {
        currentIndex = (currentIndex - 1 + Math.ceil(covers.length / groupSize)) % Math.ceil(covers.length / groupSize);
        showCoverGroup();
    }

    // Inicializa a exibição do primeiro grupo
    showCoverGroup();

    // Adicione event listeners para os botões de navegação.
    document.querySelector('.next').addEventListener('click', nextGroup);
    document.querySelector('.prev').addEventListener('click', prevGroup);

    // Ou adicione um temporizador para rolar automaticamente:
    // setInterval(nextGroup, 5000); // Rola a cada 5 segundos (ajuste conforme necessário)
});
