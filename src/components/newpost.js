import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
const helloUser = sessionStorage.getItem('UserName');

function PopUpbox() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [imageUrl, setImageUrl] = useState('')

	const createPost = (e) => {
		e.preventDefault();
		
		let formData = new FormData
		formData.append(
			'imageUrl', imageUrl
		)
		formData.append(
			'imageUrl', imageUrl.name
		)
		formData.append(
			'UserName', helloUser
		)
		formData.append(
			'title', title
		)
		formData.append(
			'content', content
		)

		const access_token = sessionStorage.getItem('token');
		
		axios.post("http://localhost:3001/api/posts", formData,
		{
			headers: {
			  'Authorization': `Basic ${access_token}`
			}
		  })
			.then(
				(res) => {
					console.log('post created');

				})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
        <div id="messages">

		<div className="post-popup job_post">
			<div className="post-project">
				<h3>Create a post</h3>
				<div className="post-project-fields">
					<form method="post" encType="multipart/form-data" onSubmit={event => createPost(event)}>
						<div className="row">
							<div className="col-lg-12">
								<input type="text" name="title" placeholder="Title" onChange={event => setTitle(event.target.value)} />
							</div>

							<div className="col-lg-12">
								<textarea name="content" placeholder="content" onChange={event => setContent(event.target.value)}></textarea>
							</div>
							<div className="col-lg-12">
								<input type="file" name="imageuRL" placeholder="imageuRL" onChange={event => setImageUrl(event.target.files[0])}
									accept="image/png, image/jpeg, image/jpg, image/webp">
								</input>
							</div>
							<div className="col-lg-12">
								<ul>
									<li><button className="active" type="submit" value="post">Post</button></li>
								</ul>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>

		</div>
	)

}
export default PopUpbox