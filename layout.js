document.addEventListener('DOMContentLoaded', () => {
  const header = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold" href="index.html"><i class="bi bi-pie-chart-fill me-2"></i>FinViz</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="inflacija.html">Inflacija</a></li>
            <li class="nav-item"><a class="nav-link" href="nekretnine.html">Nekretnine</a></li>
            <li class="nav-item"><a class="nav-link" href="gdp.html">BDP</a></li>
            <li class="nav-item"><a class="nav-link" href="burza.html">Burza</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `;
  document.getElementById('header').innerHTML = header;
});
