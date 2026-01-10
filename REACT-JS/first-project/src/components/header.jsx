import './header.css';

function Header(){
  return(
    <header className="Header">
       <div className="container">
        <div className="logo">
            <h2>Myapp</h2>
        </div>
        <nav className="nav">
            <a href="#home">Home</a>
            <a href="#About">About</a>
            <a href="#home">Home</a>
            <a href="#home">Home</a>
        </nav>
       </div>
    </header>
  )
}

export default Header;