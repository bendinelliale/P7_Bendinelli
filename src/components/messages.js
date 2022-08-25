import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
const helloUser = sessionStorage.getItem('UserName');
let lastMaxId;

function DataFetching() {
	const [posts, setPosts] = useState ([])

	  // Update max ID view
	  function updateView() {
		axios('http://localhost:3001/api/posts/')
		.then(res => {
			let array = res.data;
			var res = Math.max.apply(Math,array.map(function(o){return o.id;}))
			sessionStorage.setItem("maxId", res)
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
						<p key={post.id}>Author: {post.UserName}</p>
						<p key={post.title}>Title: {post.title}</p>
						<p key={post.content}>{post.content}</p>
						<img src={post.imageUrl} max-width='300' alt="" />
						<button id="delete">Delete</button>
						<button id="comment">Comments</button>
					</div>
				))}
			<div id="messages">
				<a><button className="button is-success" onClick={updateView}>Archive messages</button></a>
			</div>
		</span>
	)
	}

	export default DataFetching
