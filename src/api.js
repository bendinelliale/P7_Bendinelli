import axios from "axios";
const access_token = sessionStorage.getItem('token');
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
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "John",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };