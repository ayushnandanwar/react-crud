import { FormControl, FormGroup, InputLabel, Typography, Input, Button , styled} from '@mui/material'
import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'

import { useState,useEffect } from 'react'
import {getOneUser, updateUser} from '../service/api'

const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto;
    & > div{
        margin-top:20px;
    }
`
const initialValue = {
    name:'',
    username:'',
    email:'',
    phone:''
}

export default function EditUser() {
    const [user,setUser] = useState(initialValue);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        getUserData();
    },[])
    const getUserData = async ()=>{
        let data = await getOneUser(id);
        setUser(data.data)
    }
    const handleUser = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const updateUserDetails = async (e)=>{
        await updateUser(user,id)
        navigate('/all');
    }
  return (
    <Container style={{border:'1px solid black',borderRadius:'35px',padding:'43px'}}>
        <Typography variant='h3'> Edit User </Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={handleUser} name="name" value={user.name}/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={handleUser} name='username' value={user.username}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={handleUser} name='email' value={user.email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={handleUser} name='phone' value={user.phone}/>
        </FormControl>

        <FormControl >
            <Button onClick={updateUserDetails} variant='contained'>
                Update User
            </Button>
        </FormControl>
    </Container>
  )
}
