import React from 'react'
import {AppBar, Toolbar, styled} from '@mui/material'

const Container = styled(AppBar)`
     background: #060606;
     height: 9vh
`

const img_address =
  "https://cdn.dribbble.com/users/348324/screenshots/18153018/dribbble-solo-4c.png?compress=1&resize=400x300"; 

const Header = () => {
  return (
    <Container position='static'>
      <Toolbar disableGutters={true}>
        <img src={img_address} style={{margin:'0', height:'9vh' ,padding: '10px 0px'}} alt="logo"/>
      </Toolbar>
    </Container>
  );
}

export default Header