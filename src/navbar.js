const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Grupomania</h1>
            <div className="links">
    <a href="/">Home</a>
    <a href="/">Search</a>
    <a href="/" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Log In</a>
    <a href="/" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Sign Up</a>
            </div>
        </nav>
     );
}
 
export default Navbar;