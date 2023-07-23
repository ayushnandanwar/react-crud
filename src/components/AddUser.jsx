import { FormControl, FormGroup, InputLabel, Typography, Input, Button , styled} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
import {addUser} from '../service/api'

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

export default function AddUser() {
    const [user,setUser] = useState(initialValue);
    const navigate = useNavigate();
    const handleUser = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const addUserDetails = async (e)=>{
        await addUser(user)
        setUser({
            name:'',
            username:'',
            email:'',
            phone:''
        });
        navigate('/all');
    }
  return (
    <Container style={{border:'1px solid black',borderRadius:'35px',padding:'43px'}}>
        <Typography variant='h3'> Add User </Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={handleUser} name="name"/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={handleUser} name='username'/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={handleUser} name='email'/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={handleUser} name='phone'/>
        </FormControl>
        <FormControl >
            <Button onClick={addUserDetails} variant='contained'>
                Add User
            </Button>
        </FormControl>
    </Container>
  )
}
