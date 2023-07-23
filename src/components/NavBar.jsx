import React from 'react'

import {AppBar,Toolbar, styled} from '@mui/material'

import { NavLink } from 'react-router-dom'

const Header = styled(AppBar)`
    background: #111111;
`
const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right:10px;
    color:inherit;
    text-decoration:none;f
`

export default function NavBar() {
  return (
    <Header position='static' style={{margin:0}}>
        <Toolbar> 
            <Tabs to='/'>Home</Tabs>
            <Tabs to={"/all"}>All User</Tabs>
            <Tabs to={"/add"}>Add User </Tabs>
        </Toolbar>
    </Header>
  )
}
