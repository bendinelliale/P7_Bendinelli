import '../css/styles.css';
import React, { useState } from 'react'
import axios from "axios";
import GmLogo from '../img/gm-icon-left.webp';
import { useNavigate} from 'react-router-dom';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate  =  useNavigate ()
    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/users/register', {
                UserName: name,
                UserEmail: email,
                password: password,
                confPassword: confPassword
            
            })
            .then(res=>{
                alert('account created!');
                              navigate('/login')
            })
        }     
        catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }}
        
    }
    
 
    return (
        <section className="hero is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Register} className="box">
                            <img src={GmLogo} width="350" height="90" />
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Name"
                                            value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-warning is-fullwidth">Register</button>
                                </div>
                                <hr></hr>
							    <a href="/login"><div className="button is-success is-fullwidth">Login</div></a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Register