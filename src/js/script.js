document.addEventListener('DOMContentLoaded', function () {
    const coverContainer = document.getElementById('coverContainer');
    const covers = document.querySelectorAll('.cover');
    const groupSize = getGroupSize(); // Obtém o tamanho do grupo com base no tamanho da tela
    let currentIndex = 0;

    function getGroupSize() {
        // Determine o número de capas visíveis com base na largura da tela
        return window.innerWidth >= 768 ? 3 : 1;
    }

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

    // Adicione event listeners para os botões de navegação.
    document.querySelector('.next').addEventListener('click', nextGroup);
    document.querySelector('.prev').addEventListener('click', prevGroup);

    // Ou adicione um temporizador para rolar automaticamente:
    // setInterval(nextGroup, 5000); // Rola a cada 5 segundos (ajuste conforme necessário)

    // Inicializa a exibição do primeiro grupo
    showCoverGroup();

    // Adicione um event listener para ajustar a exibição ao redimensionar a tela
    window.addEventListener('resize', function() {
        // Atualiza o tamanho do grupo ao redimensionar a tela
        const newGroupSize = getGroupSize();

        // Se o tamanho do grupo mudou, reexiba o grupo
        if (newGroupSize !== groupSize) {
            groupSize = newGroupSize;
            showCoverGroup();
        }
    });
});
