
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import Container from '@mui/material/Container'

export default function Header() {
  return (
    <AppBar position="static" sx={{backgroundColor:'white', boxShadow:2}}>
         <Container>
          <Toolbar className='px-0' sx={{minHeight:'auto'}}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                height: {xs:'48px', sm:'64px'},
                minHeight:'auto',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Image alt='Logo' sizes="100vw" width={0} height={0} style={{width:'auto', height:'100%', display:'block'}} src={process.env.pathImage+'logo-web2.png'} />

            </Typography>
              <Typography variant="h5" color="inherit" component="div" sx={{fontSize: {xs: '1.1rem', sm:'1.3rem'}, marginTop:'7px', fontWeight:'600', marginLeft:'-7px', color: '#000080', fontStyle: 'italic'}}>
                  tieudung247.com
              </Typography>
          </Toolbar>
        </Container>
      </AppBar>
  );
}