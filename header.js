let header = document.getElementsByTagName('header')[0];
header.innerHTML=`
<marquee behavior="alternate" direction="right" vspace="25%" class="break">
    <a href="batch-04.html" target="blank">Batch-04 Registration is open!</a>
</marquee>

<nav class="navbar navbar-expand-lg">
<div class="container">
  <a class="navbar-brand" href="index.html">
    <img src="img/logo/3.png" alt="logo" width="64px">
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about.html">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Courses
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">All Courses</a></li>
          <li><a class="dropdown-item" href="basic-c.html">Competitive Programming Basic With C</a></li>
          <li><a class="dropdown-item" href="#">Competitive Programming Beginner (C++) </a></li>
          <li><a class="dropdown-item" href="#">Data Structure (Upcomming) </a></li>
          <li><a class="dropdown-item" href="#">Web Development Basic (Upcomming)</a></li>
        </ul>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Batches
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="batch-01.html">Batch-01 (CP Basic)</a></li>
          <li><a class="dropdown-item" href="batch-02.html">Batch-02 (CP Basic)</a></li>
          <li><a class="dropdown-item" href="batch-03.html">Batch-03 (CP Basic)</a></li>
          <li><a class="dropdown-item" href="batch-04.html">Batch-04 (CP Basic) (Running)</a></li>
          <li><a class="dropdown-item" href="#">Batch-01 (CP Beginner) (Running)</a></li>
        </ul>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="signup.html">Sign Up</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="signin.html">Sign In </a>
      </li>
    </ul>
  </div>
</div>
</nav>


`
