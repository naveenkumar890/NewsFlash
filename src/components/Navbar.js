import React from 'react'

export default function Navbar() {
    return(

        <>
    <nav className="navbar bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand mx-5"href="/"><h1>Today's Top Stories</h1></a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button type="submit" class="btn btn-dark">submit</button>
    </form>
  </div>
</nav>
    </>
    );
}
