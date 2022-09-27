
function NavMax() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <a class="navbar-brand" href="#!">Navbar scroll</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#!">Inicio</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
            );
}

export default NavMax