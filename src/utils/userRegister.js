import axios from "axios"

const userRegister = async(userInfo) => {
   const res = await  axios.post('https://job-task-server.onrender.com/api/v1/user/register', userInfo);
   return res;
}
export default userRegister;