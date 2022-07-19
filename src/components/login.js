import axios from 'axios'
import React,{ useState } from 'react';
import GmLogo from '../img/gm-icon-left.webp';
function Login(){
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const[emailInvalid, setEmailInvalid] = useState('')
	const [passwordWarning, setPasswordWarning] = useState('')
	let UserId='';
	const re = /\S+@\S+\.\S+/g;

	const logIn =(e)=>{
		e.preventDefault();
		let data ={            
            email:email,
            password:password,       
        }
		 if(!re.test(email)){
			  setEmailInvalid(` Please provide a valid email `)			  
			}else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
			      setPasswordWarning('Please provide a password that contains minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
				}else{		
		axios.post("http://localhost:3001/api/users/login",data)
            .then(
                (res)=>{
                    sessionStorage.setItem("token", res.data.token)
					sessionStorage.setItem("UserId", res.data.userId)
					sessionStorage.setItem("UserName", res.data.userName)
					sessionStorage.setItem("UserEmail", res.data.userEmail)
					UserId = res.data.userId;
                    console.log(UserId);
                     
                     window.location="/";                
         
            })

            .catch((err)=>{
                            console.log(err);
            });	

	}
}

    return(
	<section className="hero is-fullheight is-fullwidth">
		<div className="hero-body">
			<div className="container">
				<div className="columns is-centered">
					<div className="column is-4-desktop">
						<form onSubmit={event => logIn(event)} className="box">
							<img src={GmLogo} width="350" height="90" />
							<div className="field mt-5">
								<label className="label">Email</label>
								<div className="controls">
									<input type="text" className="input" placeholder="Username" onChange={(e) => setEmail(e.target.value)} />
									<p>{emailInvalid}</p>
								</div>
							</div>
							<div className="field mt-5">
								<label className="label">Password</label>
								<div className="controls">
									<input type="password" className="input" placeholder="******" onChange={(e) => setPassword(e.target.value)} />
									<p>{passwordWarning}</p>
								</div>
							</div>
							<div className="field mt-5">
								<button className="button is-success is-fullwidth">Login</button>
							</div>
							<hr></hr>
							<a href="/register"><div className="button is-warning is-fullwidth">Register</div></a>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
)
}

export default Login