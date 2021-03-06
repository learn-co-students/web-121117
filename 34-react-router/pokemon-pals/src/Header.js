import React from 'react'


const Header = () => {
  return (
    <header className="nav-wrapper">
      <nav>
        <ul>
          <li><a href="/main">Home</a></li>
          <li><a href="/trainers">Trainers</a></li>
          <li>< a href="/pokemon">Pokemon</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
