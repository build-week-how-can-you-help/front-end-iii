
import axios from 'axios'

function usePost (kind,setData) {
let obj = "description_text=" + kind;
 //obj = JSON.stringify(obj)
 
  axios
    .post(`//50.62.56.186:8000/find`,obj,{
      headers:{
        // 'Authorization':`Barer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': "text/html; charset=utf-8"
     
      }
    })
    .then(res => {
        setData(res.data)
    }
    )
    .catch(err =>console.log(err))
}

export default usePost;
