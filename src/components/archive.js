import React, { useState, useEffect } from 'react'
import axios from 'axios'
const helloUser = sessionStorage.getItem('UserName');


function DataFetching() {

	const [posts, setPosts] = useState ([])

	useEffect(() => {
		//Get data for messages
		const access_token = sessionStorage.getItem('token');
		axios.get("http://localhost:3001/api/posts/",{
			headers: {
				'Authorization': `Basic ${access_token}`
			  }
		})
			.then(res => {
				setPosts(res.data)
			})
			.catch(err => {
				console.log(err)
			})

	}, [])


	return (
		<span>
				{posts.map(post => (
			<div id="messages">
				<p key={post.id}>Author: {post.UserName}</p>
				<p key={post.title}>Title: {post.title}</p>
				<p key={post.content}>Title: {post.content}</p>
				<img src={post.imageUrl} max-width='300' alt="" />
			</div>
		))}
		</span>

	)
	}

	export default DataFetching
