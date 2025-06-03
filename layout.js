document.addEventListener('DOMContentLoaded', () => {
  const header = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold" href="index.html"><i class="bi bi-pie-chart-fill me-2"></i>Dorian Miletić</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
         
        </div>
      </div>
    </nav>
  `;
  document.getElementById('header').innerHTML = header;
});
