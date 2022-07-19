import '../css/styles.css';
import axios from 'axios'
import { Navigate} from 'react-router-dom';
import GmLogo from '../img/gm-icon-left.webp';

const access_token = sessionStorage.getItem('token');
const helloUser = sessionStorage.getItem('UserName');

function logout(){
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('UserId');
  sessionStorage.removeItem('UserName');
    sessionStorage.removeItem('UserEmail');
      sessionStorage.removeItem('history');
  window.location="/login";
}

const deleteAccount=()=>{
  const userId = sessionStorage.getItem('UserId'); 
  axios.delete(`http://localhost:3000/api/users/${userId}`, {
    headers: {
      'Authorization': `token ${access_token}`
    },
    data: { }
    });
    sessionStorage.removeItem('token');
   sessionStorage.removeItem('UserId');
   sessionStorage.removeItem('UserName');
     sessionStorage.removeItem('UserEmail');
       sessionStorage.removeItem('history');
}

function Head(){
    if(!sessionStorage.getItem('token') ){
        
        return <Navigate to={"/login"} />;
    }   
    return(


<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img src={GmLogo} width="168" height="42" />
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">

 <div className="navbar-end">
 <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Welcome {helloUser}
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item button is-danger is-inverted" onClick={logout}>Log out</a>
          <a className="navbar-item button is-danger is-inverted" onClick={deleteAccount}>Delete account</a>
        </div>
      </div>
    </div>
    </div>

</nav>

    )
}
export default Head