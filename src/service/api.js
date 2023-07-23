import axios from 'axios';

const API_URI = 'http://127.0.0.1:3002/users';

const addUser = async (data)=>{
    try {
        return await axios.post(API_URI,data); 
    } catch (error) {
        alert("Error")
    }
}
const getUser = async ()=>{
    let data = await axios.get(API_URI);
    return data;
}
const getOneUser = async(id)=>{
    const user = await axios.get(API_URI + `/${id}`)
    return user;
}

const updateUser = async (data,id)=>{
    try {
        return await axios.put(API_URI + `/${id}`,data);
    } catch (err) {
        console.log("err");
    }
}

const deleteUser = async (id)=>{
    return await axios.delete(API_URI + `/${id}`)
}
export {addUser, getUser,getOneUser,updateUser,deleteUser};