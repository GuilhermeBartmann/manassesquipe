/**
 * Arquivo principal de JavaScript para o site Manassés
 */

document.addEventListener('DOMContentLoaded', function() {
  // ===== Funções para o Modal =====
  const saibaMaisBtn = document.getElementById('saibaMaisBtn');
  const saibaMaisModal = document.getElementById('saibaMaisModal');
  const fecharModalBtn = document.getElementById('fecharModalBtn');

  if (saibaMaisBtn && saibaMaisModal && fecharModalBtn) {
    // Abre o modal
    saibaMaisBtn.addEventListener('click', function() {
      saibaMaisModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });

    // Fecha o modal com o botão
    fecharModalBtn.addEventListener('click', function() {
      saibaMaisModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    });

    // Fecha o modal clicando fora
    saibaMaisModal.addEventListener('click', function(event) {
      if (event.target === saibaMaisModal) {
        saibaMaisModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // ===== Funcionalidade para o vídeo =====
  const videoPlaceholder = document.getElementById('videoPlaceholder');
  const videoFrame = document.getElementById('videoFrame');

  if (videoPlaceholder && videoFrame) {
    videoPlaceholder.addEventListener('click', function() {
      // Para vídeos do YouTube (substitua o ID do vídeo)
      videoFrame.src = "assets/videos/Manassés.mp4";
      
      // Para vídeos hospedados localmente (descomente esta linha e comente a de cima)
      // videoFrame.src = "assets/videos/seu-video.mp4";
      
      videoFrame.classList.remove('hidden');
      videoPlaceholder.classList.add('hidden');
    });
  }

  // ===== Animação de entrada para seções =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

  // Observe todas as seções para animação
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
});
