import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Comments from '../comments/Comments';
const helloUser = sessionStorage.getItem('UserName');
let lastMaxId;


function DataFetching() {
	const [posts, setPosts] = useState ([])
const deleteMessages =(id, e)=>{
	const access_token = sessionStorage.getItem('token');
    axios.delete("http://localhost:3001/api/posts/"+id,{
		headers: {
			'Authorization': `Bearer ${access_token}`
		  }
	})
      .then(res => {
        console.log(res);
        alert(res.data.message);
  
        //const post = posts.filter(item => item.id !== id);
       // setPosts( post );
	   updateView()
      })
  
  }

	  // Update max ID view
	  function updateView() {
		const access_token = sessionStorage.getItem('token');
		axios.get('http://localhost:3001/api/posts/' ,{headers: {
			'Authorization': `Bearer ${access_token}`
		  }})
		
		.then(resposne => {
			let array = resposne.data;
			var res = Math.max.apply(Math,array.map(function(o){return o.id;}))
			sessionStorage.setItem("maxId", res)
			setPosts(resposne.data)
			})
		const userId = sessionStorage.getItem('UserId');
		const maxId = sessionStorage.getItem('maxId'); 
		axios
		  .post(`http://localhost:3001/api/users/updateView/${userId}`, {
			postView: maxId,
		  })
		  .then((response) => {	  });
	  }

	useEffect(() => {

		// Get ID view
		const userId = sessionStorage.getItem('UserId'); 
		const token = sessionStorage.getItem('token'); 
		axios
		.get(`http://localhost:3001/api/users/${userId}`)
		.then(res => {
			lastMaxId = res.data.postView;
		})
		.catch(err => {
			console.log(err)
		})

		// Get data for messages
		axios('http://localhost:3001/api/posts',{
			headers:{
				'Authorization' : `Bearer `+token
			}
		})
			.then(res => {
				const messages = res.data;
				const getLastestPost = (lastMaxId, array) => {
					let arr =[];
					for (let index = lastMaxId; index < array.length; index++) {
						console.log(array[index]);
						arr.push(array[index]);
					}
					console.log(array);
					return arr;
				}
				let newData = getLastestPost(lastMaxId, messages);
				setPosts(messages);
				console.log(lastMaxId);
			})
			.catch(err => {
				console.log(err)
			})

	}, [])

	return (
		<span>
			<div id="messages">
				<p>Hi {helloUser}, thank you for logging in !!</p><br></br>
				<p><a href="/newpost"><button className="button is-success">New message</button></a>  <a href="/archive"><button className="button is-success">Check archive</button></a></p>
			</div>

				{posts.map(post => (
					<div id="messages" key={post.id}>
						<p >Author: {post.UserName}</p>
						<p >Title: {post.title}</p>
						<p >{post.content}</p>
						<img src={post.imageUrl} max-width='300' alt="" />
						<button id="delete" onClick={()=>deleteMessages(post.id)}>Delete</button>
						<Comments postId={post.id} />
					</div>
					 
				))}
			<div id="messages">
				<a><button className="button is-success" onClick={updateView}>Archive messages</button></a>
			</div>
		</span>
	)
	}

	export default DataFetching
