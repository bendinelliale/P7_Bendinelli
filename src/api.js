import axios from "axios";
const access_token = sessionStorage.getItem('token');
const helloUser = sessionStorage.getItem('UserName');
let config = {
  
    headers: {
      'Authorization': `Bearer ${access_token}`
      }
  
}
export const getComments = async (id) => {
    return axios.get('http://localhost:3001/api/comments/'+id,config).then(res=>{
      return res.data
    })
  };
  
  export const createComment = async (text, parentId = null) => {
    let formData = new FormData
		
		
		formData.append(
			'UserName', helloUser
		)
		formData.append(
			'title', 'comment'
		)
		formData.append(
			'content', text
		)
		formData.append(
			'postId', parentId
		)
    return axios.post('http://localhost:3001/api/comments/',formData,config).then(res=> res.data)
    
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async (id) => {
    return axios.delete('http://localhost:3001/api/comments/'+id,config).then(res=> res.data)
  };