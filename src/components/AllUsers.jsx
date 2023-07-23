import React,{useState,useEffect} from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow,styled, Button } from '@mui/material'
import { getUser,deleteUser } from '../service/api'
import { Link } from 'react-router-dom'

const StyledTable = styled(Table)`
  width:90%;
  margin: 80px auto;
  border:1px solid black;
`
const Thead = styled(TableRow)`
  background:black;
  & > th{ 
    color:white;
    font-size:20px; 
  } 
` 
const Tbody = styled(TableRow)`
  & > td{
    font-size:20px;
  }
`

export default function AllUsers() {
  const [user, setUser] = useState([]);
  const getUserDetails = async ()=>{
    let res = await getUser();
    setUser(res.data)
  }
  useEffect(() => {
    getUserDetails()
  },[]);
  return (
    <>

    <StyledTable >
        <TableHead>
          <Thead>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Operation</TableCell>
          </Thead>
        </TableHead>
        <TableBody>
        {user.map((val)=>{
          return (<Tbody key={val.id}>
              <TableCell>{val.id}</TableCell>
              <TableCell>{val.name}</TableCell>
              <TableCell>{val.username}</TableCell>
              <TableCell>{val.email}</TableCell>
              <TableCell>{val.phone}</TableCell>
              <TableCell>
                <Button variant='contained' style={{margin:"10px"}} component={Link} to={`/edit/${val.id}`} >Edit</Button>
                <Button variant='contained' color='secondary' onClick={async ()=>{
                  await deleteUser(val.id)
                  getUserDetails()
                }} >Delete </Button>
              </TableCell>
          </Tbody>)
        })}
        
        </TableBody>
    </StyledTable>
    </>
  )
}
