import './navbar.css';
const Navbar = () => {
  return (
    <nav class="navbar w-100 navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between px-5" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Guides</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Flights</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <button className='btn border-dark border-3 fw-bold'>Contact Us</button>

      </div>
    </nav>
  );
}

export default Navbar;
